import React from "react";
import KntechUpload from "../KntechUpload";

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
  setPortraitFile: (file: File | null) => void;
  setCccdFrontFile: (file: File | null) => void;
  setCccdBackFile: (file: File | null) => void;
  setCertificatesFiles: (files: FileList | null) => void;
  handleUpdateTutorProfile: (e: React.FormEvent) => void;
  handleSubmitVerification: (e: React.FormEvent) => void;
  token: string | null;
  formatVND: (val: any) => string;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
};

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
  certificatesFiles,
  setPortraitFile,
  setCccdFrontFile,
  setCccdBackFile,
  setCertificatesFiles,
  handleUpdateTutorProfile,
  handleSubmitVerification,
  token,
  formatVND,
  showKntechAlert,
}: TutorProfileModalProps) {
  if (!tutorProfileModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between pb-3 border-b mb-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {tutorStatus === "APPROVED"
              ? "⚙️ Thiết Lập Hồ Sơ Dạy Học"
              : tutorStatus === "PENDING"
              ? "🕒 Hồ Sơ Chờ Phê Duyệt"
              : "📝 Xác Minh Minh Chứng & CCCD"}
          </h3>
          <button
            type="button"
            onClick={() => setTutorProfileModalOpen(false)}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {tutorStatus === "APPROVED" ? (
          <div className="space-y-4">
            <form onSubmit={handleUpdateTutorProfile} className="space-y-4 text-xs text-left">
              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Trường đào tạo *</label>
                <input
                  type="text"
                  required
                  value={tutorProfileForm.school}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, school: e.target.value })}
                  placeholder="Ví dụ: Đại học Bách Khoa Hà Nội"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Chuyên ngành *</label>
                  <input
                    type="text"
                    required
                    value={tutorProfileForm.major}
                    onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, major: e.target.value })}
                    placeholder="Ví dụ: Sư phạm Toán"
                    className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Trình độ / Năm học *</label>
                  <select
                    value={tutorProfileForm.yearOfStudy}
                    onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, yearOfStudy: e.target.value })}
                    className="w-full h-10 border rounded-xl px-2 bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700 cursor-pointer"
                  >
                    <option value="Sinh viên năm 1">Sinh viên năm 1</option>
                    <option value="Sinh viên năm 2">Sinh viên năm 2</option>
                    <option value="Sinh viên năm 3">Sinh viên năm 3</option>
                    <option value="Sinh viên năm 4">Sinh viên năm 4</option>
                    <option value="Đã tốt nghiệp cử nhân">Đã tốt nghiệp cử nhân</option>
                    <option value="Thạc sĩ / Cao học">Thạc sĩ / Cao học</option>
                    <option value="Giảng viên / Giáo viên">Giảng viên / Giáo viên</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Mức học phí đề xuất (VND / giờ) *</label>
                <input
                  type="number"
                  required
                  value={tutorProfileForm.hourlyRate}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, hourlyRate: e.target.value })}
                  placeholder="Ví dụ: 150000"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Môn học đăng ký giảng dạy (chọn ít nhất 1 môn) *</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Toán", "Lý", "Hóa", "Văn", "Tiếng Anh", "Sinh học"].map((sub) => {
                    const isChecked = tutorProfileForm.subjectsToTeach.includes(sub);
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => {
                          const current = [...(tutorProfileForm.subjectsToTeach || [])];
                          const index = current.indexOf(sub);
                          if (index > -1) {
                            current.splice(index, 1);
                          } else {
                            current.push(sub);
                          }
                          setTutorProfileForm({ ...tutorProfileForm, subjectsToTeach: current });
                        }}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isChecked
                            ? "bg-[#13519c] text-white border-[#13519c]"
                            : "bg-white text-slate-655 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                        }`}
                      >
                        {sub}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Giới thiệu bản thân & Kinh nghiệm dạy học *</label>
                <textarea
                  required
                  rows={4}
                  value={tutorProfileForm.bio}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, bio: e.target.value })}
                  placeholder="Bác vui lòng giới thiệu chi tiết về phương pháp giảng dạy..."
                  className="w-full p-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Đề xuất tỉ lệ chiết khấu deal hoa hồng với Hệ thống (%) *</label>
                <input
                  type="number"
                  min="1"
                  max="90"
                  step="0.1"
                  required
                  value={newCommissionRate}
                  onChange={(e) => setNewCommissionRate(e.target.value)}
                  placeholder="Ví dụ: 12.5"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-950 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1.5 font-semibold">Tùy chỉnh màu sắc/gradient thẻ Gia sư *</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Xanh Dương (KNTech)", class: "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]" },
                    { name: "Xanh Lá (Teal)", class: "bg-gradient-to-r from-emerald-500 via-teal-600 to-teal-800" },
                    { name: "Sunset Hoàng Hôn", class: "bg-gradient-to-r from-rose-500 via-orange-600 to-red-700" },
                    { name: "Tím Midnight", class: "bg-gradient-to-r from-purple-600 via-violet-750 to-slate-900" },
                  ].map((g) => (
                    <button
                      key={g.class}
                      type="button"
                      onClick={() => setTutorProfileForm({ ...tutorProfileForm, cardGradient: g.class })}
                      className={`p-2 rounded-xl text-left border font-semibold text-white h-12 flex flex-col justify-between cursor-pointer transition ${g.class} ${
                        tutorProfileForm.cardGradient === g.class
                          ? "ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-950"
                          : "opacity-80 hover:opacity-100 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <span className="text-[9px] truncate">{g.name}</span>
                      <span className="text-[7px] tracking-widest uppercase bg-black/20 px-1 rounded self-end">CHỌN</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!tutorProfileForm.subjectsToTeach || tutorProfileForm.subjectsToTeach.length === 0}
                className="w-full h-11 mt-2 bg-gradient-to-r from-blue-600 to-[#13519c] text-white text-xs font-bold rounded-xl shadow-md transition hover:opacity-90 disabled:opacity-50 cursor-pointer"
              >
                Cập Nhật Hồ Sơ Dạy Học (Cần Admin Duyệt Lại)
              </button>
            </form>
          </div>
        ) : tutorStatus === "PENDING" ? (
          <div className="space-y-4 py-4 text-center">
            <div className="text-4xl animate-pulse">🕒</div>
            <div className="p-3.5 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-350 rounded-xl border border-amber-200/40 text-xs font-semibold leading-relaxed">
              Hồ sơ xác minh và đề xuất deal của bác đang được Ban quản trị Giasu top phê duyệt. Vui lòng quay lại sau khi hồ sơ đã được duyệt để hiển thị trên trang thuê.
            </div>
            <div className="space-y-2 text-left bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/40 text-xs text-slate-500">
              <span className="font-bold text-slate-500 block mb-1">Tài liệu đã gửi:</span>
              <p className="truncate">✓ Ảnh chân dung cá nhân</p>
              <p className="truncate">✓ CCCD Mặt trước</p>
              <p className="truncate">✓ CCCD Mặt sau</p>
              <p className="truncate">✓ Đề xuất chiết khấu hoa hồng</p>
            </div>
          </div>
        ) : (
          // NOT_SUBMITTED or REJECTED (Phase 1 upload form)
          <form onSubmit={handleSubmitVerification} className="space-y-4 text-xs text-left max-h-[70vh] overflow-y-auto pr-1">
            {tutorStatus === "REJECTED" && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-350 rounded-xl border border-rose-200/40 font-semibold leading-relaxed">
                ⚠️ Hồ sơ trước đây đã bị từ chối. Lý do: <span className="font-bold text-rose-800 dark:text-rose-300">{tutorRejectReason || ""}</span>. Vui lòng gửi lại tài liệu mới chính xác.
              </div>
            )}

            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300 rounded-xl border border-blue-100 dark:border-blue-900/30 leading-relaxed">
              Bác vui lòng hoàn tất tất cả thông tin hồ sơ và tải lên tài liệu xác minh bên dưới.
            </div>

            <div className="border-b pb-3 space-y-3">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs">📂 1. Tài liệu xác minh danh tính</h4>
              <div>
                <label className="block text-slate-500 font-semibold mb-1">Ảnh chân dung cá nhân *</label>
                <KntechUpload
                  accept="image/*"
                  value={portraitFile || null}
                  required
                  onChange={(files) => {
                    const file = files?.[0] || null;
                    if (file && !file.type.startsWith("image/")) {
                      showKntechAlert("error", "Lỗi tệp tin", "Vui lòng chỉ chọn file hình ảnh!");
                      return;
                    }
                    setPortraitFile(file);
                  }}
                  onClear={() => setPortraitFile(null)}
                  mainText="Kéo thả hoặc Chọn ảnh chân dung"
                  allowedText="PNG, JPG, JPEG, and WEBP are Allowed."
                />
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1">CCCD Mặt trước *</label>
                <KntechUpload
                  accept="image/*"
                  value={cccdFrontFile || null}
                  required
                  onChange={(files) => {
                    const file = files?.[0] || null;
                    if (file && !file.type.startsWith("image/")) {
                      showKntechAlert("error", "Lỗi tệp tin", "Vui lòng chỉ chọn file hình ảnh!");
                      return;
                    }
                    setCccdFrontFile(file);
                  }}
                  onClear={() => setCccdFrontFile(null)}
                  mainText="Kéo thả hoặc Chọn CCCD Mặt trước"
                  allowedText="PNG, JPG, JPEG, and WEBP are Allowed."
                />
              </div>

              <div>
                <label className="block text-slate-500 font-semibold mb-1">CCCD Mặt sau *</label>
                <KntechUpload
                  accept="image/*"
                  value={cccdBackFile || null}
                  required
                  onChange={(files) => {
                    const file = files?.[0] || null;
                    if (file && !file.type.startsWith("image/")) {
                      showKntechAlert("error", "Lỗi tệp tin", "Vui lòng chỉ chọn file hình ảnh!");
                      return;
                    }
                    setCccdBackFile(file);
                  }}
                  onClear={() => setCccdBackFile(null)}
                  mainText="Kéo thả hoặc Chọn CCCD Mặt sau"
                  allowedText="PNG, JPG, JPEG, and WEBP are Allowed."
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs">📝 2. Chi tiết hồ sơ dạy học</h4>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Trường đào tạo *</label>
                <input
                  type="text"
                  required
                  value={tutorProfileForm.school}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, school: e.target.value })}
                  placeholder="Ví dụ: Đại học Bách Khoa Hà Nội"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Chuyên ngành *</label>
                  <input
                    type="text"
                    required
                    value={tutorProfileForm.major}
                    onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, major: e.target.value })}
                    placeholder="Ví dụ: Sư phạm Toán"
                    className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Trình độ / Năm học *</label>
                  <select
                    value={tutorProfileForm.yearOfStudy}
                    onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, yearOfStudy: e.target.value })}
                    className="w-full h-10 border rounded-xl px-2 bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700 cursor-pointer"
                  >
                    <option value="Sinh viên năm 1">Sinh viên năm 1</option>
                    <option value="Sinh viên năm 2">Sinh viên năm 2</option>
                    <option value="Sinh viên năm 3">Sinh viên năm 3</option>
                    <option value="Sinh viên năm 4">Sinh viên năm 4</option>
                    <option value="Đã tốt nghiệp cử nhân">Đã tốt nghiệp cử nhân</option>
                    <option value="Thạc sĩ / Cao học">Thạc sĩ / Cao học</option>
                    <option value="Giảng viên / Giáo viên">Giảng viên / Giáo viên</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Mức học phí đề xuất (VND / giờ) *</label>
                <input
                  type="number"
                  required
                  value={tutorProfileForm.hourlyRate}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, hourlyRate: e.target.value })}
                  placeholder="Ví dụ: 150000"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Môn học đăng ký giảng dạy (chọn ít nhất 1 môn) *</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Toán", "Lý", "Hóa", "Văn", "Tiếng Anh", "Sinh học"].map((sub) => {
                    const isChecked = tutorProfileForm.subjectsToTeach.includes(sub);
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => {
                          const current = [...tutorProfileForm.subjectsToTeach];
                          const index = current.indexOf(sub);
                          if (index > -1) {
                            current.splice(index, 1);
                          } else {
                            current.push(sub);
                          }
                          setTutorProfileForm({ ...tutorProfileForm, subjectsToTeach: current });
                        }}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isChecked
                            ? "bg-[#13519c] text-white border-[#13519c]"
                            : "bg-white text-slate-655 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                        }`}
                      >
                        {sub}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Giới thiệu bản thân & Kinh nghiệm dạy học *</label>
                <textarea
                  required
                  rows={4}
                  value={tutorProfileForm.bio}
                  onChange={(e) => setTutorProfileForm({ ...tutorProfileForm, bio: e.target.value })}
                  placeholder="Bác vui lòng giới thiệu chi tiết về phương pháp giảng dạy..."
                  className="w-full p-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1 font-semibold">Đề xuất tỉ lệ chiết khấu deal hoa hồng với Hệ thống (%) *</label>
                <input
                  type="number"
                  min="1"
                  max="90"
                  step="0.1"
                  required
                  value={newCommissionRate}
                  onChange={(e) => setNewCommissionRate(e.target.value)}
                  placeholder="Ví dụ: 12.5"
                  className="w-full h-10 px-3 border rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-950 dark:text-white dark:bg-slate-900 border-slate-250 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1.5 font-semibold">Tùy chỉnh màu sắc/gradient thẻ Gia sư *</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Xanh Dương (KNTech)", class: "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]" },
                    { name: "Xanh Lá (Teal)", class: "bg-gradient-to-r from-emerald-500 via-teal-600 to-teal-800" },
                    { name: "Sunset Hoàng Hôn", class: "bg-gradient-to-r from-rose-500 via-orange-600 to-red-700" },
                    { name: "Tím Midnight", class: "bg-gradient-to-r from-purple-600 via-violet-750 to-slate-900" },
                  ].map((g) => (
                    <button
                      key={g.class}
                      type="button"
                      onClick={() => setTutorProfileForm({ ...tutorProfileForm, cardGradient: g.class })}
                      className={`p-2 rounded-xl text-left border font-semibold text-white h-12 flex flex-col justify-between cursor-pointer transition ${g.class} ${
                        tutorProfileForm.cardGradient === g.class
                          ? "ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-950"
                          : "opacity-80 hover:opacity-100 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <span className="text-[9px] truncate">{g.name}</span>
                      <span className="text-[7px] tracking-widest uppercase bg-black/20 px-1 rounded self-end">CHỌN</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submittingVerification || tutorProfileForm.subjectsToTeach.length === 0}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-[#13519c] text-white text-xs font-bold rounded-xl shadow-md transition hover:opacity-90 disabled:opacity-50 cursor-pointer flex items-center justify-center"
            >
              {submittingVerification ? "Đang gửi hồ sơ..." : "Gửi Hồ Sơ & Đề Xuất Deal"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
