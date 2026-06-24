import express from 'express';
import { createServer } from 'http';
import { setupSocket } from './socket';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/users.routes';
import tutorRoutes from './routes/tutor.routes';
import paymentRoutes from './routes/payment.routes';
import adminRoutes from './routes/admin.routes';
import chatRoutes from './routes/chat.routes';
import directChatRoutes from './routes/directChat.routes';
import walletRoutes from './routes/wallet.routes';
import filterRoutes from './routes/filter.routes';
import classRoutes from './routes/class.routes';
import notificationRoutes from './routes/notification.routes';
import ekycRoutes from './routes/ekyc.routes';
import { listSubjects, listNews, listDocuments, uploadDocument, deleteDocumentSecure } from './controllers/admin.controller';
import { createChatUpload, detectAllowedUpload, CHAT_UPLOAD_DIR } from './utils/upload';
import { requireAuth } from './middlewares/auth';
import { errorHandler, notFound } from './middlewares/error';
import { getEnv } from './utils/env';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import fs from 'fs';
import { requestLogger } from './middlewares/log.middleware';
import { releaseDueEscrowAppointments } from './services/escrow.service';

dotenv.config();

const app = express();
const env = getEnv();
app.set('trust proxy', env.TRUST_PROXY_HOPS > 0 ? env.TRUST_PROXY_HOPS : false);
const PORT = env.PORT || 5000;

app.use(express.json());
app.use(requestLogger);
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.disable('x-powered-by');

app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const corsOrigins =
  env.CORS_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // server-to-server / curl
      if (corsOrigins.length === 0) return cb(null, true); // dev default
      if (corsOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tutors', tutorRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chats/direct', directChatRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/filters', filterRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/ekyc', ekycRoutes);
app.get('/api/subjects', listSubjects);
app.get('/api/news', listNews);
app.get('/api/documents', listDocuments);
import { createDocsUpload } from './utils/upload';
const docsUpload = createDocsUpload();
app.post('/api/documents/upload', requireAuth, docsUpload.single('file'), uploadDocument);
app.delete('/api/documents/:id', requireAuth, deleteDocumentSecure);

// Chat file upload endpoint
const chatUpload = createChatUpload();
app.post('/api/chats/upload', requireAuth, chatUpload.single('file'), async (req: any, res: any) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'Không có file nào được gửi lên.' });

    const isValid = await detectAllowedUpload(req.file.path, req.file.mimetype);
    if (!isValid) {
      await fs.promises.rm(req.file.path, { force: true });
      return res.status(400).json({ success: false, message: 'File không hợp lệ hoặc không khớp định dạng.' });
    }

    const fileUrl = `/uploads/chat/${req.file.filename}`;
    return res.json({
      success: true,
      fileUrl,
      fileName: Buffer.from(req.file.originalname, "latin1").toString("utf8"),
      fileType: req.file.mimetype,
    });
  } catch (e: any) {
    return res.status(500).json({ success: false, message: e.message });
  }
});

import { logActivity } from './utils/logger';
app.post('/api/logs', async (req, res) => {
  try {
    const { userId, action, details } = req.body;
    const ip = req.ip || req.socket.remoteAddress || null;
    await logActivity(userId || null, action, details || null, ip);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// Static uploads (local dev). Ensure folder exists.
import pool from './config/db';

async function runStartupMigration() {
  console.log("Checking and running users table migrations...");
  try {
    const columnExists = async (table: string, column: string) => {
      const [columns]: any = await pool.query(`SHOW COLUMNS FROM \`${table}\` LIKE ?`, [column]);
      return columns.length > 0;
    };
    const indexExists = async (table: string, indexName: string) => {
      const [indexes]: any = await pool.query(`SHOW INDEX FROM \`${table}\` WHERE Key_name = ?`, [indexName]);
      return indexes.length > 0;
    };
    if (!(await columnExists("users", "username"))) {
      console.log("Adding username column to users...");
      await pool.query("ALTER TABLE users ADD COLUMN username VARCHAR(100) NULL UNIQUE AFTER full_name");
    }
    if (!(await columnExists("users", "bio"))) {
      console.log("Adding bio column to users...");
      await pool.query("ALTER TABLE users ADD COLUMN bio TEXT NULL");
    }
    if (!(await columnExists("users", "address"))) {
      console.log("Adding address column to users...");
      await pool.query("ALTER TABLE users ADD COLUMN address VARCHAR(255) NULL");
    }
    if (!(await columnExists("users", "dob"))) {
      console.log("Adding dob column to users...");
      await pool.query("ALTER TABLE users ADD COLUMN dob VARCHAR(64) NULL");
    }
    if (!(await columnExists("users", "age"))) {
      console.log("Adding age column to users...");
      await pool.query("ALTER TABLE users ADD COLUMN age INT NULL");
    }
    if (!(await columnExists("tutor_profiles", "ekyc_status"))) {
      console.log("Adding ekyc_status column to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN ekyc_status ENUM('NOT_RUN','AUTO_ACCEPTED','MANUAL_REVIEW') NOT NULL DEFAULT 'NOT_RUN' AFTER card_gradient");
    }
    if (!(await columnExists("tutor_profiles", "ekyc_score"))) {
      console.log("Adding ekyc_score column to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN ekyc_score DECIMAL(5,2) NULL AFTER ekyc_status");
    }
    if (!(await columnExists("tutor_profiles", "ekyc_result"))) {
      console.log("Adding ekyc_result column to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN ekyc_result JSON NULL AFTER ekyc_score");
    }
    if (!(await columnExists("tutor_profiles", "identity_submitted_at"))) {
      console.log("Adding identity_submitted_at column to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN identity_submitted_at TIMESTAMP NULL AFTER ekyc_result");
    }
    if (!(await columnExists("tutor_profiles", "teaching_profile_completed_at"))) {
      console.log("Adding teaching_profile_completed_at column to tutor_profiles...");
      await pool.query("ALTER TABLE tutor_profiles ADD COLUMN teaching_profile_completed_at TIMESTAMP NULL AFTER identity_submitted_at");
    }
    if (!(await columnExists("appointments", "commission_percent_snapshot"))) {
      console.log("Adding commission_percent_snapshot column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN commission_percent_snapshot DECIMAL(5,2) NULL AFTER payment_status");
    }
    if (!(await columnExists("appointments", "commission_amount"))) {
      console.log("Adding commission_amount column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN commission_amount DECIMAL(20,2) NULL AFTER commission_percent_snapshot");
    }
    if (!(await columnExists("appointments", "tutor_earning"))) {
      console.log("Adding tutor_earning column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN tutor_earning DECIMAL(20,2) NULL AFTER commission_amount");
    }
    if (!(await columnExists("appointments", "escrow_release_date"))) {
      console.log("Adding escrow_release_date column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN escrow_release_date DATETIME NULL AFTER tutor_earning");
    }
    if (!(await columnExists("appointments", "escrow_released_at"))) {
      console.log("Adding escrow_released_at column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN escrow_released_at DATETIME NULL AFTER escrow_release_date");
    }
    if (!(await columnExists("appointments", "student_completed_at"))) {
      console.log("Adding student_completed_at column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN student_completed_at DATETIME NULL AFTER live_room_url");
    }
    if (!(await columnExists("appointments", "tutor_completed_at"))) {
      console.log("Adding tutor_completed_at column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN tutor_completed_at DATETIME NULL AFTER student_completed_at");
    }
    if (!(await columnExists("appointments", "completed_at"))) {
      console.log("Adding completed_at column to appointments...");
      await pool.query("ALTER TABLE appointments ADD COLUMN completed_at DATETIME NULL AFTER tutor_completed_at");
    }
    if (!(await columnExists("documents", "reject_reason"))) {
      console.log("Adding reject_reason column to documents...");
      await pool.query("ALTER TABLE documents ADD COLUMN reject_reason TEXT NULL AFTER is_approved");
    }
    if (!(await indexExists("documents", "idx_documents_library_filters"))) {
      console.log("Adding documents library filter index...");
      await pool.query("ALTER TABLE documents ADD INDEX idx_documents_library_filters (is_approved, grade_tag, subject_tag, type_tag, created_at, id)");
    }
    if (!(await indexExists("documents", "idx_documents_downloads"))) {
      console.log("Adding documents downloads index...");
      await pool.query("ALTER TABLE documents ADD INDEX idx_documents_downloads (is_approved, download_count, created_at, id)");
    }
    if (!(await columnExists("withdraw_requests", "bank_code"))) {
      console.log("Adding bank_code column to withdraw_requests...");
      await pool.query("ALTER TABLE withdraw_requests ADD COLUMN bank_code VARCHAR(32) NULL AFTER amount");
    }
    if (!(await columnExists("withdraw_requests", "bank_name"))) {
      console.log("Adding bank_name column to withdraw_requests...");
      await pool.query("ALTER TABLE withdraw_requests ADD COLUMN bank_name VARCHAR(190) NULL AFTER bank_code");
    }
    const [walletLedgerRefCol]: any = await pool.query("SHOW COLUMNS FROM wallet_ledger LIKE 'ref_id'");
    if (walletLedgerRefCol.length > 0 && !walletLedgerRefCol[0].Type.toLowerCase().includes("255")) {
      console.log("Extending wallet_ledger.ref_id to VARCHAR(255)...");
      await pool.query("ALTER TABLE wallet_ledger MODIFY COLUMN ref_id VARCHAR(255) NULL");
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        recipient_id VARCHAR(36) NOT NULL,
        actor_id VARCHAR(36) NULL,
        type VARCHAR(60) NOT NULL,
        title VARCHAR(180) NOT NULL,
        body TEXT NOT NULL,
        link_url TEXT NULL,
        entity_type VARCHAR(60) NULL,
        entity_id VARCHAR(64) NULL,
        metadata JSON NULL,
        is_read TINYINT NOT NULL DEFAULT 0,
        read_at DATETIME NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX (recipient_id, is_read, created_at),
        INDEX (type),
        INDEX (entity_type, entity_id)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        endpoint TEXT NOT NULL,
        endpoint_hash CHAR(64) NOT NULL,
        p256dh VARCHAR(255) NOT NULL,
        auth VARCHAR(255) NOT NULL,
        user_agent TEXT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY uniq_push_endpoint_hash (endpoint_hash),
        INDEX idx_push_user (user_id)
      )
    `);
    
    // Alter sepay_transactions.sepay_id to VARCHAR(100) if it is still INT to allow UUID-like strings
    const [sepayIdCol]: any = await pool.query("SHOW COLUMNS FROM sepay_transactions LIKE 'sepay_id'");
    if (sepayIdCol.length > 0 && sepayIdCol[0].Type.toLowerCase().includes("int")) {
      console.log("Altering sepay_transactions.sepay_id to VARCHAR(100)...");
      await pool.query("ALTER TABLE sepay_transactions MODIFY COLUMN sepay_id VARCHAR(100) NOT NULL");
    }
    
    console.log("Users & SePay table migrations checked/completed successfully.");
  } catch (err) {
    console.error("Failed to run startup migration:", err);
  }
}

// Run migrations on start
runStartupMigration();

const ESCROW_RELEASE_INTERVAL_MS = 5 * 60 * 1000;
setInterval(() => {
  releaseDueEscrowAppointments().catch((error) => {
    console.error("Failed to run escrow release job:", error);
  });
}, ESCROW_RELEASE_INTERVAL_MS);

const uploadsDir = path.join(process.cwd(), "uploads", "tutors");
fs.mkdirSync(uploadsDir, { recursive: true });
app.use("/uploads/tutors", express.static(uploadsDir, { fallthrough: false }));

const docsDir = path.join(process.cwd(), "uploads", "docs");
fs.mkdirSync(docsDir, { recursive: true });
app.use("/uploads/docs", express.static(docsDir, { fallthrough: false }));

const avatarsDir = path.join(process.cwd(), "uploads", "avatars");
fs.mkdirSync(avatarsDir, { recursive: true });
app.use("/uploads/avatars", express.static(avatarsDir, { fallthrough: false }));

fs.mkdirSync(CHAT_UPLOAD_DIR, { recursive: true });
app.use("/uploads/chat", express.static(CHAT_UPLOAD_DIR, {
  fallthrough: false,
  setHeaders: (res, filePath) => {
    // Force download for non-image files to prevent execution in browser
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      res.setHeader('Content-Disposition', 'attachment');
    }
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', "default-src 'none'");
  },
}));

app.get('/', (req, res) => {
  res.send('GiaSu-KNTech API Backend đang chạy mượt mà...');
});

app.use(notFound);
app.use(errorHandler);

const httpServer = createServer(app);
setupSocket(httpServer, corsOrigins);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server Backend đã kích hoạt tại ${env.PUBLIC_API_URL || `port ${PORT}`}`);
});
