import React from "react";
import { IconUpload, IconDownload } from "../icons";

type DocumentsTabProps = {
  documents: any[];
  setUploadModalOpen: (val: boolean) => void;
  setSelectedDocument: (doc: any) => void;
};

export default function DocumentsTab({
  documents,
  setUploadModalOpen,
  setSelectedDocument,
}: DocumentsTabProps) {
  return (
    <div className="space-y-6">
      {/* Header title */}
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          Kho Đề Thi & Tài Liệu Ôn Tập
        </h2>
        <button
          onClick={() => setUploadModalOpen(true)}
          className="bg-[#13519c] text-white hover:bg-blue-800 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer flex items-center gap-1.5"
        >
          <IconUpload className="h-3.5 w-3.5" />Tải tài liệu lên
        </button>
      </div>

      {/* Documents List */}
      {documents.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-xs bg-white dark:bg-slate-900 border rounded-xl">
          Chưa tìm thấy tài liệu phù hợp với bộ lọc này.
        </div>
      ) : (
        <div className="space-y-3.5">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-850 flex items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex gap-1.5 flex-wrap">
                  <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    {doc.grade_tag}
                  </span>
                  <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    {doc.subject_tag}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded border">
                    {doc.type_tag}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white leading-snug">
                  {doc.title}
                </h4>
                <div className="text-[10px] text-slate-400 flex items-center gap-3">
                  <span>👁️ {doc.download_count} Lượt tải</span>
                  <span>📅 {new Date(doc.created_at).toLocaleDateString("vi-VN")}</span>
                  <span>👤 Đăng bởi: {doc.uploader_name}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedDocument(doc);
                }}
                className="bg-slate-100 text-slate-700 hover:bg-[#13519c] hover:text-white text-xs px-3 h-8 rounded-lg cursor-pointer flex items-center gap-1 shrink-0 font-medium"
              >
                <IconDownload className="h-3.5 w-3.5" /> Xem / Tải
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
