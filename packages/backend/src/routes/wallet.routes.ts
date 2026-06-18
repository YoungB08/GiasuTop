import { Router, Response } from "express";
import { requireAuth, AuthedRequest } from "../middlewares/auth";
import pool from "../config/db";

const router = Router();

// GET /api/wallet/status
router.get("/status", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const [rows]: any = await pool.query(
      "SELECT available_balance, holding_balance FROM wallet_accounts WHERE user_id = ? LIMIT 1",
      [req.user.id]
    );

    // If wallet doesn't exist, create one
    let wallet = rows[0];
    if (!wallet) {
      await pool.query(
        "INSERT INTO wallet_accounts (user_id, available_balance, holding_balance) VALUES (?, 0.00, 0.00)",
        [req.user.id]
      );
      wallet = { available_balance: 0.00, holding_balance: 0.00 };
    }

    // Fetch ledger history
    const [ledger]: any = await pool.query(
      "SELECT id, entry_type, amount, ref_type, ref_id, created_at FROM wallet_ledger WHERE user_id = ? ORDER BY created_at DESC LIMIT 50",
      [req.user.id]
    );

    // Fetch pending withdraw requests
    const [withdrawals]: any = await pool.query(
      "SELECT id, amount, bank_account_no, bank_account_name, status, created_at FROM withdraw_requests WHERE user_id = ? ORDER BY created_at DESC LIMIT 10",
      [req.user.id]
    );

    return res.json({
      success: true,
      data: {
        balance: wallet,
        ledger,
        withdrawals
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/wallet/topup (Simulate topping up money)
router.post("/topup", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const { amount } = req.body;
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Số tiền nạp không hợp lệ" });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Check if wallet exists, create if not
    const [accounts]: any = await connection.query(
      "SELECT available_balance FROM wallet_accounts WHERE user_id = ? FOR UPDATE",
      [req.user.id]
    );
    if (accounts.length === 0) {
      await connection.query(
        "INSERT INTO wallet_accounts (user_id, available_balance, holding_balance) VALUES (?, 0.00, 0.00)",
        [req.user.id]
      );
    }

    // Add balance
    await connection.query(
      "UPDATE wallet_accounts SET available_balance = available_balance + ? WHERE user_id = ?",
      [numAmount, req.user.id]
    );

    // Create ledger entry
    await connection.query(
      "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'TOPUP', ?, 'SIMULATE', ?)",
      [req.user.id, numAmount, `TOPUP-${Date.now()}`]
    );

    // Create wallet_topup log
    await connection.query(
      "INSERT INTO wallet_topups (user_id, amount, status, provider, paid_at) VALUES (?, ?, 'PAID', 'SEPAY', NOW())",
      [req.user.id, numAmount]
    );

    await connection.commit();
    return res.json({ success: true, message: `Nạp thành công ${numAmount.toLocaleString()}đ vào ví!` });
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }
});

// POST /api/wallet/withdraw (Request withdrawal)
router.post("/withdraw", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const { amount, bankAccountNo, bankAccountName } = req.body;
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Số tiền rút không hợp lệ" });
  }

  if (!bankAccountNo || !bankAccountName) {
    return res.status(400).json({ success: false, message: "Thiếu thông tin tài khoản ngân hàng" });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Check available balance
    const [accounts]: any = await connection.query(
      "SELECT available_balance FROM wallet_accounts WHERE user_id = ? FOR UPDATE",
      [req.user.id]
    );
    const balance = accounts[0]?.available_balance || 0;
    if (balance < numAmount) {
      return res.status(400).json({ success: false, message: "Số dư khả dụng không đủ" });
    }

    // Deduct from available balance, add to holding balance (until approved/complete)
    await connection.query(
      "UPDATE wallet_accounts SET available_balance = available_balance - ? WHERE user_id = ?",
      [numAmount, req.user.id]
    );

    // Create withdraw request
    const [result]: any = await connection.query(
      "INSERT INTO withdraw_requests (user_id, amount, bank_account_no, bank_account_name, status) VALUES (?, ?, ?, ?, 'PENDING')",
      [req.user.id, numAmount, bankAccountNo, bankAccountName]
    );

    // Create ledger entry
    await connection.query(
      "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'WITHDRAW_REQUEST', ?, 'WITHDRAW', ?)",
      [req.user.id, -numAmount, `WITHDRAW-${result.insertId}`]
    );

    await connection.commit();
    return res.json({ success: true, message: `Yêu cầu rút tiền ${numAmount.toLocaleString()}đ đã được gửi đi!` });
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }
});

export default router;
