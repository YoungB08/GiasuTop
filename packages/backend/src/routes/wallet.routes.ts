import { Router, Response } from "express";
import { requireAuth, AuthedRequest } from "../middlewares/auth";
import pool from "../config/db";
import { notifyAdmins } from "../services/notification.service";
import { notifyZaloAdminsWithPhoto, zaloFormat } from "../services/zaloAdmin.service";

const router = Router();

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
      "SELECT id, amount, bank_code, bank_name, bank_account_no, bank_account_name, status, created_at FROM withdraw_requests WHERE user_id = ? ORDER BY created_at DESC LIMIT 10",
      [req.user.id]
    );

    return res.json({
      success: true,
      data: {
        balance: wallet,
        ledger: ledger.map((entry: any) => ({
          ...entry,
          entry_type_label: walletEntryTypeLabel(entry.entry_type),
        })),
        withdrawals
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/wallet/topup (Create a pending topup request)
router.post("/topup", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const { amount } = req.body;
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Số tiền nạp không hợp lệ" });
  }

  try {
    // Create wallet_topup log in PENDING status
    const [result]: any = await pool.query(
      "INSERT INTO wallet_topups (user_id, amount, status, provider) VALUES (?, ?, 'PENDING', 'SEPAY')",
      [req.user.id, numAmount]
    );
    const topupId = result.insertId;

    return res.json({
      success: true,
      data: {
        topupId,
        amount: numAmount,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/wallet/withdraw (Request withdrawal)
router.post("/withdraw", requireAuth, async (req: AuthedRequest, res: Response): Promise<any> => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });

  const { amount, bankCode, bankName, bankAccountNo, bankAccountName } = req.body;
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount) || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Số tiền rút không hợp lệ" });
  }

  if (!bankCode || !bankName || !bankAccountNo || !bankAccountName) {
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
      "INSERT INTO withdraw_requests (user_id, amount, bank_code, bank_name, bank_account_no, bank_account_name, status) VALUES (?, ?, ?, ?, ?, ?, 'PENDING')",
      [req.user.id, numAmount, bankCode, bankName, bankAccountNo, bankAccountName]
    );

    // Create ledger entry
    await connection.query(
      "INSERT INTO wallet_ledger (user_id, entry_type, amount, ref_type, ref_id) VALUES (?, 'WITHDRAW_REQUEST', ?, 'WITHDRAW', ?)",
      [req.user.id, -numAmount, `WITHDRAW-${result.insertId}`]
    );

    await connection.commit();
    await notifyAdmins({
      actorId: req.user.id,
      type: "WITHDRAW_REQUEST",
      title: "Có yêu cầu rút tiền mới",
      body: `${req.user.email} vừa gửi yêu cầu rút ${numAmount.toLocaleString("vi-VN")}đ.`,
      linkUrl: "/?tab=admin&adminTab=withdrawals",
      entityType: "WITHDRAW_REQUEST",
      entityId: String(result.insertId),
      metadata: { amount: numAmount, bankCode, bankName, bankAccountNo },
    });
    const qrParams = new URLSearchParams();
    qrParams.set("bank", String(bankCode));
    qrParams.set("acc", String(bankAccountNo));
    qrParams.set("amount", String(Math.round(numAmount)));
    qrParams.set("des", `RUT${result.insertId}`);
    qrParams.set("template", "compact");
    qrParams.set("showinfo", "true");
    qrParams.set("fullacc", "true");
    qrParams.set("holder", String(bankAccountName));
    qrParams.set("store", "GiasuTop");
    const withdrawQrUrl = `https://qr.sepay.vn/img?${qrParams.toString()}`;
    await notifyZaloAdminsWithPhoto("WITHDRAW_REQUEST", [
      ["User", req.user.email],
      ["So tien", zaloFormat.money(numAmount)],
      ["Ngan hang", `${bankName} (${bankCode})`],
      ["STK", bankAccountNo],
      ["Chu TK", bankAccountName],
      ["Noi dung QR", `RUT${result.insertId}`],
      ["Ma yeu cau", result.insertId],
    ], withdrawQrUrl);
    /* Zalo photo already includes the withdraw caption; avoid duplicate text notification.
      ["👤 User", req.user.email],
      ["💰 Số tiền", zaloFormat.money(numAmount)],
      ["🏦 STK", bankAccountNo],
      ["👛 Chủ TK", bankAccountName],
      ["🆔 Mã yêu cầu", result.insertId],
      ["🧭 Admin", "Vào trang Admin để duyệt/từ chối"],
    */
    return res.json({ success: true, message: `Yêu cầu rút tiền ${numAmount.toLocaleString()}đ đã được gửi đi!` });
  } catch (error: any) {
    await connection.rollback();
    return res.status(500).json({ success: false, message: error.message });
  } finally {
    connection.release();
  }
});

export default router;
