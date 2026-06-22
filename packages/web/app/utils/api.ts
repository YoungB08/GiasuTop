const DEFAULT_API_BASE_URL = "https://api.kntech.site";
const DEFAULT_WEB_BASE_URL = "https://kntech.site";

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

function normalizeBaseUrl(value: string | undefined, fallback: string) {
  const url = (value || fallback).trim();
  if (!/^https?:\/\//i.test(url)) {
    throw new Error("Base URL must be an absolute http(s) URL.");
  }
  return trimTrailingSlash(url);
}

export const API_BASE_URL = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL, DEFAULT_API_BASE_URL);
export const SOCKET_BASE_URL = normalizeBaseUrl(process.env.NEXT_PUBLIC_SOCKET_URL, API_BASE_URL);
export const WEB_BASE_URL = normalizeBaseUrl(process.env.NEXT_PUBLIC_WEB_URL, DEFAULT_WEB_BASE_URL);

export function apiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function webUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${WEB_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function publicAssetUrl(url: string | null | undefined) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url) || url.startsWith("data:") || url.startsWith("blob:")) return url;
  return apiUrl(url);
}

export function isInternalUrl(url: string) {
  try {
    const configuredOrigin = new URL(API_BASE_URL).origin;
    return new URL(url, API_BASE_URL).origin === configuredOrigin;
  } catch {
    return false;
  }
}
