import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function notFound(_req: Request, res: Response) {
  res.status(404).json({ success: false, message: "Not found" });
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      issues: err.issues.map((i) => ({ path: i.path, message: i.message })),
    });
  }

  const message = err instanceof Error ? err.message : "Internal server error";
  return res.status(500).json({ success: false, message });
}

