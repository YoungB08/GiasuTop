import type { Response } from "express";
import path from "path";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { assertUploadedFilesAreSafe, getTutorPrivateUploadPath } from "../utils/upload";



const UpsertTutorProfileSchema = z.object({
  bio: z.string().max(5000).optional().nullable(),
  school: z.string().max(190).optional().nullable(),
  major: z.string().max(190).optional().nullable(),
  yearOfStudy: z.string().max(32).optional().nullable(),
  hourlyRate: z.coerce.number().positive().max(100_000_000).optional().nullable(),
  subjectsToTeach: z.array(z.string().min(1).max(60)).min(1).max(30).optional().nullable(),
  cardGradient: z.string().max(190).optional().nullable(),
  proposedPercent: z.coerce.number().min(0).max(100).optional().nullable(),
});

const DocTypeSchema = z.enum([
  "CCCD_FRONT",
  "CCCD_BACK",
  "PORTRAIT",
  "CERTIFICATE",
  "TRANSCRIPT",
  "OTHER",
]);

function requireTutor(req: AuthedRequest, res: Response) {
  if (!req.user) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return false;
  }
  if (req.user.role !== "TUTOR") {
    res.status(403).json({ success: false, message: "Tutor only" });
    return false;
  }
  return true;
}

function documentUrl(req: AuthedRequest, documentId: number) {
  const base = `${req.protocol}://${req.get("host")}`;
  return `${base}/api/tutors/me/documents/${documentId}/file`;
}

function normalizeDocumentRows(req: AuthedRequest, docs: any[]) {
  return docs.map((doc) => ({
    id: doc.id,
    doc_type: doc.doc_type,
    url: documentUrl(req, Number(doc.id)),
    original_name: doc.original_name,
    mime_type: doc.mime_type,
    file_size_bytes: doc.file_size_bytes,
    status: doc.status,
    created_at: doc.created_at,
  }));
}

export async function upsertMyTutorProfile(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;

  const [profileRows]: any = await pool.query(
    "SELECT is_verified, year_of_study, hourly_rate, proposed_commission_percent, commission_percent FROM tutor_profiles WHERE user_id = ?",
    [req.user!.id]
  );

  const profile = profileRows[0];
  const currentStatus = profile?.is_verified;
  if (!currentStatus || currentStatus === "REJECTED") {
    return res.status(403).json({
      success: false,
      message: "Hồ sơ của bạn chưa được gửi xác minh. Vui lòng gửi tài liệu CCCD trước.",
    });
  }

  const input = UpsertTutorProfileSchema.parse(req.body);
  const subjectsCsv = input.subjectsToTeach
    ? input.subjectsToTeach.map((s: string) => s.trim()).filter(Boolean).join(",")
    : null;
  const proposedPercent = input.proposedPercent ?? null;

  // Only reset to PENDING if there are changes to fields from their current values
  let shouldResetStatus = false;
  if (currentStatus === "APPROVED") {
    const isYearDiff = input.yearOfStudy !== undefined && input.yearOfStudy !== null && input.yearOfStudy !== profile.year_of_study;
    const isRateDiff = input.hourlyRate !== undefined && input.hourlyRate !== null && Number(input.hourlyRate) !== Number(profile.hourly_rate);
    const isCommissionDiff = proposedPercent !== null && 
      Number(proposedPercent) !== Number(profile.commission_percent) && 
      Number(proposedPercent) !== Number(profile.proposed_commission_percent);
    
    if (isYearDiff || isRateDiff || isCommissionDiff) {
      shouldResetStatus = true;
    }
  } else {
    shouldResetStatus = true;
  }

  const newStatus = shouldResetStatus ? "PENDING" : currentStatus;

  await pool.query(
    "UPDATE tutor_profiles SET " +
      "bio = COALESCE(?, bio), " +
      "school = COALESCE(?, school), " +
      "major = COALESCE(?, major), " +
      "year_of_study = COALESCE(?, year_of_study), " +
      "hourly_rate = COALESCE(?, hourly_rate), " +
      "subjects_to_teach = COALESCE(?, subjects_to_teach), " +
      "card_gradient = COALESCE(?, card_gradient), " +
      "is_verified = ?, " +
      "proposed_commission_percent = COALESCE(?, proposed_commission_percent) " +
      "WHERE user_id = ?",
    [
      input.bio ?? null,
      input.school ?? null,
      input.major ?? null,
      input.yearOfStudy ?? null,
      input.hourlyRate ?? null,
      subjectsCsv,
      input.cardGradient ?? null,
      newStatus,
      proposedPercent,
      req.user!.id,
    ]
  );

  return res.json({ success: true, message: shouldResetStatus ? "Cập nhật hồ sơ dạy học thành công. Vui lòng chờ admin phê duyệt lại để hiển thị." : "Cập nhật hồ sơ thành công." });
}

export async function getMyTutorStatus(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;

  const [rows]: any = await pool.query(
    "SELECT is_verified, reject_reason, school, major, year_of_study, hourly_rate, subjects_to_teach, card_gradient, bio FROM tutor_profiles WHERE user_id = ?",
    [req.user!.id]
  );

  const [docs]: any = await pool.query(
    "SELECT id, doc_type, original_name, mime_type, file_size_bytes, status, created_at FROM tutor_documents WHERE tutor_user_id = ? ORDER BY created_at DESC",
    [req.user!.id]
  );

  if (rows.length === 0) {
    return res.json({
      success: true,
      data: {
        is_verified: "NOT_SUBMITTED",
        reject_reason: null,
        documents: normalizeDocumentRows(req, docs),
      },
    });
  }

  return res.json({
    success: true,
    data: {
      ...rows[0],
      subjects_to_teach: rows[0].subjects_to_teach ? rows[0].subjects_to_teach.split(",") : [],
      documents: normalizeDocumentRows(req, docs),
    },
  });
}

export async function submitTutorVerification(req: AuthedRequest, res: Response): Promise<any> {
  return uploadMyTutorDocuments(req, res);
}

export async function uploadMyTutorDocuments(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;

  const files = (req as any).files as
    | {
        [fieldname: string]: Express.Multer.File[];
      }
    | undefined;

  if (!files) return res.status(400).json({ success: false, message: "No files uploaded" });

  const cccdFront = files.cccdFront?.[0];
  const cccdBack = files.cccdBack?.[0];
  const portrait = files.portrait?.[0];
  const certificates = files.certificates ?? [];

  const [profileRows]: any = await pool.query(
    "SELECT is_verified FROM tutor_profiles WHERE user_id = ?",
    [req.user!.id]
  );
  const currentStatus = profileRows[0]?.is_verified || "NOT_SUBMITTED";

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (currentStatus === "APPROVED") {
      // Phase 2: Upload certificates only
      if (certificates.length === 0) {
        connection.release();
        return res.status(400).json({ success: false, message: "Vui lòng chọn ít nhất một chứng chỉ/bằng cấp để tải lên." });
      }
      if (certificates.length > 5) {
        connection.release();
        return res.status(400).json({ success: false, message: "Tối đa 5 chứng chỉ." });
      }

      await assertUploadedFilesAreSafe(certificates);

      const inserts: Array<[string, z.infer<typeof DocTypeSchema>, string, string, string, string, number]> = [];
      const add = (docType: z.infer<typeof DocTypeSchema>, file: Express.Multer.File) => {
        inserts.push([
          req.user!.id,
          docType,
          `/api/tutors/me/documents/file/${encodeURIComponent(file.filename)}`,
          file.filename,
          path.basename(file.originalname),
          file.mimetype,
          file.size,
        ]);
      };

      for (const certificate of certificates) add("CERTIFICATE", certificate);

      // Delete old certificates only
      await connection.query("DELETE FROM tutor_documents WHERE tutor_user_id = ? AND doc_type = 'CERTIFICATE'", [req.user!.id]);
      await connection.query(
        "INSERT INTO tutor_documents (tutor_user_id, doc_type, url, storage_key, original_name, mime_type, file_size_bytes, status) VALUES " +
          inserts.map(() => "(?, ?, ?, ?, ?, ?, ?, 'PENDING')").join(","),
        inserts.flat()
      );
    } else {
      // Phase 1: Upload identity documents (Portrait, CCCD Front, CCCD Back)
      if (!cccdFront || !cccdBack || !portrait) {
        connection.release();
        return res.status(400).json({
          success: false,
          message: "Vui lòng tải lên đầy đủ CCCD mặt trước, mặt sau và ảnh chân dung để xác minh danh tính.",
        });
      }

      const allFiles = [cccdFront, cccdBack, portrait];
      await assertUploadedFilesAreSafe(allFiles);

      const inserts: Array<[string, z.infer<typeof DocTypeSchema>, string, string, string, string, number]> = [];
      const add = (docType: z.infer<typeof DocTypeSchema>, file: Express.Multer.File) => {
        inserts.push([
          req.user!.id,
          docType,
          `/api/tutors/me/documents/file/${encodeURIComponent(file.filename)}`,
          file.filename,
          path.basename(file.originalname),
          file.mimetype,
          file.size,
        ]);
      };

      add("CCCD_FRONT", cccdFront);
      add("CCCD_BACK", cccdBack);
      add("PORTRAIT", portrait);

      // Reset all files and set status to PENDING
      await connection.query("DELETE FROM tutor_documents WHERE tutor_user_id = ?", [req.user!.id]);
      await connection.query(
        "INSERT INTO tutor_documents (tutor_user_id, doc_type, url, storage_key, original_name, mime_type, file_size_bytes, status) VALUES " +
          inserts.map(() => "(?, ?, ?, ?, ?, ?, ?, 'PENDING')").join(","),
        inserts.flat()
      );

      const bio = req.body.bio ?? "";
      const school = req.body.school ?? "";
      const major = req.body.major ?? "";
      const yearOfStudy = req.body.yearOfStudy ?? "Sinh viên năm 1";
      const hourlyRate = req.body.hourlyRate ? Number(req.body.hourlyRate) : 150000;
      let subjectsCSV = "";
      if (req.body.subjectsToTeach) {
        try {
          const parsed = JSON.parse(req.body.subjectsToTeach);
          if (Array.isArray(parsed)) {
            subjectsCSV = parsed.join(",");
          } else {
            subjectsCSV = String(req.body.subjectsToTeach);
          }
        } catch {
          subjectsCSV = String(req.body.subjectsToTeach);
        }
      }
      const cardGradient = req.body.cardGradient ?? "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]";
      const proposedPercent = req.body.proposedPercent ? Number(req.body.proposedPercent) : 10.00;

      await connection.query(
        "INSERT INTO tutor_profiles (user_id, bio, school, major, year_of_study, hourly_rate, subjects_to_teach, card_gradient, is_verified, reject_reason, proposed_commission_percent) " +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', NULL, ?) " +
          "ON DUPLICATE KEY UPDATE bio=VALUES(bio), school=VALUES(school), major=VALUES(major), year_of_study=VALUES(year_of_study), hourly_rate=VALUES(hourly_rate), subjects_to_teach=VALUES(subjects_to_teach), card_gradient=VALUES(card_gradient), is_verified='PENDING', reject_reason=NULL, proposed_commission_percent=VALUES(proposed_commission_percent)",
        [
          req.user!.id,
          bio,
          school,
          major,
          yearOfStudy,
          hourlyRate,
          subjectsCSV,
          cardGradient,
          proposedPercent,
        ]
      );
    }

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }

  const [uploadedDocs]: any = await pool.query(
    "SELECT id, doc_type, original_name, mime_type, file_size_bytes, status, created_at FROM tutor_documents WHERE tutor_user_id = ? ORDER BY created_at DESC",
    [req.user!.id]
  );

  return res.status(201).json({
    success: true,
    message: currentStatus === "APPROVED" ? "Đã tải lên chứng chỉ thành công. Đang chờ phê duyệt." : "Đã tải lên CCCD và chân dung. Hồ sơ đang chờ admin phê duyệt.",
    data: normalizeDocumentRows(req, uploadedDocs),
  });
}

export async function getMyTutorDocumentFile(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const schema = z.object({ documentId: z.coerce.number().int().positive() });
  const { documentId } = schema.parse(req.params);

  const [rows] = await pool.query(
    "SELECT id, tutor_user_id, storage_key, original_name, mime_type, doc_type, status FROM tutor_documents WHERE id = ? LIMIT 1",
    [documentId]
  );
  const doc = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!doc) return res.status(404).json({ success: false, message: "Document not found" });

  let canView = false;
  if (req.user.role === "ADMIN" || doc.tutor_user_id === req.user.id) {
    canView = true;
  } else if (
    (doc.doc_type === "CERTIFICATE" || doc.doc_type === "TRANSCRIPT" || doc.doc_type === "OTHER") &&
    doc.status === "APPROVED"
  ) {
    canView = true;
  }

  if (!canView) return res.status(403).json({ success: false, message: "Forbidden" });
  if (!doc.storage_key) return res.status(404).json({ success: false, message: "Private file not available" });

  const filePath = getTutorPrivateUploadPath(doc.storage_key);
  res.setHeader("Content-Type", doc.mime_type || "application/octet-stream");
  res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(doc.original_name || doc.storage_key)}"`);
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  return res.sendFile(filePath);
}

export async function proposeCommission(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;
  const schema = z.object({
    proposedPercent: z.coerce.number().min(0).max(100),
  });
  try {
    const { proposedPercent } = schema.parse(req.body);
    await pool.query(
      "UPDATE tutor_profiles SET proposed_commission_percent = ? WHERE user_id = ?",
      [proposedPercent, req.user!.id]
    );
    return res.json({
      success: true,
      message: `Đã đề xuất điều chỉnh phần trăm chiết khấu thành ${proposedPercent}%. Vui lòng chờ admin phê duyệt.`
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function getMyTutorDocumentFileByFilename(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const filename = req.params.filename;

  const [rows] = await pool.query(
    "SELECT id, tutor_user_id, storage_key, original_name, mime_type, doc_type, status FROM tutor_documents WHERE storage_key = ? LIMIT 1",
    [filename]
  );
  const doc = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!doc) return res.status(404).json({ success: false, message: "Document not found" });

  let canView = false;
  if (req.user.role === "ADMIN" || doc.tutor_user_id === req.user.id) {
    canView = true;
  } else if (
    (doc.doc_type === "CERTIFICATE" || doc.doc_type === "TRANSCRIPT" || doc.doc_type === "OTHER") &&
    doc.status === "APPROVED"
  ) {
    canView = true;
  }

  if (!canView) return res.status(403).json({ success: false, message: "Forbidden" });
  if (!doc.storage_key) return res.status(404).json({ success: false, message: "Private file not available" });

  const filePath = getTutorPrivateUploadPath(doc.storage_key);
  res.setHeader("Content-Type", doc.mime_type || "application/octet-stream");
  res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(doc.original_name || doc.storage_key)}"`);
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  return res.sendFile(filePath);
}
