export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

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
