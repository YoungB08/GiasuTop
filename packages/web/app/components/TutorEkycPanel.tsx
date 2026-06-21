"use client";

import React, { useEffect, useRef, useState } from "react";
import { apiUrl } from "../utils/api";

type TutorEkycPanelProps = {
  token: string | null;
  frontFile?: File | null;
  backFile?: File | null;
  portraitFile?: File | null;
  onResultChange: (result: any | null) => void;
  showKntechAlert: (type: "success" | "error" | "info" | "warning", title: string, message: string, image?: string) => void;
};

type ImageState = {
  dataUrl: string;
  quality: any;
  qrText: string;
};

const stepTargets = [
  { x: 0, y: 0, yaw: 0, pitch: 0, label: "Nhìn thẳng vào khung" },
  { x: 0, y: -0.29, yaw: 0, pitch: -0.22, label: "Ngẩng mặt nhẹ lên" },
  { x: 0.22, y: -0.21, yaw: 0.2, pitch: -0.16, label: "Xoay nhẹ lên phải" },
  { x: 0.3, y: 0, yaw: 0.26, pitch: 0, label: "Xoay sang phải" },
  { x: 0.22, y: 0.21, yaw: 0.2, pitch: 0.16, label: "Xoay nhẹ xuống phải" },
  { x: 0, y: 0.29, yaw: 0, pitch: 0.22, label: "Cúi mặt nhẹ xuống" },
  { x: -0.22, y: 0.21, yaw: -0.2, pitch: 0.16, label: "Xoay nhẹ xuống trái" },
  { x: -0.3, y: 0, yaw: -0.26, pitch: 0, label: "Xoay sang trái" },
  { x: -0.22, y: -0.21, yaw: -0.2, pitch: -0.16, label: "Xoay nhẹ lên trái" },
  { x: 0, y: 0, yaw: 0, pitch: 0, label: "Trở về chính giữa" },
];

const ocrWorkerState: { worker: any; ready: boolean } = { worker: null, ready: false };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function createCanvas(width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function waitForGlobal(name: string, timeoutMs = 12000) {
  const startedAt = performance.now();
  return new Promise<any>((resolve, reject) => {
    const tick = () => {
      const value = (window as any)[name];
      if (value) {
        resolve(value);
        return;
      }
      if (performance.now() - startedAt > timeoutMs) {
        reject(new Error(`${name} chưa tải xong`));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

async function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Không tải được ${src}`));
    document.body.appendChild(script);
  });
}

async function ensureEkycScripts(loadOcr = false) {
  await Promise.all([
    loadScript("kntech-jsqr", "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js"),
    loadScript("kntech-facemesh", "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/face_mesh.js"),
    loadOcr ? loadScript("kntech-tesseract", "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js") : Promise.resolve(),
  ]);
}

function computeQuality(image: HTMLImageElement) {
  const width = 320;
  const height = Math.max(1, Math.round((image.naturalHeight / image.naturalWidth) * width));
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { brightness: 0, contrast: 0, sharpness: 0, glare: 100, score: 0 };
  ctx.drawImage(image, 0, 0, width, height);
  const { data } = ctx.getImageData(0, 0, width, height);
  const luminance = new Float32Array(width * height);
  let sum = 0;
  let glare = 0;

  for (let index = 0, pixel = 0; index < data.length; index += 4, pixel += 1) {
    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    luminance[pixel] = y;
    sum += y;
    if (r > 238 && g > 238 && b > 238) glare += 1;
  }

  const mean = sum / luminance.length;
  let variance = 0;
  let edge = 0;
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const i = y * width + x;
      const diff = luminance[i] - mean;
      variance += diff * diff;
      edge += Math.abs(luminance[i] * 4 - luminance[i - 1] - luminance[i + 1] - luminance[i - width] - luminance[i + width]);
    }
  }

  const contrast = clamp(Math.sqrt(variance / luminance.length) * 2.2, 0, 100);
  const sharpness = clamp((edge / luminance.length) * 0.95, 0, 100);
  const brightness = clamp((mean / 255) * 100, 0, 100);
  const glarePercent = clamp((glare / luminance.length) * 100, 0, 100);
  const brightnessScore = 100 - clamp(Math.abs(brightness - 55) * 2.6, 0, 100);
  const score = clamp(Math.round(sharpness * 0.36 + brightnessScore * 0.26 + contrast * 0.24 + (100 - glarePercent) * 0.14), 0, 100);

  return {
    brightness: Math.round(brightness),
    contrast: Math.round(contrast),
    sharpness: Math.round(sharpness),
    glare: Math.round(glarePercent),
    score,
  };
}

function extractCardCanvas(image: HTMLImageElement, options: { mode?: "ocr" | "qr" } = {}) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const targetWidth = options.mode === "ocr" ? 1500 : 980;
  const cardRatio = 85.6 / 53.98;
  const imageRatio = sourceWidth / sourceHeight;
  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;

  if (imageRatio > cardRatio) {
    sw = sourceHeight * cardRatio;
    sx = (sourceWidth - sw) / 2;
  } else {
    sh = sourceWidth / cardRatio;
    sy = (sourceHeight - sh) / 2;
  }

  const paddingX = sw * 0.035;
  const paddingY = sh * 0.04;
  sx = clamp(sx + paddingX, 0, sourceWidth - 1);
  sy = clamp(sy + paddingY, 0, sourceHeight - 1);
  sw = clamp(sw - paddingX * 2, 1, sourceWidth - sx);
  sh = clamp(sh - paddingY * 2, 1, sourceHeight - sy);

  const canvas = createCanvas(targetWidth, Math.round(targetWidth / cardRatio));
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function preprocessForQr(canvas: HTMLCanvasElement, scale = 1) {
  const output = createCanvas(Math.round(canvas.width * scale), Math.round(canvas.height * scale));
  const ctx = output.getContext("2d", { willReadFrequently: true });
  if (!ctx) return output;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, output.width, output.height);
  const imageData = ctx.getImageData(0, 0, output.width, output.height);
  const { data } = imageData;
  for (let index = 0; index < data.length; index += 4) {
    const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
    const value = gray > 128 ? 255 : 0;
    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
  }
  ctx.putImageData(imageData, 0, 0);
  return output;
}

async function detectQrWithBarcodeDetector(image: HTMLImageElement) {
  if (!("BarcodeDetector" in window)) return "";
  try {
    const detector = new (window as any).BarcodeDetector({ formats: ["qr_code"] });
    const codes = await detector.detect(image);
    return codes[0]?.rawValue || "";
  } catch {
    return "";
  }
}

function detectQrWithJsQr(canvas: HTMLCanvasElement) {
  const jsQR = (window as any).jsQR;
  if (!jsQR) return "";
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "attemptBoth" });
  return code?.data || "";
}

async function detectQrFromImage(image: HTMLImageElement) {
  await ensureEkycScripts(false);
  const barcodeQr = await detectQrWithBarcodeDetector(image);
  if (barcodeQr) return barcodeQr;

  const cardCanvas = extractCardCanvas(image, { mode: "qr" });
  const variants = [cardCanvas, preprocessForQr(cardCanvas, 1), preprocessForQr(cardCanvas, 1.35), preprocessForQr(cardCanvas, 1.7)];
  for (const canvas of variants) {
    const qr = detectQrWithJsQr(canvas);
    if (qr) return qr;
  }
  return "";
}

function preprocessForOcr(canvas: HTMLCanvasElement, side: "front" | "back") {
  const output = createCanvas(canvas.width, canvas.height);
  const ctx = output.getContext("2d", { willReadFrequently: true });
  if (!ctx) return output;
  ctx.drawImage(canvas, 0, 0);
  const imageData = ctx.getImageData(0, 0, output.width, output.height);
  const { data } = imageData;
  let sum = 0;
  for (let index = 0; index < data.length; index += 4) {
    const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
    sum += gray;
  }
  const mean = sum / (data.length / 4);
  const contrast = side === "back" ? 1.62 : 1.42;
  const boost = side === "back" ? 12 : 7;
  for (let index = 0; index < data.length; index += 4) {
    const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
    const value = clamp((gray - mean) * contrast + 145 + boost, 0, 255);
    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
  }
  ctx.putImageData(imageData, 0, 0);
  return output;
}

async function ensureOcrWorker(onProgress: (percent: number) => void) {
  if (ocrWorkerState.ready) return ocrWorkerState.worker;
  await ensureEkycScripts(true);
  const Tesseract = await waitForGlobal("Tesseract");
  const worker = await Tesseract.createWorker("vie+eng", 1, {
    logger: (message: any) => {
      if (message.status === "recognizing text") onProgress(Math.round((message.progress || 0) * 100));
    },
  });
  await worker.setParameters({
    tessedit_pageseg_mode: "6",
    preserve_interword_spaces: "1",
    user_defined_dpi: "300",
  });
  ocrWorkerState.worker = worker;
  ocrWorkerState.ready = true;
  return worker;
}

async function runImageOcr(side: "front" | "back", imageData: ImageState, onProgress: (label: string) => void) {
  onProgress(side === "front" ? "OCR mặt trước" : "OCR mặt sau");
  const image = await loadImage(imageData.dataUrl);
  const cardCanvas = extractCardCanvas(image, { mode: "ocr" });
  const processed = preprocessForOcr(cardCanvas, side);
  const worker = await ensureOcrWorker((percent) => onProgress(`OCR ${percent}%`));
  const result = await worker.recognize(processed);
  return result.data.text || "";
}

function makeDescriptor(canvas: HTMLCanvasElement) {
  const width = 16;
  const height = 20;
  const tiny = createCanvas(width, height);
  const ctx = tiny.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  ctx.drawImage(canvas, 0, 0, width, height);
  const { data } = ctx.getImageData(0, 0, width, height);
  const descriptor: number[] = [];
  for (let index = 0; index < data.length; index += 4) {
    const r = data[index] / 255;
    const g = data[index + 1] / 255;
    const b = data[index + 2] / 255;
    descriptor.push(Number((r * 0.38 + g * 0.44 + b * 0.18).toFixed(4)));
  }
  return descriptor;
}

function distance2d(a: any, b: any) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function poseFromLandmarks(landmarks: any[] | undefined) {
  if (!landmarks?.length) {
    return { present: false, x: 0, y: 0, yaw: 0, pitch: 0, roll: 0, area: 0, mean: 0, landmarks: [] };
  }
  const leftEye = landmarks[33];
  const rightEye = landmarks[263];
  const nose = landmarks[1];
  const chin = landmarks[152];
  const forehead = landmarks[10];
  const leftCheek = landmarks[234];
  const rightCheek = landmarks[454];
  const mouth = landmarks[13];
  const eyeMid = { x: (leftEye.x + rightEye.x) / 2, y: (leftEye.y + rightEye.y) / 2 };
  const cheekMid = { x: (leftCheek.x + rightCheek.x) / 2, y: (leftCheek.y + rightCheek.y) / 2 };
  const faceWidth = Math.max(distance2d(leftCheek, rightCheek), 0.001);
  const faceHeight = Math.max(distance2d(forehead, chin), 0.001);
  const area = faceWidth * faceHeight;
  const yaw = clamp(((nose.x - cheekMid.x) / faceWidth) * 2.7, -0.7, 0.7);
  const pitch = clamp(((nose.y - eyeMid.y) / faceHeight) * 2.2 - 0.52, -0.7, 0.7);
  const roll = clamp(Math.atan2(rightEye.y - leftEye.y, rightEye.x - leftEye.x) / 0.7, -0.7, 0.7);
  const centerX = (leftCheek.x + rightCheek.x + nose.x + mouth.x) / 4;
  const centerY = (forehead.y + chin.y + nose.y + mouth.y) / 4;
  return {
    present: area > 0.04,
    x: clamp((centerX - 0.5) * 2, -0.7, 0.7),
    y: clamp((centerY - 0.5) * 2, -0.7, 0.7),
    yaw,
    pitch,
    roll,
    area,
    mean: 0.5 + Math.abs(yaw) * 0.15 + Math.abs(pitch) * 0.12,
    landmarks,
  };
}

function descriptorFromPose(analysis: any) {
  const landmarks = analysis?.landmarks || [];
  if (!landmarks.length) return null;
  const pairs = [
    [33, 263],
    [234, 454],
    [10, 152],
    [1, 152],
    [1, 13],
    [13, 152],
    [61, 291],
    [199, 152],
    [33, 1],
    [263, 1],
    [33, 61],
    [263, 291],
    [10, 1],
    [1, 199],
    [234, 1],
    [454, 1],
  ];
  const faceWidth = Math.max(distance2d(landmarks[234], landmarks[454]), 0.001);
  const faceHeight = Math.max(distance2d(landmarks[10], landmarks[152]), 0.001);
  const scale = Math.max((faceWidth + faceHeight) / 2, 0.001);
  const descriptor = pairs.map(([a, b]) => Number((distance2d(landmarks[a], landmarks[b]) / scale).toFixed(4)));
  descriptor.push(Number((faceWidth / faceHeight).toFixed(4)));
  descriptor.push(Number(((landmarks[1].x - landmarks[234].x) / faceWidth).toFixed(4)));
  descriptor.push(Number(((landmarks[454].x - landmarks[1].x) / faceWidth).toFixed(4)));
  descriptor.push(Number(((landmarks[1].y - landmarks[10].y) / faceHeight).toFixed(4)));
  descriptor.push(Number(((landmarks[152].y - landmarks[1].y) / faceHeight).toFixed(4)));
  return descriptor;
}

async function ensureFaceMesh() {
  await ensureEkycScripts(false);
  const FaceMesh = await waitForGlobal("FaceMesh", 12000);
  const faceMesh = new FaceMesh({
    locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/${file}`,
  });
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.45,
    minTrackingConfidence: 0.45,
  });
  return faceMesh;
}

async function faceDescriptorFromCanvas(canvas: HTMLCanvasElement) {
  try {
    const faceMesh = await ensureFaceMesh();
    const input = createCanvas(320, 320);
    const ctx = input.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#dfe8ee";
    ctx.fillRect(0, 0, input.width, input.height);
    const scale = Math.min(input.width / canvas.width, input.height / canvas.height);
    const width = canvas.width * scale;
    const height = canvas.height * scale;
    ctx.drawImage(canvas, (input.width - width) / 2, (input.height - height) / 2, width, height);

    return await new Promise<any>((resolve) => {
      const timeout = window.setTimeout(() => resolve(null), 1600);
      faceMesh.onResults((results: any) => {
        window.clearTimeout(timeout);
        resolve(descriptorFromPose(poseFromLandmarks(results.multiFaceLandmarks?.[0])));
      });
      faceMesh.send({ image: input }).catch(() => {
        window.clearTimeout(timeout);
        resolve(null);
      });
    });
  } catch {
    return null;
  }
}

function poseMatchesStep(analysis: any, target: any, stepIndex: number) {
  if (!analysis.present) return false;
  const centered = Math.abs(analysis.x) < 0.48 && Math.abs(analysis.y) < 0.5 && Math.abs(analysis.roll) < 0.34;
  if (!centered) return false;
  const isCenterStep = stepIndex === 0 || stepIndex === stepTargets.length - 1;
  if (isCenterStep) return Math.abs(analysis.deltaYaw ?? analysis.yaw) < 0.17 && Math.abs(analysis.deltaPitch ?? analysis.pitch) < 0.19;
  const yaw = analysis.deltaYaw ?? analysis.yaw;
  const pitch = analysis.deltaPitch ?? analysis.pitch;
  const yawOk = Math.abs(target.yaw) < 0.05 ? Math.abs(yaw) < 0.28 : Math.sign(yaw) === Math.sign(target.yaw) && Math.abs(yaw) > Math.abs(target.yaw) * 0.32;
  const pitchOk = Math.abs(target.pitch) < 0.05 ? Math.abs(pitch) < 0.3 : Math.sign(pitch) === Math.sign(target.pitch) && Math.abs(pitch) > Math.abs(target.pitch) * 0.32;
  return yawOk && pitchOk;
}

function captureSelfie(video: HTMLVideoElement, targetCanvas: HTMLCanvasElement) {
  const ctx = targetCanvas.getContext("2d");
  if (!ctx) return;
  const vw = video.videoWidth || 1280;
  const vh = video.videoHeight || 720;
  const cropW = Math.min(vw, vh * 0.8);
  const cropH = cropW * 1.25;
  const sx = (vw - cropW) / 2;
  const sy = Math.max(0, (vh - cropH) / 2);
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(video, sx, sy, cropW, cropH, -targetCanvas.width, 0, targetCanvas.width, targetCanvas.height);
  ctx.restore();
}

export default function TutorEkycPanel({ token, frontFile, backFile, portraitFile, onResultChange, showKntechAlert }: TutorEkycPanelProps) {
  const [front, setFront] = useState<ImageState | null>(null);
  const [back, setBack] = useState<ImageState | null>(null);
  const [documentResult, setDocumentResult] = useState<any | null>(null);
  const [verifyResult, setVerifyResult] = useState<any | null>(null);
  const [portraitDescriptor, setPortraitDescriptor] = useState<any[] | null>(null);
  const [portraitDescriptorType, setPortraitDescriptorType] = useState("");
  const [selfieDescriptor, setSelfieDescriptor] = useState<any[] | null>(null);
  const [selfieDescriptorType, setSelfieDescriptorType] = useState("");
  const [liveness, setLiveness] = useState<any>({ expectedSteps: 10, completedSteps: 0, faceCoverage: 0, motionCoverage: 0, frameVariance: 0, durationMs: 0 });
  const [busy, setBusy] = useState(false);
  const [statusText, setStatusText] = useState("Chưa chạy eKYC");
  const [liveOpen, setLiveOpen] = useState(false);
  const [livePrompt, setLivePrompt] = useState("Đưa mặt vào khung");
  const [liveProgress, setLiveProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stopLiveRef = useRef<(() => void) | null>(null);
  const autoOcrKeyRef = useRef("");
  const autoLiveKeyRef = useRef("");
  const fileKey = [frontFile, backFile, portraitFile]
    .map((file) => (file ? `${file.name}:${file.size}:${file.lastModified}` : "missing"))
    .join("|");

  useEffect(() => {
    onResultChange(verifyResult ? { document: documentResult, liveness, verification: verifyResult } : null);
  }, [documentResult, liveness, onResultChange, verifyResult]);

  useEffect(() => {
    let cancelled = false;
    async function prepareImage(file: File | null | undefined, setter: (value: ImageState | null) => void) {
      if (!file) {
        setter(null);
        return;
      }
      const dataUrl = await fileToDataUrl(file);
      const image = await loadImage(dataUrl);
      const quality = computeQuality(image);
      const qrText = await detectQrFromImage(image);
      if (!cancelled) setter({ dataUrl, quality, qrText });
    }
    void prepareImage(frontFile, setFront);
    void prepareImage(backFile, setBack);
    setDocumentResult(null);
    setVerifyResult(null);
    setLiveness({ expectedSteps: 10, completedSteps: 0, faceCoverage: 0, motionCoverage: 0, frameVariance: 0, durationMs: 0 });
    setLiveProgress(0);
    setStatusText("Chưa chạy eKYC");
    return () => {
      cancelled = true;
    };
  }, [frontFile, backFile]);

  useEffect(() => {
    let cancelled = false;
    async function preparePortrait() {
      if (!portraitFile) {
        setPortraitDescriptor(null);
        setPortraitDescriptorType("");
        return;
      }
      const dataUrl = await fileToDataUrl(portraitFile);
      const image = await loadImage(dataUrl);
      const canvas = createCanvas(240, 300);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#dfe8ee";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const cropW = image.naturalWidth * 0.55;
      const cropH = image.naturalHeight * 0.75;
      const sx = (image.naturalWidth - cropW) / 2;
      const sy = image.naturalHeight * 0.12;
      ctx.drawImage(image, sx, sy, cropW, cropH, 0, 0, canvas.width, canvas.height);
      const geometry = await faceDescriptorFromCanvas(canvas);
      if (!cancelled) {
        setPortraitDescriptor(geometry || makeDescriptor(canvas));
        setPortraitDescriptorType(geometry ? "geometry" : "pixel");
        setVerifyResult(null);
      }
    }
    void preparePortrait();
    return () => {
      cancelled = true;
    };
  }, [portraitFile]);

  useEffect(() => {
    if (!token || !front || !back || !portraitDescriptor || documentResult || busy || fileKey.includes("missing")) return;
    if (autoOcrKeyRef.current === fileKey) return;
    autoOcrKeyRef.current = fileKey;
    void runOcr(true);
  }, [back, busy, documentResult, fileKey, front, portraitDescriptor, token]);

  useEffect(() => {
    if (!token || !documentResult || !portraitDescriptor || verifyResult || busy || liveOpen || fileKey.includes("missing")) return;
    if (autoLiveKeyRef.current === fileKey) return;
    autoLiveKeyRef.current = fileKey;
    showKntechAlert("info", "eKYC đang chạy", "OCR đã xong. Hệ thống sẽ mở camera để kiểm tra liveness 360.");
    void startLiveness(true).catch((error) => {
      showKntechAlert("error", "Không mở được camera", error.message || "Vui lòng bấm lại Liveness 360.");
    });
  }, [busy, documentResult, fileKey, liveOpen, portraitDescriptor, token, verifyResult]);

  async function runOcr(autoRun = false) {
    if (!token || !front || !back) return;
    setBusy(true);
    setStatusText("Đang OCR CCCD");
    if (autoRun) {
      showKntechAlert("info", "eKYC đang chạy", "Đã nhận đủ ảnh. Hệ thống đang tự đọc CCCD, vui lòng chờ tiến độ trong khung eKYC.");
    }
    try {
      const [frontOcrText, backOcrText] = await Promise.all([
        runImageOcr("front", front, setStatusText),
        runImageOcr("back", back, setStatusText),
      ]);
      const res = await fetch(apiUrl("/api/ekyc/ocr"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          front: { quality: front.quality, qrText: front.qrText, ocrText: frontOcrText },
          back: { quality: back.quality, qrText: back.qrText, ocrText: backOcrText },
          qrText: front.qrText || back.qrText,
          fields: {},
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Không chạy được OCR.");
      setDocumentResult(json);
      setStatusText(`OCR ${json.confidence}% - ${json.status}`);
    } catch (error: any) {
      showKntechAlert("error", "eKYC OCR lỗi", error.message || "Không thể đọc CCCD.");
    } finally {
      setBusy(false);
    }
  }

  async function startLiveness(autoRun = false) {
    if (!token || !documentResult || !portraitDescriptor) {
      showKntechAlert("warning", "Thiếu eKYC", "Vui lòng chạy OCR và chuẩn bị ảnh chân dung trước.");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      showKntechAlert("error", "Không hỗ trợ camera", "Trình duyệt không hỗ trợ camera API.");
      return;
    }

    if (autoRun) {
      setStatusText("Đang mở camera liveness 360");
    }
    setLiveOpen(true);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) throw new Error("Không khởi tạo được màn hình liveness.");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 720 }, frameRate: { ideal: 30, max: 30 } },
      audio: false,
    });
    video.srcObject = stream;
    await video.play();
    setLivePrompt("Đang tải nhận diện khuôn mặt...");

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const faceMesh = await ensureFaceMesh();
    const modelCanvas = createCanvas(320, 320);
    const modelCtx = modelCanvas.getContext("2d");
    if (!modelCtx) return;
    const startTime = performance.now();
    const faceSignals: number[] = [];
    const positions: Array<{ x: number; y: number }> = [];
    const frameMeans: number[] = [];
    const captured = createCanvas(240, 300);
    let animationFrame = 0;
    let currentStep = 0;
    let holdStart = 0;
    let stopped = false;
    let processing = false;
    let lastModelAt = 0;
    const baselineSamples: Array<{ yaw: number; pitch: number }> = [];
    let baseline: any = null;
    let latestAnalysis: any = { present: false, x: 0, y: 0, yaw: 0, pitch: 0, roll: 0, area: 0, mean: 0 };

    faceMesh.onResults((results: any) => {
      const nextAnalysis = poseFromLandmarks(results.multiFaceLandmarks?.[0]);
      if (nextAnalysis.present && !baseline && Math.abs(nextAnalysis.roll) < 0.25) {
        baselineSamples.push({ yaw: nextAnalysis.yaw, pitch: nextAnalysis.pitch });
        if (baselineSamples.length >= 12) {
          baseline = {
            yaw: baselineSamples.reduce((sum, item) => sum + item.yaw, 0) / baselineSamples.length,
            pitch: baselineSamples.reduce((sum, item) => sum + item.pitch, 0) / baselineSamples.length,
          };
        }
      }
      latestAnalysis = baseline
        ? { ...nextAnalysis, deltaYaw: clamp(nextAnalysis.yaw - baseline.yaw, -0.8, 0.8), deltaPitch: clamp(nextAnalysis.pitch - baseline.pitch, -0.8, 0.8), calibrated: true }
        : nextAnalysis;
    });

    const stop = () => {
      stopped = true;
      cancelAnimationFrame(animationFrame);
      stream.getTracks().forEach((track) => track.stop());
      setLiveOpen(false);
    };
    stopLiveRef.current = stop;

    const tick = async (now: number) => {
      if (stopped) return;
      const vw = video.videoWidth || 1280;
      const vh = video.videoHeight || 720;
      const side = Math.min(vw, vh);
      const sx = (vw - side) / 2;
      const sy = (vh - side) / 2;

      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(video, sx, sy, side, side, -canvas.width, 0, canvas.width, canvas.height);
      ctx.restore();

      if (!processing && now - lastModelAt > 48 && video.readyState >= 2) {
        processing = true;
        lastModelAt = now;
        modelCtx.save();
        modelCtx.scale(-1, 1);
        modelCtx.drawImage(video, sx, sy, side, side, -modelCanvas.width, 0, modelCanvas.width, modelCanvas.height);
        modelCtx.restore();
        faceMesh.send({ image: modelCanvas }).catch(() => {
          latestAnalysis = { ...latestAnalysis, present: false };
        }).finally(() => {
          processing = false;
        });
      }

      const analysis = latestAnalysis;
      faceSignals.push(analysis.present ? 1 : 0);
      positions.push({ x: analysis.yaw, y: analysis.pitch });
      frameMeans.push(analysis.mean);
      if (faceSignals.length > 160) faceSignals.shift();
      if (positions.length > 160) positions.shift();
      if (frameMeans.length > 160) frameMeans.shift();

      if (analysis.present && baseline && currentStep < stepTargets.length) {
        const target = stepTargets[currentStep];
        const matched = poseMatchesStep(analysis, target, currentStep);
        if (matched) {
          if (!holdStart) holdStart = now;
          if (now - holdStart > 250) {
            currentStep += 1;
            holdStart = 0;
            captureSelfie(video, captured);
          }
        } else {
          holdStart = 0;
        }
      }

      const faceCoverage = faceSignals.reduce((sum, value) => sum + value, 0) / Math.max(faceSignals.length, 1);
      const xs = positions.map((item) => item.x);
      const ys = positions.map((item) => item.y);
      const xRange = xs.length ? Math.max(...xs) - Math.min(...xs) : 0;
      const yRange = ys.length ? Math.max(...ys) - Math.min(...ys) : 0;
      const motionCoverage = clamp((xRange + yRange) / 1.1, 0, 1);
      const mean = frameMeans.reduce((sum, value) => sum + value, 0) / Math.max(frameMeans.length, 1);
      const frameVariance = clamp(frameMeans.reduce((sum, value) => sum + Math.abs(value - mean), 0) / Math.max(frameMeans.length, 1) * 9, 0, 1);
      const durationMs = performance.now() - startTime;
      const nextLive = { expectedSteps: stepTargets.length, completedSteps: currentStep, faceCoverage, motionCoverage, frameVariance, durationMs };
      setLiveness(nextLive);
      setLiveProgress((currentStep / stepTargets.length) * 100);
      setLivePrompt(baseline ? stepTargets[currentStep]?.label || "Hoàn tất" : "Nhìn thẳng vào camera để hiệu chỉnh");

      if (currentStep >= stepTargets.length) {
        stop();
        const geometryDescriptor = descriptorFromPose(latestAnalysis);
        const nextSelfieDescriptor = geometryDescriptor || makeDescriptor(captured);
        const nextSelfieType = geometryDescriptor ? "geometry" : "pixel";
        setSelfieDescriptor(nextSelfieDescriptor);
        setSelfieDescriptorType(nextSelfieType);
        await verifyFace(nextSelfieDescriptor, nextSelfieType, nextLive);
        return;
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
  }

  async function verifyFace(nextSelfieDescriptor = selfieDescriptor, nextSelfieType = selfieDescriptorType, nextLive = liveness) {
    if (!token || !documentResult || !portraitDescriptor || !nextSelfieDescriptor) return;
    setBusy(true);
    try {
      const res = await fetch(apiUrl("/api/ekyc/face/verify"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          documentConfidence: documentResult.confidence || 0,
          portraitDescriptor,
          selfieDescriptor: nextSelfieDescriptor,
          portraitDescriptorType,
          selfieDescriptorType: nextSelfieType,
          liveness: nextLive,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Không xác minh được khuôn mặt.");
      setVerifyResult(json);
      setStatusText(json.status === "approved" ? `Auto accept ${json.scores.overall}%` : `Duyệt tay ${json.scores.overall}%`);
      showKntechAlert(json.status === "approved" ? "success" : "warning", "eKYC hoàn tất", json.message);
    } catch (error: any) {
      showKntechAlert("error", "eKYC lỗi", error.message || "Không thể xác minh khuôn mặt.");
    } finally {
      setBusy(false);
    }
  }

  const canRunOcr = Boolean(front && back && token);
  const canRunLive = Boolean(documentResult && portraitDescriptor && token);
  const overall = verifyResult?.scores?.overall ?? 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">eKYC tự động</h4>
          <p className="text-[10px] text-slate-500">Từ 85% tự duyệt, dưới 85% chuyển admin duyệt tay.</p>
        </div>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${verifyResult?.status === "approved" ? "bg-emerald-100 text-emerald-700" : verifyResult ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600"}`}>
          {verifyResult?.status === "approved" ? "Auto accept" : verifyResult ? "Duyệt tay" : "Chưa chạy"}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
        <div className="rounded-lg bg-white p-2 dark:bg-slate-950">
          <span className="text-slate-400">Document</span>
          <strong className="block text-xs">{documentResult?.confidence ?? 0}%</strong>
        </div>
        <div className="rounded-lg bg-white p-2 dark:bg-slate-950">
          <span className="text-slate-400">Liveness</span>
          <strong className="block text-xs">{verifyResult?.scores?.liveness ?? Math.round(liveProgress)}%</strong>
        </div>
        <div className="rounded-lg bg-white p-2 dark:bg-slate-950">
          <span className="text-slate-400">Overall</span>
          <strong className="block text-xs">{overall}%</strong>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!canRunOcr || busy}
          onClick={() => runOcr()}
          className="rounded-lg bg-[#13519c] px-3 py-2 text-[10px] font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {busy ? "Đang xử lý..." : "1. Chạy OCR CCCD"}
        </button>
        <button
          type="button"
          disabled={!canRunLive || busy}
          onClick={() => startLiveness().catch((error) => showKntechAlert("error", "Không mở được camera", error.message))}
          className="rounded-lg bg-emerald-600 px-3 py-2 text-[10px] font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          2. Liveness 360
        </button>
      </div>

      <p className="mt-2 text-[10px] font-semibold text-slate-500">{statusText}</p>
      {documentResult?.warnings?.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-4 text-[10px] text-amber-700">
          {documentResult.warnings.slice(0, 3).map((warning: string) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      )}

      {liveOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl">
            <video ref={videoRef} playsInline muted className="hidden" />
            <canvas ref={canvasRef} width={720} height={720} className="aspect-square w-full bg-black" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-black/40 p-3">
              <span className="text-xs font-bold">{livePrompt}</span>
              <button type="button" onClick={() => stopLiveRef.current?.()} className="rounded-lg bg-white/15 px-3 py-1 text-xs font-bold">
                Dừng
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-black/50 p-3">
              <div className="h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full bg-emerald-400 transition-all" style={{ width: `${liveProgress}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
