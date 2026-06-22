(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/web/app/utils/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiUrl",
    ()=>apiUrl,
    "isInternalUrl",
    ()=>isInternalUrl,
    "publicAssetUrl",
    ()=>publicAssetUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = (()=>{
    // Client-side: Tự động phát hiện dựa trên domain hiện tại của trình duyệt
    if ("TURBOPACK compile-time truthy", 1) {
        const hostname = window.location.hostname;
        // Tự động nhận diện local dev (localhost hoặc IP mạng nội bộ)
        const isLocal = hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.");
        if (isLocal) {
            // Khi chạy ở local -> Dùng relative URL để Next.js proxy ngầm, tránh CORS và ngrok warning
            return "";
        }
        // Khi chạy trên Production (bất kỳ tên miền nào: kntech.site, tên miền khác, v.v...)
        return ("TURBOPACK compile-time value", "") || window.location.origin;
    }
    //TURBOPACK unreachable
    ;
})();
function apiUrl(path) {
    if (/^https?:\/\//i.test(path)) return path;
    return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
function publicAssetUrl(url) {
    if (!url) return "";
    if (/^https?:\/\//i.test(url) || url.startsWith("data:") || url.startsWith("blob:")) return url;
    return apiUrl(url);
}
function isInternalUrl(url) {
    try {
        const browserOrigin = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
        const configuredOrigin = API_BASE_URL ? new URL(API_BASE_URL).origin : browserOrigin;
        return new URL(url, configuredOrigin || undefined).origin === configuredOrigin;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/utils/avatar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvatarUrl",
    ()=>getAvatarUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-client] (ecmascript)");
;
const getAvatarUrl = (u)=>{
    if (!u) return "";
    const url = u.avatarUrl || u.avatar_url;
    const email = u.email || u.username || "avatar";
    if (!url) return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(email)}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicAssetUrl"])(url);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/hooks/useWebRTC.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebRTC",
    ()=>useWebRTC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const ICE_SERVERS = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302"
        },
        {
            urls: "stun:stun1.l.google.com:19302"
        }
    ]
};
function getApiUrl() {
    return ("TURBOPACK compile-time value", "") || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"] || window.location.origin;
}
function uniqueParticipants(participants) {
    const bySocket = new Map();
    participants.forEach((participant)=>{
        if (participant.socketId) bySocket.set(participant.socketId, participant);
    });
    return Array.from(bySocket.values()).sort((a, b)=>{
        if (a.isHost !== b.isHost) return a.isHost ? -1 : 1;
        return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime();
    });
}
function makeEmptyMediaStream() {
    if (typeof MediaStream === "undefined") return null;
    return new MediaStream();
}
function isPolitePeer(selfSocketId, peerSocketId) {
    if (!selfSocketId || !peerSocketId) return true;
    return selfSocketId > peerSocketId;
}
function useWebRTC(roomIdOrOptions, userIdArg, userNameArg, roleArg = "GUEST") {
    _s();
    const options = typeof roomIdOrOptions === "string" ? {
        roomId: roomIdOrOptions,
        userId: userIdArg || "guest",
        userName: userNameArg || "Khach",
        role: roleArg
    } : roomIdOrOptions;
    const roomId = options.roomId;
    const userId = options.userId;
    const userName = options.userName || "Khach";
    const role = options.role || "GUEST";
    const autoJoin = options.autoJoin ?? true;
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [selfSocketId, setSelfSocketId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [peers, setPeers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [remoteStreams, setRemoteStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [localPreviewStream, setLocalPreviewStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reactions, setReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaError, setMediaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMicOn, setIsMicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(options.initialMicOn));
    const [isCamOn, setIsCamOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(options.initialCamOn));
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHandRaised, setIsHandRaised] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioDevices, setAudioDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [videoDevices, setVideoDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAudioDeviceId, setSelectedAudioDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVideoDeviceId, setSelectedVideoDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const peersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const remoteStreamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const pendingIceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const makingOfferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(makeEmptyMediaStream());
    const screenStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMicOnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Boolean(options.initialMicOn));
    const isCamOnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Boolean(options.initialCamOn));
    const isScreenSharingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isHandRaisedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refreshPeerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[refreshPeerState]": ()=>{
            setPeers({
                ...peersRef.current
            });
        }
    }["useWebRTC.useCallback[refreshPeerState]"], []);
    const refreshRemoteStreams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[refreshRemoteStreams]": ()=>{
            setRemoteStreams({
                ...remoteStreamsRef.current
            });
        }
    }["useWebRTC.useCallback[refreshRemoteStreams]"], []);
    const refreshDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[refreshDevices]": async ()=>{
            if (!navigator.mediaDevices?.enumerateDevices) return;
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                setAudioDevices(devices.filter({
                    "useWebRTC.useCallback[refreshDevices]": (device)=>device.kind === "audioinput"
                }["useWebRTC.useCallback[refreshDevices]"]).map({
                    "useWebRTC.useCallback[refreshDevices]": (device, index)=>({
                            deviceId: device.deviceId,
                            label: device.label || `Micro ${index + 1}`,
                            kind: device.kind
                        })
                }["useWebRTC.useCallback[refreshDevices]"]));
                setVideoDevices(devices.filter({
                    "useWebRTC.useCallback[refreshDevices]": (device)=>device.kind === "videoinput"
                }["useWebRTC.useCallback[refreshDevices]"]).map({
                    "useWebRTC.useCallback[refreshDevices]": (device, index)=>({
                            deviceId: device.deviceId,
                            label: device.label || `Camera ${index + 1}`,
                            kind: device.kind
                        })
                }["useWebRTC.useCallback[refreshDevices]"]));
            } catch (error) {
                console.warn("Cannot enumerate media devices", error);
            }
        }
    }["useWebRTC.useCallback[refreshDevices]"], []);
    const publishMediaState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[publishMediaState]": (patch)=>{
            socketRef.current?.emit("media-state", {
                isMicOn: patch?.isMicOn ?? isMicOnRef.current,
                isCamOn: patch?.isCamOn ?? isCamOnRef.current,
                isScreenSharing: patch?.isScreenSharing ?? isScreenSharingRef.current,
                isHandRaised: patch?.isHandRaised ?? isHandRaisedRef.current
            });
        }
    }["useWebRTC.useCallback[publishMediaState]"], []);
    const getLocalAudioTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[getLocalAudioTrack]": ()=>{
            return localStreamRef.current?.getAudioTracks().find({
                "useWebRTC.useCallback[getLocalAudioTrack]": (track)=>track.readyState === "live"
            }["useWebRTC.useCallback[getLocalAudioTrack]"]) || null;
        }
    }["useWebRTC.useCallback[getLocalAudioTrack]"], []);
    const getLocalVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[getLocalVideoTrack]": ()=>{
            return localStreamRef.current?.getVideoTracks().find({
                "useWebRTC.useCallback[getLocalVideoTrack]": (track)=>track.readyState === "live"
            }["useWebRTC.useCallback[getLocalVideoTrack]"]) || null;
        }
    }["useWebRTC.useCallback[getLocalVideoTrack]"], []);
    const getScreenVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[getScreenVideoTrack]": ()=>{
            return screenStreamRef.current?.getVideoTracks().find({
                "useWebRTC.useCallback[getScreenVideoTrack]": (track)=>track.readyState === "live"
            }["useWebRTC.useCallback[getScreenVideoTrack]"]) || null;
        }
    }["useWebRTC.useCallback[getScreenVideoTrack]"], []);
    const getOutgoingVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[getOutgoingVideoTrack]": ()=>{
            return getScreenVideoTrack() || (isCamOnRef.current ? getLocalVideoTrack() : null);
        }
    }["useWebRTC.useCallback[getOutgoingVideoTrack]"], [
        getLocalVideoTrack,
        getScreenVideoTrack
    ]);
    const getSender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[getSender]": (pc, kind)=>{
            const transceiver = pc.getTransceivers().find({
                "useWebRTC.useCallback[getSender].transceiver": (item)=>item.receiver.track.kind === kind || item.sender.track?.kind === kind
            }["useWebRTC.useCallback[getSender].transceiver"]);
            return transceiver?.sender || pc.getSenders().find({
                "useWebRTC.useCallback[getSender]": (sender)=>sender.track?.kind === kind
            }["useWebRTC.useCallback[getSender]"]) || null;
        }
    }["useWebRTC.useCallback[getSender]"], []);
    const ensureTransceivers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[ensureTransceivers]": (pc)=>{
            const kinds = pc.getTransceivers().map({
                "useWebRTC.useCallback[ensureTransceivers].kinds": (item)=>item.receiver.track.kind
            }["useWebRTC.useCallback[ensureTransceivers].kinds"]);
            if (!kinds.includes("audio")) pc.addTransceiver("audio", {
                direction: "sendrecv"
            });
            if (!kinds.includes("video")) pc.addTransceiver("video", {
                direction: "sendrecv"
            });
        }
    }["useWebRTC.useCallback[ensureTransceivers]"], []);
    const syncTracksToPeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[syncTracksToPeer]": async (pc)=>{
            const audioSender = getSender(pc, "audio");
            const videoSender = getSender(pc, "video");
            const audioTrack = isMicOnRef.current ? getLocalAudioTrack() : null;
            const videoTrack = getOutgoingVideoTrack();
            if (audioSender) await audioSender.replaceTrack(audioTrack);
            if (videoSender) await videoSender.replaceTrack(videoTrack);
        }
    }["useWebRTC.useCallback[syncTracksToPeer]"], [
        getLocalAudioTrack,
        getOutgoingVideoTrack,
        getSender
    ]);
    const syncTracksToAllPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[syncTracksToAllPeers]": async ()=>{
            await Promise.all(Object.values(peersRef.current).map({
                "useWebRTC.useCallback[syncTracksToAllPeers]": (pc)=>syncTracksToPeer(pc).catch(console.warn)
            }["useWebRTC.useCallback[syncTracksToAllPeers]"]));
        }
    }["useWebRTC.useCallback[syncTracksToAllPeers]"], [
        syncTracksToPeer
    ]);
    const flushPendingIce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[flushPendingIce]": async (socketId, pc)=>{
            const pending = pendingIceRef.current[socketId] || [];
            if (!pending.length || !pc.remoteDescription) return;
            delete pendingIceRef.current[socketId];
            for (const candidate of pending){
                try {
                    await pc.addIceCandidate(new RTCIceCandidate(candidate));
                } catch (error) {
                    console.warn("Cannot add queued ICE candidate", error);
                }
            }
        }
    }["useWebRTC.useCallback[flushPendingIce]"], []);
    const createPeerConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[createPeerConnection]": (socketId, currentSocket = socketRef.current)=>{
            if (peersRef.current[socketId]) return peersRef.current[socketId];
            const pc = new RTCPeerConnection(ICE_SERVERS);
            ensureTransceivers(pc);
            pc.onicecandidate = ({
                "useWebRTC.useCallback[createPeerConnection]": (event)=>{
                    if (event.candidate && currentSocket) {
                        currentSocket.emit("ice-candidate", {
                            target: socketId,
                            candidate: event.candidate
                        });
                    }
                }
            })["useWebRTC.useCallback[createPeerConnection]"];
            pc.onconnectionstatechange = ({
                "useWebRTC.useCallback[createPeerConnection]": ()=>{
                    if ([
                        "failed",
                        "closed",
                        "disconnected"
                    ].includes(pc.connectionState)) {
                        if (pc.connectionState === "failed") {
                            pc.restartIce?.();
                        }
                    }
                }
            })["useWebRTC.useCallback[createPeerConnection]"];
            pc.ontrack = ({
                "useWebRTC.useCallback[createPeerConnection]": (event)=>{
                    let stream = event.streams[0] || remoteStreamsRef.current[socketId];
                    if (!stream) stream = new MediaStream();
                    if (!stream.getTracks().some({
                        "useWebRTC.useCallback[createPeerConnection]": (track)=>track.id === event.track.id
                    }["useWebRTC.useCallback[createPeerConnection]"])) {
                        stream.addTrack(event.track);
                    }
                    remoteStreamsRef.current[socketId] = stream;
                    refreshRemoteStreams();
                }
            })["useWebRTC.useCallback[createPeerConnection]"];
            peersRef.current[socketId] = pc;
            refreshPeerState();
            void syncTracksToPeer(pc);
            return pc;
        }
    }["useWebRTC.useCallback[createPeerConnection]"], [
        ensureTransceivers,
        refreshPeerState,
        refreshRemoteStreams,
        syncTracksToPeer
    ]);
    const closePeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[closePeer]": (socketId)=>{
            peersRef.current[socketId]?.close();
            delete peersRef.current[socketId];
            delete remoteStreamsRef.current[socketId];
            delete pendingIceRef.current[socketId];
            delete makingOfferRef.current[socketId];
            refreshPeerState();
            refreshRemoteStreams();
        }
    }["useWebRTC.useCallback[closePeer]"], [
        refreshPeerState,
        refreshRemoteStreams
    ]);
    const sendOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[sendOffer]": async (targetSocketId)=>{
            const currentSocket = socketRef.current;
            if (!currentSocket || makingOfferRef.current[targetSocketId]) return;
            const pc = createPeerConnection(targetSocketId, currentSocket);
            await syncTracksToPeer(pc);
            if (pc.signalingState !== "stable") return;
            try {
                makingOfferRef.current[targetSocketId] = true;
                const offer = await pc.createOffer();
                await pc.setLocalDescription(offer);
                currentSocket.emit("offer", {
                    target: targetSocketId,
                    offer: pc.localDescription
                });
            } finally{
                makingOfferRef.current[targetSocketId] = false;
            }
        }
    }["useWebRTC.useCallback[sendOffer]"], [
        createPeerConnection,
        syncTracksToPeer
    ]);
    const ensureParticipantPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[ensureParticipantPeers]": (nextParticipants, currentSocket = socketRef.current)=>{
            const selfId = currentSocket?.id || socketRef.current?.id || selfSocketId;
            nextParticipants.forEach({
                "useWebRTC.useCallback[ensureParticipantPeers]": (participant)=>{
                    const peerSocketId = participant.socketId;
                    if (!peerSocketId || peerSocketId === selfId) return;
                    const pc = createPeerConnection(peerSocketId, currentSocket);
                    const shouldRecoverOffer = !pc.localDescription && !pc.remoteDescription && isPolitePeer(selfId, peerSocketId);
                    if (shouldRecoverOffer) {
                        globalThis.setTimeout({
                            "useWebRTC.useCallback[ensureParticipantPeers]": ()=>{
                                const currentPc = peersRef.current[peerSocketId];
                                if (currentPc && !currentPc.localDescription && !currentPc.remoteDescription) {
                                    void sendOffer(peerSocketId).catch({
                                        "useWebRTC.useCallback[ensureParticipantPeers]": (error)=>console.warn("Cannot recover WebRTC offer", error)
                                    }["useWebRTC.useCallback[ensureParticipantPeers]"]);
                                }
                            }
                        }["useWebRTC.useCallback[ensureParticipantPeers]"], 700);
                    }
                }
            }["useWebRTC.useCallback[ensureParticipantPeers]"]);
        }
    }["useWebRTC.useCallback[ensureParticipantPeers]"], [
        createPeerConnection,
        selfSocketId,
        sendOffer
    ]);
    const stopTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[stopTracks]": (stream, kind)=>{
            if (!stream) return;
            const tracks = kind ? stream.getTracks().filter({
                "useWebRTC.useCallback[stopTracks]": (track)=>track.kind === kind
            }["useWebRTC.useCallback[stopTracks]"]) : stream.getTracks();
            tracks.forEach({
                "useWebRTC.useCallback[stopTracks]": (track)=>{
                    track.stop();
                    stream.removeTrack(track);
                }
            }["useWebRTC.useCallback[stopTracks]"]);
        }
    }["useWebRTC.useCallback[stopTracks]"], []);
    const ensureAudioTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[ensureAudioTrack]": async ()=>{
            const existing = getLocalAudioTrack();
            if (existing) return existing;
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: selectedAudioDeviceId ? {
                    deviceId: {
                        exact: selectedAudioDeviceId
                    }
                } : true,
                video: false
            });
            const track = stream.getAudioTracks()[0];
            if (!track) throw new Error("Khong tim thay micro.");
            localStreamRef.current ||= new MediaStream();
            stopTracks(localStreamRef.current, "audio");
            localStreamRef.current.addTrack(track);
            return track;
        }
    }["useWebRTC.useCallback[ensureAudioTrack]"], [
        getLocalAudioTrack,
        selectedAudioDeviceId,
        stopTracks
    ]);
    const ensureVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[ensureVideoTrack]": async ()=>{
            const existing = getLocalVideoTrack();
            if (existing) return existing;
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: selectedVideoDeviceId ? {
                    deviceId: {
                        exact: selectedVideoDeviceId
                    }
                } : {
                    width: {
                        ideal: 1280
                    },
                    height: {
                        ideal: 720
                    },
                    frameRate: {
                        ideal: 30
                    }
                }
            });
            const track = stream.getVideoTracks()[0];
            if (!track) throw new Error("Khong tim thay camera.");
            localStreamRef.current ||= new MediaStream();
            stopTracks(localStreamRef.current, "video");
            localStreamRef.current.addTrack(track);
            return track;
        }
    }["useWebRTC.useCallback[ensureVideoTrack]"], [
        getLocalVideoTrack,
        selectedVideoDeviceId,
        stopTracks
    ]);
    const setMicrophoneEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[setMicrophoneEnabled]": async (enabled)=>{
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
                publishMediaState({
                    isMicOn: enabled
                });
            } catch (error) {
                setMediaError(error instanceof Error ? error.message : "Khong the bat micro.");
                isMicOnRef.current = false;
                setIsMicOn(false);
                publishMediaState({
                    isMicOn: false
                });
            }
        }
    }["useWebRTC.useCallback[setMicrophoneEnabled]"], [
        ensureAudioTrack,
        publishMediaState,
        refreshDevices,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const setCameraEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[setCameraEnabled]": async (enabled)=>{
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
                publishMediaState({
                    isCamOn: enabled
                });
            } catch (error) {
                setMediaError(error instanceof Error ? error.message : "Khong the bat camera.");
                isCamOnRef.current = false;
                setIsCamOn(false);
                if (!isScreenSharingRef.current) setLocalPreviewStream(null);
                publishMediaState({
                    isCamOn: false
                });
            }
        }
    }["useWebRTC.useCallback[setCameraEnabled]"], [
        ensureVideoTrack,
        publishMediaState,
        refreshDevices,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const stopScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[stopScreenShare]": async ()=>{
            stopTracks(screenStreamRef.current);
            screenStreamRef.current = null;
            isScreenSharingRef.current = false;
            setIsScreenSharing(false);
            setLocalPreviewStream(isCamOnRef.current ? localStreamRef.current : null);
            await syncTracksToAllPeers();
            publishMediaState({
                isScreenSharing: false
            });
        }
    }["useWebRTC.useCallback[stopScreenShare]"], [
        publishMediaState,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const startScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[startScreenShare]": async ()=>{
            try {
                setMediaError(null);
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: {
                        frameRate: {
                            ideal: 30
                        }
                    },
                    audio: false
                });
                const screenTrack = stream.getVideoTracks()[0];
                if (!screenTrack) throw new Error("Khong the chia se man hinh.");
                screenTrack.onended = ({
                    "useWebRTC.useCallback[startScreenShare]": ()=>{
                        void stopScreenShare();
                    }
                })["useWebRTC.useCallback[startScreenShare]"];
                screenStreamRef.current = stream;
                isScreenSharingRef.current = true;
                setIsScreenSharing(true);
                setLocalPreviewStream(stream);
                await syncTracksToAllPeers();
                publishMediaState({
                    isScreenSharing: true
                });
            } catch (error) {
                setMediaError(error instanceof Error ? error.message : "Khong the chia se man hinh.");
                isScreenSharingRef.current = false;
                setIsScreenSharing(false);
                publishMediaState({
                    isScreenSharing: false
                });
            }
        }
    }["useWebRTC.useCallback[startScreenShare]"], [
        publishMediaState,
        stopScreenShare,
        syncTracksToAllPeers
    ]);
    const toggleMic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[toggleMic]": ()=>setMicrophoneEnabled(!isMicOnRef.current)
    }["useWebRTC.useCallback[toggleMic]"], [
        setMicrophoneEnabled
    ]);
    const toggleCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[toggleCamera]": ()=>setCameraEnabled(!isCamOnRef.current)
    }["useWebRTC.useCallback[toggleCamera]"], [
        setCameraEnabled
    ]);
    const toggleScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[toggleScreenShare]": ()=>{
            if (isScreenSharingRef.current) {
                void stopScreenShare();
            } else {
                void startScreenShare();
            }
        }
    }["useWebRTC.useCallback[toggleScreenShare]"], [
        startScreenShare,
        stopScreenShare
    ]);
    const toggleHand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[toggleHand]": ()=>{
            const next = !isHandRaisedRef.current;
            isHandRaisedRef.current = next;
            setIsHandRaised(next);
            socketRef.current?.emit("raise-hand", {
                isHandRaised: next
            });
            publishMediaState({
                isHandRaised: next
            });
        }
    }["useWebRTC.useCallback[toggleHand]"], [
        publishMediaState
    ]);
    const sendChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[sendChatMessage]": (text)=>{
            const cleanText = text.trim();
            if (!cleanText) return;
            socketRef.current?.emit("chat-message", {
                id: `${userId}-${Date.now()}`,
                text: cleanText
            });
        }
    }["useWebRTC.useCallback[sendChatMessage]"], [
        userId
    ]);
    const sendReaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[sendReaction]": (reaction)=>{
            const payload = {
                id: `${userId}-${Date.now()}`,
                senderSocketId: selfSocketId || "local",
                senderName: userName,
                reaction,
                createdAt: new Date().toISOString()
            };
            setReactions({
                "useWebRTC.useCallback[sendReaction]": (prev)=>[
                        ...prev.slice(-5),
                        payload
                    ]
            }["useWebRTC.useCallback[sendReaction]"]);
            socketRef.current?.emit("reaction", {
                reaction
            });
        }
    }["useWebRTC.useCallback[sendReaction]"], [
        selfSocketId,
        userId,
        userName
    ]);
    const switchMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[switchMicrophone]": async (deviceId)=>{
            setSelectedAudioDeviceId(deviceId);
            if (!isMicOnRef.current) return;
            stopTracks(localStreamRef.current, "audio");
            await setMicrophoneEnabled(true);
        }
    }["useWebRTC.useCallback[switchMicrophone]"], [
        setMicrophoneEnabled,
        stopTracks
    ]);
    const switchCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[switchCamera]": async (deviceId)=>{
            setSelectedVideoDeviceId(deviceId);
            if (!isCamOnRef.current) return;
            stopTracks(localStreamRef.current, "video");
            await setCameraEnabled(true);
        }
    }["useWebRTC.useCallback[switchCamera]"], [
        setCameraEnabled,
        stopTracks
    ]);
    const leaveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebRTC.useCallback[leaveRoom]": ()=>{
            socketRef.current?.emit("leave-room");
            Object.keys(peersRef.current).forEach(closePeer);
            stopTracks(localStreamRef.current);
            stopTracks(screenStreamRef.current);
            localStreamRef.current = makeEmptyMediaStream();
            screenStreamRef.current = null;
            setLocalPreviewStream(null);
            setRemoteStreams({});
            setParticipants([]);
        }
    }["useWebRTC.useCallback[leaveRoom]"], [
        closePeer,
        stopTracks
    ]);
    const localParticipant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWebRTC.useMemo[localParticipant]": ()=>participants.find({
                "useWebRTC.useMemo[localParticipant]": (participant)=>participant.socketId === selfSocketId
            }["useWebRTC.useMemo[localParticipant]"]) || null
    }["useWebRTC.useMemo[localParticipant]"], [
        participants,
        selfSocketId
    ]);
    const remoteParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWebRTC.useMemo[remoteParticipants]": ()=>participants.filter({
                "useWebRTC.useMemo[remoteParticipants]": (participant)=>participant.socketId !== selfSocketId
            }["useWebRTC.useMemo[remoteParticipants]"])
    }["useWebRTC.useMemo[remoteParticipants]"], [
        participants,
        selfSocketId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebRTC.useEffect": ()=>{
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = localPreviewStream;
            }
        }
    }["useWebRTC.useEffect"], [
        localPreviewStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebRTC.useEffect": ()=>{
            if (!autoJoin || !roomId || !userId) return;
            setConnectionState("connecting");
            const nextSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(getApiUrl(), {
                withCredentials: true,
                transports: [
                    "websocket",
                    "polling"
                ]
            });
            socketRef.current = nextSocket;
            setSocket(nextSocket);
            const joinRoom = {
                "useWebRTC.useEffect.joinRoom": ()=>{
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
                            isHandRaised: isHandRaisedRef.current
                        }
                    });
                }
            }["useWebRTC.useEffect.joinRoom"];
            nextSocket.on("connect", joinRoom);
            nextSocket.on("reconnect_attempt", {
                "useWebRTC.useEffect": ()=>setConnectionState("reconnecting")
            }["useWebRTC.useEffect"]);
            nextSocket.on("disconnect", {
                "useWebRTC.useEffect": ()=>setConnectionState("disconnected")
            }["useWebRTC.useEffect"]);
            nextSocket.on("connect_error", {
                "useWebRTC.useEffect": (error)=>{
                    setConnectionState("error");
                    setMediaError(error.message);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("room-error", {
                "useWebRTC.useEffect": (payload)=>{
                    setConnectionState("error");
                    setMediaError(payload?.message || "Khong the vao phong hoc.");
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("room-users", {
                "useWebRTC.useEffect": ({ self, participants: existingParticipants = [], allParticipants = [] })=>{
                    setSelfSocketId(self?.socketId || nextSocket.id || null);
                    const nextParticipants = uniqueParticipants(allParticipants.length ? allParticipants : [
                        self,
                        ...existingParticipants
                    ].filter(Boolean));
                    setParticipants(nextParticipants);
                    ensureParticipantPeers(nextParticipants, nextSocket);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("participants-updated", {
                "useWebRTC.useEffect": ({ participants: nextParticipants = [] })=>{
                    const normalizedParticipants = uniqueParticipants(nextParticipants);
                    setParticipants(normalizedParticipants);
                    ensureParticipantPeers(normalizedParticipants, nextSocket);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("participant-updated", {
                "useWebRTC.useEffect": (participant)=>{
                    setParticipants({
                        "useWebRTC.useEffect": (prev)=>uniqueParticipants([
                                ...prev.filter({
                                    "useWebRTC.useEffect": (item)=>item.socketId !== participant.socketId
                                }["useWebRTC.useEffect"]),
                                participant
                            ])
                    }["useWebRTC.useEffect"]);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("user-connected", {
                "useWebRTC.useEffect": async (participant)=>{
                    setParticipants({
                        "useWebRTC.useEffect": (prev)=>uniqueParticipants([
                                ...prev.filter({
                                    "useWebRTC.useEffect": (item)=>item.socketId !== participant.socketId
                                }["useWebRTC.useEffect"]),
                                participant
                            ])
                    }["useWebRTC.useEffect"]);
                    if (participant.socketId) {
                        try {
                            await sendOffer(participant.socketId);
                        } catch (error) {
                            console.warn("Cannot send WebRTC offer", error);
                        }
                    }
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("offer", {
                "useWebRTC.useEffect": async ({ caller, offer })=>{
                    if (!caller || !offer) return;
                    try {
                        const pc = createPeerConnection(caller, nextSocket);
                        const offerCollision = makingOfferRef.current[caller] || pc.signalingState !== "stable";
                        const ignoreOffer = !isPolitePeer(nextSocket.id, caller) && offerCollision;
                        if (ignoreOffer) return;
                        if (offerCollision) {
                            await pc.setLocalDescription({
                                type: "rollback"
                            });
                        }
                        await pc.setRemoteDescription(new RTCSessionDescription(offer));
                        await syncTracksToPeer(pc);
                        await flushPendingIce(caller, pc);
                        const answer = await pc.createAnswer();
                        await pc.setLocalDescription(answer);
                        nextSocket.emit("answer", {
                            target: caller,
                            answer: pc.localDescription
                        });
                    } catch (error) {
                        console.warn("Cannot answer WebRTC offer", error);
                    }
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("answer", {
                "useWebRTC.useEffect": async ({ caller, answer })=>{
                    const pc = caller ? peersRef.current[caller] : null;
                    if (!pc || !answer) return;
                    try {
                        await pc.setRemoteDescription(new RTCSessionDescription(answer));
                        await flushPendingIce(caller, pc);
                    } catch (error) {
                        console.warn("Cannot apply WebRTC answer", error);
                    }
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("ice-candidate", {
                "useWebRTC.useEffect": async ({ caller, candidate })=>{
                    if (!caller || !candidate) return;
                    const pc = peersRef.current[caller] || createPeerConnection(caller, nextSocket);
                    if (!pc.remoteDescription) {
                        pendingIceRef.current[caller] ||= [];
                        pendingIceRef.current[caller].push(candidate);
                        return;
                    }
                    try {
                        await pc.addIceCandidate(new RTCIceCandidate(candidate));
                    } catch (error) {
                        console.warn("Cannot add ICE candidate", error);
                    }
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("user-disconnected", {
                "useWebRTC.useEffect": ({ socketId })=>{
                    if (socketId) closePeer(socketId);
                    setParticipants({
                        "useWebRTC.useEffect": (prev)=>prev.filter({
                                "useWebRTC.useEffect": (participant)=>participant.socketId !== socketId
                            }["useWebRTC.useEffect"])
                    }["useWebRTC.useEffect"]);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("chat-message", {
                "useWebRTC.useEffect": (message)=>{
                    setChatMessages({
                        "useWebRTC.useEffect": (prev)=>[
                                ...prev,
                                message
                            ]
                    }["useWebRTC.useEffect"]);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("reaction", {
                "useWebRTC.useEffect": (payload)=>{
                    setReactions({
                        "useWebRTC.useEffect": (prev)=>[
                                ...prev.slice(-5),
                                {
                                    id: `${payload.senderSocketId}-${Date.now()}`,
                                    senderSocketId: payload.senderSocketId,
                                    senderName: payload.senderName,
                                    reaction: payload.reaction,
                                    createdAt: payload.createdAt || new Date().toISOString()
                                }
                            ]
                    }["useWebRTC.useEffect"]);
                }
            }["useWebRTC.useEffect"]);
            nextSocket.on("host-mute", {
                "useWebRTC.useEffect": ()=>{
                    setMediaError("Host da tat micro cua ban.");
                    void setMicrophoneEnabled(false);
                }
            }["useWebRTC.useEffect"]);
            return ({
                "useWebRTC.useEffect": ()=>{
                    nextSocket.emit("leave-room");
                    nextSocket.removeAllListeners();
                    nextSocket.disconnect();
                    socketRef.current = null;
                    setSocket(null);
                    setConnectionState("disconnected");
                    Object.keys(peersRef.current).forEach(closePeer);
                    pendingIceRef.current = {};
                    stopTracks(localStreamRef.current);
                    stopTracks(screenStreamRef.current);
                    localStreamRef.current = makeEmptyMediaStream();
                    screenStreamRef.current = null;
                    setParticipants([]);
                    setRemoteStreams({});
                    setLocalPreviewStream(null);
                    setSelfSocketId(null);
                }
            })["useWebRTC.useEffect"];
        }
    }["useWebRTC.useEffect"], [
        autoJoin,
        closePeer,
        createPeerConnection,
        ensureParticipantPeers,
        flushPendingIce,
        roomId,
        role,
        sendOffer,
        setMicrophoneEnabled,
        stopTracks,
        syncTracksToPeer,
        userId,
        userName
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
        leaveRoom
    };
}
_s(useWebRTC, "6Ljti99g+Ni22/8wAyvPE+lY3Ys=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_web_app_1gkh4_g._.js.map