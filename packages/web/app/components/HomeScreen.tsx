"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import AuthModal from "./AuthModal";
import { IconSearch, IconBell, IconWallet, IconHome, IconBriefcase, IconTag, IconUser, IconGraduationCap, IconNewspaper, IconChevronRight, IconUpload, IconDownload, IconBook, IconZap, IconStar } from "./icons";
import { CustomAlert } from "./CustomAlert";
import MessengerChat from "./MessengerChat";
import RichTextEditor from "./RichTextEditor";

import HomeTab from "./tabs/HomeTab";
import CoursesTab from "./tabs/CoursesTab";
import DocumentsTab from "./tabs/DocumentsTab";
import NewsTab from "./tabs/NewsTab";
import MyCoursesTab from "./tabs/MyCoursesTab";
import BookingsTab from "./tabs/BookingsTab";
import WalletTab from "./tabs/WalletTab";
import AdminTab from "./tabs/AdminTab";
import ProfileTab from "./tabs/ProfileTab";

import BookingModal from "./modals/BookingModal";
import PaymentModal from "./modals/PaymentModal";
import ClassroomView from "./modals/ClassroomView";
import UploadDocModal from "./modals/UploadDocModal";
import RejectTutorModal from "./modals/RejectTutorModal";
import AdminEditUserModal from "./modals/AdminEditUserModal";
import TutorDetailModal from "./modals/TutorDetailModal";
import DocDetailModal from "./modals/DocDetailModal";
import TutorProfileModal from "./modals/TutorProfileModal";
import DocumentPreviewModal from "./modals/DocumentPreviewModal";
import NewsModal from "./modals/NewsModal";

type TabKey = "home" | "courses" | "my_courses" | "documents" | "news" | "bookings" | "wallet" | "profile" | "notifications" | "admin";

type Tutor = {
  user_id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  bio: string | null;
  school: string | null;
  major: string | null;
  year_of_study: string | null;
  hourly_rate: string;
  subjects_to_teach: string[];
  is_verified?: string;
  documents?: any[];
  card_gradient?: string;
};

type Appointment = {
  id: string;
  student_id: string;
  tutor_id: string;
  start_time: string;
  end_time: string;
  price_paid: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "DONE";
  payment_status: "UNPAID" | "HOLDING" | "RELEASED" | "REFUNDED" | "FAILED";
  live_room_code: string | null;
  live_room_url: string | null;
  tutor_name?: string;
  student_name?: string;
};

type PaymentDetails = {
  paymentId: number;
  appointmentId: string;
  amount: number;
  description: string;
  qrUrl: string;
  accountName: string | null;
  bankCode: string;
  accountNumber: string;
};

type Subject = {
  id: number;
  name: string;
  created_at: string;
};

type SystemUser = {
  id: string;
  full_name: string;
  username: string | null;
  email: string;
  role: "STUDENT" | "TUTOR" | "ADMIN";
  phone: string | null;
  avatar_url: string | null;
  status: "ACTIVE" | "BANNED";
  created_at: string;
};

type SystemLog = {
  id: number;
  user_id: string | null;
  action: string;
  details: string | null;
  ip: string | null;
  created_at: string;
};

type SystemStats = {
  memory: {
    total: string;
    used: string;
    percentage: string;
  };
  cpu: {
    loadAvg: string;
    cores: number;
  };
  stats: {
    users: number;
    tutors: number;
    appointments: number;
  };
};

type NewsItem = {
  id: number;
  title: string;
  summary: string | null;
  content: string;
  thumbnail_url: string | null;
  category: string;
  created_at: string;
};

type DocumentItem = {
  id: number;
  title: string;
  file_url: string;
  grade_tag: string;
  type_tag: string;
  subject_tag: string;
  uploader_id: string;
  uploader_name: string;
  is_approved: "PENDING" | "APPROVED" | "REJECTED";
  download_count: number;
  created_at: string;
};

type CommunityPost = {
  id: number;
  author: string;
  avatarSeed: string;
  content: string;
  timeAgo: string;
  likes: number;
  likedByMe: boolean;
  comments: { author: string; text: string }[];
};

type NotificationItem = {
  id: number;
  type: string;
  title: string;
  body: string;
  link_url: string | null;
  entity_type: string | null;
  entity_id: string | null;
  metadata?: Record<string, any> | null;
  is_read: boolean;
  created_at: string;
};

// ===== MOCK DATA (fallback khi API rỗng) =====
const MOCK_TUTORS: Tutor[] = [
  { user_id: "m1", full_name: "Nguyễn Minh Khoa", email: "khoa@gmail.com", avatar_url: null, bio: "Sinh viên năm 4 ĐH Bách Khoa, 3 năm kinh nghiệm dạy kèm Toán và Lý. Phương pháp từ cơ bản đến nâng cao, kết quả thực tế.", school: "ĐH Bách Khoa HN", major: "Kỹ thuật Điện", year_of_study: "Sinh viên năm 4", hourly_rate: "180000", subjects_to_teach: ["Toán", "Lý"] },
  { user_id: "m2", full_name: "Trần Thị Thu Hương", email: "huong@gmail.com", avatar_url: null, bio: "GV Ngữ Văn 8 năm kinh nghiệm, chuyên luyện thi ĐH khối C/D. Tỷ lệ đỗ đại học cao.", school: "THPT Chu Văn An", major: "Sư Phạm Văn", year_of_study: "Đã tốt nghiệp", hourly_rate: "200000", subjects_to_teach: ["Văn", "Tiếng Anh"] },
  { user_id: "m3", full_name: "Lê Văn Đức", email: "duc@gmail.com", avatar_url: null, bio: "Thạc sĩ Hóa học ĐH KHTN, chuyên Hóa hữu cơ và vô cơ lớp 10-12, luyện thi THPT QG.", school: "ĐH KHTN HN", major: "Hóa học", year_of_study: "Thạc sĩ", hourly_rate: "250000", subjects_to_teach: ["Hóa", "Lý"] },
  { user_id: "m4", full_name: "Phạm Thị Lan Anh", email: "lananh@gmail.com", avatar_url: null, bio: "GV Tiếng Anh, IELTS 8.0, dạy giao tiếp và luyện thi IELTS/TOEIC hiệu quả.", school: "ĐH Ngoại Ngữ ĐHQG", major: "Tiếng Anh", year_of_study: "Đã tốt nghiệp", hourly_rate: "220000", subjects_to_teach: ["Tiếng Anh"] },
  { user_id: "m5", full_name: "Vũ Hoàng Nam", email: "nam@gmail.com", avatar_url: null, bio: "Sinh viên xuất sắc ĐH Sư Phạm, chuyên dạy Toán THCS và Tiểu học. Kiên nhẫn, tận tâm.", school: "ĐH Sư Phạm HN", major: "Sư Phạm Toán", year_of_study: "Sinh viên năm 3", hourly_rate: "150000", subjects_to_teach: ["Toán"] },
  { user_id: "m6", full_name: "Ngô Thị Bích Ngân", email: "ngan@gmail.com", avatar_url: null, bio: "Cử nhân Sinh học, chuyên dạy Sinh học 10-12, ôn thi ĐH khối B.", school: "ĐH KHTN HN", major: "Sinh học", year_of_study: "Đã tốt nghiệp", hourly_rate: "160000", subjects_to_teach: ["Sinh học", "Hóa"] },
  { user_id: "m7", full_name: "Đinh Quang Huy", email: "huy@gmail.com", avatar_url: null, bio: "Kỹ sư CNTT ĐH FPT, dạy Tin học, Python/JS cho học sinh THPT. Dạy vui và thực tế.", school: "ĐH FPT", major: "CNTT", year_of_study: "Đã tốt nghiệp", hourly_rate: "200000", subjects_to_teach: ["Tin học", "Toán"] },
  { user_id: "m8", full_name: "Hoàng Minh Tú", email: "tu@gmail.com", avatar_url: null, bio: "Cựu HS giỏi Toán tỉnh, 2 năm kinh nghiệm dạy Toán và Tiếng Anh cấp Tiểu học.", school: "ĐH Kinh tế QD", major: "Kinh tế", year_of_study: "Sinh viên năm 3", hourly_rate: "130000", subjects_to_teach: ["Toán", "Tiếng Anh"] },
  { user_id: "m9", full_name: "Lương Thị Yến Nhi", email: "nhi@gmail.com", avatar_url: null, bio: "HS giỏi Văn cấp TP, dạy Ngữ văn và Lịch sử cấp THCS, THPT.", school: "ĐH SP TP.HCM", major: "Sư Phạm Văn", year_of_study: "Sinh viên năm 2", hourly_rate: "120000", subjects_to_teach: ["Văn"] },
  { user_id: "m10", full_name: "Trương Gia Bảo", email: "bao@gmail.com", avatar_url: null, bio: "Thạc sĩ Vật lý, từng dạy trường chuyên. Chuyên ôn thi THPT QG và ĐH khối A.", school: "ĐH KHTN TP.HCM", major: "Vật lý", year_of_study: "Thạc sĩ", hourly_rate: "280000", subjects_to_teach: ["Lý", "Toán"] },
];

const MOCK_NEWS: NewsItem[] = [
  { id: 101, title: "Bộ GD-ĐT công bố định dạng đề thi tốt nghiệp THPT 2026", summary: "Năm 2026, đề thi có nhiều thay đổi quan trọng về cấu trúc.", content: "Bộ GD-ĐT vừa công bố định dạng đề thi mới...", thumbnail_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=80", category: "Thông báo", created_at: "2026-06-10T08:00:00Z" },
  { id: 102, title: "Mẹo ôn thi Toán hiệu quả trong 30 ngày cuối", summary: "Bí quyết từ các thầy cô để chinh phục Toán đạt điểm cao.", content: "Với 30 ngày còn lại...", thumbnail_url: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=300&q=80", category: "Toán", created_at: "2026-06-09T10:00:00Z" },
  { id: 103, title: "Học Tiếng Anh theo phương pháp mới: Hiệu quả hơn 3 lần", summary: "Học theo context giúp nhớ nhanh và lâu hơn.", content: "Nghiên cứu mới nhất...", thumbnail_url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&q=80", category: "Tiếng Anh", created_at: "2026-06-08T09:00:00Z" },
  { id: 104, title: "Top 10 trường đại học tốt nhất Việt Nam 2026", summary: "Bảng xếp hạng các trường theo tiêu chí chất lượng đào tạo.", content: "Danh sách top 10...", thumbnail_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&q=80", category: "Đại học", created_at: "2026-06-07T08:30:00Z" },
  { id: 105, title: "Hóa học hữu cơ - Những lưu ý quan trọng khi ôn thi", summary: "Tổng hợp các điểm cần nhớ thường xuất hiện trong đề thi.", content: "Phần Hóa hữu cơ chiếm 60%...", thumbnail_url: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=300&q=80", category: "Hóa", created_at: "2026-06-06T07:00:00Z" },
  { id: 106, title: "Gia sư trực tuyến vs gia sư tại nhà: Chọn nào?", summary: "Phân tích ưu nhược điểm của hai hình thức học kèm.", content: "Học trực tuyến ngày càng phổ biến...", thumbnail_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", category: "Tư vấn", created_at: "2026-06-05T11:00:00Z" },
  { id: 107, title: "Vật lý - Công thức cần nhớ trước kỳ thi THPT 2026", summary: "Tổng hợp đầy đủ các công thức Vật lý cần thiết.", content: "Đây là bộ công thức Vật lý quan trọng...", thumbnail_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80", category: "Lý", created_at: "2026-06-04T08:00:00Z" },
  { id: 108, title: "Lộ trình học IELTS từ 0 lên 7.0 trong 6 tháng", summary: "Kế hoạch chi tiết để đạt band 7.0 IELTS.", content: "Với lộ trình đúng đắn...", thumbnail_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&q=80", category: "Tiếng Anh", created_at: "2026-06-03T09:30:00Z" },
  { id: 109, title: "Sinh học tế bào - Tổng ôn kiến thức trọng tâm", summary: "Kiến thức Sinh học tế bào thường xuất hiện trong đề thi.", content: "Sinh học tế bào là căn bản...", thumbnail_url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&q=80", category: "Sinh học", created_at: "2026-06-02T10:00:00Z" },
  { id: 110, title: "5 sai lầm phổ biến khi học Ngữ Văn và cách khắc phục", summary: "Những lỗi thường gặp trong bài văn và cách cải thiện.", content: "Nhiều học sinh mắc các sai lầm...", thumbnail_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80", category: "Văn", created_at: "2026-06-01T08:00:00Z" },
];

const MOCK_DOCUMENTS: DocumentItem[] = [
  { id: 101, title: "Đề thi thử Toán THPT QG 2026 - Đề số 1", file_url: "#", grade_tag: "Lớp 12", type_tag: "Tài liệu ôn thi", subject_tag: "Toán", uploader_id: "admin", uploader_name: "Admin GiasuTop", is_approved: "APPROVED", download_count: 247, created_at: "2026-06-01T00:00:00Z" },
  { id: 102, title: "Chuyên đề Hóa Hữu cơ ôn thi THPT 2026", file_url: "#", grade_tag: "Lớp 12", type_tag: "Tài liệu", subject_tag: "Hóa", uploader_id: "m3", uploader_name: "GS. Lê Văn Đức", is_approved: "APPROVED", download_count: 189, created_at: "2026-05-30T00:00:00Z" },
  { id: 103, title: "Đề kiểm tra giữa kỳ 1 Vật Lý lớp 11", file_url: "#", grade_tag: "Lớp 11", type_tag: "Giữa kì 1", subject_tag: "Lý", uploader_id: "m10", uploader_name: "Thầy Trương Gia Bảo", is_approved: "APPROVED", download_count: 134, created_at: "2026-05-28T00:00:00Z" },
  { id: 104, title: "100 câu trắc nghiệm Tiếng Anh có đáp án chi tiết", file_url: "#", grade_tag: "Lớp 12", type_tag: "Ôn tập", subject_tag: "Tiếng Anh", uploader_id: "m4", uploader_name: "Cô Phạm Lan Anh", is_approved: "APPROVED", download_count: 312, created_at: "2026-05-25T00:00:00Z" },
  { id: 105, title: "Bộ đề Ngữ Văn ôn thi học kỳ 2 lớp 10", file_url: "#", grade_tag: "Lớp 10", type_tag: "Cuối kì 2", subject_tag: "Văn", uploader_id: "m2", uploader_name: "Cô Thu Hương", is_approved: "APPROVED", download_count: 98, created_at: "2026-05-22T00:00:00Z" },
  { id: 106, title: "Đề thi cuối kỳ 2 Sinh Học lớp 12 - 5 năm", file_url: "#", grade_tag: "Lớp 12", type_tag: "Cuối kì 2", subject_tag: "Sinh học", uploader_id: "m6", uploader_name: "GS. Ngô Bích Ngân", is_approved: "APPROVED", download_count: 156, created_at: "2026-05-20T00:00:00Z" },
  { id: 107, title: "Toán đại số lớp 9 - Ôn thi vào 10", file_url: "#", grade_tag: "Lớp 9", type_tag: "Tài liệu", subject_tag: "Toán", uploader_id: "m5", uploader_name: "Thầy Vũ Hoàng Nam", is_approved: "APPROVED", download_count: 201, created_at: "2026-05-18T00:00:00Z" },
  { id: 108, title: "Sách bài tập Hóa học 11 có lời giải chi tiết", file_url: "#", grade_tag: "Lớp 11", type_tag: "Sách", subject_tag: "Hóa", uploader_id: "admin", uploader_name: "Admin GiasuTop", is_approved: "APPROVED", download_count: 178, created_at: "2026-05-15T00:00:00Z" },
  { id: 109, title: "Đề thi thử Vật Lý các trường THPT Hà Nội", file_url: "#", grade_tag: "Lớp 12", type_tag: "Tài liệu ôn thi", subject_tag: "Lý", uploader_id: "m1", uploader_name: "Thầy Nguyễn Minh Khoa", is_approved: "APPROVED", download_count: 267, created_at: "2026-05-12T00:00:00Z" },
  { id: 110, title: "Grammar & Vocabulary IELTS 6.5 - Tổng hợp", file_url: "#", grade_tag: "Lớp 12", type_tag: "Tài liệu", subject_tag: "Tiếng Anh", uploader_id: "m4", uploader_name: "Cô Phạm Lan Anh", is_approved: "APPROVED", download_count: 389, created_at: "2026-05-10T00:00:00Z" },
];

const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  { id: 1, author: "Phụ huynh Nguyễn Văn Minh", avatarSeed: "parent1", content: "Con tôi đang học lớp 11, yếu Toán. Ai có thể recommend gia sư Toán giỏi ở HN không ạ? Cần buổi tối và cuối tuần 🙏", timeAgo: "2 giờ trước", likes: 14, likedByMe: false, comments: [{ author: "GS Minh Khoa", text: "Bác xem hồ sơ của cháu nhé! Cháu dạy Toán lớp 10-12." }, { author: "Admin GiasuTop", text: "Bác vào tab 'Tìm gia sư' để lọc theo lớp và môn học ạ!" }] },
  { id: 2, author: "Gia sư Thu Hương", avatarSeed: "tutor2", content: "Học sinh thường sợ Văn vì không biết viết. Bí quyết là đọc nhiều và ghi chép ý hay. Bác nên khuyến khích con đọc sách mỗi ngày 📚", timeAgo: "4 giờ trước", likes: 32, likedByMe: false, comments: [{ author: "Phụ huynh Hoa", text: "Cảm ơn cô chia sẻ! Con em cũng yếu văn lắm." }] },
  { id: 3, author: "Học sinh Trần Bảo Châu", avatarSeed: "student3", content: "Ai biết phương pháp học Hóa hữu cơ hiệu quả không ạ? Em cứ học xong lại quên, nhất là phản ứng Ankin và Anken 😢", timeAgo: "5 giờ trước", likes: 8, likedByMe: false, comments: [{ author: "GS Lê Văn Đức", text: "Em học theo sơ đồ tư duy và so sánh cấu trúc nhé!" }] },
  { id: 4, author: "Phụ huynh Lê Thị Hạnh", avatarSeed: "parent4", content: "Đã dùngGiasuTop3 tuần, con học với cô Lan Anh rất tiến bộ. Điểm Tiếng Anh từ 5 lên 7.5 rồi 🎉 Rất recommend platform này!", timeAgo: "8 giờ trước", likes: 47, likedByMe: false, comments: [{ author: "Admin GiasuTop", text: "Cảm ơn bác đã tin tưởng GiasuTop! 🌟" }] },
  { id: 5, author: "GS Vũ Hoàng Nam", avatarSeed: "tutor5", content: "Còn 2 slot trống buổi tối T3, T5, T7. Dạy Toán THCS và Tiểu học. 150k/giờ. Phương pháp kiên nhẫn, bám sát sức học. DM nếu cần 🙋", timeAgo: "1 ngày trước", likes: 21, likedByMe: false, comments: [{ author: "PH Tuấn", text: "Thầy có dạy lớp 7 không ạ?" }] },
  { id: 6, author: "HS Đỗ Quốc Hùng", avatarSeed: "student6", content: "Hỏi thật: học online có tốt bằng offline không? Em đang phân vân cho kỳ ôn thi ĐH 🤔", timeAgo: "1 ngày trước", likes: 15, likedByMe: false, comments: [{ author: "GS Minh Khoa", text: "Tùy vào kỷ luật của em nhé! Online tiện hơn nhưng cần tự giác cao." }] },
  { id: 7, author: "Admin GiasuTop", avatarSeed: "admin7", content: "📢 Tính năng MỚI: Phòng học trực tuyến với bảng vẽ tương tác! Gia sư và học sinh cùng giải bài toán trực tiếp. Thử ngay! ✨", timeAgo: "2 ngày trước", likes: 56, likedByMe: false, comments: [{ author: "GS Lan Anh", text: "Cháu đang dùng với học sinh, rất tiện!" }] },
  { id: 8, author: "PH Trần Văn Phúc", avatarSeed: "parent8", content: "Con học THPT cần ôn khối A (Toán-Lý-Hóa). Ai giới thiệu gia sư được không ạ?", timeAgo: "2 ngày trước", likes: 9, likedByMe: false, comments: [{ author: "GS Lê Văn Đức", text: "Cháu dạy Lý và Hóa, còn Toán cháu giới thiệu bạn nhé!" }] },
  { id: 9, author: "GS Lê Văn Đức", avatarSeed: "tutor9", content: "TIP HỌC HÓA: Đừng học thuộc phản ứng. Hãy hiểu cấu trúc phân tử, từ đó suy ra phản ứng → giải được bài mới! 🧪", timeAgo: "3 ngày trước", likes: 38, likedByMe: false, comments: [{ author: "HS Châu", text: "Em sẽ thử cách này! Cảm ơn thầy!" }] },
  { id: 10, author: "HS Nguyễn Ngọc Linh", avatarSeed: "student10", content: "Chia sẻ lịch học: Sáng đọc lý thuyết 45', chiều làm bài 1h, tối ôn 30'. Mình cải thiện từ 6.5 → 8.0 sau 2 tháng! 💪", timeAgo: "3 ngày trước", likes: 29, likedByMe: false, comments: [{ author: "PH Hạnh", text: "Cảm ơn bạn! Cho con học theo lịch này!" }] },
];

const formatBackendError = (json: any): string => {
  if (json && json.issues && Array.isArray(json.issues)) {
    return json.issues.map((i: any) => {
      const field = i.path.join(".");
      const fieldMap: Record<string, string> = {
        email: "Email",
        username: "Tên đăng nhập",
        password: "Mật khẩu",
        fullName: "Họ và tên",
        role: "Vai trò",
        bio: "Giới thiệu bản thân",
        school: "Trường đào tạo",
        major: "Chuyên ngành",
        yearOfStudy: "Trình độ/Năm học",
        hourlyRate: "Học phí đề xuất",
        subjectsToTeach: "Môn học giảng dạy",
        cardGradient: "Màu sắc thẻ",
        commissionPercent: "Chiết khấu hoa hồng",
        title: "Tiêu đề tài liệu",
        file: "Tệp tài liệu",
        subjectTag: "Môn học",
        gradeTag: "Khối lớp",
        typeTag: "Phân loại",
        phone: "Số điện thoại",
        password_hash: "Mật khẩu",
        status: "Trạng thái",
      };
      const fieldName = fieldMap[field] || field;
      let errorMsg = i.message;
      if (errorMsg === "Required") {
        errorMsg = "không được để trống.";
      } else if (errorMsg.includes("at least")) {
        const match = errorMsg.match(/at least (\d+)/);
        const minLen = match ? match[1] : "2";
        errorMsg = `phải dài ít nhất ${minLen} ký tự.`;
      } else if (errorMsg.includes("Invalid email")) {
        errorMsg = "không đúng định dạng (ví dụ: email@gmail.com).";
      } else if (errorMsg.includes("Number must be")) {
        errorMsg = errorMsg.replace("Number must be", "Số phải");
      }
      return `• ${fieldName}: ${errorMsg}`;
    }).join("\n");
  }
  let msg = json?.message || "Đã xảy ra lỗi. Vui lòng kiểm tra lại.";
  if (msg === "Email already exists") {
    return "Email này đã được đăng ký trên hệ thống. Bác vui lòng chọn email khác.";
  }
  if (msg === "Username already exists") {
    return "Tên đăng nhập này đã được đăng ký. Bác vui lòng chọn tên đăng nhập khác.";
  }
  return msg;
};

export default function HomeScreen() {
  // Authentication states
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{
    id: string;
    email: string;
    fullName: string;
    role: string;
    phone?: string;
    avatar_url?: string;
    avatarUrl?: string;
    bio?: string;
    address?: string;
    dob?: string;
    age?: number;
  } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Avatar and Profile Completion states
  const [completeName, setCompleteName] = useState("");
  const [completePhone, setCompletePhone] = useState("");
  const [completeBio, setCompleteBio] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");
  const [completeDob, setCompleteDob] = useState("");
  const [completeAge, setCompleteAge] = useState("");
  const [completeAvatarFile, setCompleteAvatarFile] = useState<File | null>(null);
  const [completeAvatarPreview, setCompleteAvatarPreview] = useState("");
  const [submittingCompletion, setSubmittingCompletion] = useState(false);

  const getAvatarUrl = (u: any) => {
    if (!u) return "";
    const url = u.avatarUrl || u.avatar_url;
    if (!url) return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(u.email)}`;
    if (url.startsWith("/")) return `http://localhost:5000${url}`;
    return url;
  };

  const isProfileIncomplete = (u: any) => {
    if (!u) return false;
    if (u.role === "ADMIN") return false;
    return (
      !(u.fullName || u.full_name) ||
      !u.phone ||
      !(u.avatar_url || u.avatarUrl) ||
      !u.bio ||
      !u.address ||
      !u.dob ||
      !u.age
    );
  };
  const [authModalConfig, setAuthModalConfig] = useState<{ tab: "login" | "register"; role: "STUDENT" | "TUTOR" }>({
    tab: "login",
    role: "STUDENT",
  });
  const [tutorProfileModalOpen, setTutorProfileModalOpen] = useState(false);

  // Custom Alert states
  const [customAlertOpen, setCustomAlertOpen] = useState(false);
  const [customAlertType, setCustomAlertType] = useState<"success" | "warning" | "error" | "info">("success");
  const [customAlertTitle, setCustomAlertTitle] = useState("");
  const [customAlertMessage, setCustomAlertMessage] = useState("");
  const [customAlertImg, setCustomAlertImg] = useState<string | undefined>(undefined);

  // Banned state
  const [isBanned, setIsBanned] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  // Long term scheduling states
  const [tutorBookingType, setTutorBookingType] = useState<"SINGLE" | "LONG_TERM">("SINGLE");
  const [longTermSchedule, setLongTermSchedule] = useState<{ week1: string[]; week2: string[] }>({
    week1: ["Thứ 2", "Thứ 4", "Thứ 6"],
    week2: ["Thứ 2", "Thứ 4", "Thứ 6"],
  });
  const [longTermWeeks, setLongTermWeeks] = useState<number>(4);

  // Client-side file objects for uploading
  const [cccdFrontFile, setCccdFrontFile] = useState<File | null>(null);
  const [cccdBackFile, setCccdBackFile] = useState<File | null>(null);
  const [portraitFile, setPortraitFile] = useState<File | null>(null);
  const [certificatesFiles, setCertificatesFiles] = useState<FileList | null>(null);
  const [docFileToUpload, setDocFileToUpload] = useState<File | null>(null);

  const showKntechAlert = (type: "success" | "warning" | "error" | "info", title: string, message: string, imgUrl?: string) => {
    setCustomAlertType(type);
    setCustomAlertTitle(title);
    setCustomAlertMessage(message);
    setCustomAlertImg(imgUrl);
    setCustomAlertOpen(true);
  };

  const walletEntryTypeLabel = (entryType: string) => {
    const labels: Record<string, string> = {
      TOPUP: "Nạp tiền vào ví",
      BOOKING_PAYMENT: "Thanh toán học phí",
      HOLD: "Giam tiền lớp học",
      RELEASE: "Trả tiền vào ví khả dụng",
      REFUND: "Hoàn tiền",
      WITHDRAW_REQUEST: "Yêu cầu rút tiền",
      WITHDRAW_APPROVE: "Rút tiền đã duyệt",
      WITHDRAW_REJECT: "Rút tiền bị từ chối",
    };
    return labels[entryType] || entryType;
  };

  const [tutorProfileForm, setTutorProfileForm] = useState({
    bio: "",
    school: "",
    major: "",
    yearOfStudy: "Sinh viên năm 1",
    hourlyRate: "150000",
    subjectsToTeach: [] as string[],
    cardGradient: "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]",
  });

  const [tutorStatus, setTutorStatus] = useState<string | null>(null);
  const [tutorRejectReason, setTutorRejectReason] = useState<string | null>(null);
  const [verificationForm, setVerificationForm] = useState({
    cccdFront: "",
    cccdBack: "",
    certificate: "",
  });
  const [submittingVerification, setSubmittingVerification] = useState(false);

  const handleRegisterNotification = async () => {
    try {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        showKntechAlert("warning", "Không hỗ trợ", "Trình duyệt của bác không hỗ trợ nhận thông báo đẩy!");
        return;
      }

      // Register service worker
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered:', registration);

      // Request Permission
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        showKntechAlert("warning", "Bị từ chối", "Bác đã chặn quyền thông báo. Vui lòng bật lại trong cài đặt!");
        return;
      }

      showKntechAlert("success", "Đăng ký thành công!", "🔔 Bác đã cho phép ứng dụng gửi thông báo đẩy!");
    } catch (error: any) {
      console.error(error);
      showKntechAlert("error", "Lỗi đăng ký", error.message || "Không thể đăng ký nhận thông báo.");
    }
  };

  const handleTestNotification = async () => {
    try {
      if (!('serviceWorker' in navigator)) {
        showKntechAlert("warning", "Không hỗ trợ", "Trình duyệt không hỗ trợ Service Worker!");
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        showKntechAlert("warning", "Chưa cấp quyền", "Vui lòng cấp quyền nhận thông báo trước khi test!");
        return;
      }

      const registration = await navigator.serviceWorker.ready;

      // Send a simulated push event locally using registration.showNotification
      const options = {
        body: '🛡️GiasuTopAnti-Scam vừa phát hiện và chặn một liên kết giả mạo độc hại hướng tới ví tài khoản của bạn. An toàn là trên hết!',
        icon: 'https://api.dicebear.com/7.x/identicon/png?seed=KNTech',
        badge: 'https://api.dicebear.com/7.x/identicon/png?seed=KNTech&width=96&height=96',
        vibrate: [100, 50, 100],
        data: {
          url: '/'
        }
      };

      await registration.showNotification('Cảnh báo bảo mật từ GiasuTop!', options);
    } catch (error: any) {
      console.error(error);
      showKntechAlert("error", "Lỗi giả lập", error.message || "Lỗi khi kích hoạt thông báo.");
    }
  };

  const fetchTutorStatus = async () => {
    if (!token || !user || user.role !== "TUTOR") return;
    try {
      const res = await fetch("http://localhost:5000/api/tutors/me/status", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setTutorStatus(json.data.is_verified);
        setTutorRejectReason(json.data.reject_reason);

        // Pre-populate fields
        setTutorProfileForm({
          bio: json.data.bio || "",
          school: json.data.school || "",
          major: json.data.major || "",
          yearOfStudy: json.data.year_of_study || "Sinh viên năm 1",
          hourlyRate: json.data.hourly_rate ? String(Number(json.data.hourly_rate)) : "150000",
          subjectsToTeach: Array.isArray(json.data.subjects_to_teach) ? json.data.subjects_to_teach : [],
          cardGradient: json.data.card_gradient || "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]",
        });
        const currentRate = json.data.proposed_commission_percent !== null && json.data.proposed_commission_percent !== undefined
          ? json.data.proposed_commission_percent
          : (json.data.commission_percent || 10);
        setNewCommissionRate(String(currentRate));

        const docs = json.data.documents || [];
        const front = docs.find((d: any) => d.doc_type === "CCCD_FRONT")?.url || "";
        const back = docs.find((d: any) => d.doc_type === "CCCD_BACK")?.url || "";
        const cert = docs.find((d: any) => d.doc_type === "CERTIFICATE")?.url || "";
        setVerificationForm({ cccdFront: front, cccdBack: back, certificate: cert });
      }
    } catch (e) {
      console.error("Lỗi tải trạng thái gia sư:", e);
    }
  };

  // App navigation
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [previousTab, setPreviousTab] = useState<TabKey>("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<{ title: string; file_url: string } | null>(null);
  const [tutorProfileToView, setTutorProfileToView] = useState<Tutor | null>(null);

  // Core Data States
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [wallet, setWallet] = useState<{ available_balance: number; holding_balance: number }>({
    available_balance: 0,
    holding_balance: 0,
  });
  const [walletLedger, setWalletLedger] = useState<any[]>([]);
  const [walletWithdrawals, setWalletWithdrawals] = useState<any[]>([]);
  const [topupAmountInput, setTopupAmountInput] = useState("");
  const [withdrawAmountInput, setWithdrawAmountInput] = useState("");
  const [bankNoInput, setBankNoInput] = useState("");
  const [bankNameInput, setBankNameInput] = useState("");

  // Subjects, News, and Documents Lists
  const [subjectList, setSubjectList] = useState<string[]>(["Tất cả"]);
  const [dbSubjects, setDbSubjects] = useState<Subject[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("Tất cả");
  const [selectedGradeFilter, setSelectedGradeFilter] = useState("Tất cả");
  const [loadingTutors, setLoadingTutors] = useState(false);

  // Document Filtering States (Screenshot 4 style)
  const [docSearch, setDocSearch] = useState("");
  const [selectedDocGrade, setSelectedDocGrade] = useState("Tất cả");
  const [selectedDocSubject, setSelectedDocSubject] = useState("Tất cả");
  const [selectedDocType, setSelectedDocType] = useState("Tất cả");
  const [docSort, setDocSort] = useState<"newest" | "oldest" | "downloads" | "title">("newest");
  const [docPage, setDocPage] = useState(1);
  const [docPageSize, setDocPageSize] = useState(12);
  const [docTotal, setDocTotal] = useState(0);
  const [loadingDocuments, setLoadingDocuments] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [docUploadForm, setDocUploadForm] = useState({
    title: "",
    fileUrl: "",
    gradeTag: "Lớp 12",
    typeTag: "Tài liệu",
    subjectTag: "Toán",
  });

  // Interaction Modals/Overlays
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [viewingTutor, setViewingTutor] = useState<Tutor | null>(null);
  const [chatActivePartner, setChatActivePartner] = useState<any | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [chats, setChats] = useState<any[]>([]);
  const [globalChatInput, setGlobalChatInput] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingStartHour, setBookingStartHour] = useState("19:00");
  const [bookingDuration, setBookingDuration] = useState("2"); // hours
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Payment states
  const [payingAppt, setPayingAppt] = useState<Appointment | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [generatingQr, setGeneratingQr] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState<{
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    tone?: "primary" | "danger";
    onConfirm: () => void | Promise<void>;
  } | null>(null);

  // Classroom Simulation States
  const [activeClassroom, setActiveClassroom] = useState<Appointment | null>(null);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string; time: string }>>([]);
  const [chatInput, setChatInput] = useState("");

  // Floating Help widget & dynamic notification toast
  const [showSupportWidget, setShowSupportWidget] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | "unsupported">("default");

  // Canvas Drawing references
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const drawingColorRef = useRef("#dc2626");
  const profileAvatarInputRef = useRef<HTMLInputElement>(null);
  const completeAvatarInputRef = useRef<HTMLInputElement>(null);

  // Admin Dashboard Section States
  const [adminTab, setAdminTab] = useState<"dashboard" | "subjects" | "tutors" | "monitor" | "users" | "pending_docs" | "news_crud" | "notifications" | "escrow">("dashboard");

  // Admin -> Subject management states
  const [subjectNameInput, setSubjectNameInput] = useState("");
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  // Admin -> Tutor approval states
  const [pendingTutors, setPendingTutors] = useState<any[]>([]);
  const [loadingPending, setLoadingPending] = useState(false);
  const [adminRejectReason, setAdminRejectReason] = useState("");
  const [rejectingTutorId, setRejectingTutorId] = useState<string | null>(null);

  // Admin -> Monitor states
  const [systemStats, setSystemStats] = useState<SystemStats | null>(null);
  const [systemLogs, setSystemLogs] = useState<SystemLog[]>([]);
  const [loadingStats, setLoadingStats] = useState(false);
  const [loadingLogs, setLoadingLogs] = useState(false);

  // Admin -> User management states
  const [systemUsers, setSystemUsers] = useState<SystemUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [editingUser, setEditingUser] = useState<SystemUser | null>(null);
  const [userForm, setUserForm] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    role: "STUDENT" as "STUDENT" | "TUTOR" | "ADMIN",
    status: "ACTIVE" as "ACTIVE" | "BANNED",
    password: "",
  });

  // Admin -> Document approvals states
  const [pendingDocs, setPendingDocs] = useState<DocumentItem[]>([]);
  const [loadingPendingDocs, setLoadingPendingDocs] = useState(false);

  // Admin -> News CRUD states
  const [newsFormOpen, setNewsFormOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsForm, setNewsForm] = useState({
    title: "",
    summary: "",
    content: "",
    thumbnailUrl: "",
    category: "Toán",
  });

  const [adminNotificationForm, setAdminNotificationForm] = useState({
    title: "",
    body: "",
    linkUrl: "/",
    role: "ALL" as "ALL" | "STUDENT" | "TUTOR" | "ADMIN",
  });
  const [sendingAdminNotification, setSendingAdminNotification] = useState(false);

  // Countdown timer for Exam (Screenshot 1 right sidebar look)
  const [countdownText, setCountdownText] = useState("Còn 15 ngày 12 giờ 34 phút");

  // Consultation Contact form states
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phone: "",
    facebookLink: "",
    grade: "Lớp 12",
    subject: "Toán học",
    details: "",
  });

  // Community / home sub-tab states
  const [homeSubTab, setHomeSubTab] = useState<"feed" | "community">("feed");
  const [pendingCommissions, setPendingCommissions] = useState<any[]>([]);
  const [loadingCommissions, setLoadingCommissions] = useState(false);
  const [newCommissionRate, setNewCommissionRate] = useState("");
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(MOCK_COMMUNITY_POSTS);
  const [commentInputs, setCommentInputs] = useState<{ [id: number]: string }>({});
  const [newPostContent, setNewPostContent] = useState("");

  // iOS Add to Home Screen Prompt & welcome notification
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        || (navigator as any).standalone;

      if (isIOS && !isStandalone) {
        // Show the prompt after a short delay (2.5s)
        const timer = setTimeout(() => setShowInstallPrompt(true), 2500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Dynamic Exam Countdown setup
  useEffect(() => {
    const examDate = new Date("2026-06-25T08:00:00");
    const updateCountdown = () => {
      const diff = examDate.getTime() - new Date().getTime();
      if (diff <= 0) {
        setCountdownText("Kỳ thi đang diễn ra!");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      setCountdownText(`Còn ${days} ngày ${hours} giờ ${mins} phút`);
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Dynamic Data from backend
  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/news");
      const json = await res.json();
      if (json.success) {
        setNews(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải tin tức:", e);
    }
  };

  const fetchDocuments = async () => {
    setLoadingDocuments(true);
    try {
      const params = new URLSearchParams({
        grade: selectedDocGrade,
        subject: selectedDocSubject,
        type: selectedDocType,
        search: docSearch.trim(),
        sort: docSort,
        page: String(docPage),
        pageSize: String(docPageSize),
      });
      const res = await fetch(`http://localhost:5000/api/documents?${params.toString()}`);
      const json = await res.json();
      if (json.success) {
        setDocuments(json.data);
        setDocTotal(Number(json.meta?.pagination?.total || json.data.length || 0));
        if (json.meta?.pagination?.page && json.meta.pagination.page !== docPage) {
          setDocPage(json.meta.pagination.page);
        }
      }
    } catch (e) {
      console.error("Lỗi tải tài liệu:", e);
    } finally {
      setLoadingDocuments(false);
    }
  };

  const fetchChats = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/chats");
      const json = await res.json();
      if (json.success) {
        setChats(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải tin nhắn:", e);
    }
  };

  const sendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!globalChatInput.trim() || !token) return;
    try {
      const res = await fetch("http://localhost:5000/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: globalChatInput }),
      });
      const json = await res.json();
      if (json.success) {
        setGlobalChatInput("");
        fetchChats();
      } else {
        alert(json.message);
      }
    } catch (e) {
      console.error("Lỗi gửi tin nhắn:", e);
    }
  };

  useEffect(() => {
    if (homeSubTab === "community") {
      fetchChats();
      const interval = setInterval(fetchChats, 3000);
      return () => clearInterval(interval);
    }
  }, [homeSubTab]);

  const fetchSubjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/subjects");
      const json = await res.json();
      if (json.success) {
        setDbSubjects(json.data);
        const names = json.data.map((s: Subject) => s.name);
        setSubjectList(["Tất cả", ...names]);
      }
    } catch (e) {
      console.error("Lỗi tải môn học:", e);
    }
  };

  // Trigger loading data
  useEffect(() => {
    fetchNews();
    fetchSubjects();
  }, []);

  useEffect(() => {
    setDocPage(1);
  }, [selectedDocGrade, selectedDocSubject, selectedDocType, docSearch, docSort, docPageSize]);

  useEffect(() => {
    const timer = setTimeout(fetchDocuments, 250);
    return () => clearTimeout(timer);
  }, [selectedDocGrade, selectedDocSubject, selectedDocType, docSearch, docSort, docPage, docPageSize]);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setNotificationPermission("Notification" in window ? Notification.permission : "unsupported");
  }, []);

  const fetchNotifications = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/notifications?limit=80", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setNotifications(json.data || []);
        setUnreadNotifications(Number(json.unreadCount || 0));
      }
    } catch (e) {
      console.error("Lỗi tải thông báo:", e);
    }
  };

  const requestBrowserNotificationPermission = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setNotificationPermission("unsupported");
      return;
    }
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  };

  const showBrowserNotification = (notification: NotificationItem) => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    const browserNotification = new Notification(notification.title, {
      body: notification.body,
      icon: "https://api.dicebear.com/7.x/identicon/png?seed=KNTech",
      badge: "https://api.dicebear.com/7.x/identicon/png?seed=KNTech&width=96&height=96",
      data: { url: notification.link_url || "/" },
    });
    browserNotification.onclick = () => {
      window.focus();
      handleNotificationOpen(notification);
      browserNotification.close();
    };
  };

  const markNotificationRead = async (notificationId: number) => {
    if (!token) return;
    try {
      const res = await fetch(`http://localhost:5000/api/notifications/${notificationId}/read`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setNotifications((items) => items.map((item) => item.id === notificationId ? { ...item, is_read: true } : item));
        setUnreadNotifications(Number(json.unreadCount || 0));
      }
    } catch (e) {
      console.error("Lỗi đánh dấu thông báo:", e);
    }
  };

  const markAllNotificationsReadClient = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/notifications/read-all", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setNotifications((items) => items.map((item) => ({ ...item, is_read: true })));
        setUnreadNotifications(0);
      }
    } catch (e) {
      console.error("Lỗi đọc tất cả thông báo:", e);
    }
  };

  const handleNotificationOpen = (notification: NotificationItem) => {
    if (!notification.is_read) markNotificationRead(notification.id);
    setNotificationMenuOpen(false);
    if (notification.link_url?.includes("community")) {
      setHomeSubTab("community");
      setActiveTab("home");
      return;
    }
    if (notification.link_url?.includes("bookings")) {
      setActiveTab("bookings");
      return;
    }
    if (notification.link_url?.includes("wallet")) {
      setActiveTab("wallet");
      return;
    }
    if (notification.link_url?.includes("documents")) {
      setActiveTab("documents");
      return;
    }
    if (notification.link_url?.includes("admin")) {
      setActiveTab("admin");
      if (notification.link_url.includes("tutors")) setAdminTab("tutors");
      else if (notification.link_url.includes("withdrawals")) setAdminTab("monitor");
      return;
    }
    if (notification.link_url?.includes("profile")) {
      setActiveTab("profile");
      return;
    }
    setActiveTab("notifications");
  };

  useEffect(() => {
    if (!token) {
      setNotifications([]);
      setUnreadNotifications(0);
      return;
    }

    fetchNotifications();
    const stream = new EventSource(`http://localhost:5000/api/notifications/stream?token=${encodeURIComponent(token)}`);
    stream.addEventListener("notification", (event) => {
      try {
        const notification = JSON.parse((event as MessageEvent).data) as NotificationItem;
        setNotifications((items) => [notification, ...items.filter((item) => item.id !== notification.id)].slice(0, 80));
        setUnreadNotifications((count) => count + 1);
        setToastMessage(notification.title);
        setTimeout(() => setToastMessage(null), 3500);
        showBrowserNotification(notification);
      } catch (e) {
        console.error("Lỗi xử lý thông báo realtime:", e);
      }
    });
    stream.onerror = () => {
      stream.close();
    };

    const interval = setInterval(fetchNotifications, 60_000);
    return () => {
      stream.close();
      clearInterval(interval);
    };
  }, [token]);

  // Fetch Tutors
  const fetchTutors = async () => {
    setLoadingTutors(true);
    try {
      const res = await fetch("http://localhost:5000/api/tutors");
      const json = await res.json();
      if (json.success) {
        setTutors(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải gia sư:", e);
    } finally {
      setLoadingTutors(false);
    }
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  useEffect(() => {
    const handlePaymentCompleted = (event: Event) => {
      const detail = (event as CustomEvent).detail || {};
      if (detail.appointmentId) {
        fetchUserData();
        showKntechAlert(
          "success",
          "Thanh toán đã được ghi nhận",
          "Lớp học đã được xác nhận. Tiền gia sư sẽ bị giam 3 ngày và chỉ được trả nếu không có khiếu nại."
        );
      }
    };
    const handlePaymentStorage = (event: StorageEvent) => {
      if (event.key === "kntech-payment-completed" && event.newValue) {
        handlePaymentCompleted(new CustomEvent("kntech-payment-completed", { detail: JSON.parse(event.newValue) }));
      }
    };
    window.addEventListener("kntech-payment-completed", handlePaymentCompleted as EventListener);
    window.addEventListener("storage", handlePaymentStorage);
    return () => {
      window.removeEventListener("kntech-payment-completed", handlePaymentCompleted as EventListener);
      window.removeEventListener("storage", handlePaymentStorage);
    };
  }, []);

  const logClientActivity = async (action: string, details: string) => {
    try {
      await fetch("http://localhost:5000/api/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ userId: user?.id || null, action, details }),
      });
    } catch (e) {
      console.error("Lỗi ghi log khách hàng:", e);
    }
  };

  const fetchPendingCommissions = async () => {
    if (!token) return;
    setLoadingCommissions(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/commissions/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setPendingCommissions(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải đề xuất chiết khấu:", e);
    } finally {
      setLoadingCommissions(false);
    }
  };

  const handleDecideCommission = async (tutorUserId: string, status: "APPROVED" | "REJECTED") => {
    if (!token) return;
    const rejectReason = status === "REJECTED" ? askRejectReason("đề xuất chiết khấu") : null;
    if (status === "REJECTED" && !rejectReason) return;
    try {
      const res = await fetch("http://localhost:5000/api/admin/commissions/decide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tutorUserId, decision: status, rejectReason }),
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DECIDE_COMMISSION", `Xét duyệt đề xuất chiết khấu cho gia sư ${tutorUserId}: ${status}`);
        showKntechAlert("success", "Thành công", `Đã ${status === "APPROVED" ? "phê duyệt" : "từ chối"} đề xuất chiết khấu.`);
        fetchPendingCommissions();
        fetchTutors();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      showKntechAlert("error", "Lỗi kết nối", "Lỗi kết nối đến máy chủ.");
    }
  };

  function askRejectReason(targetLabel: string) {
    const reason = window.prompt(`Nhập lý do từ chối ${targetLabel}:`);
    if (reason === null) return null;
    const trimmed = reason.trim();
    if (!trimmed) {
      showKntechAlert("warning", "Thiếu lý do", "Vui lòng nhập lý do từ chối để gửi thông báo cho người dùng.");
      return null;
    }
    return trimmed;
  }

  const handleSendAdminNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !adminNotificationForm.title.trim() || !adminNotificationForm.body.trim()) {
      showKntechAlert("warning", "Thiếu nội dung", "Vui lòng nhập tiêu đề và nội dung thông báo.");
      return;
    }
    setSendingAdminNotification(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/notifications/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(adminNotificationForm),
      });
      const json = await res.json();
      if (json.success) {
        showKntechAlert("success", "Đã gửi thông báo", json.message || "Thông báo đã được gửi tới người dùng.");
        setAdminNotificationForm({ title: "", body: "", linkUrl: "/", role: "ALL" });
      } else {
        showKntechAlert("error", "Lỗi gửi thông báo", formatBackendError(json));
      }
    } catch (e) {
      showKntechAlert("error", "Lỗi kết nối", "Không thể gửi thông báo tới máy chủ.");
    } finally {
      setSendingAdminNotification(false);
    }
  };

  useEffect(() => {
    if (token && user && user.role === "ADMIN") {
      fetchPendingCommissions();
    }
  }, [token, user]);

  // Dynamic filtered tutors listing
  const filteredTutors = useMemo(() => {
    return tutors.filter((t) => {
      // 1. Search term filter
      const matchesSearch =
        t.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.school && t.school.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (t.bio && t.bio.toLowerCase().includes(searchTerm.toLowerCase()));

      // 2. Subject filter
      const matchesSubject =
        selectedSubject === "Tất cả" ||
        t.subjects_to_teach.some(sub => sub.toLowerCase().includes(selectedSubject.toLowerCase()));

      // 3. Left sidebar grade category filter
      let matchesGrade = true;
      if (selectedGradeFilter !== "Tất cả") {
        const bioText = (t.bio || "").toLowerCase();
        const schoolText = (t.school || "").toLowerCase();
        if (selectedGradeFilter === "Cấp THPT") {
          matchesGrade = bioText.includes("thpt") || bioText.includes("lớp 12") || bioText.includes("lớp 11") || bioText.includes("lớp 10") || schoolText.includes("thpt");
        } else if (selectedGradeFilter === "Cấp THCS") {
          matchesGrade = bioText.includes("thcs") || bioText.includes("cấp 2") || bioText.includes("lớp 9") || bioText.includes("lớp 8") || bioText.includes("lớp 7") || bioText.includes("lớp 6");
        } else if (selectedGradeFilter === "Cấp Tiểu học") {
          matchesGrade = bioText.includes("tiểu học") || bioText.includes("cấp 1") || bioText.includes("lớp 5") || bioText.includes("lớp 4") || bioText.includes("lớp 3") || bioText.includes("lớp 2") || bioText.includes("lớp 1");
        } else if (selectedGradeFilter === "Luyện thi ĐH") {
          matchesGrade = bioText.includes("đại học") || bioText.includes("luyện thi") || bioText.includes("đgnl") || bioText.includes("hsa") || bioText.includes("tsa") || schoolText.includes("sư phạm") || schoolText.includes("bách khoa");
        }
      }

      return matchesSearch && matchesSubject && matchesGrade;
    });
  }, [tutors, searchTerm, selectedSubject, selectedGradeFilter]);

  const tutorGradients = [
    "from-blue-600 to-indigo-700",
    "from-rose-500 to-red-600",
    "from-teal-500 to-emerald-650",
    "from-pink-500 to-rose-600",
    "from-amber-500 to-orange-600",
    "from-violet-600 to-purple-755",
  ];

  // Fetch Appointments and Wallet info when token changes
  const fetchUserData = async () => {
    if (!token) return;
    try {
      // Fetch latest profile details
      const meRes = await fetch("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const meJson = await meRes.json();
      if (meJson.success && meJson.data) {
        setUser(meJson.data);
        localStorage.setItem("user", JSON.stringify(meJson.data));
      }

      // Fetch appointments
      const apptRes = await fetch("http://localhost:5000/api/users/me/appointments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const apptJson = await apptRes.json();
      if (apptJson.success) {
        setAppointments(apptJson.data);
      }

      // Fetch wallet status, ledger and withdraws
      const walletRes = await fetch("http://localhost:5000/api/wallet/status", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const walletJson = await walletRes.json();
      if (walletJson.success && walletJson.data) {
        setWallet({
          available_balance: Number(walletJson.data.balance.available_balance),
          holding_balance: Number(walletJson.data.balance.holding_balance),
        });
        setWalletLedger(walletJson.data.ledger || []);
        setWalletWithdrawals(walletJson.data.withdrawals || []);
      }
    } catch (e) {
      console.error("Lỗi tải dữ liệu người dùng:", e);
    }
  };

  const handleWebTopup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topupAmountInput || isNaN(parseFloat(topupAmountInput))) {
      showKntechAlert("warning", "Sai số tiền", "Vui lòng nhập số tiền nạp hợp lệ");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/wallet/topup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ amount: topupAmountInput })
      });
      const json = await res.json();
      if (json.success && json.data?.topupId) {
        setTopupAmountInput("");
        const t = token || localStorage.getItem("token") || "";
        window.open(`/payment?topupId=${json.data.topupId}&token=${encodeURIComponent(t)}`, "_blank");
      } else {
        showKntechAlert("error", "Lỗi nạp tiền", formatBackendError(json));
      }
    } catch (err: any) {
      showKntechAlert("error", "Lỗi kết nối", "Lỗi kết nối máy chủ");
    }
  };

  const handleWebWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmountInput || isNaN(parseFloat(withdrawAmountInput))) {
      showKntechAlert("warning", "Sai số tiền", "Vui lòng nhập số tiền rút hợp lệ");
      return;
    }
    if (!bankNoInput || !bankNameInput) {
      showKntechAlert("warning", "Thiếu thông tin", "Vui lòng nhập đầy đủ thông tin tài khoản ngân hàng");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/wallet/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: withdrawAmountInput,
          bankAccountNo: bankNoInput,
          bankAccountName: bankNameInput
        })
      });
      const json = await res.json();
      if (json.success) {
        showKntechAlert("success", "Rút tiền thành công", json.message);
        setWithdrawAmountInput("");
        setBankNoInput("");
        setBankNameInput("");
        fetchUserData();
      } else {
        showKntechAlert("error", "Lỗi rút tiền", formatBackendError(json));
      }
    } catch (err: any) {
      showKntechAlert("error", "Lỗi kết nối", "Lỗi kết nối máy chủ");
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
      
      const onFocus = () => {
        fetchUserData();
      };
      window.addEventListener("focus", onFocus);
      return () => {
        window.removeEventListener("focus", onFocus);
      };
    } else {
      setAppointments([]);
      setWallet({ available_balance: 0, holding_balance: 0 });
    }
  }, [token]);

  // Fetch Admin Data
  const fetchPendingTutors = async () => {
    setLoadingPending(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/tutors/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setPendingTutors(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải hồ sơ gia sư:", e);
    } finally {
      setLoadingPending(false);
    }
  };

  const fetchSystemStats = async () => {
    setLoadingStats(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setSystemStats(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải thống kê:", e);
    } finally {
      setLoadingStats(false);
    }
  };

  const fetchSystemLogs = async () => {
    setLoadingLogs(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/logs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setSystemLogs(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải nhật ký logs:", e);
    } finally {
      setLoadingLogs(false);
    }
  };

  const fetchSystemUsers = async () => {
    setLoadingUsers(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setSystemUsers(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải danh sách người dùng:", e);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchPendingDocs = async () => {
    setLoadingPendingDocs(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/documents/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setPendingDocs(json.data);
      }
    } catch (e) {
      console.error("Lỗi tải tài liệu chờ duyệt:", e);
    } finally {
      setLoadingPendingDocs(false);
    }
  };

  useEffect(() => {
    if (activeTab === "admin" && token) {
      if (adminTab === "subjects") fetchSubjects();
      else if (adminTab === "tutors") fetchPendingTutors();
      else if (adminTab === "monitor") { fetchSystemStats(); fetchSystemLogs(); }
      else if (adminTab === "users") fetchSystemUsers();
      else if (adminTab === "pending_docs") fetchPendingDocs();
      else if (adminTab === "news_crud") fetchNews();
    }
  }, [activeTab, adminTab, token]);

  // AuthSuccess Callback
  const handleAuthSuccess = (newToken: string, newUser: { id: string; email: string; fullName: string; role: string }) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setToastMessage(`👋 Chào mừng bác ${newUser.fullName} đã đăng nhập thành công!`);
    logClientActivity("LOGIN", `Người dùng ${newUser.fullName} đăng nhập thành công.`);
    showKntechAlert("success", "Đăng nhập thành công", `Chào mừng bác ${newUser.fullName} đã quay trở lại với GiasuTop!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Sign out
  const handleLogout = () => {
    logClientActivity("LOGOUT", "Người dùng đăng xuất khỏi hệ thống.");
    showKntechAlert("info", "Đăng xuất thành công", "Bác đã đăng xuất. Hẹn gặp lại bác nhé!");
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setActiveTab("home");
    setToastMessage("🔒 Bác đã đăng xuất khỏi hệ thống.");
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handle tutor booking
  const handleBookTutor = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError("");
    setBookingSuccess(false);

    if (!token || !user) {
      setShowAuthModal(true);
      return;
    }

    try {
      const durationHours = Number(bookingDuration);
      const formatLocalISO = (d: Date) => {
        const pad = (n: number) => String(n).padStart(2, "0");
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
      };

      if (tutorBookingType === "SINGLE") {
        if (!bookingDate) {
          setBookingError("Vui lòng chọn ngày học rõ ràng.");
          return;
        }
        const startDateTime = new Date(`${bookingDate}T${bookingStartHour}:00`);
        const endDateTime = new Date(startDateTime.getTime() + durationHours * 60 * 60 * 1000);
        const price = Number(selectedTutor?.hourly_rate || 150000) * durationHours;

        const res = await fetch("http://localhost:5000/api/tutors/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            studentId: user.id,
            tutorId: selectedTutor?.user_id,
            startTime: formatLocalISO(startDateTime),
            endTime: formatLocalISO(endDateTime),
            pricePaid: price,
            scheduleType: "SINGLE",
          }),
        });

        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(formatBackendError(json));
        }

        setBookingSuccess(true);
        logClientActivity("BOOK_TUTOR_SINGLE", `Đăng ký học thử 1 buổi với gia sư ${selectedTutor?.full_name}. Số tiền: ${price} VND.`);
        showKntechAlert("success", "Đặt lịch thành công", `Đặt lịch học thử với gia sư ${selectedTutor?.full_name} thành công. Chuyển sang thanh toán...`);
        fetchUserData();

        const newAppt: Appointment = {
          id: json.data.appointmentId,
          student_id: user.id,
          tutor_id: selectedTutor!.user_id,
          start_time: formatLocalISO(startDateTime),
          end_time: formatLocalISO(endDateTime),
          price_paid: String(price),
          status: "PENDING",
          payment_status: "UNPAID",
          live_room_code: null,
          live_room_url: null,
          tutor_name: selectedTutor!.full_name,
        };

        setTimeout(() => {
          setSelectedTutor(null);
          setBookingSuccess(false);
          setActiveTab("bookings");
          handleInitiatePayment(newAppt);
        }, 1500);

      } else {
        // Generate simulated session timestamps based on week1/week2 selections for longTermWeeks
        const sessions: Array<{ startTime: string; endTime: string; sessionNumber: number }> = [];
        let sessionCounter = 1;
        const now = new Date();

        // Let's generate dates starting tomorrow
        let currentDayOffset = 1;

        // Map weekday names to index
        const dayMap: { [key: string]: number } = {
          "Chủ nhật": 0, "Thứ 2": 1, "Thứ 3": 2, "Thứ 4": 3, "Thứ 5": 4, "Thứ 6": 5, "Thứ 7": 6
        };

        for (let week = 0; week < longTermWeeks; week++) {
          const targetDays = (week % 2 === 0) ? longTermSchedule.week1 : longTermSchedule.week2;
          // For simplicity, let's create a date for each selected weekday in this week block
          for (const dayName of targetDays) {
            const targetDayIdx = dayMap[dayName] ?? 1;
            const sessionDate = new Date();
            sessionDate.setDate(now.getDate() + currentDayOffset + (week * 7) + ((targetDayIdx - now.getDay() + 7) % 7));
            const [startH, startM] = bookingStartHour.split(":").map(Number);
            sessionDate.setHours(startH, startM, 0, 0);

            const endSessionDate = new Date(sessionDate.getTime() + durationHours * 60 * 60 * 1000);
            sessions.push({
              startTime: formatLocalISO(sessionDate),
              endTime: formatLocalISO(endSessionDate),
              sessionNumber: sessionCounter++,
            });
          }
        }

        const totalPrice = Number(selectedTutor?.hourly_rate || 150000) * durationHours * sessions.length;

        const res = await fetch("http://localhost:5000/api/tutors/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            studentId: user.id,
            tutorId: selectedTutor?.user_id,
            pricePaid: totalPrice,
            scheduleType: "LONG_TERM",
            customSchedule: longTermSchedule,
            sessions,
          }),
        });

        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(formatBackendError(json));
        }

        setBookingSuccess(true);
        logClientActivity("BOOK_TUTOR_LONG_TERM", `Đăng ký học dài hạn ${sessions.length} buổi với gia sư ${selectedTutor?.full_name}. Số tiền: ${totalPrice} VND.`);
        showKntechAlert("success", "Đặt lịch dài hạn thành công", `Đăng ký học dài hạn ${sessions.length} buổi thành công. Chuyển sang thanh toán...`);
        fetchUserData();

        const dummyParentAppt: Appointment = {
          id: json.data.appointmentId,
          student_id: user.id,
          tutor_id: selectedTutor!.user_id,
          start_time: sessions[0].startTime,
          end_time: sessions[0].endTime,
          price_paid: String(totalPrice),
          status: "PENDING",
          payment_status: "UNPAID",
          live_room_code: null,
          live_room_url: null,
          tutor_name: `${selectedTutor!.full_name} (Đăng ký dài hạn ${sessions.length} buổi)`,
        };

        setTimeout(() => {
          setSelectedTutor(null);
          setBookingSuccess(false);
          setActiveTab("bookings");
          handleInitiatePayment(dummyParentAppt);
        }, 1500);
      }

    } catch (err: any) {
      setBookingError(err.message || "Đã xảy ra lỗi.");
    }
  };

  // Generate QR Code
  const handleInitiatePayment = async (appt: Appointment) => {
    setPayingAppt(appt);
    setGeneratingQr(true);
    setPaymentComplete(false);
    setPaymentDetails(null);

    try {
      const res = await fetch("http://localhost:5000/api/payments/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ appointmentId: appt.id }),
      });

      const json = await res.json();
      if (json.success) {
        setPaymentDetails(json.data);
      }
    } catch (e) {
      console.error("Lỗi tạo QR code:", e);
    } finally {
      setGeneratingQr(false);
    }
  };

  // Simulate banking transfer payment success
  const handleSimulatePayment = async () => {
    if (!paymentDetails) return;
    try {
      const res = await fetch("http://localhost:5000/api/payments/sepay/mock-trigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ paymentId: paymentDetails.paymentId }),
      });
      const json = await res.json();
      if (json.success) {
        setPaymentComplete(true);
        fetchUserData();
        showKntechAlert(
          "success",
          "Thanh toán đã được ghi nhận",
          "Lớp học đã được xác nhận. Tiền gia sư sẽ bị giam 3 ngày và chỉ được trả nếu không có khiếu nại."
        );
        setToastMessage("💳 Ghi nhận đóng học phí thành công!");
        setTimeout(() => {
          setPayingAppt(null);
          setPaymentDetails(null);
          setToastMessage(null);
        }, 2000);
      } else {
        showKntechAlert("error", "Lỗi giao dịch", json.message || "Không thể ghi nhận thanh toán.");
      }
    } catch (e) {
      console.error("Lỗi giả lập thanh toán:", e);
      showKntechAlert("error", "Lỗi kết nối", "Không thể ghi nhận thanh toán.");
    }
  };

  const handleWalletPayAppointment = async (appt: Appointment) => {
    const amount = Number(appt.price_paid);
    if (Number(wallet.available_balance || 0) < amount) {
      showKntechAlert(
        "warning",
        "Số dư không đủ",
        `Học phí yêu cầu ${formatVND(appt.price_paid)} nhưng ví nội bộ của bác chỉ còn ${formatVND(wallet.available_balance)}. Đang chuyển hướng sang ví nội bộ để nạp thêm...`
      );
      setTimeout(() => {
        setTopupAmountInput(String(Math.max(amount - Number(wallet.available_balance || 0), 0)));
        setActiveTab("wallet");
      }, 2000);
      return;
    }

    setConfirmDialog({
      title: "Xác nhận thanh toán ví",
      message: `Thanh toán ${formatVND(appt.price_paid)} từ ví nội bộ?\n\nSau khi thanh toán, lớp học sẽ được xác nhận. Tiền gia sư sẽ bị giam 3 ngày và chỉ được trả nếu không có khiếu nại.`,
      confirmText: "Thanh toán",
      cancelText: "Hủy",
      onConfirm: async () => {
        try {
          const res = await fetch("http://localhost:5000/api/payments/wallet-pay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ appointmentId: appt.id }),
          });
          const json = await res.json();
          if (json.success) {
            showKntechAlert(
              "success",
              "Thanh toán thành công",
              json.message || "Lớp học đã được xác nhận. Tiền gia sư được giam 3 ngày nếu không có khiếu nại."
            );
            logClientActivity("WALLET_PAY_APPOINTMENT", `Thanh toán học phí lớp ${appt.id} bằng ví nội bộ`);
            setPayingAppt(null);
            setPaymentDetails(null);
            setPaymentComplete(false);
            fetchUserData();
          } else {
            showKntechAlert("error", "Lỗi giao dịch", json.message || "Không thể thanh toán bằng ví.");
          }
        } catch (e) {
          showKntechAlert("error", "Lỗi kết nối", "Không thể thanh toán bằng ví.");
        }
      },
    });
  };

  // Virtual Classroom logic
  const handleJoinClassroom = (appt: Appointment) => {
    setActiveClassroom(appt);
    setChatMessages([
      {
        sender: "Hệ thống",
        text: "Kết nối phòng học trực tuyến thành công! Đường truyền ổn định, mic/cam sẵn sàng.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      {
        sender: appt.tutor_name || "Gia sư",
        text: "Cháu chào bác! Mời con bắt đầu học buổi hôm nay ạ. Cháu đã tải bài tập lên bảng phấn.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      sender: user?.fullName || "Phụ huynh",
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: activeClassroom?.tutor_name || "Gia sư",
          text: "Dạ cháu đang hướng dẫn con giải quyết nội dung bài này ạ.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    }, 1200);
  };

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    isDrawingRef.current = true;
    const coords = getEventCoords(e, canvas);
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = drawingColorRef.current;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getEventCoords(e, canvas);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  const getEventCoords = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const docTotalPages = Math.max(1, Math.ceil(docTotal / docPageSize));
  const docRangeStart = docTotal === 0 ? 0 : (docPage - 1) * docPageSize + 1;
  const docRangeEnd = Math.min(docTotal, docPage * docPageSize);

  // Format currency
  const formatVND = (value: number | string) => {
    const num = Number(value);
    return num.toLocaleString("vi-VN") + " đ";
  };

  const formatDateTimeText = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      if (isNaN(d.getTime())) return isoStr;
      const pad = (n: number) => String(n).padStart(2, "0");
      return `${pad(d.getHours())}:${pad(d.getMinutes())} - Ngày ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
    } catch {
      return isoStr;
    }
  };

  // Subject Actions
  const handleAddOrEditSubject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectNameInput.trim()) return;

    try {
      if (editingSubject) {
        const res = await fetch(`http://localhost:5000/api/admin/subjects/${editingSubject.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: subjectNameInput }),
        });
        const json = await res.json();
        if (json.success) {
          logClientActivity("EDIT_SUBJECT", `Cập nhật môn học ID ${editingSubject.id} thành "${subjectNameInput}"`);
          showKntechAlert("success", "Cập nhật thành công", `Đã cập nhật môn học thành "${subjectNameInput}"`);
          setToastMessage("✏️ Đã cập nhật môn học thành công!");
          setEditingSubject(null);
          setSubjectNameInput("");
          fetchSubjects();
        } else {
          showKntechAlert("error", "Lỗi", formatBackendError(json));
        }
      } else {
        const res = await fetch("http://localhost:5000/api/admin/subjects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: subjectNameInput }),
        });
        const json = await res.json();
        if (json.success) {
          logClientActivity("ADD_SUBJECT", `Thêm môn học mới: "${subjectNameInput}"`);
          showKntechAlert("success", "Thêm môn học thành công", `Đã thêm môn học mới "${subjectNameInput}" vào hệ thống.`);
          setToastMessage("➕ Thêm môn học thành công!");
          setSubjectNameInput("");
          fetchSubjects();
        } else {
          showKntechAlert("error", "Lỗi", formatBackendError(json));
        }
      }
    } catch (e) {
      console.error("Lỗi cập nhật môn học:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi cập nhật môn học");
    }
  };

  const handleDeleteSubject = async (id: number) => {
    if (!confirm("Bác có chắc chắn muốn xóa môn học này không?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/subjects/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DELETE_SUBJECT", `Xóa môn học ID ${id}`);
        showKntechAlert("success", "Xóa thành công", "Đã xóa môn học khỏi hệ thống.");
        setToastMessage("🗑️ Xóa môn học thành công!");
        fetchSubjects();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi xóa môn học:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi xóa môn học");
    }
  };

  // Tutor Decisions
  const handleDecideTutor = async (tutorUserId: string, decision: "APPROVED" | "REJECTED", reason?: string) => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/tutors/decide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tutorUserId,
          decision,
          rejectReason: reason,
        }),
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DECIDE_TUTOR", `Xét duyệt gia sư ${tutorUserId} thành ${decision}. Lý do: ${reason || "Không"}`);
        showKntechAlert("success", "Xét duyệt thành công", decision === "APPROVED" ? "Gia sư đã được phê duyệt hoạt động." : `Đã từ chối hồ sơ gia sư. Lý do: ${reason || ""}`);
        setToastMessage(decision === "APPROVED" ? "✅ Phê duyệt gia sư thành công!" : "❌ Đã từ chối hồ sơ gia sư.");
        setRejectingTutorId(null);
        setAdminRejectReason("");
        fetchPendingTutors();
        fetchTutors();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi xét duyệt gia sư:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi xét duyệt gia sư");
    }
  };

  // User Manager Actions
  const handleEditUserClick = (u: SystemUser) => {
    setEditingUser(u);
    setUserForm({
      fullName: u.full_name,
      username: u.username || "",
      email: u.email,
      phone: u.phone || "",
      role: u.role,
      status: u.status,
      password: "",
    });
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${editingUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName: userForm.fullName,
          email: userForm.email,
          username: userForm.username || null,
          phone: userForm.phone || null,
          role: userForm.role,
          status: userForm.status,
          password: userForm.password.trim() !== "" ? userForm.password : undefined,
        }),
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("UPDATE_USER", `Cập nhật tài khoản ${editingUser.id}: Vai trò ${userForm.role}, Trạng thái ${userForm.status}`);
        showKntechAlert("success", "Cập nhật thành công", "Đã lưu lại thông tin tài khoản.");
        setToastMessage("👤 Cập nhật hồ sơ tài khoản thành công!");
        setEditingUser(null);
        fetchSystemUsers();
        if (editingUser.id === user?.id) {
          const updatedUser = { ...user, fullName: userForm.fullName, username: userForm.username, email: userForm.email, role: userForm.role };
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi cập nhật người dùng:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi cập nhật người dùng");
    }
  };

  // Documents Actions
  const handleUploadDoc = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setShowAuthModal(true);
      return;
    }
    if (!docFileToUpload) {
      showKntechAlert("warning", "Thiếu tệp tin", "Vui lòng chọn tệp tài liệu (.pdf, .doc, .docx, ...) để tải lên.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", docUploadForm.title);
      formData.append("file", docFileToUpload);
      formData.append("gradeTag", docUploadForm.gradeTag);
      formData.append("typeTag", docUploadForm.typeTag);
      formData.append("subjectTag", docUploadForm.subjectTag);

      const res = await fetch("http://localhost:5000/api/documents/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("UPLOAD_DOCUMENT", `Tải lên tài liệu: ${docUploadForm.title}`);
        showKntechAlert("success", "Tải lên thành công", "Tài liệu của bác đã được gửi lên hệ thống và đang chờ Admin duyệt.");
        setToastMessage(json.message);
        setUploadModalOpen(false);
        setDocFileToUpload(null);
        setDocUploadForm({
          title: "",
          fileUrl: "",
          gradeTag: "Lớp 12",
          typeTag: "Tài liệu",
          subjectTag: "Toán"
        });
        fetchDocuments();
      } else {
        showKntechAlert("error", "Lỗi tải lên", formatBackendError(json));
      }
    } catch (e: any) {
      console.error("Lỗi tải lên tài liệu:", e);
      showKntechAlert("error", "Tải lên thất bại", "Phát hiện tệp không an toàn hoặc lỗi mạng.");
    }
  };

  const handleDecideDocument = async (id: number, decision: "APPROVED" | "REJECTED") => {
    const rejectReason = decision === "REJECTED" ? askRejectReason("tài liệu") : null;
    if (decision === "REJECTED" && !rejectReason) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/documents/${id}/decide`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ decision, rejectReason })
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DECIDE_DOCUMENT", `Xét duyệt tài liệu ID ${id} thành ${decision}`);
        showKntechAlert("success", "Xét duyệt thành công", decision === "APPROVED" ? "Tài liệu đã được phê duyệt xuất bản." : "Đã từ chối tài liệu này.");
        setToastMessage(decision === "APPROVED" ? "✅ Phê duyệt tài liệu thành công!" : "❌ Đã từ chối tài liệu.");
        fetchPendingDocs();
        fetchDocuments();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi duyệt tài liệu:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi duyệt tài liệu");
    }
  };

  const handleDeleteDocument = async (id: number) => {
    if (!confirm("Bác có muốn xóa tài liệu này?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/documents/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DELETE_DOCUMENT", `Xóa tài liệu ID ${id}`);
        showKntechAlert("success", "Xóa thành công", "Tài liệu đã được xóa khỏi hệ thống.");
        setToastMessage("🗑️ Xóa tài liệu thành công!");
        fetchDocuments();
        if (adminTab === "pending_docs") fetchPendingDocs();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi xóa tài liệu:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi xóa tài liệu");
    }
  };

  // News Actions
  const handleAddOrEditNews = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNews) {
        const res = await fetch(`http://localhost:5000/api/admin/news/${editingNews.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(newsForm)
        });
        const json = await res.json();
        if (json.success) {
          logClientActivity("EDIT_NEWS", `Cập nhật bài viết tin tức ID ${editingNews.id}: "${newsForm.title}"`);
          showKntechAlert("success", "Cập nhật thành công", `Đã cập nhật bài viết "${newsForm.title}" thành công.`);
          setToastMessage("✏️ Cập nhật tin tức thành công!");
          setEditingNews(null);
          setNewsFormOpen(false);
          fetchNews();
        } else {
          showKntechAlert("error", "Lỗi", formatBackendError(json));
        }
      } else {
        const res = await fetch("http://localhost:5000/api/admin/news", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(newsForm)
        });
        const json = await res.json();
        if (json.success) {
          logClientActivity("ADD_NEWS", `Đăng tin tức mới: "${newsForm.title}"`);
          showKntechAlert("success", "Đăng tin tức thành công", `Đã xuất bản bài viết tin tức mới "${newsForm.title}".`);
          setToastMessage("➕ Đăng tin tức mới thành công!");
          setNewsFormOpen(false);
          setNewsForm({
            title: "",
            summary: "",
            content: "",
            thumbnailUrl: "",
            category: "Toán"
          });
          fetchNews();
        } else {
          showKntechAlert("error", "Lỗi", formatBackendError(json));
        }
      }
    } catch (e) {
      console.error("Lỗi lưu tin tức:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi lưu tin tức");
    }
  };

  const handleDeleteNews = async (id: number) => {
    if (!confirm("Bác muốn xóa bài tin này?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/news/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("DELETE_NEWS", `Xóa bài tin tức ID ${id}`);
        showKntechAlert("success", "Xóa thành công", "Đã xóa bài tin tức khỏi hệ thống.");
        setToastMessage("🗑️ Xóa bài tin tức thành công!");
        fetchNews();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (e) {
      console.error("Lỗi xóa tin tức:", e);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi xóa tin tức");
    }
  };

  // Submit consultation contact form
  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    logClientActivity("SUBMIT_CONSULTATION", `Yêu cầu tư vấn cho học sinh ${consultForm.fullName}, SĐT ${consultForm.phone}`);
    showKntechAlert("success", "Gửi yêu cầu thành công", `Chúng cháu đã tiếp nhận thông tin của bác ${consultForm.fullName}.GiasuTopsẽ gọi tư vấn sớm nhất!`);
    setToastMessage("📝 Gửi thông tin tư vấn thành công!");
    setConsultForm({
      fullName: "",
      phone: "",
      facebookLink: "",
      grade: "Lớp 12",
      subject: "Toán học",
      details: ""
    });
  };

  // Synchronize completion states when user details change
  useEffect(() => {
    if (user) {
      setCompleteName(user.fullName || "");
      setCompletePhone(user.phone || "");
      setCompleteBio(user.bio || "");
      setCompleteAddress(user.address || "");
      setCompleteDob(user.dob || "");
      setCompleteAge(user.age ? String(user.age) : "");
      setCompleteAvatarPreview(getAvatarUrl(user));
    }
  }, [user]);

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!completeName.trim() || !completePhone.trim() || !completeBio.trim() || !completeAddress.trim() || !completeDob.trim() || !completeAge.trim()) {
      showKntechAlert("warning", "Thiếu thông tin", "Vui lòng điền đầy đủ tất cả các trường thông tin bắt buộc!");
      return;
    }

    setSubmittingCompletion(true);
    try {
      let finalAvatarUrl = user?.avatar_url || user?.avatarUrl || "";

      // 1. Upload avatar if selected
      if (completeAvatarFile) {
        const formData = new FormData();
        formData.append("avatar", completeAvatarFile);

        const uploadRes = await fetch("http://localhost:5000/api/users/me/avatar", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        const uploadJson = await uploadRes.json();
        if (uploadJson.success) {
          finalAvatarUrl = uploadJson.avatarUrl;
        } else {
          showKntechAlert("error", "Lỗi tải ảnh", uploadJson.message);
          setSubmittingCompletion(false);
          return;
        }
      } else if (!finalAvatarUrl) {
        showKntechAlert("warning", "Thiếu ảnh đại diện", "Vui lòng chọn một ảnh đại diện để hoàn tất hồ sơ!");
        setSubmittingCompletion(false);
        return;
      }

      // 2. Update profile fields
      const res = await fetch("http://localhost:5000/api/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName: completeName,
          phone: completePhone,
          avatarUrl: finalAvatarUrl,
          bio: completeBio,
          address: completeAddress,
          dob: completeDob,
          age: parseInt(completeAge, 10),
        }),
      });
      const json = await res.json();
      if (json.success) {
        showKntechAlert("success", "Hoàn thành hồ sơ", "Hồ sơ của bác đã được cập nhật thành công!");
        setUser(json.data);
        localStorage.setItem("user", JSON.stringify(json.data));
        fetchTutors(); // Refresh tutors list
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (err: any) {
      console.error(err);
      showKntechAlert("error", "Lỗi kết nối", "Không thể cập nhật hồ sơ cá nhân.");
    } finally {
      setSubmittingCompletion(false);
    }
  };

  const openAuth: (tab: "login" | "register", role?: "STUDENT" | "TUTOR") => void = (tab = "login" as "login" | "register", role = "STUDENT" as "STUDENT" | "TUTOR") => {
    setAuthModalConfig({ tab, role });
    setShowAuthModal(true);
  };

  const handleTutorRegisterClick = () => {
    if (!token) {
      openAuth("register", "TUTOR");
    } else {
      if (user?.role === "TUTOR") {
        fetchTutorStatus();
        setTutorProfileModalOpen(true);
      } else {
        showKntechAlert("warning", "Sai vai trò", "Tài khoản của bác hiện là Phụ huynh / Học sinh. Vui lòng đăng xuất và đăng ký một tài khoản Gia sư mới!");
      }
    }
  };

  const handleUpdateTutorProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/tutors/me/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          school: tutorProfileForm.school,
          major: tutorProfileForm.major,
          yearOfStudy: tutorProfileForm.yearOfStudy,
          hourlyRate: Number(tutorProfileForm.hourlyRate),
          subjectsToTeach: tutorProfileForm.subjectsToTeach,
          bio: tutorProfileForm.bio,
          cardGradient: tutorProfileForm.cardGradient,
          proposedPercent: Number(newCommissionRate),
        }),
      });
      const json = await res.json();
      if (json.success) {
        logClientActivity("UPDATE_TUTOR_PROFILE", `Cập nhật hồ sơ gia sư: Trường ${tutorProfileForm.school}, Giá học phí ${tutorProfileForm.hourlyRate}đ/h`);
        showKntechAlert("success", "Cập nhật hồ sơ thành công", "Thông tin hồ sơ gia sư của bác đã được cập nhật thành công.");
        setToastMessage("🎉 Đã cập nhật hồ sơ dạy học thành công!");
        setTutorProfileModalOpen(false);
        fetchTutors();
      } else {
        showKntechAlert("error", "Lỗi", formatBackendError(json));
      }
    } catch (err) {
      console.error(err);
      showKntechAlert("error", "Lỗi kết nối", "Lỗi lưu hồ sơ gia sư.");
    }
  };

  const handleSubmitVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingVerification(true);
    try {
      const formData = new FormData();

      if (tutorStatus === "APPROVED") {
        // Phase 2: Upload certificates only
        if (!certificatesFiles || certificatesFiles.length === 0) {
          showKntechAlert("warning", "Thiếu thông tin", "Vui lòng chọn ít nhất một tệp bằng cấp/chứng chỉ.");
          setSubmittingVerification(false);
          return;
        }
        for (let i = 0; i < certificatesFiles.length; i++) {
          formData.append("certificates", certificatesFiles[i]);
        }
      } else {
        // Phase 1: Upload identity documents
        if (!cccdFrontFile || !cccdBackFile || !portraitFile) {
          showKntechAlert("warning", "Thiếu thông tin", "Vui lòng chọn đầy đủ ảnh chân dung và 2 mặt CCCD.");
          setSubmittingVerification(false);
          return;
        }
        formData.append("cccdFront", cccdFrontFile);
        formData.append("cccdBack", cccdBackFile);
        formData.append("portrait", portraitFile);
        formData.append("bio", tutorProfileForm.bio);
        formData.append("school", tutorProfileForm.school);
        formData.append("major", tutorProfileForm.major);
        formData.append("yearOfStudy", tutorProfileForm.yearOfStudy);
        formData.append("hourlyRate", String(tutorProfileForm.hourlyRate));
        formData.append("subjectsToTeach", JSON.stringify(tutorProfileForm.subjectsToTeach));
        formData.append("cardGradient", tutorProfileForm.cardGradient);
        formData.append("proposedPercent", newCommissionRate || "10");
      }

      const res = await fetch("http://localhost:5000/api/tutors/me/documents", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        showKntechAlert("success", "Thành công!", tutorStatus === "APPROVED" ? "Đã gửi thêm bằng cấp/chứng chỉ thành công!" : "🎉 Gửi hồ sơ xác minh thành công! Đang chờ Ban quản trị duyệt.");
        setCccdFrontFile(null);
        setCccdBackFile(null);
        setPortraitFile(null);
        setCertificatesFiles(null);
        fetchTutorStatus();
      } else {
        showKntechAlert("error", "Lỗi gửi hồ sơ", formatBackendError(json));
      }
    } catch (err) {
      console.error(err);
      showKntechAlert("error", "Lỗi kết nối", "Đã xảy ra lỗi kết nối đến máy chủ.");
    } finally {
      setSubmittingVerification(false);
    }
  };

  const checkUserStatus = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (res.status === 403 && json.code === "USER_BANNED") {
        setIsBanned(true);
        showKntechAlert("error", "Tài khoản bị khóa", "Tài khoản của bác đã bị khóa (BANNED) do vi phạm chính sách cộng đồng.");
        handleLogout();
      } else if (json.success && json.data.status === "BANNED") {
        setIsBanned(true);
        showKntechAlert("error", "Tài khoản bị khóa", "Tài khoản của bác đã bị khóa (BANNED) do vi phạm chính sách cộng đồng.");
        handleLogout();
      }
    } catch (e) {
      console.error("Lỗi kiểm tra trạng thái tài khoản:", e);
    }
  };

  useEffect(() => {
    if (token) {
      checkUserStatus();
    } else {
      setIsBanned(false);
    }
  }, [token]);

  useEffect(() => {
    if (token && user && user.role === "TUTOR") {
      fetchTutorStatus();
    }
  }, [token, user]);

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans text-slate-700 antialiased dark:bg-[#090b11] dark:text-slate-350">

      {/* Toast notifications */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 max-w-sm rounded-xl bg-slate-900/90 text-white px-4 py-3 shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-2.5 animate-pulse">
          <IconBell className="h-4 w-4 text-[#1877f2] shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* iOS App Add to Home Screen Guide Prompt */}
      {showInstallPrompt && (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-bounce-short">
          {/* Giao diện Glassmorphism hiện đại theo phong cáchGiasuTop*/}
          <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-2xl rounded-2xl p-4 flex flex-col gap-3 max-w-sm mx-auto text-slate-800 dark:text-slate-200">

            {/* Tiêu đề & Nút đóng */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img src="https://i.ibb.co/NdgYx2Fy/Gemini-Generated-Image-89azsx89azsx89az.png" alt="Logo" className="w-10 h-10 rounded-xl object-cover shrink-0" />
                <div>
                  <h3 className="font-bold text-xs text-slate-900 dark:text-white">Cài đặt Web App GiasuTop</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Thêm vào màn hình chính để sử dụng như App thật</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowInstallPrompt(false)}
                className="text-slate-400 hover:text-slate-650 p-1 rounded-lg transition-colors cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Các bước hướng dẫn trực quan */}
            <div className="text-[11px] space-y-2.5 text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 dark:bg-slate-800 text-[#13519c] dark:text-blue-400 font-bold shrink-0 text-[10px]">1</span>
                <span>Bấm vào nút <strong className="text-slate-900 dark:text-white font-semibold">Chia sẻ (Share)</strong> <i className="fa-solid fa-arrow-up-from-bracket ml-0.5 text-blue-500"></i> trên thanh công cụ của Safari.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 dark:bg-slate-800 text-[#13519c] dark:text-blue-400 font-bold shrink-0 text-[10px]">2</span>
                <span>Kéo xuống dưới và chọn <strong className="text-slate-900 dark:text-white font-semibold">Thêm vào MH chính (Add to Home Screen)</strong> <i className="fa-regular fa-square-plus ml-0.5 text-blue-500"></i>.</span>
              </div>
            </div>

            {/* Download Button in prompt */}
            <div className="mt-1 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <span className="text-[9px] text-slate-400">Hoặc tải trực tiếp tập tin cài đặt:</span>
              <a
                href="/kntech-mobile.ipa"
                download
                className="inline-flex items-center gap-1 bg-[#13519c] text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow hover:bg-blue-800 transition cursor-pointer"
              >
                <i className="fa-solid fa-download"></i> Tải IPA
              </a>
            </div>

            {/* Mũi tên chỉ xuống dưới nút Share của Safari */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 dark:bg-slate-900/95 border-r border-b border-slate-200/80 dark:border-slate-800/80 rotate-45 backdrop-blur-md hidden sm:block"></div>
          </div>
        </div>
      )}

      {/*GiasuTopBRAND NAV BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#13519c] text-white px-4 shadow flex items-center justify-between h-14">

        {/* Left Search & Hamburger */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-xs md:max-w-sm">
          <button
            className="md:hidden text-white p-1 hover:bg-white/10 rounded cursor-pointer transition"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>

          <button
            onClick={() => setActiveTab("home")}
            className="text-lg font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img src="https://i.ibb.co/NdgYx2Fy/Gemini-Generated-Image-89azsx89azsx89az.png" alt="Logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="hidden sm:inline font-semibold">GiasuTop</span>
          </button>

          <div className="relative hidden md:block flex-1 max-w-[220px]">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/60" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm gia sư..."
              className="w-full h-8 pl-8 pr-3 text-xs rounded-full border-none bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white focus:text-slate-800 transition"
            />
          </div>
        </div>

        {/* Center Icons Navigation tabs (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4 flex-shrink-0 h-full">
          {/* Trang chủ */}
          <button
            onClick={() => { setActiveTab("home"); setHomeSubTab("feed"); }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "home" && homeSubTab === "feed" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Trang chủ"
          >
            <IconHome className="h-4.5 w-4.5" />
            {activeTab === "home" && homeSubTab === "feed" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>



          {/* Tìm gia sư giỏi */}
          <button
            onClick={() => setActiveTab("courses")}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "courses" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Tìm gia sư giỏi"
          >
            <IconGraduationCap className="h-4.5 w-4.5" />
            {activeTab === "courses" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Lớp học của con */}
          <button
            onClick={() => {
              if (!token) openAuth("login");
              else setActiveTab("my_courses");
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "my_courses" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Lớp học của con"
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            {activeTab === "my_courses" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Thư viện đề thi */}
          <button
            onClick={() => {
              setSelectedDocType("Tất cả");
              setActiveTab("documents");
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "documents" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Thư viện đề thi"
          >
            <IconBook className="h-4.5 w-4.5" />
            {activeTab === "documents" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Tin tức GiasuTop */}
          <button
            onClick={() => setActiveTab("news")}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "news" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Tin tức GiasuTop"
          >
            <IconNewspaper className="h-4.5 w-4.5" />
            {activeTab === "news" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Lịch học gia sư */}
          <button
            onClick={() => {
              if (!token) openAuth("login");
              else setActiveTab("bookings");
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "bookings" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Lịch học gia sư"
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {activeTab === "bookings" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Ví / Thu nhập */}
          <button
            onClick={() => {
              if (!token) openAuth("login");
              else setActiveTab("wallet");
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "wallet" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Ví / Thu nhập"
          >
            <IconWallet className="h-4.5 w-4.5" />
            {activeTab === "wallet" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Cộng đồng chat */}
          <button
            onClick={() => {
              setHomeSubTab("community");
              setActiveTab("home");
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "home" && homeSubTab === "community" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Cộng đồng chat trực tuyến"
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {activeTab === "home" && homeSubTab === "community" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Đăng ký gia sư */}
          <button
            onClick={handleTutorRegisterClick}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition text-pink-300 hover:text-white`}
            title={user?.role === "TUTOR" ? "Hồ sơ dạy học" : "Đăng ký làm gia sư"}
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </button>

          {/* Trang cá nhân */}
          <button
            onClick={() => {
              if (!token) openAuth("login");
              else {
                setTutorProfileToView(null);
                setActiveTab("profile");
              }
            }}
            className={`h-full px-2.5 flex items-center justify-center relative cursor-pointer focus:outline-none transition ${activeTab === "profile" && !tutorProfileToView ? "text-white" : "text-white/60 hover:text-white"
              }`}
            title="Trang cá nhân"
          >
            <IconUser className="h-4.5 w-4.5" />
            {activeTab === "profile" && !tutorProfileToView && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>

          {/* Hỗ trợ Zalo */}
          <a
            href="https://zalo.me/0971920024"
            target="_blank"
            rel="noreferrer"
            className="h-full px-2.5 flex items-center justify-center relative text-yellow-300 hover:text-white cursor-pointer focus:outline-none text-xs font-bold gap-1 transition"
            title="Liên hệ Zalo hỗ trợ"
          >
            <svg className="h-4.5 w-4.5 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </a>

          {/* Admin Navigation Dropdown */}
          {user && user.role === "ADMIN" && (
            <div className="relative group h-full flex items-center">
              <button
                className={`h-full px-2.5 flex items-center gap-1 text-yellow-400 hover:text-white font-bold text-xs focus:outline-none cursor-pointer transition ${activeTab === "admin" ? "text-yellow-300" : ""
                  }`}
              >
                <div className="h-6.5 w-6.5 rounded-full flex items-center justify-center bg-white text-slate-900 border-2 border-yellow-400 shrink-0 shadow">
                  <svg className="h-3.5 w-3.5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <span className="hidden lg:inline text-[11px]">Admin ▼</span>
              </button>
              <div className="absolute top-14 right-0 w-52 bg-white dark:bg-slate-900 border rounded-xl shadow-2xl py-2 hidden group-hover:block z-50 text-slate-800 dark:text-slate-200">
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("dashboard"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "dashboard" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="12" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="15" y2="15" /></svg>
                  📊 Dashboard Thống Kê
                </button>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("tutors"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "tutors" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  Duyệt Giáo Viên ({pendingTutors.length})
                </button>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("subjects"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "subjects" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h13.5v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" /></svg>
                  Quản lý Môn Học
                </button>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("pending_docs"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "pending_docs" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  Duyệt Tài Liệu
                </button>
                <div className="border-t my-1"></div>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("news_crud"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "news_crud" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M16 8h2m-2 4h2M6 8h6v8H6z" /></svg>
                  Quản Lý Tin Tức
                </button>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("monitor"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "monitor" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                  Logs & Thống Kê
                </button>
                <button
                  onClick={() => { setActiveTab("admin"); setAdminTab("users"); }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-2 ${activeTab === "admin" && adminTab === "users" ? "bg-slate-50 text-[#13519c]" : ""
                    }`}
                >
                  <svg className="h-3.5 w-3.5 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  Quản Lý Người Dùng
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right User Avatar Dropdown & Login */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {token && user ? (
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationMenuOpen((open) => !open)}
                  className="relative h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  title="Thông báo"
                >
                  <IconBell className="h-4.5 w-4.5" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -right-1 -top-1 min-w-4 h-4 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border border-[#13519c]">
                      {unreadNotifications > 99 ? "99+" : unreadNotifications}
                    </span>
                  )}
                </button>

                {notificationMenuOpen && (
                  <div className="absolute right-0 top-11 w-80 max-w-[calc(100vw-1rem)] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50 text-slate-800 dark:text-slate-100">
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">Thông báo</div>
                        <div className="text-[10px] text-slate-400">{unreadNotifications} chưa đọc</div>
                      </div>
                      <button
                        type="button"
                        onClick={markAllNotificationsReadClient}
                        className="text-[10px] font-bold text-blue-600 hover:underline"
                      >
                        Đọc hết
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-5 text-center text-xs text-slate-400">Chưa có thông báo.</div>
                      ) : (
                        notifications.slice(0, 8).map((notification) => (
                          <button
                            key={notification.id}
                            type="button"
                            onClick={() => handleNotificationOpen(notification)}
                            className={`w-full text-left p-3 flex gap-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition ${notification.is_read ? "" : "bg-blue-50/70 dark:bg-blue-950/25"}`}
                          >
                            <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${notification.is_read ? "bg-slate-300" : "bg-blue-600"}`} />
                            <div className="min-w-0">
                              <div className="text-xs font-bold truncate">{notification.title}</div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">{notification.body}</div>
                              <div className="text-[9px] text-slate-400 mt-1">{new Date(notification.created_at).toLocaleString("vi-VN")}</div>
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setNotificationMenuOpen(false);
                        setActiveTab("notifications");
                      }}
                      className="w-full h-10 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-[#13519c] hover:bg-slate-50 dark:hover:bg-slate-900"
                    >
                      Xem tất cả thông báo
                    </button>
                    {notificationPermission !== "granted" && notificationPermission !== "unsupported" && (
                      <button
                        type="button"
                        onClick={requestBrowserNotificationPermission}
                        className="w-full h-9 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        Bật thông báo trình duyệt
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div
                onClick={() => { setTutorProfileToView(null); setActiveTab("profile"); }}
                className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition shrink-0"
                title="Xem trang cá nhân"
              >
                <span className="text-xs font-semibold text-white hidden lg:inline">{user.fullName}</span>
                <img
                  src={getAvatarUrl(user)}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full border border-white/20 bg-slate-800 object-cover"
                />
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="bg-black/20 hover:bg-black/35 text-[11px] font-semibold px-3 py-1.5 rounded-full cursor-pointer"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => openAuth("login")}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 h-8 text-xs rounded-lg cursor-pointer border border-white/10"
              >
                Đăng nhập
              </button>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT LAYOUT WITH FIXED LEFT SIDEBAR */}
      <div className="pt-14 min-h-screen flex bg-[#f0f2f5] dark:bg-[#090b11]">

        {/* COLUMN 1: FIXED LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col justify-between fixed left-0 top-14 bottom-0 w-64 bg-white dark:bg-[#111827] border-r border-slate-200/50 dark:border-slate-800 z-30 overflow-y-auto p-3 pb-14 space-y-4">
          <div className="space-y-4">

            {/* 1. If activeTab is 'courses' (Tìm Gia Sư) -> categories moved inline into content */}

            {/* 2. If activeTab is 'documents' (Tài liệu) -> show filter widgets */}
            {activeTab === "documents" && (
              <div className="bg-white dark:bg-[#111827] rounded-xl p-3 shadow-sm border border-slate-200/50 dark:border-slate-800 space-y-3 hidden md:block text-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Bộ lọc tìm kiếm</span>

                {/* Search */}
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400" />
                  <input
                    type="text"
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                    placeholder="Tìm tên đề thi..."
                    className="w-full h-8 pl-8 pr-3 text-[11px] rounded-lg border bg-white dark:bg-slate-900 focus:outline-none"
                  />
                </div>

                {/* Subject filters */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold text-slate-400">Môn Học</label>
                  <div className="flex flex-wrap gap-1">
                    {["Tất cả", "Toán", "Lý", "Hóa", "Văn", "Tiếng Anh", "Sinh học"].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setSelectedDocSubject(sub)}
                        className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${selectedDocSubject === sub
                          ? "bg-[#13519c] text-white"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-655 dark:bg-slate-900/60 dark:text-slate-300 border-slate-100 dark:border-slate-800"
                          }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grade filters */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold text-slate-400">Khối Lớp</label>
                  <div className="flex flex-wrap gap-1">
                    {["Tất cả", "Lớp 10", "Lớp 11", "Lớp 12"].map((grade) => (
                      <button
                        key={grade}
                        onClick={() => setSelectedDocGrade(grade)}
                        className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${selectedDocGrade === grade
                          ? "bg-[#13519c] text-white"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-655 dark:bg-slate-900/60 dark:text-slate-300 border-slate-100 dark:border-slate-800"
                          }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold text-slate-400">Loại tài liệu</label>
                  <div className="flex flex-wrap gap-1">
                    {["Tất cả", "Tài liệu", "Tài liệu ôn thi", "Ôn tập", "Sách", "Giữa kì 1", "Cuối kì 2"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedDocType(type)}
                        className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${selectedDocType === type
                          ? "bg-[#13519c] text-white"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-655 dark:bg-slate-900/60 dark:text-slate-300 border-slate-100 dark:border-slate-800"
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Sidebar Button: Trang chủ */}
            <button
              onClick={() => {
                setHomeSubTab("feed");
                setActiveTab("home");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "home" && homeSubTab === "feed"
                ? "bg-slate-100 text-[#13519c] dark:bg-slate-800"
                : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF4E50, #F9D423)" }}>
                  <IconHome className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:inline">Trang chủ</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>



            {/* Sidebar Button: Tìm gia sư giỏi */}
            <button
              onClick={() => setActiveTab("courses")}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "courses" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF4500, #FF8C00)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <span className="hidden md:inline">Tìm gia sư giỏi</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Lớp học của con */}
            <button
              onClick={() => {
                if (!token) openAuth("login");
                else setActiveTab("my_courses");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "my_courses" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF8C00, #F9D423)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span className="hidden md:inline">Lớp học của con</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Thư viện đề thi */}
            <button
              onClick={() => {
                setSelectedDocType("Tất cả");
                setActiveTab("documents");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "documents" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #E65100, #FFA726)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span className="hidden md:inline">Thư viện đề thi</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Tin tức GiasuTop */}
            <button
              onClick={() => setActiveTab("news")}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "news" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF3D00, #FF9100)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M16 8h2M16 12h2M16 16h2M6 8h6v8H6z" />
                  </svg>
                </div>
                <span className="hidden md:inline">Tin tức GiasuTop</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Lịch học gia sư */}
            <button
              onClick={() => {
                if (!token) openAuth("login");
                else setActiveTab("bookings");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "bookings" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-slate-850 shrink-0" style={{ background: "linear-gradient(135deg, #FFA000, #FFD54F)", color: "#1e293b" }}>
                  <svg className="h-4 w-4 text-slate-850" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#1e293b" }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="hidden md:inline">Lịch học gia sư</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Ví / Thu nhập */}
            <button
              onClick={() => {
                if (!token) openAuth("login");
                else setActiveTab("wallet");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "wallet" ? "bg-slate-100 text-[#13519c] dark:bg-slate-800" : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"}`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF5E62, #FF9966)" }}>
                  <IconWallet className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:inline">Ví / Thu nhập</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Cộng đồng */}
            <button
              onClick={() => {
                setHomeSubTab("community");
                setActiveTab("home");
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "home" && homeSubTab === "community"
                ? "bg-slate-100 text-[#13519c] dark:bg-slate-800"
                : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #D84315, #FF7043)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="hidden md:inline">Cộng đồng chat</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Đăng ký làm gia sư (Or Hồ sơ gia sư if already a Tutor) */}
            <button
              onClick={handleTutorRegisterClick}
              className="w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer hover:bg-slate-50 text-slate-655 dark:text-slate-350"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF3D00, #FF8008)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                <span className="hidden md:inline">
                  {user?.role === "TUTOR" ? "Hồ sơ dạy học" : "Đăng ký làm gia sư"}
                </span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Button: Trang cá nhân */}
            <button
              onClick={() => {
                if (!token) openAuth("login");
                else {
                  setTutorProfileToView(null);
                  setActiveTab("profile");
                }
              }}
              className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "profile" && !tutorProfileToView
                ? "bg-slate-100 text-[#13519c] dark:bg-slate-800"
                : "hover:bg-slate-50 text-slate-655 dark:text-slate-350"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF5E62, #FF9966)" }}>
                  <IconUser className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:inline">Trang cá nhân</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </button>

            {/* Sidebar Link: Hỗ trợ Zalo */}
            <a
              href="https://zalo.me/0971920024"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer hover:bg-slate-50 text-slate-655 dark:text-slate-350"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, #FF7043, #FFa726)" }}>
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span className="hidden md:inline">Hỗ trợ Zalo</span>
              </div>
              <IconChevronRight className="h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0" />
            </a>

            {/* Sidebar Button: Quản trị hệ thống */}
            {user && user.role === "ADMIN" && (
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setActiveTab("admin");
                    setAdminTab("subjects");
                  }}
                  className={`w-full flex items-center justify-center md:justify-between p-2 md:px-3 md:py-2.5 rounded-xl text-xs font-semibold text-left transition cursor-pointer ${activeTab === "admin"
                    ? "bg-slate-100 text-[#13519c] dark:bg-slate-800"
                    : "hover:bg-slate-50 text-slate-650 dark:text-slate-350"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0 bg-slate-800">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14" />
                        <line x1="4" y1="10" x2="4" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="3" />
                        <line x1="20" y1="21" x2="20" y2="16" />
                        <line x1="20" y1="12" x2="20" y2="3" />
                        <line x1="1" y1="14" x2="7" y2="14" />
                        <line x1="9" y1="8" x2="15" y2="8" />
                        <line x1="17" y1="16" x2="23" y2="16" />
                      </svg>
                    </div>
                    <span className="hidden md:inline">Quản trị hệ thống</span>
                  </div>
                  <IconChevronRight className={`h-3.5 w-3.5 text-slate-300 hidden md:block shrink-0 transition-transform ${activeTab === "admin" ? "rotate-90" : ""}`} />
                </button>

                {/* Desktop Nested Admin Sub-menus */}
                {user && user.role === "ADMIN" && (
                  <div className="pl-6 space-y-1 hidden md:block border-l border-slate-200 ml-4 py-1 animate-fade-in">
                    <button
                      onClick={() => { setActiveTab("admin"); setAdminTab("dashboard"); }}
                      className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold transition ${activeTab === "admin" && adminTab === "dashboard" ? "bg-slate-100 text-[#13519c]" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      📊 Dashboard Thống Kê
                    </button>
                    <button
                      onClick={() => { setActiveTab("admin"); setAdminTab("tutors"); }}
                      className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold transition ${activeTab === "admin" && adminTab === "tutors" ? "bg-slate-100 text-[#13519c]" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      👩‍🏫 Duyệt Giáo Viên ({pendingTutors.length})
                    </button>
                    <button
                      onClick={() => { setActiveTab("admin"); setAdminTab("subjects"); }}
                      className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold transition ${activeTab === "admin" && adminTab === "subjects" ? "bg-slate-100 text-[#13519c]" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      📚 Quản lý Môn Học
                    </button>
                    <button
                      onClick={() => { setActiveTab("admin"); setAdminTab("pending_docs"); }}
                      className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold transition ${activeTab === "admin" && adminTab === "pending_docs" ? "bg-slate-100 text-[#13519c]" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      📄 Duyệt Tài Liệu ({pendingDocs.length})
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1 md:ml-64 p-4 md:p-6 flex flex-col justify-between min-h-[calc(100vh-3.5rem)]">
          <div className="flex-1">

            {/* TAB 1: HOME FEED */}
            {activeTab === "home" && (
              <HomeTab
                homeSubTab={homeSubTab}
                setHomeSubTab={setHomeSubTab}
                handleRegisterNotification={handleRegisterNotification}
                handleTestNotification={handleTestNotification}
                tutors={tutors}
                formatVND={formatVND}
                setViewingTutor={setViewingTutor}
                setSelectedGradeFilter={setSelectedGradeFilter}
                setActiveTab={setActiveTab}
                showKntechAlert={showKntechAlert}
                token={token}
                user={user}
                chatActivePartner={chatActivePartner}
                setChatActivePartner={setChatActivePartner}
                openAuth={openAuth}
              />
            )}

            {/* TAB 2: COURSES LISTING (renamed Tìm Gia Sư) */}
            {activeTab === "courses" && (
              <div className="space-y-6">
                {/* Đội ngũ gia sư block */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🎓</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">Đội ngũ gia sư</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Gia sư Bách Khoa là sinh viên các trường ĐH Bách Khoa, Khoa học Tự nhiên, ĐH Quốc gia và các trường đại học uy tín khác.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {tutors.slice(0, 4).map((t) => (
                      <div key={t.user_id} className="border dark:border-slate-700 rounded-xl p-3 text-center hover:shadow-md transition-shadow">
                        <img
                          src={getAvatarUrl(t)}
                          alt={t.full_name}
                          className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto mb-2 object-cover border"
                        />
                        <p className="font-semibold text-xs text-slate-800 dark:text-white truncate">{t.full_name || "Gia sư"}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{t.school || "ĐH Bách Khoa"}</p>
                        <p className="text-[10px] text-rose-600 font-semibold mt-1">{formatVND(t.hourly_rate)}/giờ</p>
                        <button onClick={() => setViewingTutor(t)} className="bg-[#13519c] hover:bg-blue-800 text-white px-2 py-1 rounded cursor-pointer font-semibold text-[10px] mt-2 w-full">Đăng ký</button>
                      </div>
                    ))}
                  </div>
                </div>

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
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Danh mục gia sư</span>
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
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] font-semibold transition cursor-pointer border ${selectedGradeFilter === cat.filter
                          ? "bg-red-50 text-[#C41E3A] border-red-200 dark:bg-red-950/20 dark:text-red-450 dark:border-red-900/50 font-bold shadow-sm"
                          : "bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-655 dark:text-slate-350 border-slate-100 dark:border-slate-800/60"
                          }`}
                      >
                        <div className={`h-5.5 w-5.5 rounded-lg flex items-center justify-center shrink-0 transition ${selectedGradeFilter === cat.filter
                          ? "bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white"
                          : "bg-red-100/80 text-[#C41E3A] dark:bg-slate-850 dark:text-red-400"
                          }`}>
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
                      className={`pb-2.5 px-4 text-xs font-semibold cursor-pointer transition-all relative shrink-0 ${selectedSubject === sub ? "text-[#13519c] dark:text-blue-400 font-bold" : "text-slate-400 hover:text-slate-650"
                        }`}
                    >
                      {sub}
                      {selectedSubject === sub && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#13519c] dark:bg-blue-400" />}
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
                      const gradientClass = tutorGradients[idx % tutorGradients.length];
                      return (
                        <div key={t.user_id} className="bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.01] transition duration-200">
                          <div className={`p-4 ${t.card_gradient || 'bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]'} text-white relative h-28 flex flex-col justify-between`}>
                            <div className="flex justify-between items-start">
                              <span className="text-[8px] bg-black/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">GIA SƯ CHUYÊN NGHIỆP</span>
                              <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded font-semibold">{(4.7 + (t.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)} ({(t.full_name.charCodeAt(1) % 40) + 15} đánh giá)</span>
                            </div>
                            <h4 className="text-xs font-bold leading-tight line-clamp-2">Lớp dạy kèm: {t.subjects_to_teach.join(", ")}</h4>
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
                                <p className="text-[10px] text-slate-400 truncate font-semibold">{t.school} ({t.major || "Chuyên ngành"})</p>
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
            )}

            {/* TAB 3: DOCUMENTS REPOSITORY (Screenshot 3 layout) */}
            {activeTab === "documents" && (
              <div className="space-y-6">

                {/* Header title */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                      Kho Đề Thi & Tài Liệu Ôn Tập
                    </h2>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Hiển thị {docRangeStart}-{docRangeEnd} trong {docTotal.toLocaleString("vi-VN")} tài liệu
                    </p>
                  </div>
                  <button
                    onClick={() => setUploadModalOpen(true)}
                    className="bg-[#13519c] text-white hover:bg-blue-800 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <IconUpload className="h-3.5 w-3.5" />Tải tài liệu lên
                  </button>
                </div>

                <div className="grid gap-2 rounded-xl border border-slate-200/70 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-[#111827] md:grid-cols-[1fr_150px_170px]">
                  <div className="relative">
                    <IconSearch className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={docSearch}
                      onChange={(e) => setDocSearch(e.target.value)}
                      placeholder="Tìm tên tài liệu hoặc người đăng..."
                      className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-xs outline-none focus:border-[#13519c] dark:border-slate-800 dark:bg-slate-950"
                    />
                  </div>
                  <select
                    value={docSort}
                    onChange={(e) => setDocSort(e.target.value as typeof docSort)}
                    className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none dark:border-slate-800 dark:bg-slate-950"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="oldest">Cũ nhất</option>
                    <option value="downloads">Tải nhiều nhất</option>
                    <option value="title">Tên A-Z</option>
                  </select>
                  <select
                    value={docPageSize}
                    onChange={(e) => setDocPageSize(Number(e.target.value))}
                    className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none dark:border-slate-800 dark:bg-slate-950"
                  >
                    <option value={12}>Hiển thị 12 dòng</option>
                    <option value={24}>Hiển thị 24 dòng</option>
                    <option value={36}>Hiển thị 36 dòng</option>
                    <option value={50}>Hiển thị 50 dòng</option>
                  </select>
                </div>

                {/* Documents List */}
                {loadingDocuments ? (
                  <div className="text-center py-12 text-slate-400 text-xs bg-white dark:bg-slate-900 border rounded-xl">
                    Đang tải tài liệu...
                  </div>
                ) : documents.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs bg-white dark:bg-slate-900 border rounded-xl">
                    Chưa tìm thấy tài liệu phù hợp với bộ lọc này.
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-850 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex gap-1.5 flex-wrap">
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                              {doc.grade_tag}
                            </span>
                            <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                              {doc.subject_tag}
                            </span>
                            <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded border">
                              {doc.type_tag}
                            </span>
                          </div>
                          <h4 className="text-xs font-semibold text-slate-900 dark:text-white leading-snug">
                            {doc.title}
                          </h4>
                          <div className="text-[10px] text-slate-400 flex items-center gap-3">
                            <span>👁️ {doc.download_count} Lượt tải</span>
                            <span>📅 {new Date(doc.created_at).toLocaleDateString("vi-VN")}</span>
                            <span>👤 Đăng bởi: {doc.uploader_name}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              const fileUrl = doc.file_url;
                              const isOfficeDoc = /\.(docx?|xlsx?|pptx?)$/i.test(fileUrl);
                              const isLocal = fileUrl.includes("localhost") || fileUrl.includes("127.0.0.1") || fileUrl.includes("192.168.");
                              if (isOfficeDoc && !isLocal) {
                                window.open(`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`, "_blank");
                              } else {
                                window.open(fileUrl, "_blank");
                              }
                            }}
                            className="bg-slate-100 text-slate-700 hover:bg-[#13519c] hover:text-white text-xs px-3 h-8 rounded-lg cursor-pointer flex items-center gap-1 font-medium transition"
                          >
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            Xem tài liệu
                          </button>

                          {(user?.role === "ADMIN" || user?.id === doc.uploader_id) && (
                            <button
                              type="button"
                              onClick={() => handleDeleteDocument(doc.id)}
                              className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white text-xs px-3 h-8 rounded-lg cursor-pointer flex items-center gap-1 font-medium transition"
                              title="Xóa tài liệu này"
                            >
                              ✕ Xóa
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="flex flex-col gap-2 rounded-xl border border-slate-200/70 bg-white p-3 text-[11px] text-slate-500 shadow-sm dark:border-slate-800 dark:bg-[#111827] md:flex-row md:items-center md:justify-between">
                      <span>Trang {docPage} / {docTotalPages}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={docPage <= 1 || loadingDocuments}
                          onClick={() => setDocPage((prev) => Math.max(1, prev - 1))}
                          className="h-8 rounded-lg border border-slate-200 px-3 font-semibold disabled:cursor-not-allowed disabled:opacity-45 dark:border-slate-800"
                        >
                          Trước
                        </button>
                        <button
                          type="button"
                          disabled={docPage >= docTotalPages || loadingDocuments}
                          onClick={() => setDocPage((prev) => Math.min(docTotalPages, prev + 1))}
                          className="h-8 rounded-lg border border-slate-200 px-3 font-semibold disabled:cursor-not-allowed disabled:opacity-45 dark:border-slate-800"
                        >
                          Sau
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: NEWS BOARD (Screenshot 5 look) */}
            {activeTab === "news" && (
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
                      <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">{selectedNews.title}</h1>
                      <p className="text-xs text-slate-400">📅 Đăng ngày: {new Date(selectedNews.created_at).toLocaleDateString("vi-VN")} | Tác giả: GiaSu GiasuTop</p>
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
                      className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed space-y-4 font-sans prose dark:prose-invert max-w-none"
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
            )}

            {/* TAB 5: MY CLASSES */}
            {activeTab === "my_courses" && (
              <div className="space-y-6">

                {/* Header card details */}
                <div className="bg-white dark:bg-[#111827] rounded-xl p-5 border border-slate-200/50 shadow-sm flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border">
                    <svg className="h-6 w-6 text-[#13519c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{user?.fullName || "Khách"}</h3>
                    <p className="text-xs text-slate-400">{user?.email || "Chưa kết nối email"}</p>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full mt-1 uppercase">
                      Tài khoản hoạt động
                    </span>
                  </div>
                </div>

                {/* SECTION 1: UNPAID COURSES */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
                    Lớp chờ đóng học phí (Cần thanh toán)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {appointments.filter(a => a.payment_status === "UNPAID").map((appt) => (
                      <div
                        key={appt.id}
                        onClick={() => { setPayingAppt(appt); setPaymentDetails(null); setPaymentComplete(false); }}
                        className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3.5 hover:scale-[1.01] transition duration-200 cursor-pointer"
                      >
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-slate-955 dark:text-white truncate">Lớp với: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}</h4>
                            <span className="text-[9px] bg-rose-500/10 text-rose-600 font-bold px-2 py-0.5 rounded border border-rose-500/10">Chờ đóng phí</span>
                          </div>
                          <div className="mt-2 text-[10px] text-slate-450 space-y-1">
                            <div>⏱️ Bắt đầu: {formatDateTimeText(appt.start_time)}</div>
                            <div className="font-bold text-rose-600 text-xs mt-1">Học phí: {formatVND(appt.price_paid)}</div>
                          </div>
                        </div>

                        {user?.role === "STUDENT" && (
                          <div className="flex gap-2 pt-2 border-t dark:border-slate-800">
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); logClientActivity("INIT_PAY_VIETQR", `Mở trang thanh toán VietQR cho lớp học ${appt.id}`); const t = token || localStorage.getItem("token") || ""; window.open(`/payment?appointmentId=${appt.id}&token=${encodeURIComponent(t)}`, "_blank"); }}
                              className="flex-1 bg-[#13519c] hover:bg-blue-800 text-white text-[10px] font-bold py-2 rounded-lg cursor-pointer transition flex items-center justify-center gap-1 shadow-sm"
                            >
                              <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                              VietQR
                            </button>
                            <button
                              type="button"
                              onClick={async (e) => {
                                e.stopPropagation();
                                handleWalletPayAppointment(appt);
                              }}
                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold py-2 rounded-lg cursor-pointer transition flex items-center justify-center gap-1 shadow-sm"
                            >
                              <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 12V8H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h14v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><circle cx="16" cy="12" r="2" /></svg>
                              Ví nội bộ ({formatVND(wallet.available_balance)})
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {appointments.filter(a => a.payment_status === "UNPAID").length === 0 && (
                    <p className="text-[11px] text-slate-400 italic">Bác không có đăng ký học nào đang chờ thanh toán.</p>
                  )}
                </div>

                {/* SECTION 2: ACTIVE CLASSES */}
                <div className="space-y-3 pt-4 border-t dark:border-slate-800">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    Lớp học đang diễn ra (Đã đóng học phí)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {appointments.filter(a => a.payment_status === "HOLDING" || a.payment_status === "RELEASED").map((appt) => (
                      <div key={appt.id} className="bg-white dark:bg-[#111827] rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.01] transition duration-200">
                        <div className="p-4 bg-gradient-to-br from-[#13519c] to-blue-700 text-white h-24 flex flex-col justify-between">
                          <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider w-max">LỚP HỌC ĐANG DIỄN RA</span>
                          <h4 className="text-xs font-bold leading-tight line-clamp-2">Dạy kèm cùng: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}</h4>
                        </div>
                        <div className="p-3 text-[11px] flex justify-between items-center bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
                          <span className="text-slate-400 font-medium truncate max-w-[150px]">Lớp 1-1 trực tuyến</span>
                          <button onClick={() => { logClientActivity("JOIN_CLASSROOM", `Vào phòng học trực tuyến lớp ${appt.id}`); handleJoinClassroom(appt); }} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded font-semibold text-[10px] cursor-pointer">Vào lớp học</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {appointments.filter(a => a.payment_status === "HOLDING" || a.payment_status === "RELEASED").length === 0 && (
                    <div className="text-center py-16 bg-white dark:bg-[#111827] border rounded-xl text-slate-400 text-xs shadow-sm">
                      Bác chưa có lớp học nào đang diễn ra. Vui lòng đặt lịch với gia sư và hoàn tất học phí để bắt đầu học.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 6: BOOKINGS */}
            {activeTab === "bookings" && (
              <div className="space-y-4">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                  Lịch Học Của Con & Gia Đình
                </h2>

                {appointments.length === 0 ? (
                  <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-xl border text-slate-450 text-xs">
                    Bác chưa đặt lịch học nào cho con học tập.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appointments.map((appt) => (
                      <div
                        key={appt.id}
                        className="bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold text-slate-900 dark:text-white">
                              🏫 Lớp học với: {user?.role === "STUDENT" ? appt.tutor_name : appt.student_name}
                            </span>
                            {appt.payment_status === "UNPAID" ? (
                              <span className="bg-rose-500/10 text-rose-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-rose-500/10">
                                Chờ đóng học phí
                              </span>
                            ) : (
                              <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-emerald-500/10">
                                Đã thanh toán - giam 3 ngày
                              </span>
                            )}
                          </div>

                          <div className="mt-2 text-[11px] text-slate-500 space-y-1">
                            <div>⏱️ Giờ học: <span className="font-semibold text-slate-800 dark:text-white">{formatDateTimeText(appt.start_time)}</span></div>
                            <div>⌛ Kết thúc: <span className="font-semibold text-slate-800 dark:text-white">{formatDateTimeText(appt.end_time)}</span></div>
                            <div className="font-semibold text-[#13519c] mt-1">
                              Học phí: {formatVND(appt.price_paid)}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {appt.payment_status === "UNPAID" && user?.role === "STUDENT" && (
                            <>
                              <button
                                type="button"
                                onClick={() => handleInitiatePayment(appt)}
                                className="bg-[#13519c] text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer shadow-sm"
                              >
                                💳 Thanh toán VietQR
                              </button>
                              <button
                                type="button"
                                onClick={() => handleWalletPayAppointment(appt)}
                                className="bg-emerald-600 text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 cursor-pointer shadow-sm"
                              >
                                👛 Ví nội bộ ({formatVND(wallet.available_balance)})
                              </button>
                            </>
                          )}
                          {appt.payment_status === "HOLDING" && (
                            <button
                              type="button"
                              onClick={() => handleJoinClassroom(appt)}
                              className="bg-emerald-600 text-white text-[11px] font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
                            >
                              💻 Vào lớp học
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 7: WALLET */}
            {activeTab === "wallet" && (
              <div className="space-y-6">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                  Ví Tiền Nội Bộ GiasuTop
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#13519c] to-blue-700 text-white rounded-xl p-5 shadow-sm">
                    <span className="text-[10px] font-semibold opacity-80 uppercase tracking-wider">Số dư khả dụng</span>
                    <div className="text-2xl font-bold mt-2">{formatVND(wallet.available_balance)}</div>
                  </div>

                  <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Tiền đang giam 3 ngày</span>
                    <div className="text-2xl font-bold mt-2 text-slate-700 dark:text-white">{formatVND(wallet.holding_balance)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Form Nạp Tiền */}
                  <div className="bg-white dark:bg-[#111827] p-5 border border-slate-200 dark:border-slate-850 rounded-xl shadow-sm space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-450">Nạp tiền vào ví (Giả lập)</h3>
                    <form onSubmit={handleWebTopup} className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-400 mb-1">Số tiền nạp (VND)</label>
                        <input
                          type="number"
                          value={topupAmountInput}
                          onChange={(e) => setTopupAmountInput(e.target.value)}
                          placeholder="Nhập số tiền muốn nạp..."
                          className="w-full h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#13519c] hover:bg-blue-800 text-white font-bold text-xs py-2 rounded-lg cursor-pointer transition shadow-sm"
                      >
                        Nạp tiền ngay
                      </button>
                    </form>
                  </div>

                  {/* Form Rút Tiền */}
                  <div className="bg-white dark:bg-[#111827] p-5 border border-slate-200 dark:border-slate-850 rounded-xl shadow-sm space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-450">Yêu cầu rút tiền</h3>
                    <form onSubmit={handleWebWithdraw} className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-400 mb-1">Số tiền rút (VND)</label>
                        <input
                          type="number"
                          value={withdrawAmountInput}
                          onChange={(e) => setWithdrawAmountInput(e.target.value)}
                          placeholder="Nhập số tiền muốn rút..."
                          className="w-full h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-400 mb-1">Số tài khoản</label>
                          <input
                            type="text"
                            value={bankNoInput}
                            onChange={(e) => setBankNoInput(e.target.value)}
                            placeholder="Số tài khoản..."
                            className="w-full h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-400 mb-1">Tên chủ tài khoản</label>
                          <input
                            type="text"
                            value={bankNameInput}
                            onChange={(e) => setBankNameInput(e.target.value)}
                            placeholder="Tên người nhận..."
                            className="w-full h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-2 rounded-lg cursor-pointer transition shadow-sm"
                      >
                        Gửi yêu cầu rút tiền
                      </button>
                    </form>
                  </div>
                </div>

                {/* Lịch sử giao dịch */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-450">Lịch sử giao dịch ví</h3>
                  <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl">
                    <table className="w-full border-collapse text-left text-xs">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          <th className="px-4 py-3">Ngày giao dịch</th>
                          <th className="px-4 py-3">Loại giao dịch</th>
                          <th className="px-4 py-3">Mã tham chiếu</th>
                          <th className="px-4 py-3 text-right">Số tiền</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 dark:divide-slate-800 font-mono text-[11px]">
                        {walletLedger.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="px-4 py-6 text-center text-slate-400 font-sans">Chưa có lịch sử giao dịch.</td>
                          </tr>
                        ) : (
                          walletLedger.map((l) => (
                            <tr key={l.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                              <td className="px-4 py-2.5 text-slate-400">{new Date(l.created_at).toLocaleString("vi-VN")}</td>
                              <td className="px-4 py-2.5 font-sans font-semibold">{l.entry_type_label || walletEntryTypeLabel(l.entry_type)}</td>
                              <td className="px-4 py-2.5 text-slate-550">{l.ref_id}</td>
                              <td className={`px-4 py-2.5 text-right font-bold ${l.amount > 0 ? "text-emerald-600" : "text-rose-600"}`}>
                                {l.amount > 0 ? "+" : ""}{formatVND(l.amount)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: ADMIN CONTROL PANEL */}
            {activeTab === "admin" && user?.role === "ADMIN" && (
              <AdminTab
                adminTab={adminTab}
                setAdminTab={setAdminTab}
                pendingTutors={pendingTutors}
                pendingDocs={pendingDocs}
                news={news}
                dbSubjects={dbSubjects}
                pendingCommissions={pendingCommissions}
                subjectNameInput={subjectNameInput}
                setSubjectNameInput={setSubjectNameInput}
                handleAddOrEditSubject={handleAddOrEditSubject}
                setEditingSubject={setEditingSubject}
                handleDeleteSubject={handleDeleteSubject}
                loadingPendingDocs={loadingPendingDocs}
                handleDecideDocument={handleDecideDocument}
                setEditingNews={setEditingNews}
                setNewsForm={setNewsForm}
                setNewsFormOpen={setNewsFormOpen}
                handleDeleteNews={handleDeleteNews}
                loadingPending={loadingPending}
                handleDecideTutor={handleDecideTutor}
                setRejectingTutorId={setRejectingTutorId}
                systemStats={systemStats}
                systemLogs={systemLogs}
                fetchSystemLogs={fetchSystemLogs}
                fetchSystemStats={fetchSystemStats}
                systemUsers={systemUsers}
                fetchSystemUsers={fetchSystemUsers}
                handleEditUserClick={handleEditUserClick}
                loadingCommissions={loadingCommissions}
                handleDecideCommission={handleDecideCommission}
                fetchPendingCommissions={fetchPendingCommissions}
                adminNotificationForm={adminNotificationForm}
                setAdminNotificationForm={setAdminNotificationForm}
                handleSendAdminNotification={handleSendAdminNotification}
                sendingAdminNotification={sendingAdminNotification}
                formatVND={formatVND}
                fetchPendingTutors={fetchPendingTutors}
                setPreviewDoc={setPreviewDoc}
              />
            )}

            {/* TAB: NOTIFICATIONS */}
            {activeTab === "notifications" && (
              <div className="space-y-4 pb-20 md:pb-0">
                <div className="bg-white dark:bg-[#111827] border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">Thông báo</h2>
                    <p className="text-xs text-slate-500 mt-1">Tất cả thông báo từ hệ thống, admin và các hoạt động liên quan đến tài khoản.</p>
                  </div>
                  <button
                    type="button"
                    onClick={markAllNotificationsReadClient}
                    className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Đánh dấu đã đọc
                  </button>
                </div>

                <div className="bg-white dark:bg-[#111827] border border-slate-200/60 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-sm text-slate-400">Chưa có thông báo nào.</div>
                  ) : (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {notifications.map((notification) => (
                        <button
                          key={notification.id}
                          type="button"
                          onClick={() => handleNotificationOpen(notification)}
                          className={`w-full text-left p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition ${notification.is_read ? "bg-white dark:bg-[#111827]" : "bg-blue-50/70 dark:bg-blue-950/20"}`}
                        >
                          <div className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${notification.is_read ? "bg-slate-300" : "bg-blue-600"}`} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">{notification.title}</h3>
                              <span className="text-[10px] text-slate-400 shrink-0">{new Date(notification.created_at).toLocaleString("vi-VN")}</span>
                            </div>
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-350 line-clamp-2">{notification.body}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 9: PROFILE (View/Edit My Profile or View Tutor Profile) */}
            {activeTab === "profile" && (
              <div className="space-y-6 pb-20 md:pb-0">
                {(tutorProfileToView ? (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 animate-fade-in relative">
                    <button onClick={() => { setTutorProfileToView(null); setActiveTab(previousTab); }} className="absolute top-4 right-4 h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer">
                      ✕
                    </button>
                    <div className="flex flex-col items-center gap-4 text-center mt-4">
                      <img src={getAvatarUrl(tutorProfileToView)} className="w-24 h-24 rounded-full border-4 border-blue-500 bg-slate-50 object-cover" alt="" />
                      <div>
                        <h2 className="text-xl font-bold flex items-center justify-center gap-1.5 dark:text-white">
                          {tutorProfileToView.full_name}
                          {tutorProfileToView.is_verified === "APPROVED" && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">✓ Đã xác minh</span>
                          )}
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tutorProfileToView.school} • {tutorProfileToView.major}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-700">
                        <span className="text-xs uppercase font-bold text-slate-400">Học phí</span>
                        <div className="text-base font-black text-rose-600 mt-1">{formatVND(tutorProfileToView.hourly_rate)}/h</div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center border border-slate-100 dark:border-slate-700">
                        <span className="text-xs uppercase font-bold text-slate-400">Đánh giá</span>
                        <div className="text-base font-black text-amber-500 mt-1">⭐ {(4.7 + (tutorProfileToView.full_name.charCodeAt(0) % 4) * 0.1).toFixed(1)} ({(tutorProfileToView.full_name.charCodeAt(1) % 40) + 15})</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-bold mb-2 dark:text-white">Giới thiệu bản thân</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl leading-relaxed whitespace-pre-line border border-slate-100 dark:border-slate-700">{tutorProfileToView.bio || "Chưa có thông tin giới thiệu."}</p>
                    </div>

                    {tutorProfileToView.documents && tutorProfileToView.documents.length > 0 && (
                      <div className="mt-6 text-left">
                        <h3 className="font-bold mb-3 dark:text-white">Bằng cấp & Chứng chỉ ({tutorProfileToView.documents.length})</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {tutorProfileToView.documents.map((doc: any) => {
                            const fileUrl = `http://localhost:5000/api/tutors/documents/${doc.id}?token=${token}`;
                            const isImage = doc.mime_type?.startsWith("image/");
                            return (
                              <div
                                key={doc.id}
                                className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col justify-between gap-2"
                              >
                                <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate" title={doc.original_name}>
                                  {doc.original_name}
                                </span>
                                {isImage ? (
                                  <div
                                    onClick={() => setPreviewDoc({ title: doc.original_name, file_url: fileUrl })}
                                    className="block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-900 cursor-pointer"
                                  >
                                    <img
                                      src={fileUrl}
                                      alt={doc.original_name}
                                      className="h-20 w-full object-cover rounded hover:scale-105 transition duration-200"
                                    />
                                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold">
                                      XEM 🔎
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => setPreviewDoc({ title: doc.original_name, file_url: fileUrl })}
                                    className="h-20 rounded bg-blue-50 dark:bg-slate-850 flex flex-col items-center justify-center border border-dashed border-blue-200/50 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-800 transition text-[10px] font-bold gap-1 text-center px-1 cursor-pointer"
                                  >
                                    <span>📄 {doc.original_name.split(".").pop()?.toUpperCase()} File</span>
                                    <span className="text-[8px] font-semibold text-slate-400 dark:text-slate-500">
                                      Click để mở ↗
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white"><i className="fa-solid fa-star text-amber-500"></i> Đánh giá từ học viên</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=HsTuan" className="w-6 h-6 bg-white rounded-full" alt="" />
                              <span className="font-bold text-sm dark:text-white">HS. Nguyễn Tuấn</span>
                            </div>
                            <span className="text-amber-500 text-xs tracking-widest">⭐⭐⭐⭐⭐</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-350">Gia sư dạy rất dễ hiểu, con mình học tiến bộ hẳn sau 1 tháng.</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=HsMai" className="w-6 h-6 bg-white rounded-full" alt="" />
                              <span className="font-bold text-sm dark:text-white">HS. Phạm Mai</span>
                            </div>
                            <span className="text-amber-500 text-xs tracking-widest">⭐⭐⭐⭐⭐</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-350">Thầy siêu nhiệt tình luôn ạ, cho bài tập cũng vừa sức.</p>
                        </div>
                      </div>

                      {user && user.role === "STUDENT" && (
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                          <h4 className="font-bold text-sm mb-3 dark:text-white">Viết đánh giá của bạn</h4>
                          <div className="flex gap-2 mb-3">
                            {[1, 2, 3, 4, 5].map(star => <i key={star} className="fa-solid fa-star text-slate-300 hover:text-amber-500 cursor-pointer text-xl hover:scale-110 transition-transform"></i>)}
                          </div>
                          <textarea placeholder="Nhập cảm nhận của bạn về gia sư..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 dark:text-white placeholder-slate-400"></textarea>
                          <button className="mt-3 bg-[#13519c] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-800 transition shadow flex items-center gap-2">
                            <i className="fa-regular fa-paper-plane"></i> Gửi đánh giá
                          </button>
                        </div>
                      )}
                    </div>
                  </div>)
                  : (user ? (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 md:p-8 animate-fade-in">
                      <h2 className="text-xl font-bold mb-6 dark:text-white">Hồ sơ cá nhân</h2>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center gap-4 md:w-1/3">
                          <div className="relative">
                            <img
                              src={completeAvatarPreview || getAvatarUrl(user)}
                              className="w-32 h-32 rounded-full bg-slate-100 border-4 border-white shadow-lg object-cover"
                              alt="Avatar"
                            />
                            <button
                              type="button"
                              onClick={() => profileAvatarInputRef.current?.click()}
                              className="absolute bottom-0 right-0 bg-[#13519c] text-white p-2 rounded-full shadow hover:bg-blue-800 cursor-pointer border-none"
                              title="Tải lên ảnh đại diện"
                            >
                              <i className="fa-solid fa-camera"></i>
                            </button>
                            <input
                              ref={profileAvatarInputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setCompleteAvatarFile(file);
                                  setCompleteAvatarPreview(URL.createObjectURL(file));
                                }
                              }}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg dark:text-white flex items-center justify-center gap-1.5">
                              {user.fullName}
                              {user.role === "TUTOR" && tutorStatus === "APPROVED" && (
                                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full inline-block align-middle">
                                  ✓ Đã xác minh
                                </span>
                              )}
                            </div>
                            <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mt-1 inline-block">
                              Vai trò: {user.role === "TUTOR" ? "Gia Sư" : user.role === "STUDENT" ? "Học Sinh / Phụ Huynh" : "Quản Trị Viên"}
                            </div>
                          </div>
                        </div>

                        <form onSubmit={handleCompleteProfile} className="flex-1 space-y-5 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                          <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Họ và tên</label>
                            <input
                              type="text"
                              value={completeName}
                              onChange={(e) => setCompleteName(e.target.value)}
                              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Email (Không thể đổi)</label>
                            <input
                              type="text"
                              defaultValue={user.email}
                              disabled
                              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-xl px-4 py-3 text-sm font-semibold cursor-not-allowed"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Số điện thoại</label>
                              <input
                                type="text"
                                value={completePhone}
                                onChange={(e) => setCompletePhone(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Địa chỉ</label>
                              <input
                                type="text"
                                value={completeAddress}
                                onChange={(e) => setCompleteAddress(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Ngày sinh</label>
                              <input
                                type="date"
                                value={completeDob}
                                onChange={(e) => setCompleteDob(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Tuổi</label>
                              <input
                                type="number"
                                value={completeAge}
                                onChange={(e) => setCompleteAge(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Giới thiệu bản thân (Mô tả)</label>
                            <textarea
                              value={completeBio}
                              onChange={(e) => setCompleteBio(e.target.value)}
                              className="w-full h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none"
                              required
                            />
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={submittingCompletion}
                              className="w-full md:w-auto bg-[#13519c] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                              <i className="fa-solid fa-floppy-disk"></i>
                              {submittingCompletion ? "Đang lưu..." : "Lưu thay đổi"}
                            </button>
                          </div>

                          {user.role === "TUTOR" && (
                            <div className="border-t border-slate-200 dark:border-slate-700 pt-5 mt-5">
                              <h3 className="text-xs font-bold text-slate-400 uppercase mb-3 text-left">Minh chứng xác minh của bạn</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {verificationForm.cccdFront && (
                                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-left">
                                    <span className="text-[10px] font-bold text-slate-500">CCCD Mặt trước</span>
                                    <div
                                      onClick={() => setPreviewDoc({ title: "CCCD Mặt trước", file_url: verificationForm.cccdFront })}
                                      className="relative group overflow-hidden rounded h-20 bg-slate-100 dark:bg-slate-950 cursor-pointer"
                                    >
                                      <img src={verificationForm.cccdFront} className="h-full w-full object-cover rounded hover:scale-105 transition" alt="CCCD Front" />
                                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold">XEM 🔎</div>
                                    </div>
                                  </div>
                                )}
                                {verificationForm.cccdBack && (
                                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-left">
                                    <span className="text-[10px] font-bold text-slate-500">CCCD Mặt sau</span>
                                    <div
                                      onClick={() => setPreviewDoc({ title: "CCCD Mặt sau", file_url: verificationForm.cccdBack })}
                                      className="relative group overflow-hidden rounded h-20 bg-slate-100 dark:bg-slate-950 cursor-pointer"
                                    >
                                      <img src={verificationForm.cccdBack} className="h-full w-full object-cover rounded hover:scale-105 transition" alt="CCCD Back" />
                                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold">XEM 🔎</div>
                                    </div>
                                  </div>
                                )}
                                {verificationForm.certificate && (
                                  <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-left">
                                    <span className="text-[10px] font-bold text-slate-500">Bằng cấp / Chứng chỉ</span>
                                    {/\.(png|jpe?g|webp|gif)$/i.test(verificationForm.certificate) ? (
                                      <div
                                        onClick={() => setPreviewDoc({ title: "Bằng cấp / Chứng chỉ", file_url: verificationForm.certificate })}
                                        className="relative group overflow-hidden rounded h-20 bg-slate-100 dark:bg-slate-950 cursor-pointer"
                                      >
                                        <img src={verificationForm.certificate} className="h-full w-full object-cover rounded hover:scale-105 transition" alt="Certificate" />
                                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold">XEM 🔎</div>
                                      </div>
                                    ) : (
                                      <div
                                        onClick={() => setPreviewDoc({ title: "Bằng cấp / Chứng chỉ", file_url: verificationForm.certificate })}
                                        className="h-20 rounded bg-blue-50 dark:bg-slate-850 flex flex-col items-center justify-center border border-dashed border-blue-200/50 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-800 transition text-[10px] font-bold gap-1 text-center cursor-pointer"
                                      >
                                        <span>📄 FILE</span>
                                        <span className="text-[8px] font-semibold text-slate-400 dark:text-slate-500">Click để mở ↗</span>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 text-[11px] text-slate-400 text-left">
                                Trạng thái xác minh:{" "}
                                <span className={`font-bold ${tutorStatus === "APPROVED" ? "text-emerald-600" : tutorStatus === "PENDING" ? "text-amber-500" : "text-rose-500"}`}>
                                  {tutorStatus === "APPROVED" ? "✓ Đã phê duyệt" : tutorStatus === "PENDING" ? "🕒 Đang chờ duyệt" : "📝 Chưa xác minh / Bị từ chối"}
                                </span>
                              </div>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-10 text-center animate-fade-in border border-slate-100 dark:border-slate-800 mt-10 max-w-md mx-auto">
                      <img src="https://i.ibb.co/NdgYx2Fy/Gemini-Generated-Image-89azsx89azsx89az.png" alt="Logo" className="w-24 h-24 mx-auto rounded-3xl mb-6 shadow-md" />
                      <h2 className="text-2xl font-bold mb-3 dark:text-white">Bạn chưa đăng nhập</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">Vui lòng đăng nhập hoặc tạo tài khoản mới để trải nghiệm đầy đủ các tính năng cá nhân hóa của GiasuTop.</p>
                      <button onClick={() => openAuth("login")} className="w-full bg-[#13519c] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition shadow-[0_8px_20px_rgba(19,81,156,0.3)]">
                        Đăng nhập / Đăng ký ngay
                      </button>
                    </div>
                  )
                  )
                )
                }
              </div>
            )}
          </div>

          {/* Footer - cuộn tự nhiên ở cuối main, không đè chồng */}
          <footer className="mt-12 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#111827] rounded-2xl p-4 shadow-sm w-full">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-[#13519c] text-white font-black flex items-center justify-center text-xs">K</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Bản quyền thuộc về{" "}
                  <a
                    href="https://kntech.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#13519c] dark:text-blue-400 font-bold hover:underline"
                  >
                    GiasuTop
                  </a>
                  {" "}© 2026 — Nền tảng gia sư trực tuyến hàng đầu Việt Nam
                </p>
              </div>
              <div className="flex gap-4 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="hover:text-[#13519c] dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Điều khoản dịch vụ</span>
                <span className="hover:text-[#13519c] dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Chính sách bảo mật</span>
                <span className="hover:text-[#13519c] dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Liên hệ hợp tác</span>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <BookingModal
        selectedTutor={selectedTutor}
        setSelectedTutor={(tutor) => {
          setSelectedTutor(tutor);
          if (!tutor) setBookingError("");
        }}
        bookingError={bookingError}
        setBookingError={setBookingError}
        bookingSuccess={bookingSuccess}
        tutorBookingType={tutorBookingType}
        setTutorBookingType={setTutorBookingType}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        bookingStartHour={bookingStartHour}
        setBookingStartHour={setBookingStartHour}
        longTermSchedule={longTermSchedule}
        setLongTermSchedule={setLongTermSchedule}
        longTermWeeks={longTermWeeks}
        setLongTermWeeks={setLongTermWeeks}
        bookingDuration={bookingDuration}
        setBookingDuration={setBookingDuration}
        formatVND={formatVND}
        handleBookTutor={handleBookTutor}
      />

      <PaymentModal
        payingAppt={payingAppt}
        setPayingAppt={setPayingAppt}
        paymentDetails={paymentDetails}
        setPaymentDetails={setPaymentDetails}
        paymentComplete={paymentComplete}
        setPaymentComplete={setPaymentComplete}
        generatingQr={generatingQr}
        token={token}
        wallet={wallet}
        formatVND={formatVND}
        formatDateTimeText={formatDateTimeText}
        showKntechAlert={showKntechAlert}
        logClientActivity={logClientActivity}
        fetchUserData={fetchUserData}
        setTopupAmountInput={setTopupAmountInput}
        setActiveTab={setActiveTab}
        handleSimulatePayment={handleSimulatePayment}
        handleWalletPayAppointment={handleWalletPayAppointment}
      />

      <ClassroomView
        activeClassroom={activeClassroom}
        setActiveClassroom={setActiveClassroom}
        drawingColorRef={drawingColorRef}
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        draw={draw}
        stopDrawing={stopDrawing}
        clearCanvas={clearCanvas}
        isMicOn={isMicOn}
        setIsMicOn={setIsMicOn}
        isCamOn={isCamOn}
        setIsCamOn={setIsCamOn}
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        handleSendMessage={handleSendMessage}
      />

      <UploadDocModal
        uploadModalOpen={uploadModalOpen}
        setUploadModalOpen={setUploadModalOpen}
        docUploadForm={docUploadForm}
        setDocUploadForm={setDocUploadForm}
        docFileToUpload={docFileToUpload}
        setDocFileToUpload={setDocFileToUpload}
        handleUploadDoc={handleUploadDoc}
      />

      <RejectTutorModal
        rejectingTutorId={rejectingTutorId}
        setRejectingTutorId={setRejectingTutorId}
        adminRejectReason={adminRejectReason}
        setAdminRejectReason={setAdminRejectReason}
        handleDecideTutor={handleDecideTutor}
      />

      <AdminEditUserModal
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        userForm={userForm}
        setUserForm={setUserForm}
        handleUpdateUser={handleUpdateUser}
      />

      <TutorDetailModal
        viewingTutor={viewingTutor}
        setViewingTutor={setViewingTutor}
        setTutorProfileToView={(tutor) => {
          if (tutor) {
            setPreviousTab(activeTab);
          }
          setTutorProfileToView(tutor);
        }}
        setActiveTab={setActiveTab}
        token={token}
        setChatActivePartner={setChatActivePartner}
        setHomeSubTab={setHomeSubTab}
        setSelectedTutor={setSelectedTutor}
        openAuth={openAuth}
        formatVND={formatVND}
        setPreviewDoc={setPreviewDoc}
      />

      <DocDetailModal
        selectedDocument={selectedDocument}
        setSelectedDocument={setSelectedDocument}
        formatVND={formatVND}
        setPreviewDoc={setPreviewDoc}
      />

      <DocumentPreviewModal
        previewDoc={previewDoc}
        onClose={() => setPreviewDoc(null)}
      />




      <TutorProfileModal
        tutorProfileModalOpen={tutorProfileModalOpen}
        setTutorProfileModalOpen={setTutorProfileModalOpen}
        tutorStatus={tutorStatus}
        tutorRejectReason={tutorRejectReason || ""}
        tutorProfileForm={tutorProfileForm}
        setTutorProfileForm={setTutorProfileForm}
        newCommissionRate={newCommissionRate}
        setNewCommissionRate={setNewCommissionRate}
        submittingVerification={submittingVerification}
        portraitFile={portraitFile}
        cccdFrontFile={cccdFrontFile}
        cccdBackFile={cccdBackFile}
        certificatesFiles={certificatesFiles}
        setPortraitFile={setPortraitFile}
        setCccdFrontFile={setCccdFrontFile}
        setCccdBackFile={setCccdBackFile}
        setCertificatesFiles={setCertificatesFiles}
        handleUpdateTutorProfile={handleUpdateTutorProfile}
        handleSubmitVerification={handleSubmitVerification}
        token={token}
        formatVND={formatVND}
        showKntechAlert={showKntechAlert}
      />


      <NewsModal
        newsFormOpen={newsFormOpen}
        setNewsFormOpen={setNewsFormOpen}
        editingNews={editingNews}
        newsForm={newsForm}
        setNewsForm={setNewsForm}
        handleAddOrEditNews={handleAddOrEditNews}
      />

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



      {/* AUTH MODAL DIALOG */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        initialTab={authModalConfig.tab}
        initialRole={authModalConfig.role}
      />

      {/* MANDATORY PROFILE COMPLETION MODAL */}
      {token && user && isProfileIncomplete(user) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 md:p-8 shadow-2xl ring-1 ring-black/5 dark:bg-[#0b1220] dark:ring-white/10 my-8 animate-fade-in">
            <div className="text-center pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                🔒 Hoàn Tất Thông Tin Bắt Buộc
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Để tiếp tục sử dụng GiasuTop, vui lòng cập nhật đầy đủ thông tin cá nhân cơ bản dưới đây.
              </p>
            </div>

            <form onSubmit={handleCompleteProfile} className="mt-6 space-y-4">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <img
                    src={completeAvatarPreview || getAvatarUrl(user)}
                    className="w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200 shadow-md object-cover"
                    alt="Avatar"
                  />
                  <button
                    type="button"
                    onClick={() => completeAvatarInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-[#13519c] text-white p-1.5 rounded-full shadow hover:bg-blue-800 cursor-pointer border-none"
                    title="Tải lên ảnh đại diện"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </button>
                  <input
                    ref={completeAvatarInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setCompleteAvatarFile(file);
                        setCompleteAvatarPreview(URL.createObjectURL(file));
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Tải lên ảnh đại diện</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  required
                  value={completeName}
                  onChange={(e) => setCompleteName(e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    required
                    value={completePhone}
                    onChange={(e) => setCompletePhone(e.target.value)}
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    required
                    value={completeAddress}
                    onChange={(e) => setCompleteAddress(e.target.value)}
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                    Ngày sinh
                  </label>
                  <input
                    type="date"
                    required
                    value={completeDob}
                    onChange={(e) => setCompleteDob(e.target.value)}
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                    Tuổi
                  </label>
                  <input
                    type="number"
                    required
                    value={completeAge}
                    onChange={(e) => setCompleteAge(e.target.value)}
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-355 mb-1">
                  Giới thiệu bản thân (Mô tả)
                </label>
                <textarea
                  required
                  value={completeBio}
                  onChange={(e) => setCompleteBio(e.target.value)}
                  className="w-full h-20 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submittingCompletion}
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white rounded-xl shadow-lg transition hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {submittingCompletion ? "Đang xử lý..." : "Xác nhận hoàn tất"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CUSTOM ALERT DIALOG */}
      <CustomAlert
        isOpen={customAlertOpen}
        type={customAlertType}
        title={customAlertTitle}
        message={customAlertMessage}
        imageUrl={customAlertImg}
        onClose={() => setCustomAlertOpen(false)}
      />

      {confirmDialog && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-[#13519c]">
              <IconWallet className="h-7 w-7" />
            </div>
            <h3 className="text-center text-base font-bold text-slate-900 dark:text-white">{confirmDialog.title}</h3>
            <p className="mt-2 whitespace-pre-line text-center text-xs leading-relaxed text-slate-550 dark:text-slate-400">
              {confirmDialog.message}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConfirmDialog(null)}
                className="h-10 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                {confirmDialog.cancelText || "Hủy"}
              </button>
              <button
                type="button"
                onClick={async () => {
                  const action = confirmDialog.onConfirm;
                  setConfirmDialog(null);
                  await action();
                }}
                className={`h-10 rounded-xl text-xs font-bold text-white ${
                  confirmDialog.tone === "danger" ? "bg-rose-600 hover:bg-rose-700" : "bg-[#13519c] hover:bg-blue-800"
                }`}
              >
                {confirmDialog.confirmText || "Xác nhận"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-2xl z-40 px-2 pb-5 pt-2 flex justify-between items-center">
        {/* Tab 1: Trang chủ */}
        <button onClick={() => setActiveTab("home")} className={`flex flex-col items-center justify-center w-1/4 ${activeTab === "home" ? "text-blue-500" : "text-slate-400"}`}>
          <div className={`p-1.5 rounded-full ${activeTab === "home" ? "bg-blue-50" : ""}`}>
            <svg className="w-5 h-5" fill={activeTab === "home" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Trang chủ</span>
        </button>

        {/* Tab 2: Việc của tôi */}
        <button onClick={() => setActiveTab("bookings")} className={`flex flex-col items-center justify-center w-1/4 ${activeTab === "bookings" ? "text-blue-500" : "text-slate-400"}`}>
          <div className={`p-1.5 rounded-full ${activeTab === "bookings" ? "bg-blue-50" : ""}`}>
            <svg className="w-5 h-5" fill={activeTab === "bookings" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <span className="text-[10px] font-medium mt-0.5">Việc của tôi</span>
        </button>

        {/* Tab 3: Tin tức (map with news) */}
        <button onClick={() => setActiveTab("news")} className={`flex flex-col items-center justify-center w-1/4 ${activeTab === "news" ? "text-blue-500" : "text-slate-400"}`}>
          <div className={`p-1.5 rounded-full ${activeTab === "news" ? "bg-blue-50" : ""}`}>
            <svg className="w-5 h-5" fill={activeTab === "news" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
          </div>
          <span className="text-[10px] font-medium mt-0.5">Tin tức</span>
        </button>

        {/* Tab 4: Thông báo */}
        <button onClick={() => token ? setActiveTab("notifications") : openAuth("login")} className={`flex flex-col items-center justify-center w-1/4 ${activeTab === "notifications" ? "text-blue-500" : "text-slate-400"}`}>
          <div className={`p-1.5 rounded-full relative ${activeTab === "notifications" ? "bg-blue-50" : ""}`}>
            <IconBell className="w-5 h-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -right-1 -top-1 min-w-3.5 h-3.5 px-0.5 rounded-full bg-rose-500 text-white text-[8px] font-black flex items-center justify-center">
                {unreadNotifications > 9 ? "9+" : unreadNotifications}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-0.5">Thông báo</span>
        </button>
      </div>

      {/* MOBILE DRAWER MENU */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDrawerOpen(false)}></div>

          {/* Drawer Content */}
          <div className="relative w-64 max-w-[80%] bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-slide-in-right origin-left" style={{ animationDirection: "normal" }}>
            <div className="p-4 bg-gradient-to-r from-blue-600 to-[#13519c] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://i.ibb.co/NdgYx2Fy/Gemini-Generated-Image-89azsx89azsx89az.png" alt="Logo" className="h-8 w-8 rounded-lg object-cover bg-white" />
                <span className="font-bold">Menu</span>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="text-white/80 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="flex-1 py-4 flex flex-col gap-1 px-3">
              {/* Tab 1: Trang chủ */}
              <button
                onClick={() => {
                  setActiveTab("home");
                  setHomeSubTab("feed");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "home" && homeSubTab === "feed"
                  ? "bg-blue-50 text-blue-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-solid fa-house text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Trang chủ</span>
              </button>

              {/* Tab 1b: Cộng đồng chat */}
              <button
                onClick={() => {
                  setActiveTab("home");
                  setHomeSubTab("community");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "home" && homeSubTab === "community"
                  ? "bg-emerald-50 text-emerald-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-solid fa-comments text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Cộng đồng chat</span>
              </button>

              {/* Tab 2: Gia sư */}
              <button
                onClick={() => {
                  setActiveTab("courses");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "courses"
                  ? "bg-blue-50 text-blue-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-400 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-solid fa-graduation-cap text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Tìm gia sư giỏi</span>
              </button>

              {/* Tab 3: Tài liệu */}
              <button
                onClick={() => {
                  setActiveTab("documents");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "documents"
                  ? "bg-orange-50 text-orange-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-orange-505 text-white flex items-center justify-center shadow-sm shrink-0" style={{ backgroundColor: "#ff9800" }}>
                  <i className="fa-regular fa-folder-open text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Thư viện tài liệu</span>
              </button>

              {/* Tab 4: Tin tức */}
              <button
                onClick={() => {
                  setActiveTab("news");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "news"
                  ? "bg-slate-100 text-slate-800"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-slate-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-regular fa-file-lines text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Tin tức GiasuTop</span>
              </button>

              {/* Tab 5: Lịch trình */}
              <button
                onClick={() => {
                  setActiveTab("bookings");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "bookings"
                  ? "bg-yellow-50 text-yellow-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-yellow-400 text-slate-850 flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-regular fa-calendar-check text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Lịch trình học</span>
              </button>

              {/* Tab 6: Ví / Thu nhập */}
              <button
                onClick={() => {
                  setActiveTab("wallet");
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "wallet"
                  ? "bg-green-50 text-green-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-solid fa-money-check-dollar text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Ví / Thu nhập</span>
              </button>

              {/* Tab 7: Trang cá nhân */}
              <button
                onClick={() => {
                  if (!token) {
                    openAuth("login");
                  } else {
                    setTutorProfileToView(null);
                    setActiveTab("profile");
                  }
                  setIsDrawerOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "profile" && !tutorProfileToView
                  ? "bg-teal-50 text-teal-700"
                  : "hover:bg-slate-50 text-slate-700"
                  }`}
              >
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-regular fa-user text-sm"></i>
                </div>
                <span className="text-xs font-semibold">Trang cá nhân</span>
              </button>

              {/* Tab 8: Quản trị */}
              {user && user.role === "ADMIN" && (
                <button
                  onClick={() => {
                    setActiveTab("admin");
                    setAdminTab("subjects");
                    setIsDrawerOpen(false);
                  }}
                  className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition cursor-pointer ${activeTab === "admin"
                    ? "bg-rose-50 text-rose-700"
                    : "hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm shrink-0">
                    <i className="fa-solid fa-user-gear text-sm"></i>
                  </div>
                  <span className="text-xs font-semibold">Quản trị hệ thống</span>
                </button>
              )}
            </div>


            <div className="p-4 border-t border-slate-100">
              {token && user ? (
                <button onClick={() => { handleLogout(); setIsDrawerOpen(false); }} className="w-full bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-xl hover:bg-slate-200">
                  Đăng xuất
                </button>
              ) : (
                <button onClick={() => { openAuth("login"); setIsDrawerOpen(false); }} className="w-full bg-[#13519c] text-white font-semibold py-2.5 rounded-xl shadow hover:bg-blue-800">
                  Đăng nhập
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
