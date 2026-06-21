import type { Response } from "express";
import crypto from "crypto";
import type { AuthedRequest } from "../middlewares/auth";
import { analyzeCitizenIdDocument, verifyFaceMatch } from "../services/ekyc.service";

export async function runEkycOcr(req: AuthedRequest, res: Response): Promise<any> {
  const result = analyzeCitizenIdDocument(req.body || {});
  return res.json({
    success: true,
    requestId: crypto.randomUUID(),
    ...result,
  });
}

export async function verifyEkycFace(req: AuthedRequest, res: Response): Promise<any> {
  const result = verifyFaceMatch(req.body || {});
  return res.json({
    success: true,
    verificationId: crypto.randomUUID(),
    ...result,
  });
}
