"use client";

import React, { useState } from "react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string, user: { id: string; email: string; fullName: string; role: string }) => void;
  initialTab?: "login" | "register";
  initialRole?: "STUDENT" | "TUTOR";
};

export default function AuthModal({ isOpen, onClose, onSuccess, initialTab, initialRole }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"STUDENT" | "TUTOR">("STUDENT");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      if (initialTab !== undefined) {
        setIsLogin(initialTab === "login");
      }
      if (initialRole !== undefined) {
        setRole(initialRole);
      }
    }
  }, [isOpen, initialTab, initialRole]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const body = isLogin 
      ? { email, password, rememberMe }
      : { email, password, fullName, role };

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        if (result.issues && Array.isArray(result.issues)) {
          const detailedMsg = result.issues.map((i: any) => {
            const field = i.path.join(".");
            const fieldMap: Record<string, string> = {
              email: "Email",
              password: "Mật khẩu",
              fullName: "Họ và tên",
              role: "Vai trò",
            };
            const fieldName = fieldMap[field] || field;
            let errorMsg = i.message;
            if (errorMsg === "Required") {
              errorMsg = "không được để trống.";
            } else if (errorMsg.includes("at least")) {
              const match = errorMsg.match(/at least (\d+)/);
              const minLen = match ? match[1] : "2";
              errorMsg = `phải dài ít nhất ${minLen} ký tự.`;
            } else if (errorMsg.includes("Invalid email")) {
              errorMsg = "không đúng định dạng (ví dụ: ten@giasu.vn).";
            }
            return `• ${fieldName}: ${errorMsg}`;
          }).join("\n");
          throw new Error(detailedMsg || result.message);
        }

        let errorMsg = result.message || "Đã xảy ra lỗi. Vui lòng kiểm tra thông tin.";
        if (errorMsg === "Email already exists") {
          errorMsg = "Email này đã được đăng ký trên hệ thống. Bác vui lòng chọn email khác hoặc đăng nhập.";
        } else if (errorMsg === "Invalid credentials") {
          errorMsg = "Email hoặc mật khẩu không chính xác.";
        }
        throw new Error(errorMsg);
      }

      onSuccess(result.data.token, {
        id: result.data.id,
        email: result.data.email,
        fullName: result.data.fullName,
        role: result.data.role,
      });
      onClose();
    } catch (err: any) {
      setError(err.message || "Không thể kết nối đến máy chủ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 dark:bg-[#0b1220] dark:ring-white/10">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            {isLogin ? "Đăng Nhập Tài Khoản" : "Đăng Ký Tài Khoản"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {error && (
            <div className="rounded-2xl bg-red-50 p-4 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-300 border whitespace-pre-line">
              ⚠️ {error}
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Họ và tên của bạn
              </label>
              <input
                type="text"
                required
                placeholder="Ví dụ: Nguyễn Văn A"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Địa chỉ Email
            </label>
            <input
              type="email"
              required
              placeholder="ten-cua-ban@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Mật khẩu truy cập
            </label>
            <input
              type="password"
              required
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          {isLogin && (
            <div className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-xs font-semibold text-slate-500 cursor-pointer">
                Nhớ thiết bị này (30 ngày không cần đăng nhập lại)
              </label>
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Bạn sử dụng ứng dụng với vai trò gì?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("STUDENT")}
                  className={`h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                    role === "STUDENT"
                      ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                      : "border-slate-200 text-slate-500 dark:border-slate-700"
                  }`}
                >
                  <span className="text-sm font-semibold">👨‍👩‍👧 Phụ huynh</span>
                  <span className="text-[10px] font-semibold opacity-70">Tìm gia sư cho con</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("TUTOR")}
                  className={`h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                    role === "TUTOR"
                      ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                      : "border-slate-200 text-slate-500 dark:border-slate-700"
                  }`}
                >
                  <span className="text-sm font-semibold">👩‍🏫 Gia sư</span>
                  <span className="text-[10px] font-semibold opacity-70">Đăng tin dạy kèm</span>
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-semibold text-white transition hover:opacity-90 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Đang xử lý..." : isLogin ? "Đăng Nhập Ngay" : "Đăng Ký Ngay"}
          </button>

          <div className="pt-2 text-center text-xs font-semibold">
            {isLogin ? (
              <span className="text-slate-500">
                Chưa có tài khoản?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline dark:text-blue-400 cursor-pointer"
                >
                  Đăng ký miễn phí tại đây
                </button>
              </span>
            ) : (
              <span className="text-slate-500">
                Đã có tài khoản?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline dark:text-blue-400 cursor-pointer"
                >
                  Đăng nhập tại đây
                </button>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
