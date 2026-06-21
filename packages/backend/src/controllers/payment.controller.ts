import type { Request, Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import { getEnv } from "../utils/env";
import { publicWebUrl } from "../utils/url";
import { walletHoldToTutor } from "../services/wallet.service";
import { getSePayClient } from "../config/sepay";
import { createNotification, createNotifications } from "../services/notification.service";
import { notifyZaloAdmins, zaloFormat } from "../services/zaloAdmin.service";

const CreateQrSchema = z.object({
  appointmentId: z.string().min(1).max(36).optional(),
  topupId: z.coerce.number().int().positive().optional(),
});

// Payload SePay webhook (the article shows these fields)
const SePayWebhookSchema = z.object({
  id: z.number().int(),
  gateway: z.string(),
  transactionDate: z.string(),
  accountNumber: z.string().nullable().optional(),
  code: z.string().nullable().optional(),
  content: z.string().nullable().optional(),
  transferType: z.enum(["in", "out"]),
  transferAmount: z.number(),
  accumulated: z.number().optional(),
  subAccount: z.string().nullable().optional(),
  referenceCode: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
});

// Payload SePay Checkout/Order Webhook (when redirected using the checkout page)
const SePayOrderWebhookSchema = z.object({
  timestamp: z.number().int(),
  notification_type: z.string(),
  order: z.object({
    id: z.string(),
    order_id: z.string(),
    order_status: z.string(),
    order_currency: z.string(),
    order_amount: z.coerce.number(),
    order_invoice_number: z.string(),
    order_description: z.string().nullable().optional(),
  }),
  transaction: z.object({
    id: z.string(),
    payment_method: z.string(),
    transaction_id: z.string(),
    transaction_type: z.string(),
    transaction_date: z.string(),
    transaction_status: z.string(),
    transaction_amount: z.coerce.number(),
    transaction_currency: z.string(),
  }),
});

function buildQrUrl(params: {
  bank: string;
  acc: string;
  amount: number;
  des: string;
  template?: "" | "compact" | "qronly" | "standee";
  showInfo?: boolean;
  download?: boolean;
  fullAcc?: boolean;
  holder?: string;
  store?: string;
}) {
  const q = new URLSearchParams();
  q.set("bank", params.bank);
  q.set("acc", params.acc);
  q.set("amount", String(Math.round(params.amount)));
  q.set("des", params.des);
  if (params.template) q.set("template", params.template);
  if (params.showInfo !== undefined) q.set("showinfo", String(params.showInfo));
  if (params.download !== undefined) q.set("download", String(params.download));
  if (params.fullAcc !== undefined) q.set("fullacc", String(params.fullAcc));
  if (params.holder) q.set("holder", params.holder);
  if (params.store) q.set("store", params.store);
  return `https://qr.sepay.vn/img?${q.toString()}`;
}

const ESCROW_HOLD_DAYS = 3;
let banksCache: { data: any; expiresAt: number } | null = null;

function roundMoney(value: number) {
  return Math.round(value * 100) / 100;
}

function buildEscrowReleaseDate() {
  const releaseDate = new Date();
  releaseDate.setDate(releaseDate.getDate() + ESCROW_HOLD_DAYS);
  return releaseDate;
}

async function settleAppointmentsIntoEscrow(params: {
  db: any;
  appointmentId: string;
  refType: string;
  refId: string;
  requireUnpaid?: boolean;
}) {
  const [apptRows]: any = await params.db.query(
    `SELECT a.id, a.student_id, a.tutor_id, a.price_paid, a.payment_status,
            COALESCE(tp.commission_percent, 10.00) as commission_percent
     FROM appointments a
     JOIN tutor_profiles tp ON tp.user_id = a.tutor_id
     WHERE (a.id = ? OR a.parent_appointment_id = ?)
     FOR UPDATE`,
    [params.appointmentId, params.appointmentId]
  );

  if (!apptRows || apptRows.length === 0) {
    throw new Error("Appointment not found for payment");
  }

  if (params.requireUnpaid !== false) {
    const alreadyPaid = apptRows.find((appt: any) => appt.payment_status !== "UNPAID");
    if (alreadyPaid) {
      throw new Error("Lich hoc nay da duoc thanh toan hoac dang cho xu ly.");
    }
  }

  const releaseDate = buildEscrowReleaseDate();
  let totalAmount = 0;
  let totalCommission = 0;
  let totalTutorEarning = 0;

  for (const appt of apptRows) {
    const amount = Number(appt.price_paid || 0);
    const commissionPercent = Number(appt.commission_percent ?? 10);
    const commissionAmount = roundMoney(amount * (commissionPercent / 100));
    const tutorEarning = roundMoney(amount - commissionAmount);

    totalAmount += amount;
    totalCommission += commissionAmount;
    totalTutorEarning += tutorEarning;

    await params.db.query(
      `UPDATE appointments
       SET payment_status = 'HOLDING',
           status = 'CONFIRMED',
           commission_percent_snapshot = ?,
           commission_amount = ?,
           tutor_earning = ?,
           escrow_release_date = ?,
           escrow_released_at = NULL
       WHERE id = ?`,
      [commissionPercent, commissionAmount, tutorEarning, releaseDate, appt.id]
    );

    await walletHoldToTutor({
      tutorId: appt.tutor_id,
      amount: tutorEarning,
      refType: params.refType,
      refId: appt.id,
    }, params.db);
  }

  return {
    appointments: apptRows,
    studentId: apptRows[0].student_id,
    tutorId: apptRows[0].tutor_id,
    commissionPercent: Number(apptRows[0].commission_percent ?? 10),
    releaseDate,
    totalAmount: roundMoney(totalAmount),
    totalCommission: roundMoney(totalCommission),
    totalTutorEarning: roundMoney(totalTutorEarning),
  };
}

export async function createAppointmentQr(req: Request, res: Response) {
  const env = getEnv();
  if (!env.SEPAY_BANK_CODE || !env.SEPAY_ACCOUNT_NUMBER) {
    return res.status(500).json({
      success: false,
      message: "Missing SEPAY_BANK_CODE/SEPAY_ACCOUNT_NUMBER in env",
    });
  }

  const input = CreateQrSchema.parse(req.body);
  const apptId = input.appointmentId;
  const topupId = input.topupId;

  let amount = 0;
  let des = "";
  let apptMeta: any = null;

  if (apptId) {
    const [rows]: any = await pool.query(
      "SELECT id, price_paid, payment_status, parent_appointment_id, schedule_type FROM appointments WHERE id = ? OR parent_appointment_id = ?",
      [apptId, apptId]
    );
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Appointment not found" });
    const appt = rows[0];

    const isLongTerm = rows.some((r: any) => r.parent_appointment_id === apptId || r.schedule_type === "LONG_TERM");
    if (isLongTerm) {
      amount = rows.reduce((sum: number, r: any) => sum + Number(r.price_paid), 0);
    } else {
      amount = Number(appt.price_paid);
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid appointment amount" });
    }

    // Fetch details for payment metadata card
    const [detailRows]: any = await pool.query(
      "SELECT a.start_time, a.price_paid, u.full_name as tutor_name " +
      "FROM appointments a " +
      "JOIN users u ON a.tutor_id = u.id " +
      "WHERE a.id = ? OR a.parent_appointment_id = ? " +
      "ORDER BY a.session_number ASC LIMIT 1",
      [apptId, apptId]
    );
    if (detailRows.length > 0) {
      const first = detailRows[0];
      apptMeta = {
        tutor_name: isLongTerm 
          ? `${first.tutor_name} (Đăng ký dài hạn ${rows.length} buổi)`
          : first.tutor_name,
        start_time: first.start_time,
        price_paid: String(amount),
      };
    }

    const [payInsert]: any = await pool.query(
      "INSERT INTO payments (appointment_id, amount, status) VALUES (?, ?, 'PENDING')",
      [apptId, amount]
    );
    const paymentId = payInsert?.insertId as number | undefined;
    if (!paymentId) {
      return res.status(500).json({ success: false, message: "Failed to create payment" });
    }

    des = `DH${paymentId}`;
  } else if (topupId) {
    const [rows] = await pool.query(
      "SELECT id, amount, status FROM wallet_topups WHERE id = ? LIMIT 1",
      [topupId]
    );
    const topup = Array.isArray(rows) ? (rows as any[])[0] : undefined;
    if (!topup) return res.status(404).json({ success: false, message: "Topup request not found" });

    amount = Number(topup.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid topup amount" });
    }

    des = `ND${topupId}`;
  } else {
    return res.status(400).json({ success: false, message: "Must provide either appointmentId or topupId" });
  }

  const qrUrl = buildQrUrl({
    bank: env.SEPAY_BANK_CODE,
    acc: env.SEPAY_ACCOUNT_NUMBER,
    amount,
    des,
    template: env.SEPAY_QR_TEMPLATE,
    showInfo: env.SEPAY_QR_SHOW_INFO,
    download: env.SEPAY_QR_DOWNLOAD,
    fullAcc: env.SEPAY_QR_FULL_ACC,
    holder: env.SEPAY_ACCOUNT_NAME,
    store: env.SEPAY_QR_STORE_NAME,
  });

  let checkoutUrl = "";
  let checkoutFormfields = null;
  try {
    const sepay = getSePayClient();
    checkoutUrl = sepay.checkout.initCheckoutUrl();
    checkoutFormfields = sepay.checkout.initOneTimePaymentFields({
      operation: "PURCHASE",
      payment_method: "BANK_TRANSFER",
      order_invoice_number: des,
      order_amount: amount,
      currency: "VND",
      order_description: `Thanh toan hoc phi ${des}`,
      success_url: apptId 
        ? publicWebUrl(`/payment?status=success&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`)
        : publicWebUrl(`/payment?status=success&topupId=${topupId}&paymentId=${topupId}`),
      cancel_url: apptId
        ? publicWebUrl(`/payment?status=cancelled&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`)
        : publicWebUrl(`/payment?status=cancelled&topupId=${topupId}&paymentId=${topupId}`),
      error_url: apptId
        ? publicWebUrl(`/payment?status=error&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`)
        : publicWebUrl(`/payment?status=error&topupId=${topupId}&paymentId=${topupId}`),
    });
  } catch (e: any) {
    console.error("SePay SDK error:", e.message);
  }

  return res.status(201).json({
    success: true,
    data: {
      paymentId: apptId ? Number(des.replace(/\D/g, "")) : topupId,
      appointmentId: apptId || null,
      topupId: topupId || null,
      amount,
      description: des,
      accountName: env.SEPAY_ACCOUNT_NAME ?? null,
      bankCode: env.SEPAY_BANK_CODE,
      accountNumber: env.SEPAY_ACCOUNT_NUMBER,
      qrUrl,
      checkoutUrl,
      checkoutFormfields,
      appointment: apptMeta,
    },
  });
}

export async function listSepayBanks(_req: Request, res: Response): Promise<any> {
  try {
    if (banksCache && banksCache.expiresAt > Date.now()) {
      return res.json({ success: true, data: banksCache.data });
    }

    const response = await fetch("https://qr.sepay.vn/banks.json");
    if (!response.ok) {
      throw new Error(`SePay banks HTTP ${response.status}`);
    }
    const data = await response.json();
    banksCache = { data, expiresAt: Date.now() + 24 * 60 * 60 * 1000 };
    return res.json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message || "Không thể tải danh sách ngân hàng SePay." });
  }
}

export async function getPaymentStatus(req: Request, res: Response) {
  const PaymentIdSchema = z.object({ paymentId: z.coerce.number().int().positive() });
  const { paymentId } = PaymentIdSchema.parse(req.params);
  const isTopup = req.query.type === "topup" || req.query.isTopup === "true";

  if (isTopup) {
    const [rows] = await pool.query(
      "SELECT id, user_id as appointment_id, amount, status, paid_at FROM wallet_topups WHERE id = ? LIMIT 1",
      [paymentId]
    );
    const row = Array.isArray(rows) ? (rows as any[])[0] : undefined;
    if (!row) return res.status(404).json({ success: false, message: "Topup payment not found" });
    return res.json({ success: true, data: row });
  }

  // Fallback checking
  const [rows] = await pool.query(
    "SELECT id, appointment_id, amount, status, paid_at FROM payments WHERE id = ? LIMIT 1",
    [paymentId]
  );
  const row = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (row) {
    return res.json({ success: true, data: row });
  }

  const [topupRows] = await pool.query(
    "SELECT id, user_id as appointment_id, amount, status, paid_at FROM wallet_topups WHERE id = ? LIMIT 1",
    [paymentId]
  );
  const topupRow = Array.isArray(topupRows) ? (topupRows as any[])[0] : undefined;
  if (topupRow) {
    return res.json({ success: true, data: topupRow });
  }

  return res.status(404).json({ success: false, message: "Payment not found" });
}

export async function sepayWebhook(req: Request, res: Response) {
  const env = getEnv();
  const auth = req.headers.authorization || "";
  
  try {
    await pool.query(
      "INSERT INTO system_logs (user_id, action, details) VALUES (null, 'SEPAY_WEBHOOK_DEBUG', ?)",
      [JSON.stringify({ receivedAuth: auth, expectedApiKey: env.SEPAY_API_KEY || "not-set", headers: req.headers, body: req.body })]
    );
  } catch (err: any) {
    console.error("Failed to write webhook debug log:", err.message);
  }

  // If SEPAY_API_KEY is configured and not default mock, validate it. Otherwise, bypass with a warning.
  if (env.SEPAY_API_KEY && env.SEPAY_API_KEY !== "mock_api_key" && env.SEPAY_API_KEY !== "") {
    if (auth !== `Apikey ${env.SEPAY_API_KEY}`) {
      console.warn("⚠️ [SePay Webhook] Webhook token mismatch or missing. Unauthorized.");
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    console.log("ℹ️ [SePay Webhook] SEPAY_API_KEY is not configured or is default mock. Bypassing token validation.");
  }

  let payload: {
    id: string;
    gateway: string;
    transactionDate: string;
    accountNumber: string | null;
    transferType: "in" | "out";
    transferAmount: number;
    content: string;
    referenceCode: string | null;
    description: string | null;
  };

  try {
    if (req.body.order && req.body.transaction) {
      // Parse as Checkout / Order webhook
      const orderWebhook = SePayOrderWebhookSchema.parse(req.body);
      const isPayment = orderWebhook.transaction.transaction_type === "PAYMENT" || orderWebhook.transaction.transaction_type === "DEPOSIT";
      payload = {
        id: orderWebhook.transaction.id,
        gateway: orderWebhook.transaction.payment_method,
        transactionDate: orderWebhook.transaction.transaction_date,
        accountNumber: null,
        transferType: isPayment ? "in" : "out",
        transferAmount: orderWebhook.transaction.transaction_amount,
        content: orderWebhook.order.order_invoice_number,
        referenceCode: orderWebhook.transaction.transaction_id,
        description: orderWebhook.order.order_description || null,
      };
    } else {
      // Parse as normal bank transaction webhook
      const bankWebhook = SePayWebhookSchema.parse(req.body);
      payload = {
        id: String(bankWebhook.id),
        gateway: bankWebhook.gateway,
        transactionDate: bankWebhook.transactionDate,
        accountNumber: bankWebhook.accountNumber || null,
        transferType: bankWebhook.transferType,
        transferAmount: bankWebhook.transferAmount,
        content: bankWebhook.content || "",
        referenceCode: bankWebhook.referenceCode || null,
        description: bankWebhook.description || null,
      };
    }
  } catch (err: any) {
    console.error("❌ [SePay Webhook] Schema parsing failed:", err.message);
    return res.status(400).json({ success: false, message: `Invalid webhook payload: ${err.message}` });
  }

  console.log("🚀 [SePay Webhook] Normalized payload:", JSON.stringify(payload));

  // Idempotency (docs: use sepay id)
  const [existsRows] = await pool.query("SELECT id FROM sepay_transactions WHERE sepay_id = ? LIMIT 1", [
    payload.id,
  ]);
  const exists = Array.isArray(existsRows) && (existsRows as any[]).length > 0;

  const amountIn = payload.transferType === "in" ? payload.transferAmount : 0;
  const amountOut = payload.transferType === "out" ? payload.transferAmount : 0;

  if (!exists) {
    await pool.query(
      "INSERT INTO sepay_transactions (sepay_id, gateway, transaction_date, account_number, sub_account, amount_in, amount_out, accumulated, code, transaction_content, reference_code, body) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        payload.id,
        payload.gateway,
        payload.transactionDate,
        payload.accountNumber ?? null,
        null, // subAccount
        amountIn,
        amountOut,
        0, // accumulated
        null, // code
        payload.content ?? null,
        payload.referenceCode ?? null,
        payload.description ?? null,
      ]
    );
  }

  // Parse order code DH(\d+) (appointment) or ND(\d+) (wallet topup) from content
  const content = payload.content ?? "";
  const matchAppt = /DH(\d+)/.exec(content);
  const matchTopup = /ND(\d+)/.exec(content);

  // Only reconcile incoming transfers
  if (payload.transferType !== "in") {
    return res.json({ success: true, message: "Not an incoming transfer" });
  }

  if (matchAppt) {
    const paymentId = Number(matchAppt[1]);
    if (!Number.isFinite(paymentId) || paymentId <= 0) {
      return res.status(200).json({ success: false, message: "Invalid order code" });
    }

    const [payRows] = await pool.query(
      "SELECT id, appointment_id, amount, status FROM payments WHERE id = ? LIMIT 1",
      [paymentId]
    );
    const payment = Array.isArray(payRows) ? (payRows as any[])[0] : undefined;
    if (!payment) {
      return res.status(200).json({ success: false, message: "Payment not found" });
    }

    // Amount check
    const expected = Number(payment.amount);
    if (Math.round(expected) !== Math.round(payload.transferAmount)) {
      return res.status(200).json({ success: false, message: "Amount mismatch" });
    }

    if (payment.status === "PAID") {
      return res.json({ success: true, message: "Already paid" });
    }

    const sepayConnection = await pool.getConnection();
    let sepaySettlement: any;
    try {
      await sepayConnection.beginTransaction();
      await sepayConnection.query("UPDATE payments SET status = 'PAID', paid_at = NOW() WHERE id = ?", [paymentId]);
      sepaySettlement = await settleAppointmentsIntoEscrow({
        db: sepayConnection,
        appointmentId: payment.appointment_id,
        refType: "PAYMENT",
        refId: String(paymentId),
      });
      await sepayConnection.commit();
    } catch (err: any) {
      await sepayConnection.rollback();
      return res.status(200).json({ success: false, message: err.message || "Failed to settle payment" });
    } finally {
      sepayConnection.release();
    }
    await createNotifications([
      {
        recipientId: sepaySettlement.studentId,
        actorId: null,
        type: "PAYMENT_PAID",
        title: "Thanh toán lớp học thành công",
        body: "Lớp học đã được xác nhận. Tiền gia sư sẽ bị giam 3 ngày và chỉ được trả nếu không có khiếu nại.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: payment.appointment_id,
        metadata: {
          paymentId,
          amount: payload.transferAmount,
          commissionAmount: sepaySettlement.totalCommission,
          tutorEarning: sepaySettlement.totalTutorEarning,
          escrowReleaseDate: sepaySettlement.releaseDate,
        },
      },
      {
        recipientId: sepaySettlement.tutorId,
        actorId: sepaySettlement.studentId,
        type: "BOOKING_CONFIRMED",
        title: "Lịch học đã được thanh toán",
        body: "Học viên đã thanh toán. Tiền sau chiết khấu đang được giam 3 ngày và sẽ vào ví khả dụng nếu không có khiếu nại.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: payment.appointment_id,
        metadata: {
          paymentId,
          amount: payload.transferAmount,
          commissionAmount: sepaySettlement.totalCommission,
          tutorEarning: sepaySettlement.totalTutorEarning,
          escrowReleaseDate: sepaySettlement.releaseDate,
        },
      },
    ]);
    return res.json({ success: true });
  } else if (matchTopup) {
    const topupId = Number(matchTopup[1]);
    if (!Number.isFinite(topupId) || topupId <= 0) {
      return res.status(200).json({ success: false, message: "Invalid topup code" });
    }

    const [topupRows] = await pool.query(
      `SELECT wt.id, wt.user_id, wt.amount, wt.status, u.full_name, u.email
       FROM wallet_topups wt
       LEFT JOIN users u ON u.id = wt.user_id
       WHERE wt.id = ? LIMIT 1`,
      [topupId]
    );
    const topup = Array.isArray(topupRows) ? (topupRows as any[])[0] : undefined;
    if (!topup) {
      return res.status(200).json({ success: false, message: "Topup request not found" });
    }

    // Amount check
    const expected = Number(topup.amount);
    if (Math.round(expected) !== Math.round(payload.transferAmount)) {
      return res.status(200).json({ success: false, message: "Amount mismatch" });
    }

    if (topup.status === "PAID") {
      return res.json({ success: true, message: "Already paid" });
    }

    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      await connection.query("UPDATE wallet_topups SET status = 'PAID', paid_at = NOW() WHERE id = ?", [topupId]);

      // Check if wallet exists, create if not
      const [accounts]: any = await connection.query(
        "SELECT available_balance FROM wallet_accounts WHERE user_id = ? FOR UPDATE",
        [topup.user_id]
      );
      if (accounts.length === 0) {
        await connection.query(
          "INSERT INTO wallet_accounts (user_id, available_balance, holding_balance) VALUES (?, 0.00, 0.00)",
          [topup.user_id]
        );
      }

      await connection.query(
        "UPDATE wallet_accounts SET available_balance = available_balance + ? WHERE user_id = ?",
        [payload.transferAmount, topup.user_id]
      );

      await connection.query(
        "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'TOPUP', ?, 'SEPAY', ?)",
        [topup.user_id, payload.transferAmount, `TOPUP-${topupId}`]
      );

      await connection.commit();
      await createNotification({
        recipientId: topup.user_id,
        actorId: null,
        type: "WALLET_TOPUP",
        title: "Nạp ví thành công",
        body: `Ví của bạn vừa được cộng ${Number(payload.transferAmount).toLocaleString("vi-VN")}đ.`,
        linkUrl: "/?tab=wallet",
        entityType: "WALLET_TOPUP",
        entityId: String(topupId),
        metadata: { amount: payload.transferAmount },
      });
      await notifyZaloAdmins("TOPUP_PAID", [
        ["👤 Người nạp", topup.full_name || topup.email || topup.user_id],
        ["📧 Email", topup.email],
        ["💰 Số tiền", zaloFormat.money(payload.transferAmount)],
        ["🏦 Gateway", payload.gateway],
        ["🧾 Nội dung", payload.content || content],
        ["🆔 Mã nạp", topupId],
        ["⏱️ Ghi nhận", zaloFormat.time(new Date())],
      ]);
      return res.json({ success: true });
    } catch (err: any) {
      await connection.rollback();
      return res.status(500).json({ success: false, message: err.message });
    } finally {
      connection.release();
    }
  } else {
    return res.status(200).json({ success: false, message: "No matching order/topup code found" });
  }
}

export async function mockSepayPayment(req: Request, res: Response): Promise<any> {
  try {
    const { paymentId, isTopup } = req.body;
    console.log("📲 [Mock Payment] Received trigger request:", { paymentId, isTopup });
    if (!paymentId) {
      return res.status(400).json({ success: false, message: "Missing paymentId" });
    }

    if (isTopup) {
      const [topupRows] = await pool.query(
        `SELECT wt.id, wt.user_id, wt.amount, wt.status, u.full_name, u.email
         FROM wallet_topups wt
         LEFT JOIN users u ON u.id = wt.user_id
         WHERE wt.id = ? LIMIT 1`,
        [paymentId]
      );
      const topup = Array.isArray(topupRows) ? (topupRows as any[])[0] : undefined;
      if (!topup) return res.status(404).json({ success: false, message: "Topup request not found" });

      if (topup.status === "PAID") {
        return res.json({ success: true, message: "Already paid" });
      }

      const connection = await pool.getConnection();
      try {
        await connection.beginTransaction();

        await connection.query("UPDATE wallet_topups SET status = 'PAID', paid_at = NOW() WHERE id = ?", [paymentId]);

        // Check if wallet exists, create if not
        const [accounts]: any = await connection.query(
          "SELECT available_balance FROM wallet_accounts WHERE user_id = ? FOR UPDATE",
          [topup.user_id]
        );
        if (accounts.length === 0) {
          await connection.query(
            "INSERT INTO wallet_accounts (user_id, available_balance, holding_balance) VALUES (?, 0.00, 0.00)",
            [topup.user_id]
          );
        }

        await connection.query(
          "UPDATE wallet_accounts SET available_balance = available_balance + ? WHERE user_id = ?",
          [Number(topup.amount), topup.user_id]
        );

        await connection.query(
          "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'TOPUP', ?, 'SIMULATE', ?)",
          [topup.user_id, Number(topup.amount), `TOPUP-${paymentId}`]
        );

        await connection.commit();
      } catch (err: any) {
        await connection.rollback();
        throw err;
      } finally {
        connection.release();
      }

      await createNotification({
        recipientId: topup.user_id,
        actorId: null,
        type: "WALLET_TOPUP",
        title: "Nạp ví thành công",
        body: `Ví của bạn vừa được cộng ${Number(topup.amount).toLocaleString("vi-VN")}đ.`,
        linkUrl: "/?tab=wallet",
        entityType: "WALLET_TOPUP",
        entityId: String(paymentId),
        metadata: { amount: Number(topup.amount), simulated: true },
      });
      await notifyZaloAdmins("TOPUP_PAID", [
        ["👤 Người nạp", topup.full_name || topup.email || topup.user_id],
        ["📧 Email", topup.email],
        ["💰 Số tiền", zaloFormat.money(topup.amount)],
        ["🏦 Gateway", "SIMULATE"],
        ["🆔 Mã nạp", paymentId],
        ["⏱️ Ghi nhận", zaloFormat.time(new Date())],
      ]);

      return res.json({ success: true, message: "Mock topup processed successfully!" });
    }

    const [payRows] = await pool.query(
      "SELECT id, appointment_id, amount, status FROM payments WHERE id = ? LIMIT 1",
      [paymentId]
    );
    const payment = Array.isArray(payRows) ? (payRows as any[])[0] : undefined;
    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }

    if (payment.status === "PAID") {
      return res.json({ success: true, message: "Already paid" });
    }

    const mockConnection = await pool.getConnection();
    let mockSettlement: any;
    try {
      await mockConnection.beginTransaction();
      await mockConnection.query("UPDATE payments SET status = 'PAID', paid_at = NOW() WHERE id = ?", [paymentId]);
      mockSettlement = await settleAppointmentsIntoEscrow({
        db: mockConnection,
        appointmentId: payment.appointment_id,
        refType: "PAYMENT",
        refId: String(paymentId),
      });
      await mockConnection.commit();
    } catch (err: any) {
      await mockConnection.rollback();
      throw err;
    } finally {
      mockConnection.release();
    }
    await createNotifications([
      {
        recipientId: mockSettlement.studentId,
        actorId: null,
        type: "PAYMENT_PAID",
        title: "Thanh toán lớp học thành công",
        body: "Lớp học đã được xác nhận. Tiền gia sư sẽ bị giam 3 ngày và chỉ được trả nếu không có khiếu nại.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: payment.appointment_id,
        metadata: {
          paymentId,
          amount: Number(payment.amount),
          simulated: true,
          commissionAmount: mockSettlement.totalCommission,
          tutorEarning: mockSettlement.totalTutorEarning,
          escrowReleaseDate: mockSettlement.releaseDate,
        },
      },
      {
        recipientId: mockSettlement.tutorId,
        actorId: mockSettlement.studentId,
        type: "BOOKING_CONFIRMED",
        title: "Lịch học đã được thanh toán",
        body: "Học viên đã thanh toán. Tiền sau chiết khấu đang được giam 3 ngày và sẽ vào ví khả dụng nếu không có khiếu nại.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: payment.appointment_id,
        metadata: {
          paymentId,
          amount: Number(payment.amount),
          simulated: true,
          commissionAmount: mockSettlement.totalCommission,
          tutorEarning: mockSettlement.totalTutorEarning,
          escrowReleaseDate: mockSettlement.releaseDate,
        },
      },
    ]);
    return res.json({ success: true, message: "Mock payment processed successfully!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function walletPayAppointment(req: any, res: Response): Promise<any> {
  const schema = z.object({
    appointmentId: z.string(),
  });
  try {
    const { appointmentId } = schema.parse(req.body);
    const userId = req.user.id;

    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      // Find appointments (could be a single one, or multiple under parent_appointment_id)
      const [apptRows]: any = await connection.query(
        "SELECT id, student_id, tutor_id, price_paid, payment_status, schedule_type, parent_appointment_id FROM appointments WHERE (id = ? OR parent_appointment_id = ?) FOR UPDATE",
        [appointmentId, appointmentId]
      );
      
      if (apptRows.length === 0) {
        throw new Error("Không tìm thấy lịch hẹn hoặc lịch học dài hạn.");
      }

      // Validate ownership and status of all target appointments
      for (const appt of apptRows) {
        if (appt.student_id !== userId) {
          throw new Error("Không có quyền thanh toán lịch hẹn này.");
        }
        if (appt.payment_status !== "UNPAID") {
          throw new Error("Lịch hẹn này đã được thanh toán hoặc đang chờ xử lý.");
        }
      }

      const totalAmount = apptRows.reduce((sum: number, appt: any) => sum + Number(appt.price_paid), 0);

      // Debit student wallet once for the total amount
      const { walletDebitAvailable } = require("../services/wallet.service");
      await walletDebitAvailable({
        userId,
        amount: totalAmount,
        entryType: "BOOKING_PAYMENT",
        refType: "BOOKING",
        refId: appointmentId,
      }, connection);

      const settlement = await settleAppointmentsIntoEscrow({
        db: connection,
        appointmentId,
        refType: "BOOKING",
        refId: appointmentId,
        requireUnpaid: false,
      });

      await connection.commit();
      await createNotifications([
        {
          recipientId: apptRows[0].student_id,
          actorId: null,
          type: "PAYMENT_PAID",
          title: "Thanh toán ví thành công",
          body: `Bạn đã thanh toán ${totalAmount.toLocaleString("vi-VN")}đ bằng ví nội bộ. Tiền gia sư sẽ bị giam 3 ngày nếu không có khiếu nại.`,
          linkUrl: "/?tab=bookings",
          entityType: "APPOINTMENT",
          entityId: appointmentId,
          metadata: {
            amount: totalAmount,
            method: "WALLET",
            commissionAmount: settlement.totalCommission,
            tutorEarning: settlement.totalTutorEarning,
            escrowReleaseDate: settlement.releaseDate,
          },
        },
        {
          recipientId: apptRows[0].tutor_id,
          actorId: userId,
          type: "BOOKING_CONFIRMED",
          title: "Lịch học đã được thanh toán",
          body: "Học viên đã thanh toán bằng ví nội bộ. Tiền sau chiết khấu đang được giam 3 ngày và sẽ vào ví khả dụng nếu không có khiếu nại.",
          linkUrl: "/?tab=bookings",
          entityType: "APPOINTMENT",
          entityId: appointmentId,
          metadata: {
            amount: totalAmount,
            method: "WALLET",
            commissionAmount: settlement.totalCommission,
            tutorEarning: settlement.totalTutorEarning,
            escrowReleaseDate: settlement.releaseDate,
          },
        },
      ]);
      const commissionPercent = settlement.commissionPercent;
      return res.json({
        success: true,
        message: `Thanh toán học phí thành công bằng ví nội bộ! Đã trừ ${totalAmount.toLocaleString("vi-VN")}đ. Phí dịch vụ nền tảng ${commissionPercent}% đã được giữ lại; tiền gia sư bị giam 3 ngày nếu không có khiếu nại.`,
      });
    } catch (innerErr: any) {
      await connection.rollback();
      throw innerErr;
    } finally {
      connection.release();
    }
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message || "Giao dịch thất bại" });
  }
}

export async function getWalletDebug(req: Request, res: Response): Promise<any> {
  try {
    const [accounts] = await pool.query("SELECT * FROM wallet_accounts");
    const [topups] = await pool.query("SELECT * FROM wallet_topups ORDER BY id DESC LIMIT 10");
    const [ledger] = await pool.query("SELECT * FROM wallet_ledger ORDER BY id DESC LIMIT 10");
    const [transactions] = await pool.query("SELECT * FROM sepay_transactions ORDER BY id DESC LIMIT 10");
    const [logs] = await pool.query("SELECT * FROM system_logs ORDER BY id DESC LIMIT 50");
    const [tutorProfiles] = await pool.query("SELECT * FROM tutor_profiles");
    const [users] = await pool.query("SELECT id, full_name, email, role, phone, avatar_url, status FROM users");
    return res.json({ success: true, data: { accounts, topups, ledger, transactions, logs, tutorProfiles, users } });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


