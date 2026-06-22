import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const envType = process.env.ENV_TYPE; // "0" = Local, "1" = Production (kntech.site)
const isProd = process.env.NODE_ENV === 'production' || envType === "1";


const dbConfig = {
  host: isProd 
    ? (process.env.DB_HOST_PROD || 'localhost') 
    : (process.env.DB_HOST || 'localhost'),
  user: isProd 
    ? (process.env.DB_USER_PROD || 'root') 
    : (process.env.DB_USER || 'root'),
  password: isProd 
    ? (process.env.DB_PASSWORD_PROD || '') 
    : (process.env.DB_PASSWORD || ''),
  database: isProd 
    ? (process.env.DB_NAME_PROD || 'giasu_kntech') 
    : (process.env.DB_NAME || 'giasu_kntech'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Tạo một Connection Pool để tối ưu số lượng kết nối tới MySQL
const pool = mysql.createPool(dbConfig);

export default pool;