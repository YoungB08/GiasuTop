import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { getMe, updateMe, getMyAppointments, getMyWallet, uploadAvatar, confirmAppointmentCompleted } from "../controllers/users.controller";
import { createAvatarUpload } from "../utils/upload";

const router = Router();
const avatarUpload = createAvatarUpload();

router.get("/me", requireAuth, getMe);
router.put("/me", requireAuth, updateMe);
router.post("/me/avatar", requireAuth, avatarUpload.single("avatar"), uploadAvatar);
router.get("/me/appointments", requireAuth, getMyAppointments);
router.post("/me/appointments/:appointmentId/complete", requireAuth, confirmAppointmentCompleted);
router.get("/me/wallet", requireAuth, getMyWallet);

export default router;


