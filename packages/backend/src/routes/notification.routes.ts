import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import {
  getMyNotifications,
  getMyUnreadNotificationCount,
  markMyNotificationRead,
  markMyNotificationsRead,
  streamMyNotifications,
} from "../controllers/notification.controller";

const router = Router();

router.get("/", requireAuth, getMyNotifications);
router.get("/unread-count", requireAuth, getMyUnreadNotificationCount);
router.get("/stream", requireAuth, streamMyNotifications);
router.post("/read-all", requireAuth, markMyNotificationsRead);
router.post("/:id/read", requireAuth, markMyNotificationRead);

export default router;
