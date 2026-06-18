export interface TutorProfile {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  avatarUrl?: string;
  
  // Học vấn & Năng lực
  university: string;
  academicYear: string; 
  subjectsToTeach: string[];
  gpa?: number;
  transcriptUrl: string; // Link ảnh/PDF chứng minh học bạ, bảng điểm
  certificates?: string[]; // Chứng chỉ ngoại ngữ, tin học, giải thưởng...
  trialVideoUrl?: string; // Link video dạy thử ngắn
  
  // Cấu hình hiển thị & Giá
  hourlyRate: number; // Mức giá theo giờ (VNĐ)
  rating: number;
  isVerified: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}