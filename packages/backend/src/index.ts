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
const env = getEnv();
const PORT = env.PORT || 5000;

app.use(express.json());
app.use(requestLogger);
app.use(helmet());
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
const uploadsDir = path.join(process.cwd(), "uploads", "tutors");
fs.mkdirSync(uploadsDir, { recursive: true });
app.use("/uploads/tutors", express.static(uploadsDir, { fallthrough: false }));

const docsDir = path.join(process.cwd(), "uploads", "docs");
fs.mkdirSync(docsDir, { recursive: true });
app.use("/uploads/docs", express.static(docsDir, { fallthrough: false }));

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