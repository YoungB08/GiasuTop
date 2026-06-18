import React from "react";

type AdminTabProps = {
  adminTab: string;
  setAdminTab: (tab: string) => void;
  pendingTutors: any[];
  pendingDocs: any[];
  news: any[];
  dbSubjects: any[];
  pendingCommissions: any[];
  subjectNameInput: string;
  setSubjectNameInput: (val: string) => void;
  handleAddOrEditSubject: (e: React.FormEvent) => void;
  setEditingSubject: (subject: any) => void;
  handleDeleteSubject: (id: number) => void;
  loadingPendingDocs: boolean;
  handleDecideDocument: (id: number, status: string) => void;
  setEditingNews: (news: any | null) => void;
  setNewsForm: (form: any) => void;
  setNewsFormOpen: (open: boolean) => void;
  handleDeleteNews: (id: number) => void;
  loadingPending: boolean;
  handleDecideTutor: (id: string, status: string) => void;
  setRejectingTutorId: (id: string | null) => void;
  systemStats: any;
  systemLogs: any[];
  fetchSystemLogs: () => void;
  fetchSystemStats: () => void;
  systemUsers: any[];
  fetchSystemUsers: () => void;
  handleEditUserClick: (u: any) => void;
  loadingCommissions: boolean;
  handleDecideCommission: (userId: string, status: string) => void;
  fetchPendingCommissions: () => void;
  formatVND: (val: any) => string;
};

export default function AdminTab({
  adminTab,
  setAdminTab,
  pendingTutors,
  pendingDocs,
  news,
  dbSubjects,
  pendingCommissions,
  subjectNameInput,
  setSubjectNameInput,
  handleAddOrEditSubject,
  setEditingSubject,
  handleDeleteSubject,
  loadingPendingDocs,
  handleDecideDocument,
  setEditingNews,
  setNewsForm,
  setNewsFormOpen,
  handleDeleteNews,
  loadingPending,
  handleDecideTutor,
  setRejectingTutorId,
  systemStats,
  systemLogs,
  fetchSystemLogs,
  fetchSystemStats,
  systemUsers,
  fetchSystemUsers,
  handleEditUserClick,
  loadingCommissions,
  handleDecideCommission,
  fetchPendingCommissions,
  formatVND,
}: AdminTabProps) {
  return (
    <div className="space-y-6">
      {/* Sub Menu tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2">
        <button
          onClick={() => setAdminTab("subjects")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "subjects" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          📚 Môn Học
        </button>

        <button
          onClick={() => setAdminTab("tutors")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "tutors" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          👩‍🏫 Duyệt Giáo Viên ({pendingTutors.length})
        </button>

        <button
          onClick={() => setAdminTab("pending_docs")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "pending_docs" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          📁 Duyệt Tài Liệu ({pendingDocs.length})
        </button>

        <button
          onClick={() => setAdminTab("news_crud")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "news_crud" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          📰 Quản Lý Tin Tức
        </button>

        <button
          onClick={() => setAdminTab("monitor")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "monitor" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          🖥️ Hệ Thống Logs
        </button>

        <button
          onClick={() => setAdminTab("users")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "users" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          👥 Người Dùng
        </button>

        <button
          onClick={() => {
            setAdminTab("commissions");
            fetchPendingCommissions();
          }}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "commissions" ? "text-[#13519c]" : "text-slate-400 hover:text-slate-650"
          }`}
        >
          🤝 Duyệt Deal Hoa Hồng ({pendingCommissions.length})
        </button>
      </div>

      {/* Sub-tab: Subjects CRUD */}
      {adminTab === "subjects" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 space-y-4">
          <form onSubmit={handleAddOrEditSubject} className="flex gap-2">
            <input
              type="text"
              placeholder="Nhập tên môn học..."
              value={subjectNameInput}
              onChange={(e) => setSubjectNameInput(e.target.value)}
              className="flex-1 h-9 px-3 text-xs rounded-lg border bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#13519c] text-white text-xs font-semibold px-4 rounded-lg cursor-pointer hover:bg-blue-800"
            >
              Lưu môn
            </button>
          </form>

          <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Tên Môn Học</th>
                  <th className="px-4 py-3 text-right">Hành Động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                {dbSubjects.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                    <td className="px-4 py-3 text-slate-400 font-mono">#{s.id}</td>
                    <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">{s.name}</td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingSubject(s);
                          setSubjectNameInput(s.name);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                        Sửa
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSubject(s.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-350 transition cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-tab: Document approval */}
      {adminTab === "pending_docs" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border space-y-4 text-xs">
          <h3 className="font-semibold text-sm">Tài liệu chờ duyệt</h3>
          {loadingPendingDocs ? (
            <div>Đang tải tài liệu...</div>
          ) : pendingDocs.length === 0 ? (
            <div className="text-slate-400 text-center py-4">Không có tài liệu nào chờ phê duyệt.</div>
          ) : (
            <div className="space-y-4">
              {pendingDocs.map((doc) => (
                <div key={doc.id} className="p-3 border rounded-lg bg-slate-50/40 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-slate-900">{doc.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Lớp: {doc.grade_tag} | Môn: {doc.subject_tag} | Loại: {doc.type_tag}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Tải lên bởi: {doc.uploader_name} | URL: {doc.file_url}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDecideDocument(doc.id, "APPROVED")}
                      className="bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer"
                    >
                      Phê duyệt
                    </button>
                    <button
                      onClick={() => handleDecideDocument(doc.id, "REJECTED")}
                      className="bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer"
                    >
                      Từ chối
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub-tab: News CRUD */}
      {adminTab === "news_crud" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border space-y-4 text-xs">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm">Quản lý tin tức hệ thống</h3>
            <button
              onClick={() => {
                setEditingNews(null);
                setNewsForm({ title: "", summary: "", content: "", thumbnailUrl: "", category: "Toán" });
                setNewsFormOpen(true);
              }}
              className="bg-[#13519c] hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition shadow"
            >
              Thêm bài tin mới
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-4 py-3">Tiêu đề</th>
                  <th className="px-4 py-3">Danh mục</th>
                  <th className="px-4 py-3">Ngày đăng</th>
                  <th className="px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                    <td
                      className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[240px]"
                      title={item.title}
                    >
                      {item.title}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500">{new Date(item.created_at).toLocaleDateString("vi-VN")}</td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingNews(item);
                          setNewsForm({
                            title: item.title,
                            summary: item.summary || "",
                            content: item.content,
                            thumbnailUrl: item.thumbnail_url || "",
                            category: item.category,
                          });
                          setNewsFormOpen(true);
                        }}
                        className="inline-flex items-center gap-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteNews(item.id)}
                        className="inline-flex items-center gap-0.5 text-xs font-semibold text-red-500 hover:underline cursor-pointer"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-tab: Pending Tutors */}
      {adminTab === "tutors" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 border space-y-4 text-xs">
          <h3 className="font-semibold text-sm">Gia sư cần duyệt hồ sơ</h3>
          {loadingPending ? (
            <div>Đang tải hồ sơ...</div>
          ) : pendingTutors.length === 0 ? (
            <div className="text-slate-400 text-center py-4">Không có gia sư nào đang chờ phê duyệt.</div>
          ) : (
            <div className="space-y-4">
              {pendingTutors.map((pt) => (
                <div key={pt.user_id} className="p-4 rounded-xl border bg-slate-50/40 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(pt.email)}`}
                      alt="avatar"
                      className="h-9 w-9 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{pt.full_name}</h4>
                      <p className="text-[10px] text-slate-400 text-left">
                        {pt.email} | {pt.phone}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-left">
                    <div>🏫 Trường: {pt.school}</div>
                    <div>🎓 Chuyên ngành: {pt.major} ({pt.year_of_study})</div>
                    <div>📚 Môn dạy: {pt.subjects_to_teach}</div>
                    <div>💰 Phí: {formatVND(pt.hourly_rate)}/giờ</div>
                  </div>
                  <div className="text-[10px] p-2 bg-white rounded border text-left">
                    <span className="font-semibold text-slate-500">Giới thiệu:</span> {pt.bio}
                  </div>

                  {pt.documents && pt.documents.length > 0 && (
                    <div className="space-y-1.5 border-t pt-2">
                      <span className="font-semibold text-slate-500 text-[9px] uppercase tracking-wider block text-left">
                        Minh chứng & CCCD 2 mặt đính kèm:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {pt.documents.map((d: any, idx: number) => (
                          <div
                            key={idx}
                            className="space-y-1 bg-white dark:bg-slate-900 p-1.5 rounded border dark:border-slate-800"
                          >
                            <span className="text-[8px] font-bold uppercase text-slate-400 block truncate text-left">
                              {d.doc_type === "CCCD_FRONT"
                                ? "🪪 CCCD Mặt Trước"
                                : d.doc_type === "CCCD_BACK"
                                ? "🪪 CCCD Mặt Sau"
                                : "🎓 Bằng Cấp / Thẻ SV"}
                            </span>
                            <a
                              href={d.url}
                              target="_blank"
                              rel="noreferrer"
                              className="block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-950"
                            >
                              <img
                                src={d.url}
                                alt={d.doc_type}
                                className="h-14 w-full object-cover rounded hover:scale-105 transition duration-200"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[7px] text-white font-bold">
                                MỞ 🔎
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 justify-end pt-2 border-t">
                    <button
                      onClick={() => handleDecideTutor(pt.user_id, "APPROVED")}
                      className="bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-emerald-700"
                    >
                      Duyệt hồ sơ
                    </button>
                    <button
                      onClick={() => setRejectingTutorId(pt.user_id)}
                      className="bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-rose-700"
                    >
                      Từ chối
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub-tab: Monitor system logs */}
      {adminTab === "monitor" && (
        <div className="space-y-4 text-xs">
          {/* Performance metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 border rounded-xl dark:bg-[#111827] dark:border-slate-800">
              <div className="text-[10px] uppercase text-slate-400">Bộ nhớ RAM</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {systemStats.memory.used} / {systemStats.memory.total}
                </div>
              )}
            </div>
            <div className="bg-white p-3 border rounded-xl dark:bg-[#111827] dark:border-slate-800">
              <div className="text-[10px] uppercase text-slate-400">Tải CPU</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">{systemStats.cpu.loadAvg}</div>
              )}
            </div>
            <div className="bg-white p-3 border rounded-xl dark:bg-[#111827] dark:border-slate-800">
              <div className="text-[10px] uppercase text-slate-400">Thành viên hệ thống</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {systemStats.stats.users} Users
                </div>
              )}
            </div>
          </div>

          {/* Logs list */}
          <div className="bg-white dark:bg-[#111827] dark:border-slate-800 p-4 border rounded-xl space-y-3">
            <div className="flex justify-between items-center font-semibold">
              <span>Lịch sử log hành vi & request API</span>
              <button
                onClick={() => {
                  fetchSystemLogs();
                  fetchSystemStats();
                }}
                className="text-blue-600 dark:text-blue-450 hover:underline cursor-pointer"
              >
                Tải lại
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto">
              <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
                <table className="w-full border-collapse text-left font-mono text-[10px]">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <th className="px-4 py-3">Time</th>
                      <th className="px-4 py-3">IP Address</th>
                      <th className="px-4 py-3">Action</th>
                      <th className="px-4 py-3">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                    {systemLogs.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                        <td className="px-4 py-2.5 text-slate-400">
                          {new Date(l.created_at).toLocaleTimeString()}
                        </td>
                        <td className="px-4 py-2.5 text-slate-500">{l.ip}</td>
                        <td className="px-4 py-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold text-[9px]">
                            {l.action}
                          </span>
                        </td>
                        <td
                          className="px-4 py-2.5 text-slate-600 dark:text-slate-355 truncate max-w-[240px]"
                          title={l.details || ""}
                        >
                          {l.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab: Users management */}
      {adminTab === "users" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
              👥 Danh sách tài khoản người dùng
            </h3>
            <button
              onClick={fetchSystemUsers}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition inline-flex items-center gap-1 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Làm mới
            </button>
          </div>

          <div className="overflow-hidden border border-slate-200/60 dark:border-slate-800 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="px-4 py-3">Họ tên / Email</th>
                    <th className="px-4 py-3">Vai trò</th>
                    <th className="px-4 py-3">Trạng thái</th>
                    <th className="px-4 py-3 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 dark:divide-slate-855">
                  {systemUsers.map((u) => {
                    let roleBadge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
                    if (u.role === "ADMIN") {
                      roleBadge =
                        "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/40 dark:border-purple-900/30";
                    } else if (u.role === "TUTOR") {
                      roleBadge =
                        "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40 dark:border-emerald-900/30";
                    } else if (u.role === "STUDENT") {
                      roleBadge =
                        "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/40 dark:border-blue-900/30";
                    }

                    let statusBadge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
                    if (u.status === "ACTIVE") {
                      statusBadge =
                        "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40 dark:border-emerald-900/30";
                    } else if (u.status === "BANNED") {
                      statusBadge =
                        "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/40 dark:border-rose-900/30";
                    }

                    return (
                      <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                        <td className="px-4 py-3">
                          <div className="font-semibold text-slate-700 dark:text-slate-200">{u.full_name}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">{u.email}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${roleBadge}`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${statusBadge}`}>
                            {u.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => handleEditUserClick(u)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                            Sửa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {adminTab === "commissions" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm">Phê duyệt Deal Chiết Khấu / Hoa Hồng Giáo Viên</h3>
            <button
              onClick={fetchPendingCommissions}
              className="text-blue-600 dark:text-blue-450 hover:underline font-semibold cursor-pointer"
            >
              Làm mới
            </button>
          </div>

          {loadingCommissions ? (
            <div className="text-slate-400">Đang tải danh sách...</div>
          ) : pendingCommissions.length === 0 ? (
            <div className="text-slate-400 text-center py-4">
              Không có đề xuất chiết khấu nào đang chờ phê duyệt.
            </div>
          ) : (
            <div className="overflow-hidden border border-slate-200/60 dark:border-slate-800 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="px-4 py-3">Gia sư</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Chiết khấu hiện tại</th>
                    <th className="px-4 py-3">Đề xuất mới</th>
                    <th className="px-4 py-3 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                  {pendingCommissions.map((pc) => (
                    <tr key={pc.user_id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                      <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">{pc.full_name}</td>
                      <td className="px-4 py-3 text-slate-500">{pc.email}</td>
                      <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-400">
                        {pc.commission_percent}%
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {pc.proposed_commission_percent}%
                      </td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button
                          onClick={() => handleDecideCommission(pc.user_id, "APPROVED")}
                          className="bg-emerald-600 hover:bg-emerald-750 text-white px-2.5 py-1 rounded text-[10px] font-bold cursor-pointer"
                        >
                          Duyệt
                        </button>
                        <button
                          onClick={() => handleDecideCommission(pc.user_id, "REJECTED")}
                          className="bg-rose-600 hover:bg-rose-750 text-white px-2.5 py-1 rounded text-[10px] font-bold cursor-pointer"
                        >
                          Từ chối
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
