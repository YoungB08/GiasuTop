import { Router, Response } from "express";
import { requireAuth, AuthedRequest } from "../middlewares/auth";
import pool from "../config/db";

const router = Router();

// GET /api/classes - Get all open classes (quick match posts)
router.get("/", async (req: AuthedRequest, res: Response): Promise<any> => {
  try {
    const [rows]: any = await pool.query(`
      SELECT 
        qmp.id, 
        qmp.student_id, 
        qmp.subject, 
        qmp.grade, 
        qmp.expected_rate, 
        qmp.time_window_text, 
        qmp.status, 
        qmp.created_at,
        u.full_name as student_name,
        u.avatar_url as student_avatar
      FROM quick_match_posts qmp
      JOIN users u ON qmp.student_id = u.id
      WHERE qmp.status = 'OPEN'
      ORDER BY qmp.created_at DESC
    `);
    return res.json({ success: true, data: rows });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/classes - Create a new quick match post (Student only)
router.post("/", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const { subject, grade, expectedRate, timeWindowText } = req.body;
  if (!subject || !grade) {
    return res.status(400).json({ success: false, message: "Môn học và Khối lớp là bắt buộc" });
  }

  try {
    await pool.query(
      "INSERT INTO quick_match_posts (student_id, subject, grade, expected_rate, time_window_text, status) VALUES (?, ?, ?, ?, ?, 'OPEN')",
      [req.user.id, subject, grade, expectedRate || null, timeWindowText || null]
    );
    return res.status(201).json({ success: true, message: "Đăng tin tìm gia sư thành công!" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
