import React from "react";

type MyCoursesTabProps = {
  user: any;
  appointments: any[];
  token: string | null;
  wallet: any;
  setPayingAppt: (appt: any) => void;
  setPaymentDetails: (details: any) => void;
  setPaymentComplete: (complete: boolean) => void;
  logClientActivity: (action: string, details: string) => void;
  formatDateTimeText: (time: any) => string;
  formatVND: (val: any) => string;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
  fetchUserData: () => void;
  setTopupAmountInput: (val: string) => void;
  setActiveTab: (val: any) => void;
  handleJoinClassroom: (appt: any) => void;
  handleWalletPayAppointment?: (appt: any) => void;
};

export default function MyCoursesTab({
  user,
  appointments,
  token,
  wallet,
  setPayingAppt,
  setPaymentDetails,
  setPaymentComplete,
  logClientActivity,
  formatDateTimeText,
  formatVND,
  showKntechAlert,
  fetchUserData,
  setTopupAmountInput,
  setActiveTab,
  handleJoinClassroom,
  handleWalletPayAppointment,
}: MyCoursesTabProps) {
  return (
    <div className="space-y-6">
      {/* Header card details */}
      <div className="bg-white dark:bg-[#111827] rounded-xl p-5 border border-slate-200/50 shadow-sm flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border">
          <svg className="h-6 w-6 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold">{user?.fullName || "Khách"}</h3>
          <p className="text-xs text-slate-400">{user?.email || "Chưa kết nối email"}</p>
          <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full mt-1 uppercase">
            Tài khoản hoạt động
          </span>
        </div>
      </div>

      {/* SECTION 1: UNPAID COURSES */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
          Lớp chờ đóng học phí (Cần thanh toán)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.filter(a => a.payment_status === "UNPAID").map((appt) => (
            <div
              key={appt.id}
              onClick={() => {
                setPayingAppt(appt);
                setPaymentDetails(null);
                setPaymentComplete(false);
              }}
              className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3.5 hover:scale-[1.01] transition duration-200 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xs font-bold text-slate-955 dark:text-white truncate">
                    Lớp với: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}
                  </h4>
                  <span className="text-[9px] bg-rose-500/10 text-rose-600 font-bold px-2 py-0.5 rounded border border-rose-500/10">
                    Chờ đóng phí
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-slate-450 space-y-1">
                  <div>⏱️ Bắt đầu: {formatDateTimeText(appt.start_time)}</div>
                  <div className="font-bold text-rose-600 text-xs mt-1">Học phí: {formatVND(appt.price_paid)}</div>
                </div>
              </div>

              {user?.role === "STUDENT" && (
                <div className="flex gap-2 pt-2 border-t dark:border-slate-800">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      logClientActivity("INIT_PAY_VIETQR", `Mở trang thanh toán VietQR cho lớp học ${appt.id}`);
                      const t = token || localStorage.getItem("token") || "";
                      window.open(`/payment?appointmentId=${appt.id}&token=${encodeURIComponent(t)}`, "_blank");
                    }}
                    className="flex-1 bg-[#13519c] hover:bg-blue-800 text-white text-[10px] font-bold py-2 rounded-lg cursor-pointer transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    VietQR
                  </button>
                  <button
                    type="button"
                    onClick={async (e) => {
                      e.stopPropagation();
                      if (handleWalletPayAppointment) {
                        handleWalletPayAppointment(appt);
                        return;
                      }
                      showKntechAlert("error", "Thiếu handler", "Chưa cấu hình xử lý thanh toán ví nội bộ.");
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold py-2 rounded-lg cursor-pointer transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 12V8H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h14v4" />
                      <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
                      <circle cx="16" cy="12" r="2" />
                    </svg>
                    Ví nội bộ ({formatVND(wallet.available_balance)})
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {appointments.filter(a => a.payment_status === "UNPAID").length === 0 && (
          <p className="text-[11px] text-slate-400 italic">Bác không có đăng ký học nào đang chờ thanh toán.</p>
        )}
      </div>

      {/* SECTION 2: ACTIVE CLASSES */}
      <div className="space-y-3 pt-4 border-t dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Lớp học đang diễn ra (Đã đóng học phí)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.filter(a => a.payment_status === "HOLDING" || a.payment_status === "RELEASED").map((appt) => (
            <div
              key={appt.id}
              className="bg-white dark:bg-[#111827] rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.01] transition duration-200"
            >
              <div className="p-4 bg-gradient-to-br from-[#13519c] to-blue-700 text-white h-24 flex flex-col justify-between">
                <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider w-max">
                  LỚP HỌC ĐANG DIỄN RA
                </span>
                <h4 className="text-xs font-bold leading-tight line-clamp-2">
                  Dạy kèm cùng: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}
                </h4>
              </div>
              <div className="p-3 text-[11px] flex justify-between items-center bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
                <span className="text-slate-400 font-medium truncate max-w-[150px]">Lớp 1-1 trực tuyến</span>
                <button
                  onClick={() => {
                    logClientActivity("JOIN_CLASSROOM", `Vào phòng học trực tuyến lớp ${appt.id}`);
                    handleJoinClassroom(appt);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded font-semibold text-[10px] cursor-pointer"
                >
                  Vào lớp học
                </button>
              </div>
            </div>
          ))}
        </div>

        {appointments.filter(a => a.payment_status === "HOLDING" || a.payment_status === "RELEASED").length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-[#111827] border rounded-xl text-slate-400 text-xs shadow-sm">
            Bác chưa có lớp học nào đang diễn ra. Vui lòng đặt lịch với gia sư và hoàn tất học phí để bắt đầu học.
          </div>
        )}
      </div>
    </div>
  );
}
