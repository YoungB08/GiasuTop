export const getAvatarUrl = (u: any) => {
  if (!u) return "";
  const url = u.avatarUrl || u.avatar_url;
  const email = u.email || u.username || "avatar";
  if (!url) return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(email)}`;
  if (url.startsWith("/")) return `http://localhost:5000${url}`;
  return url;
};
