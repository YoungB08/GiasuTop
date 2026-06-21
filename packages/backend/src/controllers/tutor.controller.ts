import { Request, Response } from "express";
import pool from "../config/db";
import { v4 as uuidv4 } from "uuid";
import { createNotification } from "../services/notification.service";

export const getTutors = async (_req: Request, res: Response) => {
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
        AND (
          tp.teaching_profile_completed_at IS NOT NULL
          OR (COALESCE(tp.school, '') <> '' AND COALESCE(tp.major, '') <> '' AND COALESCE(tp.bio, '') <> '' AND COALESCE(tp.subjects_to_teach, '') <> '')
        )
    `);

    const formats = await Promise.all(rows.map(async (tutor: any) => {
      const [docs]: any = await pool.query(
        "SELECT id, doc_type, original_name, mime_type FROM tutor_documents WHERE tutor_user_id = ? AND doc_type IN ('CERTIFICATE', 'TRANSCRIPT', 'OTHER') AND status = 'APPROVED'",
        [tutor.user_id]
      );
      return {
        ...tutor,
        subjects_to_teach: tutor.subjects_to_teach ? tutor.subjects_to_teach.split(",") : [],
        card_gradient: tutor.card_gradient || "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]",
        documents: docs,
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
        AND (
          tp.teaching_profile_completed_at IS NOT NULL
          OR (COALESCE(tp.school, '') <> '' AND COALESCE(tp.major, '') <> '' AND COALESCE(tp.bio, '') <> '' AND COALESCE(tp.subjects_to_teach, '') <> '')
        )
      LIMIT 1
    `, [tutorId]);

    const tutor = rows[0];
    if (!tutor) {
      res.status(404).json({ success: false, message: "Gia sư không tồn tại hoặc chưa được duyệt." });
      return;
    }

    const [docs]: any = await pool.query(
      "SELECT id, doc_type, original_name, mime_type FROM tutor_documents WHERE tutor_user_id = ? AND doc_type IN ('CERTIFICATE', 'TRANSCRIPT', 'OTHER') AND status = 'APPROVED'",
      [tutorId]
    );

    res.json({
      success: true,
      data: {
        ...tutor,
        subjects_to_teach: tutor.subjects_to_teach ? tutor.subjects_to_teach.split(",") : [],
        card_gradient: tutor.card_gradient || "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]",
        documents: docs,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const bookAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId, tutorId, startTime, endTime, pricePaid, scheduleType, customSchedule, sessions } = req.body;

    if (!scheduleType || scheduleType === "SINGLE") {
      const id = uuidv4();
      await pool.query(
        'INSERT INTO appointments (id, student_id, tutor_id, start_time, end_time, price_paid, status, payment_status, schedule_type, session_number) VALUES (?, ?, ?, ?, ?, ?, "PENDING", "UNPAID", "SINGLE", 1)',
        [id, studentId, tutorId, startTime, endTime, pricePaid]
      );

      const [studentRows]: any = await pool.query("SELECT full_name FROM users WHERE id = ? LIMIT 1", [studentId]);
      await createNotification({
        recipientId: tutorId,
        actorId: studentId,
        type: "BOOKING_CREATED",
        title: "Có lịch học mới chờ thanh toán",
        body: `${studentRows[0]?.full_name || "Học viên"} vừa đặt lịch học với bạn.`,
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: id,
        metadata: { startTime, endTime, pricePaid, scheduleType: "SINGLE" },
      });

      res.status(201).json({ success: true, message: "Tạo lịch hẹn thành công, vui lòng thanh toán!", data: { appointmentId: id } });
      return;
    }

    if (scheduleType === "LONG_TERM") {
      if (!Array.isArray(sessions) || sessions.length === 0) {
        res.status(400).json({ success: false, message: "Lịch học dài hạn yêu cầu danh sách các buổi học." });
        return;
      }

      const parentId = uuidv4();
      const customScheduleStr = typeof customSchedule === "string" ? customSchedule : JSON.stringify(customSchedule || {});

      for (const sess of sessions) {
        const id = uuidv4();
        const sessPrice = pricePaid / sessions.length;
        await pool.query(
          'INSERT INTO appointments (id, student_id, tutor_id, start_time, end_time, price_paid, status, payment_status, schedule_type, custom_schedule, parent_appointment_id, session_number) VALUES (?, ?, ?, ?, ?, ?, "PENDING", "UNPAID", "LONG_TERM", ?, ?, ?)',
          [id, studentId, tutorId, sess.startTime, sess.endTime, sessPrice, customScheduleStr, parentId, sess.sessionNumber]
        );
      }

      const [studentRows]: any = await pool.query("SELECT full_name FROM users WHERE id = ? LIMIT 1", [studentId]);
      await createNotification({
        recipientId: tutorId,
        actorId: studentId,
        type: "BOOKING_CREATED",
        title: "Có gói học dài hạn mới",
        body: `${studentRows[0]?.full_name || "Học viên"} vừa đăng ký ${sessions.length} buổi học với bạn.`,
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: parentId,
        metadata: { scheduleType: "LONG_TERM", sessions: sessions.length, pricePaid },
      });

      res.status(201).json({ success: true, message: "Đăng ký học dài hạn thành công! Vui lòng thanh toán trọn gói khóa học.", data: { appointmentId: parentId, isLongTerm: true } });
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

    await createNotification({
      recipientId: String(tutorId),
      actorId: null,
      type: "SYSTEM",
      title: "Bạn có đánh giá mới",
      body: `${studentName || "Học sinh ẩn danh"} đã đánh giá ${rating} sao cho hồ sơ gia sư của bạn.`,
      linkUrl: "/?tab=profile",
      entityType: "TUTOR_REVIEW",
      entityId: String(result.insertId),
      metadata: { rating },
    });

    res.status(201).json({
      success: true,
      message: "Gửi đánh giá thành công!",
      data: { id: result.insertId, rating, comment, studentName },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
