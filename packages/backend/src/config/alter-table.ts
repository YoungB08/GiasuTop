import pool from "./db";

async function columnExists(table: string, column: string) {
  const [columns]: any = await pool.query(`SHOW COLUMNS FROM \`${table}\` LIKE ?`, [column]);
  return columns.length > 0;
}

async function tableExists(table: string) {
  const [rows]: any = await pool.query("SHOW TABLES LIKE ?", [table]);
  return rows.length > 0;
}

async function migrate() {
  console.log("Running alter table migration...");
  try {
    if (!(await columnExists("tutor_profiles", "card_gradient"))) {
      console.log("Adding card_gradient column to tutor_profiles...");
      await pool.query(
        "ALTER TABLE tutor_profiles ADD COLUMN card_gradient VARCHAR(190) NULL DEFAULT 'bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]'"
      );
    }

    const tutorDocumentColumns = [
      ["storage_key", "VARCHAR(255) NULL"],
      ["original_name", "VARCHAR(255) NULL"],
      ["mime_type", "VARCHAR(120) NULL"],
      ["file_size_bytes", "INT NULL"],
    ] as const;
    for (const [column, definition] of tutorDocumentColumns) {
      if (!(await columnExists("tutor_documents", column))) {
        console.log(`Adding ${column} column to tutor_documents...`);
        await pool.query(`ALTER TABLE tutor_documents ADD COLUMN ${column} ${definition}`);
      }
    }

    if (await tableExists("wallet_ledger")) {
      const [ledgerColumn]: any = await pool.query("SHOW COLUMNS FROM wallet_ledger LIKE 'entry_type'");
      const type = String(ledgerColumn[0]?.Type ?? "");
      if (!type.includes("TOPUP") || !type.includes("BOOKING_PAYMENT")) {
        console.log("Extending wallet_ledger entry_type enum...");
        await pool.query(
          "ALTER TABLE wallet_ledger MODIFY entry_type ENUM('TOPUP','BOOKING_PAYMENT','HOLD','RELEASE','REFUND','WITHDRAW_REQUEST','WITHDRAW_APPROVE','WITHDRAW_REJECT') NOT NULL"
        );
      }
    }

    if (!(await tableExists("wallet_topups"))) {
      console.log("Creating wallet_topups table...");
      await pool.query(`
        CREATE TABLE wallet_topups (
          id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          user_id VARCHAR(36) NOT NULL,
          amount DECIMAL(20,2) NOT NULL,
          status ENUM('PENDING','PAID','CANCELLED','FAILED') NOT NULL DEFAULT 'PENDING',
          provider ENUM('SEPAY') NOT NULL DEFAULT 'SEPAY',
          paid_at DATETIME NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX (user_id),
          INDEX (status)
        )
      `);
    }

    if (!(await columnExists("chat_messages", "appointment_id"))) {
      console.log("Adding appointment_id column to chat_messages...");
      await pool.query("ALTER TABLE chat_messages ADD COLUMN appointment_id VARCHAR(36) NULL AFTER id");
      await pool.query("ALTER TABLE chat_messages ADD INDEX appointment_id (appointment_id)");
    }

    if (!(await tableExists("direct_messages"))) {
      console.log("Creating direct_messages table...");
      await pool.query(`
        CREATE TABLE direct_messages (
          id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          sender_id VARCHAR(36) NOT NULL,
          receiver_id VARCHAR(36) NOT NULL,
          message TEXT NOT NULL,
          is_read TINYINT NOT NULL DEFAULT 0,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX (sender_id),
          INDEX (receiver_id),
          INDEX (created_at)
        )
      `);
    }

    if (!(await tableExists("tutor_reviews"))) {
      console.log("Creating tutor_reviews table...");
      await pool.query(`
        CREATE TABLE tutor_reviews (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          tutor_user_id VARCHAR(36) NOT NULL,
          student_name VARCHAR(120) NOT NULL,
          rating TINYINT NOT NULL,
          comment TEXT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX (tutor_user_id)
        )
      `);
      // Seed some demo reviews
      await pool.query(`
        INSERT INTO tutor_reviews (tutor_user_id, student_name, rating, comment) VALUES
        ('tutor-8888-8888-8888-888888888888', 'Linh Nguyễn', 5, 'Gia sư giảng bài rất kỹ và dễ hiểu, em đạt điểm 9.5 Toán cuối kì.'),
        ('tutor-8888-8888-8888-888888888888', 'Phan Khải', 4, 'Thầy nhiệt tình hỗ trợ em ngoài giờ học, rất đề xuất.'),
        ('tutor-0000-0000-0000-000000000001', 'Hoàng Minh', 5, 'Gia sư tuyệt vời, chuyên môn sư phạm rất cao!'),
        ('tutor-0000-0000-0000-000000000002', 'Bảo Ngọc', 5, 'Kinh nghiệm dạy tốt, cháu tiến bộ rõ rệt.'),
        ('tutor-0000-0000-0000-000000000003', 'Huy Hoàng', 4, 'Phương pháp mới lạ giúp dễ nhớ công thức Hóa học.')
      `);
    }

    if (!(await columnExists("tutor_profiles", "commission_percent"))) {
      console.log("Adding commission fields to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN commission_percent DECIMAL(5,2) NOT NULL DEFAULT 10.00");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN proposed_commission_percent DECIMAL(5,2) NULL");
    }

    if (!(await columnExists("appointments", "schedule_type"))) {
      console.log("Adding long-term and escrow fields to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN schedule_type ENUM('SINGLE','LONG_TERM') NOT NULL DEFAULT 'SINGLE'");
      await pool.query("ALTER TABLE appointments ADD COLUMN custom_schedule TEXT NULL");
      await pool.query("ALTER TABLE appointments ADD COLUMN parent_appointment_id VARCHAR(36) NULL");
      await pool.query("ALTER TABLE appointments ADD COLUMN session_number INT NULL");
      await pool.query("ALTER TABLE appointments ADD COLUMN escrow_release_date DATETIME NULL");
    }

    console.log("Migration completed.");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    process.exit(0);
  }
}

migrate();
