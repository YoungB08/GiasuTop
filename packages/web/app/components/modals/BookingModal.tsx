import React from "react";

type BookingModalProps = {
  selectedTutor: any;
  setSelectedTutor: (tutor: any) => void;
  bookingError: string;
  setBookingError: (err: string) => void;
  bookingSuccess: boolean;
  tutorBookingType: "SINGLE" | "LONG_TERM";
  setTutorBookingType: (type: "SINGLE" | "LONG_TERM") => void;
  bookingDate: string;
  setBookingDate: (date: string) => void;
  bookingStartHour: string;
  setBookingStartHour: (hour: string) => void;
  longTermSchedule: { week1: string[]; week2: string[] };
  setLongTermSchedule: (sched: { week1: string[]; week2: string[] }) => void;
  longTermWeeks: number;
  setLongTermWeeks: (weeks: number) => void;
  bookingDuration: string;
  setBookingDuration: (dur: string) => void;
  formatVND: (val: any) => string;
  handleBookTutor: (e: React.FormEvent) => void;
};

export default function BookingModal({
  selectedTutor,
  setSelectedTutor,
  bookingError,
  setBookingError,
  bookingSuccess,
  tutorBookingType,
  setTutorBookingType,
  bookingDate,
  setBookingDate,
  bookingStartHour,
  setBookingStartHour,
  longTermSchedule,
  setLongTermSchedule,
  longTermWeeks,
  setLongTermWeeks,
  bookingDuration,
  setBookingDuration,
  formatVND,
  handleBookTutor,
}: BookingModalProps) {
  if (!selectedTutor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">📅 Đặt lịch học cùng gia sư</h3>
          <button
            type="button"
            onClick={() => {
              setSelectedTutor(null);
              setBookingError("");
            }}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-[#13519c] text-white font-semibold flex items-center justify-center text-sm">
              {selectedTutor.full_name.charAt(0)}
            </div>
            <div className="text-left">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{selectedTutor.full_name}</h4>
              <p className="text-[10px] text-slate-400">
                {selectedTutor.school} • {selectedTutor.major}
              </p>
            </div>
          </div>

          <form onSubmit={handleBookTutor} className="space-y-4 border-t pt-4">
            {bookingError && (
              <div className="p-3 bg-rose-50 text-rose-600 rounded-lg text-xs font-semibold text-left">
                ⚠️ {bookingError}
              </div>
            )}

            {bookingSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold text-left">
                🎉 Đã đặt lịch! Đang tạo hóa đơn học phí...
              </div>
            )}

            {/* Long-term Enrollment Option */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border space-y-2 text-left">
              <label className="block text-[10px] font-bold text-slate-500 uppercase">Loại hình đăng ký</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTutorBookingType("SINGLE")}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    tutorBookingType === "SINGLE"
                      ? "bg-[#13519c] text-white border-[#13519c]"
                      : "bg-white text-slate-700"
                  }`}
                >
                  Học buổi lẻ
                </button>
                <button
                  type="button"
                  onClick={() => setTutorBookingType("LONG_TERM")}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    tutorBookingType === "LONG_TERM"
                      ? "bg-[#13519c] text-white border-[#13519c]"
                      : "bg-white text-slate-700"
                  }`}
                >
                  Đăng ký dài hạn
                </button>
              </div>
            </div>

            {tutorBookingType === "SINGLE" ? (
              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-1">1. Chọn ngày học</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-1">2. Giờ học bắt đầu</label>
                  <select
                    value={bookingStartHour}
                    onChange={(e) => setBookingStartHour(e.target.value)}
                    className="h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white"
                  >
                    <option value="08:00">08:00 Sáng</option>
                    <option value="09:00">09:00 Sáng</option>
                    <option value="14:00">14:00 Chiều</option>
                    <option value="15:00">15:00 Chiều</option>
                    <option value="19:00">19:00 Tối</option>
                    <option value="20:00">20:00 Tối</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border space-y-3 text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase">
                  Thiết lập lịch tuần dài hạn
                </label>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-1">1. Giờ học bắt đầu</label>
                  <select
                    value={bookingStartHour}
                    onChange={(e) => setBookingStartHour(e.target.value)}
                    className="h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white bg-white"
                  >
                    <option value="08:00">08:00 Sáng</option>
                    <option value="09:00">09:00 Sáng</option>
                    <option value="14:00">14:00 Chiều</option>
                    <option value="15:00">15:00 Chiều</option>
                    <option value="19:00">19:00 Tối</option>
                    <option value="20:00">20:00 Tối</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-semibold text-[#13519c]">2. Chọn các ngày học trong tuần:</div>
                  <div className="flex flex-wrap gap-1">
                    {["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"].map((day) => {
                      const isSel = (longTermSchedule.week1 || []).includes(day);
                      return (
                        <button
                          type="button"
                          key={day}
                          onClick={() => {
                            const curr = [...(longTermSchedule.week1 || [])];
                            const idx = curr.indexOf(day);
                            if (idx > -1) curr.splice(idx, 1);
                            else curr.push(day);
                            setLongTermSchedule({ week1: curr, week2: curr });
                          }}
                          className={`px-2.5 py-1.5 rounded-lg text-[10px] font-semibold border transition cursor-pointer ${
                            isSel ? "bg-[#13519c] text-white border-[#13519c]" : "bg-white text-slate-600 border-slate-200"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-1">
                    3. Số tuần học đăng ký (Khóa học):
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="24"
                    value={longTermWeeks}
                    onChange={(e) => setLongTermWeeks(Number(e.target.value))}
                    className="w-full h-10 px-3 border rounded-xl text-xs bg-white text-slate-900 border-slate-200 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="text-left">
              <label className="block text-[10px] font-semibold text-slate-500 mb-1">
                3. Số giờ học dạy kèm / buổi
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["1.5", "2", "3"].map((hours) => (
                  <button
                    key={hours}
                    type="button"
                    onClick={() => setBookingDuration(hours)}
                    className={`h-9 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                      bookingDuration === hours
                        ? "bg-[#13519c] text-white border-[#13519c]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {hours} tiếng
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg flex flex-col gap-1 text-xs text-left border">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-400">Đơn giá / giờ:</span>
                <span className="font-semibold">{formatVND(Number(selectedTutor.hourly_rate))}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-1 mt-1">
                <span className="font-bold text-slate-500">Tổng cộng ước tính:</span>
                <span className="text-base font-bold text-rose-600">
                  {formatVND(
                    Number(selectedTutor.hourly_rate) *
                      Number(bookingDuration) *
                      (tutorBookingType === "SINGLE"
                        ? 1
                        : (longTermSchedule.week1.length + longTermSchedule.week2.length) * (longTermWeeks / 2))
                  )}
                </span>
              </div>
              <div className="text-[9px] text-slate-400 mt-1">
                * Phí giao dịch được trừ tự động từng buổi học vào ví Giáo viên sau 2 ngày (Holding bảo đảm).
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-[#13519c] text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition cursor-pointer"
            >
              Xác nhận đặt gia sư
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
