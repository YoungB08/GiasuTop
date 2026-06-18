import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { sendDirectMessage, listDirectMessages, listChatContacts } from "../controllers/directChat.controller";

const router = Router();

router.get("/contacts", requireAuth, listChatContacts);
router.get("/partner/:partnerId", requireAuth, listDirectMessages);
router.post("/send", requireAuth, sendDirectMessage);

export default router;
