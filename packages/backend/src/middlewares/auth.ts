import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";

export type AuthedRequest = Request & {
  user?: {
    id: string;
    email: string;
    role: "STUDENT" | "TUTOR" | "ADMIN";
  };
};

export function requireAuth(req: AuthedRequest, res: Response, next: NextFunction) {
  let token = "";
  const header = req.headers.authorization;
  if (header && header.startsWith("Bearer ")) {
    token = header.slice("Bearer ".length).trim();
  } else if (req.query.token) {
    token = String(req.query.token);
  }

  if (!token) {
    return res.status(401).json({ success: false, message: "Missing token" });
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = { id: payload.sub, email: payload.email, role: payload.role };
    return next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
}

type UserRole = NonNullable<AuthedRequest["user"]>["role"];

export function requireRole(roles: UserRole[]) {
  return (req: AuthedRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    return next();
  };
}

