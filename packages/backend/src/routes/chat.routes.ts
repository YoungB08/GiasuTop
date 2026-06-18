import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { listChatMessages, postChatMessage } from "../controllers/chat.controller";

const router = Router();

router.get("/", listChatMessages);
router.post("/", requireAuth, postChatMessage);

export default router;
