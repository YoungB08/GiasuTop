import React, { useEffect, useMemo, useState } from "react";

type DocumentPreviewModalProps = {
  previewDoc: { title: string; file_url: string; mime_type?: string } | null;
  onClose: () => void;
};

function isOfficeFile(url: string, title: string, mimeType: string) {
  return (
    mimeType.includes("word") ||
    mimeType.includes("excel") ||
    mimeType.includes("presentation") ||
    mimeType.includes("officedocument") ||
    /\.(docx?|xlsx?|pptx?)($|\?)/i.test(url) ||
    /\.(docx?|xlsx?|pptx?)$/i.test(title)
  );
}

function isImageFile(url: string, title: string, mimeType: string) {
  return mimeType.startsWith("image/") || /\.(png|jpe?g|webp|gif|bmp)($|\?)/i.test(url) || /\.(png|jpe?g|webp|gif|bmp)$/i.test(title);
}

function isPdfFile(url: string, title: string, mimeType: string) {
  return mimeType === "application/pdf" || /\.pdf($|\?)/i.test(url) || /\.pdf$/i.test(title);
}

function getGoogleDriveEmbedUrl(url: string): { embedUrl: string; isDrive: boolean } {
  const fileDMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) {
    return { embedUrl: `https://drive.google.com/file/d/${fileDMatch[1]}/preview`, isDrive: true };
  }
  const openIdMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (openIdMatch) {
    return { embedUrl: `https://drive.google.com/file/d/${openIdMatch[1]}/preview`, isDrive: true };
  }
  return { embedUrl: url, isDrive: false };
}

export default function DocumentPreviewModal({ previewDoc, onClose }: DocumentPreviewModalProps) {
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    setIframeFailed(false);
  }, [previewDoc?.file_url]);

  const data = useMemo(() => {
    if (!previewDoc) return null;
    const fileUrl = previewDoc.file_url;
    const title = previewDoc.title || "Xem tài liệu";
    const mimeType = previewDoc.mime_type || "";
    const cleanUrl = fileUrl.split("#")[0];
    const image = isImageFile(cleanUrl, title, mimeType);
    const pdf = isPdfFile(cleanUrl, title, mimeType);
    const office = isOfficeFile(cleanUrl, title, mimeType);
    const canUseOfficeViewer = office && /^https?:\/\//i.test(fileUrl);
    
    const { embedUrl, isDrive } = getGoogleDriveEmbedUrl(fileUrl);
    const iframeUrl = canUseOfficeViewer
      ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`
      : embedUrl;

    return {
      fileUrl,
      title,
      label: image ? "Ảnh" : pdf ? "PDF" : office ? "Office" : isDrive ? "Google Drive" : "Tài liệu",
      image,
      iframeUrl,
      isDrive,
      canFrame: !image,
    };
  }, [previewDoc]);

  if (!previewDoc || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#111827]">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="min-w-0">
            <span className="mr-2 rounded bg-[#13519c] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
              {data.label}
            </span>
            <span className="inline-block max-w-[60vw] truncate align-middle text-xs font-bold text-slate-800 dark:text-white">
              {data.title}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={data.fileUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300"
            >
              Tải xuống
            </a>
            <a
              href={data.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              Mở tab
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              title="Đóng"
            >
              ×
            </button>
          </div>
        </div>

        {data.isDrive && (
          <div className="bg-amber-50 px-4 py-2.5 border-b border-amber-100 dark:bg-amber-950/30 dark:border-amber-900/30 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300">
            <span className="text-sm shrink-0 leading-none">💡</span>
            <div>
              <strong>Lưu ý về Google Drive:</strong> Nếu tài liệu hiển thị thông báo yêu cầu quyền truy cập, vui lòng kiểm tra và thiết lập quyền chia sẻ của file trên Drive thành <strong>"Bất kỳ ai có đường liên kết đều có thể xem"</strong> (Anyone with the link can view) để mọi người có thể xem trực tiếp.
            </div>
          </div>
        )}

        <div className="min-h-[60vh] flex-1 bg-slate-100 p-3 dark:bg-slate-950">
          {data.image ? (
            <div className="flex h-[74vh] items-center justify-center">
              <img
                src={data.fileUrl}
                alt={data.title}
                className="max-h-full max-w-full rounded-lg border border-slate-200 bg-white object-contain shadow dark:border-slate-800"
              />
            </div>
          ) : iframeFailed ? (
            <div className="flex h-[74vh] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-slate-800 dark:text-white">Không thể hiển thị tài liệu trong iframe.</div>
              <p className="max-w-md text-xs text-slate-500">Trình duyệt hoặc máy chủ tài liệu có thể chặn nhúng. Bác vẫn có thể tải xuống hoặc mở tài liệu ở tab mới.</p>
              <div className="flex gap-2">
                <a href={data.fileUrl} download className="rounded-lg bg-[#13519c] px-4 py-2 text-xs font-bold text-white">
                  Tải xuống
                </a>
                <a href={data.fileUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Mở tab
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={data.iframeUrl}
              title={data.title}
              className="h-[74vh] w-full rounded-xl border border-slate-200 bg-white shadow dark:border-slate-800"
              onError={() => setIframeFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
