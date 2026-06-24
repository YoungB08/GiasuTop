import { publicAssetUrl } from "./api";

export const getAvatarUrl = (u: any) => {
  if (!u) return "";
  const url = u.avatarUrl || u.avatar_url;
  if (!url) return "/logo.jpg";
  return publicAssetUrl(url);
};
