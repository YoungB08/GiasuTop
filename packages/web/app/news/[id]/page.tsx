import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

async function getNews(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/news/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = await getNews(id);
  return {
    title: news?.title ?? "Tin tức học tập | GiaSu GiasuTop",
    description: news?.summary ?? "Đọc tin tức học tập tại GiaSu GiasuTop",
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = await getNews(id);

  const relatedImages = [
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&q=80",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#f6f6f9] dark:bg-[#0c0809]">
      {/* HEADER */}
      <header className="brand-nav text-white px-4 py-3 shadow-lg flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-white hover:opacity-90 transition">
          <span className="h-8 w-8 rounded-lg bg-white text-[#C41E3A] font-black flex items-center justify-center text-xl">K</span>
          <span className="font-semibold hidden sm:inline">GiasuTop</span>
        </Link>
        <span className="text-white/40">/</span>
        <Link href="/" className="text-white/70 hover:text-white text-sm transition">Tin tức</Link>
        {news && (
          <>
            <span className="text-white/40">/</span>
            <span className="text-white/80 text-sm truncate max-w-[200px]">{news.title}</span>
          </>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!news ? (
          <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl p-12 text-center shadow-sm border border-slate-200/50 dark:border-red-900/20">
            <div className="text-5xl mb-4">📰</div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Không tìm thấy bài viết</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Bài viết này không tồn tại hoặc đã bị xóa.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition"
            >
              ← Về trang chủ
            </Link>
          </div>
        ) : (
          <article className="animate-fade-up">
            {/* Hero image */}
            {news.thumbnail_url && (
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8 border border-slate-200/50 dark:border-red-900/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={news.thumbnail_url}
                  alt={news.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            )}

            {/* Article card */}
            <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl shadow-sm border border-slate-200/50 dark:border-red-900/20 overflow-hidden">
              {/* Category + meta */}
              <div className="px-6 pt-6 pb-0">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] text-white px-3 py-1 rounded-full mb-4">
                  {news.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                  {news.title}
                </h1>
                {news.summary && (
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed border-l-4 border-[#C41E3A] pl-4 mb-4 italic">
                    {news.summary}
                  </p>
                )}
                <div className="flex items-center gap-3 text-xs text-slate-400 pb-5 border-b border-slate-100 dark:border-red-900/20">
                  <span>📅 {new Date(news.created_at).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>•</span>
                  <span>⏱ ~{Math.ceil(news.content?.split(" ").length / 200)} phút đọc</span>
                  <span>•</span>
                  <span className="font-semibold text-[#C41E3A]">GiaSu GiasuTop</span>
                </div>
              </div>

              {/* Content */}
              <div
                className="px-6 py-6 prose prose-sm sm:prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: news.content ?? "" }}
              />

              {/* Footer */}
              <div className="px-6 pb-6 border-t border-slate-100 dark:border-red-900/20 pt-5 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  href="/"
                  className="text-sm font-semibold text-[#C41E3A] hover:text-[#7B1E1E] transition flex items-center gap-1"
                >
                  ← Quay lại tin tức
                </Link>
                <div className="flex gap-2">
                  {["Facebook", "Zalo", "Copy link"].map((s) => (
                    <button
                      key={s}
                      className="text-xs font-semibold border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Related images strip */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Hình ảnh liên quan</h3>
              <div className="grid grid-cols-3 gap-3">
                {relatedImages.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" className="rounded-xl h-28 w-full object-cover border border-slate-200/50 dark:border-red-900/20" />
                ))}
              </div>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
