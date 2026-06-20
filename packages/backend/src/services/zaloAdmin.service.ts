import axios from "axios";
import { getEnv } from "../utils/env";

type ZaloAdminEvent =
  | "NEW_USER"
  | "WITHDRAW_REQUEST"
  | "TOPUP_PAID"
  | "ADMIN_APPROVAL"
  | "DOCUMENT_PENDING"
  | "TUTOR_PENDING"
  | "COMMISSION_PENDING";

const eventThemes: Record<ZaloAdminEvent, { icon: string; title: string; color: string }> = {
  NEW_USER: { icon: "🟢", title: "USER MỚI", color: "XANH LÁ" },
  WITHDRAW_REQUEST: { icon: "🟣", title: "YÊU CẦU RÚT TIỀN", color: "TÍM" },
  TOPUP_PAID: { icon: "💚", title: "NẠP TIỀN THÀNH CÔNG", color: "XANH NGỌC" },
  ADMIN_APPROVAL: { icon: "🟠", title: "CẦN ADMIN DUYỆT", color: "CAM" },
  DOCUMENT_PENDING: { icon: "📚", title: "TÀI LIỆU CHỜ DUYỆT", color: "XANH DƯƠNG" },
  TUTOR_PENDING: { icon: "👩‍🏫", title: "HỒ SƠ GIA SƯ CHỜ DUYỆT", color: "HỒNG" },
  COMMISSION_PENDING: { icon: "💎", title: "ĐỀ XUẤT CHIẾT KHẤU", color: "VÀNG" },
};

function formatVND(value: number | string) {
  const amount = Number(value || 0);
  return `${amount.toLocaleString("vi-VN")} đ`;
}

function formatTime(date: Date = new Date()) {
  return date.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
}

function buildMessage(event: ZaloAdminEvent, lines: Array<[string, string | number | null | undefined]>) {
  const theme = eventThemes[event];
  const body = lines
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  return [
    `${theme.icon} [${theme.color}] ${theme.title}`,
    "━━━━━━━━━━━━━━━━",
    body,
    `⏰ Time: ${formatTime()}`,
    "━━━━━━━━━━━━━━━━",
    "⚡ GiasuTop Admin Bot",
  ].join("\n");
}

async function sendZaloText(text: string) {
  const env = getEnv();
  const token = env.ZALO_BOT_TOKEN?.trim();
  const chatIds = env.ZALO_ADMIN_CHAT_IDS?.split(",").map((id) => id.trim()).filter(Boolean) ?? [];
  if (!token || chatIds.length === 0) return;

  const baseApiUrl = (env.ZALO_BOT_API_URL || "https://bot-api.zaloplatforms.com").replace(/\/$/, "");
  const url = `${baseApiUrl}/bot${token}/sendMessage`;

  await Promise.allSettled(
    chatIds.map((chatId) =>
      axios.post(
        url,
        { chat_id: chatId, text },
        { headers: { "Content-Type": "application/json" }, timeout: 8000 }
      )
    )
  );
}

export async function notifyZaloAdmins(event: ZaloAdminEvent, lines: Array<[string, string | number | null | undefined]>) {
  try {
    await sendZaloText(buildMessage(event, lines));
  } catch (error: any) {
    console.error("Zalo admin notification failed:", error?.message || error);
  }
}

export const zaloFormat = {
  money: formatVND,
  time: formatTime,
};
