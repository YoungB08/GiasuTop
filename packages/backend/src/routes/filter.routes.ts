import { Router, Request, Response } from "express";
import pool from "../config/db";

const router = Router();

// GET /api/filters
router.get("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const [subjectsRows]: any = await pool.query("SELECT id, name FROM subjects ORDER BY name ASC");
    const [locationsRows]: any = await pool.query("SELECT id, name FROM locations ORDER BY name ASC");
    const [gradesRows]: any = await pool.query("SELECT id, name FROM grades ORDER BY id ASC");

    return res.json({
      success: true,
      data: {
        subjects: subjectsRows.map((s: any) => s.name),
        locations: locationsRows.map((l: any) => l.name),
        grades: gradesRows.map((g: any) => g.name),
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
