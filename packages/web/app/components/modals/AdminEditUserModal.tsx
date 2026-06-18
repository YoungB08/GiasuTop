import React from "react";

type AdminEditUserModalProps = {
  editingUser: any;
  setEditingUser: (user: any) => void;
  userForm: any;
  setUserForm: (form: any) => void;
  handleUpdateUser: (e: React.FormEvent) => void;
};

export default function AdminEditUserModal({
  editingUser,
  setEditingUser,
  userForm,
  setUserForm,
  handleUpdateUser,
}: AdminEditUserModalProps) {
  if (!editingUser) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border overflow-y-auto max-h-[90vh] text-left">
        <div className="flex items-center justify-between pb-3 border-b mb-4">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Cấu hình thông tin thành viên (Admin)</h3>
          <button
            type="button"
            onClick={() => setEditingUser(null)}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleUpdateUser} className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Họ và tên</label>
            <input
              type="text"
              required
              value={userForm.fullName}
              onChange={(e) => setUserForm({ ...userForm, fullName: e.target.value })}
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Địa chỉ Email</label>
            <input
              type="email"
              required
              value={userForm.email}
              onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Số điện thoại</label>
            <input
              type="text"
              value={userForm.phone}
              onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Vai trò</label>
              <select
                value={userForm.role}
                onChange={(e) => setUserForm({ ...userForm, role: e.target.value as any })}
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer"
              >
                <option value="STUDENT">STUDENT</option>
                <option value="TUTOR">TUTOR</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Trạng thái</label>
              <select
                value={userForm.status}
                onChange={(e) => setUserForm({ ...userForm, status: e.target.value as any })}
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer"
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="BANNED">BANNED</option>
              </select>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-950/20 p-3 rounded-xl border border-rose-200 space-y-2">
            <label className="block text-xs font-semibold text-rose-800 dark:text-rose-300">Thay đổi mật khẩu tài khoản</label>
            <input
              type="text"
              placeholder="Để trống nếu không thay đổi..."
              value={userForm.password}
              onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-[#13519c] hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
          >
            Lưu Thông Tin
          </button>
        </form>
      </div>
    </div>
  );
}
