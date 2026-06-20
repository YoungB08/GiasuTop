import express from 'express';
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
import { listSubjects, listNews, listDocuments, uploadDocument } from './controllers/admin.controller';
import { createChatUpload, detectAllowedUpload, CHAT_UPLOAD_DIR } from './utils/upload';
import { requireAuth } from './middlewares/auth';
import { errorHandler, notFound } from './middlewares/error';
import { getEnv } from './utils/env';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import fs from 'fs';
import { requestLogger } from './middlewares/log.middleware';

dotenv.config();

const app = express();
app.set('trust proxy', true);
const env = getEnv();
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
app.get('/api/subjects', listSubjects);
app.get('/api/news', listNews);
app.get('/api/documents', listDocuments);
import { createDocsUpload } from './utils/upload';
const docsUpload = createDocsUpload();
app.post('/api/documents/upload', requireAuth, docsUpload.single('file'), uploadDocument);

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
      fileName: req.file.originalname,
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

app.listen(PORT, () => {
  console.log(`🚀 Server Backend đã kích hoạt tại cổng http://localhost:${PORT}`);
});