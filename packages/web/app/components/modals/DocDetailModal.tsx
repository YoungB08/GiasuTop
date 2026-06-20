import React from "react";

type DocDetailModalProps = {
  selectedDocument: any;
  setSelectedDocument: (doc: any) => void;
  formatVND: (val: any) => string;
  setPreviewDoc: (doc: any) => void;
};

export default function DocDetailModal({
  selectedDocument,
  setSelectedDocument,
  formatVND,
  setPreviewDoc,
}: DocDetailModalProps) {
  if (!selectedDocument) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#111827] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-4 text-left">
        <div className="flex justify-between items-start border-b pb-3.5">
          <div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.2 rounded">
                {selectedDocument.grade_tag}
              </span>
              <span className="bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded">
                {selectedDocument.subject_tag}
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 text-[8px] font-bold px-1.5 py-0.2 rounded border">
                {selectedDocument.type_tag}
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-955 dark:text-white mt-1.5 leading-snug">
              {selectedDocument.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedDocument(null)}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 flex items-center justify-center text-sm cursor-pointer shrink-0 ml-4"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800">
              <span className="text-[8px] uppercase font-bold text-slate-400 block mb-0.5">Lượt xem</span>
              <span className="font-semibold text-slate-800 dark:text-white">
                👁️ {selectedDocument.download_count * 3 + 12}
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800">
              <span className="text-[8px] uppercase font-bold text-slate-400 block mb-0.5">Lượt tải</span>
              <span className="font-semibold text-[#13519c] dark:text-blue-400">📥 {selectedDocument.download_count}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800">
              <span className="text-[8px] uppercase font-bold text-slate-400 block mb-0.5">Định dạng</span>
              <span className="font-semibold text-rose-600">PDF Document</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800/40 text-center space-y-2.5">
            <div className="text-3xl text-slate-400">📄</div>
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Xem trước tài liệu (Preview)</span>
            <p className="text-[11px] text-slate-500 italic max-w-[80%] mx-auto">
              "Đề thi thử học kỳ và tài liệu ôn luyện bám sát cấu trúc của GiasuTop. Đảm bảo chất lượng cao."
            </p>
            <div className="h-24 bg-white dark:bg-slate-950 rounded border border-dashed dark:border-slate-800 flex items-center justify-center text-[10px] text-slate-400">
              Mô phỏng trang 1 / 15 của tài liệu...
            </div>
          </div>

          <div className="text-[10px] text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg text-left">
            <p>
              👤 Đăng bởi: <span className="font-semibold text-slate-700 dark:text-slate-350">{selectedDocument.uploader_name}</span>
            </p>
            <p>
              📅 Ngày cập nhật:{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-350">
                {new Date(selectedDocument.created_at).toLocaleDateString("vi-VN")}
              </span>
            </p>
            <p>
              🔗 Tệp nguồn: <span className="font-semibold text-blue-600 dark:text-blue-400 break-all">{selectedDocument.file_url}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t dark:border-slate-800">
          <button
            onClick={() => setSelectedDocument(null)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              setPreviewDoc(selectedDocument);
              setSelectedDocument(null);
            }}
            className="bg-[#13519c] hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition shadow"
          >
            👁️ Xem tài liệu (Preview)
          </button>
        </div>
      </div>
    </div>
  );
}
