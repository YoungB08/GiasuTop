import React from "react";
import MessengerChat from "../MessengerChat";
import { AlertCustomizer } from "../CustomAlert";
import { IconBell } from "../icons";
import { getAvatarUrl } from "../../utils/avatar";

type HomeTabProps = {
  homeSubTab: "feed" | "community";
  setHomeSubTab: (tab: "feed" | "community") => void;
  handleRegisterNotification: () => void;
  handleTestNotification: () => void;
  tutors: any[];
  formatVND: (val: any) => string;
  setViewingTutor: (tutor: any) => void;
  setSelectedGradeFilter: (val: string) => void;
  setActiveTab: (val: any) => void;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
  token: string | null;
  user: any;
  chatActivePartner: any;
  setChatActivePartner: (partner: any) => void;
  openAuth: (tab: "login" | "register", role?: any) => void;
};

export default function HomeTab({
  homeSubTab,
  setHomeSubTab,
  handleRegisterNotification,
  handleTestNotification,
  tutors,
  formatVND,
  setViewingTutor,
  setSelectedGradeFilter,
  setActiveTab,
  showKntechAlert,
  token,
  user,
  chatActivePartner,
  setChatActivePartner,
  openAuth,
}: HomeTabProps) {
  return (
    <div className="space-y-6">
      {/* Community Header Tabs */}
      <div className="flex bg-white dark:bg-[#111827] rounded-xl p-1 shadow-sm border text-xs">
        <button
          onClick={() => setHomeSubTab("feed")}
          className={`flex-1 py-2 rounded-lg font-semibold text-center cursor-pointer transition ${homeSubTab === "feed"
            ? "bg-[#13519c] text-white"
            : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
            }`}
        >
          <i className="fa-solid fa-list-check mr-2"></i>Trang chủ
        </button>
        <button
          onClick={() => setHomeSubTab("community")}
          className={`flex-1 py-2 rounded-lg font-semibold text-center cursor-pointer transition ${homeSubTab === "community"
            ? "bg-[#13519c] text-white"
            : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
            }`}
        >
          <i className="fa-solid fa-users mr-2"></i>Cộng đồng
        </button>
      </div>

      {homeSubTab === "feed" && (
        <div className="space-y-6">
          {/* Big Carousel Banner */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200/50 bg-[#e3ecf5] dark:bg-slate-900 relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
              alt="KNTech Gia Sư Trực Tuyến"
              className="w-full h-44 object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent p-4 flex flex-col justify-end text-white">
              <span className="text-[10px] bg-red-650 px-2 py-0.5 rounded font-bold uppercase tracking-wider w-max mb-1.5">
                GIA SƯ CHẤT LƯỢNG CAO
              </span>
              <h2 className="text-base font-semibold leading-tight drop-shadow-md">
                TÌM GIA SƯ THỦ KHOA ÔN THI ĐẠI HỌC
              </h2>
              <p className="text-[11px] opacity-90 mt-1">
                Kết nối nhanh chóng cùng gia sư giỏi từ Đại học Bách Khoa, Sư Phạm.
              </p>
            </div>
          </div>

          {/* Push Notification Panel */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-900/60 dark:to-indigo-950/20 border border-indigo-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <h4 className="text-xs font-bold text-indigo-950 dark:text-white flex items-center gap-1.5">
                🔔 Nhận đề thi mới và thông báo từ GiaSuTop
              </h4>
            </div>
            <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
              <button
                type="button"
                onClick={handleRegisterNotification}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] px-3.5 py-2 rounded-xl shadow-md transition active:scale-95 cursor-pointer"
              >
                Nhận
              </button>
              <button
                type="button"
                onClick={handleTestNotification}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold text-[10px] px-3.5 py-2 rounded-xl transition active:scale-95 cursor-pointer"
              >
                Test thông báo
              </button>
            </div>
          </div>

          {/* Tutors Grid (Secondary list in feed) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Gia sư nổi bật hàng đầu</h3>
              <span
                className="text-[11px] text-[#13519c] font-semibold cursor-pointer hover:underline"
                onClick={() => {
                  setSelectedGradeFilter("Tất cả");
                  setActiveTab("courses");
                }}
              >
                Xem tất cả
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutors.slice(0, 4).map((t) => (
                <div
                  key={t.user_id}
                  className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={getAvatarUrl(t)}
                      alt={t.full_name}
                      className="h-9 w-9 rounded-full border bg-slate-50 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-semibold text-slate-950 dark:text-white truncate">{t.full_name}</h4>
                      <p className="text-[10px] text-slate-400 truncate">{t.school}</p>
                      <div className="flex items-center gap-1 mt-0.5 text-[9px] text-amber-500 font-semibold">
                        <span>⭐ {(4.7 + (t.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)}</span>
                        <span className="text-slate-400">({(t.full_name.charCodeAt(1) % 40) + 15} đánh giá)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {t.bio || "Gia sư kinh nghiệm chuyên dạy kèm và ôn thi cấp tốc đại học."}
                  </p>
                  <div className="pt-2 border-t dark:border-slate-800 flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-rose-600">{formatVND(t.hourly_rate)}/giờ</span>
                    <button
                      onClick={() => setViewingTutor(t)}
                      className="bg-[#13519c] hover:bg-blue-800 text-white px-3 py-1 rounded cursor-pointer font-semibold text-[10px]"
                    >
                      Đăng ký học
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMMUNITY REVIEWS LIST */}
          <div className="space-y-4 pt-4 border-t dark:border-slate-800">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                🌟 Đánh giá & Phản hồi Phụ huynh
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 1, student_name: "Bác Minh (Phụ huynh bé Linh)", rating: 5, comment: "Gia sư Bách Khoa dạy bé rất hiểu bài, kiên trì chỉ bảo từ cơ bản. Rất hài lòng!", created_at: "2026-06-12" },
                { id: 2, student_name: "Chị Hằng", rating: 5, comment: "Phương pháp dạy tiếng Anh bằng sơ đồ tư duy giúp con ghi nhớ nhanh, cải thiện rõ rệt.", created_at: "2026-06-11" },
                { id: 3, student_name: "Anh Đức", rating: 4, comment: "Thầy dạy nhiệt tình, bài tập chuẩn bị chu đáo, có báo cáo sau mỗi buổi.", created_at: "2026-06-10" },
                { id: 4, student_name: "Bác Hoa (Lớp 12 ôn thi)", rating: 5, comment: "Lộ trình ôn thi rõ ràng, sát đề mẫu Bộ GD. Con tự tin làm bài hơn nhiều.", created_at: "2026-06-08" },
              ].map((rev) => (
                <div key={rev.id} className="bg-[#f9fafb] dark:bg-slate-900/60 p-4 rounded-xl border dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">{rev.student_name}</span>
                    <div className="text-amber-400 text-xs">
                      {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">"{rev.comment}"</p>
                  <span className="block text-[9px] text-slate-400 text-right">📅 {rev.created_at}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Customizer / Testing Area */}
          <div className="pt-4 border-t dark:border-slate-800">
            <AlertCustomizer onTestAlert={showKntechAlert} />
          </div>
        </div>
      )}

      {homeSubTab === "community" && (
        token ? (
          <MessengerChat
            token={token}
            currentUser={user}
            chatActivePartner={chatActivePartner}
            onClearActivePartner={() => setChatActivePartner(null)}
          />
        ) : (
          <div className="bg-white dark:bg-[#111827] rounded-xl p-8 text-center text-[11px] text-slate-400 border border-dashed border-slate-200 dark:border-slate-800">
            🔒 Bác vui lòng <span onClick={() => openAuth("login")} className="text-[#13519c] font-semibold hover:underline cursor-pointer">Đăng nhập / Đăng ký</span> tài khoản để tham gia phòng chat cùng gia sư.
          </div>
        )
      )}
    </div>
  );
}
