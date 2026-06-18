import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Tạo một Connection Pool để tối ưu số lượng kết nối tới MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'giasu_kntech',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;