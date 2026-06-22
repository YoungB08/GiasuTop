(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/web/app/components/modals/BookingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BookingModal({ selectedTutor, setSelectedTutor, bookingError, setBookingError, bookingSuccess, tutorBookingType, setTutorBookingType, bookingDate, setBookingDate, bookingStartHour, setBookingStartHour, longTermSchedule, setLongTermSchedule, longTermWeeks, setLongTermWeeks, bookingDuration, setBookingDuration, formatVND, handleBookTutor }) {
    if (!selectedTutor) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-3 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-slate-900 dark:text-white",
                            children: "📅 Đặt lịch học cùng gia sư"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setSelectedTutor(null);
                                setBookingError("");
                            },
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-10 rounded-full bg-[#13519c] text-white font-semibold flex items-center justify-center text-sm",
                                    children: selectedTutor.full_name.charAt(0)
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-semibold text-slate-900 dark:text-white",
                                            children: selectedTutor.full_name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400",
                                            children: [
                                                selectedTutor.school,
                                                " • ",
                                                selectedTutor.major
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleBookTutor,
                            className: "space-y-4 border-t pt-4",
                            children: [
                                bookingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-rose-50 text-rose-600 rounded-lg text-xs font-semibold text-left",
                                    children: [
                                        "⚠️ ",
                                        bookingError
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                bookingSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold text-left",
                                    children: "🎉 Đã đặt lịch! Đang tạo hóa đơn học phí..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border space-y-2 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold text-slate-500 uppercase",
                                            children: "Loại hình đăng ký"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setTutorBookingType("SINGLE"),
                                                    className: `flex-1 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${tutorBookingType === "SINGLE" ? "bg-[#13519c] text-white border-[#13519c]" : "bg-white text-slate-700"}`,
                                                    children: "Học buổi lẻ"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setTutorBookingType("LONG_TERM"),
                                                    className: `flex-1 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${tutorBookingType === "LONG_TERM" ? "bg-[#13519c] text-white border-[#13519c]" : "bg-white text-slate-700"}`,
                                                    children: "Đăng ký dài hạn"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                tutorBookingType === "SINGLE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-semibold text-slate-500 mb-1",
                                                    children: "1. Chọn ngày học"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    required: true,
                                                    value: bookingDate,
                                                    onChange: (e)=>setBookingDate(e.target.value),
                                                    className: "h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-semibold text-slate-500 mb-1",
                                                    children: "2. Giờ học bắt đầu"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: bookingStartHour,
                                                    onChange: (e)=>setBookingStartHour(e.target.value),
                                                    className: "h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "08:00",
                                                            children: "08:00 Sáng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "09:00",
                                                            children: "09:00 Sáng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "14:00",
                                                            children: "14:00 Chiều"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "15:00",
                                                            children: "15:00 Chiều"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "19:00",
                                                            children: "19:00 Tối"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "20:00",
                                                            children: "20:00 Tối"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border space-y-3 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold text-slate-500 uppercase",
                                            children: "Thiết lập lịch tuần dài hạn"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-semibold text-slate-500 mb-1",
                                                    children: "1. Giờ học bắt đầu"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: bookingStartHour,
                                                    onChange: (e)=>setBookingStartHour(e.target.value),
                                                    className: "h-10 w-full rounded-lg border px-3 text-xs focus:outline-none focus:border-[#13519c] dark:bg-slate-900 dark:text-white bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "08:00",
                                                            children: "08:00 Sáng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "09:00",
                                                            children: "09:00 Sáng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "14:00",
                                                            children: "14:00 Chiều"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "15:00",
                                                            children: "15:00 Chiều"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "19:00",
                                                            children: "19:00 Tối"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "20:00",
                                                            children: "20:00 Tối"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-semibold text-[#13519c]",
                                                    children: "2. Chọn các ngày học trong tuần:"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: [
                                                        "Thứ 2",
                                                        "Thứ 3",
                                                        "Thứ 4",
                                                        "Thứ 5",
                                                        "Thứ 6",
                                                        "Thứ 7",
                                                        "Chủ nhật"
                                                    ].map((day)=>{
                                                        const isSel = (longTermSchedule.week1 || []).includes(day);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const curr = [
                                                                    ...longTermSchedule.week1 || []
                                                                ];
                                                                const idx = curr.indexOf(day);
                                                                if (idx > -1) curr.splice(idx, 1);
                                                                else curr.push(day);
                                                                setLongTermSchedule({
                                                                    week1: curr,
                                                                    week2: curr
                                                                });
                                                            },
                                                            className: `px-2.5 py-1.5 rounded-lg text-[10px] font-semibold border transition cursor-pointer ${isSel ? "bg-[#13519c] text-white border-[#13519c]" : "bg-white text-slate-600 border-slate-200"}`,
                                                            children: day
                                                        }, day, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-semibold text-slate-500 mb-1",
                                                    children: "3. Số tuần học đăng ký (Khóa học):"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "2",
                                                    max: "24",
                                                    value: longTermWeeks,
                                                    onChange: (e)=>setLongTermWeeks(Number(e.target.value)),
                                                    className: "w-full h-10 px-3 border rounded-xl text-xs bg-white text-slate-900 border-slate-200 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-semibold text-slate-500 mb-1",
                                            children: "3. Số giờ học dạy kèm / buổi"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: [
                                                "1.5",
                                                "2",
                                                "3"
                                            ].map((hours)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setBookingDuration(hours),
                                                    className: `h-9 rounded-lg text-xs font-semibold border transition cursor-pointer ${bookingDuration === hours ? "bg-[#13519c] text-white border-[#13519c]" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,
                                                    children: [
                                                        hours,
                                                        " tiếng"
                                                    ]
                                                }, hours, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg flex flex-col gap-1 text-xs text-left border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-400",
                                                    children: "Đơn giá / giờ:"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: formatVND(Number(selectedTutor.hourly_rate))
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center border-t pt-1 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-500",
                                                    children: "Tổng cộng ước tính:"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-bold text-rose-600",
                                                    children: formatVND(Number(selectedTutor.hourly_rate) * Number(bookingDuration) * (tutorBookingType === "SINGLE" ? 1 : (longTermSchedule.week1.length + longTermSchedule.week2.length) * (longTermWeeks / 2)))
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-slate-400 mt-1",
                                            children: "* Phí giao dịch được trừ tự động từng buổi học vào ví Giáo viên sau 2 ngày (Holding bảo đảm)."
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full h-11 bg-[#13519c] text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition cursor-pointer",
                                    children: "Xác nhận đặt gia sư"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/BookingModal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = BookingModal;
var _c;
__turbopack_context__.k.register(_c, "BookingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/PaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PaymentModal({ payingAppt, setPayingAppt, paymentDetails, setPaymentDetails, paymentComplete, setPaymentComplete, generatingQr, token, wallet, formatVND, formatDateTimeText, showKntechAlert, logClientActivity, fetchUserData, setTopupAmountInput, setActiveTab, handleSimulatePayment, handleWalletPayAppointment }) {
    if (!payingAppt) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-3 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-slate-900 dark:text-white",
                            children: "Chi tiết lớp học & Thanh toán"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setPayingAppt(null);
                                setPaymentDetails(null);
                                setPaymentComplete(false);
                            },
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg space-y-1.5 border leading-normal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "🏫 Lớp học với: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900 dark:text-white",
                                            children: payingAppt.tutor_name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "⏱️ Bắt đầu:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900 dark:text-white",
                                            children: formatDateTimeText(payingAppt.start_time)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "💰 Học phí: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-rose-600",
                                            children: formatVND(payingAppt.price_paid)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        !paymentDetails ? // Show options
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        const t = token || localStorage.getItem("token") || "";
                                        window.open(`/payment?appointmentId=${payingAppt.id}&token=${encodeURIComponent(t)}`, "_blank");
                                    },
                                    className: "w-full h-11 bg-[#13519c] text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-1.5 shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "5",
                                                    width: "20",
                                                    height: "14",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "10",
                                                    x2: "22",
                                                    y2: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        "Thanh toán VietQR (Chuyển khoản)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleWalletPayAppointment(payingAppt),
                                    className: "w-full h-11 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition cursor-pointer flex items-center justify-center gap-1.5 shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20 12V8H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h14v4"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 6v12a2 2 0 0 0 2 2h14v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "16",
                                                    cy: "12",
                                                    r: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        "Thanh toán qua Ví nội bộ (",
                                        formatVND(wallet.available_balance),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this) : // Show QR details generated
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center",
                            children: generatingQr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs py-6",
                                children: "⏳ Đang tạo mã QR thanh toán..."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-2 border rounded-lg inline-block mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: paymentDetails.qrUrl,
                                            alt: "VietQR",
                                            className: "h-40 w-40 object-contain mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg space-y-1.5 border leading-normal text-slate-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "🏦 Ngân hàng: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: paymentDetails.bankCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "💳 Số tài khoản: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: paymentDetails.accountNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "👤 Chủ tài khoản: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: paymentDetails.accountName
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "💰 Học phí: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-rose-600",
                                                        children: formatVND(paymentDetails.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "✍️ Nội dung: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-[#13519c]",
                                                        children: paymentDetails.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t",
                                        children: paymentComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg",
                                            children: "✓ GHI NHẬN THANH TOÁN THÀNH CÔNG!"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSimulatePayment,
                                            className: "w-full h-11 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition cursor-pointer",
                                            children: "📲 Giả Lập Đã Chuyển Tiền Thành Công"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/PaymentModal.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = PaymentModal;
var _c;
__turbopack_context__.k.register(_c, "PaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/ClassroomView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassroomView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-right-close.js [app-client] (ecmascript) <export default as PanelRightClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-right-open.js [app-client] (ecmascript) <export default as PanelRightOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.js [app-client] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PinOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin-off.js [app-client] (ecmascript) <export default as PinOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/screen-share.js [app-client] (ecmascript) <export default as ScreenShare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShareOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/screen-share-off.js [app-client] (ecmascript) <export default as ScreenShareOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/hooks/useWebRTC.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const REACTIONS = [
    "👏",
    "👍",
    "❤️",
    "✅",
    "💡"
];
function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}
function getInitials(name) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "U";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
function getCounterpartName(activeClassroom, role) {
    if (!activeClassroom) return "Phong hoc";
    if (role === "STUDENT") return activeClassroom.tutor_name || "Gia su";
    if (role === "TUTOR") return activeClassroom.student_name || "Hoc vien";
    return activeClassroom.tutor_name || activeClassroom.student_name || "Phong hoc";
}
function getClassroomId(activeClassroom) {
    return String(activeClassroom?.class_id || activeClassroom?.live_room_code || activeClassroom?.id || "preview-room");
}
function ClassroomView({ activeClassroom, setActiveClassroom, currentUser }) {
    _s();
    const [sidePanel, setSidePanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomView, setRoomView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("gallery");
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pinnedSocketId, setPinnedSocketId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [whiteboardColor, setWhiteboardColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#f97316");
    const [whiteboardSize, setWhiteboardSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pointRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const classroomId = getClassroomId(activeClassroom);
    const { socket, connectionState, selfSocketId, participants, localParticipant, remoteParticipants, participantCount, remoteStreams, localVideoRef, isMicOn, toggleMic, isCamOn, toggleCamera, isScreenSharing, toggleScreenShare, isHandRaised, toggleHand, chatMessages, sendChatMessage, reactions, sendReaction, mediaError, setMediaError, audioDevices, videoDevices, selectedAudioDeviceId, selectedVideoDeviceId, switchMicrophone, switchCamera, refreshDevices, leaveRoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebRTC"])({
        roomId: classroomId,
        userId: currentUser.id,
        userName: currentUser.name,
        role: currentUser.role || "GUEST",
        autoJoin: Boolean(activeClassroom),
        initialMicOn: false,
        initialCamOn: false
    });
    const allTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClassroomView.useMemo[allTiles]": ()=>{
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
                    isHandRaised
                },
                stream: null,
                isLocal: true
            };
            const remoteTiles = remoteParticipants.map({
                "ClassroomView.useMemo[allTiles].remoteTiles": (participant)=>({
                        id: participant.socketId,
                        participant,
                        stream: remoteStreams[participant.socketId] || null,
                        isLocal: false
                    })
            }["ClassroomView.useMemo[allTiles].remoteTiles"]);
            return [
                localTile,
                ...remoteTiles
            ];
        }
    }["ClassroomView.useMemo[allTiles]"], [
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
        selfSocketId
    ]);
    const spotlightId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClassroomView.useMemo[spotlightId]": ()=>{
            if (pinnedSocketId) return pinnedSocketId;
            if (isScreenSharing) return "local";
            const screenSharer = remoteParticipants.find({
                "ClassroomView.useMemo[spotlightId].screenSharer": (participant)=>participant.isScreenSharing
            }["ClassroomView.useMemo[spotlightId].screenSharer"]);
            if (screenSharer) return screenSharer.socketId;
            return allTiles[0]?.id || "local";
        }
    }["ClassroomView.useMemo[spotlightId]"], [
        allTiles,
        isScreenSharing,
        pinnedSocketId,
        remoteParticipants
    ]);
    const spotlightTile = allTiles.find((tile)=>tile.id === spotlightId) || allTiles[0];
    const companionTiles = allTiles.filter((tile)=>tile.id !== spotlightTile?.id);
    const counterpartName = getCounterpartName(activeClassroom, currentUser.role);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassroomView.useEffect": ()=>{
            if (!socket) return;
            const handleDraw = {
                "ClassroomView.useEffect.handleDraw": (data)=>{
                    drawLine(data.x0, data.y0, data.x1, data.y1, data.color, data.size, false);
                }
            }["ClassroomView.useEffect.handleDraw"];
            const handleClear = {
                "ClassroomView.useEffect.handleClear": ()=>clearCanvas(false)
            }["ClassroomView.useEffect.handleClear"];
            socket.on("whiteboard-draw", handleDraw);
            socket.on("whiteboard-clear", handleClear);
            socket.on("draw-line", handleDraw);
            socket.on("clear-board", handleClear);
            return ({
                "ClassroomView.useEffect": ()=>{
                    socket.off("whiteboard-draw", handleDraw);
                    socket.off("whiteboard-clear", handleClear);
                    socket.off("draw-line", handleDraw);
                    socket.off("clear-board", handleClear);
                }
            })["ClassroomView.useEffect"];
        }
    }["ClassroomView.useEffect"], [
        socket
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassroomView.useEffect": ()=>{
            if (sidePanel === "settings") {
                void refreshDevices();
            }
        }
    }["ClassroomView.useEffect"], [
        refreshDevices,
        sidePanel
    ]);
    if (!activeClassroom) return null;
    const getCanvasPoint = (event)=>{
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const rect = canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) / rect.width * canvas.width,
            y: (event.clientY - rect.top) / rect.height * canvas.height
        };
    };
    function drawLine(x0, y0, x1, y1, color = whiteboardColor, size = whiteboardSize, emit = true) {
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
            socket?.emit("whiteboard-draw", {
                x0,
                y0,
                x1,
                y1,
                color,
                size
            });
        }
    }
    function clearCanvas(emit = true) {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (emit) socket?.emit("whiteboard-clear");
    }
    const handlePointerDown = (event)=>{
        const point = getCanvasPoint(event);
        if (!point) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        drawingRef.current = true;
        pointRef.current = point;
    };
    const handlePointerMove = (event)=>{
        if (!drawingRef.current || !pointRef.current) return;
        const nextPoint = getCanvasPoint(event);
        if (!nextPoint) return;
        drawLine(pointRef.current.x, pointRef.current.y, nextPoint.x, nextPoint.y);
        pointRef.current = nextPoint;
    };
    const handlePointerUp = (event)=>{
        drawingRef.current = false;
        pointRef.current = null;
        try {
            event.currentTarget.releasePointerCapture(event.pointerId);
        } catch  {}
    };
    const handleSendMessage = (event)=>{
        event.preventDefault();
        sendChatMessage(chatInput);
        setChatInput("");
    };
    const handleLeaveRoom = ()=>{
        leaveRoom();
        setActiveClassroom(null);
    };
    const handleCopyRoom = async ()=>{
        try {
            await navigator.clipboard.writeText(classroomId);
            setCopied(true);
            window.setTimeout(()=>setCopied(false), 1200);
        } catch  {
            setCopied(false);
        }
    };
    const connected = connectionState === "connected";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex bg-neutral-950 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-neutral-900 px-3 sm:px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate text-sm font-semibold",
                                                children: [
                                                    "Lop voi ",
                                                    counterpartName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCopyRoom,
                                                className: "mt-0.5 text-left text-[11px] text-neutral-400 hover:text-white",
                                                children: [
                                                    "ID ",
                                                    classroomId,
                                                    " ",
                                                    copied ? "- Copied" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: cx("hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold sm:flex", connected ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"),
                                        children: [
                                            connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 316,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 316,
                                                columnNumber: 49
                                            }, this),
                                            connectionState
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: "Gallery",
                                        onClick: ()=>setRoomView("gallery"),
                                        className: cx("grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10", roomView === "gallery" && "bg-white/10 text-orange-300"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: "Whiteboard",
                                        onClick: ()=>setRoomView(roomView === "whiteboard" ? "gallery" : "whiteboard"),
                                        className: cx("grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10", roomView === "whiteboard" && "bg-white/10 text-orange-300"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: "Panel",
                                        onClick: ()=>setSidePanel(sidePanel ? null : "participants"),
                                        className: "grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10",
                                        children: sidePanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightClose$3e$__["PanelRightClose"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 341,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightOpen$3e$__["PanelRightOpen"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 341,
                                            columnNumber: 60
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    mediaError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-3 mt-3 flex items-center justify-between rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-xs text-amber-100 sm:mx-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: mediaError
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMediaError(null),
                                className: "ml-3 text-amber-200 hover:text-white",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative min-h-0 flex-1 overflow-hidden p-3 sm:p-5",
                        children: [
                            reactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute right-5 top-5 z-20 flex flex-col gap-2",
                                children: reactions.slice(-4).map((reaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xl shadow-xl",
                                        children: reaction.reaction
                                    }, reaction.id, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            roomView === "whiteboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-12 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-3 text-neutral-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    [
                                                        "#f97316",
                                                        "#111827",
                                                        "#2563eb",
                                                        "#16a34a",
                                                        "#dc2626"
                                                    ].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            title: color,
                                                            onClick: ()=>setWhiteboardColor(color),
                                                            className: cx("h-6 w-6 rounded-full border-2", whiteboardColor === color ? "border-neutral-900" : "border-white shadow"),
                                                            style: {
                                                                backgroundColor: color
                                                            }
                                                        }, color, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        "aria-label": "Pen size",
                                                        type: "range",
                                                        min: 2,
                                                        max: 12,
                                                        value: whiteboardSize,
                                                        onChange: (event)=>setWhiteboardSize(Number(event.target.value)),
                                                        className: "w-24 accent-orange-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>clearCanvas(),
                                                className: "inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Clear"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        width: 1600,
                                        height: 900,
                                        onPointerDown: handlePointerDown,
                                        onPointerMove: handlePointerMove,
                                        onPointerUp: handlePointerUp,
                                        onPointerCancel: handlePointerUp,
                                        className: "h-full w-full touch-none bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this) : roomView === "speaker" && spotlightTile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid h-full grid-rows-[1fr_112px] gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoTile, {
                                        tile: spotlightTile,
                                        localVideoRef: localVideoRef,
                                        pinned: pinnedSocketId === spotlightTile.id,
                                        onPin: ()=>setPinnedSocketId(pinnedSocketId === spotlightTile.id ? null : spotlightTile.id)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 overflow-x-auto pb-1",
                                        children: companionTiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-44 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoTile, {
                                                    tile: tile,
                                                    localVideoRef: localVideoRef,
                                                    compact: true,
                                                    pinned: pinnedSocketId === tile.id,
                                                    onPin: ()=>setPinnedSocketId(pinnedSocketId === tile.id ? null : tile.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 21
                                                }, this)
                                            }, tile.id, false, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx("grid h-full gap-3", getGridClass(allTiles.length)),
                                children: [
                                    allTiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoTile, {
                                            tile: tile,
                                            localVideoRef: localVideoRef,
                                            pinned: pinnedSocketId === tile.id,
                                            onPin: ()=>{
                                                setPinnedSocketId(pinnedSocketId === tile.id ? null : tile.id);
                                                setRoomView("speaker");
                                            }
                                        }, tile.id, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)),
                                    allTiles.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden items-center justify-center rounded-lg border border-dashed border-white/15 bg-neutral-900/60 text-sm text-neutral-500 md:flex",
                                        children: "Dang doi nguoi khac vao phong"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "flex min-h-[76px] shrink-0 items-center justify-between gap-2 border-t border-white/10 bg-neutral-900 px-2 py-2 sm:px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: isMicOn,
                                        danger: !isMicOn,
                                        label: isMicOn ? "Mute" : "Unmute",
                                        onClick: toggleMic,
                                        children: isMicOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 458,
                                            columnNumber: 26
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 458,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: isCamOn,
                                        danger: !isCamOn,
                                        label: isCamOn ? "Stop" : "Start",
                                        onClick: toggleCamera,
                                        children: isCamOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 461,
                                            columnNumber: 26
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 461,
                                            columnNumber: 48
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center justify-center gap-1 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: sidePanel === "participants",
                                        label: `People ${participantCount}`,
                                        onClick: ()=>setSidePanel(sidePanel === "participants" ? null : "participants"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: sidePanel === "chat",
                                        label: "Chat",
                                        onClick: ()=>setSidePanel(sidePanel === "chat" ? null : "chat"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: isScreenSharing,
                                        success: true,
                                        label: isScreenSharing ? "Stop share" : "Share",
                                        onClick: toggleScreenShare,
                                        children: isScreenSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShareOff$3e$__["ScreenShareOff"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 473,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$screen$2d$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenShare$3e$__["ScreenShare"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 473,
                                            columnNumber: 65
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: isHandRaised,
                                        label: "Raise",
                                        onClick: toggleHand,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 476,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden items-center gap-1 md:flex",
                                        children: REACTIONS.map((reaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>sendReaction(reaction),
                                                className: "grid h-10 w-10 place-items-center rounded-lg text-lg hover:bg-white/10",
                                                children: reaction
                                            }, reaction, false, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlButton, {
                                        active: sidePanel === "settings",
                                        label: "Device",
                                        onClick: ()=>setSidePanel(sidePanel === "settings" ? null : "settings"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleLeaveRoom,
                                className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-red-600 px-3 text-xs font-bold text-white hover:bg-red-700 sm:px-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Leave"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            sidePanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "absolute inset-y-0 right-0 z-30 flex w-full max-w-sm flex-col border-l border-white/10 bg-neutral-900 shadow-2xl sm:relative sm:w-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold",
                                children: sidePanel === "chat" ? "Chat" : sidePanel === "participants" ? `Participants (${participantCount})` : "Devices"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSidePanel(null),
                                className: "grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightClose$3e$__["PanelRightClose"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 512,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    sidePanel === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-3 overflow-y-auto p-4",
                                children: chatMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center text-xs text-neutral-400",
                                    children: "No messages"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 521,
                                    columnNumber: 19
                                }, this) : chatMessages.map((message)=>{
                                    const mine = message.senderSocketId === selfSocketId;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: cx("flex flex-col", mine ? "items-end" : "items-start"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 max-w-[85%] truncate text-[10px] text-neutral-500",
                                                children: [
                                                    mine ? "You" : message.senderName || message.sender,
                                                    " - ",
                                                    message.time
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 527,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: cx("max-w-[90%] rounded-lg px-3 py-2 text-sm leading-relaxed", mine ? "bg-orange-500 text-white" : "bg-white/10 text-neutral-100"),
                                                children: message.text
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                                lineNumber: 530,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, message.id || `${message.senderSocketId}-${message.createdAt}`, true, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 526,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 519,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSendMessage,
                                className: "flex shrink-0 gap-2 border-t border-white/10 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: chatInput,
                                        onChange: (event)=>setChatInput(event.target.value),
                                        className: "h-10 min-w-0 flex-1 rounded-lg border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none focus:border-orange-400",
                                        placeholder: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange-500 text-white hover:bg-orange-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                            lineNumber: 546,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 538,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    sidePanel === "participants" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-3",
                        children: participants.map((participant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticipantRow, {
                                participant: participant,
                                isLocal: participant.socketId === selfSocketId,
                                pinned: pinnedSocketId === participant.socketId,
                                onPin: ()=>{
                                    setPinnedSocketId(pinnedSocketId === participant.socketId ? null : participant.socketId);
                                    setRoomView("speaker");
                                }
                            }, participant.socketId, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 555,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 553,
                        columnNumber: 13
                    }, this),
                    sidePanel === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-5 overflow-y-auto p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeviceSelect, {
                                label: "Microphone",
                                value: selectedAudioDeviceId,
                                devices: audioDevices,
                                onChange: (deviceId)=>void switchMicrophone(deviceId)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 571,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeviceSelect, {
                                label: "Camera",
                                value: selectedVideoDeviceId,
                                devices: videoDevices,
                                onChange: (deviceId)=>void switchCamera(deviceId)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 577,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-neutral-400",
                                children: connected ? "Media server connected" : "Connecting to media server"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 570,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s(ClassroomView, "/UKAZRQxNHnG3r1B6FPJbAlhZbc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebRTC"]
    ];
});
_c = ClassroomView;
function getGridClass(count) {
    if (count <= 1) return "grid-cols-1 md:grid-cols-2";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    if (count <= 4) return "grid-cols-1 sm:grid-cols-2";
    if (count <= 6) return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
}
function ControlButton({ active, danger, success, label, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: label,
        onClick: onClick,
        className: cx("flex h-14 w-[58px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-semibold transition hover:bg-white/10 sm:w-20", danger && "text-red-400", success && active && "bg-emerald-500/10 text-emerald-300", active && !danger && !success && "text-orange-300"),
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "max-w-full truncate px-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 618,
        columnNumber: 5
    }, this);
}
_c1 = ControlButton;
function VideoTile({ tile, localVideoRef, compact, pinned, onPin }) {
    const showVideo = tile.isLocal ? tile.participant.isCamOn || tile.participant.isScreenSharing : Boolean(tile.stream) && (tile.participant.isCamOn || tile.participant.isScreenSharing);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex h-full min-h-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-neutral-900",
        children: [
            tile.isLocal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: localVideoRef,
                autoPlay: true,
                playsInline: true,
                muted: true,
                className: cx("h-full w-full bg-neutral-950 object-contain", !showVideo && "hidden")
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 660,
                columnNumber: 9
            }, this) : showVideo && tile.stream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RemoteVideo, {
                stream: tile.stream
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 668,
                columnNumber: 9
            }, this) : null,
            !tile.isLocal && tile.stream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RemoteAudio, {
                stream: tile.stream
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 671,
                columnNumber: 40
            }, this),
            !showVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx("grid rounded-full bg-gradient-to-br from-orange-500 to-rose-600 font-black text-white", compact ? "h-12 w-12 text-base" : "h-20 w-20 text-2xl"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "m-auto",
                            children: getInitials(tile.participant.userName)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 675,
                        columnNumber: 11
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-neutral-300",
                        children: tile.participant.userName
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 678,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 674,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-3 top-3 flex gap-2",
                children: [
                    tile.participant.isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                        children: "Host"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 683,
                        columnNumber: 37
                    }, this),
                    tile.participant.isScreenSharing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                        tone: "green",
                        children: "Share"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 684,
                        columnNumber: 46
                    }, this),
                    tile.participant.isHandRaised && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                        tone: "amber",
                        children: "Hand"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 685,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: [
                                tile.participant.userName,
                                tile.isLocal ? " (You)" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx("grid h-7 w-7 place-items-center rounded-md bg-black/60 backdrop-blur", tile.participant.isMicOn ? "text-emerald-300" : "text-red-300"),
                                children: tile.participant.isMicOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 694,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 694,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                title: pinned ? "Unpin" : "Pin",
                                onClick: onPin,
                                className: "hidden h-7 w-7 place-items-center rounded-md bg-black/60 text-neutral-200 backdrop-blur hover:text-orange-300 group-hover:grid",
                                children: pinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PinOff$3e$__["PinOff"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 702,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                    lineNumber: 702,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 658,
        columnNumber: 5
    }, this);
}
_c2 = VideoTile;
function RemoteVideo({ stream }) {
    _s1();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoteVideo.useEffect": ()=>{
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                void videoRef.current.play().catch({
                    "RemoteVideo.useEffect": ()=>{}
                }["RemoteVideo.useEffect"]);
            }
        }
    }["RemoteVideo.useEffect"], [
        stream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        ref: videoRef,
        autoPlay: true,
        playsInline: true,
        muted: true,
        className: "h-full w-full bg-neutral-950 object-contain"
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 720,
        columnNumber: 10
    }, this);
}
_s1(RemoteVideo, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c3 = RemoteVideo;
function RemoteAudio({ stream }) {
    _s2();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoteAudio.useEffect": ()=>{
            if (audioRef.current) {
                audioRef.current.srcObject = stream;
                void audioRef.current.play().catch({
                    "RemoteAudio.useEffect": ()=>{}
                }["RemoteAudio.useEffect"]);
            }
        }
    }["RemoteAudio.useEffect"], [
        stream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
        ref: audioRef,
        autoPlay: true,
        playsInline: true,
        className: "hidden"
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 733,
        columnNumber: 10
    }, this);
}
_s2(RemoteAudio, "+byXHHf22FzALubYzgUeSQRtz1Y=");
_c4 = RemoteAudio;
function Badge({ children, tone = "neutral" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: cx("rounded-full border px-2 py-0.5 text-[10px] font-bold backdrop-blur", tone === "green" && "border-emerald-400/25 bg-emerald-500/15 text-emerald-200", tone === "amber" && "border-amber-400/25 bg-amber-500/15 text-amber-100", tone === "neutral" && "border-white/15 bg-black/40 text-white"),
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 738,
        columnNumber: 5
    }, this);
}
_c5 = Badge;
function ParticipantRow({ participant, isLocal, pinned, onPin }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 text-xs font-black text-white",
                children: getInitials(participant.userName)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 764,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate text-sm font-semibold",
                        children: [
                            participant.userName,
                            isLocal ? " (You)" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5 flex items-center gap-2 text-[10px] uppercase tracking-wide text-neutral-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: participant.role
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 773,
                                columnNumber: 11
                            }, this),
                            participant.isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Host"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                                lineNumber: 774,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 772,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-neutral-400",
                children: [
                    participant.isMicOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        size: 15,
                        className: "text-emerald-300"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 778,
                        columnNumber: 32
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                        size: 15,
                        className: "text-red-300"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 778,
                        columnNumber: 81
                    }, this),
                    participant.isCamOn || participant.isScreenSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                        size: 15,
                        className: "text-emerald-300"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 779,
                        columnNumber: 63
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 779,
                        columnNumber: 114
                    }, this),
                    participant.isHandRaised && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                        size: 15,
                        className: "text-amber-300"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 780,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onPin,
                        className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10",
                        children: pinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PinOff$3e$__["PinOff"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                            lineNumber: 782,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                            lineNumber: 782,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 781,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 763,
        columnNumber: 5
    }, this);
}
_c6 = ParticipantRow;
function DeviceSelect({ label, value, devices, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-xs font-bold text-neutral-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 802,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (event)=>onChange(event.target.value),
                className: "h-10 w-full rounded-lg border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none focus:border-orange-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Default"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                        lineNumber: 808,
                        columnNumber: 9
                    }, this),
                    devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: device.deviceId,
                            children: device.label
                        }, device.deviceId || device.label, false, {
                            fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                            lineNumber: 810,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
                lineNumber: 803,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/ClassroomView.tsx",
        lineNumber: 801,
        columnNumber: 5
    }, this);
}
_c7 = DeviceSelect;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ClassroomView");
__turbopack_context__.k.register(_c1, "ControlButton");
__turbopack_context__.k.register(_c2, "VideoTile");
__turbopack_context__.k.register(_c3, "RemoteVideo");
__turbopack_context__.k.register(_c4, "RemoteAudio");
__turbopack_context__.k.register(_c5, "Badge");
__turbopack_context__.k.register(_c6, "ParticipantRow");
__turbopack_context__.k.register(_c7, "DeviceSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/UploadDocModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadDocModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/KntechUpload.tsx [app-client] (ecmascript)");
;
;
function UploadDocModal({ uploadModalOpen, setUploadModalOpen, docUploadForm, setDocUploadForm, docFileToUpload, setDocFileToUpload, handleUploadDoc }) {
    if (!uploadModalOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl dark:bg-[#111827] border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-2 border-b mb-4 text-xs font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "📚 Tải tài liệu đề thi lên hệ thống"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setUploadModalOpen(false),
                            className: "text-slate-400 hover:text-slate-600 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUploadDoc,
                    className: "space-y-3.5 text-xs text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-500 mb-1 font-semibold",
                                    children: "Tiêu đề tài liệu *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: docUploadForm.title,
                                    onChange: (e)=>setDocUploadForm({
                                            ...docUploadForm,
                                            title: e.target.value
                                        }),
                                    placeholder: "VD: [Toán 12] - Đề thi thử giữa kỳ 1...",
                                    className: "w-full h-10 px-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-500 mb-1.5 font-semibold",
                                    children: "Tải tệp tài liệu lên (PDF, Word, ...) *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: ".pdf,.doc,.docx,.xls,.xlsx,image/*",
                                    value: docFileToUpload,
                                    required: true,
                                    onChange: (files)=>{
                                        const file = files?.[0] || null;
                                        setDocFileToUpload(file);
                                        if (file && !docUploadForm.title) {
                                            setDocUploadForm({
                                                ...docUploadForm,
                                                title: file.name
                                            });
                                        }
                                    },
                                    onClear: ()=>setDocFileToUpload(null),
                                    mainText: "Drag & Drop or Choose file to upload",
                                    allowedText: "PDF, DOC, DOCX, XLS, XLSX, and Images are Allowed."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-500 mb-1 font-semibold",
                                            children: "Môn học"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: docUploadForm.subjectTag,
                                            onChange: (e)=>setDocUploadForm({
                                                    ...docUploadForm,
                                                    subjectTag: e.target.value
                                                }),
                                            className: "w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Toán",
                                                    children: "Toán"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lý",
                                                    children: "Vật lý"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hóa",
                                                    children: "Hóa học"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Văn",
                                                    children: "Ngữ Văn"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Tiếng Anh",
                                                    children: "Tiếng Anh"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-500 mb-1 font-semibold",
                                            children: "Khối Lớp"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: docUploadForm.gradeTag,
                                            onChange: (e)=>setDocUploadForm({
                                                    ...docUploadForm,
                                                    gradeTag: e.target.value
                                                }),
                                            className: "w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lớp 10",
                                                    children: "Lớp 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lớp 11",
                                                    children: "Lớp 11"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lớp 12",
                                                    children: "Lớp 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-500 mb-1 font-semibold",
                                            children: "Phân Loại"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: docUploadForm.typeTag,
                                            onChange: (e)=>setDocUploadForm({
                                                    ...docUploadForm,
                                                    typeTag: e.target.value
                                                }),
                                            className: "w-full h-10 border border-slate-200 rounded-xl px-2 bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Tài liệu",
                                                    children: "Tài liệu"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Sách",
                                                    children: "Sách"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Ôn tập",
                                                    children: "Ôn tập"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Giữa kì 1",
                                                    children: "Giữa kì 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Giữa kì 2",
                                                    children: "Giữa kì 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cuối kì 1",
                                                    children: "Cuối kì 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cuối kì 2",
                                                    children: "Cuối kì 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Tài liệu ôn thi",
                                                    children: "Tài liệu ôn thi"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full h-10 bg-[#13519c] hover:bg-blue-800 text-white font-semibold rounded-lg transition cursor-pointer",
                            children: "Gửi yêu cầu kiểm duyệt file"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/UploadDocModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = UploadDocModal;
var _c;
__turbopack_context__.k.register(_c, "UploadDocModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/RejectTutorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RejectTutorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function RejectTutorModal({ rejectingTutorId, setRejectingTutorId, adminRejectReason, setAdminRejectReason, handleDecideTutor }) {
    if (!rejectingTutorId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl dark:bg-[#111827] border text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold text-slate-900 dark:text-white mb-2",
                    children: "Lý Do Từ Chối Hồ Sơ"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400 mb-4",
                    children: "Nhập lý do cụ thể gửi tới giáo viên:"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: adminRejectReason,
                    onChange: (e)=>setAdminRejectReason(e.target.value),
                    placeholder: "VD: Thiếu chứng chỉ sư phạm hoặc ảnh CCCD mờ...",
                    className: "w-full h-24 p-3 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white placeholder-slate-400"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 justify-end mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDecideTutor(rejectingTutorId, "REJECTED", adminRejectReason),
                            className: "bg-rose-600 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-rose-700",
                            children: "Từ chối hồ sơ"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setRejectingTutorId(null);
                                setAdminRejectReason("");
                            },
                            className: "bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-300",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/RejectTutorModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = RejectTutorModal;
var _c;
__turbopack_context__.k.register(_c, "RejectTutorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/AdminEditUserModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminEditUserModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AdminEditUserModal({ editingUser, setEditingUser, userForm, setUserForm, handleUpdateUser }) {
    if (!editingUser) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border overflow-y-auto max-h-[90vh] text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-3 border-b mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs font-semibold text-slate-900 dark:text-white",
                            children: "Cấu hình thông tin thành viên (Admin)"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setEditingUser(null),
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUpdateUser,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 mb-1",
                                    children: "Họ và tên"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: userForm.fullName,
                                    onChange: (e)=>setUserForm({
                                            ...userForm,
                                            fullName: e.target.value
                                        }),
                                    className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 mb-1",
                                    children: "Tên đăng nhập"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: userForm.username || "",
                                    onChange: (e)=>setUserForm({
                                            ...userForm,
                                            username: e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, "")
                                        }),
                                    className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 mb-1",
                                    children: "Địa chỉ Email"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    required: true,
                                    value: userForm.email,
                                    onChange: (e)=>setUserForm({
                                            ...userForm,
                                            email: e.target.value
                                        }),
                                    className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 mb-1",
                                    children: "Số điện thoại"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: userForm.phone,
                                    onChange: (e)=>setUserForm({
                                            ...userForm,
                                            phone: e.target.value
                                        }),
                                    className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-slate-500 mb-1",
                                            children: "Vai trò"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: userForm.role,
                                            onChange: (e)=>setUserForm({
                                                    ...userForm,
                                                    role: e.target.value
                                                }),
                                            className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "STUDENT",
                                                    children: "STUDENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "TUTOR",
                                                    children: "TUTOR"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ADMIN",
                                                    children: "ADMIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-slate-500 mb-1",
                                            children: "Trạng thái"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: userForm.status,
                                            onChange: (e)=>setUserForm({
                                                    ...userForm,
                                                    status: e.target.value
                                                }),
                                            className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ACTIVE",
                                                    children: "ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "BANNED",
                                                    children: "BANNED"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-rose-50 dark:bg-rose-950/20 p-3 rounded-xl border border-rose-200 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-rose-800 dark:text-rose-300",
                                    children: "Thay đổi mật khẩu tài khoản"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Để trống nếu không thay đổi...",
                                    value: userForm.password,
                                    onChange: (e)=>setUserForm({
                                            ...userForm,
                                            password: e.target.value
                                        }),
                                    className: "h-10 w-full rounded-xl border border-slate-200 px-3 text-xs bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full h-11 bg-[#13519c] hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer",
                            children: "Lưu Thông Tin"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/AdminEditUserModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = AdminEditUserModal;
var _c;
__turbopack_context__.k.register(_c, "AdminEditUserModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/TutorDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-client] (ecmascript)");
;
;
;
function TutorDetailModal({ viewingTutor, setViewingTutor, setTutorProfileToView, setActiveTab, token, setChatActivePartner, setHomeSubTab, setSelectedTutor, openAuth, formatVND, setPreviewDoc }) {
    if (!viewingTutor) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl bg-white dark:bg-[#111827] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-5 text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start border-b pb-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatarUrl"])(viewingTutor),
                                    alt: viewingTutor.full_name,
                                    className: "h-14 w-14 rounded-2xl border-2 border-blue-500 bg-slate-50 shadow-sm object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-955 dark:text-white flex items-center gap-1.5",
                                            children: [
                                                viewingTutor.full_name,
                                                viewingTutor.is_verified === "APPROVED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-350 font-bold px-1.5 py-0.2 rounded-full border border-emerald-200/30",
                                                    children: "✓ Đã xác minh"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400 mt-0.5",
                                            children: [
                                                viewingTutor.school,
                                                " • ",
                                                viewingTutor.major
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 mt-1 text-[9px] text-amber-500 font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "⭐ ",
                                                        (4.7 + viewingTutor.full_name.charCodeAt(0) % 4 * 0.1).toFixed(1)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: [
                                                        "(",
                                                        viewingTutor.full_name.charCodeAt(1) % 40 + 15,
                                                        " đánh giá)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setViewingTutor(null),
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 flex items-center justify-center text-sm cursor-pointer shrink-0",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] uppercase font-bold text-slate-400 block mb-1",
                                            children: "Học phí dạy kèm"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-black text-rose-600",
                                            children: [
                                                formatVND(viewingTutor.hourly_rate),
                                                "/giờ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] uppercase font-bold text-slate-400 block mb-1",
                                            children: "Trình độ học vấn"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-800 dark:text-white",
                                            children: viewingTutor.year_of_study || "Sinh viên năm 3"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase font-bold text-slate-400 block",
                                    children: "Môn học nhận dạy"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: (viewingTutor.subjects_to_teach || []).map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded border border-blue-200/20",
                                            children: sub
                                        }, sub, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl space-y-2 border border-slate-100 dark:border-slate-800/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase font-bold text-slate-400 block",
                                    children: "Giới thiệu bản thân"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-normal whitespace-pre-line",
                                    children: viewingTutor.bio || "Gia sư nhiều năm kinh nghiệm chuyên môn dạy kèm bám sát đề thi và cấu trúc bài học lớp học phổ thông, hỗ trợ ôn luyện kỳ thi quan trọng đạt kết quả tối ưu."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        viewingTutor.documents && viewingTutor.documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase font-bold text-slate-400 block",
                                    children: [
                                        "Bằng cấp & Chứng chỉ (",
                                        viewingTutor.documents.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: viewingTutor.documents.map((doc)=>{
                                        const fileUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/tutors/documents/${doc.id}?token=${token}`);
                                        const isImage = doc.mime_type?.startsWith("image/");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800 flex flex-col justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate",
                                                    title: doc.original_name,
                                                    children: doc.original_name
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this),
                                                isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setPreviewDoc({
                                                            title: doc.original_name,
                                                            file_url: fileUrl
                                                        }),
                                                    className: "block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-950 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: fileUrl,
                                                            alt: doc.original_name,
                                                            className: "h-20 w-full object-cover rounded hover:scale-105 transition duration-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[8px] text-white font-bold",
                                                            children: "XEM 🔎"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setPreviewDoc({
                                                            title: doc.original_name,
                                                            file_url: fileUrl
                                                        }),
                                                    className: "h-20 rounded bg-blue-50 dark:bg-slate-800 flex flex-col items-center justify-center border border-dashed text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition text-[10px] font-bold gap-1 text-center px-1 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "📄 ",
                                                                doc.original_name.split(".").pop()?.toUpperCase(),
                                                                " File"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-semibold text-slate-455 dark:text-slate-500",
                                                            children: "Click để mở ↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, doc.id, true, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2.5 pt-3 border-t",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setTutorProfileToView(viewingTutor);
                                setActiveTab("profile");
                                setViewingTutor(null);
                            },
                            className: "w-full bg-white border-2 border-slate-200 hover:border-[#13519c] text-[#13519c] font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition text-center",
                            children: "Xem trang cá nhân"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!token) {
                                            openAuth("login");
                                            return;
                                        }
                                        setChatActivePartner(viewingTutor);
                                        setHomeSubTab("community");
                                        setActiveTab("home");
                                        setViewingTutor(null);
                                    },
                                    className: "flex-1 bg-purple-650 hover:bg-purple-750 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition shadow text-center flex items-center justify-center gap-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedTutor(viewingTutor);
                                        setViewingTutor(null);
                                    },
                                    className: "flex-[4] bg-[#13519c] hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition shadow text-center font-semibold",
                                    children: "📅 Đặt lịch học ngay"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/TutorDetailModal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = TutorDetailModal;
var _c;
__turbopack_context__.k.register(_c, "TutorDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/DocDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function DocDetailModal({ selectedDocument, setSelectedDocument, formatVND, setPreviewDoc }) {
    if (!selectedDocument) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl bg-white dark:bg-[#111827] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-4 text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start border-b pb-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.2 rounded",
                                            children: selectedDocument.grade_tag
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded",
                                            children: selectedDocument.subject_tag
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 text-[8px] font-bold px-1.5 py-0.2 rounded border",
                                            children: selectedDocument.type_tag
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-955 dark:text-white mt-1.5 leading-snug",
                                    children: selectedDocument.title
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSelectedDocument(null),
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 flex items-center justify-center text-sm cursor-pointer shrink-0 ml-4",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2 text-center text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] uppercase font-bold text-slate-400 block mb-0.5",
                                            children: "Lượt xem"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-800 dark:text-white",
                                            children: [
                                                "👁️ ",
                                                selectedDocument.download_count * 3 + 12
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] uppercase font-bold text-slate-400 block mb-0.5",
                                            children: "Lượt tải"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#13519c] dark:text-blue-400",
                                            children: [
                                                "📥 ",
                                                selectedDocument.download_count
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] uppercase font-bold text-slate-400 block mb-0.5",
                                            children: "Định dạng"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-rose-600",
                                            children: "PDF Document"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800/40 text-center space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl text-slate-400",
                                    children: "📄"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-slate-400 block uppercase",
                                    children: "Xem trước tài liệu (Preview)"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 italic max-w-[80%] mx-auto",
                                    children: '"Đề thi thử học kỳ và tài liệu ôn luyện bám sát cấu trúc của GiasuTop. Đảm bảo chất lượng cao."'
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-24 bg-white dark:bg-slate-950 rounded border border-dashed dark:border-slate-800 flex items-center justify-center text-[10px] text-slate-400",
                                    children: "Mô phỏng trang 1 / 15 của tài liệu..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "👤 Đăng bởi: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-700 dark:text-slate-350",
                                            children: selectedDocument.uploader_name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "📅 Ngày cập nhật:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-700 dark:text-slate-350",
                                            children: new Date(selectedDocument.created_at).toLocaleDateString("vi-VN")
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "🔗 Tệp nguồn: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-600 dark:text-blue-400 break-all",
                                            children: selectedDocument.file_url
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 pt-3 border-t dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedDocument(null),
                            className: "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition",
                            children: "Đóng"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPreviewDoc(selectedDocument);
                                setSelectedDocument(null);
                            },
                            className: "bg-[#13519c] hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition shadow",
                            children: "👁️ Xem tài liệu (Preview)"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/DocDetailModal.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = DocDetailModal;
var _c;
__turbopack_context__.k.register(_c, "DocDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/TutorProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/KntechUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$TutorEkycPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/TutorEkycPanel.tsx [app-client] (ecmascript)");
;
;
;
const SUBJECTS = [
    "Toán",
    "Lý",
    "Hóa",
    "Văn",
    "Tiếng Anh",
    "Sinh học"
];
const YEAR_OPTIONS = [
    "Sinh viên năm 1",
    "Sinh viên năm 2",
    "Sinh viên năm 3",
    "Sinh viên năm 4",
    "Đã tốt nghiệp cử nhân",
    "Thạc sĩ / Cao học",
    "Giảng viên / Giáo viên"
];
const GRADIENTS = [
    {
        name: "Xanh Dương",
        class: "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]"
    },
    {
        name: "Xanh Lá",
        class: "bg-gradient-to-r from-emerald-500 via-teal-600 to-teal-800"
    },
    {
        name: "Sunset",
        class: "bg-gradient-to-r from-rose-500 via-orange-600 to-red-700"
    },
    {
        name: "Midnight",
        class: "bg-gradient-to-r from-purple-600 via-violet-750 to-slate-900"
    }
];
function StepPill({ active, done, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `rounded-full border px-2.5 py-1 text-[10px] font-bold ${done ? "border-emerald-200 bg-emerald-50 text-emerald-700" : active ? "border-[#13519c]/30 bg-blue-50 text-[#13519c]" : "border-slate-200 bg-slate-50 text-slate-400"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = StepPill;
function TeachingProfileForm({ tutorProfileForm, setTutorProfileForm, newCommissionRate, setNewCommissionRate, handleUpdateTutorProfile, submittingVerification, isStepTwo }) {
    const selectedSubjects = tutorProfileForm.subjectsToTeach || [];
    const canSubmit = selectedSubjects.length > 0 && String(tutorProfileForm.school || "").trim() && String(tutorProfileForm.major || "").trim() && String(tutorProfileForm.bio || "").trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleUpdateTutorProfile,
        className: "space-y-4 text-left text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block font-semibold text-slate-500",
                        children: "Trường đào tạo *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        value: tutorProfileForm.school,
                        onChange: (e)=>setTutorProfileForm({
                                ...tutorProfileForm,
                                school: e.target.value
                            }),
                        placeholder: "Ví dụ: Đại học Bách Khoa Hà Nội",
                        className: "h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-1 block font-semibold text-slate-500",
                                children: "Chuyên ngành *"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                value: tutorProfileForm.major,
                                onChange: (e)=>setTutorProfileForm({
                                        ...tutorProfileForm,
                                        major: e.target.value
                                    }),
                                placeholder: "Ví dụ: Sư phạm Toán",
                                className: "h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-1 block font-semibold text-slate-500",
                                children: "Trình độ / Năm học *"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: tutorProfileForm.yearOfStudy,
                                onChange: (e)=>setTutorProfileForm({
                                        ...tutorProfileForm,
                                        yearOfStudy: e.target.value
                                    }),
                                className: "h-10 w-full cursor-pointer rounded-xl border border-slate-250 bg-slate-50 px-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white",
                                children: YEAR_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: option,
                                        children: option
                                    }, option, false, {
                                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block font-semibold text-slate-500",
                        children: "Mức học phí đề xuất (VND / giờ) *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        required: true,
                        min: "1",
                        value: tutorProfileForm.hourlyRate,
                        onChange: (e)=>setTutorProfileForm({
                                ...tutorProfileForm,
                                hourlyRate: e.target.value
                            }),
                        placeholder: "Ví dụ: 150000",
                        className: "h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block font-semibold text-slate-500",
                        children: "Môn học đăng ký giảng dạy *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 pt-1",
                        children: SUBJECTS.map((subject)=>{
                            const active = selectedSubjects.includes(subject);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    const next = active ? selectedSubjects.filter((item)=>item !== subject) : [
                                        ...selectedSubjects,
                                        subject
                                    ];
                                    setTutorProfileForm({
                                        ...tutorProfileForm,
                                        subjectsToTeach: next
                                    });
                                },
                                className: `rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${active ? "border-[#13519c] bg-[#13519c] text-white" : "border-slate-200 bg-white text-slate-655 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,
                                children: subject
                            }, subject, false, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block font-semibold text-slate-500",
                        children: "Giới thiệu bản thân & kinh nghiệm dạy học *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        rows: 4,
                        value: tutorProfileForm.bio,
                        onChange: (e)=>setTutorProfileForm({
                                ...tutorProfileForm,
                                bio: e.target.value
                            }),
                        placeholder: "Giới thiệu phương pháp giảng dạy, kinh nghiệm, thành tích nổi bật...",
                        className: "w-full rounded-xl border border-slate-250 bg-slate-50 p-3 text-slate-900 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block font-semibold text-slate-500",
                        children: "Đề xuất tỉ lệ chiết khấu hoa hồng với hệ thống (%) *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: "1",
                        max: "90",
                        step: "0.1",
                        required: true,
                        value: newCommissionRate,
                        onChange: (e)=>setNewCommissionRate(e.target.value),
                        placeholder: "Ví dụ: 12.5",
                        className: "h-10 w-full rounded-xl border border-slate-250 bg-slate-50 px-3 text-slate-950 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1.5 block font-semibold text-slate-500",
                        children: "Màu thẻ gia sư *"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: GRADIENTS.map((gradient)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setTutorProfileForm({
                                        ...tutorProfileForm,
                                        cardGradient: gradient.class
                                    }),
                                className: `flex h-12 flex-col justify-between rounded-xl border p-2 text-left font-semibold text-white transition ${gradient.class} ${tutorProfileForm.cardGradient === gradient.class ? "ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-950" : "opacity-80 hover:opacity-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate text-[9px]",
                                        children: gradient.name
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "self-end rounded bg-black/20 px-1 text-[7px] uppercase tracking-widest",
                                        children: "Chọn"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, gradient.class, true, {
                                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: submittingVerification || !canSubmit,
                className: "flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-[#13519c] text-xs font-bold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                children: isStepTwo ? "Hoàn tất bước 2 & gửi hồ sơ" : "Cập nhật hồ sơ dạy học"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c1 = TeachingProfileForm;
function TutorProfileModal({ tutorProfileModalOpen, setTutorProfileModalOpen, tutorStatus, tutorRejectReason, tutorProfileForm, setTutorProfileForm, newCommissionRate, setNewCommissionRate, submittingVerification, portraitFile, cccdFrontFile, cccdBackFile, ekycResult, identitySubmitted = false, teachingProfileCompleted = false, registrationStep, setPortraitFile, setCccdFrontFile, setCccdBackFile, setCertificatesFiles, setEkycResult, handleUpdateTutorProfile, handleSubmitVerification, token, showKntechAlert }) {
    if (!tutorProfileModalOpen) return null;
    const isRejected = tutorStatus === "REJECTED";
    const isStepTwo = identitySubmitted && !teachingProfileCompleted && !isRejected;
    const isPendingReview = tutorStatus === "PENDING" && teachingProfileCompleted;
    const isApprovedProfile = tutorStatus === "APPROVED" && teachingProfileCompleted;
    const ekycReady = Boolean(ekycResult?.verification || ekycResult?.status || ekycResult?.scores);
    const canSubmitStepOne = Boolean(portraitFile && cccdFrontFile && cccdBackFile && ekycReady);
    const title = isStepTwo ? "2. Chi tiết hồ sơ dạy học" : isPendingReview ? "Hồ sơ chờ phê duyệt" : isApprovedProfile ? "Thiết lập hồ sơ dạy học" : "1. Xác minh minh chứng & CCCD";
    const validateImage = (file)=>{
        if (file && !file.type.startsWith("image/")) {
            showKntechAlert("error", "Lỗi tệp tin", "Vui lòng chỉ chọn file hình ảnh.");
            return false;
        }
        return true;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border bg-white p-5 shadow-2xl dark:bg-[#111827]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between border-b pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepPill, {
                                            active: !identitySubmitted || isRejected,
                                            done: identitySubmitted && !isRejected,
                                            children: "Bước 1"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepPill, {
                                            active: isStepTwo,
                                            done: teachingProfileCompleted,
                                            children: "Bước 2"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepPill, {
                                            active: isPendingReview || registrationStep === "PENDING_REVIEW",
                                            done: isApprovedProfile,
                                            children: "Duyệt"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setTutorProfileModalOpen(false),
                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                isPendingReview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 py-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-amber-200/40 bg-amber-50 p-3.5 text-xs font-semibold leading-relaxed text-amber-700 dark:bg-amber-950/20 dark:text-amber-350",
                            children: "Hồ sơ xác minh và chi tiết dạy học của bác đang chờ Ban quản trị phê duyệt."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 rounded-xl border border-slate-200/40 bg-slate-50 p-3.5 text-left text-xs text-slate-500 dark:bg-slate-900/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mb-1 block font-bold",
                                    children: "Đã hoàn tất:"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "✓ Giấy tờ định danh và eKYC"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "✓ Chi tiết hồ sơ dạy học"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "✓ Đề xuất chiết khấu hoa hồng"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                    lineNumber: 294,
                    columnNumber: 11
                }, this) : isStepTwo || isApprovedProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachingProfileForm, {
                    tutorProfileForm: tutorProfileForm,
                    setTutorProfileForm: setTutorProfileForm,
                    newCommissionRate: newCommissionRate,
                    setNewCommissionRate: setNewCommissionRate,
                    handleUpdateTutorProfile: handleUpdateTutorProfile,
                    submittingVerification: submittingVerification,
                    isStepTwo: isStepTwo
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmitVerification,
                    className: "space-y-4 text-left text-xs",
                    children: [
                        isRejected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-rose-200/40 bg-rose-50 p-3 font-semibold leading-relaxed text-rose-700 dark:bg-rose-950/20 dark:text-rose-350",
                            children: [
                                "Hồ sơ trước đây đã bị từ chối. Lý do: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: tutorRejectReason || "Chưa có lý do."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 319,
                                    columnNumber: 55
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 318,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-blue-100 bg-blue-50 p-3 leading-relaxed text-blue-800 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300",
                            children: "Bước 1 cần đủ ảnh chân dung, CCCD hai mặt và eKYC hoàn tất. Sau khi lưu, hệ thống sẽ tự mở bước 2."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-1 block font-semibold text-slate-500",
                                    children: "Ảnh chân dung cá nhân *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: "image/*",
                                    value: portraitFile || null,
                                    required: true,
                                    onChange: (files)=>{
                                        const file = files?.[0] || null;
                                        if (!validateImage(file)) return;
                                        setPortraitFile(file);
                                    },
                                    onClear: ()=>setPortraitFile(null),
                                    mainText: "Kéo thả hoặc chọn ảnh chân dung",
                                    allowedText: "PNG, JPG, JPEG, WEBP."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-1 block font-semibold text-slate-500",
                                    children: "CCCD Mặt trước *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: "image/*",
                                    value: cccdFrontFile || null,
                                    required: true,
                                    onChange: (files)=>{
                                        const file = files?.[0] || null;
                                        if (!validateImage(file)) return;
                                        setCccdFrontFile(file);
                                    },
                                    onClear: ()=>setCccdFrontFile(null),
                                    mainText: "Kéo thả hoặc chọn CCCD mặt trước",
                                    allowedText: "PNG, JPG, JPEG, WEBP."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-1 block font-semibold text-slate-500",
                                    children: "CCCD Mặt sau *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accept: "image/*",
                                    value: cccdBackFile || null,
                                    required: true,
                                    onChange: (files)=>{
                                        const file = files?.[0] || null;
                                        if (!validateImage(file)) return;
                                        setCccdBackFile(file);
                                    },
                                    onClear: ()=>setCccdBackFile(null),
                                    mainText: "Kéo thả hoặc chọn CCCD mặt sau",
                                    allowedText: "PNG, JPG, JPEG, WEBP."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$TutorEkycPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            token: token,
                            frontFile: cccdFrontFile,
                            backFile: cccdBackFile,
                            portraitFile: portraitFile,
                            onResultChange: setEkycResult,
                            showKntechAlert: showKntechAlert
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submittingVerification || !canSubmitStepOne,
                            className: "flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-[#13519c] text-xs font-bold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                            children: submittingVerification ? "Đang lưu bước 1..." : ekycReady ? "Lưu bước 1 & sang bước 2" : "Đang chờ eKYC hoàn tất"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
                    lineNumber: 316,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/TutorProfileModal.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c2 = TutorProfileModal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StepPill");
__turbopack_context__.k.register(_c1, "TeachingProfileForm");
__turbopack_context__.k.register(_c2, "TutorProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function isOfficeFile(url, title, mimeType) {
    return mimeType.includes("word") || mimeType.includes("excel") || mimeType.includes("presentation") || mimeType.includes("officedocument") || /\.(docx?|xlsx?|pptx?)($|\?)/i.test(url) || /\.(docx?|xlsx?|pptx?)$/i.test(title);
}
function isImageFile(url, title, mimeType) {
    return mimeType.startsWith("image/") || /\.(png|jpe?g|webp|gif|bmp)($|\?)/i.test(url) || /\.(png|jpe?g|webp|gif|bmp)$/i.test(title);
}
function isPdfFile(url, title, mimeType) {
    return mimeType === "application/pdf" || /\.pdf($|\?)/i.test(url) || /\.pdf$/i.test(title);
}
function getGoogleDriveEmbedUrl(url) {
    const fileDMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileDMatch) {
        return {
            embedUrl: `https://drive.google.com/file/d/${fileDMatch[1]}/preview`,
            isDrive: true
        };
    }
    const openIdMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (openIdMatch) {
        return {
            embedUrl: `https://drive.google.com/file/d/${openIdMatch[1]}/preview`,
            isDrive: true
        };
    }
    return {
        embedUrl: url,
        isDrive: false
    };
}
function DocumentPreviewModal({ previewDoc, onClose }) {
    _s();
    const [iframeFailed, setIframeFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentPreviewModal.useEffect": ()=>{
            setIframeFailed(false);
        }
    }["DocumentPreviewModal.useEffect"], [
        previewDoc?.file_url
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentPreviewModal.useMemo[data]": ()=>{
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
            const iframeUrl = canUseOfficeViewer ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}` : embedUrl;
            return {
                fileUrl,
                title,
                label: image ? "Ảnh" : pdf ? "PDF" : office ? "Office" : isDrive ? "Google Drive" : "Tài liệu",
                image,
                iframeUrl,
                isDrive,
                canFrame: !image
            };
        }
    }["DocumentPreviewModal.useMemo[data]"], [
        previewDoc
    ]);
    if (!previewDoc || !data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#111827]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2 rounded bg-[#13519c] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white",
                                    children: data.label
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block max-w-[60vw] truncate align-middle text-xs font-bold text-slate-800 dark:text-white",
                                    children: data.title
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: data.fileUrl,
                                    download: true,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300",
                                    children: "Tải xuống"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: data.fileUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
                                    children: "Mở tab"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
                                    title: "Đóng",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                data.isDrive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-amber-50 px-4 py-2.5 border-b border-amber-100 dark:bg-amber-950/30 dark:border-amber-900/30 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm shrink-0 leading-none",
                            children: "💡"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Lưu ý về Google Drive:"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                " Nếu tài liệu hiển thị thông báo yêu cầu quyền truy cập, vui lòng kiểm tra và thiết lập quyền chia sẻ của file trên Drive thành ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: '"Bất kỳ ai có đường liên kết đều có thể xem"'
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 182
                                }, this),
                                " (Anyone with the link can view) để mọi người có thể xem trực tiếp."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[60vh] flex-1 bg-slate-100 p-3 dark:bg-slate-950",
                    children: data.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[74vh] items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.fileUrl,
                            alt: data.title,
                            className: "max-h-full max-w-full rounded-lg border border-slate-200 bg-white object-contain shadow dark:border-slate-800"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                            lineNumber: 129,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this) : iframeFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[74vh] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-slate-800 dark:text-white",
                                children: "Không thể hiển thị tài liệu trong iframe."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-md text-xs text-slate-500",
                                children: "Trình duyệt hoặc máy chủ tài liệu có thể chặn nhúng. Bác vẫn có thể tải xuống hoặc mở tài liệu ở tab mới."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: data.fileUrl,
                                        download: true,
                                        className: "rounded-lg bg-[#13519c] px-4 py-2 text-xs font-bold text-white",
                                        children: "Tải xuống"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: data.fileUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200",
                                        children: "Mở tab"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: data.iframeUrl,
                        title: data.title,
                        className: "h-[74vh] w-full rounded-xl border border-slate-200 bg-white shadow dark:border-slate-800",
                        onError: ()=>setIframeFailed(true)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/DocumentPreviewModal.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(DocumentPreviewModal, "9rQDwwoGqfz8BhfXpanvo96mxEU=");
_c = DocumentPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "DocumentPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/web/app/components/modals/NewsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$RichTextEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/RichTextEditor.tsx [app-client] (ecmascript)");
;
;
function NewsModal({ newsFormOpen, setNewsFormOpen, editingNews, newsForm, setNewsForm, handleAddOrEditNews }) {
    if (!newsFormOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl dark:bg-[#111827] border overflow-y-auto max-h-[90vh] text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-3 border-b mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-slate-900 dark:text-white",
                            children: editingNews ? "📰 Cập nhật bài viết tin tức" : "📰 Đăng bài viết tin tức mới"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setNewsFormOpen(false),
                            className: "h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAddOrEditNews,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-500 mb-1 font-semibold",
                                            children: "Tiêu đề tin tức *"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: newsForm.title,
                                            onChange: (e)=>setNewsForm({
                                                    ...newsForm,
                                                    title: e.target.value
                                                }),
                                            className: "w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white",
                                            placeholder: "Nhập tiêu đề..."
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-500 mb-1 font-semibold",
                                            children: "Danh mục bài viết *"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: newsForm.category,
                                            onChange: (e)=>setNewsForm({
                                                    ...newsForm,
                                                    category: e.target.value
                                                }),
                                            className: "w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white",
                                            placeholder: "Ví dụ: Toán, Luyện thi, Thông báo..."
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-500 mb-1 font-semibold",
                                    children: "URL ảnh đại diện (Thumbnail URL)"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newsForm.thumbnailUrl,
                                    onChange: (e)=>setNewsForm({
                                            ...newsForm,
                                            thumbnailUrl: e.target.value
                                        }),
                                    className: "w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white",
                                    placeholder: "https://images.unsplash.com/..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-500 mb-1 font-semibold",
                                    children: "Tóm tắt ngắn gọn *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: newsForm.summary,
                                    onChange: (e)=>setNewsForm({
                                            ...newsForm,
                                            summary: e.target.value
                                        }),
                                    className: "w-full h-10 px-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 focus:bg-white focus:outline-none text-slate-900 dark:bg-slate-900 dark:text-white",
                                    placeholder: "Nhập tóm tắt bài viết..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-500 mb-1 font-semibold",
                                    children: "Nội dung chi tiết tin tức (Word Editor, KaTeX hỗ trợ) *"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$RichTextEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    content: newsForm.content,
                                    onChange: (val)=>setNewsForm({
                                            ...newsForm,
                                            content: val
                                        }),
                                    placeholder: "Nhập toàn bộ nội dung bài viết tin tức tại đây..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2.5 pt-2 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 h-11 bg-gradient-to-r from-blue-600 to-[#13519c] text-white text-xs font-bold rounded-xl transition hover:opacity-90 cursor-pointer shadow",
                                    children: "Lưu & Đăng bài viết"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setNewsFormOpen(false),
                                    className: "w-24 h-11 bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-350 cursor-pointer",
                                    children: "Hủy bỏ"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/modals/NewsModal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = NewsModal;
var _c;
__turbopack_context__.k.register(_c, "NewsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_web_app_components_modals_1s8vvxh._.js.map