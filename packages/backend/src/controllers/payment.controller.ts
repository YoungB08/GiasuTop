import type { Request, Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import { getEnv } from "../utils/env";
import { walletHoldToTutor } from "../services/wallet.service";
import { getSePayClient } from "../config/sepay";

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
  template?: "compact" | "qronly";
}) {
  const q = new URLSearchParams();
  q.set("bank", params.bank);
  q.set("acc", params.acc);
  q.set("amount", String(Math.round(params.amount)));
  q.set("des", params.des);
  if (params.template) q.set("template", params.template);
  return `https://qr.sepay.vn/img?${q.toString()}`;
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

  if (apptId) {
    const [rows] = await pool.query(
      "SELECT id, price_paid, payment_status FROM appointments WHERE id = ? LIMIT 1",
      [apptId]
    );
    const appt = Array.isArray(rows) ? (rows as any[])[0] : undefined;
    if (!appt) return res.status(404).json({ success: false, message: "Appointment not found" });

    amount = Number(appt.price_paid);
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid appointment amount" });
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
    template: "compact",
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
        ? `http://localhost:3000/payment?status=success&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`
        : `http://localhost:3000/payment?status=success&topupId=${topupId}&paymentId=${topupId}`,
      cancel_url: apptId
        ? `http://localhost:3000/payment?status=cancelled&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`
        : `http://localhost:3000/payment?status=cancelled&topupId=${topupId}&paymentId=${topupId}`,
      error_url: apptId
        ? `http://localhost:3000/payment?status=error&appointmentId=${apptId}&paymentId=${des.replace(/\D/g, "")}`
        : `http://localhost:3000/payment?status=error&topupId=${topupId}&paymentId=${topupId}`,
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
    },
  });
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
  if (exists) {
    return res.json({ success: true, message: "Duplicate ignored" });
  }

  const amountIn = payload.transferType === "in" ? payload.transferAmount : 0;
  const amountOut = payload.transferType === "out" ? payload.transferAmount : 0;

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

    await pool.query("UPDATE payments SET status = 'PAID', paid_at = NOW() WHERE id = ?", [paymentId]);
    // Move appointment to HOLDING and credit tutor holding wallet
    const [apptRows] = await pool.query("SELECT tutor_id FROM appointments WHERE id = ? LIMIT 1", [
      payment.appointment_id,
    ]);
    const appt = Array.isArray(apptRows) ? (apptRows as any[])[0] : undefined;
    if (!appt) {
      return res.status(200).json({ success: false, message: "Appointment not found for payment" });
    }

    await pool.query("UPDATE appointments SET payment_status = 'HOLDING' WHERE id = ?", [payment.appointment_id]);
    await walletHoldToTutor({
      tutorId: appt.tutor_id,
      amount: payload.transferAmount,
      refType: "PAYMENT",
      refId: String(paymentId),
    });

    return res.json({ success: true });
  } else if (matchTopup) {
    const topupId = Number(matchTopup[1]);
    if (!Number.isFinite(topupId) || topupId <= 0) {
      return res.status(200).json({ success: false, message: "Invalid topup code" });
    }

    const [topupRows] = await pool.query(
      "SELECT id, user_id, amount, status FROM wallet_topups WHERE id = ? LIMIT 1",
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
        "SELECT id, user_id, amount, status FROM wallet_topups WHERE id = ? LIMIT 1",
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

    await pool.query("UPDATE payments SET status = 'PAID', paid_at = NOW() WHERE id = ?", [paymentId]);

    const [apptRows] = await pool.query("SELECT tutor_id FROM appointments WHERE id = ? LIMIT 1", [
      payment.appointment_id,
    ]);
    const appt = Array.isArray(apptRows) ? (apptRows as any[])[0] : undefined;
    if (!appt) {
      return res.status(404).json({ success: false, message: "Appointment not found for payment" });
    }

    await pool.query("UPDATE appointments SET payment_status = 'HOLDING', status = 'CONFIRMED' WHERE id = ?", [payment.appointment_id]);
    
    await walletHoldToTutor({
      tutorId: appt.tutor_id,
      amount: Number(payment.amount),
      refType: "PAYMENT",
      refId: String(paymentId),
    });

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

      const [tutorRows]: any = await connection.query(
        "SELECT commission_percent FROM tutor_profiles WHERE user_id = ?",
        [apptRows[0].tutor_id]
      );
      const commissionPercent = Number(tutorRows[0]?.commission_percent ?? 10.00);

      const releaseDate = new Date();
      releaseDate.setDate(releaseDate.getDate() + 2); // Escrow hold for 2 days

      const { walletHoldToTutor } = require("../services/wallet.service");

      // Update and hold each appointment individually (escrow release is per session/appointment)
      for (const appt of apptRows) {
        const amount = Number(appt.price_paid);
        const commissionAmount = amount * (commissionPercent / 100);
        const tutorAmount = amount - commissionAmount;

        await connection.query(
          "UPDATE appointments SET payment_status = 'HOLDING', status = 'CONFIRMED', escrow_release_date = ? WHERE id = ?",
          [releaseDate, appt.id]
        );

        await walletHoldToTutor({
          tutorId: appt.tutor_id,
          amount: tutorAmount,
          refType: "BOOKING",
          refId: appt.id,
        }, connection);
      }

      await connection.commit();
      return res.json({
        success: true,
        message: `Thanh toán học phí thành công bằng ví nội bộ! (Đã trừ ${totalAmount.toLocaleString("vi-VN")} đ số dư ví, phí dịch vụ nền tảng ${commissionPercent}%)`,
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


