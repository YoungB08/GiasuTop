import { Router } from "express";
import { bookAppointment, getTutors, getTutorById, getTutorReviews, createTutorReview } from "../controllers/tutor.controller";
import { requireAuth } from "../middlewares/auth";
import { upsertMyTutorProfile, uploadMyTutorDocuments, getMyTutorStatus, submitTutorVerification, getMyTutorDocumentFile, proposeCommission, getMyTutorDocumentFileByFilename } from "../controllers/tutorProfile.controller";
import { createTutorUpload } from "../utils/upload";

const router = Router();
router.get('/', getTutors);
router.get('/:tutorId', getTutorById);
router.post('/book', bookAppointment);
router.get("/documents/:documentId", requireAuth, getMyTutorDocumentFile);
router.get("/me/documents/:documentId/file", requireAuth, getMyTutorDocumentFile);
router.get("/me/documents/file/:filename", requireAuth, getMyTutorDocumentFileByFilename);
router.get("/:tutorId/reviews", getTutorReviews);
router.post("/:tutorId/reviews", createTutorReview);
router.put("/me/commission", requireAuth, proposeCommission);

// Tutor self-service registration/profile
router.get("/me/status", requireAuth, getMyTutorStatus);
router.post("/me/verify-submit", requireAuth, submitTutorVerification);
router.put("/me/profile", requireAuth, upsertMyTutorProfile);

const upload = createTutorUpload();
router.post(
  "/me/documents",
  requireAuth,
  upload.fields([
    { name: "cccdFront", maxCount: 1 },
    { name: "cccdBack", maxCount: 1 },
    { name: "portrait", maxCount: 1 },
    { name: "certificates", maxCount: 5 },
  ]),
  uploadMyTutorDocuments
);

export default router;
