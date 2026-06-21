"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Eraser,
  Hand,
  LayoutGrid,
  MessageSquare,
  Mic,
  MicOff,
  PanelRightClose,
  PanelRightOpen,
  PhoneOff,
  Pin,
  PinOff,
  ScreenShare,
  ScreenShareOff,
  Send,
  Settings,
  ShieldCheck,
  Users,
  Video,
  VideoOff,
  Wifi,
  WifiOff,
} from "lucide-react";
import { RoomParticipant, useWebRTC } from "../../hooks/useWebRTC";

type ClassroomViewProps = {
  activeClassroom: any | null;
  setActiveClassroom: (classroom: any | null) => void;
  currentUser: {
    id: string;
    name: string;
    role?: "STUDENT" | "TUTOR" | "ADMIN" | "GUEST";
  };
};

type SidePanel = "chat" | "participants" | "settings" | null;
type RoomView = "gallery" | "speaker" | "whiteboard";

const REACTIONS = ["👏", "👍", "❤️", "✅", "💡"];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getCounterpartName(activeClassroom: any, role?: string) {
  if (!activeClassroom) return "Phong hoc";
  if (role === "STUDENT") return activeClassroom.tutor_name || "Gia su";
  if (role === "TUTOR") return activeClassroom.student_name || "Hoc vien";
  return activeClassroom.tutor_name || activeClassroom.student_name || "Phong hoc";
}

function getClassroomId(activeClassroom: any) {
  return String(activeClassroom?.class_id || activeClassroom?.live_room_code || activeClassroom?.id || "preview-room");
}

export default function ClassroomView({ activeClassroom, setActiveClassroom, currentUser }: ClassroomViewProps) {
  const [sidePanel, setSidePanel] = useState<SidePanel>(null);
  const [roomView, setRoomView] = useState<RoomView>("gallery");
  const [chatInput, setChatInput] = useState("");
  const [pinnedSocketId, setPinnedSocketId] = useState<string | null>(null);
  const [whiteboardColor, setWhiteboardColor] = useState("#f97316");
  const [whiteboardSize, setWhiteboardSize] = useState(4);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const pointRef = useRef<{ x: number; y: number } | null>(null);
  const classroomId = getClassroomId(activeClassroom);

  const {
    socket,
    connectionState,
    selfSocketId,
    participants,
    localParticipant,
    remoteParticipants,
    participantCount,
    remoteStreams,
    localVideoRef,
    isMicOn,
    toggleMic,
    isCamOn,
    toggleCamera,
    isScreenSharing,
    toggleScreenShare,
    isHandRaised,
    toggleHand,
    chatMessages,
    sendChatMessage,
    reactions,
    sendReaction,
    mediaError,
    setMediaError,
    audioDevices,
    videoDevices,
    selectedAudioDeviceId,
    selectedVideoDeviceId,
    switchMicrophone,
    switchCamera,
    refreshDevices,
    leaveRoom,
  } = useWebRTC({
    roomId: classroomId,
    userId: currentUser.id,
    userName: currentUser.name,
    role: currentUser.role || "GUEST",
    autoJoin: Boolean(activeClassroom),
    initialMicOn: false,
    initialCamOn: false,
  });

  const allTiles = useMemo(() => {
    const localTile = {
      id: "local",
      participant: localParticipant || {
        socketId: selfSocketId || "local",
        userId: currentUser.id,
        userName: currentUser.name,
        role: currentUser.role || "GUEST",
        joinedAt: new Date().toISOString(),
        isHost: participantCount <= 1,
        isMicOn,
        isCamOn,
        isScreenSharing,
        isHandRaised,
      },
      stream: null as MediaStream | null,
      isLocal: true,
    };

    const remoteTiles = remoteParticipants.map((participant) => ({
      id: participant.socketId,
      participant,
      stream: remoteStreams[participant.socketId] || null,
      isLocal: false,
    }));

    return [localTile, ...remoteTiles];
  }, [
    currentUser.id,
    currentUser.name,
    currentUser.role,
    isCamOn,
    isHandRaised,
    isMicOn,
    isScreenSharing,
    localParticipant,
    participantCount,
    remoteParticipants,
    remoteStreams,
    selfSocketId,
  ]);

  const spotlightId = useMemo(() => {
    if (pinnedSocketId) return pinnedSocketId;
    if (isScreenSharing) return "local";
    const screenSharer = remoteParticipants.find((participant) => participant.isScreenSharing);
    if (screenSharer) return screenSharer.socketId;
    return allTiles[0]?.id || "local";
  }, [allTiles, isScreenSharing, pinnedSocketId, remoteParticipants]);

  const spotlightTile = allTiles.find((tile) => tile.id === spotlightId) || allTiles[0];
  const companionTiles = allTiles.filter((tile) => tile.id !== spotlightTile?.id);
  const counterpartName = getCounterpartName(activeClassroom, currentUser.role);

  useEffect(() => {
    if (!socket) return;

    const handleDraw = (data: any) => {
      drawLine(data.x0, data.y0, data.x1, data.y1, data.color, data.size, false);
    };
    const handleClear = () => clearCanvas(false);

    socket.on("whiteboard-draw", handleDraw);
    socket.on("whiteboard-clear", handleClear);
    socket.on("draw-line", handleDraw);
    socket.on("clear-board", handleClear);

    return () => {
      socket.off("whiteboard-draw", handleDraw);
      socket.off("whiteboard-clear", handleClear);
      socket.off("draw-line", handleDraw);
      socket.off("clear-board", handleClear);
    };
  }, [socket]);

  useEffect(() => {
    if (sidePanel === "settings") {
      void refreshDevices();
    }
  }, [refreshDevices, sidePanel]);

  if (!activeClassroom) return null;

  const getCanvasPoint = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  function drawLine(x0: number, y0: number, x1: number, y1: number, color = whiteboardColor, size = whiteboardSize, emit = true) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
    ctx.closePath();

    if (emit) {
      socket?.emit("whiteboard-draw", { x0, y0, x1, y1, color, size });
    }
  }

  function clearCanvas(emit = true) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (emit) socket?.emit("whiteboard-clear");
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const point = getCanvasPoint(event);
    if (!point) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    pointRef.current = point;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current || !pointRef.current) return;
    const nextPoint = getCanvasPoint(event);
    if (!nextPoint) return;
    drawLine(pointRef.current.x, pointRef.current.y, nextPoint.x, nextPoint.y);
    pointRef.current = nextPoint;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    drawingRef.current = false;
    pointRef.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {}
  };

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    sendChatMessage(chatInput);
    setChatInput("");
  };

  const handleLeaveRoom = () => {
    leaveRoom();
    setActiveClassroom(null);
  };

  const handleCopyRoom = async () => {
    try {
      await navigator.clipboard.writeText(classroomId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const connected = connectionState === "connected";

  return (
    <div className="fixed inset-0 z-[100] flex bg-neutral-950 text-white">
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-neutral-900 px-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
              <ShieldCheck size={18} />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">Lop voi {counterpartName}</div>
              <button
                type="button"
                onClick={handleCopyRoom}
                className="mt-0.5 text-left text-[11px] text-neutral-400 hover:text-white"
              >
                ID {classroomId} {copied ? "- Copied" : ""}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={cx(
                "hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold sm:flex",
                connected ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"
              )}
            >
              {connected ? <Wifi size={14} /> : <WifiOff size={14} />}
              {connectionState}
            </div>
            <button
              type="button"
              title="Gallery"
              onClick={() => setRoomView("gallery")}
              className={cx("grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10", roomView === "gallery" && "bg-white/10 text-orange-300")}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              type="button"
              title="Whiteboard"
              onClick={() => setRoomView(roomView === "whiteboard" ? "gallery" : "whiteboard")}
              className={cx("grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10", roomView === "whiteboard" && "bg-white/10 text-orange-300")}
            >
              <Eraser size={18} />
            </button>
            <button
              type="button"
              title="Panel"
              onClick={() => setSidePanel(sidePanel ? null : "participants")}
              className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10"
            >
              {sidePanel ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
            </button>
          </div>
        </header>

        {mediaError && (
          <div className="mx-3 mt-3 flex items-center justify-between rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-xs text-amber-100 sm:mx-5">
            <span className="truncate">{mediaError}</span>
            <button type="button" onClick={() => setMediaError(null)} className="ml-3 text-amber-200 hover:text-white">
              Close
            </button>
          </div>
        )}

        <section className="relative min-h-0 flex-1 overflow-hidden p-3 sm:p-5">
          {reactions.length > 0 && (
            <div className="pointer-events-none absolute right-5 top-5 z-20 flex flex-col gap-2">
              {reactions.slice(-4).map((reaction) => (
                <div key={reaction.id} className="rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xl shadow-xl">
                  {reaction.reaction}
                </div>
              ))}
            </div>
          )}

          {roomView === "whiteboard" ? (
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-100">
              <div className="flex h-12 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-3 text-neutral-900">
                <div className="flex items-center gap-2">
                  {["#f97316", "#111827", "#2563eb", "#16a34a", "#dc2626"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      title={color}
                      onClick={() => setWhiteboardColor(color)}
                      className={cx("h-6 w-6 rounded-full border-2", whiteboardColor === color ? "border-neutral-900" : "border-white shadow")}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <input
                    aria-label="Pen size"
                    type="range"
                    min={2}
                    max={12}
                    value={whiteboardSize}
                    onChange={(event) => setWhiteboardSize(Number(event.target.value))}
                    className="w-24 accent-orange-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => clearCanvas()}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50"
                >
                  <Eraser size={15} />
                  Clear
                </button>
              </div>
              <canvas
                ref={canvasRef}
                width={1600}
                height={900}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="h-full w-full touch-none bg-white"
              />
            </div>
          ) : roomView === "speaker" && spotlightTile ? (
            <div className="grid h-full grid-rows-[1fr_112px] gap-3">
              <VideoTile
                tile={spotlightTile}
                localVideoRef={localVideoRef}
                pinned={pinnedSocketId === spotlightTile.id}
                onPin={() => setPinnedSocketId(pinnedSocketId === spotlightTile.id ? null : spotlightTile.id)}
              />
              <div className="flex gap-3 overflow-x-auto pb-1">
                {companionTiles.map((tile) => (
                  <div key={tile.id} className="w-44 shrink-0">
                    <VideoTile
                      tile={tile}
                      localVideoRef={localVideoRef}
                      compact
                      pinned={pinnedSocketId === tile.id}
                      onPin={() => setPinnedSocketId(pinnedSocketId === tile.id ? null : tile.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={cx("grid h-full gap-3", getGridClass(allTiles.length))}>
              {allTiles.map((tile) => (
                <VideoTile
                  key={tile.id}
                  tile={tile}
                  localVideoRef={localVideoRef}
                  pinned={pinnedSocketId === tile.id}
                  onPin={() => {
                    setPinnedSocketId(pinnedSocketId === tile.id ? null : tile.id);
                    setRoomView("speaker");
                  }}
                />
              ))}
              {allTiles.length === 1 && (
                <div className="hidden items-center justify-center rounded-lg border border-dashed border-white/15 bg-neutral-900/60 text-sm text-neutral-500 md:flex">
                  Dang doi nguoi khac vao phong
                </div>
              )}
            </div>
          )}
        </section>

        <footer className="flex min-h-[76px] shrink-0 items-center justify-between gap-2 border-t border-white/10 bg-neutral-900 px-2 py-2 sm:px-5">
          <div className="flex items-center gap-1 sm:gap-2">
            <ControlButton active={isMicOn} danger={!isMicOn} label={isMicOn ? "Mute" : "Unmute"} onClick={toggleMic}>
              {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
            </ControlButton>
            <ControlButton active={isCamOn} danger={!isCamOn} label={isCamOn ? "Stop" : "Start"} onClick={toggleCamera}>
              {isCamOn ? <Video size={20} /> : <VideoOff size={20} />}
            </ControlButton>
          </div>

          <div className="flex min-w-0 items-center justify-center gap-1 sm:gap-2">
            <ControlButton active={sidePanel === "participants"} label={`People ${participantCount}`} onClick={() => setSidePanel(sidePanel === "participants" ? null : "participants")}>
              <Users size={20} />
            </ControlButton>
            <ControlButton active={sidePanel === "chat"} label="Chat" onClick={() => setSidePanel(sidePanel === "chat" ? null : "chat")}>
              <MessageSquare size={20} />
            </ControlButton>
            <ControlButton active={isScreenSharing} success label={isScreenSharing ? "Stop share" : "Share"} onClick={toggleScreenShare}>
              {isScreenSharing ? <ScreenShareOff size={20} /> : <ScreenShare size={20} />}
            </ControlButton>
            <ControlButton active={isHandRaised} label="Raise" onClick={toggleHand}>
              <Hand size={20} />
            </ControlButton>
            <div className="hidden items-center gap-1 md:flex">
              {REACTIONS.map((reaction) => (
                <button
                  key={reaction}
                  type="button"
                  onClick={() => sendReaction(reaction)}
                  className="grid h-10 w-10 place-items-center rounded-lg text-lg hover:bg-white/10"
                >
                  {reaction}
                </button>
              ))}
            </div>
            <ControlButton active={sidePanel === "settings"} label="Device" onClick={() => setSidePanel(sidePanel === "settings" ? null : "settings")}>
              <Settings size={20} />
            </ControlButton>
          </div>

          <button
            type="button"
            onClick={handleLeaveRoom}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-red-600 px-3 text-xs font-bold text-white hover:bg-red-700 sm:px-5"
          >
            <PhoneOff size={18} />
            <span className="hidden sm:inline">Leave</span>
          </button>
        </footer>
      </main>

      {sidePanel && (
        <aside className="absolute inset-y-0 right-0 z-30 flex w-full max-w-sm flex-col border-l border-white/10 bg-neutral-900 shadow-2xl sm:relative sm:w-80">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4">
            <div className="text-sm font-semibold">
              {sidePanel === "chat" ? "Chat" : sidePanel === "participants" ? `Participants (${participantCount})` : "Devices"}
            </div>
            <button type="button" onClick={() => setSidePanel(null)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10">
              <PanelRightClose size={18} />
            </button>
          </div>

          {sidePanel === "chat" && (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto p-4">
                {chatMessages.length === 0 ? (
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center text-xs text-neutral-400">No messages</div>
                ) : (
                  chatMessages.map((message) => {
                    const mine = message.senderSocketId === selfSocketId;
                    return (
                      <div key={message.id || `${message.senderSocketId}-${message.createdAt}`} className={cx("flex flex-col", mine ? "items-end" : "items-start")}>
                        <div className="mb-1 max-w-[85%] truncate text-[10px] text-neutral-500">
                          {mine ? "You" : message.senderName || message.sender} - {message.time}
                        </div>
                        <div className={cx("max-w-[90%] rounded-lg px-3 py-2 text-sm leading-relaxed", mine ? "bg-orange-500 text-white" : "bg-white/10 text-neutral-100")}>
                          {message.text}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              <form onSubmit={handleSendMessage} className="flex shrink-0 gap-2 border-t border-white/10 p-3">
                <input
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  className="h-10 min-w-0 flex-1 rounded-lg border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none focus:border-orange-400"
                  placeholder="Message"
                />
                <button type="submit" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange-500 text-white hover:bg-orange-600">
                  <Send size={17} />
                </button>
              </form>
            </>
          )}

          {sidePanel === "participants" && (
            <div className="flex-1 overflow-y-auto p-3">
              {participants.map((participant) => (
                <ParticipantRow
                  key={participant.socketId}
                  participant={participant}
                  isLocal={participant.socketId === selfSocketId}
                  pinned={pinnedSocketId === participant.socketId}
                  onPin={() => {
                    setPinnedSocketId(pinnedSocketId === participant.socketId ? null : participant.socketId);
                    setRoomView("speaker");
                  }}
                />
              ))}
            </div>
          )}

          {sidePanel === "settings" && (
            <div className="flex-1 space-y-5 overflow-y-auto p-4">
              <DeviceSelect
                label="Microphone"
                value={selectedAudioDeviceId}
                devices={audioDevices}
                onChange={(deviceId) => void switchMicrophone(deviceId)}
              />
              <DeviceSelect
                label="Camera"
                value={selectedVideoDeviceId}
                devices={videoDevices}
                onChange={(deviceId) => void switchCamera(deviceId)}
              />
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-neutral-400">
                {connected ? "Media server connected" : "Connecting to media server"}
              </div>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}

function getGridClass(count: number) {
  if (count <= 1) return "grid-cols-1 md:grid-cols-2";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  if (count <= 4) return "grid-cols-1 sm:grid-cols-2";
  if (count <= 6) return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
}

function ControlButton({
  active,
  danger,
  success,
  label,
  onClick,
  children,
}: {
  active?: boolean;
  danger?: boolean;
  success?: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className={cx(
        "flex h-14 w-[58px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-semibold transition hover:bg-white/10 sm:w-20",
        danger && "text-red-400",
        success && active && "bg-emerald-500/10 text-emerald-300",
        active && !danger && !success && "text-orange-300"
      )}
    >
      {children}
      <span className="max-w-full truncate px-1">{label}</span>
    </button>
  );
}

function VideoTile({
  tile,
  localVideoRef,
  compact,
  pinned,
  onPin,
}: {
  tile: {
    id: string;
    participant: RoomParticipant;
    stream: MediaStream | null;
    isLocal: boolean;
  };
  localVideoRef: React.RefObject<HTMLVideoElement | null>;
  compact?: boolean;
  pinned?: boolean;
  onPin: () => void;
}) {
  const showVideo = tile.isLocal
    ? tile.participant.isCamOn || tile.participant.isScreenSharing
    : Boolean(tile.stream) && (tile.participant.isCamOn || tile.participant.isScreenSharing);

  return (
    <div className="group relative flex h-full min-h-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-neutral-900">
      {tile.isLocal ? (
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className={cx("h-full w-full bg-neutral-950 object-contain", !showVideo && "hidden")}
        />
      ) : showVideo && tile.stream ? (
        <RemoteVideo stream={tile.stream} />
      ) : null}

      {!tile.isLocal && tile.stream && <RemoteAudio stream={tile.stream} />}

      {!showVideo && (
        <div className="flex flex-col items-center gap-3">
          <div className={cx("grid rounded-full bg-gradient-to-br from-orange-500 to-rose-600 font-black text-white", compact ? "h-12 w-12 text-base" : "h-20 w-20 text-2xl")}>
            <span className="m-auto">{getInitials(tile.participant.userName)}</span>
          </div>
          {!compact && <div className="text-sm font-semibold text-neutral-300">{tile.participant.userName}</div>}
        </div>
      )}

      <div className="absolute left-3 top-3 flex gap-2">
        {tile.participant.isHost && <Badge>Host</Badge>}
        {tile.participant.isScreenSharing && <Badge tone="green">Share</Badge>}
        {tile.participant.isHandRaised && <Badge tone="amber">Hand</Badge>}
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
        <div className="min-w-0 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
          <span className="truncate">{tile.participant.userName}{tile.isLocal ? " (You)" : ""}</span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <div className={cx("grid h-7 w-7 place-items-center rounded-md bg-black/60 backdrop-blur", tile.participant.isMicOn ? "text-emerald-300" : "text-red-300")}>
            {tile.participant.isMicOn ? <Mic size={14} /> : <MicOff size={14} />}
          </div>
          <button
            type="button"
            title={pinned ? "Unpin" : "Pin"}
            onClick={onPin}
            className="hidden h-7 w-7 place-items-center rounded-md bg-black/60 text-neutral-200 backdrop-blur hover:text-orange-300 group-hover:grid"
          >
            {pinned ? <PinOff size={14} /> : <Pin size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function RemoteVideo({ stream }: { stream: MediaStream }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      void videoRef.current.play().catch(() => {});
    }
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline muted className="h-full w-full bg-neutral-950 object-contain" />;
}

function RemoteAudio({ stream }: { stream: MediaStream }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.srcObject = stream;
      void audioRef.current.play().catch(() => {});
    }
  }, [stream]);

  return <audio ref={audioRef} autoPlay playsInline className="hidden" />;
}

function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" }) {
  return (
    <span
      className={cx(
        "rounded-full border px-2 py-0.5 text-[10px] font-bold backdrop-blur",
        tone === "green" && "border-emerald-400/25 bg-emerald-500/15 text-emerald-200",
        tone === "amber" && "border-amber-400/25 bg-amber-500/15 text-amber-100",
        tone === "neutral" && "border-white/15 bg-black/40 text-white"
      )}
    >
      {children}
    </span>
  );
}

function ParticipantRow({
  participant,
  isLocal,
  pinned,
  onPin,
}: {
  participant: RoomParticipant;
  isLocal: boolean;
  pinned: boolean;
  onPin: () => void;
}) {
  return (
    <div className="mb-2 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 text-xs font-black text-white">
        {getInitials(participant.userName)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold">
          {participant.userName}
          {isLocal ? " (You)" : ""}
        </div>
        <div className="mt-0.5 flex items-center gap-2 text-[10px] uppercase tracking-wide text-neutral-500">
          <span>{participant.role}</span>
          {participant.isHost && <span>Host</span>}
        </div>
      </div>
      <div className="flex items-center gap-1 text-neutral-400">
        {participant.isMicOn ? <Mic size={15} className="text-emerald-300" /> : <MicOff size={15} className="text-red-300" />}
        {participant.isCamOn || participant.isScreenSharing ? <Video size={15} className="text-emerald-300" /> : <VideoOff size={15} />}
        {participant.isHandRaised && <Hand size={15} className="text-amber-300" />}
        <button type="button" onClick={onPin} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10">
          {pinned ? <PinOff size={15} /> : <Pin size={15} />}
        </button>
      </div>
    </div>
  );
}

function DeviceSelect({
  label,
  value,
  devices,
  onChange,
}: {
  label: string;
  value: string;
  devices: Array<{ deviceId: string; label: string }>;
  onChange: (deviceId: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-neutral-300">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-lg border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none focus:border-orange-400"
      >
        <option value="">Default</option>
        {devices.map((device) => (
          <option key={device.deviceId || device.label} value={device.deviceId}>
            {device.label}
          </option>
        ))}
      </select>
    </label>
  );
}
