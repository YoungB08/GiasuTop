import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { walletRefundAvailable, walletReleaseHolding } from "../services/wallet.service";
import fs from "fs";
import path from "path";
import { assertDocumentFileIsSafe } from "../utils/upload";
import { createNotification, createNotifications } from "../services/notification.service";
import { notifyZaloAdmins } from "../services/zaloAdmin.service";
import { publicApiUrl } from "../utils/url";


export async function listPendingTutors(_req: AuthedRequest, res: Response) {
  const [rows]: any = await pool.query(
    "SELECT tp.user_id, tp.bio, tp.school, tp.major, tp.year_of_study, tp.hourly_rate, tp.subjects_to_teach, tp.is_verified, u.full_name, u.email, u.phone, u.avatar_url, tp.reject_reason, tp.commission_percent, tp.proposed_commission_percent, tp.ekyc_status, tp.ekyc_score, tp.ekyc_result FROM tutor_profiles tp JOIN users u ON u.id = tp.user_id WHERE tp.is_verified = 'PENDING' AND (tp.teaching_profile_completed_at IS NOT NULL OR (COALESCE(tp.school, '') <> '' AND COALESCE(tp.major, '') <> '' AND COALESCE(tp.bio, '') <> '' AND COALESCE(tp.subjects_to_teach, '') <> '')) ORDER BY tp.created_at DESC"
  );
  
  for (const t of rows) {
    const [docs] = await pool.query("SELECT id, doc_type, url, original_name, mime_type, status FROM tutor_documents WHERE tutor_user_id = ?", [t.user_id]);
    t.documents = docs;
  }
  
  return res.json({ success: true, data: rows });
}

const DecideTutorSchema = z.object({
  tutorUserId: z.string().min(1).max(36),
  decision: z.enum(["APPROVED", "REJECTED"]),
  rejectReason: z.string().max(2000).optional().nullable(),
});

export async function decideTutor(req: AuthedRequest, res: Response) {
  const input = DecideTutorSchema.parse(req.body);
  if (input.decision === "APPROVED") {
    const [rows]: any = await pool.query("SELECT proposed_commission_percent FROM tutor_profiles WHERE user_id = ?", [input.tutorUserId]);
    const proposed = rows[0]?.proposed_commission_percent;
    await pool.query(
      "UPDATE tutor_profiles SET is_verified = 'APPROVED', reject_reason = NULL, commission_percent = COALESCE(?, commission_percent), proposed_commission_percent = NULL WHERE user_id = ?",
      [proposed, input.tutorUserId]
    );
  } else {
    await pool.query(
      "UPDATE tutor_profiles SET is_verified = 'REJECTED', reject_reason = ?, proposed_commission_percent = NULL WHERE user_id = ?",
      [input.rejectReason ?? "Rejected", input.tutorUserId]
    );
  }
  await createNotification({
    recipientId: input.tutorUserId,
    actorId: req.user?.id ?? null,
    type: input.decision === "APPROVED" ? "PROFILE_APPROVED" : "PROFILE_REJECTED",
    title: input.decision === "APPROVED" ? "Hồ sơ gia sư đã được duyệt" : "Hồ sơ gia sư bị từ chối",
    body: input.decision === "APPROVED"
      ? "Chúc mừng! Hồ sơ gia sư của bạn đã được admin phê duyệt."
      : `Hồ sơ gia sư của bạn bị từ chối. Lý do: ${input.rejectReason ?? "Chưa có lý do cụ thể."}`,
    linkUrl: "/?tab=profile",
    entityType: "TUTOR_PROFILE",
    entityId: input.tutorUserId,
    metadata: { decision: input.decision, rejectReason: input.rejectReason ?? null },
  });
  return res.json({ success: true });
}

export async function listWithdrawRequests(_req: AuthedRequest, res: Response) {
  const [rows] = await pool.query(
    "SELECT wr.*, u.full_name, u.email FROM withdraw_requests wr JOIN users u ON u.id = wr.user_id ORDER BY wr.created_at DESC"
  );
  return res.json({ success: true, data: rows });
}

const DecideWithdrawSchema = z.object({
  withdrawId: z.coerce.number().int().positive(),
  decision: z.enum(["APPROVED", "REJECTED"]),
  adminNote: z.string().max(2000).optional().nullable(),
  receiptUrl: z.string().url().max(2000).optional().nullable(),
});

export async function decideWithdraw(req: AuthedRequest, res: Response): Promise<any> {
  const input = DecideWithdrawSchema.parse(req.body);
  const connection = await pool.getConnection();
  let wr: any;

  try {
    await connection.beginTransaction();

    const [rows] = await connection.query("SELECT * FROM withdraw_requests WHERE id = ? LIMIT 1 FOR UPDATE", [
      input.withdrawId,
    ]);
    wr = Array.isArray(rows) ? (rows as any[])[0] : undefined;
    if (!wr) {
      await connection.rollback();
      return res.status(404).json({ success: false, message: "Withdraw not found" });
    }
    if (wr.status !== "PENDING") {
      await connection.rollback();
      return res.status(400).json({ success: false, message: "Already decided" });
    }

    await connection.query("UPDATE withdraw_requests SET status=?, admin_note=?, receipt_url=? WHERE id=?", [
      input.decision,
      input.adminNote ?? null,
      input.receiptUrl ?? null,
      input.withdrawId,
    ]);

    if (input.decision === "REJECTED") {
      await walletRefundAvailable({
        userId: wr.user_id,
        amount: Number(wr.amount),
        entryType: "WITHDRAW_REJECT",
        refType: "WITHDRAW",
        refId: `WITHDRAW-${input.withdrawId}`,
      }, connection);
    }

    await connection.commit();
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }

  await createNotification({
    recipientId: wr.user_id,
    actorId: req.user?.id ?? null,
    type: input.decision === "APPROVED" ? "WITHDRAW_APPROVED" : "WITHDRAW_REJECTED",
    title: input.decision === "APPROVED" ? "Yêu cầu rút tiền đã được duyệt" : "Yêu cầu rút tiền bị từ chối",
    body: input.decision === "APPROVED"
      ? `Yêu cầu rút ${Number(wr.amount).toLocaleString("vi-VN")}đ của bạn đã được admin duyệt.`
      : `Yêu cầu rút tiền bị từ chối và tiền đã được hoàn về ví. ${input.adminNote ?? ""}`.trim(),
    linkUrl: "/?tab=wallet",
    entityType: "WITHDRAW_REQUEST",
    entityId: String(input.withdrawId),
    metadata: { decision: input.decision, adminNote: input.adminNote ?? null, receiptUrl: input.receiptUrl ?? null },
  });

  return res.json({ success: true });
}

async function decideWithdrawLegacy(req: AuthedRequest, res: Response) {
  const input = DecideWithdrawSchema.parse(req.body);

  const [rows] = await pool.query("SELECT * FROM withdraw_requests WHERE id = ? LIMIT 1", [
    input.withdrawId,
  ]);
  const wr = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!wr) return res.status(404).json({ success: false, message: "Withdraw not found" });
  if (wr.status !== "PENDING") return res.status(400).json({ success: false, message: "Already decided" });

  await pool.query("UPDATE withdraw_requests SET status=?, admin_note=?, receipt_url=? WHERE id=?", [
    input.decision,
    input.adminNote ?? null,
    input.receiptUrl ?? null,
    input.withdrawId,
  ]);

  if (input.decision === "REJECTED") {
    // In our flow, balances are reserved at request time. If we implement reservation later,
    // we would restore available here. MVP keeps it simple (no reservation) and just records decision.
  }

  await createNotification({
    recipientId: wr.user_id,
    actorId: req.user?.id ?? null,
    type: input.decision === "APPROVED" ? "WITHDRAW_APPROVED" : "WITHDRAW_REJECTED",
    title: input.decision === "APPROVED" ? "Yêu cầu rút tiền đã được duyệt" : "Yêu cầu rút tiền bị từ chối",
    body: input.decision === "APPROVED"
      ? `Yêu cầu rút ${Number(wr.amount).toLocaleString("vi-VN")}đ của bạn đã được admin duyệt.`
      : `Yêu cầu rút tiền bị từ chối. ${input.adminNote ?? ""}`.trim(),
    linkUrl: "/?tab=wallet",
    entityType: "WITHDRAW_REQUEST",
    entityId: String(input.withdrawId),
    metadata: { decision: input.decision, adminNote: input.adminNote ?? null, receiptUrl: input.receiptUrl ?? null },
  });

  return res.json({ success: true });
}

export async function listReports(_req: AuthedRequest, res: Response) {
  const [rows] = await pool.query(
    "SELECT r.*, a.tutor_id, a.student_id, a.price_paid, a.payment_status FROM reports r JOIN appointments a ON a.id = r.appointment_id ORDER BY r.created_at DESC"
  );
  return res.json({ success: true, data: rows });
}

const ResolveReportSchema = z.object({
  reportId: z.coerce.number().int().positive(),
  resolution: z.enum(["REFUND", "RELEASE", "NONE"]),
  adminNote: z.string().max(2000).optional().nullable(),
});

export async function resolveReport(req: AuthedRequest, res: Response) {
  const input = ResolveReportSchema.parse(req.body);

  const [rows] = await pool.query("SELECT * FROM reports WHERE id = ? LIMIT 1", [input.reportId]);
  const report = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!report) return res.status(404).json({ success: false, message: "Report not found" });
  if (report.status !== "OPEN") return res.status(400).json({ success: false, message: "Already resolved" });

  // For MVP: RELEASE moves holding->available for tutor if appointment is HOLDING
  if (input.resolution === "RELEASE") {
    const [apptRows] = await pool.query(
      "SELECT tutor_id, price_paid, commission_amount, tutor_earning, payment_status FROM appointments WHERE id = ? LIMIT 1",
      [report.appointment_id]
    );
    const appt = Array.isArray(apptRows) ? (apptRows as any[])[0] : undefined;
    if (appt && appt.payment_status === "HOLDING") {
      await walletReleaseHolding({
        tutorId: appt.tutor_id,
        amount: getTutorEscrowAmount(appt),
        refType: "APPOINTMENT",
        refId: report.appointment_id,
      });
      await pool.query("UPDATE appointments SET payment_status = 'RELEASED', escrow_released_at = NOW() WHERE id = ?", [
        report.appointment_id,
      ]);
    }
  }

  // REFUND flow will be implemented when wallet/topup is enabled; for now mark appointment refunded.
  if (input.resolution === "REFUND") {
    await pool.query("UPDATE appointments SET payment_status = 'REFUNDED' WHERE id = ?", [report.appointment_id]);
  }

  await pool.query("UPDATE reports SET status='RESOLVED', resolution=?, admin_note=? WHERE id=?", [
    input.resolution,
    input.adminNote ?? null,
    input.reportId,
  ]);

  await createNotifications([
    {
      recipientId: report.reporter_id,
      actorId: req.user?.id ?? null,
      type: "SYSTEM",
      title: "Báo cáo của bạn đã được xử lý",
      body: `Admin đã xử lý báo cáo với kết quả: ${input.resolution}.`,
      linkUrl: "/?tab=bookings",
      entityType: "REPORT",
      entityId: String(input.reportId),
      metadata: { resolution: input.resolution, adminNote: input.adminNote ?? null },
    },
    {
      recipientId: report.target_id,
      actorId: req.user?.id ?? null,
      type: "SYSTEM",
      title: "Một báo cáo liên quan đến bạn đã được xử lý",
      body: `Admin đã xử lý báo cáo với kết quả: ${input.resolution}.`,
      linkUrl: "/?tab=bookings",
      entityType: "REPORT",
      entityId: String(input.reportId),
      metadata: { resolution: input.resolution, adminNote: input.adminNote ?? null },
    },
  ]);

  return res.json({ success: true });
}

function getTutorEscrowAmount(appt: any) {
  const pricePaid = Number(appt.price_paid || 0);
  const commissionAmount = Number(appt.commission_amount || 0);
  const tutorEarning = Number(appt.tutor_earning);
  if (Number.isFinite(tutorEarning) && tutorEarning > 0) {
    return tutorEarning;
  }
  return Math.max(pricePaid - commissionAmount, 0);
}

export async function listEscrowAppointments(_req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [rows]: any = await pool.query(`
      SELECT a.id, a.student_id, a.tutor_id, a.start_time, a.end_time, a.price_paid,
             a.payment_status, a.status, a.created_at, a.commission_percent_snapshot,
             a.commission_amount, a.tutor_earning, a.escrow_release_date, a.escrow_released_at,
             t.full_name as tutor_name, t.email as tutor_email,
             s.full_name as student_name, s.email as student_email
      FROM appointments a
      JOIN users t ON t.id = a.tutor_id
      JOIN users s ON s.id = a.student_id
      WHERE a.payment_status = 'HOLDING'
      ORDER BY a.escrow_release_date ASC, a.created_at DESC
    `);
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function releaseEscrowAppointment(req: AuthedRequest, res: Response): Promise<any> {
  const schema = z.object({
    appointmentId: z.string().min(1).max(36),
    adminNote: z.string().max(2000).optional().nullable(),
  });

  const input = schema.parse({ ...req.body, appointmentId: req.params.appointmentId });
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const [rows]: any = await connection.query(
      "SELECT * FROM appointments WHERE id = ? FOR UPDATE",
      [input.appointmentId]
    );
    const appt = rows[0];
    if (!appt) {
      await connection.rollback();
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }
    if (appt.payment_status !== "HOLDING") {
      await connection.rollback();
      return res.status(400).json({ success: false, message: "Appointment is not in holding status" });
    }

    const releaseAmount = getTutorEscrowAmount(appt);
    await walletReleaseHolding({
      tutorId: appt.tutor_id,
      amount: releaseAmount,
      refType: "ESCROW",
      refId: input.appointmentId,
    }, connection);

    await connection.query(
      "UPDATE appointments SET payment_status = 'RELEASED', escrow_released_at = NOW() WHERE id = ?",
      [input.appointmentId]
    );

    await connection.commit();

    await createNotifications([
      {
        recipientId: appt.tutor_id,
        actorId: req.user?.id ?? null,
        type: "PAYMENT_RELEASED",
        title: "Tiền lớp học đã vào ví khả dụng",
        body: `Admin đã duyệt trả ${releaseAmount.toLocaleString("vi-VN")}đ từ khoản giam tiền.`,
        linkUrl: "/?tab=wallet",
        entityType: "APPOINTMENT",
        entityId: input.appointmentId,
        metadata: { amount: releaseAmount, adminNote: input.adminNote ?? null },
      },
      {
        recipientId: appt.student_id,
        actorId: req.user?.id ?? null,
        type: "SYSTEM",
        title: "Khoản thanh toán lớp học đã được tất toán",
        body: "Admin đã duyệt trả tiền cho gia sư từ khoản giam tiền.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: input.appointmentId,
        metadata: { amount: releaseAmount, adminNote: input.adminNote ?? null },
      },
    ]);

    return res.json({ success: true, data: { appointmentId: input.appointmentId, releasedAmount: releaseAmount } });
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }
}

export async function listSystemLogs(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query(
      "SELECT id, user_id, action, details, ip, created_at FROM system_logs ORDER BY created_at DESC LIMIT 500"
    );
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listAllUsers(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query(
      "SELECT id, full_name, username, email, role, phone, avatar_url, status, created_at FROM users ORDER BY created_at DESC"
    );
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

import bcrypt from "bcryptjs";

export async function updateUserAdmin(req: AuthedRequest, res: Response): Promise<any> {
  const { userId } = req.params;
  const { fullName, email, username, phone, role, status, password } = req.body;

  try {
    // Check if user exists
    const [exists] = await pool.query("SELECT id FROM users WHERE id = ? LIMIT 1", [userId]);
    if (!Array.isArray(exists) || exists.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check username conflict if changing
    const normalizedUsername = username ? username.toLowerCase().trim() : null;
    if (normalizedUsername) {
      const [existsUsername]: any = await pool.query(
        "SELECT id FROM users WHERE username = ? AND id != ? LIMIT 1",
        [normalizedUsername, userId]
      );
      if (existsUsername.length > 0) {
        return res.status(400).json({ success: false, message: "Username already exists" });
      }
    }

    if (password && password.trim() !== "") {
      const passwordHash = await bcrypt.hash(password, 12);
      await pool.query(
        "UPDATE users SET full_name = COALESCE(?, full_name), email = COALESCE(?, email), username = ?, phone = COALESCE(?, phone), role = COALESCE(?, role), status = COALESCE(?, status), password_hash = ? WHERE id = ?",
        [fullName ?? null, email ?? null, normalizedUsername, phone ?? null, role ?? null, status ?? null, passwordHash, userId]
      );
    } else {
      await pool.query(
        "UPDATE users SET full_name = COALESCE(?, full_name), email = COALESCE(?, email), username = ?, phone = COALESCE(?, phone), role = COALESCE(?, role), status = COALESCE(?, status) WHERE id = ?",
        [fullName ?? null, email ?? null, normalizedUsername, phone ?? null, role ?? null, status ?? null, userId]
      );
    }

    await createNotification({
      recipientId: String(userId),
      actorId: req.user?.id ?? null,
      type: "ACCOUNT_UPDATED",
      title: "Tài khoản của bạn vừa được cập nhật",
      body: status === "BANNED"
        ? "Tài khoản của bạn đã bị khóa bởi admin."
        : "Admin vừa cập nhật thông tin tài khoản của bạn.",
      linkUrl: "/?tab=profile",
      entityType: "USER",
      entityId: String(userId),
      metadata: { role: role ?? null, status: status ?? null, passwordChanged: Boolean(password && password.trim() !== "") },
    });

    return res.json({ success: true, message: "Cập nhật người dùng thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

import os from "os";

export async function getSystemStats(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const cpuUsage = os.loadavg()[0];

    const [userRows]: any = await pool.query("SELECT COUNT(*) as count FROM users");
    const [tutorRows]: any = await pool.query("SELECT COUNT(*) as count FROM tutor_profiles");
    const [apptRows]: any = await pool.query("SELECT COUNT(*) as count FROM appointments");

    return res.json({
      success: true,
      data: {
        memory: {
          total: (totalMem / (1024 * 1024 * 1024)).toFixed(2) + " GB",
          used: (usedMem / (1024 * 1024 * 1024)).toFixed(2) + " GB",
          percentage: ((usedMem / totalMem) * 100).toFixed(1) + "%"
        },
        cpu: {
          loadAvg: cpuUsage.toFixed(2),
          cores: os.cpus().length
        },
        stats: {
          users: userRows[0]?.count || 0,
          tutors: tutorRows[0]?.count || 0,
          appointments: apptRows[0]?.count || 0
        }
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const SubjectSchema = z.object({
  name: z.string().min(1).max(120),
});

export async function addSubject(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const input = SubjectSchema.parse(req.body);
    const [result]: any = await pool.query("INSERT INTO subjects (name) VALUES (?)", [input.name]);
    return res.json({ success: true, data: { id: result.insertId, name: input.name } });
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ success: false, message: "Môn học này đã tồn tại!" });
    }
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateSubject(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  try {
    const input = SubjectSchema.parse(req.body);
    await pool.query("UPDATE subjects SET name = ? WHERE id = ?", [input.name, id]);
    return res.json({ success: true, message: "Cập nhật môn học thành công!" });
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ success: false, message: "Môn học này đã tồn tại!" });
    }
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteSubject(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM subjects WHERE id = ?", [id]);
    return res.json({ success: true, message: "Xóa môn học thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listSubjects(req: any, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query("SELECT id, name, created_at FROM subjects ORDER BY name ASC");
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// News endpoints
export async function listNews(req: any, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query("SELECT * FROM news ORDER BY created_at DESC");
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function addNews(req: AuthedRequest, res: Response): Promise<any> {
  const { title, summary, content, thumbnailUrl, category } = req.body;
  try {
    const [result]: any = await pool.query(
      "INSERT INTO news (title, summary, content, thumbnail_url, category) VALUES (?, ?, ?, ?, ?)",
      [title, summary || null, content, thumbnailUrl || null, category || "Chung"]
    );
    return res.json({ success: true, data: { id: result.insertId, title, summary, content, thumbnailUrl, category } });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateNews(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  const { title, summary, content, thumbnailUrl, category } = req.body;
  try {
    await pool.query(
      "UPDATE news SET title = ?, summary = ?, content = ?, thumbnail_url = ?, category = ? WHERE id = ?",
      [title, summary || null, content, thumbnailUrl || null, category || "Chung", id]
    );
    return res.json({ success: true, message: "Cập nhật tin tức thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteNews(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM news WHERE id = ?", [id]);
    return res.json({ success: true, message: "Xóa tin tức thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Documents endpoints
export async function listDocuments(req: any, res: Response): Promise<any> {
  const decodeFilterText = (value: unknown) => {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    if (/[ÃÄÆ]|áº|á»|â/.test(raw)) {
      try {
        return Buffer.from(raw, "latin1").toString("utf8").trim();
      } catch {
        return raw;
      }
    }
    return raw;
  };
  const normalizeFilter = (value: string) => value.trim().replace(/\s+/g, " ").toLowerCase();
  const isAllFilter = (value: string) => {
    const normalized = normalizeFilter(value);
    return !normalized || normalized === "all" || normalized === "tat ca" || normalized === "tất cả";
  };
  const grade = decodeFilterText(req.query.grade);
  const type = decodeFilterText(req.query.type);
  const subject = decodeFilterText(req.query.subject);
  const search = decodeFilterText(req.query.search);
  try {
    const requestedPage = Number.parseInt(String(req.query.page || "1"), 10);
    const requestedPageSize = Number.parseInt(String(req.query.pageSize || "12"), 10);
    const pageSize = Math.min(50, Math.max(6, Number.isFinite(requestedPageSize) ? requestedPageSize : 12));
    const page = Math.max(1, Number.isFinite(requestedPage) ? requestedPage : 1);
    const sort = String(req.query.sort || "newest");
    const orderByMap: Record<string, string> = {
      newest: "created_at DESC, id DESC",
      time: "created_at DESC, id DESC",
      time_desc: "created_at DESC, id DESC",
      time_asc: "created_at ASC, id ASC",
      oldest: "created_at ASC, id ASC",
      downloads: "download_count DESC, created_at DESC, id DESC",
      title: "title ASC, created_at DESC, id DESC",
    };
    const orderBy = orderByMap[sort] || orderByMap.newest;

    let sql = "WHERE is_approved = 'APPROVED'";
    const params: any[] = [];
    
    if (!isAllFilter(grade)) {
      sql += " AND LOWER(TRIM(grade_tag)) = ?";
      params.push(normalizeFilter(grade));
    }
    if (!isAllFilter(type)) {
      sql += " AND LOWER(TRIM(type_tag)) = ?";
      params.push(normalizeFilter(type));
    }
    if (!isAllFilter(subject)) {
      sql += " AND LOWER(TRIM(subject_tag)) = ?";
      params.push(normalizeFilter(subject));
    }
    if (search) {
      sql += " AND (title LIKE ? OR uploader_name LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }
    
    const [countRows]: any = await pool.query(`SELECT COUNT(*) as total FROM documents ${sql}`, params);
    const total = Number(countRows?.[0]?.total || 0);
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(page, totalPages);
    const offset = (safePage - 1) * pageSize;

    const [rows] = await pool.query(
      `SELECT id, title, file_url, grade_tag, type_tag, subject_tag, uploader_id, uploader_name, is_approved, download_count, created_at
       FROM documents
       ${sql}
       ORDER BY ${orderBy}
       LIMIT ? OFFSET ?`,
      [...params, pageSize, offset]
    );
    return res.json({
      success: true,
      data: rows,
      meta: {
        pagination: {
          total,
          page: safePage,
          pageSize,
          totalPages,
        },
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export function decodeMultipartString(val: string | undefined | null): string {
  if (!val) return "";
  try {
    for (let i = 0; i < val.length; i++) {
      if (val.charCodeAt(i) > 255) {
        return val;
      }
    }
    const decoded = Buffer.from(val, "latin1").toString("utf8");
    if (decoded.includes("\uFFFD") && !val.includes("\uFFFD")) {
      return val;
    }
    return decoded;
  } catch (e) {
    return val;
  }
}

export async function uploadDocument(req: AuthedRequest, res: Response): Promise<any> {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ success: false, message: "Vui lòng chọn tệp tài liệu để tải lên." });
  }

  const title = decodeMultipartString(req.body.title);
  const gradeTag = decodeMultipartString(req.body.gradeTag);
  const typeTag = decodeMultipartString(req.body.typeTag);
  let subjectTag = decodeMultipartString(req.body.subjectTag);
  const uploaderId = req.user!.id;
  
  let uploaderName = req.user!.email.split('@')[0];
  try {
    const [userRows]: any = await pool.query("SELECT full_name FROM users WHERE id = ?", [uploaderId]);
    if (userRows && userRows[0]?.full_name) {
      uploaderName = userRows[0].full_name;
    }
  } catch (err) {}

  const role = req.user!.role;

  // 1. Prohibit links in form inputs
  const urlRegex = /https?:\/\/[^\s$.?#].[^\s]*/i;
  if (urlRegex.test(title || "") || urlRegex.test(typeTag || "")) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(400).json({ success: false, message: "Không được nhập liên kết URL trong form!" });
  }

  // 2. Validate grade tag (Lớp 1-12)
  const gradeNum = gradeTag ? parseInt(gradeTag.replace(/\D/g, ""), 10) : -1;
  if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 12) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(400).json({ success: false, message: "Khối lớp được chọn phải từ Lớp 1 đến Lớp 12." });
  }

  // 3. Validate subject (managed by Admin)
  try {
    const rawSubjectTag = req.body.subjectTag || "";
    const decodedSubjectTag = subjectTag || "";
    const [subRows]: any = await pool.query("SELECT * FROM subjects");
    const normRaw = rawSubjectTag.trim().toLowerCase().normalize("NFC");
    const normDecoded = decodedSubjectTag.trim().toLowerCase().normalize("NFC");

    const matchedSubject = subRows.find((sub: any) => {
      const normDb = sub.name.trim().toLowerCase().normalize("NFC");
      return normDb === normRaw || normDb === normDecoded;
    });

    if (!matchedSubject) {
      await fs.promises.rm(file.path, { force: true });
      return res.status(400).json({ success: false, message: "Môn học không hợp lệ hoặc không được quản lý bởi admin." });
    }
    // Reassign to canonical name from database
    subjectTag = matchedSubject.name;
  } catch (dbErr: any) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(500).json({ success: false, message: dbErr.message });
  }

  // 4. Scan file content for safety (malware, script, executables, URLs)
  try {
    await assertDocumentFileIsSafe(file.path, file.mimetype);
  } catch (scanError: any) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(400).json({ success: false, message: `Phát hiện nguy cơ mất an toàn: ${scanError.message}` });
  }

  const isApproved = role === "ADMIN" ? "APPROVED" : "PENDING";
  const fileUrl = publicApiUrl(`/uploads/docs/${file.filename}`);

  try {
    const [result]: any = await pool.query(
      "INSERT INTO documents (title, file_url, grade_tag, type_tag, subject_tag, uploader_id, uploader_name, is_approved) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [title, fileUrl, gradeTag, typeTag, subjectTag, uploaderId, uploaderName, isApproved]
    );
    if (isApproved === "PENDING") {
      await notifyZaloAdmins("DOCUMENT_PENDING", [
        ["📄 Tài liệu", title],
        ["👤 Người gửi", uploaderName],
        ["📧 Email", req.user?.email],
        ["🏷️ Môn", subjectTag],
        ["🎓 Lớp", gradeTag],
        ["📌 Loại", typeTag],
        ["🆔 Document ID", result.insertId],
        ["🧭 Admin", "Vào tab Admin > Duyệt tài liệu"],
      ]);
    }
    return res.json({
      success: true,
      message: role === "ADMIN" ? "Tài liệu đã được đăng lên ngay!" : "Tài liệu đã được tải lên và đang chờ Admin phê duyệt.",
      data: { id: result.insertId, isApproved }
    });
  } catch (error: any) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listPendingDocuments(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query("SELECT * FROM documents WHERE is_approved = 'PENDING' ORDER BY created_at DESC");
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function decideDocument(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  const schema = z.object({
    decision: z.enum(["APPROVED", "REJECTED"]),
    rejectReason: z.string().max(2000).optional().nullable(),
  });
  const { decision, rejectReason } = schema.parse(req.body);
  try {
    const [rows]: any = await pool.query("SELECT uploader_id, title FROM documents WHERE id = ? LIMIT 1", [id]);
    const doc = rows[0];
    await pool.query(
      "UPDATE documents SET is_approved = ?, reject_reason = ? WHERE id = ?",
      [decision, decision === "REJECTED" ? (rejectReason ?? "Rejected") : null, id]
    );
    if (doc?.uploader_id) {
      await createNotification({
        recipientId: doc.uploader_id,
        actorId: req.user?.id ?? null,
        type: decision === "APPROVED" ? "DOCUMENT_APPROVED" : "DOCUMENT_REJECTED",
        title: decision === "APPROVED" ? "Tài liệu đã được duyệt" : "Tài liệu bị từ chối",
        body: decision === "APPROVED"
          ? `Tài liệu "${doc.title}" đã được hiển thị công khai.`
          : `Tài liệu "${doc.title}" bị từ chối bởi admin. Lý do: ${rejectReason ?? "Chưa có lý do cụ thể."}`,
        linkUrl: "/?tab=documents",
        entityType: "DOCUMENT",
        entityId: String(id),
        metadata: { decision, title: doc.title, rejectReason: rejectReason ?? null },
      });
    }
    return res.json({ success: true, message: "Đã duyệt tài liệu thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteDocument(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM documents WHERE id = ?", [id]);
    return res.json({ success: true, message: "Xóa tài liệu thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteDocumentSecure(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  const userId = req.user!.id;
  const userRole = req.user!.role;

  try {
    const [rows]: any = await pool.query("SELECT * FROM documents WHERE id = ?", [id]);
    if (!rows || rows.length === 0) {
      return res.status(404).json({ success: false, message: "Không tìm thấy tài liệu." });
    }

    const doc = rows[0];
    if (userRole !== "ADMIN" && doc.uploader_id !== userId) {
      return res.status(403).json({ success: false, message: "Bạn không có quyền xóa tài liệu này." });
    }

    // Try to delete physical file
    if (doc.file_url) {
      try {
        const filename = path.basename(doc.file_url);
        const filePath = path.join(process.cwd(), "uploads", "docs", filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (err) {
        console.error("Failed to delete physical file from disk:", err);
      }
    }

    await pool.query("DELETE FROM documents WHERE id = ?", [id]);
    return res.json({ success: true, message: "Xóa tài liệu thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteTutorDocument(req: AuthedRequest, res: Response): Promise<any> {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM tutor_documents WHERE id = ?", [id]);
    return res.json({ success: true, message: "Xóa tài liệu minh chứng thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listProposedCommissions(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query(
      "SELECT tp.user_id, tp.commission_percent, tp.proposed_commission_percent, u.full_name, u.email FROM tutor_profiles tp JOIN users u ON u.id = tp.user_id WHERE tp.proposed_commission_percent IS NOT NULL"
    );
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function decideProposedCommission(req: AuthedRequest, res: Response): Promise<any> {
  const schema = z.object({
    tutorUserId: z.string().min(1).max(36),
    decision: z.enum(["APPROVED", "REJECTED"]),
    rejectReason: z.string().max(2000).optional().nullable(),
  });
  try {
    const { tutorUserId, decision, rejectReason } = schema.parse(req.body);
    if (decision === "APPROVED") {
      const [rows]: any = await pool.query("SELECT proposed_commission_percent FROM tutor_profiles WHERE user_id = ?", [tutorUserId]);
      const newPercent = rows[0]?.proposed_commission_percent;
      if (newPercent !== undefined && newPercent !== null) {
        await pool.query(
          "UPDATE tutor_profiles SET commission_percent = ?, proposed_commission_percent = NULL WHERE user_id = ?",
          [newPercent, tutorUserId]
        );
      } else {
        return res.status(400).json({ success: false, message: "Không tìm thấy đề xuất điều chỉnh." });
      }
    } else {
      await pool.query(
        "UPDATE tutor_profiles SET proposed_commission_percent = NULL WHERE user_id = ?",
        [tutorUserId]
      );
    }
    await createNotification({
      recipientId: tutorUserId,
      actorId: req.user?.id ?? null,
      type: decision === "APPROVED" ? "COMMISSION_APPROVED" : "COMMISSION_REJECTED",
      title: decision === "APPROVED" ? "Đề xuất chiết khấu đã được duyệt" : "Đề xuất chiết khấu bị từ chối",
      body: decision === "APPROVED"
        ? "Admin đã duyệt đề xuất điều chỉnh phần trăm chiết khấu của bạn."
        : `Admin đã từ chối đề xuất điều chỉnh phần trăm chiết khấu của bạn. Lý do: ${rejectReason ?? "Chưa có lý do cụ thể."}`,
      linkUrl: "/?tab=profile",
      entityType: "TUTOR_PROFILE",
      entityId: tutorUserId,
      metadata: { decision, rejectReason: rejectReason ?? null },
    });
    return res.json({ success: true, message: "Đã xử lý đề xuất điều chỉnh phần trăm chiết khấu." });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function getDashboardDetails(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const [tutors]: any = await pool.query(`
      SELECT tp.user_id, u.full_name, u.email, u.phone, tp.school, tp.major, tp.year_of_study, tp.hourly_rate, tp.commission_percent, tp.is_verified, tp.created_at
      FROM tutor_profiles tp
      JOIN users u ON u.id = tp.user_id
      ORDER BY tp.created_at DESC
    `);

    const [students]: any = await pool.query(`
      SELECT id, full_name, email, phone, status, created_at
      FROM users
      WHERE role = 'STUDENT'
      ORDER BY created_at DESC
    `);

    const [appointments]: any = await pool.query(`
      SELECT a.id, a.start_time, a.end_time, a.price_paid, a.status, a.payment_status, a.created_at,
             a.commission_percent_snapshot, a.commission_amount, a.tutor_earning, a.escrow_release_date, a.escrow_released_at,
             t.full_name as tutor_name, s.full_name as student_name,
             COALESCE(a.commission_percent_snapshot, tp.commission_percent) as commission_percent
      FROM appointments a
      JOIN users t ON t.id = a.tutor_id
      JOIN users s ON s.id = a.student_id
      JOIN tutor_profiles tp ON tp.user_id = a.tutor_id
      ORDER BY a.created_at DESC
    `);

    const [payments]: any = await pool.query(`
      SELECT a.id, a.price_paid, a.payment_status, a.created_at, a.escrow_release_date, a.escrow_released_at,
             t.full_name as tutor_name, s.full_name as student_name,
             COALESCE(a.commission_percent_snapshot, tp.commission_percent) as commission_percent,
             COALESCE(a.commission_amount, (a.price_paid * tp.commission_percent / 100.0)) as commission_amount,
             COALESCE(a.tutor_earning, (a.price_paid - COALESCE(a.commission_amount, (a.price_paid * tp.commission_percent / 100.0)))) as tutor_earning
      FROM appointments a
      JOIN users t ON t.id = a.tutor_id
      JOIN users s ON s.id = a.student_id
      JOIN tutor_profiles tp ON tp.user_id = a.tutor_id
      WHERE a.payment_status IN ('HOLDING', 'RELEASED')
      ORDER BY a.created_at DESC
    `);

    const totalTutors = tutors.length;
    const totalStudents = students.length;
    const totalAppointments = appointments.length;

    let totalRevenue = 0;
    let totalCommission = 0;

    payments.forEach((p: any) => {
      totalRevenue += Number(p.price_paid || 0);
      totalCommission += Number(p.commission_amount || 0);
    });

    return res.json({
      success: true,
      data: {
        summary: {
          totalTutors,
          totalStudents,
          totalAppointments,
          totalRevenue,
          totalCommission
        },
        tutors,
        students,
        appointments,
        payments
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
