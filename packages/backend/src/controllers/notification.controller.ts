import type { Response } from "express";
import { z } from "zod";
import pool from "../config/db";
import type { AuthedRequest } from "../middlewares/auth";
import {
  countUnreadNotifications,
  createNotifications,
  deletePushSubscription,
  getVapidPublicKey,
  listNotifications,
  markAllNotificationsRead,
  markNotificationRead,
  registerNotificationStream,
  savePushSubscription,
} from "../services/notification.service";

const ListNotificationsSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).optional(),
  unreadOnly: z.coerce.boolean().optional(),
});

export async function getMyNotifications(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const query = ListNotificationsSchema.parse(req.query);
  const [notifications, unreadCount] = await Promise.all([
    listNotifications(req.user.id, { limit: query.limit, unreadOnly: query.unreadOnly }),
    countUnreadNotifications(req.user.id),
  ]);

  return res.json({ success: true, data: notifications, unreadCount });
}

export async function getMyUnreadNotificationCount(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const unreadCount = await countUnreadNotifications(req.user.id);
  return res.json({ success: true, unreadCount });
}

export async function streamMyNotifications(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  return registerNotificationStream(req.user.id, res);
}

export async function getPushConfig(_req: AuthedRequest, res: Response): Promise<any> {
  return res.json({
    success: true,
    data: {
      vapidPublicKey: getVapidPublicKey(),
    },
  });
}

export async function registerPushSubscription(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const schema = z.object({
    subscription: z.object({
      endpoint: z.string().url(),
      keys: z.object({
        p256dh: z.string().min(1),
        auth: z.string().min(1),
      }),
    }),
  });
  const input = schema.parse(req.body);
  await savePushSubscription(req.user.id, input.subscription, req.headers["user-agent"] || null);
  return res.status(201).json({ success: true });
}

export async function unregisterPushSubscription(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const schema = z.object({ endpoint: z.string().url() });
  const input = schema.parse(req.body);
  await deletePushSubscription(req.user.id, input.endpoint);
  return res.json({ success: true });
}

export async function markMyNotificationRead(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  const schema = z.object({ id: z.coerce.number().int().positive() });
  const { id } = schema.parse(req.params);
  await markNotificationRead(req.user.id, id);
  const unreadCount = await countUnreadNotifications(req.user.id);
  return res.json({ success: true, unreadCount });
}

export async function markMyNotificationsRead(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  await markAllNotificationsRead(req.user.id);
  return res.json({ success: true, unreadCount: 0 });
}

const AdminSendNotificationSchema = z.object({
  title: z.string().min(1).max(180),
  body: z.string().min(1).max(2000),
  linkUrl: z.string().max(1000).optional().nullable(),
  recipientIds: z.array(z.string().min(1).max(36)).max(500).optional(),
  role: z.enum(["STUDENT", "TUTOR", "ADMIN", "ALL"]).optional().default("ALL"),
});

export async function adminSendNotification(req: AuthedRequest, res: Response): Promise<any> {
  if (!req.user || req.user.role !== "ADMIN") {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }

  const input = AdminSendNotificationSchema.parse(req.body);
  let recipientIds = input.recipientIds ?? [];

  if (recipientIds.length === 0) {
    const roleClause = input.role === "ALL" ? "" : "AND role = ?";
    const params = input.role === "ALL" ? [] : [input.role];
    const [rows]: any = await pool.query(
      `SELECT id FROM users WHERE status = 'ACTIVE' ${roleClause}`,
      params
    );
    recipientIds = rows.map((row: any) => row.id);
  }

  recipientIds = [...new Set(recipientIds)].filter((id) => id !== req.user!.id || input.role === "ADMIN");

  await createNotifications(
    recipientIds.map((recipientId) => ({
      recipientId,
      actorId: req.user!.id,
      type: "ADMIN_BROADCAST",
      title: input.title,
      body: input.body,
      linkUrl: input.linkUrl ?? "/",
      entityType: "ADMIN_BROADCAST",
      metadata: { role: input.role },
    }))
  );

  return res.status(201).json({
    success: true,
    message: `Đã gửi thông báo tới ${recipientIds.length} người dùng.`,
    data: { sent: recipientIds.length },
  });
}
