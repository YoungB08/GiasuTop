import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";

export async function getMe(req: AuthedRequest, res: Response) {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const [rows] = await pool.query(
    "SELECT id, full_name, email, role, phone, avatar_url, status, created_at FROM users WHERE id = ? LIMIT 1",
    [req.user.id]
  );
  const me = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  if (!me) return res.status(404).json({ success: false, message: "User not found" });
  
  if (me.status === "BANNED") {
    return res.status(403).json({ success: false, code: "USER_BANNED", message: "Tài khoản của bạn đã bị khóa (BANNED)!" });
  }

  return res.json({ success: true, data: me });
}

const UpdateMeSchema = z.object({
  fullName: z.string().min(2).max(120).optional(),
  phone: z.string().max(32).optional().nullable(),
  avatarUrl: z.string().url().max(2000).optional().nullable(),
});

export async function updateMe(req: AuthedRequest, res: Response) {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const input = UpdateMeSchema.parse(req.body);

  await pool.query(
    "UPDATE users SET full_name = COALESCE(?, full_name), phone = COALESCE(?, phone), avatar_url = COALESCE(?, avatar_url) WHERE id = ?",
    [input.fullName ?? null, input.phone ?? null, input.avatarUrl ?? null, req.user.id]
  );

  return getMe(req, res);
}

export async function getMyAppointments(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    let query = "";
    const params: any[] = [];

    if (req.user.role === "STUDENT") {
      query = `
        SELECT a.id, a.student_id, a.tutor_id, a.start_time, a.end_time, a.price_paid, a.status, a.payment_status, a.live_room_code, a.live_room_url,
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
               s.full_name as student_name, t.full_name as tutor_name
        FROM appointments a
        JOIN users s ON a.student_id = s.id
        JOIN users t ON a.tutor_id = t.id
        ORDER BY a.start_time DESC
      `;
    }

    const [rows] = await pool.query(query, params);
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
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


