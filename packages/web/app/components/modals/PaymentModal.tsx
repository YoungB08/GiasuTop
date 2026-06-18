import React from "react";

type PaymentModalProps = {
  payingAppt: any;
  setPayingAppt: (appt: any) => void;
  paymentDetails: any;
  setPaymentDetails: (details: any) => void;
  paymentComplete: boolean;
  setPaymentComplete: (complete: boolean) => void;
  generatingQr: boolean;
  token: string | null;
  wallet: any;
  formatVND: (val: any) => string;
  formatDateTimeText: (time: any) => string;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
  logClientActivity: (action: string, details: string) => void;
  fetchUserData: () => void;
  setTopupAmountInput: (val: string) => void;
  setActiveTab: (tab: any) => void;
  handleSimulatePayment: () => void;
};

export default function PaymentModal({
  payingAppt,
  setPayingAppt,
  paymentDetails,
  setPaymentDetails,
  paymentComplete,
  setPaymentComplete,
  generatingQr,
  token,
  wallet,
  formatVND,
  formatDateTimeText,
  showKntechAlert,
  logClientActivity,
  fetchUserData,
  setTopupAmountInput,
  setActiveTab,
  handleSimulatePayment,
}: PaymentModalProps) {
  if (!payingAppt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border">
        <div className="flex items-center justify-between pb-3 border-b">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Chi tiết lớp học & Thanh toán</h3>
          <button
            type="button"
            onClick={() => {
              setPayingAppt(null);
              setPaymentDetails(null);
              setPaymentComplete(false);
            }}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {/* Course Info */}
          <div className="text-[11px] text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg space-y-1.5 border leading-normal">
            <div>
              🏫 Lớp học với: <span className="font-semibold text-slate-900 dark:text-white">{payingAppt.tutor_name}</span>
            </div>
            <div>
              ⏱️ Bắt đầu:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {formatDateTimeText(payingAppt.start_time)}
              </span>
            </div>
            <div>
              💰 Học phí: <span className="font-bold text-rose-600">{formatVND(payingAppt.price_paid)}</span>
            </div>
          </div>

          {!paymentDetails ? (
            // Show options
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  const t = token || localStorage.getItem("token") || "";
                  window.open(`/payment?appointmentId=${payingAppt.id}&token=${encodeURIComponent(t)}`, "_blank");
                }}
                className="w-full h-11 bg-[#13519c] text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-1.5 shadow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                Thanh toán VietQR (Chuyển khoản)
              </button>
              <button
                type="button"
                onClick={async () => {
                  if (wallet.available_balance >= Number(payingAppt.price_paid)) {
                    if (confirm(`Xác nhận thanh toán ${formatVND(payingAppt.price_paid)} từ ví nội bộ?`)) {
                      try {
                        const res = await fetch("http://localhost:5000/api/payments/wallet-pay", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({ appointmentId: payingAppt.id }),
                        });
                        const json = await res.json();
                        if (json.success) {
                          showKntechAlert("success", "Thanh toán thành công", json.message);
                          logClientActivity("WALLET_PAY_APPOINTMENT", `Thanh toán học phí lớp ${payingAppt.id} bằng ví nội bộ`);
                          setPayingAppt(null);
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
                      `Học phí yêu cầu ${formatVND(payingAppt.price_paid)} nhưng ví nội bộ của bác chỉ còn ${formatVND(
                        wallet.available_balance
                      )}. Đang chuyển hướng sang ví nội bộ để nạp thêm...`
                    );
                    setPayingAppt(null);
                    setTimeout(() => {
                      setTopupAmountInput(String(Number(payingAppt.price_paid) - wallet.available_balance));
                      setActiveTab("wallet");
                    }, 2500);
                  }
                }}
                className="w-full h-11 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition cursor-pointer flex items-center justify-center gap-1.5 shadow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 12V8H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h14v4" />
                  <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
                  <circle cx="16" cy="12" r="2" />
                </svg>
                Thanh toán qua Ví nội bộ ({formatVND(wallet.available_balance)})
              </button>
            </div>
          ) : (
            // Show QR details generated
            <div className="space-y-4 text-center">
              {generatingQr ? (
                <div className="text-xs py-6">⏳ Đang tạo mã QR thanh toán...</div>
              ) : (
                <>
                  <div className="bg-white p-2 border rounded-lg inline-block mx-auto">
                    <img src={paymentDetails.qrUrl} alt="VietQR" className="h-40 w-40 object-contain mx-auto" />
                  </div>

                  <div className="text-[11px] text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg space-y-1.5 border leading-normal text-slate-900">
                    <div>
                      🏦 Ngân hàng: <span className="font-semibold">{paymentDetails.bankCode}</span>
                    </div>
                    <div>
                      💳 Số tài khoản: <span className="font-semibold">{paymentDetails.accountNumber}</span>
                    </div>
                    <div>
                      👤 Chủ tài khoản: <span className="font-semibold">{paymentDetails.accountName}</span>
                    </div>
                    <div>
                      💰 Học phí: <span className="font-semibold text-rose-600">{formatVND(paymentDetails.amount)}</span>
                    </div>
                    <div>
                      ✍️ Nội dung: <span className="font-semibold text-[#13519c]">{paymentDetails.description}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    {paymentComplete ? (
                      <div className="p-3 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg">
                        ✓ GHI NHẬN THANH TOÁN THÀNH CÔNG!
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSimulatePayment}
                        className="w-full h-11 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition cursor-pointer"
                      >
                        📲 Giả Lập Đã Chuyển Tiền Thành Công
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
