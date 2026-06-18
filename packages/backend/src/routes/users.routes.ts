import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { getMe, updateMe, getMyAppointments, getMyWallet } from "../controllers/users.controller";

const router = Router();

router.get("/me", requireAuth, getMe);
router.put("/me", requireAuth, updateMe);
router.get("/me/appointments", requireAuth, getMyAppointments);
router.get("/me/wallet", requireAuth, getMyWallet);

export default router;

