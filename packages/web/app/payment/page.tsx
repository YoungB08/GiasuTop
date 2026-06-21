"use client";

import { Suspense, useEffect, useMemo, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { apiUrl } from "../utils/api";

type PaymentDetails = {
  paymentId: string;
  appointmentId: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  amount: number;
  description: string;
  qrUrl: string;
  checkoutUrl?: string;
  checkoutFormfields?: Record<string, string>;
};

type SepayBank = {
  name: string;
  code: string;
  bin?: string;
  short_name?: string;
  shortName?: string;
  supported?: boolean;
};

function formatVND(value: number | string) {
  const num = Number(value);
  return num.toLocaleString("vi-VN") + " đ";
}

function formatDateTime(isoStr: string) {
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())} - Ngày ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  } catch {
    return isoStr;
  }
}

function PaymentContent() {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get("appointmentId");
  const topupId = searchParams.get("topupId");
  const tokenParam = searchParams.get("token");
  const statusParam = searchParams.get("status");

  const [token, setToken] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [apptInfo, setApptInfo] = useState<{ tutor_name?: string; start_time?: string; price_paid?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [polling, setPolling] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(900); // 15 minutes
  const [banks, setBanks] = useState<SepayBank[]>([]);
  const [selectedBankCode, setSelectedBankCode] = useState("");
  const [qrTemplate, setQrTemplate] = useState<"" | "compact" | "qronly" | "standee">("compact");
  const [showQrInfo, setShowQrInfo] = useState(true);
  const [showFullAccount, setShowFullAccount] = useState(false);

  const notifyPaymentCompleted = () => {
    if (!appointmentId || typeof window === "undefined") return;
    localStorage.setItem(
      "kntech-payment-completed",
      JSON.stringify({ appointmentId, at: Date.now() })
    );
    window.dispatchEvent(new CustomEvent("kntech-payment-completed", { detail: { appointmentId } }));
  };

  // Resolve token: from URL param or localStorage
  useEffect(() => {
    const t = tokenParam || (typeof window !== "undefined" ? localStorage.getItem("token") : null);
    setToken(t);
  }, [tokenParam]);

  useEffect(() => {
    const loadBanks = async () => {
      try {
        const res = await fetch(apiUrl("/api/payments/sepay/banks"));
        const json = await res.json();
        const list = json.data?.data || json.data?.banks || json.data || [];
        if (Array.isArray(list)) setBanks(list);
      } catch {
        // Bank list is only for nicer QR controls; payment can still continue.
      }
    };
    loadBanks();
  }, []);

  // Check redirected status from SePay
  useEffect(() => {
    if (statusParam === "success") {
      setPaymentComplete(true);
      notifyPaymentCompleted();
      setLoading(false);
    } else if (statusParam === "cancelled") {
      setError("Bạn đã hủy thanh toán trên cổng SePay. Vui lòng quay lại lớp học và thử lại.");
      setLoading(false);
    } else if (statusParam === "error") {
      setError("Giao dịch thanh toán qua cổng SePay thất bại hoặc bị lỗi.");
      setLoading(false);
    }
  }, [statusParam]);

  // Countdown timer
  useEffect(() => {
    if (paymentComplete || loading) return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [paymentComplete, loading]);

  // Generate QR
  useEffect(() => {
    if (statusParam) return; // Skip generation if we are redirected back with a status
    if (!token || (!appointmentId && !topupId)) return;

    const generate = async () => {
      setLoading(true);
      setError(null);
      try {
        const body: any = {};
        if (appointmentId) body.appointmentId = appointmentId;
        if (topupId) body.topupId = Number(topupId);

        const res = await fetch(apiUrl("/api/payments/qr"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });
        const json = await res.json();
        if (json.success && json.data) {
          setPaymentDetails(json.data);
          setApptInfo(json.data.appointment || null);
          setSelectedBankCode(json.data.bankCode || "");
          startPolling(json.data.paymentId, !!topupId);
        } else {
          setError(json.message || "Không thể tạo mã QR. Vui lòng thử lại.");
        }
      } catch {
        setError("Lỗi kết nối máy chủ. Vui lòng thử lại.");
      } finally {
        setLoading(false);
      }
    };

    generate();

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [token, appointmentId, topupId]);

  const startPolling = (paymentId: string, isTopup: boolean = false) => {
    setPolling(true);
    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(apiUrl(`/api/payments/${paymentId}/status${isTopup ? "?type=topup" : ""}`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (json.success && json.data?.status === "PAID") {
          setPaymentComplete(true);
          notifyPaymentCompleted();
          setPolling(false);
          if (pollRef.current) clearInterval(pollRef.current);
        }
      } catch {
        // ignore poll errors
      }
    }, 5000);
  };

  const handleSimulatePayment = async () => {
    if (!paymentDetails) return;
    setSimulating(true);
    try {
      const res = await fetch(apiUrl("/api/payments/sepay/mock-trigger"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          paymentId: paymentDetails.paymentId,
          isTopup: !!topupId,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setPaymentComplete(true);
        notifyPaymentCompleted();
        setPolling(false);
        if (pollRef.current) clearInterval(pollRef.current);
      } else {
        setError(json.message || "Không thể ghi nhận thanh toán.");
      }
    } catch {
      setError("Lỗi kết nối máy chủ.");
    } finally {
      setSimulating(false);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const countdownDisplay = `${String(Math.floor(countdown / 60)).padStart(2, "0")}:${String(countdown % 60).padStart(2, "0")}`;
  const supportedBanks = banks.filter((bank) => bank.supported !== false);
  const selectedBank = supportedBanks.find((bank) => {
    const shortName = bank.short_name || bank.shortName || "";
    const selected = selectedBankCode || paymentDetails?.bankCode || "";
    return bank.code === selected || shortName === selected;
  });
  const selectedBankLogo = selectedBank ? `https://cdn.vietqr.io/img/${selectedBank.code}.png` : "";
  const displayQrUrl = useMemo(() => {
    if (!paymentDetails) return "";
    const q = new URLSearchParams();
    q.set("bank", selectedBankCode || paymentDetails.bankCode);
    q.set("acc", paymentDetails.accountNumber);
    q.set("amount", String(Math.round(Number(paymentDetails.amount || 0))));
    q.set("des", paymentDetails.description);
    if (qrTemplate) q.set("template", qrTemplate);
    q.set("showinfo", String(showQrInfo));
    q.set("fullacc", String(showFullAccount));
    if (paymentDetails.accountName) q.set("holder", paymentDetails.accountName);
    q.set("store", "GiasuTop");
    return `https://qr.sepay.vn/img?${q.toString()}`;
  }, [paymentDetails, selectedBankCode, qrTemplate, showQrInfo, showFullAccount]);

  // ─── Loading ─────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0a1a] via-[#14102b] to-[#0a0f1a]">
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-[#13519c] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          </div>
          <p className="text-white/70 text-sm font-medium">Đang tạo mã thanh toán...</p>
        </div>
      </div>
    );
  }

  // ─── Error ───────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0a1a] via-[#14102b] to-[#0a0f1a] p-4">
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center space-y-4">
          <div className="text-5xl">⚠️</div>
          <h2 className="text-white font-bold text-lg">Có lỗi xảy ra</h2>
          <p className="text-white/60 text-sm">{error}</p>
          <button
            onClick={() => window.close()}
            className="mt-2 w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl text-sm font-semibold transition cursor-pointer"
          >
            Đóng trang
          </button>
        </div>
      </div>
    );
  }

  // ─── Success ─────────────────────────────────────────────────────────────────
  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#022c22] p-4">
        <div className="text-center space-y-6 max-w-sm w-full animate-fade-up">
          <div className="relative mx-auto w-24 h-24">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping"></div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Thanh toán thành công!</h1>
            <p className="text-emerald-300/80 text-sm">
              {topupId 
                ? "Số dư ví nội bộ của bác đã được cập nhật thành công." 
                : "Học phí đã được ghi nhận. Lớp học đã được xác nhận; tiền gia sư sẽ bị giam 3 ngày nếu không có khiếu nại."}
            </p>
          </div>
          {paymentDetails && (
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-left text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-white/50">Số tiền</span>
                <span className="text-emerald-400 font-bold">{formatVND(paymentDetails.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Mã giao dịch</span>
                <span className="text-white font-mono text-xs">{String(paymentDetails.paymentId).slice(0, 12)}…</span>
              </div>
            </div>
          )}
          <button
            onClick={() => window.close()}
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold transition cursor-pointer"
          >
            Hoàn tất & Đóng trang
          </button>
        </div>
      </div>
    );
  }

  // ─── Main QR Page ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1e] via-[#0d1535] to-[#0b1020] flex flex-col">
      {/* ─── Header ─── */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/3 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#13519c] to-[#1e7fcb] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm">KNTech · Thanh toán</span>
        </div>
        <div className="flex items-center gap-2">
          {polling && (
            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-400/10 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Đang theo dõi giao dịch
            </span>
          )}
          <button
            onClick={() => window.close()}
            className="w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>
      </header>

      {/* ─── Body ─── */}
      <main className="flex-1 flex items-start justify-center p-4 pt-6 pb-10">
        <div className="w-full max-w-md space-y-4">

          {/* Countdown */}
          <div className="flex items-center justify-between text-xs text-white/40 px-1">
            <span>Mã QR hết hạn sau</span>
            <span className={`font-mono font-bold text-sm ${countdown < 60 ? "text-rose-400" : "text-amber-400"}`}>
              {countdownDisplay}
            </span>
          </div>

          {/* QR Card */}
          <div className="bg-white rounded-2xl p-5 shadow-2xl shadow-black/50">
            <div className="text-center mb-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Quét để thanh toán</p>
              <h2 className="text-slate-900 font-bold text-base mt-0.5">Chuyển khoản VietQR</h2>
            </div>

            <div className="mb-4 space-y-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="grid grid-cols-[44px_1fr] gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-100 overflow-hidden">
                  {selectedBankLogo ? (
                    <img src={selectedBankLogo} alt={selectedBank?.short_name || selectedBank?.code || "Bank"} className="max-h-7 max-w-8 object-contain" />
                  ) : (
                    <span className="text-[10px] font-bold text-[#13519c]">BANK</span>
                  )}
                </div>
                <select
                  value={selectedBankCode || paymentDetails?.bankCode || ""}
                  onChange={(e) => setSelectedBankCode(e.target.value)}
                  className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 outline-none focus:border-[#13519c]"
                >
                  {supportedBanks.length === 0 && paymentDetails?.bankCode && (
                    <option value={paymentDetails.bankCode}>{paymentDetails.bankCode}</option>
                  )}
                  {supportedBanks.map((bank) => {
                    const label = bank.short_name || bank.shortName || bank.code;
                    return (
                      <option key={bank.code} value={label}>
                        {label} - {bank.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={qrTemplate}
                  onChange={(e) => setQrTemplate(e.target.value as typeof qrTemplate)}
                  className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold text-slate-700 outline-none"
                >
                  <option value="">Mặc định</option>
                  <option value="compact">Compact</option>
                  <option value="qronly">QR Only</option>
                  <option value="standee">Standee</option>
                </select>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setShowQrInfo((prev) => !prev)}
                    className={`h-9 rounded-lg text-[10px] font-bold transition ${showQrInfo ? "bg-[#13519c] text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFullAccount((prev) => !prev)}
                    className={`h-9 rounded-lg text-[10px] font-bold transition ${showFullAccount ? "bg-emerald-600 text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                  >
                    Full STK
                  </button>
                </div>
              </div>
            </div>

            {/* QR Image */}
            <div className="flex justify-center mb-4">
              <div className="relative p-2 border-2 border-[#13519c]/20 rounded-xl">
                {displayQrUrl ? (
                  <img
                    src={displayQrUrl}
                    alt="VietQR Code"
                    className="w-52 h-52 object-contain"
                  />
                ) : (
                  <div className="w-52 h-52 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400 text-xs">Đang tải QR...</span>
                  </div>
                )}
                {/* Corner marks */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#13519c] rounded-tl-sm"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#13519c] rounded-tr-sm"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#13519c] rounded-bl-sm"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#13519c] rounded-br-sm"></div>
              </div>
            </div>

            {/* Bank Info */}
            <div className="space-y-2.5">
              {[
                { label: "Ngân hàng", value: selectedBankCode || paymentDetails?.bankCode, key: "bank" },
                { label: "Số tài khoản", value: paymentDetails?.accountNumber, key: "acc", mono: true },
                { label: "Chủ tài khoản", value: paymentDetails?.accountName, key: "name" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-100">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">{item.label}</p>
                    <p className={`text-slate-900 font-semibold text-sm ${item.mono ? "font-mono tracking-wider" : ""}`}>{item.value}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.value || "", item.key)}
                    className="flex items-center gap-1 text-[11px] text-[#13519c] hover:text-blue-700 font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition cursor-pointer"
                  >
                    {copied === item.key ? (
                      <>
                        <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-emerald-500">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Sao chép
                      </>
                    )}
                  </button>
                </div>
              ))}

              {/* Amount */}
              <div className="flex items-center justify-between bg-rose-50 rounded-lg px-3 py-2.5 border border-rose-100">
                <div>
                  <p className="text-[10px] text-rose-400 uppercase tracking-wide">Số tiền chuyển</p>
                  <p className="text-rose-600 font-bold text-lg">{formatVND(paymentDetails?.amount || 0)}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(String(paymentDetails?.amount || ""), "amount")}
                  className="flex items-center gap-1 text-[11px] text-rose-500 hover:text-rose-700 font-semibold px-2 py-1 rounded-md hover:bg-rose-100 transition cursor-pointer"
                >
                  {copied === "amount" ? (
                    <><svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-emerald-500">Đã chép</span></>
                  ) : (
                    <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Sao chép</>
                  )}
                </button>
              </div>

              {/* Description */}
              <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-100">
                <div className="flex-1 mr-2">
                  <p className="text-[10px] text-blue-400 uppercase tracking-wide">Nội dung chuyển khoản</p>
                  <p className="text-blue-700 font-semibold text-sm font-mono">{paymentDetails?.description}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(paymentDetails?.description || "", "desc")}
                  className="flex items-center gap-1 text-[11px] text-blue-500 hover:text-blue-700 font-semibold px-2 py-1 rounded-md hover:bg-blue-100 transition cursor-pointer whitespace-nowrap"
                >
                  {copied === "desc" ? (
                    <><svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg><span className="text-emerald-500">Đã chép</span></>
                  ) : (
                    <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Sao chép</>
                  )}
                </button>
              </div>
            </div>

            {/* SePay Checkout Redirect Button */}
            {paymentDetails?.checkoutUrl && paymentDetails?.checkoutFormfields && (
              <form action={paymentDetails.checkoutUrl} method="POST" className="mt-4">
                {Object.entries(paymentDetails.checkoutFormfields).map(([name, value]) => (
                  <input key={name} type="hidden" name={name} value={value as string} />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#13519c] to-[#1e7fcb] hover:from-blue-700 hover:to-blue-600 text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Mở Cổng Thanh Toán SePay (QR / Napas)
                </button>
              </form>
            )}
          </div>

          {/* Appointment Info */}
          {(apptInfo || appointmentId) && (
            <div className="bg-white/5 backdrop-blur border border-white/8 rounded-xl p-4 space-y-2">
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Thông tin lớp học</p>
              {apptInfo?.tutor_name && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/40">🏫</span>
                  <span className="text-white/80">Gia sư: <span className="text-white font-semibold">{apptInfo.tutor_name}</span></span>
                </div>
              )}
              {apptInfo?.start_time && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/40">⏱️</span>
                  <span className="text-white/80">Bắt đầu: <span className="text-white font-semibold">{formatDateTime(apptInfo.start_time)}</span></span>
                </div>
              )}
              {apptInfo?.price_paid && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/40">💰</span>
                  <span className="text-white/80">Học phí: <span className="text-rose-400 font-bold">{formatVND(apptInfo.price_paid)}</span></span>
                </div>
              )}
            </div>
          )}

          {/* Topup Info */}
          {topupId && (
            <div className="bg-white/5 backdrop-blur border border-white/8 rounded-xl p-4 space-y-2 text-left">
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Thông tin nạp tiền</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white/40">👛</span>
                <span className="text-white/80">Hình thức: <span className="text-white font-semibold">Nạp tiền ví nội bộ GiasuTop</span></span>
              </div>
              {paymentDetails && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/40">💵</span>
                  <span className="text-white/80">Số tiền nạp: <span className="text-emerald-400 font-bold">{formatVND(paymentDetails.amount)}</span></span>
                </div>
              )}
            </div>
          )}

          {/* Simulate button (dev/demo) */}
          <button
            onClick={handleSimulatePayment}
            disabled={simulating}
            className="w-full py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 rounded-xl text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {simulating ? (
              <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>Đang xử lý...</>
            ) : (
              <><span>📲</span> Giả lập đã chuyển tiền thành công</>
            )}
          </button>

          <p className="text-center text-[10px] text-white/25 leading-relaxed">
            Sau khi chuyển khoản, hệ thống sẽ tự động ghi nhận trong vòng 30 giây.<br />
            Nếu gặp vấn đề, vui lòng liên hệ hỗ trợ GiasuTop.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0a1a] via-[#14102b] to-[#0a0f1a]">
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-[#13519c] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          </div>
          <p className="text-white/70 text-sm font-medium">Đang tải trang thanh toán...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
