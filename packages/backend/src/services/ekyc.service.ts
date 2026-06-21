export const EKYC_AUTO_ACCEPT_THRESHOLD = 85;

export type EkycFields = Record<string, string>;

export type EkycQuality = {
  sharpness?: number;
  brightness?: number;
  contrast?: number;
  glare?: number;
};

export type EkycLiveness = {
  expectedSteps?: number;
  completedSteps?: number;
  faceCoverage?: number;
  motionCoverage?: number;
  frameVariance?: number;
  durationMs?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizeDate(raw: unknown) {
  if (!raw) return "";
  const value = String(raw).trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  const isoMatch = value.match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const digits = value.replace(/\D/g, "");
  if (digits.length === 8) {
    const firstFour = Number(digits.slice(0, 4));
    const isYearFirst = firstFour >= 1900 && firstFour <= 2199;
    const year = isYearFirst ? digits.slice(0, 4) : digits.slice(4, 8);
    const month = isYearFirst ? digits.slice(4, 6) : digits.slice(2, 4);
    const day = isYearFirst ? digits.slice(6, 8) : digits.slice(0, 2);
    return `${year}-${month}-${day}`;
  }

  const match = value.match(/(\d{1,2})[/-](\d{1,2})[/-](\d{4})/);
  if (match) {
    const [, day, month, year] = match;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return value;
}

function normalizeGender(raw: unknown) {
  const value = String(raw || "").trim().toLowerCase();
  if (["nam", "male", "m"].includes(value)) return "Nam";
  if (["nu", "nữ", "female", "f"].includes(value)) return "Nữ";
  return raw ? String(raw).trim() : "";
}

function maybeIdNumber(raw: unknown) {
  const digits = String(raw || "").replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 12 ? digits : "";
}

function looksLikeHumanName(raw: unknown) {
  const value = String(raw || "").trim();
  const letters = value.replace(/[^A-Za-zÀ-ỹ]/g, "");
  return letters.length >= 5 && !/\d/.test(value);
}

function stripVietnamese(value: unknown) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function normalizeOcrLine(value: unknown) {
  return stripVietnamese(value)
    .replace(/[|_~`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleCaseName(raw: unknown) {
  return String(raw || "")
    .replace(/<+/g, " ")
    .replace(/[^A-Za-zÀ-ỹ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function normalizeNameForConfidence(raw: unknown) {
  return stripVietnamese(raw)
    .replace(/[^A-Za-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function dateFromYYMMDD(value: unknown, purpose: "birth" | "expiry" = "birth") {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length !== 6) return "";

  const yy = Number(digits.slice(0, 2));
  const month = digits.slice(2, 4);
  const day = digits.slice(4, 6);
  const currentTwoDigitYear = new Date().getFullYear() % 100;
  const year = purpose === "expiry" ? 2000 + yy : yy > currentTwoDigitYear ? 1900 + yy : 2000 + yy;
  return `${year}-${month}-${day}`;
}

function cleanDigitLike(value: unknown) {
  return String(value || "")
    .replace(/[OoQ]/g, "0")
    .replace(/[Il]/g, "1")
    .replace(/[Ss]/g, "5")
    .replace(/[Bb]/g, "8");
}

function findDateNearLabel(lines: string[], labels: string[]) {
  const datePattern = /(\d{1,2}[/-]\d{1,2}[/-]\d{4}|\d{8})/;
  for (let index = 0; index < lines.length; index += 1) {
    const ascii = normalizeOcrLine(lines[index]).toLowerCase();
    if (!labels.some((label) => ascii.includes(label))) continue;

    const windowText = lines.slice(index, index + 4).join(" ");
    const match = windowText.match(datePattern);
    if (match) return normalizeDate(match[1]);
  }
  return "";
}

function pickVietnamNameLine(lines: string[]) {
  for (let index = 0; index < lines.length; index += 1) {
    const ascii = normalizeOcrLine(lines[index]).toLowerCase();
    if (!ascii.includes("full name") && !ascii.includes("ten khai sinh") && !ascii.includes("ho chu dem")) continue;

    const directMatch = lines[index].match(/(?:Full name|ten khai sinh|ho.*ten)\s*[:/-]?\s*(.+)$/i);
    const candidates = [directMatch?.[1], ...lines.slice(index + 1, index + 4)]
      .filter(Boolean)
      .map((line) => String(line).trim())
      .filter((line) => {
        const normalized = normalizeNameForConfidence(line);
        return normalized.length >= 7 && !/\d/.test(line) && !normalizeOcrLine(line).toLowerCase().includes("date");
      });

    if (candidates[0]) return titleCaseName(candidates[0]);
  }

  const ignored = [
    "cong hoa",
    "doc lap",
    "can cuoc",
    "identity",
    "socialist",
    "full name",
    "personal",
    "nationality",
    "date of birth",
    "sex",
    "gioi tinh",
    "quoc tich",
    "que quan",
    "noi cu tru",
    "place of residence",
    "ngay",
    "date",
    "vietnam",
  ];

  const candidates = lines
    .map((line) => line.trim())
    .filter((line) => {
      const ascii = normalizeOcrLine(line).toLowerCase();
      const letters = line.replace(/[^A-Za-zÀ-ỹ]/g, "");
      return letters.length >= 8 && !/\d/.test(line) && !line.includes("<<") && !ignored.some((item) => ascii.includes(item));
    })
    .sort((a, b) => b.replace(/[^A-Za-zÀ-ỹ]/g, "").length - a.replace(/[^A-Za-zÀ-ỹ]/g, "").length);

  return titleCaseName(candidates[0] || "");
}

function parseMrzText(rawText: unknown) {
  const raw = String(rawText || "");
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const upperLines = lines.map((line) => stripVietnamese(line).toUpperCase().replace(/\s+/g, ""));
  const fields: EkycFields = {};
  const warnings: string[] = [];

  const mrzNameLine = upperLines.find((line) => line.includes("<<") && !/\d/.test(line) && /[A-Z]{2}/.test(line));
  if (mrzNameLine) fields.fullName = titleCaseName(mrzNameLine);

  const mrzDataLine = upperLines.find((line) => /[0-9OQILSB]{6}[0-9OQILSB]?[MF][0-9OQILSB]{6}/.test(line));
  if (mrzDataLine) {
    const digitLine = cleanDigitLike(mrzDataLine);
    const match = digitLine.match(/([0-9]{6})[0-9]?([MF])([0-9]{6})/);
    if (match) {
      fields.dateOfBirth = dateFromYYMMDD(match[1], "birth");
      fields.gender = normalizeGender(match[2]);
      fields.expiryDate = dateFromYYMMDD(match[3], "expiry");
      if (mrzDataLine.includes("VNM")) fields.nationality = "Việt Nam";
    }
  }

  const mrzIdLine = upperLines.find((line) => line.includes("VNM") && /\d|[OQILSB]/.test(line));
  if (mrzIdLine) {
    const digitLike = cleanDigitLike(mrzIdLine);
    const beforeFillers = digitLike.match(/([0-9]{12})<+/);
    const allDigits = digitLike.replace(/\D/g, "");
    fields.idNumber = beforeFillers?.[1] || (allDigits.length >= 12 ? allDigits.slice(-13, -1) || allDigits.slice(-12) : "");
  }

  if (Object.keys(fields).length && !fields.idNumber) warnings.push("Đọc được MRZ nhưng chưa tách chắc chắn số CCCD.");
  return { fields, warnings };
}

function parseVisibleCitizenIdText(rawText: unknown) {
  const raw = String(rawText || "");
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const flat = lines.join("\n");
  const asciiFlat = normalizeOcrLine(flat).toLowerCase();
  const fields: EkycFields = {};
  const warnings: string[] = [];

  const digitMatches = [...flat.matchAll(/[0-9OQIlSsBb][0-9OQIlSsBb\s.-]{10,}[0-9OQIlSsBb]/g)]
    .map((match) => cleanDigitLike(match[0]).replace(/\D/g, ""))
    .filter((digits) => digits.length >= 12)
    .map((digits) => digits.slice(0, 12));
  const plausibleId = digitMatches.find((digits) => digits.length === 12);
  if (plausibleId) fields.idNumber = plausibleId;

  fields.dateOfBirth = findDateNearLabel(lines, ["ngay sinh", "date of birth", "birth"]) || "";
  fields.issueDate = findDateNearLabel(lines, ["ngay cap", "date of issue", "issue"]) || "";
  fields.expiryDate = findDateNearLabel(lines, ["co gia tri", "date of expiry", "expiry", "valid until"]) || "";

  if (!fields.dateOfBirth) {
    const firstDate = flat.match(/\b\d{1,2}[/-]\d{1,2}[/-]\d{4}\b/);
    if (firstDate) fields.dateOfBirth = normalizeDate(firstDate[0]);
  }

  const genderMatch = asciiFlat.match(/\b(nam|nu|male|female)\b/);
  if (genderMatch) fields.gender = normalizeGender(genderMatch[1]);
  if (asciiFlat.includes("viet nam") || asciiFlat.includes("vietnam") || asciiFlat.includes("vnm")) fields.nationality = "Việt Nam";

  const nameLine = pickVietnamNameLine(lines);
  if (nameLine) fields.fullName = nameLine;

  const addressStart = lines.findIndex((line) => {
    const ascii = normalizeOcrLine(line).toLowerCase();
    return ascii.includes("noi cu tru") || ascii.includes("place of residence") || ascii.includes("thuong tru");
  });
  if (addressStart >= 0) {
    const addressLines: string[] = [];
    for (let index = addressStart + 1; index < Math.min(lines.length, addressStart + 5); index += 1) {
      const ascii = normalizeOcrLine(lines[index]).toLowerCase();
      if (
        ascii.includes("dac diem") ||
        ascii.includes("personal identification") ||
        ascii.includes("date of issue") ||
        ascii.includes("ngay cap") ||
        lines[index].includes("<<")
      ) {
        break;
      }
      if (lines[index].replace(/[^\p{L}\d]/gu, "").length > 3) addressLines.push(lines[index]);
    }
    fields.address = addressLines.join(", ").replace(/\s+/g, " ").trim();
  }

  if (!Object.values(fields).some(Boolean) && raw.trim()) warnings.push("OCR có text nhưng chưa khớp mẫu CCCD Việt Nam.");
  return { fields, warnings };
}

function mergeDetectedFields(...sources: EkycFields[]) {
  const result: EkycFields = {};
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      const nextValue = String(value || "").trim();
      if (!nextValue) continue;

      if (!result[key]) {
        result[key] = nextValue;
        continue;
      }

      if (key === "fullName") {
        const currentHasAccents = /[À-ỹ]/.test(result[key]);
        const nextHasAccents = /[À-ỹ]/.test(nextValue);
        if (nextHasAccents && !currentHasAccents) result[key] = nextValue;
      }
    }
  }
  return result;
}

function parseVietnamCitizenIdQr(rawText: unknown) {
  const raw = String(rawText || "").trim();
  if (!raw) {
    return {
      source: "none",
      raw: "",
      fields: {} as EkycFields,
      confidence: 0,
      warnings: ["Không có QR/text để phân tích."],
    };
  }

  const cleaned = raw.replace(/\r?\n/g, "|").replace(/\s*\|\s*/g, "|");
  const parts = cleaned.split("|").map((item) => item.trim());
  const compactParts = parts.filter(Boolean);
  const warnings: string[] = [];
  const fields: EkycFields = {};

  const idIndex = parts.findIndex((part) => /^\d{9,12}$/.test(part.replace(/\D/g, "")));
  if (idIndex >= 0 && parts.length - idIndex >= 5) {
    fields.idNumber = maybeIdNumber(parts[idIndex]);

    const afterId = parts.slice(idIndex + 1);
    const first = afterId[0] || "";
    const hasEmptyOldIdSlot = first === "";
    const hasOldId = Boolean(maybeIdNumber(first)) && !looksLikeHumanName(first);
    const offset = hasEmptyOldIdSlot || hasOldId ? 1 : 0;

    if (hasOldId) fields.oldIdNumber = maybeIdNumber(first);
    fields.fullName = afterId[offset] || "";
    fields.dateOfBirth = normalizeDate(afterId[offset + 1]);
    fields.gender = normalizeGender(afterId[offset + 2]);
    fields.address = afterId[offset + 3] || "";
    fields.issueDate = normalizeDate(afterId[offset + 4]);
  } else {
    const idMatch = cleaned.match(/\b\d{12}\b/);
    const dobMatch = cleaned.match(/\b\d{2}[/-]?\d{2}[/-]?\d{4}\b/);
    const genderMatch = cleaned.match(/\b(Nam|Nữ|Nu|Male|Female)\b/i);

    fields.idNumber = idMatch ? idMatch[0] : "";
    fields.dateOfBirth = dobMatch ? normalizeDate(dobMatch[0]) : "";
    fields.gender = genderMatch ? normalizeGender(genderMatch[1]) : "";

    const nameIndex = compactParts.findIndex((part) => looksLikeHumanName(part));
    if (nameIndex >= 0) fields.fullName = compactParts[nameIndex];
    const issueDate = compactParts.find((part) => part !== dobMatch?.[0] && /^\d{8}$/.test(part.replace(/\D/g, "")));
    if (issueDate) fields.issueDate = normalizeDate(issueDate);
    warnings.push("QR/text không đúng cấu trúc CCCD chuẩn, đã trích xuất theo mẫu gần đúng.");
  }

  const recognized = Object.values(fields).filter(Boolean).length;
  const confidence = clamp(Math.round((recognized / 7) * 100), 15, 98);

  if (!fields.idNumber || fields.idNumber.length !== 12) warnings.push("Số CCCD chưa đủ 12 chữ số.");
  if (!fields.fullName) warnings.push("Chưa nhận được họ tên từ QR/OCR.");
  if (!fields.dateOfBirth) warnings.push("Chưa nhận được ngày sinh từ QR/OCR.");

  return { source: "qr-or-text", raw, fields, confidence, warnings };
}

function mergeFields(parsedFields: EkycFields, manualFields?: EkycFields) {
  const keys = ["idNumber", "oldIdNumber", "fullName", "dateOfBirth", "gender", "nationality", "address", "issueDate", "expiryDate"];
  const result: EkycFields = {};

  for (const key of keys) {
    const manualValue = String(manualFields?.[key] || "").trim();
    const parsedValue = String(parsedFields?.[key] || "").trim();
    result[key] = manualValue || parsedValue;
  }

  if (result.dateOfBirth) result.dateOfBirth = normalizeDate(result.dateOfBirth);
  if (result.issueDate) result.issueDate = normalizeDate(result.issueDate);
  if (result.expiryDate) result.expiryDate = normalizeDate(result.expiryDate);
  if (result.gender) result.gender = normalizeGender(result.gender);

  return result;
}

export function imageQualityScore(quality: EkycQuality = {}) {
  const blur = clamp(Number(quality.sharpness || 0), 0, 100);
  const brightness = Number(quality.brightness || 0);
  const contrast = clamp(Number(quality.contrast || 0), 0, 100);
  const glare = clamp(Number(quality.glare || 0), 0, 100);
  const brightnessScore = 100 - clamp(Math.abs(brightness - 55) * 2.6, 0, 100);

  return clamp(Math.round(blur * 0.36 + brightnessScore * 0.26 + contrast * 0.24 + (100 - glare) * 0.14), 0, 100);
}

function completenessScore(fields: EkycFields) {
  const required = ["idNumber", "fullName", "dateOfBirth", "gender", "address"];
  const present = required.filter((key) => String(fields[key] || "").trim()).length;
  return Math.round((present / required.length) * 100);
}

export function analyzeCitizenIdDocument(body: any) {
  const rawQrText = body.qrText || body.front?.qrText || body.back?.qrText;
  const frontText = body.front?.ocrText || "";
  const backText = body.back?.ocrText || "";
  const combinedText = [rawQrText, frontText, backText].filter(Boolean).join("\n");
  const qrResult = parseVietnamCitizenIdQr(rawQrText);
  const visibleResult = parseVisibleCitizenIdText(combinedText);
  const mrzResult = parseMrzText(backText || combinedText);
  const detectedFields = mergeDetectedFields(qrResult.fields, mrzResult.fields, visibleResult.fields);
  const fields = mergeFields(detectedFields, body.fields);
  const frontScore = imageQualityScore(body.front?.quality);
  const backScore = imageQualityScore(body.back?.quality);
  const imageScore = Math.round((frontScore + backScore) / 2);
  const completeScore = completenessScore(fields);
  const textSignal = clamp(
    Math.round(
      Math.max(
        qrResult.confidence,
        Object.values(mrzResult.fields).filter(Boolean).length * 15,
        Object.values(visibleResult.fields).filter(Boolean).length * 12
      )
    ),
    0,
    98
  );
  const documentConfidence = clamp(Math.round(imageScore * 0.28 + completeScore * 0.48 + textSignal * 0.24), 0, 100);
  const qrWarnings = textSignal > 0 ? qrResult.warnings.filter((warning) => !warning.includes("Không có QR")) : qrResult.warnings;
  const warnings = [...qrWarnings, ...visibleResult.warnings, ...mrzResult.warnings];

  if (frontScore < 58) warnings.push("Ảnh mặt trước CCCD nên rõ hơn hoặc ít lóa hơn.");
  if (backScore < 48) warnings.push("Ảnh mặt sau CCCD nên rõ hơn hoặc ít lóa hơn.");
  if (completeScore < 80) warnings.push("Thông tin OCR chưa đủ, cần kiểm tra thủ công.");

  return {
    status: documentConfidence >= 76 ? "passed" : documentConfidence >= 55 ? "review" : "failed",
    confidence: documentConfidence,
    fields,
    checks: {
      frontImageQuality: frontScore,
      backImageQuality: backScore,
      fieldCompleteness: completeScore,
      qrConfidence: qrResult.confidence,
      textSignal,
    },
    qr: {
      source: qrResult.source,
      raw: qrResult.raw,
    },
    ocrText: {
      front: frontText,
      back: backText,
    },
    warnings: [...new Set(warnings)],
  };
}

export function compareDescriptors(a: unknown, b: unknown, type = "pixel") {
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || a.length !== b.length) return null;

  let l1Distance = 0;
  let l2Distance = 0;
  for (let index = 0; index < a.length; index += 1) {
    const diff = Number(a[index] || 0) - Number(b[index] || 0);
    l1Distance += Math.abs(diff);
    l2Distance += diff * diff;
  }

  const meanL1 = l1Distance / a.length;
  const rms = Math.sqrt(l2Distance / a.length);

  if (type === "geometry") return clamp(Math.round(100 - rms * 185 - meanL1 * 55), 0, 100);
  return clamp(Math.round(82 - meanL1 * 160), 0, 82);
}

export function livenessScore(liveness: EkycLiveness = {}) {
  const expectedSteps = Math.max(Number(liveness.expectedSteps || 10), 1);
  const completedSteps = clamp(Number(liveness.completedSteps || 0), 0, expectedSteps);
  const faceCoverage = clamp(Number(liveness.faceCoverage || 0), 0, 1);
  const motionCoverage = clamp(Number(liveness.motionCoverage || 0), 0, 1);
  const frameVariance = clamp(Number(liveness.frameVariance || 0), 0, 1);
  const durationMs = Number(liveness.durationMs || 0);
  const durationScore = clamp(durationMs / 6500, 0, 1);

  return clamp(
    Math.round((completedSteps / expectedSteps) * 52 + faceCoverage * 18 + motionCoverage * 16 + frameVariance * 8 + durationScore * 6),
    0,
    100
  );
}

export function finalVerificationScore(documentConfidence: number, liveScore: number, faceScore: number | null) {
  return clamp(Math.round(Number(documentConfidence || 0) * 0.35 + Number(liveScore || 0) * 0.4 + Number(faceScore || 0) * 0.25), 0, 100);
}

export function verifyFaceMatch(body: any) {
  const liveScore = livenessScore(body.liveness);
  const descriptorType = body.portraitDescriptorType === "geometry" && body.selfieDescriptorType === "geometry" ? "geometry" : "pixel";
  const faceScore = compareDescriptors(body.portraitDescriptor, body.selfieDescriptor, descriptorType);
  const documentConfidence = clamp(Number(body.documentConfidence || 0), 0, 100);
  const overallScore = finalVerificationScore(documentConfidence, liveScore, faceScore);
  const decision = overallScore >= EKYC_AUTO_ACCEPT_THRESHOLD ? "approved" : "review";

  return {
    status: decision,
    descriptorType,
    threshold: {
      autoAccept: EKYC_AUTO_ACCEPT_THRESHOLD,
      manualReviewBelow: EKYC_AUTO_ACCEPT_THRESHOLD,
    },
    scores: {
      overall: overallScore,
      document: documentConfidence,
      liveness: liveScore,
      faceMatch: faceScore,
    },
    checks: {
      completedSteps: body.liveness?.completedSteps || 0,
      expectedSteps: body.liveness?.expectedSteps || 10,
      faceCoverage: body.liveness?.faceCoverage || 0,
      motionCoverage: body.liveness?.motionCoverage || 0,
      frameVariance: body.liveness?.frameVariance || 0,
    },
    message: decision === "approved" ? "Hồ sơ đạt từ 85%, tự động chấp nhận." : "Hồ sơ dưới 85%, chuyển sang duyệt tay.",
  };
}

export function parseEkycPayload(raw: unknown) {
  if (!raw) return null;
  if (typeof raw === "object") return raw;
  try {
    return JSON.parse(String(raw));
  } catch {
    return null;
  }
}
