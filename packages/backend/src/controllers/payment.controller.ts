import type { Request, Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import { getEnv } from "../utils/env";
import { walletHoldToTutor } from "../services/wallet.service";

const CreateQrSchema = z.object({
  appointmentId: z.string().min(1).max(36),
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

  const [rows] = await pool.query(
    "SELECT id, price_paid, payment_status FROM appointments WHERE id = ? LIMIT 1",
    [apptId]
  );
  const appt = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!appt) return res.status(404).json({ success: false, message: "Appointment not found" });

  const amount = Number(appt.price_paid);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ success: false, message: "Invalid appointment amount" });
  }

  // Content must contain order code to reconcile on webhook.
  // Use a stable prefix as in docs (DH123). Here: AP{uuid-without-dashes-short} is not reliable for regex.
  // We'll store mapping in DB via payments table and use content "DH<shortId>" pattern.
  // If your appointment IDs are UUID, we create a short numeric-ish code by using a payment row.
  const [payInsert]: any = await pool.query(
    "INSERT INTO payments (appointment_id, amount, status) VALUES (?, ?, 'PENDING')",
    [apptId, amount]
  );
  const paymentId = payInsert?.insertId as number | undefined;
  if (!paymentId) {
    return res.status(500).json({ success: false, message: "Failed to create payment" });
  }

  const des = `DH${paymentId}`;
  const qrUrl = buildQrUrl({
    bank: env.SEPAY_BANK_CODE,
    acc: env.SEPAY_ACCOUNT_NUMBER,
    amount,
    des,
    template: "compact",
  });

  return res.status(201).json({
    success: true,
    data: {
      paymentId,
      appointmentId: apptId,
      amount,
      description: des,
      accountName: env.SEPAY_ACCOUNT_NAME ?? null,
      bankCode: env.SEPAY_BANK_CODE,
      accountNumber: env.SEPAY_ACCOUNT_NUMBER,
      qrUrl,
    },
  });
}

export async function getPaymentStatus(req: Request, res: Response) {
  const PaymentIdSchema = z.object({ paymentId: z.coerce.number().int().positive() });
  const { paymentId } = PaymentIdSchema.parse(req.params);

  const [rows] = await pool.query(
    "SELECT id, appointment_id, amount, status, paid_at FROM payments WHERE id = ? LIMIT 1",
    [paymentId]
  );
  const row = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!row) return res.status(404).json({ success: false, message: "Payment not found" });
  return res.json({ success: true, data: row });
}

export async function sepayWebhook(req: Request, res: Response) {
  const env = getEnv();
  if (!env.SEPAY_API_KEY) {
    return res.status(500).json({ success: false, message: "Missing SEPAY_API_KEY in env" });
  }

  const auth = req.headers.authorization || "";
  if (auth !== `Apikey ${env.SEPAY_API_KEY}`) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const data = SePayWebhookSchema.parse(req.body);

  // Idempotency (docs: use sepay id)
  const [existsRows] = await pool.query("SELECT id FROM sepay_transactions WHERE sepay_id = ? LIMIT 1", [
    data.id,
  ]);
  const exists = Array.isArray(existsRows) && (existsRows as any[]).length > 0;
  if (exists) {
    return res.json({ success: true, message: "Duplicate ignored" });
  }

  const amountIn = data.transferType === "in" ? data.transferAmount : 0;
  const amountOut = data.transferType === "out" ? data.transferAmount : 0;

  await pool.query(
    "INSERT INTO sepay_transactions (sepay_id, gateway, transaction_date, account_number, sub_account, amount_in, amount_out, accumulated, code, transaction_content, reference_code, body) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      data.id,
      data.gateway,
      data.transactionDate,
      data.accountNumber ?? null,
      data.subAccount ?? null,
      amountIn,
      amountOut,
      data.accumulated ?? 0,
      data.code ?? null,
      data.content ?? null,
      data.referenceCode ?? null,
      data.description ?? null,
    ]
  );

  // Parse order code DH(\d+) from content
  const content = data.content ?? "";
  const match = /DH(\d+)/.exec(content);
  if (!match) {
    return res.status(200).json({ success: false, message: "No order code found" });
  }
  const paymentId = Number(match[1]);
  if (!Number.isFinite(paymentId) || paymentId <= 0) {
    return res.status(200).json({ success: false, message: "Invalid order code" });
  }

  // Only reconcile incoming transfers
  if (data.transferType !== "in") {
    return res.json({ success: true, message: "Not an incoming transfer" });
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
  if (Math.round(expected) !== Math.round(data.transferAmount)) {
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
    amount: data.transferAmount,
    refType: "PAYMENT",
    refId: String(paymentId),
  });

  return res.json({ success: true });
}

export async function mockSepayPayment(req: Request, res: Response): Promise<any> {
  try {
    const { paymentId } = req.body;
    if (!paymentId) {
      return res.status(400).json({ success: false, message: "Missing paymentId" });
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


