import React from "react";

type NewsTabProps = {
  selectedNews: any | null;
  setSelectedNews: (news: any | null) => void;
  token: string | null;
  user: any;
  setEditingNews: (news: any | null) => void;
  setNewsForm: (form: any) => void;
  setNewsFormOpen: (val: boolean) => void;
  news: any[];
};

export default function NewsTab({
  selectedNews,
  setSelectedNews,
  token,
  user,
  setEditingNews,
  setNewsForm,
  setNewsFormOpen,
  news,
}: NewsTabProps) {
  return (
    <div className="space-y-6">
      {selectedNews ? (
        // Detail Page View like a newspaper, not a popup modal!
        <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-4 border-b">
            <button
              onClick={() => setSelectedNews(null)}
              className="flex items-center gap-1.5 text-[#13519c] dark:text-blue-400 hover:underline font-bold text-xs"
            >
              &larr; Quay lại danh sách
            </button>
            <span className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              {selectedNews.category}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">
              {selectedNews.title}
            </h1>
            <p className="text-xs text-slate-400">
              📅 Đăng ngày: {new Date(selectedNews.created_at).toLocaleDateString("vi-VN")} | Tác giả: GiaSu GiasuTop
            </p>
          </div>

          {selectedNews.thumbnail_url && (
            <img
              src={selectedNews.thumbnail_url}
              alt={selectedNews.title}
              className="w-full max-h-96 object-cover rounded-xl shadow mx-auto"
            />
          )}

          {selectedNews.summary && (
            <p className="text-xs font-semibold text-slate-650 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border-l-4 border-[#13519c] italic leading-relaxed">
              {selectedNews.summary}
            </p>
          )}

          <div
            className="text-xs text-slate-700 dark:text-slate-355 leading-relaxed space-y-4 font-sans prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedNews.content }}
          />

          <div className="pt-4 border-t">
            <button
              onClick={() => setSelectedNews(null)}
              className="bg-[#13519c] text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-blue-850 cursor-pointer shadow"
            >
              Quay lại trang danh sách
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Tin Tức Kỳ Thi & Học Tập
            </h2>
            {token && user?.role === "ADMIN" && (
              <button
                onClick={() => {
                  setEditingNews(null);
                  setNewsForm({ title: "", summary: "", content: "", thumbnailUrl: "", category: "Toán" });
                  setNewsFormOpen(true);
                }}
                className="bg-[#13519c] hover:bg-blue-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer flex items-center gap-1.5 shadow"
              >
                ➕ Đăng tin mới
              </button>
            )}
          </div>

          {news.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">Chưa có tin tức nào được đăng.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#111827] rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800 flex shadow-sm hover:scale-[1.01] transition cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  {item.thumbnail_url && (
                    <img
                      src={item.thumbnail_url}
                      alt="News thumbnail"
                      className="w-24 object-cover"
                    />
                  )}
                  <div className="p-3 flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] bg-amber-500/10 text-amber-600 font-bold px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white truncate mt-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                        {item.summary || "Xem phân tích chi tiết nội dung sự kiện ngay tại đây."}
                      </p>
                    </div>
                    <span className="text-[9px] text-slate-450 block mt-2 text-right">
                      📅 {new Date(item.created_at).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
