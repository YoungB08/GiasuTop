import React, { useState, useEffect } from "react";

export type AlertType = "success" | "warning" | "error" | "info";

interface CustomAlertProps {
  isOpen: boolean;
  type: AlertType;
  title: string;
  message: string;
  imageUrl?: string;
  onClose: () => void;
}
export function CustomAlert({ isOpen, type, title, message, imageUrl, onClose }: CustomAlertProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setProgress(100);

      const frame = requestAnimationFrame(() => {
        setProgress(0);
      });

      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timer);
      };
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const typeStyles = {
    success: {
      bg: "bg-emerald-500/10 dark:bg-emerald-500/5",
      border: "border-emerald-500/30 dark:border-emerald-500/20",
      text: "text-emerald-500",
      btnBg: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    warning: {
      bg: "bg-amber-500/10 dark:bg-amber-500/5",
      border: "border-amber-500/30 dark:border-amber-500/20",
      text: "text-amber-500",
      btnBg: "bg-amber-500 hover:bg-amber-600 shadow-amber-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    error: {
      bg: "bg-rose-500/10 dark:bg-rose-500/5",
      border: "border-rose-500/30 dark:border-rose-500/20",
      text: "text-rose-500",
      btnBg: "bg-rose-500 hover:bg-rose-600 shadow-rose-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    info: {
      bg: "bg-blue-500/10 dark:bg-blue-500/5",
      border: "border-blue-500/30 dark:border-blue-500/20",
      text: "text-blue-500",
      btnBg: "bg-[#13519c] hover:bg-blue-800 shadow-blue-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  }[type];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Glassmorphic Alert Box */}
      <div className={`w-full max-w-sm transform rounded-3xl border border-white/20 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-6 pb-8 shadow-2xl backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}>

        {/* Custom image option if provided */}
        {imageUrl ? (
          <div className="mb-4 h-20 w-20 overflow-hidden rounded-2xl border border-white/20 shadow-lg bg-slate-50 dark:bg-slate-850 flex items-center justify-center">
            <img src={imageUrl} alt="Alert Illustration" className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${typeStyles.bg} ${typeStyles.border} ${typeStyles.text} shadow-inner`}>
            {typeStyles.icon}
          </div>
        )}

        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-550 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-line">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className={`w-full py-2.5 rounded-xl text-xs font-semibold text-white shadow-lg transition duration-200 cursor-pointer ${typeStyles.btnBg}`}
        >
          Đóng
        </button>

        {/* Progress bar running backwards (draining) */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
          <div
            className={`h-full transition-all ease-linear ${type === "success" ? "bg-emerald-500" :
                type === "warning" ? "bg-amber-500" :
                  type === "error" ? "bg-rose-500" : "bg-blue-500"
              }`}
            style={{
              width: `${progress}%`,
              transitionDuration: isOpen ? '2000ms' : '0ms'
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Alert Customization & Testing Box
export function AlertCustomizer({ onTestAlert }: { onTestAlert: (type: AlertType, title: string, message: string, imgUrl?: string) => void }) {
  const [title, setTitle] = useState("Thông báo từ GiasuTop");
  const [message, setMessage] = useState("Vui lòng kiểm tra lại thông tin học phí.");
  const [type, setType] = useState<AlertType>("success");
  const [customImage, setCustomImage] = useState<string | undefined>(undefined);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate that the file is strictly an image
    if (!file.type.startsWith("image/")) {
      setErrorText("Tệp đã chọn không phải là hình ảnh. Vui lòng chọn một file ảnh hợp lệ (.png, .jpg, .jpeg, .webp, .gif)!");
      setCustomImage(undefined);
      e.target.value = ""; // clear input
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setCustomImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800 space-y-4 shadow-sm text-xs max-w-md">
      <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-1.5 border-b pb-2">
        ⚙️ Bộ Thử Nghiệm Alert Tùy Chỉnh (Custom Alert)
      </h4>

      {errorText && (
        <div className="p-2.5 bg-rose-50 text-rose-600 rounded-lg font-semibold text-[11px]">
          ⚠️ {errorText}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">Tiêu đề Alert</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-8 px-2.5 border rounded-lg bg-slate-50 focus:bg-white text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">Loại Alert</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as AlertType)}
            className="w-full h-8 border rounded-lg bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none px-1.5"
          >
            <option value="success">Success (Thành công)</option>
            <option value="warning">Warning (Cảnh báo)</option>
            <option value="error">Error (Thất bại)</option>
            <option value="info">Info (Thông tin)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-slate-500 mb-1 font-semibold">Thông điệp chi tiết</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          className="w-full p-2.5 border rounded-lg bg-slate-50 focus:bg-white text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-slate-500 mb-1 font-semibold">Ảnh minh họa tùy chọn (chỉ được là tệp ảnh)</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-[11px]"
        />
      </div>

      <button
        type="button"
        onClick={() => onTestAlert(type, title, message, customImage)}
        className="w-full py-2 bg-gradient-to-r from-blue-600 to-[#13519c] text-white font-bold rounded-lg hover:opacity-90 transition shadow cursor-pointer text-center"
      >
        🎯 Trực Quan Hóa Alert
      </button>
    </div>
  );
}
