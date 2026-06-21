export const API_BASE_URL = (() => {
  // Client-side: Tự động phát hiện dựa trên domain hiện tại của trình duyệt
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    // Tự động nhận diện local dev (localhost hoặc IP mạng nội bộ)
    const isLocal = hostname === "localhost" || 
                    hostname === "127.0.0.1" || 
                    hostname.startsWith("192.168.");

    if (isLocal) {
      // Khi chạy ở local -> Dùng relative URL để Next.js proxy ngầm, tránh CORS và ngrok warning
      return "";
    }
    
    // Khi chạy trên Production (bất kỳ tên miền nào: kntech.site, tên miền khác, v.v...)
    return process.env.NEXT_PUBLIC_API_URL || window.location.origin;
  }
  
  // Server-side (SSR)
  if (process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_API_TYPE === "1") {
    return process.env.NEXT_PUBLIC_API_URL || "https://kntech.site";
  }
  return (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
})();



export function apiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}


export function publicAssetUrl(url: string | null | undefined) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url) || url.startsWith("data:") || url.startsWith("blob:")) return url;
  return apiUrl(url);
}

export function isInternalUrl(url: string) {
  try {
    const browserOrigin = typeof window !== "undefined" ? window.location.origin : "";
    const configuredOrigin = API_BASE_URL ? new URL(API_BASE_URL).origin : browserOrigin;
    return new URL(url, configuredOrigin || undefined).origin === configuredOrigin;
  } catch {
    return false;
  }
}
