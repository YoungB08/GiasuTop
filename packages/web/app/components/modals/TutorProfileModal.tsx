import React from "react";
import KntechUpload from "../KntechUpload";
import TutorEkycPanel from "../TutorEkycPanel";

type TutorProfileModalProps = {
  tutorProfileModalOpen: boolean;
  setTutorProfileModalOpen: (open: boolean) => void;
  tutorStatus: string | null;
  tutorRejectReason: string | null;
  tutorProfileForm: any;
  setTutorProfileForm: (form: any) => void;
  newCommissionRate: string;
  setNewCommissionRate: (rate: string) => void;
  submittingVerification: boolean;
  portraitFile?: File | null;
  cccdFrontFile?: File | null;
  cccdBackFile?: File | null;
  certificatesFiles?: FileList | null;
  ekycResult?: any | null;
  identitySubmitted?: boolean;
  teachingProfileCompleted?: boolean;
  registrationStep?: string | null;
  setPortraitFile: (file: File | null) => void;
  setCccdFrontFile: (file: File | null) => void;
  setCccdBackFile: (file: File | null) => void;
  setCertificatesFiles: (files: FileList | null) => void;
  setEkycResult: (result: any | null) => void;
  handleUpdateTutorProfile: (e: React.FormEvent) => void;
  handleSubmitVerification: (e: React.FormEvent) => void;
  token: string | null;
  formatVND: (val: any) => string;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
};

const SUBJECTS = ["Toán", "Lý", "Hóa", "Văn", "Tiếng Anh", "Sinh học"];
const YEAR_OPTIONS = [
  "Sinh viên năm 1",
  "Sinh viên năm 2",
  "Sinh viên năm 3",
  "Sinh viên năm 4",
  "Đã tốt nghiệp cử nhân",
  "Thạc sĩ / Cao học",
  "Giảng viên / Giáo viên",
];
const GRADIENTS = [
  { name: "Xanh Dương", class: "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]" },
  { name: "Xanh Lá", class: "bg-gradient-to-r from-emerald-500 via-teal-600 to-teal-800" },
  { name: "Sunset", class: "bg-gradient-to-r from-rose-500 via-orange-600 to-red-700" },
  { name: "Midnight", class: "bg-gradient-to-r from-purple-600 via-violet-750 to-slate-900" },
];

function StepPill({ active, done, children }: { active?: boolean; done?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
        done
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : active
            ? "border-[#13519c]/30 bg-blue-50 text-[#13519c]"
            : "border-slate-200 bg-slate-50 text-slate-400"
      }`}
    >
      {children}
    </span>
  );
}

function TeachingProfileForm({
  tutorProfileForm,
  setTutorProfileForm,
  newCommissionRate,
  setNewCommissionRate,
  handleUpdateTutorProfile,
  submittingVerification,
  isStepTwo,
}: Pick<
  TutorProfileModalProps,
  "tutorProfileForm" | "setTutorProfileForm" | "newCommissionRate" | "setNewCommissionRate" | "handleUpdateTutorProfile" | "submittingVerification"
> & { isStepTwo: boolean }) {
  const selectedSubjects: string[] = tutorProfileForm.subjectsToTeach || [];
  const canSubmit = selectedSubjects.length > 0 && String(tutorProfileForm.school || "").trim() && String(tutorProfileForm.major || "").trim() && String(tutorProfileForm.bio || "").trim();

  return (
    <form onSubmit={handleUpdateTutorProfile} className="space-y-4 text-left text-xs">
      <div>
        <label className="mb-1 block font-semibold text-slate-500">Trường đào tạo *</label>
        <input
          type="text"
          required
          value={tutorProfileForm.school}
          onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, school: e.target.value })}
          placeholder="Ví dụ: Đại học Bách Khoa Hà Nội"
          className="h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block font-semibold text-slate-500">Chuyên ngành *</label>
          <input
            type="text"
            required
            value={tutorProfileForm.major}
            onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, major: e.target.value })}
            placeholder="Ví dụ: Sư phạm Toán"
            className="h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="mb-1 block font-semibold text-slate-500">Trình độ / Năm học *</label>
          <select
            value={tutorProfileForm.yearOfStudy}
            onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, yearOfStudy: e.target.value })}
            className="h-10 w-full cursor-pointer rounded-xl border border-slate-250 bg-slate-50 px-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {YEAR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block font-semibold text-slate-500">Mức học phí đề xuất (VND / giờ) *</label>
        <input
          type="number"
          required
          min="1"
          value={tutorProfileForm.hourlyRate}
          onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, hourlyRate: e.target.value })}
          placeholder="Ví dụ: 150000"
          className="h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-1 block font-semibold text-slate-500">Môn học đăng ký giảng dạy *</label>
        <div className="flex flex-wrap gap-2 pt-1">
          {SUBJECTS.map((subject) => {
            const active = selectedSubjects.includes(subject);
            return (
              <button
                key={subject}
                type="button"
                onClick={() => {
                  const next = active ? selectedSubjects.filter((item) => item !== subject) : [...selectedSubjects, subject];
                  setTutorProfileForm({ ...tutorProfileForm, subjectsToTeach: next });
                }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-[#13519c] bg-[#13519c] text-white"
                    : "border-slate-200 bg-white text-slate-655 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {subject}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-1 block font-semibold text-slate-500">Giới thiệu bản thân & kinh nghiệm dạy học *</label>
        <textarea
          required
          rows={4}
          value={tutorProfileForm.bio}
          onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, bio: e.target.value })}
          placeholder="Giới thiệu phương pháp giảng dạy, kinh nghiệm, thành tích nổi bật..."
          className="w-full rounded-xl border border-slate-250 bg-slate-50 p-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-1 block font-semibold text-slate-500">Đề xuất tỉ lệ chiết khấu hoa hồng với hệ thống (%) *</label>
        <input
          type="number"
          min="1"
          max="90"
          step="0.1"
          required
          value={newCommissionRate}
          onChange={(e) => setNewCommissionRate(e.target.value)}
          placeholder="Ví dụ: 12.5"
          className="h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-950 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-1.5 block font-semibold text-slate-500">Màu thẻ gia sư *</label>
        <div className="grid grid-cols-2 gap-2">
          {GRADIENTS.map((gradient) => (
            <button
              key={gradient.class}
              type="button"
              onClick={() => setTutorProfileForm({ ...tutorProfileForm, cardGradient: gradient.class })}
              className={`flex h-12 flex-col justify-between rounded-xl border p-2 text-left font-semibold text-white transition ${gradient.class} ${
                tutorProfileForm.cardGradient === gradient.class ? "ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-950" : "opacity-80 hover:opacity-100"
              }`}
            >
              <span className="truncate text-[9px]">{gradient.name}</span>
              <span className="self-end rounded bg-black/20 px-1 text-[7px] uppercase tracking-widest">Chọn</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={submittingVerification || !canSubmit}
        className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-[#13519c] text-xs font-bold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isStepTwo ? "Hoàn tất bước 2 & gửi hồ sơ" : "Cập nhật hồ sơ dạy học"}
      </button>
    </form>
  );
}

export default function TutorProfileModal({
  tutorProfileModalOpen,
  setTutorProfileModalOpen,
  tutorStatus,
  tutorRejectReason,
  tutorProfileForm,
  setTutorProfileForm,
  newCommissionRate,
  setNewCommissionRate,
  submittingVerification,
  portraitFile,
  cccdFrontFile,
  cccdBackFile,
  ekycResult,
  identitySubmitted = false,
  teachingProfileCompleted = false,
  registrationStep,
  setPortraitFile,
  setCccdFrontFile,
  setCccdBackFile,
  setCertificatesFiles,
  setEkycResult,
  handleUpdateTutorProfile,
  handleSubmitVerification,
  token,
  showKntechAlert,
}: TutorProfileModalProps) {
  if (!tutorProfileModalOpen) return null;

  const isRejected = tutorStatus === "REJECTED";
  const isStepTwo = identitySubmitted && !teachingProfileCompleted && !isRejected;
  const isPendingReview = tutorStatus === "PENDING" && teachingProfileCompleted;
  const isApprovedProfile = tutorStatus === "APPROVED" && teachingProfileCompleted;
  const ekycReady = Boolean(ekycResult?.verification || ekycResult?.status || ekycResult?.scores);
  const canSubmitStepOne = Boolean(portraitFile && cccdFrontFile && cccdBackFile && ekycReady);
  const title = isStepTwo
    ? "2. Chi tiết hồ sơ dạy học"
    : isPendingReview
      ? "Hồ sơ chờ phê duyệt"
      : isApprovedProfile
        ? "Thiết lập hồ sơ dạy học"
        : "1. Xác minh minh chứng & CCCD";

  const validateImage = (file: File | null) => {
    if (file && !file.type.startsWith("image/")) {
      showKntechAlert("error", "Lỗi tệp tin", "Vui lòng chỉ chọn file hình ảnh.");
      return false;
    }
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border bg-white p-5 shadow-2xl dark:bg-[#111827]">
        <div className="mb-4 flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
            <div className="mt-2 flex gap-1.5">
              <StepPill active={!identitySubmitted || isRejected} done={identitySubmitted && !isRejected}>Bước 1</StepPill>
              <StepPill active={isStepTwo} done={teachingProfileCompleted}>Bước 2</StepPill>
              <StepPill active={isPendingReview || registrationStep === "PENDING_REVIEW"} done={isApprovedProfile}>Duyệt</StepPill>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setTutorProfileModalOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            ×
          </button>
        </div>

        {isPendingReview ? (
          <div className="space-y-4 py-4 text-center">
            <div className="rounded-xl border border-amber-200/40 bg-amber-50 p-3.5 text-xs font-semibold leading-relaxed text-amber-700 dark:bg-amber-950/20 dark:text-amber-350">
              Hồ sơ xác minh và chi tiết dạy học của bác đang chờ Ban quản trị phê duyệt.
            </div>
            <div className="space-y-2 rounded-xl border border-slate-200/40 bg-slate-50 p-3.5 text-left text-xs text-slate-500 dark:bg-slate-900/60">
              <span className="mb-1 block font-bold">Đã hoàn tất:</span>
              <p>✓ Giấy tờ định danh và eKYC</p>
              <p>✓ Chi tiết hồ sơ dạy học</p>
              <p>✓ Đề xuất chiết khấu hoa hồng</p>
            </div>
          </div>
        ) : isStepTwo || isApprovedProfile ? (
          <TeachingProfileForm
            tutorProfileForm={tutorProfileForm}
            setTutorProfileForm={setTutorProfileForm}
            newCommissionRate={newCommissionRate}
            setNewCommissionRate={setNewCommissionRate}
            handleUpdateTutorProfile={handleUpdateTutorProfile}
            submittingVerification={submittingVerification}
            isStepTwo={isStepTwo}
          />
        ) : (
          <form onSubmit={handleSubmitVerification} className="space-y-4 text-left text-xs">
            {isRejected && (
              <div className="rounded-xl border border-rose-200/40 bg-rose-50 p-3 font-semibold leading-relaxed text-rose-700 dark:bg-rose-950/20 dark:text-rose-350">
                Hồ sơ trước đây đã bị từ chối. Lý do: <span className="font-bold">{tutorRejectReason || "Chưa có lý do."}</span>
              </div>
            )}

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 leading-relaxed text-blue-800 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300">
              Bước 1 cần đủ ảnh chân dung, CCCD hai mặt và eKYC hoàn tất. Sau khi lưu, hệ thống sẽ tự mở bước 2.
            </div>

            <div>
              <label className="mb-1 block font-semibold text-slate-500">Ảnh chân dung cá nhân *</label>
              <KntechUpload
                accept="image/*"
                value={portraitFile || null}
                required
                onChange={(files) => {
                  const file = files?.[0] || null;
                  if (!validateImage(file)) return;
                  setPortraitFile(file);
                }}
                onClear={() => setPortraitFile(null)}
                mainText="Kéo thả hoặc chọn ảnh chân dung"
                allowedText="PNG, JPG, JPEG, WEBP."
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold text-slate-500">CCCD Mặt trước *</label>
              <KntechUpload
                accept="image/*"
                value={cccdFrontFile || null}
                required
                onChange={(files) => {
                  const file = files?.[0] || null;
                  if (!validateImage(file)) return;
                  setCccdFrontFile(file);
                }}
                onClear={() => setCccdFrontFile(null)}
                mainText="Kéo thả hoặc chọn CCCD mặt trước"
                allowedText="PNG, JPG, JPEG, WEBP."
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold text-slate-500">CCCD Mặt sau *</label>
              <KntechUpload
                accept="image/*"
                value={cccdBackFile || null}
                required
                onChange={(files) => {
                  const file = files?.[0] || null;
                  if (!validateImage(file)) return;
                  setCccdBackFile(file);
                }}
                onClear={() => setCccdBackFile(null)}
                mainText="Kéo thả hoặc chọn CCCD mặt sau"
                allowedText="PNG, JPG, JPEG, WEBP."
              />
            </div>

            <TutorEkycPanel
              token={token}
              frontFile={cccdFrontFile}
              backFile={cccdBackFile}
              portraitFile={portraitFile}
              onResultChange={setEkycResult}
              showKntechAlert={showKntechAlert}
            />

            <button
              type="submit"
              disabled={submittingVerification || !canSubmitStepOne}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-[#13519c] text-xs font-bold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submittingVerification ? "Đang lưu bước 1..." : ekycReady ? "Lưu bước 1 & sang bước 2" : "Đang chờ eKYC hoàn tất"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
