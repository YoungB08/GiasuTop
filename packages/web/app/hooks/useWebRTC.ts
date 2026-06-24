import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_BASE_URL } from "../utils/api";

function parseTurnServers() {
  const urls = (process.env.NEXT_PUBLIC_TURN_URLS || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);

  if (urls.length === 0) return [];

  const username = process.env.NEXT_PUBLIC_TURN_USERNAME || "";
  const credential = process.env.NEXT_PUBLIC_TURN_CREDENTIAL || "";
  return [
    {
      urls,
      ...(username && credential ? { username, credential } : {}),
    },
  ];
}

const ICE_SERVERS: RTCConfiguration = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    ...parseTurnServers(),
  ],
};

export type ClassroomRole = "STUDENT" | "TUTOR" | "ADMIN" | "GUEST";

export type RoomParticipant = {
  socketId: string;
  userId: string;
  userName: string;
  role: ClassroomRole;
  joinedAt: string;
  isHost: boolean;
  isMicOn: boolean;
  isCamOn: boolean;
  isScreenSharing: boolean;
  isHandRaised: boolean;
};

export type ClassroomChatMessage = {
  id: string;
  senderSocketId: string;
  senderId?: string;
  senderName: string;
  sender?: string;
  text: string;
  type?: "message" | "system";
  time: string;
  createdAt: string;
};

export type ClassroomReaction = {
  id: string;
  senderSocketId: string;
  senderName: string;
  reaction: string;
  createdAt: string;
};

export type ClassroomDevice = {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
};

export type UseWebRTCOptions = {
  roomId: string;
  userId: string;
  userName: string;
  role?: ClassroomRole;
  token?: string;
  autoJoin?: boolean;
  initialMicOn?: boolean;
  initialCamOn?: boolean;
};

type PeerMap = Record<string, RTCPeerConnection>;
type StreamMap = Record<string, MediaStream>;
type PendingIceMap = Record<string, RTCIceCandidateInit[]>;

function getApiUrl() {
  return SOCKET_BASE_URL;
}

function uniqueParticipants(participants: RoomParticipant[]) {
  const bySocket = new Map<string, RoomParticipant>();
  participants.forEach((participant) => {
    if (participant.socketId) bySocket.set(participant.socketId, participant);
  });
  return Array.from(bySocket.values()).sort((a, b) => {
    if (a.isHost !== b.isHost) return a.isHost ? -1 : 1;
    return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime();
  });
}

function makeEmptyMediaStream() {
  if (typeof MediaStream === "undefined") return null;
  return new MediaStream();
}

function isPolitePeer(selfSocketId: string | null | undefined, peerSocketId: string | null | undefined) {
  if (!selfSocketId || !peerSocketId) return true;
  return selfSocketId > peerSocketId;
}

function isPeerClosed(pc: RTCPeerConnection | null | undefined) {
  return !pc || pc.connectionState === "closed" || pc.signalingState === "closed";
}

export function useWebRTC(
  roomIdOrOptions: string | UseWebRTCOptions,
  userIdArg?: string,
  userNameArg?: string,
  roleArg: ClassroomRole = "GUEST"
) {
  const options: UseWebRTCOptions =
    typeof roomIdOrOptions === "string"
      ? {
          roomId: roomIdOrOptions,
          userId: userIdArg || "guest",
          userName: userNameArg || "Khách",
          role: roleArg,
        }
      : roomIdOrOptions;

  const roomId = options.roomId;
  const userId = options.userId;
  const userName = options.userName || "Khách";
  const role = options.role || "GUEST";
  const token = options.token || "";
  const autoJoin = options.autoJoin ?? true;

  const [socket, setSocket] = useState<Socket | null>(null);
  const [connectionState, setConnectionState] = useState<"idle" | "connecting" | "connected" | "reconnecting" | "disconnected" | "error">("idle");
  const [selfSocketId, setSelfSocketId] = useState<string | null>(null);
  const [participants, setParticipants] = useState<RoomParticipant[]>([]);
  const [peers, setPeers] = useState<PeerMap>({});
  const [remoteStreams, setRemoteStreams] = useState<StreamMap>({});
  const [localPreviewStream, setLocalPreviewStream] = useState<MediaStream | null>(null);
  const [chatMessages, setChatMessages] = useState<ClassroomChatMessage[]>([]);
  const [reactions, setReactions] = useState<ClassroomReaction[]>([]);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [isMicOn, setIsMicOn] = useState(Boolean(options.initialMicOn));
  const [isCamOn, setIsCamOn] = useState(Boolean(options.initialCamOn));
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [canShareScreen, setCanShareScreen] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [audioDevices, setAudioDevices] = useState<ClassroomDevice[]>([]);
  const [videoDevices, setVideoDevices] = useState<ClassroomDevice[]>([]);
  const [selectedAudioDeviceId, setSelectedAudioDeviceId] = useState<string>("");
  const [selectedVideoDeviceId, setSelectedVideoDeviceId] = useState<string>("");

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const peersRef = useRef<PeerMap>({});
  const remoteStreamsRef = useRef<StreamMap>({});
  const pendingIceRef = useRef<PendingIceMap>({});
  const makingOfferRef = useRef<Record<string, boolean>>({});
  const localStreamRef = useRef<MediaStream | null>(makeEmptyMediaStream());
  const screenStreamRef = useRef<MediaStream | null>(null);
  const isMicOnRef = useRef(Boolean(options.initialMicOn));
  const isCamOnRef = useRef(Boolean(options.initialCamOn));
  const isScreenSharingRef = useRef(false);
  const isHandRaisedRef = useRef(false);
  const closePeerRef = useRef<(socketId: string) => void>(() => {});
  const createPeerConnectionRef = useRef<(socketId: string, currentSocket?: Socket | null) => RTCPeerConnection | null>(() => null);
  const ensureParticipantPeersRef = useRef<(participants: RoomParticipant[], currentSocket?: Socket | null) => void>(() => {});
  const flushPendingIceRef = useRef<(socketId: string, pc: RTCPeerConnection) => Promise<void>>(async () => {});
  const sendOfferRef = useRef<(targetSocketId: string) => Promise<void>>(async () => {});
  const setMicrophoneEnabledRef = useRef<(enabled: boolean) => Promise<void>>(async () => {});
  const stopTracksRef = useRef<(stream: MediaStream | null, kind?: "audio" | "video") => void>(() => {});
  const syncTracksToPeerRef = useRef<(pc: RTCPeerConnection) => Promise<void>>(async () => {});

  const refreshPeerState = useCallback(() => {
    setPeers({ ...peersRef.current });
  }, []);

  const refreshRemoteStreams = useCallback(() => {
    setRemoteStreams({ ...remoteStreamsRef.current });
  }, []);

  const refreshDevices = useCallback(async () => {
    if (!navigator.mediaDevices?.enumerateDevices) return;
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setAudioDevices(
        devices
          .filter((device) => device.kind === "audioinput")
          .map((device, index) => ({
            deviceId: device.deviceId,
            label: device.label || `Micro ${index + 1}`,
            kind: device.kind,
          }))
      );
      setVideoDevices(
        devices
          .filter((device) => device.kind === "videoinput")
          .map((device, index) => ({
            deviceId: device.deviceId,
            label: device.label || `Camera ${index + 1}`,
            kind: device.kind,
          }))
      );
    } catch (error) {
      console.warn("Cannot enumerate media devices", error);
    }
  }, []);

  const publishMediaState = useCallback((patch?: Partial<RoomParticipant>) => {
    socketRef.current?.emit("media-state", {
      isMicOn: patch?.isMicOn ?? isMicOnRef.current,
      isCamOn: patch?.isCamOn ?? isCamOnRef.current,
      isScreenSharing: patch?.isScreenSharing ?? isScreenSharingRef.current,
      isHandRaised: patch?.isHandRaised ?? isHandRaisedRef.current,
    });
  }, []);

  const getLocalAudioTrack = useCallback(() => {
    return localStreamRef.current?.getAudioTracks().find((track) => track.readyState === "live") || null;
  }, []);

  const getLocalVideoTrack = useCallback(() => {
    return localStreamRef.current?.getVideoTracks().find((track) => track.readyState === "live") || null;
  }, []);

  const getScreenVideoTrack = useCallback(() => {
    return screenStreamRef.current?.getVideoTracks().find((track) => track.readyState === "live") || null;
  }, []);

  const getOutgoingVideoTrack = useCallback(() => {
    return getScreenVideoTrack() || (isCamOnRef.current ? getLocalVideoTrack() : null);
  }, [getLocalVideoTrack, getScreenVideoTrack]);

  const getSender = useCallback((pc: RTCPeerConnection, kind: "audio" | "video") => {
    const transceiver = pc
      .getTransceivers()
      .find((item) => item.receiver.track.kind === kind || item.sender.track?.kind === kind);
    return transceiver?.sender || pc.getSenders().find((sender) => sender.track?.kind === kind) || null;
  }, []);

  const ensureTransceivers = useCallback((pc: RTCPeerConnection) => {
    const kinds = pc.getTransceivers().map((item) => item.receiver.track.kind);
    if (!kinds.includes("audio")) pc.addTransceiver("audio", { direction: "sendrecv" });
    if (!kinds.includes("video")) pc.addTransceiver("video", { direction: "sendrecv" });
  }, []);

  const syncTracksToPeer = useCallback(
    async (pc: RTCPeerConnection) => {
      if (isPeerClosed(pc)) return;

      const audioSender = getSender(pc, "audio");
      const videoSender = getSender(pc, "video");
      const audioTrack = isMicOnRef.current ? getLocalAudioTrack() : null;
      const videoTrack = getOutgoingVideoTrack();

      try {
        if (audioSender && !isPeerClosed(pc)) await audioSender.replaceTrack(audioTrack);
        if (videoSender && !isPeerClosed(pc)) await videoSender.replaceTrack(videoTrack);
      } catch (error) {
        if (!isPeerClosed(pc)) throw error;
      }
    },
    [getLocalAudioTrack, getOutgoingVideoTrack, getSender]
  );
  syncTracksToPeerRef.current = syncTracksToPeer;

  const syncTracksToAllPeers = useCallback(async () => {
    await Promise.all(
      Object.entries(peersRef.current).map(async ([socketId, pc]) => {
        if (isPeerClosed(pc)) {
          closePeerRef.current(socketId);
          return;
        }

        try {
          await syncTracksToPeer(pc);
        } catch (error) {
          if (isPeerClosed(pc)) {
            closePeerRef.current(socketId);
            return;
          }
          console.warn("Cannot sync media tracks", error);
        }
      })
    );
  }, [syncTracksToPeer]);

  const flushPendingIce = useCallback(async (socketId: string, pc: RTCPeerConnection) => {
    const pending = pendingIceRef.current[socketId] || [];
    if (!pending.length || !pc.remoteDescription) return;

    delete pendingIceRef.current[socketId];
    for (const candidate of pending) {
      try {
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (error) {
        console.warn("Cannot add queued ICE candidate", error);
      }
    }
  }, []);
  flushPendingIceRef.current = flushPendingIce;

  const createPeerConnection = useCallback(
    (socketId: string, currentSocket = socketRef.current) => {
      const existingPeer = peersRef.current[socketId];
      if (existingPeer && !isPeerClosed(existingPeer)) return existingPeer;
      if (existingPeer) {
        delete peersRef.current[socketId];
        delete remoteStreamsRef.current[socketId];
        delete pendingIceRef.current[socketId];
        delete makingOfferRef.current[socketId];
        refreshPeerState();
        refreshRemoteStreams();
      }

      const pc = new RTCPeerConnection(ICE_SERVERS);
      ensureTransceivers(pc);

      pc.onicecandidate = (event) => {
        if (event.candidate && currentSocket) {
          currentSocket.emit("ice-candidate", { target: socketId, candidate: event.candidate });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "failed") {
          pc.restartIce?.();
        } else if (pc.connectionState === "closed") {
          closePeerRef.current(socketId);
        }
      };

      pc.ontrack = (event) => {
        let stream = event.streams[0] || remoteStreamsRef.current[socketId];
        if (!stream) stream = new MediaStream();
        if (!stream.getTracks().some((track) => track.id === event.track.id)) {
          stream.addTrack(event.track);
        }
        remoteStreamsRef.current[socketId] = stream;
        refreshRemoteStreams();
      };

      peersRef.current[socketId] = pc;
      refreshPeerState();
      void syncTracksToPeer(pc).catch((error) => {
        if (!isPeerClosed(pc)) console.warn("Cannot attach local tracks", error);
      });
      return pc;
    },
    [ensureTransceivers, refreshPeerState, refreshRemoteStreams, syncTracksToPeer]
  );
  createPeerConnectionRef.current = createPeerConnection;

  const closePeer = useCallback(
    (socketId: string) => {
      const pc = peersRef.current[socketId];
      if (pc && !isPeerClosed(pc)) pc.close();
      delete peersRef.current[socketId];
      delete remoteStreamsRef.current[socketId];
      delete pendingIceRef.current[socketId];
      delete makingOfferRef.current[socketId];
      refreshPeerState();
      refreshRemoteStreams();
    },
    [refreshPeerState, refreshRemoteStreams]
  );
  closePeerRef.current = closePeer;

  const sendOffer = useCallback(
    async (targetSocketId: string) => {
      const currentSocket = socketRef.current;
      if (!currentSocket || makingOfferRef.current[targetSocketId]) return;

      const pc = createPeerConnection(targetSocketId, currentSocket);
      if (isPeerClosed(pc)) return;
      await syncTracksToPeer(pc);
      if (isPeerClosed(pc) || pc.signalingState !== "stable") return;

      try {
        makingOfferRef.current[targetSocketId] = true;
        const offer = await pc.createOffer();
        if (isPeerClosed(pc)) return;
        await pc.setLocalDescription(offer);
        currentSocket.emit("offer", { target: targetSocketId, offer: pc.localDescription });
      } catch (error) {
        closePeer(targetSocketId);
        const nextPc = createPeerConnection(targetSocketId, currentSocket);
        if (isPeerClosed(nextPc)) return;
        await syncTracksToPeer(nextPc);
        if (isPeerClosed(nextPc) || nextPc.signalingState !== "stable") return;
        const offer = await nextPc.createOffer();
        if (isPeerClosed(nextPc)) return;
        await nextPc.setLocalDescription(offer);
        currentSocket.emit("offer", { target: targetSocketId, offer: nextPc.localDescription });
      } finally {
        makingOfferRef.current[targetSocketId] = false;
      }
    },
    [closePeer, createPeerConnection, syncTracksToPeer]
  );
  sendOfferRef.current = sendOffer;

  const renegotiatePeers = useCallback(async () => {
    const peerSocketIds = Object.keys(peersRef.current);
    await Promise.all(
      peerSocketIds.map(async (peerSocketId) => {
        const pc = peersRef.current[peerSocketId];
        if (!pc || isPeerClosed(pc) || pc.signalingState !== "stable") return;
        try {
          await sendOfferRef.current(peerSocketId);
        } catch (error) {
          console.warn("Cannot renegotiate WebRTC peer", error);
        }
      })
    );
  }, []);

  const ensureParticipantPeers = useCallback(
    (nextParticipants: RoomParticipant[], currentSocket = socketRef.current) => {
      const selfId = currentSocket?.id || socketRef.current?.id || selfSocketId;

      nextParticipants.forEach((participant) => {
        const peerSocketId = participant.socketId;
        if (!peerSocketId || peerSocketId === selfId) return;

        createPeerConnection(peerSocketId, currentSocket);
      });
    },
    [createPeerConnection, selfSocketId]
  );
  ensureParticipantPeersRef.current = ensureParticipantPeers;

  const stopTracks = useCallback((stream: MediaStream | null, kind?: "audio" | "video") => {
    if (!stream) return;
    const tracks = kind ? stream.getTracks().filter((track) => track.kind === kind) : stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
      stream.removeTrack(track);
    });
  }, []);
  stopTracksRef.current = stopTracks;

  const ensureAudioTrack = useCallback(async () => {
    const existing = getLocalAudioTrack();
    if (existing) return existing;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: selectedAudioDeviceId ? { deviceId: { exact: selectedAudioDeviceId } } : true,
      video: false,
    });
    const track = stream.getAudioTracks()[0];
    if (!track) throw new Error("Không tìm thấy micro.");

    localStreamRef.current ||= new MediaStream();
    stopTracks(localStreamRef.current, "audio");
    localStreamRef.current.addTrack(track);
    return track;
  }, [getLocalAudioTrack, selectedAudioDeviceId, stopTracks]);

  const ensureVideoTrack = useCallback(async () => {
    const existing = getLocalVideoTrack();
    if (existing) return existing;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: selectedVideoDeviceId
        ? { deviceId: { exact: selectedVideoDeviceId } }
        : {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 30 },
          },
    });
    const track = stream.getVideoTracks()[0];
    if (!track) throw new Error("Không tìm thấy camera.");

    localStreamRef.current ||= new MediaStream();
    stopTracks(localStreamRef.current, "video");
    localStreamRef.current.addTrack(track);
    return track;
  }, [getLocalVideoTrack, selectedVideoDeviceId, stopTracks]);

  const setMicrophoneEnabled = useCallback(
    async (enabled: boolean) => {
      try {
        setMediaError(null);
        if (enabled) {
          const track = await ensureAudioTrack();
          track.enabled = true;
          isMicOnRef.current = true;
          setIsMicOn(true);
          await refreshDevices();
        } else {
          stopTracks(localStreamRef.current, "audio");
          isMicOnRef.current = false;
          setIsMicOn(false);
        }
        await syncTracksToAllPeers();
        await renegotiatePeers();
        publishMediaState({ isMicOn: enabled });
      } catch (error) {
        setMediaError(error instanceof Error ? error.message : "Không thể bật micro.");
        isMicOnRef.current = false;
        setIsMicOn(false);
        publishMediaState({ isMicOn: false });
      }
    },
    [ensureAudioTrack, publishMediaState, refreshDevices, renegotiatePeers, stopTracks, syncTracksToAllPeers]
  );
  setMicrophoneEnabledRef.current = setMicrophoneEnabled;

  const setCameraEnabled = useCallback(
    async (enabled: boolean) => {
      try {
        setMediaError(null);
        if (enabled) {
          await ensureVideoTrack();
          isCamOnRef.current = true;
          setIsCamOn(true);
          if (!isScreenSharingRef.current) setLocalPreviewStream(localStreamRef.current);
          await refreshDevices();
        } else {
          stopTracks(localStreamRef.current, "video");
          isCamOnRef.current = false;
          setIsCamOn(false);
          if (!isScreenSharingRef.current) setLocalPreviewStream(null);
        }
        await syncTracksToAllPeers();
        await renegotiatePeers();
        publishMediaState({ isCamOn: enabled });
      } catch (error) {
        setMediaError(error instanceof Error ? error.message : "Không thể bật camera.");
        isCamOnRef.current = false;
        setIsCamOn(false);
        if (!isScreenSharingRef.current) setLocalPreviewStream(null);
        publishMediaState({ isCamOn: false });
      }
    },
    [ensureVideoTrack, publishMediaState, refreshDevices, renegotiatePeers, stopTracks, syncTracksToAllPeers]
  );

  const stopScreenShare = useCallback(async () => {
    stopTracks(screenStreamRef.current);
    screenStreamRef.current = null;
    isScreenSharingRef.current = false;
    setIsScreenSharing(false);
    setLocalPreviewStream(isCamOnRef.current ? localStreamRef.current : null);
    await syncTracksToAllPeers();
    await renegotiatePeers();
    publishMediaState({ isScreenSharing: false });
  }, [publishMediaState, renegotiatePeers, stopTracks, syncTracksToAllPeers]);

  const startScreenShare = useCallback(async () => {
    try {
      setMediaError(null);
      if (!navigator.mediaDevices?.getDisplayMedia) {
        throw new Error("Trình duyệt này không hỗ trợ chia sẻ màn hình. Hãy dùng máy tính hoặc app.");
      }
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } },
        audio: false,
      });
      const screenTrack = stream.getVideoTracks()[0];
      if (!screenTrack) throw new Error("Không thể chia sẻ màn hình.");

      screenTrack.onended = () => {
        void stopScreenShare();
      };

      screenStreamRef.current = stream;
      isScreenSharingRef.current = true;
      setIsScreenSharing(true);
      setLocalPreviewStream(stream);
      await syncTracksToAllPeers();
      await renegotiatePeers();
      publishMediaState({ isScreenSharing: true });
    } catch (error) {
      setMediaError(error instanceof Error ? error.message : "Không thể chia sẻ màn hình.");
      isScreenSharingRef.current = false;
      setIsScreenSharing(false);
      publishMediaState({ isScreenSharing: false });
    }
  }, [publishMediaState, renegotiatePeers, stopScreenShare, syncTracksToAllPeers]);

  const toggleMic = useCallback(() => setMicrophoneEnabled(!isMicOnRef.current), [setMicrophoneEnabled]);
  const toggleCamera = useCallback(() => setCameraEnabled(!isCamOnRef.current), [setCameraEnabled]);
  const toggleScreenShare = useCallback(() => {
    if (isScreenSharingRef.current) {
      void stopScreenShare();
    } else {
      void startScreenShare();
    }
  }, [startScreenShare, stopScreenShare]);

  const toggleHand = useCallback(() => {
    const next = !isHandRaisedRef.current;
    isHandRaisedRef.current = next;
    setIsHandRaised(next);
    socketRef.current?.emit("raise-hand", { isHandRaised: next });
    publishMediaState({ isHandRaised: next });
  }, [publishMediaState]);

  const sendChatMessage = useCallback((text: string) => {
    const cleanText = text.trim();
    if (!cleanText) return;
    socketRef.current?.emit("chat-message", {
      id: `${userId}-${Date.now()}`,
      text: cleanText,
    });
  }, [userId]);

  const sendReaction = useCallback(
    (reaction: string) => {
      const payload = {
        id: `${userId}-${Date.now()}`,
        senderSocketId: selfSocketId || "local",
        senderName: userName,
        reaction,
        createdAt: new Date().toISOString(),
      };
      setReactions((prev) => [...prev.slice(-5), payload]);
      socketRef.current?.emit("reaction", { reaction });
    },
    [selfSocketId, userId, userName]
  );

  const switchMicrophone = useCallback(
    async (deviceId: string) => {
      setSelectedAudioDeviceId(deviceId);
      if (!isMicOnRef.current) return;
      stopTracks(localStreamRef.current, "audio");
      await setMicrophoneEnabled(true);
    },
    [setMicrophoneEnabled, stopTracks]
  );

  const switchCamera = useCallback(
    async (deviceId: string) => {
      setSelectedVideoDeviceId(deviceId);
      if (!isCamOnRef.current) return;
      stopTracks(localStreamRef.current, "video");
      await setCameraEnabled(true);
    },
    [setCameraEnabled, stopTracks]
  );

  const leaveRoom = useCallback(() => {
    socketRef.current?.emit("leave-room");
    Object.keys(peersRef.current).forEach((socketId) => closePeerRef.current(socketId));
    stopTracks(localStreamRef.current);
    stopTracks(screenStreamRef.current);
    localStreamRef.current = makeEmptyMediaStream();
    screenStreamRef.current = null;
    setLocalPreviewStream(null);
    setRemoteStreams({});
    setParticipants([]);
  }, [stopTracks]);

  const localParticipant = useMemo(
    () => participants.find((participant) => participant.socketId === selfSocketId) || null,
    [participants, selfSocketId]
  );

  const remoteParticipants = useMemo(
    () => participants.filter((participant) => participant.socketId !== selfSocketId),
    [participants, selfSocketId]
  );

  useEffect(() => {
    setCanShareScreen(Boolean(navigator.mediaDevices?.getDisplayMedia));
  }, []);

  useEffect(() => {
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = localPreviewStream;
    }
  }, [localPreviewStream]);

  useEffect(() => {
    if (!autoJoin || !roomId || !userId) return;

    setConnectionState("connecting");
    const nextSocket = io(getApiUrl(), {
      auth: { token },
      withCredentials: true,
      transports: ["polling"],
      upgrade: false,
    });

    socketRef.current = nextSocket;
    setSocket(nextSocket);

    const joinRoom = () => {
      setConnectionState("connected");
      setSelfSocketId(nextSocket.id || null);
      nextSocket.emit("join-room", {
        roomId,
        userId,
        userName,
        role,
        state: {
          isMicOn: isMicOnRef.current,
          isCamOn: isCamOnRef.current,
          isScreenSharing: isScreenSharingRef.current,
          isHandRaised: isHandRaisedRef.current,
        },
      });
    };

    nextSocket.on("connect", joinRoom);
    nextSocket.on("reconnect_attempt", () => setConnectionState("reconnecting"));
    nextSocket.on("disconnect", () => setConnectionState("disconnected"));
    nextSocket.on("connect_error", (error) => {
      setConnectionState("error");
      setMediaError(error.message);
    });
    nextSocket.on("room-error", (payload) => {
      setConnectionState("error");
      setMediaError(payload?.message || "Không thể vào phòng học.");
    });

    nextSocket.on("room-users", ({ self, participants: existingParticipants = [], allParticipants = [] }) => {
      setSelfSocketId(self?.socketId || nextSocket.id || null);
      const nextParticipants = uniqueParticipants(allParticipants.length ? allParticipants : [self, ...existingParticipants].filter(Boolean));
      setParticipants(nextParticipants);
      ensureParticipantPeersRef.current(nextParticipants, nextSocket);
    });

    nextSocket.on("participants-updated", ({ participants: nextParticipants = [] }) => {
      const normalizedParticipants = uniqueParticipants(nextParticipants);
      setParticipants(normalizedParticipants);
      ensureParticipantPeersRef.current(normalizedParticipants, nextSocket);
    });

    nextSocket.on("participant-updated", (participant: RoomParticipant) => {
      setParticipants((prev) => uniqueParticipants([...prev.filter((item) => item.socketId !== participant.socketId), participant]));
    });

    nextSocket.on("user-connected", async (participant: RoomParticipant) => {
      setParticipants((prev) => uniqueParticipants([...prev.filter((item) => item.socketId !== participant.socketId), participant]));
      if (participant.socketId) {
        try {
          await sendOfferRef.current(participant.socketId);
        } catch (error) {
          console.warn("Cannot send WebRTC offer", error);
        }
      }
    });

    nextSocket.on("offer", async ({ caller, offer }) => {
      if (!caller || !offer) return;
      try {
        const pc = createPeerConnectionRef.current(caller, nextSocket);
        if (!pc || isPeerClosed(pc)) return;
        const offerCollision = makingOfferRef.current[caller] || pc.signalingState !== "stable";
        const ignoreOffer = !isPolitePeer(nextSocket.id, caller) && offerCollision;
        if (ignoreOffer) return;

        if (offerCollision && !isPeerClosed(pc)) {
          await pc.setLocalDescription({ type: "rollback" });
        }

        if (isPeerClosed(pc)) return;
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        await syncTracksToPeerRef.current(pc);
        await flushPendingIceRef.current(caller, pc);
        if (isPeerClosed(pc)) return;
        const answer = await pc.createAnswer();
        if (isPeerClosed(pc)) return;
        await pc.setLocalDescription(answer);
        nextSocket.emit("answer", { target: caller, answer: pc.localDescription });
      } catch (error) {
        console.warn("Cannot answer WebRTC offer", error);
      }
    });

    nextSocket.on("answer", async ({ caller, answer }) => {
      const pc = caller ? peersRef.current[caller] : null;
      if (!pc || isPeerClosed(pc) || !answer) return;
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
        await flushPendingIceRef.current(caller, pc);
      } catch (error) {
        console.warn("Cannot apply WebRTC answer", error);
      }
    });

    nextSocket.on("ice-candidate", async ({ caller, candidate }) => {
      if (!caller || !candidate) return;
      const pc = peersRef.current[caller] || createPeerConnectionRef.current(caller, nextSocket);
      if (!pc || isPeerClosed(pc)) return;

      if (!pc.remoteDescription) {
        pendingIceRef.current[caller] ||= [];
        pendingIceRef.current[caller].push(candidate);
        return;
      }

      try {
        if (isPeerClosed(pc)) return;
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (error) {
        console.warn("Cannot add ICE candidate", error);
      }
    });

    nextSocket.on("user-disconnected", ({ socketId }) => {
      if (socketId) closePeerRef.current(socketId);
      setParticipants((prev) => prev.filter((participant) => participant.socketId !== socketId));
    });

    nextSocket.on("chat-message", (message: ClassroomChatMessage) => {
      setChatMessages((prev) => [...prev, message]);
    });

    nextSocket.on("reaction", (payload) => {
      setReactions((prev) => [
        ...prev.slice(-5),
        {
          id: `${payload.senderSocketId}-${Date.now()}`,
          senderSocketId: payload.senderSocketId,
          senderName: payload.senderName,
          reaction: payload.reaction,
          createdAt: payload.createdAt || new Date().toISOString(),
        },
      ]);
    });

    nextSocket.on("host-mute", () => {
      setMediaError("Chủ phòng đã tắt micro của bạn.");
      void setMicrophoneEnabledRef.current(false);
    });

    return () => {
      nextSocket.emit("leave-room");
      nextSocket.removeAllListeners();
      nextSocket.disconnect();
      socketRef.current = null;
      setSocket(null);
      setConnectionState("disconnected");
      Object.keys(peersRef.current).forEach((socketId) => closePeerRef.current(socketId));
      pendingIceRef.current = {};
      stopTracksRef.current(localStreamRef.current);
      stopTracksRef.current(screenStreamRef.current);
      localStreamRef.current = makeEmptyMediaStream();
      screenStreamRef.current = null;
      setParticipants([]);
      setRemoteStreams({});
      setLocalPreviewStream(null);
      setSelfSocketId(null);
    };
  }, [
    autoJoin,
    roomId,
    role,
    token,
    userId,
    userName,
  ]);

  return {
    socket,
    connectionState,
    selfSocketId,
    participants,
    localParticipant,
    remoteParticipants,
    participantCount: participants.length,
    peers,
    remoteStreams,
    localPreviewStream,
    localVideoRef,
    isMicOn,
    setMicrophoneEnabled,
    toggleMic,
    isCamOn,
    setCameraEnabled,
    toggleCamera,
    isScreenSharing,
    canShareScreen,
    startScreenShare,
    stopScreenShare,
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
  };
}
