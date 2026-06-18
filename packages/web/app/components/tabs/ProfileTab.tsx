import React from "react";

type ProfileTabProps = {
  tutorProfileToView: any;
  setTutorProfileToView: (tutor: any) => void;
  formatVND: (val: any) => string;
  user: any;
  openAuth: (tab: "login" | "register", role?: "USER" | "TUTOR") => void;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
};

export default function ProfileTab({
  tutorProfileToView,
  setTutorProfileToView,
  formatVND,
  user,
  openAuth,
  showKntechAlert,
}: ProfileTabProps) {
  return (
    <div className="space-y-6 pb-20 md:pb-0">
      {tutorProfileToView ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 animate-fade-in relative text-left">
          <button
            onClick={() => setTutorProfileToView(null)}
            className="absolute top-4 right-4 h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
          >
            ✕
          </button>
          <div className="flex flex-col items-center gap-4 text-center mt-4">
            <img
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(tutorProfileToView.email)}`}
              className="w-24 h-24 rounded-full border-4 border-blue-500 bg-slate-55"
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold flex items-center justify-center gap-1.5 dark:text-white">
                {tutorProfileToView.full_name}{" "}
                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                  ✓ Đã xác minh
                </span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {tutorProfileToView.school} • {tutorProfileToView.major}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-105 dark:border-slate-700">
              <span className="text-xs uppercase font-bold text-slate-400">Học phí</span>
              <div className="text-base font-black text-rose-600 mt-1">{formatVND(tutorProfileToView.hourly_rate)}/h</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-105 dark:border-slate-700">
              <span className="text-xs uppercase font-bold text-slate-400">Đánh giá</span>
              <div className="text-base font-black text-amber-500 mt-1">
                ⭐ {(4.7 + (tutorProfileToView.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)} (
                {(tutorProfileToView.full_name.charCodeAt(1) % 40) + 15})
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2 dark:text-white">Giới thiệu bản thân</h3>
            <p className="text-sm text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl leading-relaxed whitespace-pre-line border border-slate-105 dark:border-slate-700">
              {tutorProfileToView.bio || "Chưa có thông tin giới thiệu."}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white">
              <i className="fa-solid fa-star text-amber-500"></i> Đánh giá từ học viên
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-105 dark:border-slate-700 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=HsTuan"
                      className="w-6 h-6 bg-white rounded-full"
                      alt=""
                    />
                    <span className="font-bold text-sm dark:text-white">HS. Nguyễn Tuấn</span>
                  </div>
                  <span className="text-amber-500 text-xs tracking-widest">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-350">
                  Gia sư dạy rất dễ hiểu, con mình học tiến bộ hẳn sau 1 tháng.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-105 dark:border-slate-700 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=HsMai"
                      className="w-6 h-6 bg-white rounded-full"
                      alt=""
                    />
                    <span className="font-bold text-sm dark:text-white">HS. Phạm Mai</span>
                  </div>
                  <span className="text-amber-500 text-xs tracking-widest">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-350">
                  Thầy siêu nhiệt tình luôn ạ, cho bài tập cũng vừa sức.
                </p>
              </div>
            </div>

            {user && user.role === "STUDENT" && (
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-sm mb-3 dark:text-white">Viết đánh giá của bạn</h4>
                <div className="flex gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fa-solid fa-star text-slate-300 hover:text-amber-500 cursor-pointer text-xl hover:scale-110 transition-transform"
                    ></i>
                  ))}
                </div>
                <textarea
                  placeholder="Nhập cảm nhận của bạn về gia sư..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 dark:text-white placeholder-slate-400"
                ></textarea>
                <button className="mt-3 bg-[#13519c] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-800 transition shadow flex items-center gap-2 cursor-pointer">
                  <i className="fa-regular fa-paper-plane"></i> Gửi đánh giá
                </button>
              </div>
            )}
          </div>
        </div>
      ) : user ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 md:p-8 animate-fade-in text-left">
          <h2 className="text-xl font-bold mb-6 dark:text-white">Hồ sơ cá nhân</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <div className="relative">
                <img
                  src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(user.email)}`}
                  className="w-32 h-32 rounded-full bg-slate-100 border-4 border-white shadow-lg"
                  alt="Avatar"
                />
                <button className="absolute bottom-0 right-0 bg-[#13519c] text-white p-2 rounded-full shadow hover:bg-blue-800 cursor-pointer">
                  <i className="fa-solid fa-camera"></i>
                </button>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg dark:text-white">{user.fullName}</div>
                <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mt-1 inline-block">
                  Vai trò:{" "}
                  {user.role === "TUTOR"
                    ? "Gia Sư"
                    : user.role === "STUDENT"
                    ? "Học Sinh / Phụ Huynh"
                    : "Quản Trị Viên"}
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-5 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-105 dark:border-slate-700">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Họ và tên</label>
                <input
                  type="text"
                  defaultValue={user.fullName}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Email (Không thể đổi)</label>
                <input
                  type="text"
                  defaultValue={user.email}
                  disabled
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-xl px-4 py-3 text-sm font-semibold cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Số điện thoại</label>
                <input
                  type="text"
                  placeholder="Chưa cập nhật"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
              </div>
              <div className="pt-2">
                <button
                  onClick={() => showKntechAlert("success", "Thành công", "Đã lưu thay đổi hồ sơ cá nhân!")}
                  className="w-full md:w-auto bg-[#13519c] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-floppy-disk"></i> Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-10 text-center animate-fade-in border border-slate-105 dark:border-slate-800 mt-10 max-w-md mx-auto">
          <img
            src="https://i.ibb.co/NdgYx2Fy/Gemini-Generated-Image-89azsx89azsx89az.png"
            alt="Logo"
            className="w-24 h-24 mx-auto rounded-3xl mb-6 shadow-md"
          />
          <h2 className="text-2xl font-bold mb-3 dark:text-white">Bạn chưa đăng nhập</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            Vui lòng đăng nhập hoặc tạo tài khoản mới để trải nghiệm đầy đủ các tính năng cá nhân hóa của GiasuTop.
          </p>
          <button
            onClick={() => openAuth("login")}
            className="w-full bg-[#13519c] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition shadow-[0_8px_20px_rgba(19,81,156,0.3)] cursor-pointer"
          >
            Đăng nhập / Đăng ký ngay
          </button>
        </div>
      )}
    </div>
  );
}
