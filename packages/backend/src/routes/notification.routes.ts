import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import {
  getMyNotifications,
  getMyUnreadNotificationCount,
  getPushConfig,
  markMyNotificationRead,
  markMyNotificationsRead,
  registerPushSubscription,
  streamMyNotifications,
  unregisterPushSubscription,
} from "../controllers/notification.controller";

const router = Router();

router.get("/", requireAuth, getMyNotifications);
router.get("/unread-count", requireAuth, getMyUnreadNotificationCount);
router.get("/stream", requireAuth, streamMyNotifications);
router.get("/push/config", requireAuth, getPushConfig);
router.post("/push/subscribe", requireAuth, registerPushSubscription);
router.post("/push/unsubscribe", requireAuth, unregisterPushSubscription);
router.post("/read-all", requireAuth, markMyNotificationsRead);
router.post("/:id/read", requireAuth, markMyNotificationRead);

export default router;
