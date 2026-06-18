import path from "path";
import crypto from "crypto";
import fs from "fs";
import multer from "multer";

export const TUTOR_PRIVATE_UPLOAD_DIR = path.join(process.cwd(), "uploads", "private", "tutors");
export const DOCS_UPLOAD_DIR = path.join(process.cwd(), "uploads", "docs");
export const CHAT_UPLOAD_DIR = path.join(process.cwd(), "uploads", "chat");

const allowedMimeByExt: Record<string, Set<string>> = {
  ".jpg": new Set(["image/jpeg"]),
  ".jpeg": new Set(["image/jpeg"]),
  ".png": new Set(["image/png"]),
  ".webp": new Set(["image/webp"]),
  ".pdf": new Set(["application/pdf"]),
  ".doc": new Set(["application/msword"]),
  ".docx": new Set(["application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),
};

function safeExt(originalName: string): string {
  const ext = path.extname(originalName).toLowerCase();
  return allowedMimeByExt[ext] ? ext : "";
}

function hasAllowedMime(ext: string, mimetype: string) {
  return Boolean(ext && allowedMimeByExt[ext]?.has(mimetype));
}

export function getTutorPrivateUploadPath(storageKey: string) {
  const basename = path.basename(storageKey);
  if (basename !== storageKey) {
    throw new Error("Invalid storage key");
  }
  return path.join(TUTOR_PRIVATE_UPLOAD_DIR, basename);
}

export async function detectAllowedUpload(filePath: string, mimetype: string) {
  const handle = await fs.promises.open(filePath, "r");
  try {
    const buffer = Buffer.alloc(16);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    const header = buffer.subarray(0, bytesRead);

    if (mimetype === "application/pdf") {
      return header.subarray(0, 4).toString("ascii") === "%PDF";
    }
    if (mimetype === "image/png") {
      return header.length >= 8 && header.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    }
    if (mimetype === "image/jpeg") {
      return header.length >= 3 && header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
    }
    if (mimetype === "image/webp") {
      return header.length >= 12 && header.subarray(0, 4).toString("ascii") === "RIFF" && header.subarray(8, 12).toString("ascii") === "WEBP";
    }
    if (mimetype === "application/msword") {
      return header.length >= 8 && header.subarray(0, 8).equals(Buffer.from([0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1]));
    }
    if (mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      return header.length >= 4 && header.subarray(0, 4).equals(Buffer.from([0x50, 0x4B, 0x03, 0x04]));
    }
    return false;
  } finally {
    await handle.close();
  }
}

export async function assertDocumentFileIsSafe(filePath: string, mimetype: string) {
  const magicOk = await detectAllowedUpload(filePath, mimetype);
  if (!magicOk) {
    throw new Error("Định dạng file không khớp với nội dung thực tế.");
  }

  const content = await fs.promises.readFile(filePath);

  // Scan for MZ header (Executable)
  if (content.length >= 2 && content[0] === 0x4D && content[1] === 0x5A) {
    throw new Error("File có chứa chữ ký thực thi PE (MZ header), nguy cơ mã độc cao!");
  }

  // Scan for ELF header
  if (content.length >= 4 && content[0] === 0x7F && content[1] === 0x45 && content[2] === 0x4C && content[3] === 0x46) {
    throw new Error("File có chứa chữ ký thực thi ELF, nguy cơ mã độc cao!");
  }

  // Scan for scripts and external links/URLs
  const contentStr = content.toString("utf8").toLowerCase();
  if (
    contentStr.includes("<script") ||
    contentStr.includes("javascript:") ||
    contentStr.includes("eval(") ||
    contentStr.includes("exec(")
  ) {
    throw new Error("File có chứa mã độc script hoặc lệnh thực thi nguy hiểm!");
  }

  if (contentStr.includes("http://") || contentStr.includes("https://")) {
    throw new Error("File có chứa các đường link liên kết ngoài (URL), nguy cơ lừa đảo hoặc mã độc!");
  }
}

export async function assertUploadedFilesAreSafe(files: Express.Multer.File[]) {
  for (const file of files) {
    const ok = await detectAllowedUpload(file.path, file.mimetype);
    if (!ok) {
      await fs.promises.rm(file.path, { force: true });
      const error = new Error(`Invalid file content: ${file.originalname}`);
      (error as any).statusCode = 400;
      throw error;
    }
  }
}

export function createTutorUpload() {
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(TUTOR_PRIVATE_UPLOAD_DIR, { recursive: true });
      cb(null, TUTOR_PRIVATE_UPLOAD_DIR);
    },
    filename: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      const name = crypto.randomBytes(16).toString("hex") + (ext || "");
      cb(null, name);
    },
  });

  return multer({
    storage,
    limits: {
      fileSize: 8 * 1024 * 1024, // 8MB
      files: 8,
    },
    fileFilter: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      if (!ext || !hasAllowedMime(ext, file.mimetype)) return cb(new Error("Unsupported file type"));
      cb(null, true);
    },
  });
}

export function createDocsUpload() {
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(DOCS_UPLOAD_DIR, { recursive: true });
      cb(null, DOCS_UPLOAD_DIR);
    },
    filename: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      const name = crypto.randomBytes(16).toString("hex") + (ext || "");
      cb(null, name);
    },
  });

  return multer({
    storage,
    limits: {
      fileSize: 15 * 1024 * 1024, // 15MB
    },
    fileFilter: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      if (!ext || !hasAllowedMime(ext, file.mimetype)) return cb(new Error("Unsupported file type"));
      cb(null, true);
    },
  });
}

export function createChatUpload() {
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(CHAT_UPLOAD_DIR, { recursive: true });
      cb(null, CHAT_UPLOAD_DIR);
    },
    filename: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      const name = crypto.randomBytes(16).toString("hex") + (ext || "");
      cb(null, name);
    },
  });

  return multer({
    storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
    fileFilter: (_req, file, cb) => {
      const ext = safeExt(file.originalname);
      if (!ext || !hasAllowedMime(ext, file.mimetype)) return cb(new Error("Unsupported file type"));
      cb(null, true);
    },
  });
}
