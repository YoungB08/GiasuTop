import pool from "../config/db";
import { createNotifications } from "./notification.service";
import { walletReleaseHolding } from "./wallet.service";

function getTutorEscrowAmount(appt: any) {
  const pricePaid = Number(appt.price_paid || 0);
  const commissionAmount = Number(appt.commission_amount || 0);
  const tutorEarning = Number(appt.tutor_earning);
  if (Number.isFinite(tutorEarning) && tutorEarning > 0) {
    return tutorEarning;
  }
  return Math.max(pricePaid - commissionAmount, 0);
}

export async function releaseDueEscrowAppointments(limit = 50) {
  const safeLimit = Math.max(1, Math.min(Math.floor(limit), 200));
  const [dueRows]: any = await pool.query(
    `SELECT id
     FROM appointments
     WHERE payment_status = 'HOLDING'
       AND escrow_release_date IS NOT NULL
       AND escrow_release_date <= NOW()
     ORDER BY escrow_release_date ASC
     LIMIT ${safeLimit}`
  );

  const released: Array<{ appointmentId: string; tutorId: string; studentId: string; amount: number }> = [];

  for (const row of dueRows) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const [apptRows]: any = await connection.query(
        "SELECT * FROM appointments WHERE id = ? FOR UPDATE",
        [row.id]
      );
      const appt = apptRows[0];
      if (!appt || appt.payment_status !== "HOLDING") {
        await connection.rollback();
        continue;
      }
      if (!appt.escrow_release_date || new Date(appt.escrow_release_date).getTime() > Date.now()) {
        await connection.rollback();
        continue;
      }

      const releaseAmount = getTutorEscrowAmount(appt);
      await walletReleaseHolding({
        tutorId: appt.tutor_id,
        amount: releaseAmount,
        refType: "ESCROW_AUTO",
        refId: appt.id,
      }, connection);

      await connection.query(
        "UPDATE appointments SET payment_status = 'RELEASED', escrow_released_at = NOW() WHERE id = ?",
        [appt.id]
      );

      await connection.commit();
      released.push({
        appointmentId: appt.id,
        tutorId: appt.tutor_id,
        studentId: appt.student_id,
        amount: releaseAmount,
      });
    } catch (error) {
      await connection.rollback();
      console.error("Failed to auto-release escrow appointment:", row.id, error);
    } finally {
      connection.release();
    }
  }

  for (const item of released) {
    await createNotifications([
      {
        recipientId: item.tutorId,
        actorId: null,
        type: "PAYMENT_RELEASED",
        title: "Tiền lớp học đã vào ví khả dụng",
        body: `Khoản giam 3 ngày đã hoàn tất. Ví khả dụng của bạn được cộng ${item.amount.toLocaleString("vi-VN")}đ.`,
        linkUrl: "/?tab=wallet",
        entityType: "APPOINTMENT",
        entityId: item.appointmentId,
        metadata: { amount: item.amount, mode: "AUTO" },
      },
      {
        recipientId: item.studentId,
        actorId: null,
        type: "SYSTEM",
        title: "Khoản thanh toán lớp học đã được tất toán",
        body: "Khoản thanh toán lớp học đã hết thời gian giam và được trả cho gia sư.",
        linkUrl: "/?tab=bookings",
        entityType: "APPOINTMENT",
        entityId: item.appointmentId,
        metadata: { amount: item.amount, mode: "AUTO" },
      },
    ]);
  }

  return released;
}
