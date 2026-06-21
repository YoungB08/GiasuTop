import type { Response } from "express";
import path from "path";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { assertUploadedFilesAreSafe, getTutorPrivateUploadPath } from "../utils/upload";
import { notifyAdmins } from "../services/notification.service";
import { notifyZaloAdmins, zaloFormat } from "../services/zaloAdmin.service";
import { EKYC_AUTO_ACCEPT_THRESHOLD, parseEkycPayload } from "../services/ekyc.service";



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

function hasCompletedTeachingProfile(profile: any) {
  if (!profile) return false;
  if (profile.teaching_profile_completed_at) return true;
  return Boolean(
    String(profile.school || "").trim() &&
      String(profile.major || "").trim() &&
      String(profile.bio || "").trim() &&
      String(profile.subjects_to_teach || "").trim() &&
      Number(profile.hourly_rate || 0) > 0
  );
}

function hasSubmittedIdentity(profile: any, docs: any[] = []) {
  if (profile?.identity_submitted_at) return true;
  const docTypes = new Set(docs.map((doc) => doc.doc_type));
  return docTypes.has("CCCD_FRONT") && docTypes.has("CCCD_BACK") && docTypes.has("PORTRAIT");
}

function tutorRegistrationStep(profile: any, docs: any[] = []) {
  if (!hasSubmittedIdentity(profile, docs) || profile?.is_verified === "REJECTED") return "IDENTITY";
  if (!hasCompletedTeachingProfile(profile)) return "TEACHING_PROFILE";
  if (profile?.is_verified === "PENDING") return "PENDING_REVIEW";
  return "COMPLETED";
}

export async function upsertMyTutorProfile(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;

  const [profileRows]: any = await pool.query(
    "SELECT is_verified, year_of_study, hourly_rate, proposed_commission_percent, commission_percent, bio, school, major, subjects_to_teach, ekyc_status, ekyc_score, identity_submitted_at, teaching_profile_completed_at FROM tutor_profiles WHERE user_id = ?",
    [req.user!.id]
  );
 
  const profile = profileRows[0];
  const currentStatus = profile?.is_verified;
  const [identityDocs]: any = await pool.query(
    "SELECT doc_type FROM tutor_documents WHERE tutor_user_id = ? AND doc_type IN ('CCCD_FRONT','CCCD_BACK','PORTRAIT')",
    [req.user!.id]
  );
  if (!currentStatus || currentStatus === "REJECTED" || !hasSubmittedIdentity(profile, identityDocs)) {
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
  const isFirstTeachingProfile = !hasCompletedTeachingProfile(profile);
  const autoAcceptedIdentity = profile.ekyc_status === "AUTO_ACCEPTED" && Number(profile.ekyc_score || 0) >= EKYC_AUTO_ACCEPT_THRESHOLD;
 
  // Only reset to PENDING if there are changes to fields from their current values
  let shouldResetStatus = false;
  if (isFirstTeachingProfile) {
    shouldResetStatus = !autoAcceptedIdentity;
  } else if (currentStatus === "APPROVED") {
    const isYearDiff = input.yearOfStudy !== undefined && input.yearOfStudy !== null && input.yearOfStudy !== profile.year_of_study;
    const isRateDiff = input.hourlyRate !== undefined && input.hourlyRate !== null && Number(input.hourlyRate) !== Number(profile.hourly_rate);
    const isCommissionDiff = proposedPercent !== null && 
      Number(proposedPercent) !== Number(profile.commission_percent) && 
      Number(proposedPercent) !== Number(profile.proposed_commission_percent);
    const isBioDiff = input.bio !== undefined && input.bio !== null && input.bio !== profile.bio;
    const isSchoolDiff = input.school !== undefined && input.school !== null && input.school !== profile.school;
    const isMajorDiff = input.major !== undefined && input.major !== null && input.major !== profile.major;
    const isSubjectsDiff = subjectsCsv !== null && subjectsCsv !== profile.subjects_to_teach;
    
    if (isYearDiff || isRateDiff || isCommissionDiff || isBioDiff || isSchoolDiff || isMajorDiff || isSubjectsDiff) {
      shouldResetStatus = true;
    }
  } else {
    shouldResetStatus = true;
  }
 
  const newStatus = autoAcceptedIdentity && isFirstTeachingProfile ? "APPROVED" : shouldResetStatus ? "PENDING" : currentStatus;
 
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
      "commission_percent = CASE WHEN ? = 'APPROVED' THEN COALESCE(?, commission_percent) ELSE commission_percent END, " +
      "proposed_commission_percent = CASE WHEN ? = 'APPROVED' THEN NULL ELSE COALESCE(?, proposed_commission_percent) END, " +
      "teaching_profile_completed_at = COALESCE(teaching_profile_completed_at, NOW()) " +
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
      newStatus,
      proposedPercent,
      newStatus,
      proposedPercent,
      req.user!.id,
    ]
  );

  if (newStatus === "PENDING") {
    await notifyAdmins({
      actorId: req.user!.id,
      type: "SYSTEM",
      title: "Gia sư đã cập nhật hồ sơ",
      body: `${req.user!.email} vừa cập nhật hồ sơ gia sư và đang chờ duyệt lại.`,
      linkUrl: "/?tab=admin&tutors=1",
      entityType: "TUTOR_PROFILE",
      entityId: req.user!.id,
    });
    await notifyZaloAdmins("TUTOR_PENDING", [
      ["👤 Gia sư", req.user!.email],
      ["📌 Loại", "Cập nhật hồ sơ cần duyệt lại"],
      ["🏫 Trường", input.school ?? profile?.school],
      ["📚 Môn", subjectsCsv ?? profile?.subjects_to_teach],
      ["💰 Học phí", input.hourlyRate ? zaloFormat.money(input.hourlyRate) : null],
      ["💎 Chiết khấu đề xuất", proposedPercent !== null ? `${proposedPercent}%` : null],
      ["🆔 User ID", req.user!.id],
    ]);
  } else if (autoAcceptedIdentity && isFirstTeachingProfile) {
    await notifyAdmins({
      actorId: req.user!.id,
      type: "SYSTEM",
      title: "Gia sÆ° Ä‘Æ°á»£c eKYC tá»± Ä‘á»™ng duyá»‡t",
      body: `${req.user!.email} Ä‘áº¡t eKYC ${Number(profile.ekyc_score || 0)}% vÃ  Ä‘Ã£ hoÃ n táº¥t há»“ sÆ¡ dáº¡y há»c.`,
      linkUrl: "/?tab=admin&tutors=1",
      entityType: "TUTOR_PROFILE",
      entityId: req.user!.id,
      metadata: { ekycScore: Number(profile.ekyc_score || 0) },
    });
  }
 
  return res.json({
    success: true,
    message: newStatus === "APPROVED" ? "Hồ sơ dạy học đã hoàn tất và được eKYC tự động phê duyệt." : "Cập nhật hồ sơ dạy học thành công. Vui lòng chờ admin phê duyệt.",
    data: {
      is_verified: newStatus,
      autoApproved: newStatus === "APPROVED" && autoAcceptedIdentity,
      identity_submitted: true,
      teaching_profile_completed: true,
      registration_step: newStatus === "PENDING" ? "PENDING_REVIEW" : "COMPLETED",
    },
  });
}

export async function getMyTutorStatus(req: AuthedRequest, res: Response): Promise<any> {
  if (!requireTutor(req, res)) return;

  const [rows]: any = await pool.query(
    "SELECT is_verified, reject_reason, school, major, year_of_study, hourly_rate, subjects_to_teach, card_gradient, bio, commission_percent, proposed_commission_percent, ekyc_status, ekyc_score, ekyc_result, identity_submitted_at, teaching_profile_completed_at FROM tutor_profiles WHERE user_id = ?",
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
        identity_submitted: false,
        teaching_profile_completed: false,
        registration_step: "IDENTITY",
        documents: normalizeDocumentRows(req, docs),
      },
    });
  }

  const profile = rows[0];
  const identitySubmitted = hasSubmittedIdentity(profile, docs);
  const teachingProfileCompleted = hasCompletedTeachingProfile(profile);

  return res.json({
    success: true,
    data: {
      ...profile,
      subjects_to_teach: profile.subjects_to_teach ? profile.subjects_to_teach.split(",") : [],
      identity_submitted: identitySubmitted,
      teaching_profile_completed: teachingProfileCompleted,
      registration_step: tutorRegistrationStep(profile, docs),
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
    "SELECT is_verified, school, major, bio, subjects_to_teach, hourly_rate, teaching_profile_completed_at FROM tutor_profiles WHERE user_id = ?",
    [req.user!.id]
  );
  const existingProfile = profileRows[0];
  const currentStatus = existingProfile?.is_verified || "NOT_SUBMITTED";
  let uploadedIdentityStep = false;

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    if (currentStatus === "APPROVED") {
      // Phase 2: Upload certificates only
      if (certificates.length === 0) {
        await connection.rollback();
        return res.status(400).json({ success: false, message: "Vui lòng chọn ít nhất một chứng chỉ/bằng cấp để tải lên." });
      }
      if (certificates.length > 5) {
        await connection.rollback();
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
          path.basename(Buffer.from(file.originalname, "latin1").toString("utf8")),
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
        await connection.rollback();
        return res.status(400).json({
          success: false,
          message: "Vui lòng tải lên đầy đủ CCCD mặt trước, mặt sau và ảnh chân dung để xác minh danh tính.",
        });
      }

      const allFiles = [cccdFront, cccdBack, portrait];
      await assertUploadedFilesAreSafe(allFiles);

      const ekycPayload = parseEkycPayload(req.body.ekycResult);
      const ekycVerification = (ekycPayload as any)?.verification || ekycPayload;
      const ekycScore = Number((ekycVerification as any)?.scores?.overall ?? 0);
      if (!ekycPayload || !(ekycVerification as any)?.status || !Number.isFinite(ekycScore) || ekycScore <= 0) {
        await connection.rollback();
        return res.status(400).json({
          success: false,
          message: "Vui lòng hoàn tất eKYC tự động trước khi gửi bước 1.",
        });
      }
      const autoApproved = (ekycVerification as any)?.status === "approved" && ekycScore >= EKYC_AUTO_ACCEPT_THRESHOLD;
      const nextStatus = hasCompletedTeachingProfile(existingProfile) && autoApproved ? "APPROVED" : "PENDING";
      const ekycStatus = autoApproved ? "AUTO_ACCEPTED" : "MANUAL_REVIEW";
      const ekycResultJson = JSON.stringify(ekycPayload);
      uploadedIdentityStep = true;

      const inserts: Array<[string, z.infer<typeof DocTypeSchema>, string, string, string, string, number]> = [];
      const add = (docType: z.infer<typeof DocTypeSchema>, file: Express.Multer.File) => {
        inserts.push([
          req.user!.id,
          docType,
          `/api/tutors/me/documents/file/${encodeURIComponent(file.filename)}`,
          file.filename,
          path.basename(Buffer.from(file.originalname, "latin1").toString("utf8")),
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

      await connection.query(
        "INSERT INTO tutor_profiles (user_id, bio, school, major, year_of_study, hourly_rate, subjects_to_teach, card_gradient, is_verified, reject_reason, proposed_commission_percent, ekyc_status, ekyc_score, ekyc_result, identity_submitted_at) " +
          "VALUES (?, NULL, NULL, NULL, NULL, NULL, '', ?, ?, NULL, NULL, ?, ?, ?, NOW()) " +
          "ON DUPLICATE KEY UPDATE is_verified=VALUES(is_verified), reject_reason=NULL, ekyc_status=VALUES(ekyc_status), ekyc_score=VALUES(ekyc_score), ekyc_result=VALUES(ekyc_result), identity_submitted_at=NOW()",
        [
          req.user!.id,
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]",
          nextStatus,
          ekycStatus,
          ekycScore,
          ekycResultJson,
        ]
      );

      if (autoApproved) {
        await connection.query(
          "UPDATE tutor_documents SET status = 'APPROVED' WHERE tutor_user_id = ? AND doc_type IN ('CCCD_FRONT','CCCD_BACK','PORTRAIT')",
          [req.user!.id]
        );
      }
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

  const [nextProfileRows]: any = await pool.query(
    "SELECT is_verified, school, major, bio, subjects_to_teach, hourly_rate, ekyc_status, ekyc_score, identity_submitted_at, teaching_profile_completed_at FROM tutor_profiles WHERE user_id = ? LIMIT 1",
    [req.user!.id]
  );
  const nextProfile = nextProfileRows[0];
  const autoApproved = nextProfile?.is_verified === "APPROVED" && nextProfile?.ekyc_status === "AUTO_ACCEPTED";
  const teachingProfileCompleted = hasCompletedTeachingProfile(nextProfile);
  const identitySubmitted = hasSubmittedIdentity(nextProfile, uploadedDocs);

  if (!uploadedIdentityStep || teachingProfileCompleted) {
    if (autoApproved) {
    await notifyAdmins({
      actorId: req.user!.id,
      type: "SYSTEM",
      title: "Gia sư được eKYC tự động duyệt",
      body: `${req.user!.email} đạt eKYC ${Number(nextProfile.ekyc_score || 0)}% và đã được tự động phê duyệt.`,
      linkUrl: "/?tab=admin&tutors=1",
      entityType: "TUTOR_PROFILE",
      entityId: req.user!.id,
      metadata: { ekycScore: Number(nextProfile.ekyc_score || 0) },
    });
    } else {
    await notifyAdmins({
      actorId: req.user!.id,
      type: "SYSTEM",
      title: currentStatus === "APPROVED" ? "Gia sư đã gửi chứng chỉ mới" : "Có hồ sơ gia sư mới chờ duyệt",
      body: currentStatus === "APPROVED"
        ? `${req.user!.email} vừa tải lên chứng chỉ mới.`
        : `${req.user!.email} vừa gửi hồ sơ xác minh gia sư.`,
      linkUrl: "/?tab=admin&tutors=1",
      entityType: "TUTOR_PROFILE",
      entityId: req.user!.id,
    });
    await notifyZaloAdmins("TUTOR_PENDING", [
      ["👤 Gia sư", req.user!.email],
      ["📌 Loại", currentStatus === "APPROVED" ? "Chứng chỉ mới chờ duyệt" : "Hồ sơ xác minh mới"],
      ["📎 Số tài liệu", uploadedDocs.length],
      ["🧪 eKYC", nextProfile?.ekyc_score ? `${nextProfile.ekyc_score}% - duyệt tay` : "Chưa chạy"],
      ["🆔 User ID", req.user!.id],
      ["🧭 Admin", "Vào tab Admin > Duyệt gia sư"],
    ]);
    }
  }

  return res.status(201).json({
    success: true,
    message: uploadedIdentityStep && !teachingProfileCompleted
      ? "Đã lưu bước 1. Vui lòng tiếp tục bước 2 để hoàn tất hồ sơ dạy học."
      : autoApproved
        ? `eKYC đạt ${Number(nextProfile.ekyc_score || 0)}%, hồ sơ đã được tự động phê duyệt.`
        : currentStatus === "APPROVED"
          ? "Đã tải lên chứng chỉ thành công. Đang chờ phê duyệt."
          : "Đã tải lên CCCD và chân dung. Hồ sơ đang chờ admin phê duyệt.",
    data: {
      documents: normalizeDocumentRows(req, uploadedDocs),
      autoApproved,
      ekycStatus: nextProfile?.ekyc_status || null,
      ekycScore: nextProfile?.ekyc_score ?? null,
      identity_submitted: identitySubmitted,
      teaching_profile_completed: teachingProfileCompleted,
      registration_step: tutorRegistrationStep(nextProfile, uploadedDocs),
    },
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
    await notifyAdmins({
      actorId: req.user!.id,
      type: "SYSTEM",
      title: "Gia sư đề xuất chiết khấu",
      body: `${req.user!.email} đề xuất điều chỉnh chiết khấu thành ${proposedPercent}%.`,
      linkUrl: "/?tab=admin&tutors=1",
      entityType: "TUTOR_PROFILE",
      entityId: req.user!.id,
      metadata: { proposedPercent },
    });
    await notifyZaloAdmins("COMMISSION_PENDING", [
      ["👤 Gia sư", req.user!.email],
      ["💎 Chiết khấu đề xuất", `${proposedPercent}%`],
      ["🆔 User ID", req.user!.id],
      ["🧭 Admin", "Vào Admin duyệt/từ chối đề xuất"],
    ]);
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
