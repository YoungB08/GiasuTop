module.exports = [
"[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const API_BASE_URL = (()=>{
    // Client-side: Tự động phát hiện dựa trên domain hiện tại của trình duyệt
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server-side (SSR)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (("TURBOPACK compile-time value", "") || "").replace(/\/$/, "");
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
        const browserOrigin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
        const configuredOrigin = API_BASE_URL ? new URL(API_BASE_URL).origin : browserOrigin;
        return new URL(url, configuredOrigin || undefined).origin === configuredOrigin;
    } catch  {
        return false;
    }
}
}),
"[project]/packages/web/app/utils/avatar.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvatarUrl",
    ()=>getAvatarUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
;
const getAvatarUrl = (u)=>{
    if (!u) return "";
    const url = u.avatarUrl || u.avatar_url;
    const email = u.email || u.username || "avatar";
    if (!url) return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(email)}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicAssetUrl"])(url);
};
}),
"[project]/packages/web/app/hooks/useWebRTC.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebRTC",
    ()=>useWebRTC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
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
    return ("TURBOPACK compile-time value", "") || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"] || window.location.origin;
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
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [selfSocketId, setSelfSocketId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [peers, setPeers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [remoteStreams, setRemoteStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [localPreviewStream, setLocalPreviewStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reactions, setReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaError, setMediaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMicOn, setIsMicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(options.initialMicOn));
    const [isCamOn, setIsCamOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(options.initialCamOn));
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHandRaised, setIsHandRaised] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioDevices, setAudioDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [videoDevices, setVideoDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAudioDeviceId, setSelectedAudioDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVideoDeviceId, setSelectedVideoDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const peersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const remoteStreamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const pendingIceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const makingOfferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(makeEmptyMediaStream());
    const screenStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMicOnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Boolean(options.initialMicOn));
    const isCamOnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Boolean(options.initialCamOn));
    const isScreenSharingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isHandRaisedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refreshPeerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setPeers({
            ...peersRef.current
        });
    }, []);
    const refreshRemoteStreams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setRemoteStreams({
            ...remoteStreamsRef.current
        });
    }, []);
    const refreshDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!navigator.mediaDevices?.enumerateDevices) return;
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            setAudioDevices(devices.filter((device)=>device.kind === "audioinput").map((device, index)=>({
                    deviceId: device.deviceId,
                    label: device.label || `Micro ${index + 1}`,
                    kind: device.kind
                })));
            setVideoDevices(devices.filter((device)=>device.kind === "videoinput").map((device, index)=>({
                    deviceId: device.deviceId,
                    label: device.label || `Camera ${index + 1}`,
                    kind: device.kind
                })));
        } catch (error) {
            console.warn("Cannot enumerate media devices", error);
        }
    }, []);
    const publishMediaState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((patch)=>{
        socketRef.current?.emit("media-state", {
            isMicOn: patch?.isMicOn ?? isMicOnRef.current,
            isCamOn: patch?.isCamOn ?? isCamOnRef.current,
            isScreenSharing: patch?.isScreenSharing ?? isScreenSharingRef.current,
            isHandRaised: patch?.isHandRaised ?? isHandRaisedRef.current
        });
    }, []);
    const getLocalAudioTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return localStreamRef.current?.getAudioTracks().find((track)=>track.readyState === "live") || null;
    }, []);
    const getLocalVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return localStreamRef.current?.getVideoTracks().find((track)=>track.readyState === "live") || null;
    }, []);
    const getScreenVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return screenStreamRef.current?.getVideoTracks().find((track)=>track.readyState === "live") || null;
    }, []);
    const getOutgoingVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return getScreenVideoTrack() || (isCamOnRef.current ? getLocalVideoTrack() : null);
    }, [
        getLocalVideoTrack,
        getScreenVideoTrack
    ]);
    const getSender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pc, kind)=>{
        const transceiver = pc.getTransceivers().find((item)=>item.receiver.track.kind === kind || item.sender.track?.kind === kind);
        return transceiver?.sender || pc.getSenders().find((sender)=>sender.track?.kind === kind) || null;
    }, []);
    const ensureTransceivers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pc)=>{
        const kinds = pc.getTransceivers().map((item)=>item.receiver.track.kind);
        if (!kinds.includes("audio")) pc.addTransceiver("audio", {
            direction: "sendrecv"
        });
        if (!kinds.includes("video")) pc.addTransceiver("video", {
            direction: "sendrecv"
        });
    }, []);
    const syncTracksToPeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (pc)=>{
        const audioSender = getSender(pc, "audio");
        const videoSender = getSender(pc, "video");
        const audioTrack = isMicOnRef.current ? getLocalAudioTrack() : null;
        const videoTrack = getOutgoingVideoTrack();
        if (audioSender) await audioSender.replaceTrack(audioTrack);
        if (videoSender) await videoSender.replaceTrack(videoTrack);
    }, [
        getLocalAudioTrack,
        getOutgoingVideoTrack,
        getSender
    ]);
    const syncTracksToAllPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await Promise.all(Object.values(peersRef.current).map((pc)=>syncTracksToPeer(pc).catch(console.warn)));
    }, [
        syncTracksToPeer
    ]);
    const flushPendingIce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (socketId, pc)=>{
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
    }, []);
    const createPeerConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((socketId, currentSocket = socketRef.current)=>{
        if (peersRef.current[socketId]) return peersRef.current[socketId];
        const pc = new RTCPeerConnection(ICE_SERVERS);
        ensureTransceivers(pc);
        pc.onicecandidate = (event)=>{
            if (event.candidate && currentSocket) {
                currentSocket.emit("ice-candidate", {
                    target: socketId,
                    candidate: event.candidate
                });
            }
        };
        pc.onconnectionstatechange = ()=>{
            if ([
                "failed",
                "closed",
                "disconnected"
            ].includes(pc.connectionState)) {
                if (pc.connectionState === "failed") {
                    pc.restartIce?.();
                }
            }
        };
        pc.ontrack = (event)=>{
            let stream = event.streams[0] || remoteStreamsRef.current[socketId];
            if (!stream) stream = new MediaStream();
            if (!stream.getTracks().some((track)=>track.id === event.track.id)) {
                stream.addTrack(event.track);
            }
            remoteStreamsRef.current[socketId] = stream;
            refreshRemoteStreams();
        };
        peersRef.current[socketId] = pc;
        refreshPeerState();
        void syncTracksToPeer(pc);
        return pc;
    }, [
        ensureTransceivers,
        refreshPeerState,
        refreshRemoteStreams,
        syncTracksToPeer
    ]);
    const closePeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((socketId)=>{
        peersRef.current[socketId]?.close();
        delete peersRef.current[socketId];
        delete remoteStreamsRef.current[socketId];
        delete pendingIceRef.current[socketId];
        delete makingOfferRef.current[socketId];
        refreshPeerState();
        refreshRemoteStreams();
    }, [
        refreshPeerState,
        refreshRemoteStreams
    ]);
    const sendOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (targetSocketId)=>{
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
    }, [
        createPeerConnection,
        syncTracksToPeer
    ]);
    const ensureParticipantPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextParticipants, currentSocket = socketRef.current)=>{
        const selfId = currentSocket?.id || socketRef.current?.id || selfSocketId;
        nextParticipants.forEach((participant)=>{
            const peerSocketId = participant.socketId;
            if (!peerSocketId || peerSocketId === selfId) return;
            const pc = createPeerConnection(peerSocketId, currentSocket);
            const shouldRecoverOffer = !pc.localDescription && !pc.remoteDescription && isPolitePeer(selfId, peerSocketId);
            if (shouldRecoverOffer) {
                globalThis.setTimeout(()=>{
                    const currentPc = peersRef.current[peerSocketId];
                    if (currentPc && !currentPc.localDescription && !currentPc.remoteDescription) {
                        void sendOffer(peerSocketId).catch((error)=>console.warn("Cannot recover WebRTC offer", error));
                    }
                }, 700);
            }
        });
    }, [
        createPeerConnection,
        selfSocketId,
        sendOffer
    ]);
    const stopTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stream, kind)=>{
        if (!stream) return;
        const tracks = kind ? stream.getTracks().filter((track)=>track.kind === kind) : stream.getTracks();
        tracks.forEach((track)=>{
            track.stop();
            stream.removeTrack(track);
        });
    }, []);
    const ensureAudioTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, [
        getLocalAudioTrack,
        selectedAudioDeviceId,
        stopTracks
    ]);
    const ensureVideoTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, [
        getLocalVideoTrack,
        selectedVideoDeviceId,
        stopTracks
    ]);
    const setMicrophoneEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (enabled)=>{
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
    }, [
        ensureAudioTrack,
        publishMediaState,
        refreshDevices,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const setCameraEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (enabled)=>{
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
    }, [
        ensureVideoTrack,
        publishMediaState,
        refreshDevices,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const stopScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        stopTracks(screenStreamRef.current);
        screenStreamRef.current = null;
        isScreenSharingRef.current = false;
        setIsScreenSharing(false);
        setLocalPreviewStream(isCamOnRef.current ? localStreamRef.current : null);
        await syncTracksToAllPeers();
        publishMediaState({
            isScreenSharing: false
        });
    }, [
        publishMediaState,
        stopTracks,
        syncTracksToAllPeers
    ]);
    const startScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            screenTrack.onended = ()=>{
                void stopScreenShare();
            };
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
    }, [
        publishMediaState,
        stopScreenShare,
        syncTracksToAllPeers
    ]);
    const toggleMic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setMicrophoneEnabled(!isMicOnRef.current), [
        setMicrophoneEnabled
    ]);
    const toggleCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setCameraEnabled(!isCamOnRef.current), [
        setCameraEnabled
    ]);
    const toggleScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isScreenSharingRef.current) {
            void stopScreenShare();
        } else {
            void startScreenShare();
        }
    }, [
        startScreenShare,
        stopScreenShare
    ]);
    const toggleHand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const next = !isHandRaisedRef.current;
        isHandRaisedRef.current = next;
        setIsHandRaised(next);
        socketRef.current?.emit("raise-hand", {
            isHandRaised: next
        });
        publishMediaState({
            isHandRaised: next
        });
    }, [
        publishMediaState
    ]);
    const sendChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        const cleanText = text.trim();
        if (!cleanText) return;
        socketRef.current?.emit("chat-message", {
            id: `${userId}-${Date.now()}`,
            text: cleanText
        });
    }, [
        userId
    ]);
    const sendReaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((reaction)=>{
        const payload = {
            id: `${userId}-${Date.now()}`,
            senderSocketId: selfSocketId || "local",
            senderName: userName,
            reaction,
            createdAt: new Date().toISOString()
        };
        setReactions((prev)=>[
                ...prev.slice(-5),
                payload
            ]);
        socketRef.current?.emit("reaction", {
            reaction
        });
    }, [
        selfSocketId,
        userId,
        userName
    ]);
    const switchMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (deviceId)=>{
        setSelectedAudioDeviceId(deviceId);
        if (!isMicOnRef.current) return;
        stopTracks(localStreamRef.current, "audio");
        await setMicrophoneEnabled(true);
    }, [
        setMicrophoneEnabled,
        stopTracks
    ]);
    const switchCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (deviceId)=>{
        setSelectedVideoDeviceId(deviceId);
        if (!isCamOnRef.current) return;
        stopTracks(localStreamRef.current, "video");
        await setCameraEnabled(true);
    }, [
        setCameraEnabled,
        stopTracks
    ]);
    const leaveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        socketRef.current?.emit("leave-room");
        Object.keys(peersRef.current).forEach(closePeer);
        stopTracks(localStreamRef.current);
        stopTracks(screenStreamRef.current);
        localStreamRef.current = makeEmptyMediaStream();
        screenStreamRef.current = null;
        setLocalPreviewStream(null);
        setRemoteStreams({});
        setParticipants([]);
    }, [
        closePeer,
        stopTracks
    ]);
    const localParticipant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>participants.find((participant)=>participant.socketId === selfSocketId) || null, [
        participants,
        selfSocketId
    ]);
    const remoteParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>participants.filter((participant)=>participant.socketId !== selfSocketId), [
        participants,
        selfSocketId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localVideoRef.current) {
            localVideoRef.current.srcObject = localPreviewStream;
        }
    }, [
        localPreviewStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoJoin || !roomId || !userId) return;
        setConnectionState("connecting");
        const nextSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(getApiUrl(), {
            withCredentials: true,
            transports: [
                "websocket",
                "polling"
            ]
        });
        socketRef.current = nextSocket;
        setSocket(nextSocket);
        const joinRoom = ()=>{
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
        };
        nextSocket.on("connect", joinRoom);
        nextSocket.on("reconnect_attempt", ()=>setConnectionState("reconnecting"));
        nextSocket.on("disconnect", ()=>setConnectionState("disconnected"));
        nextSocket.on("connect_error", (error)=>{
            setConnectionState("error");
            setMediaError(error.message);
        });
        nextSocket.on("room-error", (payload)=>{
            setConnectionState("error");
            setMediaError(payload?.message || "Khong the vao phong hoc.");
        });
        nextSocket.on("room-users", ({ self, participants: existingParticipants = [], allParticipants = [] })=>{
            setSelfSocketId(self?.socketId || nextSocket.id || null);
            const nextParticipants = uniqueParticipants(allParticipants.length ? allParticipants : [
                self,
                ...existingParticipants
            ].filter(Boolean));
            setParticipants(nextParticipants);
            ensureParticipantPeers(nextParticipants, nextSocket);
        });
        nextSocket.on("participants-updated", ({ participants: nextParticipants = [] })=>{
            const normalizedParticipants = uniqueParticipants(nextParticipants);
            setParticipants(normalizedParticipants);
            ensureParticipantPeers(normalizedParticipants, nextSocket);
        });
        nextSocket.on("participant-updated", (participant)=>{
            setParticipants((prev)=>uniqueParticipants([
                    ...prev.filter((item)=>item.socketId !== participant.socketId),
                    participant
                ]));
        });
        nextSocket.on("user-connected", async (participant)=>{
            setParticipants((prev)=>uniqueParticipants([
                    ...prev.filter((item)=>item.socketId !== participant.socketId),
                    participant
                ]));
            if (participant.socketId) {
                try {
                    await sendOffer(participant.socketId);
                } catch (error) {
                    console.warn("Cannot send WebRTC offer", error);
                }
            }
        });
        nextSocket.on("offer", async ({ caller, offer })=>{
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
        });
        nextSocket.on("answer", async ({ caller, answer })=>{
            const pc = caller ? peersRef.current[caller] : null;
            if (!pc || !answer) return;
            try {
                await pc.setRemoteDescription(new RTCSessionDescription(answer));
                await flushPendingIce(caller, pc);
            } catch (error) {
                console.warn("Cannot apply WebRTC answer", error);
            }
        });
        nextSocket.on("ice-candidate", async ({ caller, candidate })=>{
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
        });
        nextSocket.on("user-disconnected", ({ socketId })=>{
            if (socketId) closePeer(socketId);
            setParticipants((prev)=>prev.filter((participant)=>participant.socketId !== socketId));
        });
        nextSocket.on("chat-message", (message)=>{
            setChatMessages((prev)=>[
                    ...prev,
                    message
                ]);
        });
        nextSocket.on("reaction", (payload)=>{
            setReactions((prev)=>[
                    ...prev.slice(-5),
                    {
                        id: `${payload.senderSocketId}-${Date.now()}`,
                        senderSocketId: payload.senderSocketId,
                        senderName: payload.senderName,
                        reaction: payload.reaction,
                        createdAt: payload.createdAt || new Date().toISOString()
                    }
                ]);
        });
        nextSocket.on("host-mute", ()=>{
            setMediaError("Host da tat micro cua ban.");
            void setMicrophoneEnabled(false);
        });
        return ()=>{
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
        };
    }, [
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
}),
];

//# sourceMappingURL=packages_web_app_0un3wq2._.js.map