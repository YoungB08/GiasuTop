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
  listProposedCommissions,
  decideProposedCommission,
} from "../controllers/admin.controller";

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
router.get("/stats", getSystemStats);

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

// Proposed Commission deals
router.get("/commissions/pending", listProposedCommissions);
router.post("/commissions/decide", decideProposedCommission);

export default router;

