import { Router } from "express";
import { createAppointmentQr, getPaymentStatus, sepayWebhook, mockSepayPayment, walletPayAppointment, getWalletDebug } from "../controllers/payment.controller";
import { requireAuth } from "../middlewares/auth";

const router = Router();

// User flow
router.post("/qr", createAppointmentQr);
router.post("/sepay/mock-trigger", mockSepayPayment);
router.post("/wallet-pay", requireAuth, walletPayAppointment);
router.get("/debug-db/wallet", getWalletDebug);
router.get("/:paymentId/status", getPaymentStatus);
router.get("/:paymentId", getPaymentStatus);

// SePay flow
router.post("/sepay/webhook", sepayWebhook);

export default router;

