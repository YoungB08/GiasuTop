import React from "react";

type RejectTutorModalProps = {
  rejectingTutorId: string | null;
  setRejectingTutorId: (id: string | null) => void;
  adminRejectReason: string;
  setAdminRejectReason: (reason: string) => void;
  handleDecideTutor: (id: string, status: string, reason?: string) => void;
};

export default function RejectTutorModal({
  rejectingTutorId,
  setRejectingTutorId,
  adminRejectReason,
  setAdminRejectReason,
  handleDecideTutor,
}: RejectTutorModalProps) {
  if (!rejectingTutorId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl dark:bg-[#111827] border text-left">
        <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">Lý Do Từ Chối Hồ Sơ</h3>
        <p className="text-xs text-slate-400 mb-4">Nhập lý do cụ thể gửi tới giáo viên:</p>
        <textarea
          value={adminRejectReason}
          onChange={(e) => setAdminRejectReason(e.target.value)}
          placeholder="VD: Thiếu chứng chỉ sư phạm hoặc ảnh CCCD mờ..."
          className="w-full h-24 p-3 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white placeholder-slate-400"
        />
        <div className="flex gap-2 justify-end mt-4">
          <button
            type="button"
            onClick={() => handleDecideTutor(rejectingTutorId, "REJECTED", adminRejectReason)}
            className="bg-rose-600 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-rose-700"
          >
            Từ chối hồ sơ
          </button>
          <button
            type="button"
            onClick={() => {
              setRejectingTutorId(null);
              setAdminRejectReason("");
            }}
            className="bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-300"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
