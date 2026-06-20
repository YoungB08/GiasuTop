import { Request, Response } from 'express';
import pool from '../config/db';
import { v4 as uuidv4 } from 'uuid';

export const getTutors = async (req: Request, res: Response) => {
  try {
    const [rows]: any = await pool.query(`
      SELECT
        u.id as user_id,
        u.full_name,
        u.email,
        u.avatar_url,
        tp.bio,
        tp.school,
        tp.major,
        tp.year_of_study,
        tp.hourly_rate,
        tp.subjects_to_teach,
        tp.card_gradient
      FROM tutor_profiles tp
      JOIN users u ON tp.user_id = u.id
      WHERE tp.is_verified = 'APPROVED'
    `);

    
    const formats = await Promise.all(rows.map(async (tutor: any) => {
      const [docs]: any = await pool.query(
        "SELECT id, doc_type, original_name, mime_type FROM tutor_documents WHERE tutor_user_id = ? AND doc_type IN ('CERTIFICATE', 'TRANSCRIPT', 'OTHER') AND status = 'APPROVED'",
        [tutor.user_id]
      );
      return {
        ...tutor,
        subjects_to_teach: tutor.subjects_to_teach ? tutor.subjects_to_teach.split(',') : [],
        card_gradient: tutor.card_gradient || 'bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]',
        documents: docs
      };
    }));

    res.json({ success: true, data: formats });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTutorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tutorId } = req.params;
    const [rows]: any = await pool.query(`
      SELECT
        u.id as user_id,
        u.full_name,
        u.email,
        u.avatar_url,
        tp.bio,
        tp.school,
        tp.major,
        tp.year_of_study,
        tp.hourly_rate,
        tp.subjects_to_teach,
        tp.card_gradient
      FROM tutor_profiles tp
      JOIN users u ON tp.user_id = u.id
      WHERE tp.user_id = ? AND tp.is_verified = 'APPROVED'
      LIMIT 1
    `, [tutorId]);

    const tutor = rows[0];
    if (!tutor) {
      res.status(404).json({ success: false, message: 'Gia sư không tồn tại hoặc chưa được duyệt.' });
      return;
    }

    const [docs]: any = await pool.query(
      "SELECT id, doc_type, original_name, mime_type FROM tutor_documents WHERE tutor_user_id = ? AND doc_type IN ('CERTIFICATE', 'TRANSCRIPT', 'OTHER') AND status = 'APPROVED'",
      [tutorId]
    );

    const formatted = {
      ...tutor,
      subjects_to_teach: tutor.subjects_to_teach ? tutor.subjects_to_teach.split(',') : [],
      card_gradient: tutor.card_gradient || 'bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]',
      documents: docs
    };

    res.json({ success: true, data: formatted });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const bookAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId, tutorId, startTime, endTime, pricePaid, scheduleType, customSchedule, sessions } = req.body;
    
    // For single session
    if (!scheduleType || scheduleType === "SINGLE") {
      const id = uuidv4();
      await pool.query(
        'INSERT INTO appointments (id, student_id, tutor_id, start_time, end_time, price_paid, status, payment_status, schedule_type, session_number) VALUES (?, ?, ?, ?, ?, ?, "PENDING", "UNPAID", "SINGLE", 1)',
        [id, studentId, tutorId, startTime, endTime, pricePaid]
      );
      res.status(201).json({ success: true, message: 'Tạo lịch hẹn thành công, vui lòng thanh toán!', data: { appointmentId: id } });
      return;
    }

    // For long term custom schedule
    // sessions is an array of { startTime, endTime, sessionNumber }
    if (scheduleType === "LONG_TERM") {
      if (!Array.isArray(sessions) || sessions.length === 0) {
        res.status(400).json({ success: false, message: "Lịch học dài hạn yêu cầu danh sách các buổi học." });
        return;
      }

      const parentId = uuidv4();
      const customScheduleStr = typeof customSchedule === "string" ? customSchedule : JSON.stringify(customSchedule || {});

      // Insert parent appointment representation (or first session acts as parent)
      // We'll insert multiple appointments. The main one (parent) has session_number = 1, others reference it.
      for (const sess of sessions) {
        const id = uuidv4();
        const sessPrice = pricePaid / sessions.length; // split total cost evenly
        await pool.query(
          'INSERT INTO appointments (id, student_id, tutor_id, start_time, end_time, price_paid, status, payment_status, schedule_type, custom_schedule, parent_appointment_id, session_number) VALUES (?, ?, ?, ?, ?, ?, "PENDING", "UNPAID", "LONG_TERM", ?, ?, ?)',
          [id, studentId, tutorId, sess.startTime, sess.endTime, sessPrice, customScheduleStr, parentId, sess.sessionNumber]
        );
      }

      res.status(201).json({ success: true, message: 'Đăng ký học dài hạn thành công! Vui lòng thanh toán trọn gói khóa học.', data: { appointmentId: parentId, isLongTerm: true } });
      return;
    }

    res.status(400).json({ success: false, message: "Loại lịch học không hợp lệ." });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTutorReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tutorId } = req.params;
    const [rows]: any = await pool.query(
      "SELECT id, rating, comment, student_name, created_at FROM tutor_reviews WHERE tutor_user_id = ? ORDER BY created_at DESC",
      [tutorId]
    );
    res.json({ success: true, data: rows });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTutorReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tutorId } = req.params;
    const { rating, comment, studentName } = req.body;
    
    if (!rating || rating < 3 || rating > 5) {
      res.status(400).json({ success: false, message: "Đánh giá phải từ 3 đến 5 sao." });
      return;
    }

    const [result]: any = await pool.query(
      "INSERT INTO tutor_reviews (tutor_user_id, student_name, rating, comment) VALUES (?, ?, ?, ?)",
      [tutorId, studentName || "Học sinh ẩn danh", rating, comment || ""]
    );

    res.status(201).json({
      success: true,
      message: "Gửi đánh giá thành công!",
      data: { id: result.insertId, rating, comment, studentName }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};