import React from "react";

type UploadDocModalProps = {
  uploadModalOpen: boolean;
  setUploadModalOpen: (open: boolean) => void;
  docUploadForm: { title: string; subjectTag: string; gradeTag: string; typeTag: string };
  setDocUploadForm: (form: any) => void;
  setDocFileToUpload: (file: File | null) => void;
  handleUploadDoc: (e: React.FormEvent) => void;
};

export default function UploadDocModal({
  uploadModalOpen,
  setUploadModalOpen,
  docUploadForm,
  setDocUploadForm,
  setDocFileToUpload,
  handleUploadDoc,
}: UploadDocModalProps) {
  if (!uploadModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl dark:bg-[#111827] border">
        <div className="flex items-center justify-between pb-2 border-b mb-4 text-xs font-semibold">
          <span>📚 Tải tài liệu đề thi lên hệ thống</span>
          <button onClick={() => setUploadModalOpen(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
        </div>

        <form onSubmit={handleUploadDoc} className="space-y-3.5 text-xs text-left">
          <div>
            <label className="block text-slate-500 mb-1 font-semibold">Tiêu đề tài liệu *</label>
            <input
              type="text"
              required
              value={docUploadForm.title}
              onChange={(e) => setDocUploadForm({ ...docUploadForm, title: e.target.value })}
              placeholder="VD: [Toán 12] - Đề thi thử giữa kỳ 1..."
              className="w-full h-10 px-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-semibold">Tải tệp tài liệu lên (PDF, Word, ...) *</label>
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx,.xls,.xlsx,image/*"
              onChange={(e) => setDocFileToUpload(e.target.files?.[0] || null)}
              className="w-full text-xs border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-xl p-2.5 file:mr-3 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-slate-800 dark:file:text-blue-300 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Môn học</label>
              <select
                value={docUploadForm.subjectTag}
                onChange={(e) => setDocUploadForm({ ...docUploadForm, subjectTag: e.target.value })}
                className="w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer"
              >
                <option value="Toán">Toán</option>
                <option value="Lý">Vật lý</option>
                <option value="Hóa">Hóa học</option>
                <option value="Văn">Ngữ Văn</option>
                <option value="Tiếng Anh">Tiếng Anh</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Khối Lớp</label>
              <select
                value={docUploadForm.gradeTag}
                onChange={(e) => setDocUploadForm({ ...docUploadForm, gradeTag: e.target.value })}
                className="w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer"
              >
                <option value="Lớp 10">Lớp 10</option>
                <option value="Lớp 11">Lớp 11</option>
                <option value="Lớp 12">Lớp 12</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Phân Loại</label>
              <select
                value={docUploadForm.typeTag}
                onChange={(e) => setDocUploadForm({ ...docUploadForm, typeTag: e.target.value })}
                className="w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer"
              >
                <option value="Tài liệu">Tài liệu</option>
                <option value="Sách">Sách</option>
                <option value="Ôn tập">Ôn tập</option>
                <option value="Giữa kì 1">Giữa kì 1</option>
                <option value="Giữa kì 2">Giữa kì 2</option>
                <option value="Cuối kì 1">Cuối kì 1</option>
                <option value="Cuối kì 2">Cuối kì 2</option>
                <option value="Tài liệu ôn thi">Tài liệu ôn thi</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-[#13519c] hover:bg-blue-800 text-white font-semibold rounded-lg transition cursor-pointer"
          >
            Gửi yêu cầu kiểm duyệt file
          </button>
        </form>
      </div>
    </div>
  );
}
