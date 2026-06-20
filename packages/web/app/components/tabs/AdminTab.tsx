import React from "react";
import { getAvatarUrl } from "../../utils/avatar";
import KntechDataTable, { Column } from "../KntechDataTable";

type AdminTabKey = "dashboard" | "subjects" | "tutors" | "monitor" | "users" | "pending_docs" | "news_crud" | "notifications" | "escrow";

type AdminTabProps = {
  adminTab: AdminTabKey;
  setAdminTab: React.Dispatch<React.SetStateAction<AdminTabKey>>;
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
  handleDecideDocument: (id: number, status: "APPROVED" | "REJECTED") => void;
  setEditingNews: (news: any | null) => void;
  setNewsForm: (form: any) => void;
  setNewsFormOpen: (open: boolean) => void;
  handleDeleteNews: (id: number) => void;
  loadingPending: boolean;
  handleDecideTutor: (id: string, status: "APPROVED" | "REJECTED") => void;
  setRejectingTutorId: (id: string | null) => void;
  systemStats: any;
  systemLogs: any[];
  fetchSystemLogs: () => void;
  fetchSystemStats: () => void;
  systemUsers: any[];
  fetchSystemUsers: () => void;
  handleEditUserClick: (u: any) => void;
  loadingCommissions: boolean;
  handleDecideCommission: (userId: string, status: "APPROVED" | "REJECTED") => void;
  fetchPendingCommissions: () => void;
  adminNotificationForm: {
    title: string;
    body: string;
    linkUrl: string;
    role: "ALL" | "STUDENT" | "TUTOR" | "ADMIN";
  };
  setAdminNotificationForm: (form: any) => void;
  handleSendAdminNotification: (e: React.FormEvent) => void;
  sendingAdminNotification: boolean;
  formatVND: (val: any) => string;
  fetchPendingTutors: () => void;
  setPreviewDoc: (doc: any) => void;
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
  adminNotificationForm,
  setAdminNotificationForm,
  handleSendAdminNotification,
  sendingAdminNotification,
  formatVND,
  fetchPendingTutors,
  setPreviewDoc,
}: AdminTabProps) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
  const [previewImageUrl, setPreviewImageUrl] = React.useState<string | null>(null);

  const handleDeleteTutorDoc = async (docId: number) => {
    if (!window.confirm("Bác có chắc chắn muốn xóa tài liệu minh chứng này?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/tutor-documents/${docId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      if (json.success) {
        alert("Đã xóa tài liệu thành công!");
        fetchPendingTutors();
      } else {
        alert(json.message || "Lỗi khi xóa tài liệu.");
      }
    } catch (e) {
      console.error(e);
      alert("Lỗi kết nối máy chủ.");
    }
  };

  // Stats Dashboard States
  const [dashboardData, setDashboardData] = React.useState<any>(null);
  const [loadingDashboard, setLoadingDashboard] = React.useState(false);
  const [activePopup, setActivePopup] = React.useState<"tutors" | "students" | "appointments" | "payments" | null>(null);
  const [escrowAppointments, setEscrowAppointments] = React.useState<any[]>([]);
  const [loadingEscrow, setLoadingEscrow] = React.useState(false);
  const [releasingEscrowId, setReleasingEscrowId] = React.useState<string | null>(null);
  const [escrowNoteTarget, setEscrowNoteTarget] = React.useState<string | null>(null);
  const [escrowAdminNote, setEscrowAdminNote] = React.useState("");
  const [escrowToast, setEscrowToast] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  const fetchDashboardData = async () => {
    if (!token) return;
    setLoadingDashboard(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/dashboard-details", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setDashboardData(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải thống kê dashboard:", e);
    } finally {
      setLoadingDashboard(false);
    }
  };

  React.useEffect(() => {
    if (adminTab === "dashboard") {
      fetchDashboardData();
    }
  }, [adminTab]);

  const fetchEscrowAppointments = async () => {
    if (!token) return;
    setLoadingEscrow(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/escrow/appointments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setEscrowAppointments(json.data || []);
      } else {
        setEscrowToast({ type: "error", message: json.message || "Không thể tải danh sách tiền giam." });
      }
    } catch (e) {
      console.error("Lỗi tải danh sách tiền giam:", e);
      setEscrowToast({ type: "error", message: "Lỗi kết nối khi tải danh sách tiền giam." });
    } finally {
      setLoadingEscrow(false);
    }
  };

  const handleReleaseEscrow = async (appointmentId: string, adminNote = "") => {
    setReleasingEscrowId(appointmentId);
    try {
      const res = await fetch(`http://localhost:5000/api/admin/escrow/${appointmentId}/release`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ adminNote }),
      });
      const json = await res.json();
      if (json.success) {
        setEscrowToast({ type: "success", message: "Đã duyệt trả tiền vào ví khả dụng của gia sư." });
        setEscrowNoteTarget(null);
        setEscrowAdminNote("");
        fetchEscrowAppointments();
        fetchDashboardData();
      } else {
        setEscrowToast({ type: "error", message: json.message || "Không thể duyệt trả khoản giam." });
      }
    } catch (e) {
      console.error("Lỗi duyệt trả tiền giam:", e);
      setEscrowToast({ type: "error", message: "Lỗi kết nối khi duyệt trả tiền giam." });
    } finally {
      setReleasingEscrowId(null);
    }
  };

  React.useEffect(() => {
    if (adminTab === "escrow") {
      fetchEscrowAppointments();
    }
  }, [adminTab]);

  // Columns Definitions for Datatables
  const subjectColumns: Column[] = [
    { key: "id", label: "ID", sortable: true, render: (row) => <span className="text-slate-400 font-mono">#{row.id}</span> },
    { key: "name", label: "Tên Môn Học", sortable: true, render: (row) => <span className="font-semibold text-slate-700 dark:text-slate-200">{row.name}</span> },
    {
      key: "actions",
      label: "Hành Động",
      sortable: false,
      render: (row) => (
        <div className="space-x-2 text-right">
          <button
            type="button"
            onClick={() => {
              setEditingSubject(row);
              setSubjectNameInput(row.name);
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer"
          >
            Sửa
          </button>
          <button
            type="button"
            onClick={() => handleDeleteSubject(row.id)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-350 transition cursor-pointer"
          >
            Xóa
          </button>
        </div>
      )
    }
  ];

  const newsColumns: Column[] = [
    { key: "title", label: "Tiêu đề", sortable: true, render: (row) => <span className="font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[240px]" title={row.title}>{row.title}</span> },
    { 
      key: "category", 
      label: "Danh mục", 
      sortable: true,
      render: (row) => (
        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
          {row.category}
        </span>
      )
    },
    { 
      key: "created_at", 
      label: "Ngày đăng", 
      sortable: true,
      render: (row) => <span className="text-slate-500">{new Date(row.created_at).toLocaleDateString("vi-VN")}</span>
    },
    {
      key: "actions",
      label: "Thao tác",
      sortable: false,
      render: (row) => (
        <div className="space-x-2 text-right">
          <button
            type="button"
            onClick={() => {
              setEditingNews(row);
              setNewsForm({
                title: row.title,
                summary: row.summary || "",
                content: row.content,
                thumbnailUrl: row.thumbnail_url || "",
                category: row.category,
              });
              setNewsFormOpen(true);
            }}
            className="inline-flex items-center gap-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Sửa
          </button>
          <button
            type="button"
            onClick={() => handleDeleteNews(row.id)}
            className="inline-flex items-center gap-0.5 text-xs font-semibold text-red-500 hover:underline cursor-pointer"
          >
            Xóa
          </button>
        </div>
      )
    }
  ];

  const userColumns: Column[] = [
    {
      key: "full_name",
      label: "Họ tên / Email",
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-semibold text-slate-700 dark:text-slate-200">{row.full_name}</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">{row.email}</div>
        </div>
      )
    },
    {
      key: "role",
      label: "Vai trò",
      sortable: true,
      render: (row) => {
        let badge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
        if (row.role === "ADMIN") badge = "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/40";
        else if (row.role === "TUTOR") badge = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40";
        else if (row.role === "STUDENT") badge = "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/40";
        return <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${badge}`}>{row.role}</span>;
      }
    },
    {
      key: "status",
      label: "Trạng thái",
      sortable: true,
      render: (row) => {
        let badge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
        if (row.status === "ACTIVE") badge = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40";
        else if (row.status === "BANNED") badge = "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/40";
        return <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${badge}`}>{row.status}</span>;
      }
    },
    {
      key: "actions",
      label: "Hành động",
      sortable: false,
      render: (row) => (
        <button
          type="button"
          onClick={() => handleEditUserClick(row)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer"
        >
          Sửa
        </button>
      )
    }
  ];

  const logColumns: Column[] = [
    {
      key: "created_at",
      label: "Thời gian",
      sortable: true,
      render: (row) => <span className="text-slate-400 font-mono">{new Date(row.created_at).toLocaleString("vi-VN")}</span>
    },
    { key: "ip", label: "IP Address", sortable: true, render: (row) => <span className="font-mono">{row.ip}</span> },
    {
      key: "action",
      label: "Action",
      sortable: true,
      render: (row) => (
        <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold text-[9px]">
          {row.action}
        </span>
      )
    },
    {
      key: "details",
      label: "Details",
      sortable: true,
      render: (row) => (
        <span className="text-slate-600 dark:text-slate-355 truncate max-w-[320px]" title={row.details || ""}>
          {row.details}
        </span>
      )
    }
  ];

  // Popup Columns definitions
  const tutorColumns: Column[] = [
    { key: "full_name", label: "Họ tên", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "phone", label: "SĐT", sortable: true },
    { key: "school", label: "Trường học", sortable: true },
    { key: "major", label: "Chuyên ngành", sortable: true },
    { key: "year_of_study", label: "Năm học", sortable: true },
    { 
      key: "hourly_rate", 
      label: "Học phí", 
      sortable: true,
      render: (row) => <span className="font-mono font-semibold">{formatVND(row.hourly_rate)}/h</span>
    },
    { 
      key: "commission_percent", 
      label: "Chiết khấu", 
      sortable: true,
      render: (row) => <span className="font-mono font-bold text-indigo-600">{row.commission_percent}%</span>
    },
    { 
      key: "is_verified", 
      label: "Duyệt", 
      sortable: true,
      render: (row) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
          row.is_verified === "APPROVED" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" :
          row.is_verified === "PENDING" ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20" :
          "bg-rose-50 text-rose-700 dark:bg-rose-950/20"
        }`}>
          {row.is_verified}
        </span>
      )
    }
  ];

  const studentColumns: Column[] = [
    { key: "full_name", label: "Họ tên", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "phone", label: "SĐT", sortable: true },
    { 
      key: "status", 
      label: "Trạng thái", 
      sortable: true,
      render: (row) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
          row.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/20"
        }`}>
          {row.status}
        </span>
      )
    },
    { 
      key: "created_at", 
      label: "Ngày đăng ký", 
      sortable: true,
      render: (row) => <span>{new Date(row.created_at).toLocaleDateString("vi-VN")}</span>
    }
  ];

  const appointmentColumns: Column[] = [
    { key: "id", label: "Mã lớp", sortable: true, render: (row) => <span className="font-mono text-slate-400">#{row.id}</span> },
    { key: "tutor_name", label: "Gia sư", sortable: true },
    { key: "student_name", label: "Học viên", sortable: true },
    { 
      key: "start_time", 
      label: "Bắt đầu", 
      sortable: true,
      render: (row) => <span>{new Date(row.start_time).toLocaleString("vi-VN")}</span>
    },
    { 
      key: "price_paid", 
      label: "Phí thanh toán", 
      sortable: true,
      render: (row) => <span className="font-mono font-bold text-slate-700 dark:text-slate-200">{formatVND(row.price_paid)}</span>
    },
    { 
      key: "status", 
      label: "Trạng thái", 
      sortable: true,
      render: (row) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
          row.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" :
          row.status === "CANCELLED" ? "bg-rose-50 text-rose-700 dark:bg-rose-950/20" :
          "bg-blue-50 text-blue-700 dark:bg-blue-950/20"
        }`}>
          {row.status}
        </span>
      )
    },
    { 
      key: "payment_status", 
      label: "Thanh toán", 
      sortable: true,
      render: (row) => (
        <span className="font-semibold text-slate-500">{row.payment_status}</span>
      )
    }
  ];

  const paymentColumns: Column[] = [
    { key: "id", label: "Mã lớp", sortable: true, render: (row) => <span className="font-mono text-slate-400">#{row.id}</span> },
    { key: "tutor_name", label: "Gia sư", sortable: true },
    { key: "student_name", label: "Học viên", sortable: true },
    { 
      key: "price_paid", 
      label: "Doanh thu giao dịch", 
      sortable: true,
      render: (row) => <span className="font-mono text-slate-650 dark:text-slate-350">{formatVND(row.price_paid)}</span>
    },
    { 
      key: "commission_percent", 
      label: "Tỉ lệ", 
      sortable: true,
      render: (row) => <span className="font-mono text-slate-500">{row.commission_percent}%</span>
    },
    { 
      key: "commission_amount", 
      label: "Hoa hồng thực thu", 
      sortable: true,
      render: (row) => <span className="font-mono font-bold text-rose-600 dark:text-rose-450">{formatVND(row.commission_amount)}</span>
    },
    { 
      key: "created_at", 
      label: "Ngày thanh toán", 
      sortable: true,
      render: (row) => <span>{new Date(row.created_at).toLocaleDateString("vi-VN")}</span>
    }
  ];

  const escrowColumns: Column[] = [
    { key: "id", label: "Mã lớp", sortable: true, render: (row) => <span className="font-mono text-slate-400">#{row.id}</span> },
    { key: "tutor_name", label: "Gia sư", sortable: true },
    { key: "student_name", label: "Học viên", sortable: true },
    {
      key: "price_paid",
      label: "Doanh thu",
      sortable: true,
      render: (row) => <span className="font-mono font-semibold">{formatVND(row.price_paid)}</span>
    },
    {
      key: "commission_amount",
      label: "Hoa hồng",
      sortable: true,
      render: (row) => <span className="font-mono text-rose-600 font-semibold">{formatVND(row.commission_amount || 0)}</span>
    },
    {
      key: "tutor_earning",
      label: "Trả gia sư",
      sortable: true,
      render: (row) => <span className="font-mono text-emerald-600 font-bold">{formatVND(row.tutor_earning || 0)}</span>
    },
    {
      key: "escrow_release_date",
      label: "Tự mở giam",
      sortable: true,
      render: (row) => row.escrow_release_date ? <span>{new Date(row.escrow_release_date).toLocaleString("vi-VN")}</span> : <span className="text-slate-400">-</span>
    },
    {
      key: "actions",
      label: "Thao tác",
      sortable: false,
      render: (row) => (
        <button
          type="button"
          disabled={releasingEscrowId === row.id}
          onClick={() => {
            setEscrowNoteTarget(row.id);
            setEscrowAdminNote("");
          }}
          className="rounded bg-emerald-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {releasingEscrowId === row.id ? "Đang trả..." : "Duyệt trả ví"}
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Sub Menu tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2">
        <button
          onClick={() => setAdminTab("dashboard")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "dashboard" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          📊 Tổng Quan Dashboard
        </button>

        <button
          onClick={() => setAdminTab("subjects")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "subjects" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          📚 Môn Học
        </button>

        <button
          onClick={() => setAdminTab("tutors")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "tutors" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          👩‍🏫 Duyệt Giáo Viên ({pendingTutors.length})
        </button>

        <button
          onClick={() => setAdminTab("pending_docs")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "pending_docs" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          📁 Duyệt Tài Liệu ({pendingDocs.length})
        </button>

        <button
          onClick={() => setAdminTab("news_crud")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "news_crud" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          📰 Quản Lý Tin Tức
        </button>

        <button
          onClick={() => setAdminTab("notifications")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "notifications" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Thông báo
        </button>

        <button
          onClick={() => setAdminTab("escrow")}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "escrow" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Giữ tiền
        </button>

        <button
          onClick={() => {
            setAdminTab("monitor");
            fetchSystemStats();
            fetchSystemLogs();
          }}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "monitor" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          🖥️ Hệ Thống Logs
        </button>

        <button
          onClick={() => {
            setAdminTab("users");
            fetchSystemUsers();
          }}
          className={`pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${
            adminTab === "users" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          👥 Người Dùng
        </button>
      </div>

      {/* Sub-tab: Thống kê Dashboard */}
      {adminTab === "dashboard" && (
        <div className="space-y-6">
          {loadingDashboard ? (
            <div className="text-center py-10 text-xs font-semibold text-slate-400">⌛ Đang tải dữ liệu thống kê...</div>
          ) : !dashboardData ? (
            <div className="text-center py-10 text-xs text-rose-500 font-semibold">❌ Không thể tải dữ liệu thống kê từ hệ thống.</div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Metric 1 */}
                <div
                  onClick={() => setActivePopup("tutors")}
                  className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">👨‍🏫 Gia sư/Tutors</div>
                  <div className="mt-2 text-2xl font-black text-[#13519c] dark:text-blue-400">
                    {dashboardData.summary.totalTutors}
                  </div>
                  <div className="text-[8px] text-slate-400 mt-1">Bấm xem chi tiết 🔍</div>
                </div>

                {/* Metric 2 */}
                <div
                  onClick={() => setActivePopup("students")}
                  className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">👥 Học sinh/Sinh viên</div>
                  <div className="mt-2 text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {dashboardData.summary.totalStudents}
                  </div>
                  <div className="text-[8px] text-slate-400 mt-1">Bấm xem chi tiết 🔍</div>
                </div>

                {/* Metric 3 */}
                <div
                  onClick={() => setActivePopup("appointments")}
                  className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">📅 Lớp học/Lịch hẹn</div>
                  <div className="mt-2 text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    {dashboardData.summary.totalAppointments}
                  </div>
                  <div className="text-[8px] text-slate-400 mt-1">Bấm xem chi tiết 🔍</div>
                </div>

                {/* Metric 4 */}
                <div
                  onClick={() => setActivePopup("payments")}
                  className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left col-span-1"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">💳 Doanh thu ví</div>
                  <div className="mt-2 text-lg font-black text-amber-600 dark:text-amber-400 truncate">
                    {formatVND(dashboardData.summary.totalRevenue)}
                  </div>
                  <div className="text-[8px] text-slate-400 mt-1">Bấm xem chi tiết 🔍</div>
                </div>

                {/* Metric 5 */}
                <div
                  onClick={() => setActivePopup("payments")}
                  className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left col-span-1"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">🤝 Hoa hồng hệ thống</div>
                  <div className="mt-2 text-lg font-black text-rose-600 dark:text-rose-450 truncate">
                    {formatVND(dashboardData.summary.totalCommission)}
                  </div>
                  <div className="text-[8px] text-slate-400 mt-1">Bấm xem chi tiết 🔍</div>
                </div>
              </div>

              {/* Quick Summary Charts/Info */}
              <div className="bg-slate-50 dark:bg-slate-900/40 p-4 border border-slate-200/60 dark:border-slate-800 rounded-2xl text-left text-xs leading-relaxed">
                <span className="font-bold text-slate-600 dark:text-slate-350 block mb-1">💡 Hướng dẫn thống kê:</span>
                <p className="text-slate-500">
                  Dashboard cung cấp số liệu tổng quan trực tiếp từ hệ thống. Các giá trị Doanh thu và Hoa hồng được tính toán dựa trên các lịch hẹn đã thanh toán và đang được nắm giữ (Holding/Released).
                  Vui lòng bấm trực tiếp vào các thẻ số liệu phía trên để hiển thị bảng dữ liệu chi tiết tương ứng cùng tính năng tìm kiếm, phân trang và sắp xếp.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-tab: Subjects CRUD */}
      {adminTab === "subjects" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left">
          <form onSubmit={handleAddOrEditSubject} className="flex gap-2">
            <input
              type="text"
              placeholder="Nhập tên môn học..."
              value={subjectNameInput}
              onChange={(e) => setSubjectNameInput(e.target.value)}
              className="flex-1 h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#13519c] text-white text-xs font-semibold px-4 rounded-lg cursor-pointer hover:bg-blue-800 transition"
            >
              Lưu môn
            </button>
          </form>

          <KntechDataTable
            columns={subjectColumns}
            data={dbSubjects}
            searchPlaceholder="Tìm kiếm môn học..."
          />
        </div>
      )}

      {/* Sub-tab: Document approval */}
      {adminTab === "pending_docs" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-left">
          <h3 className="font-semibold text-sm">Tài liệu chờ duyệt</h3>
          {loadingPendingDocs ? (
            <div>Đang tải tài liệu...</div>
          ) : pendingDocs.length === 0 ? (
            <div className="text-slate-400 text-center py-4">Không có tài liệu nào chờ phê duyệt.</div>
          ) : (
            <div className="space-y-4">
              {pendingDocs.map((doc) => (
                <div key={doc.id} className="p-3 border dark:border-slate-800 rounded-lg bg-slate-50/40 flex justify-between items-center">
                  <div>
                    <h4
                      onClick={() => setPreviewDoc({ title: doc.title, file_url: doc.file_url })}
                      className="font-semibold text-[#13519c] dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1"
                      title="Click để mở xem trước tài liệu"
                    >
                      {doc.title} 🔎
                    </h4>
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
                      className="bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer text-[10px] font-bold"
                    >
                      Phê duyệt
                    </button>
                    <button
                      onClick={() => handleDecideDocument(doc.id, "REJECTED")}
                      className="bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer text-[10px] font-bold"
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
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-xs text-left">
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

          <KntechDataTable
            columns={newsColumns}
            data={news}
            searchPlaceholder="Tìm kiếm tin tức..."
          />
        </div>
      )}

      {/* Sub-tab: Pending Tutors */}
      {adminTab === "tutors" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 border dark:border-slate-800 space-y-4 text-xs text-left">
          <h3 className="font-semibold text-sm">Gia sư cần duyệt hồ sơ</h3>
          {loadingPending ? (
            <div>Đang tải hồ sơ...</div>
          ) : pendingTutors.length === 0 ? (
            <div className="text-slate-400 text-center py-4">Không có gia sư nào đang chờ phê duyệt.</div>
          ) : (
            <div className="space-y-4">
              {pendingTutors.map((pt) => (
                <div key={pt.user_id} className="p-4 rounded-xl border dark:border-slate-800 bg-slate-50/40 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={getAvatarUrl(pt)}
                      alt="avatar"
                      className="h-9 w-9 rounded-full object-cover"
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
                    {pt.proposed_commission_percent !== null && pt.proposed_commission_percent !== undefined && (
                      <div className="col-span-2 text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/40 px-2 py-1 rounded">
                        🤝 Đề xuất deal chiết khấu hoa hồng: {pt.proposed_commission_percent}% (Hoa hồng hiện tại: {pt.commission_percent ?? 10}%)
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] p-2 bg-white dark:bg-slate-900 rounded border dark:border-slate-800 text-left">
                    <span className="font-semibold text-slate-500">Giới thiệu:</span> {pt.bio}
                  </div>

                  {pt.documents && pt.documents.length > 0 && (
                    <div className="space-y-1.5 border-t dark:border-slate-800 pt-2">
                      <span className="font-semibold text-slate-500 text-[9px] uppercase tracking-wider block text-left">
                        Minh chứng & CCCD 2 mặt đính kèm:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {pt.documents.map((d: any, idx: number) => {
                          const isImage = d.mime_type ? d.mime_type.startsWith("image/") : (d.url && /\.(png|jpe?g|webp|gif)$/i.test(d.url));
                          const isDoc = d.original_name ? /\.(docx?)$/i.test(d.original_name) : (d.url && /\.(docx?)$/i.test(d.url));
                          const fileUrl = d.url && d.url.startsWith("/") ? `http://localhost:5000${d.url}?token=${token}` : d.url;
                          return (
                            <div
                              key={idx}
                              className="space-y-1 bg-white dark:bg-slate-900 p-1.5 rounded border dark:border-slate-800"
                            >
                              <div className="flex justify-between items-center gap-1 mb-0.5">
                                <span className="text-[8px] font-bold uppercase text-slate-400 block truncate text-left">
                                  {d.doc_type === "CCCD_FRONT"
                                    ? "🪪 CCCD Mặt Trước"
                                    : d.doc_type === "CCCD_BACK"
                                    ? "🪪 CCCD Mặt Sau"
                                    : "🎓 Bằng Cấp / Thẻ SV"}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteTutorDoc(d.id)}
                                  className="text-[8px] text-red-500 hover:text-red-750 font-bold opacity-60 hover:opacity-100 transition cursor-pointer"
                                  title="Xóa tài liệu này"
                                >
                                  Xóa ✕
                                </button>
                              </div>
                              {isImage ? (
                                <div
                                  onClick={() => setPreviewDoc({ title: d.original_name || "Tài liệu", file_url: fileUrl })}
                                  className="block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-950 cursor-pointer"
                                >
                                  <img
                                    src={fileUrl}
                                    alt={d.doc_type}
                                    className="h-14 w-full object-cover rounded hover:scale-105 transition duration-200"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[7px] text-white font-bold">
                                    MỞ 🔎
                                  </div>
                                </div>
                              ) : (
                                <div
                                  onClick={() => setPreviewDoc({ title: d.original_name || "Tài liệu", file_url: fileUrl })}
                                  className="h-14 w-full bg-blue-50 dark:bg-slate-850 rounded flex flex-col items-center justify-center text-[#13519c] dark:text-blue-400 p-1 border border-dashed border-blue-200 cursor-pointer hover:bg-blue-100/50 dark:hover:bg-slate-800 transition duration-150"
                                  title="Click để mở xem trước tài liệu"
                                >
                                  <span className="text-base">📄</span>
                                  <span className="text-[7px] font-bold truncate max-w-full text-center px-1" title={d.original_name}>
                                    {d.original_name || "Tài liệu.docx"}
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 justify-end pt-2 border-t dark:border-slate-800">
                    <button
                      onClick={() => handleDecideTutor(pt.user_id, "APPROVED")}
                      className="bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-emerald-755 text-[10px] font-bold"
                    >
                      Duyệt hồ sơ
                    </button>
                    <button
                      onClick={() => setRejectingTutorId(pt.user_id)}
                      className="bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-rose-755 text-[10px] font-bold"
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

      {/* Sub-tab: Notifications */}
      {adminTab === "notifications" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left">
          <div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Gửi thông báo từ admin</h3>
            <p className="text-xs text-slate-500 mt-1">Gửi thông báo tới toàn bộ hệ thống hoặc theo nhóm vai trò.</p>
          </div>

          <form onSubmit={handleSendAdminNotification} className="grid gap-3 max-w-2xl">
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Nhóm nhận</label>
              <select
                value={adminNotificationForm.role}
                onChange={(e) => setAdminNotificationForm({ ...adminNotificationForm, role: e.target.value })}
                className="h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none"
              >
                <option value="ALL">Tất cả người dùng</option>
                <option value="STUDENT">Học sinh / phụ huynh</option>
                <option value="TUTOR">Gia sư</option>
                <option value="ADMIN">Quản trị viên</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Tiêu đề</label>
              <input
                value={adminNotificationForm.title}
                onChange={(e) => setAdminNotificationForm({ ...adminNotificationForm, title: e.target.value })}
                className="h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none"
                placeholder="Ví dụ: Cập nhật lịch bảo trì hệ thống"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Nội dung</label>
              <textarea
                value={adminNotificationForm.body}
                onChange={(e) => setAdminNotificationForm({ ...adminNotificationForm, body: e.target.value })}
                className="min-h-28 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold focus:outline-none resize-y"
                placeholder="Nhập nội dung thông báo gửi tới người dùng..."
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Đường dẫn khi bấm</label>
              <input
                value={adminNotificationForm.linkUrl}
                onChange={(e) => setAdminNotificationForm({ ...adminNotificationForm, linkUrl: e.target.value })}
                className="h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none"
                placeholder="/?tab=news"
              />
            </div>

            <button
              type="submit"
              disabled={sendingAdminNotification}
              className="h-10 rounded-lg bg-[#13519c] text-white text-xs font-bold hover:bg-blue-800 disabled:opacity-50"
            >
              {sendingAdminNotification ? "Đang gửi..." : "Gửi thông báo"}
            </button>
          </form>
        </div>
      )}

      {/* Sub-tab: Escrow holding management */}
      {adminTab === "escrow" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Quản lý tiền giam</h3>
              <p className="text-xs text-slate-500 mt-1">Các khoản đã thanh toán đang giữ 3 ngày trước khi vào ví khả dụng của gia sư.</p>
            </div>
            <button
              type="button"
              onClick={fetchEscrowAppointments}
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Tải lại
            </button>
          </div>

          {loadingEscrow ? (
            <div className="py-8 text-center text-xs font-semibold text-slate-400">Đang tải danh sách tiền giam...</div>
          ) : escrowAppointments.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">Không có khoản tiền nào đang bị giam.</div>
          ) : (
            <KntechDataTable
              columns={escrowColumns}
              data={escrowAppointments}
              searchPlaceholder="Tìm theo mã lớp, gia sư, học viên..."
            />
          )}
          {escrowToast && (
            <div className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
              escrowToast.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}>
              {escrowToast.message}
            </div>
          )}
        </div>
      )}

      {/* Sub-tab: Monitor system logs */}
      {adminTab === "monitor" && (
        <div className="space-y-4 text-xs text-left">
          {/* Performance metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl">
              <div className="text-[10px] uppercase text-slate-400">Bộ nhớ RAM</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {systemStats.memory.used} / {systemStats.memory.total}
                </div>
              )}
            </div>
            <div className="bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl">
              <div className="text-[10px] uppercase text-slate-400">Tải CPU</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">{systemStats.cpu.loadAvg}</div>
              )}
            </div>
            <div className="bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl">
              <div className="text-[10px] uppercase text-slate-400">Thành viên hệ thống</div>
              {systemStats && (
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {systemStats.stats.users} Users
                </div>
              )}
            </div>
          </div>

          {/* Logs list */}
          <div className="bg-white dark:bg-[#111827] p-4 border dark:border-slate-800 rounded-xl space-y-3">
            <div className="flex justify-between items-center font-semibold">
              <span>Lịch sử log hành vi & request API</span>
              <button
                onClick={() => {
                  fetchSystemLogs();
                  fetchSystemStats();
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Tải lại
              </button>
            </div>

            <KntechDataTable
              columns={logColumns}
              data={systemLogs}
              searchPlaceholder="Tìm kiếm nhật ký logs..."
            />
          </div>
        </div>
      )}

      {/* Sub-tab: Users management */}
      {adminTab === "users" && (
        <div className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
              👥 Danh sách tài khoản người dùng
            </h3>
            <button
              onClick={fetchSystemUsers}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition inline-flex items-center gap-1 cursor-pointer"
            >
              Làm mới
            </button>
          </div>

          <KntechDataTable
            columns={userColumns}
            data={systemUsers}
            searchPlaceholder="Tìm kiếm tài khoản..."
          />
        </div>
      )}

      {/* DETAIL POPUP TABLE OVERLAYS */}
      {activePopup && dashboardData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-2xl border dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b dark:border-slate-800 mb-4">
              <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider text-left">
                {activePopup === "tutors" && "🔍 CHI TIẾT DANH SÁCH GIA SƯ"}
                {activePopup === "students" && "🔍 CHI TIẾT DANH SÁCH HỌC SINH / PHỤ HUYNH"}
                {activePopup === "appointments" && "🔍 CHI TIẾT DANH SÁCH LỚP HỌC / LỊCH HẸN"}
                {activePopup === "payments" && "🔍 CHI TIẾT THỐNG KÊ DOANH THU & HOA HỒNG"}
              </h3>
              <button
                onClick={() => setActivePopup(null)}
                className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer font-bold text-xs"
              >
                ✕
              </button>
            </div>
            
            <div className="mt-2 text-xs">
              {activePopup === "tutors" && (
                <KntechDataTable
                  columns={tutorColumns}
                  data={dashboardData.tutors || []}
                  searchPlaceholder="Tìm kiếm gia sư..."
                />
              )}
              {activePopup === "students" && (
                <KntechDataTable
                  columns={studentColumns}
                  data={dashboardData.students || []}
                  searchPlaceholder="Tìm kiếm học sinh..."
                />
              )}
              {activePopup === "appointments" && (
                <KntechDataTable
                  columns={appointmentColumns}
                  data={dashboardData.appointments || []}
                  searchPlaceholder="Tìm kiếm lịch hẹn..."
                />
              )}
              {activePopup === "payments" && (
                <KntechDataTable
                  columns={paymentColumns}
                  data={dashboardData.payments || []}
                  searchPlaceholder="Tìm kiếm doanh thu giao dịch..."
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW OVERLAY MODAL */}
      {previewImageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setPreviewImageUrl(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden p-2 shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreviewImageUrl(null)}
              className="absolute top-4 right-4 h-9 w-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition z-10 border-none"
              title="Đóng"
            >
              ✕
            </button>
            <img
              src={previewImageUrl}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {escrowNoteTarget && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-[#111827]">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Duyệt trả tiền giam</h3>
            <p className="mt-1 text-xs text-slate-500">
              Khoản tiền sẽ được chuyển từ trạng thái giam sang ví khả dụng của gia sư ngay lập tức.
            </p>
            <label className="mt-4 block text-[10px] font-bold uppercase text-slate-400">Ghi chú admin</label>
            <textarea
              value={escrowAdminNote}
              onChange={(e) => setEscrowAdminNote(e.target.value)}
              className="mt-1 min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-[#13519c] dark:border-slate-800 dark:bg-slate-900"
              placeholder="Có thể để trống..."
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setEscrowNoteTarget(null);
                  setEscrowAdminNote("");
                }}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300"
              >
                Hủy
              </button>
              <button
                type="button"
                disabled={releasingEscrowId === escrowNoteTarget}
                onClick={() => handleReleaseEscrow(escrowNoteTarget, escrowAdminNote.trim())}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                {releasingEscrowId === escrowNoteTarget ? "Đang duyệt..." : "Duyệt trả ví"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
