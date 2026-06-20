import React from "react";
import { IconSearch, IconUser, IconGraduationCap, IconBook, IconStar, IconZap } from "../icons";
import { getAvatarUrl } from "../../utils/avatar";

type CoursesTabProps = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedGradeFilter: string;
  setSelectedGradeFilter: (val: string) => void;
  subjectList: string[];
  selectedSubject: string;
  setSelectedSubject: (val: string) => void;
  filteredTutors: any[];
  tutorGradients: string[];
  formatVND: (val: any) => string;
  setViewingTutor: (tutor: any) => void;
};

export default function CoursesTab({
  searchTerm,
  setSearchTerm,
  selectedGradeFilter,
  setSelectedGradeFilter,
  subjectList,
  selectedSubject,
  setSelectedSubject,
  filteredTutors,
  tutorGradients,
  formatVND,
  setViewingTutor,
}: CoursesTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">Đội Ngũ GiasuTop</h2>
        <div className="relative max-w-[180px]">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm gia sư, trường học..."
            className="w-full h-8 pl-8 pr-3 text-xs rounded-lg border bg-white dark:bg-slate-900 focus:outline-none focus:border-[#13519c]"
          />
        </div>
      </div>

      {/* Danh mục gia sư filter inline */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Danh mục gia sư
          </span>
          {selectedGradeFilter !== "Tất cả" && (
            <button
              onClick={() => setSelectedGradeFilter("Tất cả")}
              className="text-[10px] text-red-650 hover:text-red-500 dark:text-red-400 font-bold transition cursor-pointer"
            >
              Xóa bộ lọc x
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Tất cả gia sư", filter: "Tất cả", icon: <IconUser className="h-3.5 w-3.5" /> },
            { label: "Gia sư cấp THPT", filter: "Cấp THPT", icon: <IconGraduationCap className="h-3.5 w-3.5" /> },
            { label: "Gia sư cấp THCS", filter: "Cấp THCS", icon: <IconBook className="h-3.5 w-3.5" /> },
            { label: "Gia sư Tiểu học", filter: "Cấp Tiểu học", icon: <IconStar className="h-3.5 w-3.5" /> },
            { label: "Luyện thi Đại học", filter: "Luyện thi ĐH", icon: <IconZap className="h-3.5 w-3.5" /> },
          ].map((cat) => (
            <button
              key={cat.filter}
              onClick={() => setSelectedGradeFilter(cat.filter)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] font-semibold transition cursor-pointer border ${
                selectedGradeFilter === cat.filter
                  ? "bg-red-50 text-[#C41E3A] border-red-200 dark:bg-red-950/20 dark:text-red-450 dark:border-red-900/50 font-bold shadow-sm"
                  : "bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-655 dark:text-slate-350 border-slate-100 dark:border-slate-800/60"
              }`}
            >
              <div
                className={`h-5.5 w-5.5 rounded-lg flex items-center justify-center shrink-0 transition ${
                  selectedGradeFilter === cat.filter
                    ? "bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white"
                    : "bg-red-100/80 text-[#C41E3A] dark:bg-slate-850 dark:text-red-400"
                }`}
              >
                {cat.icon}
              </div>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subject tabs filter bar */}
      <div className="flex border-b dark:border-slate-800 overflow-x-auto gap-2">
        {subjectList.map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`pb-2.5 px-4 text-xs font-semibold cursor-pointer transition-all relative shrink-0 ${
              selectedSubject === sub ? "text-[#13519c] dark:text-blue-400 font-bold" : "text-slate-400 hover:text-slate-650"
            }`}
          >
            {sub}
            {selectedSubject === sub && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#13519c] dark:bg-blue-400" />
            )}
          </button>
        ))}
      </div>

      {/* Tutors Cards Grid */}
      {filteredTutors.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-xs bg-white dark:bg-slate-900 border rounded-xl">
          Chưa tìm thấy gia sư nào phù hợp với bộ lọc và điều kiện tìm kiếm.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTutors.map((t, idx) => {
            return (
              <div
                key={t.user_id}
                className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.01] transition duration-200"
              >
                {/* Card header cover style */}
                <div
                  className={`p-4 ${
                    t.card_gradient || "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]"
                  } text-white relative h-28 flex flex-col justify-between`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] bg-black/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      GIA SƯ CHUYÊN NGHIỆP
                    </span>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded font-semibold">
                      ⭐️ {(4.7 + (t.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)} (
                      {(t.full_name.charCodeAt(1) % 40) + 15} đánh giá)
                    </span>
                  </div>
                  <h4 className="text-xs font-bold leading-tight line-clamp-2">
                    Lớp dạy kèm: {t.subjects_to_teach.join(", ")}
                  </h4>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={getAvatarUrl(t)}
                      alt={t.full_name}
                      className="h-10 w-10 rounded-full border bg-slate-50 shrink-0 object-cover"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">{t.full_name}</h5>
                      <p className="text-[10px] text-slate-400 truncate font-semibold">
                        {t.school} ({t.major || "Chuyên ngành"})
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {t.bio || "Gia sư tận tâm dạy bám sát chương trình học, giúp con củng cố kiến thức và đạt điểm tốt."}
                  </p>

                  <div className="pt-3 border-t dark:border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-slate-400">Học phí đề xuất</span>
                      <span className="text-sm font-bold text-rose-600">{formatVND(t.hourly_rate)}/giờ</span>
                    </div>
                    <button
                      onClick={() => setViewingTutor(t)}
                      className="bg-[#13519c] hover:bg-blue-800 text-white font-bold text-xs px-4 h-9 rounded-lg cursor-pointer transition flex items-center justify-center"
                    >
                      Đăng ký học ngay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
