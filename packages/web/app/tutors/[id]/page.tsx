import type { Metadata } from "next";
import Link from "next/link";
import { getAvatarUrl } from "../../utils/avatar";
import { apiUrl } from "../../utils/api";

interface Props {
  params: Promise<{ id: string }>;
}

async function getTutor(id: string) {
  try {
    const res = await fetch(apiUrl(`/api/tutors/${id}`), { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

async function getTutorReviews(id: string) {
  try {
    const res = await fetch(apiUrl(`/api/tutors/${id}/reviews`), { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tutor = await getTutor(id);
  return {
    title: tutor ? `Gia sư ${tutor.full_name} | GiasuTop` : "Hồ sơ gia sư | GiasuTop",
    description: tutor?.bio ?? "Xem hồ sơ gia sư tại GiaSu GiasuTop",
  };
}

const GRADIENTS = [
  "from-[#C41E3A] to-[#7B1E1E]",
  "from-rose-500 to-[#C41E3A]",
  "from-[#7B1E1E] to-slate-800",
  "from-amber-600 to-[#C41E3A]",
];

function formatVND(v: number | string) {
  return Number(v).toLocaleString("vi-VN") + " đ";
}

export default async function TutorDetailPage({ params }: Props) {
  const { id } = await params;
  const tutor = await getTutor(id);
  const reviewsList = await getTutorReviews(id);

  const grad = GRADIENTS[id.charCodeAt(0) % GRADIENTS.length];
  
  const reviewCount = reviewsList.length;
  const rating = reviewCount > 0 
    ? (reviewsList.reduce((sum: number, r: any) => sum + r.rating, 0) / reviewCount).toFixed(1) 
    : "5.0";
  const reviews = reviewCount;

  return (
    <div className="min-h-screen bg-[#f6f6f9] dark:bg-[#0c0809]">
      {/* HEADER */}
      <header className="brand-nav text-white px-4 py-3 shadow-lg flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-white hover:opacity-90 transition">
          <span className="h-8 w-8 rounded-lg bg-white text-[#C41E3A] font-black flex items-center justify-center text-xl">K</span>
          <span className="font-semibold hidden sm:inline">GiasuTop</span>
        </Link>
        <span className="text-white/40">/</span>
        <Link href="/" className="text-white/70 hover:text-white text-sm">Tìm gia sư</Link>
        {tutor && (
          <>
            <span className="text-white/40">/</span>
            <span className="text-white/80 text-sm truncate max-w-[200px]">{tutor.full_name}</span>
          </>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!tutor ? (
          <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl p-12 text-center shadow-sm border border-slate-200/50 dark:border-red-900/20">
            <div className="text-5xl mb-4">👩‍🏫</div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Không tìm thấy gia sư</h1>
            <p className="text-slate-500 text-sm mb-6">Gia sư này không tồn tại hoặc chưa được phê duyệt.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition">
              ← Tìm gia sư khác
            </Link>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-up">
            {/* HERO CARD */}
            <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 dark:border-red-900/20">
              {/* Cover gradient */}
              <div className={`bg-gradient-to-r ${grad} h-36 relative`}>
                <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                {/* Avatar */}
                <div className="absolute -bottom-10 left-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAvatarUrl(tutor)}
                    alt={tutor.full_name}
                    className="h-20 w-20 rounded-2xl border-4 border-white dark:border-[#1a0d0e] shadow-xl bg-slate-100 object-cover"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 pt-14">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900 dark:text-white">{tutor.full_name}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{tutor.school} · {tutor.major}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-amber-500 text-sm font-bold">⭐ {rating}</span>
                      <span className="text-slate-400 text-xs">({reviews} đánh giá)</span>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">Đã duyệt</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-3">
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-slate-400">Học phí / giờ</p>
                      <p className="text-2xl font-black text-[#C41E3A]">{formatVND(tutor.hourly_rate)}</p>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition shadow-md"
                    >
                      📅 Đặt lịch học ngay
                    </Link>
                  </div>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(tutor.subjects_to_teach || []).map((sub: string) => (
                    <span key={sub} className="text-xs font-semibold bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] text-white px-3 py-1 rounded-full shadow-sm">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* INFO GRID */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Trình độ", value: tutor.year_of_study || "—" },
                { label: "Chuyên ngành", value: tutor.major || "—" },
                { label: "Trường", value: tutor.school || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white dark:bg-[#1a0d0e] rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-red-900/20">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{label}</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            {/* BIO */}
            {tutor.bio && (
              <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl p-6 shadow-sm border border-slate-200/50 dark:border-red-900/20">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="h-5 w-1 bg-gradient-to-b from-[#C41E3A] to-[#7B1E1E] rounded-full" />
                  Giới thiệu bản thân
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tutor.bio}</p>
              </div>
            )}

            {/* REVIEWS */}
            <div className="bg-white dark:bg-[#1a0d0e] rounded-2xl p-6 shadow-sm border border-slate-200/50 dark:border-red-900/20">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="h-5 w-1 bg-gradient-to-b from-[#C41E3A] to-[#7B1E1E] rounded-full" />
                Đánh giá từ Học sinh ({reviewCount})
              </h2>
              {reviewsList.length === 0 ? (
                <p className="text-sm text-slate-500 italic">Chưa có đánh giá nào cho gia sư này.</p>
              ) : (
                <div className="space-y-4">
                  {reviewsList.map((rev: any) => (
                    <div key={rev.id} className="border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-xs text-slate-800 dark:text-white">{rev.student_name}</span>
                        <span className="text-[10px] text-slate-400">{new Date(rev.created_at).toLocaleDateString("vi-VN")}</span>
                      </div>
                      <div className="text-amber-500 text-xs mb-1">{"⭐".repeat(rev.rating)}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{rev.comment || "Không có bình luận."}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#C41E3A] to-[#7B1E1E] rounded-2xl p-6 text-white text-center shadow-lg">
              <h3 className="font-black text-lg mb-1">Sẵn sàng bắt đầu học?</h3>
              <p className="text-white/80 text-sm mb-4">Đặt lịch ngay hôm nay và nhận buổi tư vấn miễn phí đầu tiên!</p>
              <Link href="/" className="inline-block bg-white text-[#C41E3A] font-black px-8 py-3 rounded-xl text-sm hover:scale-105 transition shadow-lg">
                Đặt lịch học với {tutor.full_name.split(" ").slice(-1)[0]}
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
