import type { Response } from "express";
import type { PoolConnection } from "mysql2/promise";
import pool from "../config/db";

type DbExecutor = Pick<PoolConnection, "query"> | typeof pool;

export type NotificationType =
  | "MESSAGE"
  | "PROFILE_APPROVED"
  | "PROFILE_REJECTED"
  | "DOCUMENT_APPROVED"
  | "DOCUMENT_REJECTED"
  | "BOOKING_CREATED"
  | "BOOKING_CONFIRMED"
  | "CLASS_COMPLETED"
  | "PAYMENT_PAID"
  | "PAYMENT_RELEASED"
  | "WALLET_TOPUP"
  | "WITHDRAW_REQUEST"
  | "WITHDRAW_APPROVED"
  | "WITHDRAW_REJECTED"
  | "COMMISSION_APPROVED"
  | "COMMISSION_REJECTED"
  | "ACCOUNT_UPDATED"
  | "ADMIN_BROADCAST"
  | "SYSTEM";

export type CreateNotificationInput = {
  recipientId: string;
  actorId?: string | null;
  type: NotificationType;
  title: string;
  body: string;
  linkUrl?: string | null;
  entityType?: string | null;
  entityId?: string | null;
  metadata?: Record<string, unknown> | null;
};

const sseClients = new Map<string, Set<Response>>();

function serializeNotification(row: any) {
  let metadata = row.metadata ?? null;
  if (typeof metadata === "string" && metadata.trim()) {
    try {
      metadata = JSON.parse(metadata);
    } catch {
      metadata = null;
    }
  }

  return {
    id: Number(row.id),
    recipient_id: row.recipient_id,
    actor_id: row.actor_id,
    type: row.type,
    title: row.title,
    body: row.body,
    link_url: row.link_url,
    entity_type: row.entity_type,
    entity_id: row.entity_id,
    metadata,
    is_read: Boolean(row.is_read),
    read_at: row.read_at,
    created_at: row.created_at,
  };
}

function sendSse(res: Response, event: string, data: unknown) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

export function registerNotificationStream(userId: string, res: Response) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders?.();

  let clients = sseClients.get(userId);
  if (!clients) {
    clients = new Set<Response>();
    sseClients.set(userId, clients);
  }
  clients.add(res);

  sendSse(res, "ready", { ok: true });
  const keepAlive = setInterval(() => {
    res.write(": keep-alive\n\n");
  }, 25_000);

  res.on("close", () => {
    clearInterval(keepAlive);
    clients?.delete(res);
    if (clients && clients.size === 0) sseClients.delete(userId);
  });
}

function pushToConnectedUser(userId: string, notification: unknown) {
  const clients = sseClients.get(userId);
  if (!clients || clients.size === 0) return;

  for (const client of clients) {
    sendSse(client, "notification", notification);
  }
}

export async function createNotification(
  input: CreateNotificationInput,
  db: DbExecutor = pool
) {
  const [result]: any = await db.query(
    "INSERT INTO notifications (recipient_id, actor_id, type, title, body, link_url, entity_type, entity_id, metadata) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      input.recipientId,
      input.actorId ?? null,
      input.type,
      input.title,
      input.body,
      input.linkUrl ?? null,
      input.entityType ?? null,
      input.entityId ?? null,
      input.metadata ? JSON.stringify(input.metadata) : null,
    ]
  );

  const notification = {
    id: Number(result.insertId),
    recipient_id: input.recipientId,
    actor_id: input.actorId ?? null,
    type: input.type,
    title: input.title,
    body: input.body,
    link_url: input.linkUrl ?? null,
    entity_type: input.entityType ?? null,
    entity_id: input.entityId ?? null,
    metadata: input.metadata ?? null,
    is_read: false,
    read_at: null,
    created_at: new Date().toISOString(),
  };

  pushToConnectedUser(input.recipientId, notification);
  return notification;
}

export async function createNotifications(inputs: CreateNotificationInput[], db: DbExecutor = pool) {
  const created = [];
  for (const input of inputs) {
    created.push(await createNotification(input, db));
  }
  return created;
}

export async function notifyAdmins(params: Omit<CreateNotificationInput, "recipientId">, db: DbExecutor = pool) {
  const [rows]: any = await db.query("SELECT id FROM users WHERE role = 'ADMIN' AND status = 'ACTIVE'");
  const inputs = rows.map((row: any) => ({
    ...params,
    recipientId: row.id,
  }));
  return createNotifications(inputs, db);
}

export async function listNotifications(userId: string, options?: { limit?: number; unreadOnly?: boolean }) {
  const limit = Math.min(Math.max(options?.limit ?? 50, 1), 100);
  const unreadClause = options?.unreadOnly ? "AND is_read = 0" : "";
  const [rows]: any = await pool.query(
    `SELECT * FROM notifications WHERE recipient_id = ? ${unreadClause} ORDER BY created_at DESC, id DESC LIMIT ?`,
    [userId, limit]
  );
  return rows.map(serializeNotification);
}

export async function countUnreadNotifications(userId: string) {
  const [rows]: any = await pool.query(
    "SELECT COUNT(*) AS count FROM notifications WHERE recipient_id = ? AND is_read = 0",
    [userId]
  );
  return Number(rows[0]?.count ?? 0);
}

export async function markNotificationRead(userId: string, notificationId: number) {
  await pool.query(
    "UPDATE notifications SET is_read = 1, read_at = COALESCE(read_at, NOW()) WHERE id = ? AND recipient_id = ?",
    [notificationId, userId]
  );
}

export async function markAllNotificationsRead(userId: string) {
  await pool.query(
    "UPDATE notifications SET is_read = 1, read_at = COALESCE(read_at, NOW()) WHERE recipient_id = ? AND is_read = 0",
    [userId]
  );
}
