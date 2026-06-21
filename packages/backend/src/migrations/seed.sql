-- Seed demo data (DO NOT use in production).

-- Users
INSERT INTO users (id, full_name, username, email, password_hash, role, phone, avatar_url, status)
VALUES
('11111111-1111-1111-1111-111111111111', 'Admin GiasuTop', 'admin', 'admin@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'ADMIN', '0999999999', NULL, 'ACTIVE'),
('tutor-8888-8888-8888-888888888888', 'Gia sư Demo', 'tutor_demo', 'tutor@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000000', NULL, 'ACTIVE'),
('33333333-3333-3333-3333-333333333333', 'Học sinh Demo', 'student_demo', 'student@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'STUDENT', '0911111111', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000001', 'Nguyễn Văn Toán', 'vantoan', 'toan@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000001', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000002', 'Trần Thị Lý', 'thily', 'ly@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000002', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000003', 'Lê Hoàng Hóa', 'hoanghoa', 'hoa@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000003', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000004', 'Phạm Minh Văn', 'minhvan', 'van@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000004', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000005', 'Vũ Quốc Anh', 'quocanh', 'anh@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000005', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000006', 'Hoàng Ngọc Sinh', 'ngocsinh', 'sinh@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000006', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000007', 'Đặng Thùy Sử', 'thuysu', 'su@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000007', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000008', 'Ngô Phương Địa', 'phuongdia', 'dia@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000008', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000009', 'Đỗ Thành Coder', 'thanhcoder', 'coder@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000009', NULL, 'ACTIVE'),
('tutor-0000-0000-0000-000000000010', 'Bùi Xuân Nhạc', 'xuannhac', 'nhac@giasu.local', '$2b$12$oL7/etpjSvnNkHy1JeN3IurIeyeZYAnrWPgWY2vNyUYhHhFhstI42', 'TUTOR', '0900000010', NULL, 'ACTIVE');;

-- Wallet accounts
INSERT INTO wallet_accounts (user_id, available_balance, holding_balance)
VALUES
('tutor-8888-8888-8888-888888888888', 1500000.00, 0.00),
('33333333-3333-3333-3333-333333333333', 5000000.00, 500000.00),
('tutor-0000-0000-0000-000000000001', 200000.00, 0.00),
('tutor-0000-0000-0000-000000000002', 300000.00, 0.00),
('tutor-0000-0000-0000-000000000003', 400000.00, 0.00),
('tutor-0000-0000-0000-000000000004', 500000.00, 0.00),
('tutor-0000-0000-0000-000000000005', 600000.00, 0.00),
('tutor-0000-0000-0000-000000000006', 700000.00, 0.00),
('tutor-0000-0000-0000-000000000007', 800000.00, 0.00),
('tutor-0000-0000-0000-000000000008', 900000.00, 0.00),
('tutor-0000-0000-0000-000000000009', 1000000.00, 0.00),
('tutor-0000-0000-0000-000000000010', 1100000.00, 0.00);

-- Wallet Ledger logs
INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id)
VALUES
('33333333-3333-3333-3333-333333333333', 'TOPUP', 5500000.00, 'SEPAY', 'TX123456'),
('33333333-3333-3333-3333-333333333333', 'HOLD', -500000.00, 'BOOKING', 'BOOK-TEST-01'),
('tutor-8888-8888-8888-888888888888', 'TOPUP', 1500000.00, 'SEPAY', 'TX123457');

-- Tutor profile (approved)
INSERT INTO tutor_profiles (user_id, bio, school, major, year_of_study, hourly_rate, subjects_to_teach, is_verified)
VALUES
('tutor-8888-8888-8888-888888888888', 'Gia sư Toán/Lý - dạy dễ hiểu, có lộ trình.', 'ĐH Bách Khoa', 'Kỹ thuật', 'Năm 3', 150000.00, 'Toán,Lý', 'APPROVED'),
('tutor-0000-0000-0000-000000000001', 'Chuyên Toán luyện thi Đại Học, học là điểm cao', 'ĐH Sư Phạm HN', 'Toán Học', 'Năm 4', 200000.00, 'Toán', 'APPROVED'),
('tutor-0000-0000-0000-000000000002', 'Cử nhân chuyên Vật Lý, nhận kèm lớp 10-12', 'ĐH Khoa Học Tự Nhiên', 'Vật Lý', 'Đã tốt nghiệp', 250000.00, 'Lý', 'APPROVED'),
('tutor-0000-0000-0000-000000000003', 'Học sinh giỏi Quốc Gia môn Hóa', 'ĐH Y Dược', 'Y Khoa', 'Năm 2', 300000.00, 'Hóa', 'APPROVED'),
('tutor-0000-0000-0000-000000000004', 'Dạy Văn bằng sơ đồ tư duy, kích thích sáng tạo', 'ĐH KHXH&NV', 'Văn Học', 'Năm 3', 180000.00, 'Văn', 'APPROVED'),
('tutor-0000-0000-0000-000000000005', 'IELTS 8.0, kinh nghiệm luyện thi vào 10', 'ĐH Ngoại Ngữ', 'Ngôn Ngữ Anh', 'Năm 4', 350000.00, 'Tiếng Anh', 'APPROVED'),
('tutor-0000-0000-0000-000000000006', 'Dạy Sinh học thi Y Dược', 'ĐH Y Hà Nội', 'Y Đa Khoa', 'Năm 5', 250000.00, 'Sinh học', 'APPROVED'),
('tutor-0000-0000-0000-000000000007', 'Gia sư Lịch Sử, hiểu rõ cội nguồn', 'ĐH Sư Phạm HN', 'Lịch Sử', 'Đã tốt nghiệp', 150000.00, 'Lịch sử', 'APPROVED'),
('tutor-0000-0000-0000-000000000008', 'Gia sư Địa Lý, đạt giải QG', 'ĐH Sư Phạm HN', 'Địa Lý', 'Năm 3', 150000.00, 'Địa lý', 'APPROVED'),
('tutor-0000-0000-0000-000000000009', 'Lập trình viên, dạy tin học, lập trình cơ bản', 'ĐH Công Nghệ', 'CNTT', 'Năm 4', 300000.00, 'Tin học', 'APPROVED'),
('tutor-0000-0000-0000-000000000010', 'Gia sư âm nhạc, piano cơ bản', 'Học viện Âm Nhạc QGVN', 'Piano', 'Năm 2', 400000.00, 'Âm nhạc', 'APPROVED');

-- Availability
INSERT INTO tutor_availability (tutor_user_id, weekday, start_minute, end_minute, timezone)
VALUES
('tutor-8888-8888-8888-888888888888', 1, 480, 720, 'Asia/Ho_Chi_Minh'),
('tutor-8888-8888-8888-888888888888', 3, 480, 720, 'Asia/Ho_Chi_Minh'),
('tutor-8888-8888-8888-888888888888', 5, 480, 720, 'Asia/Ho_Chi_Minh');

-- Subjects
INSERT INTO subjects (name) VALUES
('Toán'),
('Lý'),
('Hóa'),
('Văn'),
('Tiếng Anh'),
('Sinh học'),
('Lịch sử'),
('Địa lý')
ON DUPLICATE KEY UPDATE name=name;

-- Locations
INSERT INTO locations (name) VALUES
('Hà Nội'),
('TP. Hồ Chí Minh'),
('Đà Nẵng'),
('Cần Thơ'),
('Hải Phòng'),
('Bình Dương'),
('Đồng Nai')
ON DUPLICATE KEY UPDATE name=name;

-- Grades
INSERT INTO grades (name) VALUES
('Lớp 1'),
('Lớp 2'),
('Lớp 3'),
('Lớp 4'),
('Lớp 5'),
('Lớp 6'),
('Lớp 7'),
('Lớp 8'),
('Lớp 9'),
('Lớp 10'),
('Lớp 11'),
('Lớp 12'),
('Luyện thi ĐH')
ON DUPLICATE KEY UPDATE name=name;

-- News Seeds
INSERT INTO news (title, summary, content, thumbnail_url, category) VALUES
('Hướng dẫn ôn thi tốt nghiệp THPT đạt kết quả cao', 'Tổng hợp kinh nghiệm và phương pháp ôn tập hiệu quả từ các gia sư thủ khoa trong kỳ thi tốt nghiệp THPT.', 'Các chuyên đề ôn luyện trọng tâm, cấu trúc đề thi chính thức và các mẹo làm bài điểm cao được biên soạn bởi đội ngũ GiasuTop.', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150', 'Toán'),
('Phương pháp học kèm trực tuyến hiệu quả cùng gia sư', 'Cách tận dụng bảng vẽ điện tử và trao đổi trực tiếp trong lớp học ảo để tối ưu hóa kết quả học tập của con.', 'Học trực tuyến 1-1 giúp gia sư theo sát học sinh, giải đáp thắc mắc kịp thời và thiết lập lộ trình học tập cá nhân hóa cho từng con.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150', 'Lý'),
('Kế hoạch tự ôn tập môn Hóa học đạt điểm 9+ trong 30 ngày', 'Chia sẻ cẩm nang ôn tập từ mất gốc đến nâng cao, hướng dẫn học các chuyên đề trọng điểm đạt kết quả tốt nhất.', 'Các bài giảng trực tuyến tổng ôn bài tập lý thuyết Hóa học hữu cơ và vô cơ được biên soạn độc quyền.', 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=150', 'Hóa');

-- Documents Seeds
INSERT INTO documents (title, file_url, grade_tag, type_tag, subject_tag, uploader_id, uploader_name, is_approved, download_count) VALUES
('[Toán 11] - Đề kiểm tra học kỳ II chuyên đề Đạo hàm & Hình học', '/uploads/docs/toan11_de2.pdf', 'Lớp 11', 'Cuối kì 2', 'Toán', '11111111-1111-1111-1111-111111111111', 'Admin GiasuTop', 'APPROVED', 1240),
('Sách Bí Quyết Ôn Luyện Vật Lý 12 - CLB GiasuTop', '/uploads/docs/sach_ly12.pdf', 'Lớp 12', 'Sách', 'Lý', '11111111-1111-1111-1111-111111111111', 'Admin GiasuTop', 'APPROVED', 8420),
('Đề thi thử Đánh giá năng lực Đại học Quốc gia - Đề số 01', '/uploads/docs/hsa_de1.pdf', 'Lớp 12', 'Tài liệu ôn thi', 'Toán', '11111111-1111-1111-1111-111111111111', 'Admin GiasuTop', 'APPROVED', 16890),
('Đề kiểm tra định kỳ học kỳ 1 môn Ngữ Văn lớp 10 - Đề khảo sát', '/uploads/docs/van10_gk1.pdf', 'Lớp 10', 'Giữa kì 1', 'Văn', 'tutor-8888-8888-8888-888888888888', 'Gia sư Demo', 'PENDING', 0);

-- Quick Match Posts (Lớp tìm gia sư)
INSERT INTO quick_match_posts (student_id, subject, grade, expected_rate, time_window_text, status) VALUES
('33333333-3333-3333-3333-333333333333', 'Toán', 'Lớp 12', 200000.00, 'Tối thứ 2, thứ 4 từ 19:30', 'OPEN'),
('33333333-3333-3333-3333-333333333333', 'Văn', 'Lớp 10', 180000.00, 'Sáng thứ Bảy từ 8:00', 'OPEN'),
('33333333-3333-3333-3333-333333333333', 'Tiếng Anh', 'Lớp 9', 250000.00, 'Chiều Chủ Nhật từ 15:00', 'OPEN');

-- Tutor Reviews
INSERT INTO tutor_reviews (tutor_user_id, student_name, rating, comment) VALUES
('tutor-8888-8888-8888-888888888888', 'Trần Hữu Nam', 5, 'Thầy dạy cực kỳ dễ hiểu, tận tâm, giúp em tiến bộ rất nhiều.'),
('tutor-8888-8888-8888-888888888888', 'Lê Khánh Linh', 4, 'Dạy nhiệt tình, chuẩn bị bài tốt. Đôi lúc nói hơi nhanh.'),
('tutor-0000-0000-0000-000000000001', 'Nguyễn Phương Thảo', 5, 'Cô dạy phương pháp tư duy rất tốt, làm đề thi thử điểm cao hẳn lên.'),
('tutor-0000-0000-0000-000000000001', 'Vũ Minh Quân', 5, 'Gia sư chuyên nghiệp, đúng giờ, giáo trình khoa học.');
