import { getEnv } from "./env";

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getPublicApiUrl() {
  const env = getEnv();
  if (!env.PUBLIC_API_URL) {
    throw new Error("PUBLIC_API_URL must be configured in env.");
  }
  return trimTrailingSlash(env.PUBLIC_API_URL);
}

export function getPublicWebUrl() {
  const env = getEnv();
  if (!env.PUBLIC_WEB_URL) {
    throw new Error("PUBLIC_WEB_URL must be configured in env.");
  }
  return trimTrailingSlash(env.PUBLIC_WEB_URL);
}

export function publicApiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${getPublicApiUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export function publicWebUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${getPublicWebUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
