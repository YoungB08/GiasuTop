import type { Response, NextFunction } from "express";
import type { AuthedRequest } from "./auth";
import { logActivity } from "../utils/logger";

export async function requestLogger(req: AuthedRequest, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const userId = req.user?.id || null;
    const email = req.user?.email || "guest";
    const ip = req.ip || req.socket.remoteAddress || null;

    // Mask sensitive fields
    let safeBody = { ...req.body };
    if (safeBody.password) safeBody.password = "********";

    const details = JSON.stringify({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      body: safeBody,
      query: req.query,
      email,
    });

    logActivity(
      userId,
      `API_HIT: ${req.method} ${req.originalUrl.split("?")[0]}`,
      details,
      ip
    );
  });

  next();
}
