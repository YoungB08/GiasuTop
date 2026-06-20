import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import { createNotification } from "../services/notification.service";

const SendDirectMessageSchema = z.object({
  receiverId: z.string().min(1).max(36),
  message: z.string().min(0).max(2000).default(""),
  fileUrl: z.string().url().max(1000).nullable().optional(),
  fileName: z.string().max(255).nullable().optional(),
  fileType: z.string().max(120).nullable().optional(),
}).refine(data => (data.message.trim().length > 0) || (data.fileUrl), {
  message: "Phải có nội dung tin nhắn hoặc file đính kèm",
});

export async function sendDirectMessage(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const input = SendDirectMessageSchema.parse(req.body);
    const senderId = req.user!.id;

    if (senderId === input.receiverId) {
      return res.status(400).json({ success: false, message: "Bạn không thể tự nhắn tin cho chính mình." });
    }

    await pool.query(
      "INSERT INTO direct_messages (sender_id, receiver_id, message, file_url, file_name, file_type) VALUES (?, ?, ?, ?, ?, ?)",
      [senderId, input.receiverId, input.message || "", input.fileUrl || null, input.fileName || null, input.fileType || null]
    );

    const [senderRows]: any = await pool.query("SELECT full_name FROM users WHERE id = ? LIMIT 1", [senderId]);
    const senderName = senderRows[0]?.full_name || "Người dùng";
    await createNotification({
      recipientId: input.receiverId,
      actorId: senderId,
      type: "MESSAGE",
      title: `${senderName} đã gửi tin nhắn`,
      body: input.message?.trim() || (input.fileName ? `Đã gửi tệp: ${input.fileName}` : "Bạn có tin nhắn mới."),
      linkUrl: "/?tab=messages",
      entityType: "DIRECT_MESSAGE",
      entityId: senderId,
      metadata: { senderId, fileUrl: input.fileUrl ?? null, fileName: input.fileName ?? null },
    });

    return res.json({ success: true, message: "Gửi tin nhắn thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listDirectMessages(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const senderId = req.user!.id;
    const { partnerId } = req.params;

    const [rows] = await pool.query(
      `SELECT dm.id, dm.sender_id, dm.receiver_id, dm.message, dm.is_read, dm.created_at,
              dm.file_url, dm.file_name, dm.file_type
       FROM direct_messages dm
       WHERE (dm.sender_id = ? AND dm.receiver_id = ?)
          OR (dm.sender_id = ? AND dm.receiver_id = ?)
       ORDER BY dm.created_at ASC`,
      [senderId, partnerId, partnerId, senderId]
    );

    await pool.query(
      "UPDATE direct_messages SET is_read = 1 WHERE sender_id = ? AND receiver_id = ? AND is_read = 0",
      [partnerId, senderId]
    );

    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function listChatContacts(req: AuthedRequest, res: Response): Promise<any> {
  try {
    const userId = req.user!.id;

    const [rows]: any = await pool.query(
      `SELECT DISTINCT u.id, u.full_name, u.email, u.avatar_url, u.role
       FROM users u
       WHERE u.id != ? AND (
         u.id IN (SELECT sender_id FROM direct_messages WHERE receiver_id = ?)
         OR u.id IN (SELECT receiver_id FROM direct_messages WHERE sender_id = ?)
         OR u.id IN (SELECT tutor_id FROM appointments WHERE student_id = ?)
         OR u.id IN (SELECT student_id FROM appointments WHERE tutor_id = ?)
       )`,
      [userId, userId, userId, userId, userId]
    );

    for (const contact of rows) {
      const [lastMsgRows]: any = await pool.query(
        `SELECT message, created_at, sender_id
         FROM direct_messages
         WHERE (sender_id = ? AND receiver_id = ?)
            OR (sender_id = ? AND receiver_id = ?)
         ORDER BY created_at DESC LIMIT 1`,
        [userId, contact.id, contact.id, userId]
      );

      const [unreadRows]: any = await pool.query(
        `SELECT COUNT(*) as count
         FROM direct_messages
         WHERE sender_id = ? AND receiver_id = ? AND is_read = 0`,
        [contact.id, userId]
      );

      contact.last_message = lastMsgRows[0] || null;
      contact.unread_count = unreadRows[0]?.count || 0;
    }

    rows.sort((a: any, b: any) => {
      const timeA = a.last_message ? new Date(a.last_message.created_at).getTime() : 0;
      const timeB = b.last_message ? new Date(b.last_message.created_at).getTime() : 0;
      if (timeA !== timeB) return timeB - timeA;
      return a.full_name.localeCompare(b.full_name);
    });

    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
