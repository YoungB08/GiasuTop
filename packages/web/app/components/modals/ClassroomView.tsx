import React from "react";

type ClassroomViewProps = {
  activeClassroom: any;
  setActiveClassroom: (classroom: any) => void;
  drawingColorRef: React.MutableRefObject<string>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  startDrawing: (e: any) => void;
  draw: (e: any) => void;
  stopDrawing: () => void;
  clearCanvas: () => void;
  isMicOn: boolean;
  setIsMicOn: (on: boolean) => void;
  isCamOn: boolean;
  setIsCamOn: (on: boolean) => void;
  chatMessages: any[];
  chatInput: string;
  setChatInput: (val: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
};

export default function ClassroomView({
  activeClassroom,
  setActiveClassroom,
  drawingColorRef,
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
  clearCanvas,
  isMicOn,
  setIsMicOn,
  isCamOn,
  setIsCamOn,
  chatMessages,
  chatInput,
  setChatInput,
  handleSendMessage,
}: ClassroomViewProps) {
  if (!activeClassroom) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a] text-white flex flex-col font-sans">
      <header className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-slate-800 h-14 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">💻</span>
          <div className="text-left">
            <h4 className="text-sm font-semibold">PHÒNG HỌC TRỰC TUYẾN GiasuTop</h4>
            <p className="text-[10px] text-slate-400">
              Gia sư trực tiếp: <span className="text-blue-400 font-semibold">{activeClassroom.tutor_name}</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveClassroom(null)}
          className="bg-rose-600 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer hover:bg-rose-700"
        >
          Rời Phòng Học
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Whiteboard and Video Streams */}
        <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto">
          {/* Videos */}
          <div className="grid grid-cols-2 gap-4 h-32 md:h-44 shrink-0">
            <div className="relative rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-2xl animate-bounce">👨‍🏫</span>
              <span className="text-xs font-semibold text-slate-300 mt-2">{activeClassroom.tutor_name} (Gia sư)</span>
            </div>
            <div className="relative rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-2xl animate-pulse">👶</span>
              <span className="text-xs font-semibold text-slate-300 mt-2">Học sinh</span>
            </div>
          </div>

          {/* Board */}
          <div className="flex-1 min-h-[300px] bg-white rounded-xl border flex flex-col text-slate-800 overflow-hidden shadow-md">
            <div className="bg-slate-50 px-4 py-2.5 border-b flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-660">🎨 Bảng vẽ:</span>
                <button
                  type="button"
                  onClick={() => {
                    drawingColorRef.current = "#dc2626";
                  }}
                  className="h-6 w-6 bg-red-600 rounded-full border cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => {
                    drawingColorRef.current = "#2563eb";
                  }}
                  className="h-6 w-6 bg-blue-600 rounded-full border cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => {
                    drawingColorRef.current = "#000000";
                  }}
                  className="h-6 w-6 bg-black rounded-full border cursor-pointer"
                />
              </div>
              <button
                type="button"
                onClick={clearCanvas}
                className="bg-slate-200 hover:bg-slate-350 px-3 py-1.5 rounded-lg font-semibold text-slate-700 transition cursor-pointer"
              >
                Xóa bảng
              </button>
            </div>
            <div className="flex-1 bg-white relative">
              <canvas
                ref={canvasRef}
                width={700}
                height={350}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-full block cursor-crosshair bg-white touch-none"
              />
            </div>
          </div>
        </div>

        {/* Chatbox column */}
        <div className="w-full lg:w-72 bg-[#1e293b] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col">
          <div className="p-3 border-b border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`py-2 rounded-lg text-center font-semibold cursor-pointer ${
                isMicOn
                  ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/20"
                  : "bg-rose-600 text-white"
              }`}
            >
              {isMicOn ? "🎤 Mic: Bật" : "🔇 Mic: Tắt"}
            </button>
            <button
              onClick={() => setIsCamOn(!isCamOn)}
              className={`py-2 rounded-lg text-center font-semibold cursor-pointer ${
                isCamOn
                  ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/20"
                  : "bg-rose-600 text-white"
              }`}
            >
              {isCamOn ? "🎥 Cam: Bật" : "🔇 Cam: Tắt"}
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs flex flex-col text-left">
            <div className="text-center font-semibold text-[10px] text-slate-400 bg-slate-900/50 py-1.5 rounded-lg">
              TRÒ CHUYỆN LỚP HỌC
            </div>
            {chatMessages.map((msg, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-semibold text-blue-400 text-[10px]">
                  {msg.sender} <span className="text-slate-500">{msg.time}</span>
                </span>
                <span className="mt-1 bg-slate-850/80 px-3 py-2 rounded-xl text-slate-200 max-w-[90%] leading-relaxed">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="Gõ tin nhắn..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 h-9 bg-slate-950 border border-slate-800 rounded-lg px-3 text-xs focus:outline-none focus:border-[#13519c] text-white"
            />
            <button type="submit" className="h-9 px-4 bg-blue-600 rounded-lg text-xs font-semibold cursor-pointer">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
