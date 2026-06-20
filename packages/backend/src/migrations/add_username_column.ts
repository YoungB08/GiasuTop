import pool from '../config/db';

async function run() {
  try {
    console.log("🔍 Checking users table schema...");
    const [columns]: any = await pool.query("SHOW COLUMNS FROM users");
    const hasUsername = columns.some((col: any) => col.Field === 'username');
    if (!hasUsername) {
      console.log("➕ Adding username column to users table...");
      await pool.query("ALTER TABLE users ADD COLUMN username VARCHAR(100) NULL UNIQUE AFTER full_name");
      console.log("✅ Username column added successfully.");
    } else {
      console.log("ℹ️ Username column already exists.");
    }
    process.exit(0);
  } catch (error) {
    console.error("❌ Error running migration:", error);
    process.exit(1);
  }
}

run();
