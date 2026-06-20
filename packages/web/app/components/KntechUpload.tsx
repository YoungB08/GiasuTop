import React, { useRef, useState } from "react";

type KntechUploadProps = {
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  mainText?: string;
  allowedText?: string;
  onChange: (files: FileList | null) => void;
  value: FileList | File | null;
  onClear: () => void;
};

export default function KntechUpload({
  accept,
  multiple = false,
  required = false,
  mainText = "Drag & Drop or Choose file to upload",
  allowedText = "PNG, JPG SVG, WEBP, and GIF are Allowed.",
  onChange,
  value,
  onClear,
}: KntechUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files);
    }
  };

  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onClear();
  };

  // Helper to compute display text for selected files
  const getSelectedFilesInfo = () => {
    if (!value) return null;
    if (value instanceof FileList) {
      if (value.length === 0) return null;
      if (value.length === 1) return value[0].name;
      return `${value.length} tệp đã chọn (${Array.from(value)
        .map((f) => f.name)
        .join(", ")})`;
    }
    return value.name;
  };

  const fileInfo = getSelectedFilesInfo();

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all cursor-pointer select-none text-center bg-slate-50/50 dark:bg-slate-900/30 group ${
          dragActive
            ? "border-[var(--brand-primary)] bg-[rgba(255,87,34,0.06)] dark:bg-[rgba(255,87,34,0.03)] scale-[0.99]"
            : fileInfo
            ? "border-[var(--brand-primary)]/60 bg-slate-50 dark:bg-slate-900/50"
            : "border-slate-300 hover:border-[var(--brand-primary)] hover:bg-slate-50/80 dark:border-slate-800 dark:hover:border-[var(--brand-primary)]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          required={required && !fileInfo}
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
          className="hidden"
        />

        {/* Cloud Upload Icon */}
        <div className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform ${
          dragActive || fileInfo ? "text-[var(--brand-primary)] border-[var(--brand-primary)]/20" : "text-slate-400"
        }`}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </div>

        {/* Info Text */}
        <div className="mt-4 space-y-1">
          {fileInfo ? (
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100 max-w-sm truncate px-4">
                📂 {fileInfo}
              </p>
              <button
                onClick={clearSelection}
                className="text-[10px] font-bold text-rose-600 dark:text-rose-400 hover:underline px-2 py-1 rounded bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 cursor-pointer"
              >
                ✕ Hủy chọn tệp
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold text-slate-650 dark:text-slate-350">
                Drag & Drop or <span className="text-[var(--brand-primary)] font-bold hover:underline">Choose file</span> to upload
              </p>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 font-medium">
                {allowedText}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
