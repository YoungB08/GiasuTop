import React from "react";

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
  walletLedger,
  formatVND,
  handleWebTopup,
  handleWebWithdraw,
}: WalletTabProps) {
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
        <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800 rounded-xl">
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
                    <td className="px-4 py-2.5 font-sans font-semibold">{l.entry_type}</td>
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
