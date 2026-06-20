import { Router } from "express";
import { requireAuth, requireRole } from "../middlewares/auth";
import {
  decideTutor,
  decideWithdraw,
  listPendingTutors,
  listReports,
  listWithdrawRequests,
  resolveReport,
  listSystemLogs,
  listAllUsers,
  updateUserAdmin,
  getSystemStats,
  getDashboardDetails,
  addSubject,
  updateSubject,
  deleteSubject,
  listSubjects,
  addNews,
  updateNews,
  deleteNews,
  listPendingDocuments,
  decideDocument,
  deleteDocument,
  deleteTutorDocument,
  listProposedCommissions,
  decideProposedCommission,
  listEscrowAppointments,
  releaseEscrowAppointment,
} from "../controllers/admin.controller";
import { adminSendNotification } from "../controllers/notification.controller";

const router = Router();

router.use(requireAuth, requireRole(["ADMIN"]));

router.get("/tutors/pending", listPendingTutors);
router.post("/tutors/decide", decideTutor);

router.get("/withdrawals", listWithdrawRequests);
router.post("/withdrawals/decide", decideWithdraw);

router.get("/reports", listReports);
router.post("/reports/resolve", resolveReport);

router.get("/logs", listSystemLogs);
router.get("/users", listAllUsers);
router.put("/users/:userId", updateUserAdmin);
router.post("/notifications/send", adminSendNotification);
router.get("/stats", getSystemStats);
router.get("/dashboard-details", getDashboardDetails);

// Subjects management
router.get("/subjects", listSubjects);
router.post("/subjects", addSubject);
router.put("/subjects/:id", updateSubject);
router.delete("/subjects/:id", deleteSubject);

// News management
router.post("/news", addNews);
router.put("/news/:id", updateNews);
router.delete("/news/:id", deleteNews);

// Documents management
router.get("/documents/pending", listPendingDocuments);
router.post("/documents/:id/decide", decideDocument);
router.delete("/documents/:id", deleteDocument);
router.delete("/tutor-documents/:id", deleteTutorDocument);

router.get("/commissions/pending", listProposedCommissions);
router.post("/commissions/decide", decideProposedCommission);

router.get("/escrow/appointments", listEscrowAppointments);
router.post("/escrow/:appointmentId/release", releaseEscrowAppointment);

export default router;

