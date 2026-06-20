import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import pool from "../config/db";
import { signAccessToken } from "../utils/jwt";
import { notifyZaloAdmins } from "../services/zaloAdmin.service";

const RegisterSchema = z.object({
  fullName: z.string().min(2).max(120),
  username: z.string().min(3).max(100).regex(/^[a-zA-Z0-9_.]+$/, "Tên đăng nhập chỉ được phép chứa chữ cái, số, dấu gạch dưới và dấu chấm."),
  email: z.string().email().max(190),
  password: z.string().min(8).max(200),
  role: z.enum(["STUDENT", "TUTOR"]).default("STUDENT"),
});

const LoginSchema = z.object({
  email: z.string().min(1).max(190), // Accept username, email or phone as the 'email' input field
  password: z.string().min(1).max(200),
  rememberMe: z.boolean().optional(),
});

type DbUserRow = {
  id: string;
  username: string | null;
  email: string;
  full_name: string;
  password_hash: string;
  role: "STUDENT" | "TUTOR" | "ADMIN";
  phone: string | null;
  avatar_url: string | null;
  status: "ACTIVE" | "BANNED";
};

export async function register(req: Request, res: Response) {
  const input = RegisterSchema.parse(req.body);
  const email = input.email.toLowerCase().trim();
  const username = input.username.toLowerCase().trim();

  const [existsRows] = await pool.query("SELECT id FROM users WHERE email = ? LIMIT 1", [email]);
  const exists = Array.isArray(existsRows) && (existsRows as any[]).length > 0;
  if (exists) {
    return res.status(409).json({ success: false, message: "Email already exists" });
  }

  const [existsUsernameRows] = await pool.query("SELECT id FROM users WHERE username = ? LIMIT 1", [username]);
  const existsUsername = Array.isArray(existsUsernameRows) && (existsUsernameRows as any[]).length > 0;
  if (existsUsername) {
    return res.status(409).json({ success: false, message: "Username already exists" });
  }

  const id = uuidv4();
  const passwordHash = await bcrypt.hash(input.password, 12);

  await pool.query(
    "INSERT INTO users (id, full_name, username, email, password_hash, role) VALUES (?, ?, ?, ?, ?, ?)",
    [id, input.fullName.trim(), username, email, passwordHash, input.role]
  );

  await notifyZaloAdmins("NEW_USER", [
    ["👤 Tên", input.fullName.trim()],
    ["📧 Email", email],
    ["🔑 Username", username],
    ["🎭 Vai trò", input.role === "TUTOR" ? "Gia sư" : "Học viên/Phụ huynh"],
    ["🆔 User ID", id],
  ]);

  const token = signAccessToken({ sub: id, email, role: input.role });
  return res.status(201).json({
    success: true,
    message: "Register success",
    data: {
      id,
      username,
      email,
      fullName: input.fullName.trim(),
      full_name: input.fullName.trim(),
      role: input.role,
      avatarUrl: null,
      avatar_url: null,
      token,
    },
  });
}

export async function login(req: Request, res: Response) {
  const input = LoginSchema.parse(req.body);
  const identifier = input.email.trim();

  // Look up user by email, username, or phone
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? OR username = ? OR phone = ? LIMIT 1",
    [identifier.toLowerCase(), identifier, identifier]
  );
  const user = (Array.isArray(rows) ? (rows as DbUserRow[])[0] : undefined) as DbUserRow | undefined;

  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const ok = await bcrypt.compare(input.password, user.password_hash);
  if (!ok) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  if (user.status === "BANNED") {
    return res.status(403).json({ success: false, code: "USER_BANNED", message: "Tài khoản của bạn đã bị khóa (BANNED)!" });
  }

  const token = signAccessToken(
    { sub: user.id, email: user.email, role: user.role },
    input.rememberMe ? "30d" : "3d"
  );
  return res.json({
    success: true,
    message: "Login success",
    data: {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      fullName: user.full_name,
      full_name: user.full_name,
      role: user.role,
      avatarUrl: user.avatar_url,
      avatar_url: user.avatar_url,
      token,
    },
  });
}

