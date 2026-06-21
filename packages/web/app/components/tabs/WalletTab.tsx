import React from "react";
import KntechDataTable, { Column } from "../KntechDataTable";

type WalletTabProps = {
  wallet: any;
  topupAmountInput: string;
  setTopupAmountInput: (val: string) => void;
  withdrawAmountInput: string;
  setWithdrawAmountInput: (val: string) => void;
  bankNoInput: string;
  setBankNoInput: (val: string) => void;
  bankNameInput: string;
  setBankNameInput: (val: string) => void;
  withdrawBankCode?: string;
  setWithdrawBankCode?: (val: string) => void;
  withdrawBankName?: string;
  setWithdrawBankName?: (val: string) => void;
  sepayBanks?: Array<{ name: string; code: string; short_name?: string; shortName?: string; supported?: boolean }>;
  walletLedger: any[];
  formatVND: (val: any) => string;
  handleWebTopup: (e: React.FormEvent) => void;
  handleWebWithdraw: (e: React.FormEvent) => void;
};

export default function WalletTab({
  wallet,
  topupAmountInput,
  setTopupAmountInput,
  withdrawAmountInput,
  setWithdrawAmountInput,
  bankNoInput,
  setBankNoInput,
  bankNameInput,
  setBankNameInput,
  withdrawBankCode = "",
  setWithdrawBankCode,
  setWithdrawBankName,
  sepayBanks = [],
  walletLedger,
  formatVND,
  handleWebTopup,
  handleWebWithdraw,
}: WalletTabProps) {
  const entryTypeLabel = (entryType: string) => {
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

  const ledgerTableData = walletLedger.map((entry) => {
    const amount = Number(entry.amount || 0);
    const typeLabel = entry.entry_type_label || entryTypeLabel(entry.entry_type);
    const createdAtLabel = entry.created_at ? new Date(entry.created_at).toLocaleString("vi-VN") : "";
    return {
      ...entry,
      amount_number: amount,
      amount_label: `${amount > 0 ? "+" : ""}${formatVND(amount)}`,
      type_label: typeLabel,
      created_at_label: createdAtLabel,
      ref_label: entry.ref_id || entry.ref_type || "-",
    };
  });

  const ledgerColumns: Column[] = [
    {
      key: "created_at_label",
      label: "Ngay giao dich",
      sortable: true,
      render: (row) => <span className="font-mono text-[11px] text-slate-500">{row.created_at_label || "-"}</span>,
    },
    {
      key: "type_label",
      label: "Loai giao dich",
      sortable: true,
      render: (row) => <span className="font-semibold text-slate-700 dark:text-slate-200">{row.type_label}</span>,
    },
    {
      key: "ref_label",
      label: "Ma tham chieu",
      sortable: true,
      render: (row) => <span className="font-mono text-[11px] text-slate-500">{row.ref_label}</span>,
    },
    {
      key: "amount_number",
      label: "So tien",
      sortable: true,
      render: (row) => (
        <span className={`block text-right font-mono font-bold ${row.amount_number > 0 ? "text-emerald-600" : "text-rose-600"}`}>
          {row.amount_label}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-slate-900 dark:text-white">Ví Tiền Nội Bộ GiasuTop</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#13519c] to-blue-700 text-white rounded-xl p-5 shadow-sm">
          <span className="text-[10px] font-semibold opacity-80 uppercase tracking-wider">Số dư khả dụng</span>
          <div className="text-2xl font-bold mt-2">{formatVND(wallet.available_balance)}</div>
        </div>

        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Đang giữ bảo đảm (Holding)
          </span>
          <div className="text-2xl font-bold mt-2 text-slate-700 dark:text-white">
            {formatVND(wallet.holding_balance)}
          </div>
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
              <div className="col-span-2">
                <label className="block text-[10px] font-semibold text-slate-400 mb-1">Ngan hang nhan</label>
                <div className="grid grid-cols-[44px_1fr] gap-2">
                  <div className="h-9 rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden">
                    {withdrawBankCode ? (
                      <img src={`https://cdn.vietqr.io/img/${sepayBanks.find((b) => (b.short_name || b.shortName || b.code) === withdrawBankCode)?.code || withdrawBankCode}.png`} alt={withdrawBankCode} className="max-h-6 max-w-9 object-contain" />
                    ) : (
                      <span className="text-[9px] font-bold text-slate-400">BANK</span>
                    )}
                  </div>
                  <select
                    value={withdrawBankCode}
                    onChange={(e) => {
                      const bank = sepayBanks.find((b) => (b.short_name || b.shortName || b.code) === e.target.value);
                      setWithdrawBankCode?.(e.target.value);
                      setWithdrawBankName?.(bank?.name || e.target.value);
                    }}
                    className="w-full h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none"
                    required
                  >
                    <option value="">Chon ngan hang...</option>
                    {sepayBanks.map((bank) => {
                      const code = bank.short_name || bank.shortName || bank.code;
                      return <option key={bank.code} value={code}>{code} - {bank.name}</option>;
                    })}
                  </select>
                </div>
              </div>
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
        <KntechDataTable
          columns={ledgerColumns}
          data={ledgerTableData}
          searchPlaceholder="Tim theo ngay, loai giao dich, ma tham chieu, so tien..."
          defaultRowsPerPage={10}
        />
        <div className="hidden overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl">
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
                  <td colSpan={4} className="px-4 py-6 text-center text-slate-400 font-sans">
                    Chưa có lịch sử giao dịch.
                  </td>
                </tr>
              ) : (
                walletLedger.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition">
                    <td className="px-4 py-2.5 text-slate-400">{new Date(l.created_at).toLocaleString("vi-VN")}</td>
                    <td className="px-4 py-2.5 font-sans font-semibold">{l.entry_type_label || entryTypeLabel(l.entry_type)}</td>
                    <td className="px-4 py-2.5 text-slate-550">{l.ref_id}</td>
                    <td className={`px-4 py-2.5 text-right font-bold ${l.amount > 0 ? "text-emerald-600" : "text-rose-600"}`}>
                      {l.amount > 0 ? "+" : ""}
                      {formatVND(l.amount)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
