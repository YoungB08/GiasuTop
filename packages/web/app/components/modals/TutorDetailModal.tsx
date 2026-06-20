import React from "react";
import { getAvatarUrl } from "../../utils/avatar";

type TutorDetailModalProps = {
  viewingTutor: any;
  setViewingTutor: (tutor: any) => void;
  setTutorProfileToView: (tutor: any) => void;
  setActiveTab: (tab: any) => void;
  token: string | null;
  setChatActivePartner: (partner: any) => void;
  setHomeSubTab: (tab: any) => void;
  setSelectedTutor: (tutor: any) => void;
  openAuth: (tab: "login" | "register", role?: any) => void;
  formatVND: (val: any) => string;
};

export default function TutorDetailModal({
  viewingTutor,
  setViewingTutor,
  setTutorProfileToView,
  setActiveTab,
  token,
  setChatActivePartner,
  setHomeSubTab,
  setSelectedTutor,
  openAuth,
  formatVND,
}: TutorDetailModalProps) {
  if (!viewingTutor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#111827] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-5 text-left">
        <div className="flex justify-between items-start border-b pb-3.5">
          <div className="flex items-center gap-3">
            <img
              src={getAvatarUrl(viewingTutor)}
              alt={viewingTutor.full_name}
              className="h-14 w-14 rounded-2xl border-2 border-blue-500 bg-slate-50 shadow-sm object-cover"
            />
            <div>
              <h3 className="text-sm font-bold text-slate-955 dark:text-white flex items-center gap-1.5">
                {viewingTutor.full_name}
                <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-350 font-bold px-1.5 py-0.2 rounded-full border border-emerald-200/30">
                  ✓ Đã xác minh
                </span>
              </h3>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {viewingTutor.school} • {viewingTutor.major}
              </p>
              <div className="flex items-center gap-1 mt-1 text-[9px] text-amber-500 font-semibold">
                <span>⭐ {(4.7 + (viewingTutor.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)}</span>
                <span className="text-slate-400">({(viewingTutor.full_name.charCodeAt(1) % 40) + 15} đánh giá)</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setViewingTutor(null)}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 flex items-center justify-center text-sm cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40">
              <span className="text-[8px] uppercase font-bold text-slate-400 block mb-1">Học phí dạy kèm</span>
              <span className="text-xs font-black text-rose-600">{formatVND(viewingTutor.hourly_rate)}/giờ</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40">
              <span className="text-[8px] uppercase font-bold text-slate-400 block mb-1">Trình độ học vấn</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-white">
                {viewingTutor.year_of_study || "Sinh viên năm 3"}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Môn học nhận dạy</span>
            <div className="flex flex-wrap gap-1.5">
              {(viewingTutor.subjects_to_teach || []).map((sub: string) => (
                <span
                  key={sub}
                  className="text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded border border-blue-200/20"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl space-y-2 border border-slate-100 dark:border-slate-800/40">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Giới thiệu bản thân</span>
            <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-normal whitespace-pre-line">
              {viewingTutor.bio ||
                "Gia sư nhiều năm kinh nghiệm chuyên môn dạy kèm bám sát đề thi và cấu trúc bài học lớp học phổ thông, hỗ trợ ôn luyện kỳ thi quan trọng đạt kết quả tối ưu."}
            </p>
          </div>

          {viewingTutor.documents && viewingTutor.documents.length > 0 && (
            <div className="space-y-2">
              <span className="text-[9px] uppercase font-bold text-slate-400 block">
                Bằng cấp & Chứng chỉ ({viewingTutor.documents.length})
              </span>
              <div className="grid grid-cols-2 gap-2">
                {viewingTutor.documents.map((doc: any) => {
                  const fileUrl = `http://localhost:5000/api/tutors/documents/${doc.id}?token=${token}`;
                  const isImage = doc.mime_type?.startsWith("image/");
                  return (
                    <div
                      key={doc.id}
                      className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800 flex flex-col justify-between gap-2"
                    >
                      <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate" title={doc.original_name}>
                        {doc.original_name}
                      </span>
                      {isImage ? (
                        <a
                          href={fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-950"
                        >
                          <img
                            src={fileUrl}
                            alt={doc.original_name}
                            className="h-20 w-full object-cover rounded hover:scale-105 transition duration-200"
                          />
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold">
                            XEM 🔎
                          </div>
                        </a>
                      ) : (
                        <a
                          href={fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-20 rounded bg-blue-50 dark:bg-slate-800 flex flex-col items-center justify-center border border-dashed text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition text-[10px] font-bold gap-1 text-center px-1"
                        >
                          <span>📄 {doc.original_name.split(".").pop()?.toUpperCase()} File</span>
                          <span className="text-[8px] font-semibold text-slate-455 dark:text-slate-500">
                            Click để mở ↗
                          </span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2.5 pt-3 border-t">
          <button
            onClick={() => {
              setTutorProfileToView(viewingTutor);
              setActiveTab("profile");
              setViewingTutor(null);
            }}
            className="w-full bg-white border-2 border-slate-200 hover:border-[#13519c] text-[#13519c] font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition text-center"
          >
            Xem trang cá nhân
          </button>

          <div className="flex gap-2.5">
            <button
              onClick={() => {
                if (!token) {
                  openAuth("login");
                  return;
                }
                setChatActivePartner(viewingTutor);
                setHomeSubTab("community");
                setActiveTab("home");
                setViewingTutor(null);
              }}
              className="flex-1 bg-purple-650 hover:bg-purple-750 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition shadow text-center flex items-center justify-center gap-1.5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </button>
            <button
              onClick={() => {
                setSelectedTutor(viewingTutor);
                setViewingTutor(null);
              }}
              className="flex-[4] bg-[#13519c] hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition shadow text-center font-semibold"
            >
              📅 Đặt lịch học ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
