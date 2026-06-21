import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbName = process.env.DB_NAME || 'giasu_kntech';

function cleanAndSplitSql(sqlContent: string): string[] {
  // Loại bỏ các comment dòng dạng -- ...
  const noLineComments = sqlContent.replace(/--.*$/gm, '');
  // Loại bỏ các comment khối dạng /* ... */
  const noBlockComments = noLineComments.replace(/\/\*[\s\S]*?\*\//g, '');
  // Tách bằng dấu chấm phẩy
  return noBlockComments
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

async function init() {
  console.log('🔄 Đang kết nối tới MySQL...');
  let connection;
  try {
    connection = await mysql.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword,
    });
  } catch (error: any) {
    console.error('❌ Không thể kết nối tới MySQL. Vui lòng kiểm tra MySQL server đã bật chưa.', error.message);
    process.exit(1);
  }

  try {
    console.log(`🌐 Tạo lại database "${dbName}"...`);
    await connection.query(`DROP DATABASE IF EXISTS \`${dbName}\`;`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await connection.query(`USE \`${dbName}\`;`);

    console.log('📂 Đọc tệp schema.sql...');
    const schemaPath = path.join(__dirname, '..', 'migrations', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    const statements = cleanAndSplitSql(schemaSql);
    console.log(`⚡ Thực thi ${statements.length} câu lệnh khởi tạo bảng...`);
    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      await connection.query(statement);
    }
    console.log('✅ Khởi tạo các bảng thành công.');

    // Kiểm tra xem bảng users đã có dữ liệu chưa
    const [users]: any = await connection.query('SELECT COUNT(*) as count FROM users');
    if (users[0]?.count === 0) {
      console.log('🌱 Đang nạp dữ liệu mẫu từ seed.sql...');
      const seedPath = path.join(__dirname, '..', 'migrations', 'seed.sql');
      const seedSql = fs.readFileSync(seedPath, 'utf8');
      const seedStatements = cleanAndSplitSql(seedSql);

      for (const statement of seedStatements) {
        console.log(`Seeding: ${statement.substring(0, 50)}...`);
        await connection.query(statement);
      }
      console.log('✅ Đã nạp dữ liệu mẫu.');
    } else {
      console.log('ℹ️ Cơ sở dữ liệu đã có dữ liệu, bỏ qua bước seed.');
    }

    // Đảm bảo bảng subjects luôn được seed
    const [subjCount]: any = await connection.query('SELECT COUNT(*) as count FROM subjects');
    if (subjCount[0]?.count === 0) {
      console.log('🌱 Đang nạp danh sách môn học mẫu...');
      const defaultSubjects = ['Toán', 'Lý', 'Hóa', 'Văn', 'Tiếng Anh', 'Sinh học', 'Lịch sử', 'Địa lý'];
      for (const sub of defaultSubjects) {
        await connection.query('INSERT INTO subjects (name) VALUES (?) ON DUPLICATE KEY UPDATE name=name', [sub]);
      }
      console.log('✅ Đã nạp danh sách môn học mẫu.');
    }

    // Đảm bảo bảng locations luôn được seed
    const [locCount]: any = await connection.query('SELECT COUNT(*) as count FROM locations');
    if (locCount[0]?.count === 0) {
      console.log('🌱 Đang nạp danh sách địa điểm mẫu...');
      const defaultLocations = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Bình Dương', 'Đồng Nai'];
      for (const loc of defaultLocations) {
        await connection.query('INSERT INTO locations (name) VALUES (?) ON DUPLICATE KEY UPDATE name=name', [loc]);
      }
      console.log('✅ Đã nạp danh sách địa điểm mẫu.');
    }

    // Đảm bảo bảng grades luôn được seed
    const [gradeCount]: any = await connection.query('SELECT COUNT(*) as count FROM grades');
    if (gradeCount[0]?.count === 0) {
      console.log('🌱 Đang nạp danh sách khối lớp mẫu...');
      const defaultGrades = ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5', 'Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'Luyện thi ĐH'];
      for (const gr of defaultGrades) {
        await connection.query('INSERT INTO grades (name) VALUES (?) ON DUPLICATE KEY UPDATE name=name', [gr]);
      }
      console.log('✅ Đã nạp danh sách khối lớp mẫu.');
    }

    // Đảm bảo bảng news luôn được seed
    const [newsCount]: any = await connection.query('SELECT COUNT(*) as count FROM news');
    if (newsCount[0]?.count === 0) {
      console.log('🌱 Đang nạp danh sách tin tức mẫu...');
      await connection.query(`
        INSERT INTO news (title, summary, content, thumbnail_url, category) VALUES
        ('Hướng dẫn ôn thi tốt nghiệp THPT đạt kết quả cao', 'Tổng hợp kinh nghiệm và phương pháp ôn tập hiệu quả từ các gia sư thủ khoa trong kỳ thi tốt nghiệp THPT.', 'Các chuyên đề ôn luyện trọng tâm, cấu trúc đề thi chính thức và các mẹo làm bài điểm cao được biên soạn bởi đội ngũ GiasuTop.', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150', 'Toán'),
        ('Phương pháp học kèm trực tuyến hiệu quả cùng gia sư', 'Cách tận dụng bảng vẽ điện tử và trao đổi trực tiếp trong lớp học ảo để tối ưu hóa kết quả học tập của con.', 'Học trực tuyến 1-1 giúp gia sư theo sát học sinh, giải đáp thắc mắc kịp thời và thiết lập lộ trình học tập cá nhân hóa cho từng con.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150', 'Lý'),
        ('Kế hoạch tự ôn tập môn Hóa học đạt điểm 9+ trong 30 ngày', 'Chia sẻ cẩm nang ôn tập từ mất gốc đến nâng cao, hướng dẫn học các chuyên đề trọng điểm đạt kết quả tốt nhất.', 'Các bài giảng trực tuyến tổng ôn bài tập lý thuyết Hóa học hữu cơ và vô cơ được biên soạn độc quyền.', 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=150', 'Hóa')
      `);
      console.log('✅ Đã nạp danh sách tin tức mẫu.');
    }

    // Đảm bảo bảng documents luôn được seed
    const [docsCount]: any = await connection.query('SELECT COUNT(*) as count FROM documents');
    if (docsCount[0]?.count === 0) {
      console.log('🌱 Đang nạp danh sách tài liệu mẫu...');
      await connection.query(`
        INSERT INTO documents (title, file_url, grade_tag, type_tag, subject_tag, uploader_id, uploader_name, is_approved, download_count) VALUES
        ('[Toán 11] - Đề kiểm tra học kỳ II chuyên đề Đạo hàm & Hình học', '/uploads/docs/toan11_de2.pdf', 'Lớp 11', 'Cuối kì 2', 'Toán', '11111111-1111-1111-1111-111111111111', 'Admin', 'APPROVED', 1240),
        ('Sách Bí Quyết Ôn Luyện Vật Lý 12 - CLB GiasuTop', '/uploads/docs/sach_ly12.pdf', 'Lớp 12', 'Sách', 'Lý', '11111111-1111-1111-1111-111111111111', 'Admin', 'APPROVED', 8420),
        ('Đề thi thử Đánh giá năng lực Đại học Quốc gia - Đề số 01', '/uploads/docs/hsa_de1.pdf', 'Lớp 12', 'Tài liệu ôn thi', 'Toán', '11111111-1111-1111-1111-111111111111', 'Admin', 'APPROVED', 16890)
      `);
      console.log('✅ Đã nạp danh sách tài liệu mẫu.');
    }

    console.log('🎉 ĐÃ THIẾT LẬP CƠ SỞ DỮ LIỆU HOÀN TẤT 100%!');
  } catch (error: any) {
    console.error('❌ Lỗi khi khởi tạo cơ sở dữ liệu:', error);
  } finally {
    await connection.end();
  }
}

init();
