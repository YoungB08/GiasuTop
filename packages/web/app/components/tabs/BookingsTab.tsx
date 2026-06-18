import React from "react";

type BookingsTabProps = {
  appointments: any[];
  user: any;
  wallet: any;
  token: string | null;
  formatDateTimeText: (time: any) => string;
  formatVND: (val: any) => string;
  handleInitiatePayment: (appt: any) => void;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
  fetchUserData: () => void;
  setTopupAmountInput: (val: string) => void;
  setActiveTab: (val: any) => void;
  handleJoinClassroom: (appt: any) => void;
};

export default function BookingsTab({
  appointments,
  user,
  wallet,
  token,
  formatDateTimeText,
  formatVND,
  handleInitiatePayment,
  showKntechAlert,
  fetchUserData,
  setTopupAmountInput,
  setActiveTab,
  handleJoinClassroom,
}: BookingsTabProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-slate-900 dark:text-white">Lịch Học Của Con & Gia Đình</h2>

      {appointments.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-xl border text-slate-455 text-xs">
          Bác chưa đặt lịch học nào cho con học tập.
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    🏫 Lớp học với: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}
                  </span>
                  {appt.payment_status === "UNPAID" ? (
                    <span className="bg-rose-500/10 text-rose-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-rose-500/10">
                      Chờ đóng học phí
                    </span>
                  ) : (
                    <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-emerald-500/10">
                      Đã thanh toán (Holding an toàn)
                    </span>
                  )}
                </div>

                <div className="mt-2 text-[11px] text-slate-550 dark:text-slate-400 space-y-1">
                  <div>
                    ⏱️ Giờ học:{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {formatDateTimeText(appt.start_time)}
                    </span>
                  </div>
                  <div>
                    ⌛ Kết thúc:{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {formatDateTimeText(appt.end_time)}
                    </span>
                  </div>
                  <div className="font-semibold text-[#13519c] dark:text-blue-400 mt-1">
                    Học phí: {formatVND(appt.price_paid)}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {appt.payment_status === "UNPAID" && user?.role === "STUDENT" && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleInitiatePayment(appt)}
                      className="bg-[#13519c] text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer shadow-sm"
                    >
                      💳 Thanh toán VietQR
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        if (wallet.available_balance >= Number(appt.price_paid)) {
                          if (confirm(`Xác nhận thanh toán ${formatVND(appt.price_paid)} từ ví nội bộ?`)) {
                            try {
                              const res = await fetch("http://localhost:5000/api/payments/wallet-pay", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${token}`,
                                },
                                body: JSON.stringify({ appointmentId: appt.id }),
                              });
                              const json = await res.json();
                              if (json.success) {
                                showKntechAlert("success", "Thanh toán thành công", json.message);
                                fetchUserData();
                              } else {
                                showKntechAlert("error", "Lỗi giao dịch", json.message);
                              }
                            } catch (e) {
                              showKntechAlert("error", "Lỗi kết nối", "Không thể thanh toán bằng ví.");
                            }
                          }
                        } else {
                          showKntechAlert(
                            "warning",
                            "Số dư không đủ",
                            `Học phí yêu cầu ${formatVND(appt.price_paid)} nhưng ví nội bộ của bác chỉ còn ${formatVND(
                              wallet.available_balance
                            )}. Đang chuyển hướng sang ví nội bộ để nạp thêm...`
                          );
                          setTimeout(() => {
                            setTopupAmountInput(String(Number(appt.price_paid) - wallet.available_balance));
                            setActiveTab("wallet");
                          }, 2500);
                        }
                      }}
                      className="bg-emerald-600 text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 cursor-pointer shadow-sm"
                    >
                      👛 Ví nội bộ ({formatVND(wallet.available_balance)})
                    </button>
                  </>
                )}
                {appt.payment_status === "HOLDING" && (
                  <button
                    type="button"
                    onClick={() => handleJoinClassroom(appt)}
                    className="bg-emerald-600 text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    💻 Vào lớp học
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
