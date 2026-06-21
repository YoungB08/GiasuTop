import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { getClassroomPresence } from "../socket";
import { createNotifications } from "../services/notification.service";

export async function getMe(req: AuthedRequest, res: Response) {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const [rows] = await pool.query(
    "SELECT id, full_name, username, email, role, phone, avatar_url, bio, address, dob, age, status, created_at FROM users WHERE id = ? LIMIT 1",
    [req.user.id]
  );
  const me = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!me) return res.status(404).json({ success: false, message: "User not found" });
  
  if (me.status === "BANNED") {
    return res.status(403).json({ success: false, code: "USER_BANNED", message: "Tài khoản của bạn đã bị khóa (BANNED)!" });
  }

  return res.json({
    success: true,
    data: {
      ...me,
      fullName: me.full_name,
      avatarUrl: me.avatar_url,
    },
  });
}

const UpdateMeSchema = z.object({
  fullName: z.string().min(2).max(120).optional(),
  phone: z.string().max(32).optional().nullable(),
  avatarUrl: z.string().max(2000).optional().nullable(),
  bio: z.string().optional().nullable(),
  address: z.string().max(255).optional().nullable(),
  dob: z.string().max(64).optional().nullable(),
  age: z.number().int().positive().optional().nullable(),
});

export async function updateMe(req: AuthedRequest, res: Response) {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const input = UpdateMeSchema.parse(req.body);

  await pool.query(
    "UPDATE users SET full_name = COALESCE(?, full_name), phone = COALESCE(?, phone), avatar_url = COALESCE(?, avatar_url), bio = COALESCE(?, bio), address = COALESCE(?, address), dob = COALESCE(?, dob), age = COALESCE(?, age) WHERE id = ?",
    [
      input.fullName ?? null,
      input.phone ?? null,
      input.avatarUrl ?? null,
      input.bio ?? null,
      input.address ?? null,
      input.dob ?? null,
      input.age ?? null,
      req.user.id
    ]
  );

  return getMe(req, res);
}

import fs from "fs";
import { detectAllowedUpload } from "../utils/upload";

export async function uploadAvatar(req: any, res: any) {
  try {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    if (!req.file) return res.status(400).json({ success: false, message: "Không có file nào được gửi lên." });

    const isValid = await detectAllowedUpload(req.file.path, req.file.mimetype);
    if (!isValid) {
      await fs.promises.rm(req.file.path, { force: true });
      return res.status(400).json({ success: false, message: "File không hợp lệ hoặc không khớp định dạng hình ảnh." });
    }

    const avatarUrl = `/uploads/avatars/${req.file.filename}`;
    
    // Save to user avatar_url
    await pool.query("UPDATE users SET avatar_url = ? WHERE id = ?", [avatarUrl, req.user.id]);

    return res.json({
      success: true,
      message: "Đã tải lên ảnh đại diện thành công!",
      avatarUrl,
    });
  } catch (e: any) {
    return res.status(500).json({ success: false, message: e.message });
  }
}


export async function getMyAppointments(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    let query = "";
    const params: any[] = [];

    if (req.user.role === "STUDENT") {
      query = `
        SELECT a.id, a.student_id, a.tutor_id, a.start_time, a.end_time, a.price_paid, a.status, a.payment_status, a.live_room_code, a.live_room_url,
               a.student_completed_at, a.tutor_completed_at, a.completed_at,
               u.full_name as tutor_name, u.email as tutor_email, u.phone as tutor_phone
        FROM appointments a
        JOIN users u ON a.tutor_id = u.id
        WHERE a.student_id = ?
        ORDER BY a.start_time DESC
      `;
      params.push(req.user.id);
    } else if (req.user.role === "TUTOR") {
      query = `
        SELECT a.id, a.student_id, a.tutor_id, a.start_time, a.end_time, a.price_paid, a.status, a.payment_status, a.live_room_code, a.live_room_url,
               a.student_completed_at, a.tutor_completed_at, a.completed_at,
               u.full_name as student_name, u.email as student_email, u.phone as student_phone
        FROM appointments a
        JOIN users u ON a.student_id = u.id
        WHERE a.tutor_id = ?
        ORDER BY a.start_time DESC
      `;
      params.push(req.user.id);
    } else {
      query = `
        SELECT a.id, a.student_id, a.tutor_id, a.start_time, a.end_time, a.price_paid, a.status, a.payment_status, a.live_room_code, a.live_room_url,
               a.student_completed_at, a.tutor_completed_at, a.completed_at,
               s.full_name as student_name, t.full_name as tutor_name
        FROM appointments a
        JOIN users s ON a.student_id = s.id
        JOIN users t ON a.tutor_id = t.id
        ORDER BY a.start_time DESC
      `;
    }

    const [rows]: any = await pool.query(query, params);
    const roomIds = rows.map((row: any) => String(row.live_room_code || row.id));
    const presence = new Map(getClassroomPresence(roomIds).map((item) => [item.roomId, item]));
    const data = rows.map((row: any) => {
      const roomId = String(row.live_room_code || row.id);
      const roomPresence = presence.get(roomId);
      return {
        ...row,
        class_id: roomId,
        live_room_code: row.live_room_code || roomId,
        room_presence: roomPresence || {
          roomId,
          participantCount: 0,
          hasParticipants: false,
          participants: [],
        },
        has_live_participants: Boolean(roomPresence?.hasParticipants),
        live_participant_count: Number(roomPresence?.participantCount || 0),
        completion: {
          studentConfirmed: Boolean(row.student_completed_at),
          tutorConfirmed: Boolean(row.tutor_completed_at),
          studentCompletedAt: row.student_completed_at,
          tutorCompletedAt: row.tutor_completed_at,
          completedAt: row.completed_at,
          canFinalize: Boolean(row.student_completed_at && row.tutor_completed_at),
        },
      };
    });
    return res.json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function confirmAppointmentCompleted(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const schema = z.object({
    appointmentId: z.string().min(1).max(36),
  });
  const { appointmentId } = schema.parse(req.params);
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const [rows]: any = await connection.query("SELECT * FROM appointments WHERE id = ? FOR UPDATE", [appointmentId]);
    const appt = rows[0];

    if (!appt) {
      await connection.rollback();
      return res.status(404).json({ success: false, message: "Không tìm thấy lịch học." });
    }

    const isStudent = appt.student_id === req.user.id;
    const isTutor = appt.tutor_id === req.user.id;
    if (!isStudent && !isTutor && req.user.role !== "ADMIN") {
      await connection.rollback();
      return res.status(403).json({ success: false, message: "Bạn không có quyền xác nhận buổi học này." });
    }

    if (appt.payment_status !== "HOLDING" && appt.payment_status !== "RELEASED") {
      await connection.rollback();
      return res.status(400).json({ success: false, message: "Chỉ xác nhận hoàn thành cho lớp đã thanh toán." });
    }

    const updates: string[] = [];
    const params: any[] = [];

    if (isStudent || req.user.role === "ADMIN") {
      updates.push("student_completed_at = COALESCE(student_completed_at, NOW())");
    }
    if (isTutor || req.user.role === "ADMIN") {
      updates.push("tutor_completed_at = COALESCE(tutor_completed_at, NOW())");
    }

    if (updates.length > 0) {
      await connection.query(`UPDATE appointments SET ${updates.join(", ")} WHERE id = ?`, [...params, appointmentId]);
    }

    const [nextRows]: any = await connection.query("SELECT * FROM appointments WHERE id = ? LIMIT 1", [appointmentId]);
    const nextAppt = nextRows[0];
    const bothConfirmed = Boolean(nextAppt.student_completed_at && nextAppt.tutor_completed_at);

    if (bothConfirmed && nextAppt.status !== "DONE") {
      await connection.query("UPDATE appointments SET status = 'DONE', completed_at = COALESCE(completed_at, NOW()) WHERE id = ?", [appointmentId]);
    }

    await connection.commit();

    if (bothConfirmed && appt.status !== "DONE") {
      await createNotifications([
        {
          recipientId: appt.student_id,
          actorId: req.user.id,
          type: "CLASS_COMPLETED",
          title: "Buổi học đã hoàn thành",
          body: "Cả hai bên đã xác nhận hoàn thành buổi học.",
          linkUrl: "/?tab=bookings",
          entityType: "APPOINTMENT",
          entityId: appointmentId,
          metadata: { appointmentId },
        },
        {
          recipientId: appt.tutor_id,
          actorId: req.user.id,
          type: "CLASS_COMPLETED",
          title: "Buổi học đã hoàn thành",
          body: "Cả hai bên đã xác nhận hoàn thành buổi học.",
          linkUrl: "/?tab=bookings",
          entityType: "APPOINTMENT",
          entityId: appointmentId,
          metadata: { appointmentId },
        },
      ]);
    }

    const [finalRows]: any = await pool.query("SELECT student_completed_at, tutor_completed_at, completed_at, status FROM appointments WHERE id = ? LIMIT 1", [appointmentId]);
    return res.json({
      success: true,
      message: bothConfirmed ? "Buổi học đã được hoàn thành." : "Đã ghi nhận xác nhận. Chờ bên còn lại xác nhận.",
      data: {
        appointmentId,
        status: finalRows[0]?.status,
        completion: {
          studentConfirmed: Boolean(finalRows[0]?.student_completed_at),
          tutorConfirmed: Boolean(finalRows[0]?.tutor_completed_at),
          studentCompletedAt: finalRows[0]?.student_completed_at,
          tutorCompletedAt: finalRows[0]?.tutor_completed_at,
          completedAt: finalRows[0]?.completed_at,
        },
      },
    });
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }
}

export async function getMyWallet(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const [rows] = await pool.query(
      "SELECT available_balance, holding_balance FROM wallet_accounts WHERE user_id = ? LIMIT 1",
      [req.user.id]
    );
    const wallet = Array.isArray(rows) && rows.length > 0 ? (rows as any[])[0] : { available_balance: 0.00, holding_balance: 0.00 };
    return res.json({ success: true, data: wallet });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


