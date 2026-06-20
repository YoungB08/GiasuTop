import React, { useEffect, useRef, useState } from "react";

// Helper function to dynamically load PDF.js from CDN to avoid SSR and configuration issues
const loadPdfJS = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("window is undefined"));
      return;
    }
    
    if ((window as any).pdfjsLib) {
      resolve((window as any).pdfjsLib);
      return;
    }

    // Check if script tag is already present in document
    let script = document.getElementById("pdfjs-script-cdn") as HTMLScriptElement;
    if (script) {
      const onScriptLoad = () => {
        const lib = (window as any).pdfjsLib;
        if (lib) {
          lib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          resolve(lib);
        } else {
          reject(new Error("pdfjsLib not found after script load"));
        }
      };
      script.addEventListener("load", onScriptLoad);
      script.addEventListener("error", () => reject(new Error("Lỗi tải PDF.js CDN")));
      return;
    }

    script = document.createElement("script");
    script.id = "pdfjs-script-cdn";
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib;
      if (pdfjsLib) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(pdfjsLib);
      } else {
        reject(new Error("pdfjsLib not found after script injection"));
      }
    };
    script.onerror = () => reject(new Error("Lỗi tải thư viện PDF.js từ CDN"));
    document.body.appendChild(script);
  });
};

type DocumentPreviewModalProps = {
  previewDoc: { title: string; file_url: string } | null;
  onClose: () => void;
};

export default function DocumentPreviewModal({
  previewDoc,
  onClose,
}: DocumentPreviewModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Eager pre-load the preview libraries (PDF.js and docx-preview) on initial mount
  // to make preview opens instant when clicked.
  useEffect(() => {
    if (typeof window !== "undefined") {
      loadPdfJS().catch((err) => console.warn("Lỗi tải trước PDF.js:", err));
      import("docx-preview").catch((err) => console.warn("Lỗi tải trước docx-preview:", err));
    }
  }, []);

  useEffect(() => {
    if (!previewDoc) return;

    const fileUrl = previewDoc.file_url;
    const title = previewDoc.title || "";
    const isWord = /\.(docx?)$/i.test(fileUrl) || /\.(docx?)$/i.test(title);

    if (!isWord) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    // Render word file using docx-preview client-side
    let active = true;
    
    // docx-preview and fetch resource load
    Promise.all([
      import("docx-preview"),
      fetch(fileUrl).then((res) => {
        if (!res.ok) throw new Error(`Lỗi tải file: ${res.statusText}`);
        return res.blob();
      }),
    ])
      .then(([docxModule, blob]) => {
        if (!active) return;
        
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          // Render docx into the container
          docxModule.renderAsync(blob, containerRef.current, undefined, {
            inWrapper: true,
            ignoreWidth: false,
            ignoreHeight: true,
            breakPages: true,
            experimental: true
          })
            .then(() => {
              if (active) setLoading(false);
            })
            .catch((err) => {
              console.error("Lỗi dựng tài liệu Word:", err);
              if (active) {
                setError("Không thể hiển thị xem trước tệp Word này. Bạn có thể tải tệp tin về để mở.");
                setLoading(false);
              }
            });
        }
      })
      .catch((err) => {
        console.error("Lỗi tải tệp tin Word:", err);
        if (active) {
          setError("Không thể kết nối tải tệp tin Word. Vui lòng kiểm tra lại kết nối mạng.");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [previewDoc]);

  if (!previewDoc) return null;

  const fileUrl = previewDoc.file_url;
  const title = previewDoc.title || "";
  const isImage = /\.(png|jpe?g|webp|gif)$/i.test(fileUrl) || /\.(png|jpe?g|webp|gif)$/i.test(title);
  const isPdf = /\.pdf$/i.test(fileUrl) || /\.pdf$/i.test(title);
  const isWord = /\.(docx?)$/i.test(fileUrl) || /\.(docx?)$/i.test(title);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-in">
      {/* Dynamic Style Injection for Responsive DOCX and PDF layouts */}
      <style>{`
        .docx-container-wrapper .docx-wrapper {
          background: transparent !important;
          padding: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 1.5rem !important;
        }
        .docx-container-wrapper section.docx {
          width: 100% !important;
          max-width: 800px !important;
          height: auto !important;
          min-height: unset !important;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05) !important;
          margin-bottom: 0 !important;
          padding: 2.5rem 2rem !important;
          box-sizing: border-box !important;
          background: white !important;
          color: #1f2937 !important;
          border-radius: 0.75rem !important;
          border: 1px solid #e5e7eb !important;
        }
        /* Make sure all font styling fits standard viewport */
        .docx-container-wrapper section.docx p, 
        .docx-container-wrapper section.docx span, 
        .docx-container-wrapper section.docx td {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        /* Ensure tables in Word document resize responsively */
        .docx-container-wrapper section.docx table {
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: auto !important;
          display: block !important;
        }
      `}</style>

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border dark:border-slate-800 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
          <div className="min-w-0">
            <span className="text-[9px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded mr-2 uppercase tracking-wide">
              {isImage ? "Ảnh" : isPdf ? "PDF" : isWord ? "Word Doc" : "Tài liệu"}
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-white truncate inline-block max-w-[280px] sm:max-w-[450px]">
              {previewDoc.title || "Xem trước tài liệu"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={fileUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 bg-blue-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-slate-700 transition"
              title="Tải tệp tin về máy"
            >
              📥 Tải xuống tệp
            </a>
            <button
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 flex items-center justify-center text-sm cursor-pointer transition font-bold"
              title="Đóng"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950 p-4 flex items-center justify-center min-h-[50vh]">
          
          {loading && (
            <div className="flex flex-col items-center justify-center gap-3 text-slate-500 py-12">
              <div className="h-9 w-9 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-semibold">Đang chuẩn bị bản xem trước tài liệu...</span>
            </div>
          )}

          {error && !loading && (
            <div className="flex flex-col items-center justify-center text-center gap-3 max-w-md p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <span className="text-3xl">⚠️</span>
              <p className="text-xs text-rose-500 font-bold leading-relaxed">{error}</p>
              <a
                href={fileUrl}
                download
                className="mt-2 bg-[#13519c] hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition"
              >
                Tải xuống tệp tin ngay
              </a>
            </div>
          )}

          {!loading && !error && (
            <div className="w-full h-full flex items-center justify-center">
              {isImage ? (
                <img
                  src={fileUrl}
                  alt={previewDoc.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md border dark:border-slate-800 bg-white"
                />
              ) : isPdf ? (
                <div className="w-full max-h-[75vh] overflow-y-auto">
                  <PDFViewer fileUrl={fileUrl} />
                </div>
              ) : isWord ? (
                <div 
                  ref={containerRef} 
                  className="w-full max-h-[75vh] overflow-y-auto bg-white p-4 sm:p-6 rounded-lg shadow border border-slate-200 text-left docx-container-wrapper"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center gap-3 p-6 bg-white dark:bg-slate-900 rounded-xl border max-w-sm">
                  <span className="text-3xl">📁</span>
                  <p className="text-xs text-slate-500 font-medium">Tệp tin này không hỗ trợ hiển thị xem trước trực tuyến.</p>
                  <a
                    href={fileUrl}
                    download
                    className="bg-[#13519c] hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition"
                  >
                    Tải tệp tin về
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// React component to render all PDF pages using PDF.js
type PDFViewerProps = {
  fileUrl: string;
};

function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [pages, setPages] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pdfRef = useRef<any>(null);

  useEffect(() => {
    let active = true;

    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const pdfjsLib = await loadPdfJS();
        if (!active) return;

        const loadingTask = pdfjsLib.getDocument(fileUrl);
        const pdf = await loadingTask.promise;
        
        if (!active) return;
        
        pdfRef.current = pdf;
        const pageNumbers = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
        setPages(pageNumbers);
        setLoading(false);
      } catch (err: any) {
        console.error("Lỗi tải PDF:", err);
        if (active) {
          setError("Không thể tải tài liệu PDF. Vui lòng thử lại sau hoặc tải trực tiếp.");
          setLoading(false);
        }
      }
    };

    loadPDF();

    return () => {
      active = false;
    };
  }, [fileUrl]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-12 text-slate-500">
        <div className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs font-semibold">Đang chuẩn bị các trang tài liệu PDF...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-rose-500 font-bold text-xs max-w-md mx-auto">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-4 bg-slate-100 dark:bg-slate-950 py-2 px-1">
      {pages.map((pageNum) => (
        <PDFPage key={pageNum} pdf={pdfRef.current} pageNum={pageNum} />
      ))}
    </div>
  );
}

type PDFPageProps = {
  pdf: any;
  pageNum: number;
};

function PDFPage({ pdf, pageNum }: PDFPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver detects when the page container scrolls close to viewport.
  // We only compile and draw the canvas when it is close, speeding up rendering drastically.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Render once, no need to monitor visibility anymore
        }
      },
      { rootMargin: "300px" } // Pre-load 300px before scrolling into viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let active = true;
    let currentRenderTask: any = null;

    const renderPage = async () => {
      try {
        setLoading(true);
        const page = await pdf.getPage(pageNum);
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // scale: 1.5 ensures clear text rendering on high-DPI displays.
        const viewport = page.getViewport({ scale: 1.5 });
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        currentRenderTask = page.render(renderContext);
        await currentRenderTask.promise;
        
        if (active) {
          setLoading(false);
        }
      } catch (err) {
        // Suppress errors from cancelled rendering tasks on component unmount
        console.warn(`Render page ${pageNum} cancelled/failed:`, err);
      }
    };

    renderPage();

    return () => {
      active = false;
      if (currentRenderTask) {
        currentRenderTask.cancel();
      }
    };
  }, [pdf, pageNum, isVisible]);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[800px] bg-white dark:bg-[#1f2937] rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden relative min-h-[300px] flex items-center justify-center"
    >
      {(loading || !isVisible) && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50">
          <div className="h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {isVisible && (
        <canvas
          ref={canvasRef}
          className="w-full h-auto block bg-white"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
}
