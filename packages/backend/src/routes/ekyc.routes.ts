import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { runEkycOcr, verifyEkycFace } from "../controllers/ekyc.controller";

const router = Router();

router.post("/ocr", requireAuth, runEkycOcr);
router.post("/face/verify", requireAuth, verifyEkycFace);

export default router;
