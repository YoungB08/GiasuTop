import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import pool from "./config/db";
import { createNotifications } from "./services/notification.service";
import { logActivity } from "./utils/logger";
import { verifyAccessToken } from "./utils/jwt";

type SocketAuthUser = {
  id: string;
  email: string;
  role: "STUDENT" | "TUTOR" | "ADMIN";
};

type RoomParticipantState = {
  socketId: string;
  userId: string;
  userName: string;
  role: "STUDENT" | "TUTOR" | "ADMIN" | "GUEST";
  joinedAt: string;
  isHost: boolean;
  isMicOn: boolean;
  isCamOn: boolean;
  isScreenSharing: boolean;
  isHandRaised: boolean;
};

type JoinRoomPayload = {
  roomId: string;
  userId: string;
  userName: string;
  role?: RoomParticipantState["role"];
  state?: Partial<Pick<RoomParticipantState, "isMicOn" | "isCamOn" | "isScreenSharing" | "isHandRaised">>;
};

const rooms = new Map<string, Map<string, RoomParticipantState>>();

export function getClassroomPresence(roomIds?: string[]) {
  const ids = roomIds && roomIds.length > 0 ? roomIds : Array.from(rooms.keys());
  return ids.map((roomId) => {
    const participants = Array.from(rooms.get(roomId)?.values() || []);
    return {
      roomId,
      participantCount: participants.length,
      hasParticipants: participants.length > 0,
      participants: participants.map((participant) => ({
        socketId: participant.socketId,
        userId: participant.userId,
        userName: participant.userName,
        role: participant.role,
        isHost: participant.isHost,
        isMicOn: participant.isMicOn,
        isCamOn: participant.isCamOn,
        isScreenSharing: participant.isScreenSharing,
        isHandRaised: participant.isHandRaised,
      })),
    };
  });
}

function getRoom(roomId: string) {
  let participants = rooms.get(roomId);
  if (!participants) {
    participants = new Map<string, RoomParticipantState>();
    rooms.set(roomId, participants);
  }
  return participants;
}

function getParticipants(roomId: string) {
  return Array.from(getRoom(roomId).values());
}

function normalizeJoinPayload(args: any[]): JoinRoomPayload | null {
  const first = args[0];
  if (first && typeof first === "object") {
    return {
      roomId: String(first.roomId || "").trim(),
      userId: String(first.userId || "").trim(),
      userName: String(first.userName || first.name || "Khách").trim(),
      role: first.role || "GUEST",
      state: first.state || {},
    };
  }

  const [roomId, userId, userName] = args;
  return {
    roomId: String(roomId || "").trim(),
    userId: String(userId || "").trim(),
    userName: String(userName || "Khách").trim(),
    role: "GUEST",
    state: {},
  };
}

function sanitizeParticipantPatch(payload: any) {
  return {
    isMicOn: Boolean(payload?.isMicOn),
    isCamOn: Boolean(payload?.isCamOn),
    isScreenSharing: Boolean(payload?.isScreenSharing),
    isHandRaised: Boolean(payload?.isHandRaised),
  };
}

function getHandshakeToken(socket: Socket) {
  const authToken = socket.handshake.auth?.token;
  if (typeof authToken === "string" && authToken.trim()) return authToken.trim();

  const queryToken = socket.handshake.query?.token;
  if (typeof queryToken === "string" && queryToken.trim()) return queryToken.trim();

  const header = socket.handshake.headers.authorization;
  if (header?.startsWith("Bearer ")) return header.slice("Bearer ".length).trim();
  return "";
}

async function canJoinClassroom(user: SocketAuthUser, roomId: string) {
  if (user.role === "ADMIN") return true;

  const [rows]: any = await pool.query(
    `SELECT id
     FROM appointments
     WHERE (id = ? OR live_room_code = ?)
       AND (student_id = ? OR tutor_id = ?)
     LIMIT 1`,
    [roomId, roomId, user.id, user.id]
  );

  return rows.length > 0;
}

function uniqueUserIds(participants: RoomParticipantState[], excludeUserId?: string) {
  return Array.from(new Set(participants.map((participant) => participant.userId).filter((userId) => userId && userId !== excludeUserId)));
}

function notifyRoomUsers(
  roomId: string,
  actor: RoomParticipantState | undefined,
  title: string,
  body: string,
  metadata?: Record<string, unknown>
) {
  const recipients = uniqueUserIds(getParticipants(roomId), actor?.userId);
  if (recipients.length === 0) return;

  createNotifications(
    recipients.map((recipientId) => ({
      recipientId,
      actorId: actor?.userId || null,
      type: "CLASSROOM_EVENT",
      title,
      body,
      linkUrl: "/bookings",
      entityType: "classroom",
      entityId: roomId,
      metadata: {
        roomId,
        actorSocketId: actor?.socketId,
        actorName: actor?.userName,
        ...metadata,
      },
    }))
  ).catch((error) => console.error("Failed to create classroom notifications:", error?.message || error));
}

export function setupSocket(httpServer: HttpServer, corsOrigins: string[]) {
  const io = new Server(httpServer, {
    cors: {
      origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        if (corsOrigins.length === 0) return cb(null, true);
        if (corsOrigins.includes(origin)) return cb(null, true);
        return cb(new Error("Not allowed by CORS"));
      },
      credentials: true,
    },
  });

  const publishParticipants = (roomId: string) => {
    io.to(roomId).emit("participants-updated", { participants: getParticipants(roomId) });
  };

  const updateParticipant = (socket: Socket, patch: Partial<RoomParticipantState>) => {
    const roomId = socket.data.roomId as string | undefined;
    if (!roomId) return;

    const participants = getRoom(roomId);
    const participant = participants.get(socket.id);
    if (!participant) return;

    const next = { ...participant, ...patch, socketId: socket.id };
    participants.set(socket.id, next);
    io.to(roomId).emit("participant-updated", next);
    publishParticipants(roomId);
    logActivity(next.userId, "CLASSROOM_MEDIA_STATE", JSON.stringify({ roomId, patch }), null).catch(() => {});

    const changedLabels: string[] = [];
    if (typeof patch.isMicOn === "boolean" && patch.isMicOn !== participant.isMicOn) {
      changedLabels.push(patch.isMicOn ? "đã bật micro" : "đã tắt micro");
    }
    if (typeof patch.isCamOn === "boolean" && patch.isCamOn !== participant.isCamOn) {
      changedLabels.push(patch.isCamOn ? "đã bật camera" : "đã tắt camera");
    }
    if (typeof patch.isScreenSharing === "boolean" && patch.isScreenSharing !== participant.isScreenSharing) {
      changedLabels.push(patch.isScreenSharing ? "đang chia sẻ màn hình" : "đã dừng chia sẻ màn hình");
    }
    if (typeof patch.isHandRaised === "boolean" && patch.isHandRaised !== participant.isHandRaised) {
      changedLabels.push(patch.isHandRaised ? "đã giơ tay" : "đã hạ tay");
    }
    if (changedLabels.length > 0) {
      notifyRoomUsers(roomId, next, "Cập nhật phòng học", `${next.userName} ${changedLabels.join(", ")}.`, { patch });
    }
  };

  const leaveRoom = (socket: Socket, reason = "leave") => {
    const roomId = socket.data.roomId as string | undefined;
    const userId = socket.data.userId as string | undefined;
    if (!roomId) return;

    const participants = rooms.get(roomId);
    const wasHost = Boolean(participants?.get(socket.id)?.isHost);
    participants?.delete(socket.id);
    socket.leave(roomId);

    if (!participants || participants.size === 0) {
      rooms.delete(roomId);
    } else {
      if (wasHost) {
        const nextHost = participants.values().next().value as RoomParticipantState | undefined;
        if (nextHost) {
          participants.set(nextHost.socketId, { ...nextHost, isHost: true });
        }
      }
      socket.to(roomId).emit("user-disconnected", { userId, socketId: socket.id, reason });
      publishParticipants(roomId);
    }

    socket.data.roomId = undefined;
    socket.data.userId = undefined;
    socket.data.userName = undefined;
  };

  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    const token = getHandshakeToken(socket);
    if (token) {
      try {
        const payload = verifyAccessToken(token);
        socket.data.authUser = {
          id: payload.sub,
          email: payload.email,
          role: payload.role,
        } satisfies SocketAuthUser;
      } catch {
        socket.emit("room-error", { message: "Phiên đăng nhập không hợp lệ. Vui lòng đăng nhập lại." });
        socket.disconnect(true);
        return;
      }
    }

    socket.on("join-room", async (...args: any[]) => {
      const payload = normalizeJoinPayload(args);
      if (!payload?.roomId) {
        socket.emit("room-error", { message: "Thông tin phòng học không hợp lệ." });
        return;
      }

      const authUser = socket.data.authUser as SocketAuthUser | undefined;
      if (!authUser) {
        socket.emit("room-error", { message: "Bạn cần đăng nhập để vào phòng học." });
        return;
      }

      try {
        const allowed = await canJoinClassroom(authUser, payload.roomId);
        if (!allowed) {
          socket.emit("room-error", { message: "Bạn không có quyền vào phòng học này." });
          return;
        }
      } catch (error) {
        console.error("Failed to verify classroom access:", error);
        socket.emit("room-error", { message: "Không thể kiểm tra quyền vào phòng học." });
        return;
      }

      leaveRoom(socket, "switch-room");

      const participants = getRoom(payload.roomId);
      const existingParticipants = Array.from(participants.values());
      const participant: RoomParticipantState = {
        socketId: socket.id,
        userId: authUser.id,
        userName: payload.userName || authUser.email || "Khách",
        role: authUser.role,
        joinedAt: new Date().toISOString(),
        isHost: existingParticipants.length === 0,
        isMicOn: Boolean(payload.state?.isMicOn),
        isCamOn: Boolean(payload.state?.isCamOn),
        isScreenSharing: Boolean(payload.state?.isScreenSharing),
        isHandRaised: Boolean(payload.state?.isHandRaised),
      };

      socket.join(payload.roomId);
      socket.data.roomId = payload.roomId;
      socket.data.userId = payload.userId;
      socket.data.userName = participant.userName;

      participants.set(socket.id, participant);

      socket.emit("room-users", {
        self: participant,
        participants: existingParticipants,
        allParticipants: getParticipants(payload.roomId),
      });
      socket.to(payload.roomId).emit("user-connected", participant);
      publishParticipants(payload.roomId);

      console.log(`User ${payload.userId} (${participant.userName}) joined room: ${payload.roomId}`);
      logActivity(participant.userId, "CLASSROOM_JOIN", JSON.stringify({ roomId: payload.roomId, socketId: socket.id, role: participant.role }), null).catch(() => {});
      notifyRoomUsers(payload.roomId, participant, "Có người vào lớp", `${participant.userName} vừa vào phòng học.`, { event: "join" });
    });

    socket.on("offer", (payload) => {
      if (payload?.target) {
        socket.to(payload.target).emit("offer", { ...payload, caller: socket.id });
      }
    });

    socket.on("answer", (payload) => {
      if (payload?.target) {
        socket.to(payload.target).emit("answer", { ...payload, caller: socket.id });
      }
    });

    socket.on("ice-candidate", (payload) => {
      if (payload?.target) {
        socket.to(payload.target).emit("ice-candidate", { ...payload, caller: socket.id });
      }
    });

    socket.on("media-state", (payload) => {
      updateParticipant(socket, sanitizeParticipantPatch(payload));
    });

    socket.on("raise-hand", (payload) => {
      updateParticipant(socket, { isHandRaised: Boolean(payload?.isHandRaised) });
    });

    socket.on("chat-message", (payload) => {
      const roomId = socket.data.roomId as string | undefined;
      const senderName = String(socket.data.userName || "Khách");
      const text = String(payload?.text || "").trim().slice(0, 4000);
      if (!roomId || !text) return;

      io.to(roomId).emit("chat-message", {
        id: payload?.id || `${socket.id}-${Date.now()}`,
        senderSocketId: socket.id,
        senderId: socket.data.userId,
        senderName,
        sender: senderName,
        text,
        type: payload?.type || "message",
        time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
        createdAt: new Date().toISOString(),
      });
      logActivity(String(socket.data.userId || ""), "CLASSROOM_CHAT", JSON.stringify({ roomId, length: text.length }), null).catch(() => {});
      const actor = getRoom(roomId).get(socket.id);
      notifyRoomUsers(roomId, actor, "Tin nhắn lớp học", `${senderName}: ${text.slice(0, 120)}`, { event: "chat" });
    });

    socket.on("reaction", (payload) => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      socket.to(roomId).emit("reaction", {
        senderSocketId: socket.id,
        senderName: socket.data.userName || "Khách",
        reaction: String(payload?.reaction || "").slice(0, 24),
        createdAt: new Date().toISOString(),
      });
    });

    socket.on("whiteboard-draw", (data) => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      socket.to(roomId).emit("whiteboard-draw", { ...data, senderSocketId: socket.id });
      socket.to(roomId).emit("draw-line", data);
    });

    socket.on("draw-line", (data) => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      socket.to(roomId).emit("draw-line", data);
      socket.to(roomId).emit("whiteboard-draw", { ...data, senderSocketId: socket.id });
    });

    socket.on("whiteboard-clear", () => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      socket.to(roomId).emit("whiteboard-clear", { senderSocketId: socket.id });
      socket.to(roomId).emit("clear-board");
    });

    socket.on("clear-board", () => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      socket.to(roomId).emit("clear-board");
      socket.to(roomId).emit("whiteboard-clear", { senderSocketId: socket.id });
    });

    socket.on("mute-participant", (payload) => {
      const roomId = socket.data.roomId as string | undefined;
      const target = String(payload?.target || "");
      if (!roomId || !target) return;

      const participants = getRoom(roomId);
      const actor = participants.get(socket.id);
      if (!actor?.isHost) return;

      const targetParticipant = participants.get(target);
      if (targetParticipant) {
        participants.set(target, { ...targetParticipant, isMicOn: false });
        socket.to(target).emit("host-mute", { by: socket.id });
        publishParticipants(roomId);
      }
    });

    socket.on("spotlight-participant", (payload) => {
      const roomId = socket.data.roomId as string | undefined;
      if (!roomId) return;
      io.to(roomId).emit("spotlight-updated", {
        socketId: payload?.socketId || null,
        by: socket.id,
      });
    });

    socket.on("leave-room", () => {
      const roomId = socket.data.roomId as string | undefined;
      const participant = roomId ? getRoom(roomId).get(socket.id) : undefined;
      if (roomId && participant) {
        logActivity(participant.userId, "CLASSROOM_LEAVE", JSON.stringify({ roomId, socketId: socket.id }), null).catch(() => {});
        notifyRoomUsers(roomId, participant, "Rời phòng học", `${participant.userName} đã rời phòng học.`, { event: "leave" });
      }
      leaveRoom(socket, "leave");
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
      const roomId = socket.data.roomId as string | undefined;
      const participant = roomId ? getRoom(roomId).get(socket.id) : undefined;
      if (roomId && participant) {
        logActivity(participant.userId, "CLASSROOM_DISCONNECT", JSON.stringify({ roomId, socketId: socket.id }), null).catch(() => {});
        notifyRoomUsers(roomId, participant, "Mất kết nối phòng học", `${participant.userName} đã mất kết nối.`, { event: "disconnect" });
      }
      leaveRoom(socket, "disconnect");
    });
  });

  return io;
}
