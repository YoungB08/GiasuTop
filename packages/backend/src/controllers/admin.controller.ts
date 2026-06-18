import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { walletReleaseHolding } from "../services/wallet.service";
import fs from "fs";
import { assertDocumentFileIsSafe } from "../utils/upload";

export async function listPendingTutors(_req: AuthedRequest, res: Response) {
  const [rows]: any = await pool.query(
    "SELECT tp.user_id, tp.bio, tp.school, tp.major, tp.year_of_study, tp.hourly_rate, tp.subjects_to_teach, tp.is_verified, u.full_name, u.email, u.phone, u.avatar_url, tp.reject_reason FROM tutor_profiles tp JOIN users u ON u.id = tp.user_id WHERE tp.is_verified = 'PENDING' ORDER BY tp.created_at DESC"
  );
  
  for (const t of rows) {
    const [docs] = await pool.query("SELECT doc_type, url, status FROM tutor_documents WHERE tutor_user_id = ?", [t.user_id]);
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
  await pool.query("UPDATE tutor_profiles SET is_verified = ?, reject_reason = ? WHERE user_id = ?", [
    input.decision,
    input.decision === "REJECTED" ? input.rejectReason ?? "Rejected" : null,
    input.tutorUserId,
  ]);
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

export async function decideWithdraw(req: AuthedRequest, res: Response) {
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
      "SELECT tutor_id, price_paid, payment_status FROM appointments WHERE id = ? LIMIT 1",
      [report.appointment_id]
    );
    const appt = Array.isArray(apptRows) ? (apptRows as any[])[0] : undefined;
    if (appt && appt.payment_status === "HOLDING") {
      await walletReleaseHolding({
        tutorId: appt.tutor_id,
        amount: Number(appt.price_paid),
        refType: "APPOINTMENT",
        refId: report.appointment_id,
      });
      await pool.query("UPDATE appointments SET payment_status = 'RELEASED' WHERE id = ?", [
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

  return res.json({ success: true });
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
      "SELECT id, full_name, email, role, phone, avatar_url, status, created_at FROM users ORDER BY created_at DESC"
    );
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

import bcrypt from "bcryptjs";

export async function updateUserAdmin(req: AuthedRequest, res: Response): Promise<any> {
  const { userId } = req.params;
  const { fullName, email, phone, role, status, password } = req.body;

  try {
    // Check if user exists
    const [exists] = await pool.query("SELECT id FROM users WHERE id = ? LIMIT 1", [userId]);
    if (!Array.isArray(exists) || exists.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (password && password.trim() !== "") {
      const passwordHash = await bcrypt.hash(password, 12);
      await pool.query(
        "UPDATE users SET full_name = COALESCE(?, full_name), email = COALESCE(?, email), phone = COALESCE(?, phone), role = COALESCE(?, role), status = COALESCE(?, status), password_hash = ? WHERE id = ?",
        [fullName ?? null, email ?? null, phone ?? null, role ?? null, status ?? null, passwordHash, userId]
      );
    } else {
      await pool.query(
        "UPDATE users SET full_name = COALESCE(?, full_name), email = COALESCE(?, email), phone = COALESCE(?, phone), role = COALESCE(?, role), status = COALESCE(?, status) WHERE id = ?",
        [fullName ?? null, email ?? null, phone ?? null, role ?? null, status ?? null, userId]
      );
    }

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
  const { grade, type, subject, search } = req.query;
  try {
    let sql = "SELECT * FROM documents WHERE is_approved = 'APPROVED'";
    const params: any[] = [];
    
    if (grade && grade !== "Tất cả") {
      sql += " AND grade_tag = ?";
      params.push(grade);
    }
    if (type && type !== "Tất cả") {
      sql += " AND type_tag = ?";
      params.push(type);
    }
    if (subject && subject !== "Tất cả") {
      sql += " AND subject_tag = ?";
      params.push(subject);
    }
    if (search) {
      sql += " AND title LIKE ?";
      params.push(`%${search}%`);
    }
    
    sql += " ORDER BY created_at DESC";
    
    const [rows] = await pool.query(sql, params);
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function uploadDocument(req: AuthedRequest, res: Response): Promise<any> {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ success: false, message: "Vui lòng chọn tệp tài liệu để tải lên." });
  }

  const { title, gradeTag, typeTag, subjectTag } = req.body;
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
  const gradeMatch = gradeTag ? gradeTag.match(/^Lớp (\d+)$/) : null;
  const gradeNum = gradeMatch ? parseInt(gradeMatch[1], 10) : -1;
  if (gradeNum < 1 || gradeNum > 12) {
    await fs.promises.rm(file.path, { force: true });
    return res.status(400).json({ success: false, message: "Khối lớp được chọn phải từ Lớp 1 đến Lớp 12." });
  }

  // 3. Validate subject (managed by Admin)
  try {
    const [subRows]: any = await pool.query("SELECT * FROM subjects WHERE name = ?", [subjectTag]);
    if (!subRows || subRows.length === 0) {
      await fs.promises.rm(file.path, { force: true });
      return res.status(400).json({ success: false, message: "Môn học không hợp lệ hoặc không được quản lý bởi admin." });
    }
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
  const fileUrl = `http://localhost:5000/uploads/docs/${file.filename}`;

  try {
    const [result]: any = await pool.query(
      "INSERT INTO documents (title, file_url, grade_tag, type_tag, subject_tag, uploader_id, uploader_name, is_approved) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [title, fileUrl, gradeTag, typeTag, subjectTag, uploaderId, uploaderName, isApproved]
    );
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
  const { decision } = req.body;
  try {
    await pool.query("UPDATE documents SET is_approved = ? WHERE id = ?", [decision, id]);
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
  });
  try {
    const { tutorUserId, decision } = schema.parse(req.body);
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
    return res.json({ success: true, message: "Đã xử lý đề xuất điều chỉnh phần trăm chiết khấu." });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
}


