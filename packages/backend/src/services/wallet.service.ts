import type { PoolConnection } from "mysql2/promise";
import pool from "../config/db";

type DbExecutor = Pick<PoolConnection, "query"> | typeof pool;

export async function ensureWallet(userId: string, db: DbExecutor = pool) {
  await db.query(
    "INSERT IGNORE INTO wallet_accounts (user_id, available_balance, holding_balance) VALUES (?, 0, 0)",
    [userId]
  );
}

export async function walletHoldToTutor(params: {
  tutorId: string;
  amount: number;
  refType: string;
  refId: string;
}, db: DbExecutor = pool) {
  await ensureWallet(params.tutorId, db);

  await db.query("UPDATE wallet_accounts SET holding_balance = holding_balance + ? WHERE user_id = ?", [
    params.amount,
    params.tutorId,
  ]);
  await db.query(
    "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'HOLD', ?, ?, ?)",
    [params.tutorId, params.amount, params.refType, params.refId]
  );
}

export async function walletReleaseHolding(params: {
  tutorId: string;
  amount: number;
  refType: string;
  refId: string;
}, db: DbExecutor = pool) {
  await ensureWallet(params.tutorId, db);

  await db.query(
    "UPDATE wallet_accounts SET holding_balance = holding_balance - ?, available_balance = available_balance + ? WHERE user_id = ?",
    [params.amount, params.amount, params.tutorId]
  );
  await db.query(
    "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'RELEASE', ?, ?, ?)",
    [params.tutorId, params.amount, params.refType, params.refId]
  );
}

export async function walletTopup(params: {
  userId: string;
  amount: number;
  refType: string;
  refId: string;
}, db: DbExecutor = pool) {
  await ensureWallet(params.userId, db);

  await db.query("UPDATE wallet_accounts SET available_balance = available_balance + ? WHERE user_id = ?", [
    params.amount,
    params.userId,
  ]);
  await db.query(
    "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'TOPUP', ?, ?, ?)",
    [params.userId, params.amount, params.refType, params.refId]
  );
}

export async function walletDebitAvailable(params: {
  userId: string;
  amount: number;
  entryType: "BOOKING_PAYMENT" | "WITHDRAW_REQUEST";
  refType: string;
  refId: string;
}, db: DbExecutor = pool) {
  await ensureWallet(params.userId, db);

  const [rows] = await db.query("SELECT available_balance FROM wallet_accounts WHERE user_id = ? FOR UPDATE", [
    params.userId,
  ]);
  const wallet = Array.isArray(rows) ? (rows as any[])[0] : undefined;
  const available = Number(wallet?.available_balance ?? 0);
  if (!Number.isFinite(available) || available < params.amount) {
    const error = new Error("Insufficient wallet balance");
    (error as any).statusCode = 400;
    throw error;
  }

  await db.query("UPDATE wallet_accounts SET available_balance = available_balance - ? WHERE user_id = ?", [
    params.amount,
    params.userId,
  ]);
  await db.query(
    "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, ?, ?, ?, ?)",
    [params.userId, params.entryType, params.amount, params.refType, params.refId]
  );
}

export async function walletRefundAvailable(params: {
  userId: string;
  amount: number;
  entryType: "REFUND" | "WITHDRAW_REJECT";
  refType: string;
  refId: string;
}, db: DbExecutor = pool) {
  await ensureWallet(params.userId, db);

  await db.query("UPDATE wallet_accounts SET available_balance = available_balance + ? WHERE user_id = ?", [
    params.amount,
    params.userId,
  ]);
  await db.query(
    "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, ?, ?, ?, ?)",
    [params.userId, params.entryType, params.amount, params.refType, params.refId]
  );
}
