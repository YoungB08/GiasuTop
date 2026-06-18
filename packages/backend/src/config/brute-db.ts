import mysql from 'mysql2/promise';

const commonPasswords = ['', 'root', '123456', '12345678', 'mysql', 'admin', 'password'];

async function brute() {
  console.log('🔄 Đang thử kết nối MySQL với các mật khẩu phổ biến...');
  for (const pw of commonPasswords) {
    try {
      const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: pw,
      });
      console.log(`✅ KẾT NỐI THÀNH CÔNG VỚI MẬT KHẨU: "${pw}"`);
      await conn.end();
      return;
    } catch (e: any) {
      console.log(`❌ Thử mật khẩu "${pw}" thất bại:`, e.message);
    }
  }
  console.log('❌ Tất cả các mật khẩu thông dụng đều thất bại.');
}

brute();
