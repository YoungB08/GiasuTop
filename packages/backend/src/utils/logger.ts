import pool from "../config/db";

export async function logActivity(
  userId: string | null,
  action: string,
  details: string | null,
  ip: string | null = null
) {
  try {
    await pool.query(
      "INSERT INTO system_logs (user_id, action, details, ip) VALUES (?, ?, ?, ?)",
      [userId, action, details, ip]
    );
  } catch (e: any) {
    console.error("❌ Lỗi khi ghi system_log vào DB:", e.message);
  }
}
