import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAvatarUrl } from "../utils/avatar";

interface Contact {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string | null;
  role: string;
  last_message: {
    message: string;
    created_at: string;
    sender_id: string;
  } | null;
  unread_count: number;
}

interface Message {
  id: number;
  sender_id: string;
  receiver_id: string;
  message: string;
  is_read: number;
  created_at: string;
  sender_name?: string;
  sender_email?: string;
  sender_role?: string;
  avatar_url?: string | null;
  avatarUrl?: string | null;
  file_url?: string | null;
  file_name?: string | null;
  file_type?: string | null;
}

interface MessengerChatProps {
  token: string;
  currentUser: { id: string; email: string; fullName: string; role: string } | null;
  chatActivePartner?: any | null;
  onClearActivePartner?: () => void;
}

const GLOBAL_CONTACT: Contact = {
  id: "global",
  full_name: "Cộng đồng (Global Chat)",
  email: "global@kntech.vn",
  avatar_url: null,
  role: "SYSTEM",
  last_message: null,
  unread_count: 0,
};

const API = "http://localhost:5000";

// ── helpers ────────────────────────────────────────────────────────────────
function isImageMime(mime: string | null | undefined) {
  return mime ? /^image\/(jpeg|png|webp|gif)/.test(mime) : false;
}

function FileAttachment({ url, name, mime }: { url: string; name: string | null; mime: string | null }) {
  const fullUrl = url.startsWith("http") ? url : `${API}${url}`;
  const label = name || "File đính kèm";

  if (isImageMime(mime)) {
    return (
      <a href={fullUrl} target="_blank" rel="noreferrer noopener" className="block mt-1.5">
        <img
          src={fullUrl}
          alt={label}
          className="max-w-[220px] max-h-[200px] rounded-lg object-cover border shadow-sm hover:opacity-90 transition"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </a>
    );
  }

  // Non-image: download only, no execution
  return (
    <a
      href={fullUrl}
      download={label}
      rel="noreferrer noopener"
      className="flex items-center gap-2 mt-1.5 bg-white/20 hover:bg-white/30 border border-white/20 dark:border-slate-700 rounded-lg px-3 py-2 text-[11px] font-semibold transition max-w-[220px] truncate"
      onClick={(e) => e.stopPropagation()}
    >
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="15" x2="12" y2="11" />
        <polyline points="9 12 12 15 15 12" />
      </svg>
      <span className="truncate">{label}</span>
    </a>
  );
}

export function MessengerChat({ token, currentUser, chatActivePartner, onClearActivePartner }: MessengerChatProps) {
  const [contacts, setContacts] = useState<Contact[]>([GLOBAL_CONTACT]);
  const [activeContact, setActiveContact] = useState<Contact | null>(GLOBAL_CONTACT);
  const [mobileView, setMobileView] = useState<"contacts" | "chat">("contacts");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatViewportRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ── fetch contacts ────────────────────────────────────────────────────────
  const fetchContacts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/api/chats/direct/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setContacts([GLOBAL_CONTACT, ...json.data]);
      }
    } catch (e) {
      console.error("Lỗi tải danh bạ nhắn tin:", e);
    }
  }, [token]);

  // ── fetch messages ────────────────────────────────────────────────────────
  const fetchMessages = useCallback(async (partnerId: string, showLoading = false) => {
    if (!token || !partnerId) return;
    if (showLoading) setLoadingMessages(true);
    try {
      if (partnerId === "global") {
        const res = await fetch(`${API}/api/chats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (json.success) {
          const mapped = json.data.map((m: any) => ({
            id: m.id,
            sender_id: m.user_id,
            receiver_id: "global",
            message: m.message,
            is_read: 1,
            created_at: m.created_at,
            sender_name: m.full_name,
            sender_email: m.email,
            sender_role: m.role,
            file_url: m.file_url ?? null,
            file_name: m.file_name ?? null,
            file_type: m.file_type ?? null,
          }));
          setMessages(mapped);
        }
      } else {
        const res = await fetch(`${API}/api/chats/direct/partner/${partnerId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (json.success) {
          setMessages(json.data);
        }
      }
    } catch (e) {
      console.error("Lỗi tải lịch sử chat:", e);
    } finally {
      if (showLoading) setLoadingMessages(false);
    }
  }, [token]);

  // ── send text message ─────────────────────────────────────────────────────
  const handleSendMessage = async (msgText: string, filePayload?: { fileUrl: string; fileName: string; fileType: string }) => {
    if (!token || !activeContact) return;
    if (!msgText.trim() && !filePayload) return;

    const body: Record<string, any> = { message: msgText.trim() };
    if (filePayload) {
      body.fileUrl = filePayload.fileUrl;
      body.fileName = filePayload.fileName;
      body.fileType = filePayload.fileType;
    }

    try {
      if (activeContact.id === "global") {
        const res = await fetch(`${API}/api/chats`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(body),
        });
        const json = await res.json();
        if (json.success) {
          setInputMessage("");
          fetchMessages("global");
        }
      } else {
        body.receiverId = activeContact.id;
        const res = await fetch(`${API}/api/chats/direct/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(body),
        });
        const json = await res.json();
        if (json.success) {
          setInputMessage("");
          fetchMessages(activeContact.id);
          fetchContacts();
        }
      }
    } catch (e) {
      console.error("Lỗi gửi tin nhắn:", e);
    }
  };

  // ── upload file then send ─────────────────────────────────────────────────
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !token || !activeContact) return;
    e.target.value = "";

    // Client-side type check (defence in depth)
    const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      setUploadError("Chỉ cho phép ảnh (jpg/png/webp) hoặc tài liệu (pdf/doc/docx).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File không được vượt quá 10MB.");
      return;
    }

    setUploading(true);
    setUploadError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(`${API}/api/chats/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Upload thất bại");
      // Send the message with attachment
      await handleSendMessage(inputMessage, {
        fileUrl: json.fileUrl,
        fileName: json.fileName,
        fileType: json.fileType,
      });
    } catch (err: any) {
      setUploadError(err.message || "Upload thất bại, thử lại.");
    } finally {
      setUploading(false);
    }
  };

  // ── polling ───────────────────────────────────────────────────────────────
  useEffect(() => {
    fetchContacts();
    const i = setInterval(fetchContacts, 4000);
    return () => clearInterval(i);
  }, [fetchContacts]);

  useEffect(() => {
    if (activeContact) fetchMessages(activeContact.id, true);
    else setMessages([]);
  }, [activeContact, fetchMessages]);

  useEffect(() => {
    if (!activeContact) return;
    const i = setInterval(() => fetchMessages(activeContact.id), 3000);
    return () => clearInterval(i);
  }, [activeContact, fetchMessages]);

  // ── handle partner passed from parent ─────────────────────────────────────
  useEffect(() => {
    if (chatActivePartner) {
      const existing = contacts.find(c => c.id === chatActivePartner.user_id || c.id === chatActivePartner.id);
      if (existing) {
        setActiveContact(existing);
        setMobileView("chat");
      } else {
        const tmp: Contact = {
          id: chatActivePartner.user_id || chatActivePartner.id,
          full_name: chatActivePartner.full_name || chatActivePartner.fullName,
          email: chatActivePartner.email,
          avatar_url: chatActivePartner.avatar_url || null,
          role: chatActivePartner.role || "TUTOR",
          last_message: null,
          unread_count: 0,
        };
        setContacts(prev => {
          if (prev.some(c => c.id === tmp.id)) return prev;
          return [GLOBAL_CONTACT, tmp, ...prev.filter(c => c.id !== "global")];
        });
        setActiveContact(tmp);
        setMobileView("chat");
      }
      onClearActivePartner?.();
    }
  }, [chatActivePartner]);

  // ── auto-scroll only when new messages arrive AND user is near bottom ─────
  const prevMsgCount = useRef(0);
  useEffect(() => {
    const vp = chatViewportRef.current;
    if (!vp || messages.length === 0) return;

    const isNearBottom = vp.scrollHeight - vp.scrollTop - vp.clientHeight < 120;
    const hasNewMsg = messages.length > prevMsgCount.current;
    prevMsgCount.current = messages.length;

    if (hasNewMsg && isNearBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex overflow-hidden h-[600px]">

      {/* LEFT SIDEBAR: Contact list */}
      <div className={`${mobileView === "contacts" ? "flex w-full" : "hidden md:flex"} md:w-72 border-r border-slate-200/50 dark:border-slate-800 flex-col shrink-0`}>
        <div className="p-4 border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Đoạn chat</h3>
          <span className="text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold px-2 py-0.5 rounded-full uppercase">Messenger</span>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          {contacts.map((contact) => {
            const isActive = activeContact?.id === contact.id;
            return (
              <button
                key={contact.id}
                onClick={() => {
                  setActiveContact(contact);
                  setMobileView("chat");
                }}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer focus:outline-none ${isActive
                    ? "bg-blue-50 dark:bg-slate-800/60 shadow-sm"
                    : "hover:bg-slate-50 dark:hover:bg-slate-800/30"
                  }`}
              >
                <div className="relative shrink-0">
                  {contact.id === "global" ? (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#13519c] to-indigo-500 flex items-center justify-center text-white text-base font-black select-none">🌎</div>
                  ) : (
                    <img
                      src={getAvatarUrl(contact)}
                      alt={contact.full_name}
                      className="h-10 w-10 rounded-full border bg-slate-50 object-cover"
                    />
                  )}
                  <div className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-slate-900 ${contact.id === "global" ? "bg-blue-500" : "bg-emerald-500"}`} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-baseline gap-1">
                    <h4 className={`text-xs font-bold truncate ${isActive ? "text-[#13519c] dark:text-blue-400" : "text-slate-900 dark:text-slate-200"}`}>
                      {contact.full_name}
                    </h4>
                    {contact.last_message && (
                      <span className="text-[9px] text-slate-400 shrink-0">{formatTime(contact.last_message.created_at)}</span>
                    )}
                  </div>
                  <p className={`text-[10px] truncate mt-0.5 ${contact.unread_count > 0 ? "font-bold text-slate-900 dark:text-white" : "text-slate-400"}`}>
                    {contact.id === "global"
                      ? "Phòng chat cộng đồng GiasuTop"
                      : (contact.last_message?.message || "Bắt đầu cuộc trò chuyện!")}
                  </p>
                </div>

                {contact.unread_count > 0 && (
                  <span className="h-4 w-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    {contact.unread_count > 9 ? "9+" : contact.unread_count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANE: Chat window */}
      <div className={`${mobileView === "chat" ? "flex" : "hidden md:flex"} flex-1 flex-col bg-slate-50/50 dark:bg-[#0c0e14] min-w-0`}>
        {activeContact ? (
          <>
            {/* Chat Header */}
            <div className="h-14 border-b border-slate-200/50 dark:border-slate-800 px-4 flex items-center justify-between bg-white dark:bg-[#111827] shrink-0">
              <div className="flex items-center gap-3">
                {/* Mobile back button */}
                <button
                  type="button"
                  onClick={() => setMobileView("contacts")}
                  className="md:hidden p-1 mr-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
                  title="Quay lại danh sách chat"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                {activeContact.id === "global" ? (
                  <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#13519c] to-indigo-500 flex items-center justify-center text-white font-black select-none">🌎</div>
                ) : (
                  <img
                    src={getAvatarUrl(activeContact)}
                    alt={activeContact.full_name}
                    className="h-9 w-9 rounded-full border bg-slate-50 object-cover"
                  />
                )}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{activeContact.full_name}</h4>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${activeContact.role === "ADMIN" ? "bg-amber-100 text-amber-800" :
                      activeContact.role === "TUTOR" ? "bg-purple-100 text-purple-800" :
                        activeContact.role === "SYSTEM" ? "bg-blue-100 text-blue-800" :
                          "bg-slate-100 text-slate-600"
                    }`}>
                    {activeContact.role === "SYSTEM" ? "Global" : activeContact.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Viewport */}
            <div ref={chatViewportRef} className="flex-1 overflow-y-auto p-4 space-y-2">
              {loadingMessages ? (
                <div className="text-center py-16 text-slate-400 text-xs">⏳ Đang tải tin nhắn...</div>
              ) : messages.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  💬 Gửi tin nhắn đầu tiên đến <span className="font-semibold">{activeContact.full_name}</span>!
                </div>
              ) : (
                messages.map((msg, index) => {
                  const isMe = msg.sender_id === currentUser?.id;
                  const prevMsg = messages[index - 1];
                  const nextMsg = messages[index + 1];
                  const isConsecutivePrev = prevMsg?.sender_id === msg.sender_id;
                  const isConsecutiveNext = nextMsg?.sender_id === msg.sender_id;

                  const hasFile = !!msg.file_url;
                  const hasText = msg.message && msg.message.trim().length > 0;

                  return (
                    <div key={msg.id} className={`flex items-end gap-2 text-xs ${isMe ? "justify-end" : "justify-start"}`}>
                      {!isMe && !isConsecutiveNext ? (
                        <img
                          src={(activeContact.id !== "global" && !msg.avatar_url && !msg.avatarUrl)
                            ? getAvatarUrl(activeContact)
                            : getAvatarUrl({
                                avatar_url: msg.avatar_url || msg.avatarUrl,
                                email: msg.sender_email || activeContact.email
                              })}
                          alt="AVT"
                          className="h-6 w-6 rounded-full bg-slate-100 border shadow-sm shrink-0 self-end object-cover"
                        />
                      ) : !isMe ? <div className="w-6 shrink-0" /> : null}

                      <div className="flex flex-col max-w-[68%]">
                        {!isMe && !isConsecutivePrev && activeContact.id === "global" && (
                          <span className="text-[9px] font-bold text-slate-500 mb-1 ml-1 flex items-center gap-1">
                            {msg.sender_name || "Thành viên"}
                            {msg.sender_role && (
                              <span className={`text-[7px] px-1 rounded uppercase font-extrabold ${msg.sender_role === "ADMIN" ? "bg-amber-100 text-amber-800" :
                                  msg.sender_role === "TUTOR" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                                }`}>{msg.sender_role}</span>
                            )}
                          </span>
                        )}

                        <div
                          title={formatTime(msg.created_at)}
                          className={`leading-relaxed shadow-sm transition-all duration-200 ${(!hasFile && !hasText) ? "" :
                              (hasFile && !hasText) ? "bg-transparent" :
                                `px-3 py-2 rounded-2xl ${isConsecutivePrev ? (isMe ? "rounded-tr-md" : "rounded-tl-md") : ""
                                } ${isConsecutiveNext ? (isMe ? "rounded-br-md" : "rounded-bl-md") : ""} ${isMe
                                  ? "bg-gradient-to-r from-blue-600 to-[#13519c] text-white"
                                  : "bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                                }`
                            }`}
                        >
                          {hasText && msg.message !== "👍" && (
                            <span>{msg.message}</span>
                          )}
                          {msg.message === "👍" && <span className="text-3xl">👍</span>}
                          {hasFile && (
                            <FileAttachment url={msg.file_url!} name={msg.file_name ?? null} mime={msg.file_type ?? null} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Upload error banner */}
            {uploadError && (
              <div className="mx-3 mb-1 px-3 py-1.5 bg-red-50 border border-red-200 text-red-700 text-[11px] rounded-lg flex items-center justify-between gap-2">
                <span>⚠️ {uploadError}</span>
                <button onClick={() => setUploadError(null)} className="text-red-500 hover:text-red-700 cursor-pointer font-bold">×</button>
              </div>
            )}

            {/* Message Input Footer */}
            <div className="p-3 border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center gap-2 shrink-0">
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"
                onChange={handleFileSelect}
              />

              {/* Clip button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="h-9 w-9 rounded-full flex items-center justify-center text-slate-400 hover:text-[#13519c] hover:bg-blue-50 dark:hover:bg-slate-800 transition cursor-pointer shrink-0 disabled:opacity-50"
                title="Đính kèm file (ảnh/pdf/doc)"
              >
                {uploading ? (
                  <svg className="h-4 w-4 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                )}
              </button>

              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) handleSendMessage(inputMessage); }}
                className="flex-1 h-9 px-4 text-xs rounded-full border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
              />

              {inputMessage.trim() ? (
                <button
                  type="button"
                  onClick={() => handleSendMessage(inputMessage)}
                  className="h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center cursor-pointer shadow-md transition shrink-0"
                >
                  <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendMessage("👍")}
                  className="h-9 w-9 text-2xl hover:scale-110 active:scale-95 transition cursor-pointer flex items-center justify-center shrink-0"
                  title="Gửi nút Like"
                >👍</button>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <span className="text-5xl mb-4">💬</span>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-250">Tin nhắn riêng tư</h3>
            <p className="text-xs text-slate-400 max-w-xs mt-1.5 leading-relaxed">
              Chọn một liên hệ từ danh sách bên trái hoặc truy cập hồ sơ gia sư để bắt đầu nhắn tin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessengerChat;
