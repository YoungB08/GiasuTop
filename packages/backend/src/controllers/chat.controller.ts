import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";

export async function listChatMessages(_req: any, res: Response): Promise<any> {
  try {
    const [rows] = await pool.query(
      `SELECT cm.id, cm.user_id, cm.message, cm.created_at,
              cm.file_url, cm.file_name, cm.file_type,
              u.full_name, u.email, u.role 
       FROM chat_messages cm 
       JOIN users u ON u.id = cm.user_id 
       ORDER BY cm.created_at ASC LIMIT 200`
    );
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const PostChatSchema = z.object({
  message: z.string().min(0).max(1000).default(""),
  fileUrl: z.string().url().max(1000).nullable().optional(),
  fileName: z.string().max(255).nullable().optional(),
  fileType: z.string().max(120).nullable().optional(),
}).refine(data => (data.message.trim().length > 0) || (data.fileUrl), {
  message: "Phải có nội dung tin nhắn hoặc file đính kèm",
});

export async function postChatMessage(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const input = PostChatSchema.parse(req.body);
    const userId = req.user!.id;

    await pool.query(
      "INSERT INTO chat_messages (user_id, message, file_url, file_name, file_type) VALUES (?, ?, ?, ?, ?)",
      [userId, input.message || "", input.fileUrl || null, input.fileName || null, input.fileType || null]
    );

    return res.json({ success: true, message: "Gửi tin nhắn thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
