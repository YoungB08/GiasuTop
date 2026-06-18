import React from "react";
import RichTextEditor from "../RichTextEditor";

type NewsModalProps = {
  newsFormOpen: boolean;
  setNewsFormOpen: (open: boolean) => void;
  editingNews: any;
  newsForm: { title: string; category: string; thumbnailUrl: string; summary: string; content: string };
  setNewsForm: (form: any) => void;
  handleAddOrEditNews: (e: React.FormEvent) => void;
};

export default function NewsModal({
  newsFormOpen,
  setNewsFormOpen,
  editingNews,
  newsForm,
  setNewsForm,
  handleAddOrEditNews,
}: NewsModalProps) {
  if (!newsFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border overflow-y-auto max-h-[90vh] text-left">
        <div className="flex items-center justify-between pb-3 border-b mb-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {editingNews ? "📰 Cập nhật bài viết tin tức" : "📰 Đăng bài viết tin tức mới"}
          </h3>
          <button
            type="button"
            onClick={() => setNewsFormOpen(false)}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleAddOrEditNews} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Tiêu đề tin tức *</label>
              <input
                type="text"
                required
                value={newsForm.title}
                onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                className="w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white"
                placeholder="Nhập tiêu đề..."
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Danh mục bài viết *</label>
              <input
                type="text"
                required
                value={newsForm.category}
                onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                className="w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white"
                placeholder="Ví dụ: Toán, Luyện thi, Thông báo..."
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-semibold">URL ảnh đại diện (Thumbnail URL)</label>
            <input
              type="text"
              value={newsForm.thumbnailUrl}
              onChange={(e) => setNewsForm({ ...newsForm, thumbnailUrl: e.target.value })}
              className="w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-semibold">Tóm tắt ngắn gọn *</label>
            <input
              type="text"
              required
              value={newsForm.summary}
              onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
              className="w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white"
              placeholder="Nhập tóm tắt bài viết..."
            />
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-semibold">Nội dung chi tiết tin tức (Word Editor, KaTeX hỗ trợ) *</label>
            <RichTextEditor
              content={newsForm.content}
              onChange={(val) => setNewsForm({ ...newsForm, content: val })}
              placeholder="Nhập toàn bộ nội dung bài viết tin tức tại đây..."
            />
          </div>

          <div className="flex gap-2.5 pt-2 border-t">
            <button
              type="submit"
              className="flex-1 h-11 bg-gradient-to-r from-blue-600 to-[#13519c] text-white text-xs font-bold rounded-xl transition hover:opacity-90 cursor-pointer shadow"
            >
              Lưu & Đăng bài viết
            </button>
            <button
              type="button"
              onClick={() => setNewsFormOpen(false)}
              className="w-24 h-11 bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-350 cursor-pointer"
            >
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
