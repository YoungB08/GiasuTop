module.exports = [
"[project]/packages/web/app/components/tabs/HomeTab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$MessengerChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/MessengerChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$CustomAlert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/CustomAlert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/avatar.ts [app-ssr] (ecmascript)");
;
;
;
;
function HomeTab({ homeSubTab, setHomeSubTab, handleRegisterNotification, handleTestNotification, tutors, formatVND, setViewingTutor, setSelectedGradeFilter, setActiveTab, showKntechAlert, token, user, chatActivePartner, setChatActivePartner, openAuth }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-white dark:bg-[#111827] rounded-xl p-1 shadow-sm border text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setHomeSubTab("feed"),
                        className: `flex-1 py-2 rounded-lg font-semibold text-center cursor-pointer transition ${homeSubTab === "feed" ? "bg-[#13519c] text-white" : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-list-check mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            "Trang chủ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setHomeSubTab("community"),
                        className: `flex-1 py-2 rounded-lg font-semibold text-center cursor-pointer transition ${homeSubTab === "community" ? "bg-[#13519c] text-white" : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-users mr-2"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            "Cộng đồng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            homeSubTab === "feed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl overflow-hidden shadow-sm border border-slate-200/50 bg-[#e3ecf5] dark:bg-slate-900 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
                                alt: "KNTech Gia Sư Trực Tuyến",
                                className: "w-full h-44 object-cover filter brightness-90"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent p-4 flex flex-col justify-end text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-red-650 px-2 py-0.5 rounded font-bold uppercase tracking-wider w-max mb-1.5",
                                        children: "GIA SƯ CHẤT LƯỢNG CAO"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold leading-tight drop-shadow-md",
                                        children: "TÌM GIA SƯ THỦ KHOA ÔN THI ĐẠI HỌC"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] opacity-90 mt-1",
                                        children: "Kết nối nhanh chóng cùng gia sư giỏi từ Đại học Bách Khoa, Sư Phạm."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-900/60 dark:to-indigo-950/20 border border-indigo-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-indigo-950 dark:text-white flex items-center gap-1.5",
                                    children: "🔔 Nhận đề thi mới và thông báo từ GiaSuTop"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 w-full md:w-auto shrink-0 justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleRegisterNotification,
                                        className: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] px-3.5 py-2 rounded-xl shadow-md transition active:scale-95 cursor-pointer",
                                        children: "Nhận"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleTestNotification,
                                        className: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold text-[10px] px-3.5 py-2 rounded-xl transition active:scale-95 cursor-pointer",
                                        children: "Test thông báo"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-slate-900 dark:text-white",
                                        children: "Gia sư nổi bật hàng đầu"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-[#13519c] font-semibold cursor-pointer hover:underline",
                                        onClick: ()=>{
                                            setSelectedGradeFilter("Tất cả");
                                            setActiveTab("courses");
                                        },
                                        children: "Xem tất cả"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: tutors.slice(0, 4).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/50 dark:border-slate-800 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(t),
                                                        alt: t.full_name,
                                                        className: "h-9 w-9 rounded-full border bg-slate-50 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-950 dark:text-white truncate",
                                                                children: t.full_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 truncate",
                                                                children: t.school
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-0.5 text-[9px] text-amber-500 font-semibold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "⭐ ",
                                                                            (4.7 + t.full_name.charCodeAt(0) % 4 * 0.1).toFixed(1)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400",
                                                                        children: [
                                                                            "(",
                                                                            t.full_name.charCodeAt(1) % 40 + 15,
                                                                            " đánh giá)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2",
                                                children: t.bio || "Gia sư kinh nghiệm chuyên dạy kèm và ôn thi cấp tốc đại học."
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t dark:border-slate-800 flex justify-between items-center text-[10px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-rose-600",
                                                        children: [
                                                            formatVND(t.hourly_rate),
                                                            "/giờ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewingTutor(t),
                                                        className: "bg-[#13519c] hover:bg-blue-800 text-white px-3 py-1 rounded cursor-pointer font-semibold text-[10px]",
                                                        children: "Đăng ký học"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, t.user_id, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pt-4 border-t dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5",
                                    children: "🌟 Đánh giá & Phản hồi Phụ huynh"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    {
                                        id: 1,
                                        student_name: "Bác Minh (Phụ huynh bé Linh)",
                                        rating: 5,
                                        comment: "Gia sư Bách Khoa dạy bé rất hiểu bài, kiên trì chỉ bảo từ cơ bản. Rất hài lòng!",
                                        created_at: "2026-06-12"
                                    },
                                    {
                                        id: 2,
                                        student_name: "Chị Hằng",
                                        rating: 5,
                                        comment: "Phương pháp dạy tiếng Anh bằng sơ đồ tư duy giúp con ghi nhớ nhanh, cải thiện rõ rệt.",
                                        created_at: "2026-06-11"
                                    },
                                    {
                                        id: 3,
                                        student_name: "Anh Đức",
                                        rating: 4,
                                        comment: "Thầy dạy nhiệt tình, bài tập chuẩn bị chu đáo, có báo cáo sau mỗi buổi.",
                                        created_at: "2026-06-10"
                                    },
                                    {
                                        id: 4,
                                        student_name: "Bác Hoa (Lớp 12 ôn thi)",
                                        rating: 5,
                                        comment: "Lộ trình ôn thi rõ ràng, sát đề mẫu Bộ GD. Con tự tin làm bài hơn nhiều.",
                                        created_at: "2026-06-08"
                                    }
                                ].map((rev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#f9fafb] dark:bg-slate-900/60 p-4 rounded-xl border dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-xs text-slate-800 dark:text-slate-200",
                                                        children: rev.student_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-amber-400 text-xs",
                                                        children: [
                                                            "★".repeat(rev.rating),
                                                            "☆".repeat(5 - rev.rating)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 italic",
                                                children: [
                                                    '"',
                                                    rev.comment,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-slate-400 text-right",
                                                children: [
                                                    "📅 ",
                                                    rev.created_at
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, rev.id, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t dark:border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$CustomAlert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertCustomizer"], {
                            onTestAlert: showKntechAlert
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            homeSubTab === "community" && (token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$MessengerChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                token: token,
                currentUser: user,
                chatActivePartner: chatActivePartner,
                onClearActivePartner: ()=>setChatActivePartner(null)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                lineNumber: 202,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-8 text-center text-[11px] text-slate-400 border border-dashed border-slate-200 dark:border-slate-800",
                children: [
                    "🔒 Bác vui lòng ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: ()=>openAuth("login"),
                        className: "text-[#13519c] font-semibold hover:underline cursor-pointer",
                        children: "Đăng nhập / Đăng ký"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                        lineNumber: 210,
                        columnNumber: 29
                    }, this),
                    " tài khoản để tham gia phòng chat cùng gia sư."
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
                lineNumber: 209,
                columnNumber: 11
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/tabs/HomeTab.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/tabs/CoursesTab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/avatar.ts [app-ssr] (ecmascript)");
;
;
;
function CoursesTab({ searchTerm, setSearchTerm, selectedGradeFilter, setSelectedGradeFilter, subjectList, selectedSubject, setSelectedSubject, filteredTutors, tutorGradients, formatVND, setViewingTutor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-900 dark:text-white",
                        children: "Đội Ngũ GiasuTop"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:max-w-[220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSearch"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                placeholder: "Tìm gia sư, trường học...",
                                className: "w-full h-8 pl-8 pr-3 text-xs rounded-lg border bg-white dark:bg-slate-900 focus:outline-none focus:border-[#13519c]"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-2xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                children: "Danh mục gia sư"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            selectedGradeFilter !== "Tất cả" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedGradeFilter("Tất cả"),
                                className: "text-[10px] text-red-650 hover:text-red-500 dark:text-red-400 font-bold transition cursor-pointer",
                                children: "Xóa bộ lọc x"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            {
                                label: "Tất cả gia sư",
                                filter: "Tất cả",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconUser"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                    lineNumber: 65,
                                    columnNumber: 63
                                }, this)
                            },
                            {
                                label: "Gia sư cấp THPT",
                                filter: "Cấp THPT",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconGraduationCap"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                    lineNumber: 66,
                                    columnNumber: 67
                                }, this)
                            },
                            {
                                label: "Gia sư cấp THCS",
                                filter: "Cấp THCS",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconBook"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                    lineNumber: 67,
                                    columnNumber: 67
                                }, this)
                            },
                            {
                                label: "Gia sư Tiểu học",
                                filter: "Cấp Tiểu học",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconStar"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                    lineNumber: 68,
                                    columnNumber: 71
                                }, this)
                            },
                            {
                                label: "Luyện thi Đại học",
                                filter: "Luyện thi ĐH",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconZap"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                    lineNumber: 69,
                                    columnNumber: 73
                                }, this)
                            }
                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedGradeFilter(cat.filter),
                                className: `flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] font-semibold transition cursor-pointer border ${selectedGradeFilter === cat.filter ? "bg-red-50 text-[#C41E3A] border-red-200 dark:bg-red-950/20 dark:text-red-450 dark:border-red-900/50 font-bold shadow-sm" : "bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-655 dark:text-slate-350 border-slate-100 dark:border-slate-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-5.5 w-5.5 rounded-lg flex items-center justify-center shrink-0 transition ${selectedGradeFilter === cat.filter ? "bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white" : "bg-red-100/80 text-[#C41E3A] dark:bg-slate-850 dark:text-red-400"}`,
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cat.label
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.filter, true, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b dark:border-slate-800 overflow-x-auto gap-2",
                children: subjectList.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedSubject(sub),
                        className: `pb-2.5 px-4 text-xs font-semibold cursor-pointer transition-all relative shrink-0 ${selectedSubject === sub ? "text-[#13519c] dark:text-blue-400 font-bold" : "text-slate-400 hover:text-slate-650"}`,
                        children: [
                            sub,
                            selectedSubject === sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#13519c] dark:bg-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, sub, true, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            filteredTutors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-slate-400 text-xs bg-white dark:bg-slate-900 border rounded-xl",
                children: "Chưa tìm thấy gia sư nào phù hợp với bộ lọc và điều kiện tìm kiếm."
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: filteredTutors.map((t, idx)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.01] transition duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 ${t.card_gradient || "bg-gradient-to-r from-blue-600 via-indigo-600 to-[#13519c]"} text-white relative h-28 flex flex-col justify-between`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] bg-black/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider",
                                                children: "GIA SƯ CHUYÊN NGHIỆP"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "max-w-[48%] truncate text-right text-[9px] bg-white/20 px-2 py-0.5 rounded font-semibold",
                                                children: [
                                                    "⭐️ ",
                                                    (4.7 + t.full_name.charCodeAt(0) % 4 * 0.1).toFixed(1),
                                                    " (",
                                                    t.full_name.charCodeAt(1) % 40 + 15,
                                                    " đánh giá)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold leading-tight line-clamp-2",
                                        children: [
                                            "Lớp dạy kèm: ",
                                            t.subjects_to_teach.join(", ")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(t),
                                                alt: t.full_name,
                                                className: "h-10 w-10 rounded-full border bg-slate-50 shrink-0 object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 148,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                        children: t.full_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 truncate font-semibold",
                                                        children: [
                                                            t.school,
                                                            " (",
                                                            t.major || "Chuyên ngành",
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed",
                                        children: t.bio || "Gia sư tận tâm dạy bám sát chương trình học, giúp con củng cố kiến thức và đạt điểm tốt."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 border-t pt-3 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[9px] uppercase font-bold text-slate-400",
                                                        children: "Học phí đề xuất"
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-rose-600",
                                                        children: [
                                                            formatVND(t.hourly_rate),
                                                            "/giờ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewingTutor(t),
                                                className: "flex h-9 w-full items-center justify-center rounded-lg bg-[#13519c] px-4 text-xs font-bold text-white transition hover:bg-blue-800 cursor-pointer sm:w-auto",
                                                children: "Đăng ký học ngay"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this)
                        ]
                    }, t.user_id, true, {
                        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                        lineNumber: 122,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/tabs/CoursesTab.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/tabs/AdminTab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/avatar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/components/KntechDataTable.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function AdminTab({ adminTab, setAdminTab, pendingTutors, pendingDocs, news, dbSubjects, pendingCommissions, subjectNameInput, setSubjectNameInput, handleAddOrEditSubject, setEditingSubject, handleDeleteSubject, loadingPendingDocs, handleDecideDocument, setEditingNews, setNewsForm, setNewsFormOpen, handleDeleteNews, loadingPending, handleDecideTutor, setRejectingTutorId, systemStats, systemLogs, fetchSystemLogs, fetchSystemStats, systemUsers, fetchSystemUsers, handleEditUserClick, loadingCommissions, handleDecideCommission, fetchPendingCommissions, adminNotificationForm, setAdminNotificationForm, handleSendAdminNotification, sendingAdminNotification, formatVND, fetchPendingTutors, setPreviewDoc }) {
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    const [previewImageUrl, setPreviewImageUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const handleDeleteTutorDoc = async (docId)=>{
        if (!window.confirm("Bác có chắc chắn muốn xóa tài liệu minh chứng này?")) return;
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/admin/tutor-documents/${docId}`), {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.success) {
                alert("Đã xóa tài liệu thành công!");
                fetchPendingTutors();
            } else {
                alert(json.message || "Lỗi khi xóa tài liệu.");
            }
        } catch (e) {
            console.error(e);
            alert("Lỗi kết nối máy chủ.");
        }
    };
    // Stats Dashboard States
    const [dashboardData, setDashboardData] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [loadingDashboard, setLoadingDashboard] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [activePopup, setActivePopup] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [escrowAppointments, setEscrowAppointments] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [loadingEscrow, setLoadingEscrow] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [releasingEscrowId, setReleasingEscrowId] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [escrowNoteTarget, setEscrowNoteTarget] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [escrowAdminNote, setEscrowAdminNote] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [escrowToast, setEscrowToast] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [withdrawRequests, setWithdrawRequests] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [loadingWithdrawRequests, setLoadingWithdrawRequests] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [decidingWithdrawId, setDecidingWithdrawId] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [rejectingWithdraw, setRejectingWithdraw] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [withdrawRejectReason, setWithdrawRejectReason] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [withdrawToast, setWithdrawToast] = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const fetchDashboardData = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (adminTab === "dashboard") {
            fetchDashboardData();
        }
    }, [
        adminTab
    ]);
    const fetchEscrowAppointments = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    const handleReleaseEscrow = async (appointmentId, adminNote = "")=>{
        setReleasingEscrowId(appointmentId);
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/admin/escrow/${appointmentId}/release`), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    adminNote
                })
            });
            const json = await res.json();
            if (json.success) {
                setEscrowToast({
                    type: "success",
                    message: "Đã duyệt trả tiền vào ví khả dụng của gia sư."
                });
                setEscrowNoteTarget(null);
                setEscrowAdminNote("");
                fetchEscrowAppointments();
                fetchDashboardData();
            } else {
                setEscrowToast({
                    type: "error",
                    message: json.message || "Không thể duyệt trả khoản giam."
                });
            }
        } catch (e) {
            console.error("Lỗi duyệt trả tiền giam:", e);
            setEscrowToast({
                type: "error",
                message: "Lỗi kết nối khi duyệt trả tiền giam."
            });
        } finally{
            setReleasingEscrowId(null);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (adminTab === "escrow") {
            fetchEscrowAppointments();
        }
    }, [
        adminTab
    ]);
    const fetchWithdrawRequests = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    const handleDecideWithdrawRequest = async (withdrawId, decision, adminNote = "")=>{
        setDecidingWithdrawId(withdrawId);
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/admin/withdrawals/decide"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    withdrawId,
                    decision,
                    adminNote: adminNote || null
                })
            });
            const json = await res.json();
            if (json.success) {
                setWithdrawToast({
                    type: "success",
                    message: decision === "APPROVED" ? "Da duyet yeu cau rut tien." : "Da tu choi va hoan tien ve vi user."
                });
                setRejectingWithdraw(null);
                setWithdrawRejectReason("");
                fetchWithdrawRequests();
            } else {
                setWithdrawToast({
                    type: "error",
                    message: json.message || "Khong the xu ly yeu cau rut tien."
                });
            }
        } catch (e) {
            console.error("Loi xu ly rut tien:", e);
            setWithdrawToast({
                type: "error",
                message: "Loi ket noi khi xu ly yeu cau rut tien."
            });
        } finally{
            setDecidingWithdrawId(null);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (adminTab === "withdrawals") {
            fetchWithdrawRequests();
        }
    }, [
        adminTab
    ]);
    // Columns Definitions for Datatables
    const subjectColumns = [
        {
            key: "id",
            label: "ID",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400 font-mono",
                    children: [
                        "#",
                        row.id
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 280,
                    columnNumber: 64
                }, this)
        },
        {
            key: "name",
            label: "Tên Môn Học",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-700 dark:text-slate-200",
                    children: row.name
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 281,
                    columnNumber: 75
                }, this)
        },
        {
            key: "actions",
            label: "Hành Động",
            sortable: false,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-x-2 text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setEditingSubject(row);
                                setSubjectNameInput(row.name);
                            },
                            className: "inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer",
                            children: "Sửa"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDeleteSubject(row.id),
                            className: "inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-350 transition cursor-pointer",
                            children: "Xóa"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
        }
    ];
    const newsColumns = [
        {
            key: "title",
            label: "Tiêu đề",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[240px]",
                    title: row.title,
                    children: row.title
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 311,
                    columnNumber: 72
                }, this)
        },
        {
            key: "category",
            label: "Danh mục",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold",
                    children: row.category
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
        },
        {
            key: "created_at",
            label: "Ngày đăng",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-500",
                    children: new Date(row.created_at).toLocaleDateString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 326,
                    columnNumber: 24
                }, this)
        },
        {
            key: "actions",
            label: "Thao tác",
            sortable: false,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-x-2 text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setEditingNews(row);
                                setNewsForm({
                                    title: row.title,
                                    summary: row.summary || "",
                                    content: row.content,
                                    thumbnailUrl: row.thumbnail_url || "",
                                    category: row.category
                                });
                                setNewsFormOpen(true);
                            },
                            className: "inline-flex items-center gap-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer",
                            children: "Sửa"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleDeleteNews(row.id),
                            className: "inline-flex items-center gap-0.5 text-xs font-semibold text-red-500 hover:underline cursor-pointer",
                            children: "Xóa"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
        }
    ];
    const userColumns = [
        {
            key: "full_name",
            label: "Họ tên / Email",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-slate-700 dark:text-slate-200",
                            children: row.full_name
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400 font-mono mt-0.5",
                            children: row.email
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
        },
        {
            key: "role",
            label: "Vai trò",
            sortable: true,
            render: (row)=>{
                let badge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
                if (row.role === "ADMIN") badge = "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/40";
                else if (row.role === "TUTOR") badge = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40";
                else if (row.role === "STUDENT") badge = "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/40";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded-full font-semibold text-[10px] ${badge}`,
                    children: row.role
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 384,
                    columnNumber: 16
                }, this);
            }
        },
        {
            key: "status",
            label: "Trạng thái",
            sortable: true,
            render: (row)=>{
                let badge = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
                if (row.status === "ACTIVE") badge = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/40";
                else if (row.status === "BANNED") badge = "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/40";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded-full font-semibold text-[10px] ${badge}`,
                    children: row.status
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 395,
                    columnNumber: 16
                }, this);
            }
        },
        {
            key: "actions",
            label: "Hành động",
            sortable: false,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleEditUserClick(row),
                    className: "inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer",
                    children: "Sửa"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
        }
    ];
    const logColumns = [
        {
            key: "created_at",
            label: "Thời gian",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400 font-mono",
                    children: new Date(row.created_at).toLocaleString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 419,
                    columnNumber: 24
                }, this)
        },
        {
            key: "ip",
            label: "IP Address",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: row.ip
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 421,
                    columnNumber: 72
                }, this)
        },
        {
            key: "action",
            label: "Action",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold text-[9px]",
                    children: row.action
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, this)
        },
        {
            key: "details",
            label: "Details",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-slate-600 dark:text-slate-355 break-all whitespace-pre-wrap max-w-xl",
                    title: row.details || "",
                    children: row.details
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
        }
    ];
    // Popup Columns definitions
    const tutorColumns = [
        {
            key: "full_name",
            label: "Họ tên",
            sortable: true
        },
        {
            key: "email",
            label: "Email",
            sortable: true
        },
        {
            key: "phone",
            label: "SĐT",
            sortable: true
        },
        {
            key: "school",
            label: "Trường học",
            sortable: true
        },
        {
            key: "major",
            label: "Chuyên ngành",
            sortable: true
        },
        {
            key: "year_of_study",
            label: "Năm học",
            sortable: true
        },
        {
            key: "hourly_rate",
            label: "Học phí",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-semibold",
                    children: [
                        formatVND(row.hourly_rate),
                        "/h"
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 456,
                    columnNumber: 24
                }, this)
        },
        {
            key: "commission_percent",
            label: "Chiết khấu",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-bold text-indigo-600",
                    children: [
                        row.commission_percent,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 462,
                    columnNumber: 24
                }, this)
        },
        {
            key: "is_verified",
            label: "Duyệt",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded text-[10px] font-bold ${row.is_verified === "APPROVED" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" : row.is_verified === "PENDING" ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/20"}`,
                    children: row.is_verified
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this)
        }
    ];
    const studentColumns = [
        {
            key: "full_name",
            label: "Họ tên",
            sortable: true
        },
        {
            key: "email",
            label: "Email",
            sortable: true
        },
        {
            key: "phone",
            label: "SĐT",
            sortable: true
        },
        {
            key: "status",
            label: "Trạng thái",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded text-[10px] font-bold ${row.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/20"}`,
                    children: row.status
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this)
        },
        {
            key: "created_at",
            label: "Ngày đăng ký",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: new Date(row.created_at).toLocaleDateString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 500,
                    columnNumber: 24
                }, this)
        }
    ];
    const appointmentColumns = [
        {
            key: "id",
            label: "Mã lớp",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-400",
                    children: [
                        "#",
                        row.id
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 505,
                    columnNumber: 68
                }, this)
        },
        {
            key: "tutor_name",
            label: "Gia sư",
            sortable: true
        },
        {
            key: "student_name",
            label: "Học viên",
            sortable: true
        },
        {
            key: "start_time",
            label: "Bắt đầu",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: new Date(row.start_time).toLocaleString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 512,
                    columnNumber: 24
                }, this)
        },
        {
            key: "price_paid",
            label: "Phí thanh toán",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-bold text-slate-700 dark:text-slate-200",
                    children: formatVND(row.price_paid)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 518,
                    columnNumber: 24
                }, this)
        },
        {
            key: "status",
            label: "Trạng thái",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded text-[10px] font-bold ${row.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20" : row.status === "CANCELLED" ? "bg-rose-50 text-rose-700 dark:bg-rose-950/20" : "bg-blue-50 text-blue-700 dark:bg-blue-950/20"}`,
                    children: row.status
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this)
        },
        {
            key: "payment_status",
            label: "Thanh toán",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-500",
                    children: row.payment_status
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
        }
    ];
    const paymentColumns = [
        {
            key: "id",
            label: "Mã lớp",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-400",
                    children: [
                        "#",
                        row.id
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 545,
                    columnNumber: 68
                }, this)
        },
        {
            key: "tutor_name",
            label: "Gia sư",
            sortable: true
        },
        {
            key: "student_name",
            label: "Học viên",
            sortable: true
        },
        {
            key: "price_paid",
            label: "Doanh thu giao dịch",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-650 dark:text-slate-350",
                    children: formatVND(row.price_paid)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 552,
                    columnNumber: 24
                }, this)
        },
        {
            key: "commission_percent",
            label: "Tỉ lệ",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-500",
                    children: [
                        row.commission_percent,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 558,
                    columnNumber: 24
                }, this)
        },
        {
            key: "commission_amount",
            label: "Hoa hồng thực thu",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-bold text-rose-600 dark:text-rose-450",
                    children: formatVND(row.commission_amount)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 564,
                    columnNumber: 24
                }, this)
        },
        {
            key: "created_at",
            label: "Ngày thanh toán",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: new Date(row.created_at).toLocaleDateString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 570,
                    columnNumber: 24
                }, this)
        }
    ];
    const escrowColumns = [
        {
            key: "id",
            label: "Mã lớp",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-400",
                    children: [
                        "#",
                        row.id
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 575,
                    columnNumber: 68
                }, this)
        },
        {
            key: "tutor_name",
            label: "Gia sư",
            sortable: true
        },
        {
            key: "student_name",
            label: "Học viên",
            sortable: true
        },
        {
            key: "price_paid",
            label: "Doanh thu",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-semibold",
                    children: formatVND(row.price_paid)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 582,
                    columnNumber: 24
                }, this)
        },
        {
            key: "commission_amount",
            label: "Hoa hồng",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-rose-600 font-semibold",
                    children: formatVND(row.commission_amount || 0)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 588,
                    columnNumber: 24
                }, this)
        },
        {
            key: "tutor_earning",
            label: "Trả gia sư",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-emerald-600 font-bold",
                    children: formatVND(row.tutor_earning || 0)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 594,
                    columnNumber: 24
                }, this)
        },
        {
            key: "escrow_release_date",
            label: "Tự mở giam",
            sortable: true,
            render: (row)=>row.escrow_release_date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: new Date(row.escrow_release_date).toLocaleString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 600,
                    columnNumber: 50
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400",
                    children: "-"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 600,
                    columnNumber: 125
                }, this)
        },
        {
            key: "actions",
            label: "Thao tác",
            sortable: false,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    disabled: releasingEscrowId === row.id,
                    onClick: ()=>{
                        setEscrowNoteTarget(row.id);
                        setEscrowAdminNote("");
                    },
                    className: "rounded bg-emerald-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-emerald-700 disabled:opacity-50",
                    children: releasingEscrowId === row.id ? "Đang trả..." : "Duyệt trả ví"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 607,
                    columnNumber: 9
                }, this)
        }
    ];
    const withdrawColumns = [
        {
            key: "id",
            label: "Ma YC",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-slate-400",
                    children: [
                        "#",
                        row.id
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 627,
                    columnNumber: 24
                }, this)
        },
        {
            key: "full_name",
            label: "Nguoi rut",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-slate-700 dark:text-slate-200",
                            children: row.full_name || "-"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400 font-mono mt-0.5",
                            children: row.email
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 634,
                    columnNumber: 9
                }, this)
        },
        {
            key: "amount",
            label: "So tien",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono font-bold text-rose-600",
                    children: formatVND(row.amount)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 644,
                    columnNumber: 24
                }, this)
        },
        {
            key: "bank_name",
            label: "Ngan hang",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-slate-700 dark:text-slate-200",
                            children: row.bank_name || "-"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400",
                            children: row.bank_code || "-"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this)
        },
        {
            key: "bank_account_no",
            label: "Tai khoan",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono font-semibold",
                            children: row.bank_account_no
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400",
                            children: row.bank_account_name
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 662,
                    columnNumber: 9
                }, this)
        },
        {
            key: "status",
            label: "Trang thai",
            sortable: true,
            render: (row)=>{
                const badge = row.status === "APPROVED" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : row.status === "REJECTED" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-amber-50 text-amber-700 border-amber-200";
                const label = row.status === "APPROVED" ? "Da duyet" : row.status === "REJECTED" ? "Tu choi" : "Cho duyet";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `rounded-full border px-2 py-0.5 text-[10px] font-bold ${badge}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 680,
                    columnNumber: 16
                }, this);
            }
        },
        {
            key: "created_at",
            label: "Thoi gian",
            sortable: true,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: new Date(row.created_at).toLocaleString("vi-VN")
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 687,
                    columnNumber: 24
                }, this)
        },
        {
            key: "actions",
            label: "Thao tac",
            sortable: false,
            render: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: row.status !== "PENDING" || decidingWithdrawId === row.id,
                            onClick: ()=>handleDecideWithdrawRequest(Number(row.id), "APPROVED"),
                            className: "rounded bg-emerald-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40",
                            children: "Duyet"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: row.status !== "PENDING" || decidingWithdrawId === row.id,
                            onClick: ()=>{
                                setRejectingWithdraw(row);
                                setWithdrawRejectReason(row.admin_note || "");
                            },
                            className: "rounded bg-rose-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40",
                            children: "Tu choi"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 694,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("dashboard"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "dashboard" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "📊 Tổng Quan Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("subjects"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "subjects" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "📚 Môn Học"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("tutors"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "tutors" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: [
                            "👩‍🏫 Duyệt Giáo Viên (",
                            pendingTutors.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("pending_docs"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "pending_docs" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: [
                            "📁 Duyệt Tài Liệu (",
                            pendingDocs.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("news_crud"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "news_crud" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "📰 Quản Lý Tin Tức"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 759,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("notifications"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "notifications" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "Thông báo"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAdminTab("escrow"),
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "escrow" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "Giữ tiền"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 777,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setAdminTab("withdrawals");
                            fetchWithdrawRequests();
                        },
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "withdrawals" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "Rut tien"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setAdminTab("monitor");
                            fetchSystemStats();
                            fetchSystemLogs();
                        },
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "monitor" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "🖥️ Hệ Thống Logs"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 798,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setAdminTab("users");
                            fetchSystemUsers();
                        },
                        className: `pb-3 text-xs font-semibold px-3 cursor-pointer shrink-0 transition relative ${adminTab === "users" ? "text-[#13519c] border-b-2 border-[#13519c]" : "text-slate-400 hover:text-slate-600"}`,
                        children: "👥 Người Dùng"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            adminTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: loadingDashboard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-xs font-semibold text-slate-400",
                    children: "⌛ Đang tải dữ liệu thống kê..."
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 828,
                    columnNumber: 13
                }, this) : !dashboardData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-xs text-rose-500 font-semibold",
                    children: "❌ Không thể tải dữ liệu thống kê từ hệ thống."
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 830,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 lg:grid-cols-5 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActivePopup("tutors"),
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "👨‍🏫 Gia sư/Tutors"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 839,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-2xl font-black text-[#13519c] dark:text-blue-400",
                                            children: dashboardData.summary.totalTutors
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 840,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[8px] text-slate-400 mt-1",
                                            children: "Bấm xem chi tiết 🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 843,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 835,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActivePopup("students"),
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "👥 Học sinh/Sinh viên"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 851,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-2xl font-black text-emerald-600 dark:text-emerald-400",
                                            children: dashboardData.summary.totalStudents
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 852,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[8px] text-slate-400 mt-1",
                                            children: "Bấm xem chi tiết 🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 855,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 847,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActivePopup("appointments"),
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "📅 Lớp học/Lịch hẹn"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 863,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-2xl font-black text-indigo-600 dark:text-indigo-400",
                                            children: dashboardData.summary.totalAppointments
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 864,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[8px] text-slate-400 mt-1",
                                            children: "Bấm xem chi tiết 🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 867,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 859,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActivePopup("payments"),
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "💳 Doanh thu ví"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 875,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-lg font-black text-amber-600 dark:text-amber-400 truncate",
                                            children: formatVND(dashboardData.summary.totalRevenue)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[8px] text-slate-400 mt-1",
                                            children: "Bấm xem chi tiết 🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 879,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 871,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActivePopup("payments"),
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 text-left col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "🤝 Hoa hồng hệ thống"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 887,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-lg font-black text-rose-600 dark:text-rose-450 truncate",
                                            children: formatVND(dashboardData.summary.totalCommission)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 888,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[8px] text-slate-400 mt-1",
                                            children: "Bấm xem chi tiết 🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 891,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 883,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 833,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                            children: "📈 Xu hướng Doanh thu & Chiết khấu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400 mt-0.5",
                                                            children: "Biểu đồ 7 ngày giao dịch gần nhất"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                            lineNumber: 902,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 text-[10px] font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2.5 h-2.5 rounded bg-blue-500 inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 65
                                                                }, this),
                                                                " Doanh thu"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2.5 h-2.5 rounded bg-rose-500 inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 65
                                                                }, this),
                                                                " Hoa hồng"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 899,
                                            columnNumber: 19
                                        }, this),
                                        (()=>{
                                            // Compute last 7 days stats
                                            const last7Days = Array.from({
                                                length: 7
                                            }, (_, i)=>{
                                                const d = new Date();
                                                d.setDate(d.getDate() - i);
                                                return d.toISOString().split("T")[0];
                                            }).reverse();
                                            const dailyStats = last7Days.map((dateStr)=>{
                                                let rev = 0;
                                                let comm = 0;
                                                if (dashboardData.payments) {
                                                    dashboardData.payments.forEach((p)=>{
                                                        const pDate = new Date(p.created_at).toISOString().split("T")[0];
                                                        if (pDate === dateStr) {
                                                            rev += Number(p.price_paid || 0);
                                                            comm += Number(p.commission_amount || 0);
                                                        }
                                                    });
                                                }
                                                return {
                                                    date: dateStr,
                                                    revenue: rev,
                                                    commission: comm
                                                };
                                            });
                                            const maxRev = Math.max(...dailyStats.map((s)=>s.revenue), 100000);
                                            // Generate points for SVG path (Width: 500, Height: 150)
                                            const pointsRev = dailyStats.map((s, idx)=>{
                                                const x = (idx * (500 / 6)).toFixed(1);
                                                const y = (150 - s.revenue / maxRev * 110 - 20).toFixed(1);
                                                return `${x},${y}`;
                                            });
                                            const pointsComm = dailyStats.map((s, idx)=>{
                                                const x = (idx * (500 / 6)).toFixed(1);
                                                const y = (150 - s.commission / maxRev * 110 - 20).toFixed(1);
                                                return `${x},${y}`;
                                            });
                                            const pathRev = `M 0,150 L ${pointsRev.join(" L ")} L 500,150 Z`;
                                            const lineRev = `M ${pointsRev.join(" L ")}`;
                                            const pathComm = `M 0,150 L ${pointsComm.join(" L ")} L 500,150 Z`;
                                            const lineComm = `M ${pointsComm.join(" L ")}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 500 150",
                                                        className: "w-full overflow-visible",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "colorRev",
                                                                        x1: "0",
                                                                        y1: "0",
                                                                        x2: "0",
                                                                        y2: "1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "5%",
                                                                                stopColor: "#3b82f6",
                                                                                stopOpacity: 0.25
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 959,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "95%",
                                                                                stopColor: "#3b82f6",
                                                                                stopOpacity: 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 960,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 958,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "colorComm",
                                                                        x1: "0",
                                                                        y1: "0",
                                                                        x2: "0",
                                                                        y2: "1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "5%",
                                                                                stopColor: "#f43f5e",
                                                                                stopOpacity: 0.25
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 963,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "95%",
                                                                                stopColor: "#f43f5e",
                                                                                stopOpacity: 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "20",
                                                                x2: "500",
                                                                y2: "20",
                                                                stroke: "#f1f5f9",
                                                                className: "dark:stroke-slate-800",
                                                                strokeDasharray: "3,3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 969,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "75",
                                                                x2: "500",
                                                                y2: "75",
                                                                stroke: "#f1f5f9",
                                                                className: "dark:stroke-slate-800",
                                                                strokeDasharray: "3,3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 970,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "130",
                                                                x2: "500",
                                                                y2: "130",
                                                                stroke: "#e2e8f0",
                                                                className: "dark:stroke-slate-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: pathRev,
                                                                fill: "url(#colorRev)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 974,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: pathComm,
                                                                fill: "url(#colorComm)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: lineRev,
                                                                fill: "none",
                                                                stroke: "#3b82f6",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 978,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: lineComm,
                                                                fill: "none",
                                                                stroke: "#f43f5e",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 27
                                                            }, this),
                                                            pointsRev.map((pt, idx)=>{
                                                                const [x, y] = pt.split(",");
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: x,
                                                                            cy: y,
                                                                            r: "4",
                                                                            fill: "#3b82f6",
                                                                            stroke: "#ffffff",
                                                                            strokeWidth: "1.5",
                                                                            className: "cursor-pointer hover:r-6 transition"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                            lineNumber: 986,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: x,
                                                                            y: parseFloat(y) - 8,
                                                                            textAnchor: "middle",
                                                                            className: "text-[7px] font-bold fill-slate-500 dark:fill-slate-400",
                                                                            children: dailyStats[idx].revenue > 0 ? `${(dailyStats[idx].revenue / 1000).toFixed(0)}k` : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                            lineNumber: 987,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, `dot-rev-${idx}`, true, {
                                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                    lineNumber: 985,
                                                                    columnNumber: 31
                                                                }, this);
                                                            }),
                                                            pointsComm.map((pt, idx)=>{
                                                                const [x, y] = pt.split(",");
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: x,
                                                                    cy: y,
                                                                    r: "3",
                                                                    fill: "#f43f5e",
                                                                    stroke: "#ffffff",
                                                                    strokeWidth: "1",
                                                                    className: "cursor-pointer"
                                                                }, `dot-comm-${idx}`, false, {
                                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                    lineNumber: 997,
                                                                    columnNumber: 31
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mt-2 px-1 text-[8px] font-bold text-slate-400",
                                                        children: dailyStats.map((s, idx)=>{
                                                            const d = new Date(s.date);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    d.getDate(),
                                                                    "/",
                                                                    d.getMonth() + 1
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1006,
                                                                columnNumber: 36
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 955,
                                                columnNumber: 23
                                            }, this);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 898,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                    children: "📊 Trạng thái lớp học & Tài khoản"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 mt-0.5",
                                                    children: "Tỉ lệ lớp học và phân bổ thành viên"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 19
                                        }, this),
                                        (()=>{
                                            const appts = dashboardData.appointments || [];
                                            const tutors = dashboardData.tutors || [];
                                            const students = dashboardData.students || [];
                                            // Appts status breakdown
                                            let completed = 0;
                                            let holding = 0;
                                            let cancelled = 0;
                                            let others = 0;
                                            appts.forEach((a)=>{
                                                if (a.status === "COMPLETED") completed++;
                                                else if (a.status === "CANCELLED") cancelled++;
                                                else if (a.payment_status === "HOLDING") holding++;
                                                else others++;
                                            });
                                            const totalAppts = appts.length || 1;
                                            const compPct = completed / totalAppts * 100;
                                            const holdPct = holding / totalAppts * 100;
                                            const cancPct = cancelled / totalAppts * 100;
                                            const otherPct = 100 - compPct - holdPct - cancPct;
                                            // User breakdown
                                            const totalUsers = tutors.length + students.length || 1;
                                            const tutorPct = tutors.length / totalUsers * 100;
                                            const studentPct = students.length / totalUsers * 100;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-20 h-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 36 36",
                                                                        className: "w-full h-full transform -rotate-90",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#f1f5f9",
                                                                                className: "dark:stroke-slate-800",
                                                                                strokeWidth: "3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1056,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            compPct > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#10b981",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: `${compPct} ${100 - compPct}`,
                                                                                strokeDashoffset: 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1060,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            holdPct > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#3b82f6",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: `${holdPct} ${100 - holdPct}`,
                                                                                strokeDashoffset: -compPct
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1065,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            cancPct > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#ef4444",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: `${cancPct} ${100 - cancPct}`,
                                                                                strokeDashoffset: -(compPct + holdPct)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1070,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1055,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-black text-slate-800 dark:text-white",
                                                                                children: appts.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1075,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[7px] text-slate-400 font-bold uppercase",
                                                                                children: "Lớp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1076,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1074,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1054,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-1 w-full text-[9px] font-semibold text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#10b981]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                        lineNumber: 1081,
                                                                                        columnNumber: 122
                                                                                    }, this),
                                                                                    " Xong"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1081,
                                                                                columnNumber: 80
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: completed
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1081,
                                                                                columnNumber: 198
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1081,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#3b82f6]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                        lineNumber: 1082,
                                                                                        columnNumber: 122
                                                                                    }, this),
                                                                                    " Giữ tiền"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1082,
                                                                                columnNumber: 80
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: holding
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1082,
                                                                                columnNumber: 202
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1082,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#ef4444]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                        lineNumber: 1083,
                                                                                        columnNumber: 122
                                                                                    }, this),
                                                                                    " Hủy"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1083,
                                                                                columnNumber: 80
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: cancelled
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1083,
                                                                                columnNumber: 197
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1083,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1080,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-20 h-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 36 36",
                                                                        className: "w-full h-full transform -rotate-90",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#f1f5f9",
                                                                                className: "dark:stroke-slate-800",
                                                                                strokeWidth: "3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1091,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#8b5cf6",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: `${tutorPct} ${100 - tutorPct}`,
                                                                                strokeDashoffset: 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1092,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "18",
                                                                                cy: "18",
                                                                                r: "15.915",
                                                                                fill: "none",
                                                                                stroke: "#ec4899",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: `${studentPct} ${100 - studentPct}`,
                                                                                strokeDashoffset: -tutorPct
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1094,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1090,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-black text-slate-800 dark:text-white",
                                                                                children: tutors.length + students.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1098,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[7px] text-slate-400 font-bold uppercase",
                                                                                children: "M.viên"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1099,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1097,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-1 w-full text-[9px] font-semibold text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                        lineNumber: 1104,
                                                                                        columnNumber: 122
                                                                                    }, this),
                                                                                    " Gia sư"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1104,
                                                                                columnNumber: 80
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tutors.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1104,
                                                                                columnNumber: 200
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1104,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#ec4899]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                        lineNumber: 1105,
                                                                                        columnNumber: 122
                                                                                    }, this),
                                                                                    " H.Sinh"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1105,
                                                                                columnNumber: 80
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: students.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                                lineNumber: 1105,
                                                                                columnNumber: 200
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1088,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1051,
                                                columnNumber: 23
                                            }, this);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 896,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 dark:bg-slate-900/40 p-4 border border-slate-200/60 dark:border-slate-800 rounded-2xl text-left text-xs leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-600 dark:text-slate-350 block mb-1",
                                    children: "💡 Hướng dẫn thống kê:"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1116,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500",
                                    children: "Dashboard cung cấp số liệu tổng quan trực tiếp từ hệ thống. Các giá trị Doanh thu và Hoa hồng được tính toán dựa trên các lịch hẹn đã thanh toán và đang được nắm giữ (Holding/Released). Vui lòng bấm trực tiếp vào các thẻ số liệu phía trên để hiển thị bảng dữ liệu chi tiết tương ứng cùng tính năng tìm kiếm, phân trang và sắp xếp."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1115,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 832,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 826,
                columnNumber: 9
            }, this),
            adminTab === "subjects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddOrEditSubject,
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập tên môn học...",
                                value: subjectNameInput,
                                onChange: (e)=>setSubjectNameInput(e.target.value),
                                className: "flex-1 h-9 px-3 text-xs rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-[#13519c] text-white text-xs font-semibold px-4 rounded-lg cursor-pointer hover:bg-blue-800 transition",
                                children: "Lưu môn"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        columns: subjectColumns,
                        data: dbSubjects,
                        searchPlaceholder: "Tìm kiếm môn học..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1129,
                columnNumber: 9
            }, this),
            adminTab === "pending_docs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm",
                        children: "Tài liệu chờ duyệt"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1157,
                        columnNumber: 11
                    }, this),
                    loadingPendingDocs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Đang tải tài liệu..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1159,
                        columnNumber: 13
                    }, this) : pendingDocs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-400 text-center py-4",
                        children: "Không có tài liệu nào chờ phê duyệt."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1161,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: pendingDocs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border dark:border-slate-800 rounded-lg bg-slate-50/40 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                onClick: ()=>setPreviewDoc({
                                                        title: doc.title,
                                                        file_url: doc.file_url
                                                    }),
                                                className: "font-semibold text-[#13519c] dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1",
                                                title: "Click để mở xem trước tài liệu",
                                                children: [
                                                    doc.title,
                                                    " 🔎"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400 mt-1",
                                                children: [
                                                    "Lớp: ",
                                                    doc.grade_tag,
                                                    " | Môn: ",
                                                    doc.subject_tag,
                                                    " | Loại: ",
                                                    doc.type_tag
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1174,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400",
                                                children: [
                                                    "Tải lên bởi: ",
                                                    doc.uploader_name,
                                                    " | URL: ",
                                                    doc.file_url
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDecideDocument(doc.id, "APPROVED"),
                                                className: "bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer text-[10px] font-bold",
                                                children: "Phê duyệt"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDecideDocument(doc.id, "REJECTED"),
                                                className: "bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer text-[10px] font-bold",
                                                children: "Từ chối"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, doc.id, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1165,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1163,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1156,
                columnNumber: 9
            }, this),
            adminTab === "news_crud" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-xs text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm",
                                children: "Quản lý tin tức hệ thống"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setEditingNews(null);
                                    setNewsForm({
                                        title: "",
                                        summary: "",
                                        content: "",
                                        thumbnailUrl: "",
                                        category: "Toán"
                                    });
                                    setNewsFormOpen(true);
                                },
                                className: "bg-[#13519c] hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition shadow",
                                children: "Thêm bài tin mới"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        columns: newsColumns,
                        data: news,
                        searchPlaceholder: "Tìm kiếm tin tức..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1204,
                columnNumber: 9
            }, this),
            adminTab === "tutors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 border dark:border-slate-800 space-y-4 text-xs text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm",
                        children: "Gia sư cần duyệt hồ sơ"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1230,
                        columnNumber: 11
                    }, this),
                    loadingPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Đang tải hồ sơ..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1232,
                        columnNumber: 13
                    }, this) : pendingTutors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-400 text-center py-4",
                        children: "Không có gia sư nào đang chờ phê duyệt."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1234,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: pendingTutors.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl border dark:border-slate-800 bg-slate-50/40 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(pt),
                                                alt: "avatar",
                                                className: "h-9 w-9 rounded-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold",
                                                        children: pt.full_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 text-left",
                                                        children: [
                                                            pt.email,
                                                            " | ",
                                                            pt.phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1245,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1239,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 text-[10px] text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "🏫 Trường: ",
                                                    pt.school
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "🎓 Chuyên ngành: ",
                                                    pt.major,
                                                    " (",
                                                    pt.year_of_study,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1254,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "📚 Môn dạy: ",
                                                    pt.subjects_to_teach
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1255,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "💰 Phí: ",
                                                    formatVND(pt.hourly_rate),
                                                    "/giờ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1256,
                                                columnNumber: 21
                                            }, this),
                                            pt.proposed_commission_percent !== null && pt.proposed_commission_percent !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/40 px-2 py-1 rounded",
                                                children: [
                                                    "🤝 Đề xuất deal chiết khấu hoa hồng: ",
                                                    pt.proposed_commission_percent,
                                                    "% (Hoa hồng hiện tại: ",
                                                    pt.commission_percent ?? 10,
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1258,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `col-span-2 font-bold px-2 py-1 rounded ${pt.ekyc_status === "AUTO_ACCEPTED" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300" : pt.ekyc_status === "MANUAL_REVIEW" ? "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300" : "bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-400"}`,
                                                children: [
                                                    "🧪 eKYC: ",
                                                    pt.ekyc_status === "AUTO_ACCEPTED" ? "Auto accept" : pt.ekyc_status === "MANUAL_REVIEW" ? "Duyệt tay" : "Chưa chạy",
                                                    pt.ekyc_score !== null && pt.ekyc_score !== undefined ? ` - ${Number(pt.ekyc_score)}%` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] p-2 bg-white dark:bg-slate-900 rounded border dark:border-slate-800 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-500",
                                                children: "Giới thiệu:"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1274,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            pt.bio
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 19
                                    }, this),
                                    pt.documents && pt.documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border-t dark:border-slate-800 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-500 text-[9px] uppercase tracking-wider block text-left",
                                                children: "Minh chứng & CCCD 2 mặt đính kèm:"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: pt.documents.map((d, idx)=>{
                                                    const isImage = d.mime_type ? d.mime_type.startsWith("image/") : d.url && /\.(png|jpe?g|webp|gif)$/i.test(d.url);
                                                    const isDoc = d.original_name ? /\.(docx?)$/i.test(d.original_name) : d.url && /\.(docx?)$/i.test(d.url);
                                                    const fileUrl = d.url && d.url.startsWith("/") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`${d.url}?token=${token}`) : d.url;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 bg-white dark:bg-slate-900 p-1.5 rounded border dark:border-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center gap-1 mb-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8px] font-bold uppercase text-slate-400 block truncate text-left",
                                                                        children: d.doc_type === "CCCD_FRONT" ? "🪪 CCCD Mặt Trước" : d.doc_type === "CCCD_BACK" ? "🪪 CCCD Mặt Sau" : "🎓 Bằng Cấp / Thẻ SV"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1293,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleDeleteTutorDoc(d.id),
                                                                        className: "text-[8px] text-red-500 hover:text-red-750 font-bold opacity-60 hover:opacity-100 transition cursor-pointer",
                                                                        title: "Xóa tài liệu này",
                                                                        children: "Xóa ✕"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1300,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1292,
                                                                columnNumber: 31
                                                            }, this),
                                                            isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setPreviewDoc({
                                                                        title: d.original_name || "Tài liệu",
                                                                        file_url: fileUrl
                                                                    }),
                                                                className: "block relative group overflow-hidden rounded bg-slate-100 dark:bg-slate-950 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: fileUrl,
                                                                        alt: d.doc_type,
                                                                        className: "h-14 w-full object-cover rounded hover:scale-105 transition duration-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1314,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[7px] text-white font-bold",
                                                                        children: "MỞ 🔎"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1310,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setPreviewDoc({
                                                                        title: d.original_name || "Tài liệu",
                                                                        file_url: fileUrl
                                                                    }),
                                                                className: "h-14 w-full bg-blue-50 dark:bg-slate-850 rounded flex flex-col items-center justify-center text-[#13519c] dark:text-blue-400 p-1 border border-dashed border-blue-200 cursor-pointer hover:bg-blue-100/50 dark:hover:bg-slate-800 transition duration-150",
                                                                title: "Click để mở xem trước tài liệu",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base",
                                                                        children: "📄"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1329,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[7px] font-bold truncate max-w-full text-center px-1",
                                                                        title: d.original_name,
                                                                        children: d.original_name || "Tài liệu.docx"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                        lineNumber: 1330,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                                lineNumber: 1324,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 justify-end pt-2 border-t dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDecideTutor(pt.user_id, "APPROVED"),
                                                className: "bg-emerald-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-emerald-755 text-[10px] font-bold",
                                                children: "Duyệt hồ sơ"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1343,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRejectingTutorId(pt.user_id),
                                                className: "bg-rose-600 text-white px-3 py-1.5 rounded cursor-pointer hover:bg-rose-755 text-[10px] font-bold",
                                                children: "Từ chối"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1349,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, pt.user_id, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1238,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1236,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1229,
                columnNumber: 9
            }, this),
            adminTab === "notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm text-slate-900 dark:text-white",
                                children: "Gửi thông báo từ admin"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-1",
                                children: "Gửi thông báo tới toàn bộ hệ thống hoặc theo nhóm vai trò."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1368,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSendAdminNotification,
                        className: "grid gap-3 max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] uppercase font-bold text-slate-400 mb-1",
                                        children: "Nhóm nhận"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: adminNotificationForm.role,
                                        onChange: (e)=>setAdminNotificationForm({
                                                ...adminNotificationForm,
                                                role: e.target.value
                                            }),
                                        className: "h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ALL",
                                                children: "Tất cả người dùng"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "STUDENT",
                                                children: "Học sinh / phụ huynh"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "TUTOR",
                                                children: "Gia sư"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ADMIN",
                                                children: "Quản trị viên"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                                lineNumber: 1382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] uppercase font-bold text-slate-400 mb-1",
                                        children: "Tiêu đề"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: adminNotificationForm.title,
                                        onChange: (e)=>setAdminNotificationForm({
                                                ...adminNotificationForm,
                                                title: e.target.value
                                            }),
                                        className: "h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none",
                                        placeholder: "Ví dụ: Cập nhật lịch bảo trì hệ thống"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1388,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] uppercase font-bold text-slate-400 mb-1",
                                        children: "Nội dung"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: adminNotificationForm.body,
                                        onChange: (e)=>setAdminNotificationForm({
                                                ...adminNotificationForm,
                                                body: e.target.value
                                            }),
                                        className: "min-h-28 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold focus:outline-none resize-y",
                                        placeholder: "Nhập nội dung thông báo gửi tới người dùng..."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1396,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] uppercase font-bold text-slate-400 mb-1",
                                        children: "Đường dẫn khi bấm"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: adminNotificationForm.linkUrl,
                                        onChange: (e)=>setAdminNotificationForm({
                                                ...adminNotificationForm,
                                                linkUrl: e.target.value
                                            }),
                                        className: "h-9 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 text-xs font-semibold focus:outline-none",
                                        placeholder: "/?tab=news"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: sendingAdminNotification,
                                className: "h-10 rounded-lg bg-[#13519c] text-white text-xs font-bold hover:bg-blue-800 disabled:opacity-50",
                                children: sendingAdminNotification ? "Đang gửi..." : "Gửi thông báo"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1371,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1365,
                columnNumber: 9
            }, this),
            adminTab === "escrow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-sm text-slate-900 dark:text-white",
                                        children: "Quản lý tiền giam"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: "Các khoản đã thanh toán đang giữ 3 ngày trước khi vào ví khả dụng của gia sư."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1431,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: fetchEscrowAppointments,
                                className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900",
                                children: "Tải lại"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1435,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1430,
                        columnNumber: 11
                    }, this),
                    loadingEscrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-xs font-semibold text-slate-400",
                        children: "Đang tải danh sách tiền giam..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1445,
                        columnNumber: 13
                    }, this) : escrowAppointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-xs text-slate-400",
                        children: "Không có khoản tiền nào đang bị giam."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1447,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        columns: escrowColumns,
                        data: escrowAppointments,
                        searchPlaceholder: "Tìm theo mã lớp, gia sư, học viên..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1449,
                        columnNumber: 13
                    }, this),
                    escrowToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-lg border px-3 py-2 text-xs font-semibold ${escrowToast.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`,
                        children: escrowToast.message
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1456,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1429,
                columnNumber: 9
            }, this),
            adminTab === "withdrawals" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-sm text-slate-900 dark:text-white",
                                        children: "Quan ly yeu cau rut tien"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: "Xem day du ngan hang, so tai khoan, chu tai khoan va duyet/tu choi yeu cau rut tien."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1472,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: fetchWithdrawRequests,
                                className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900",
                                children: "Tai lai"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1469,
                        columnNumber: 11
                    }, this),
                    loadingWithdrawRequests ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-xs font-semibold text-slate-400",
                        children: "Dang tai danh sach yeu cau rut tien..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1484,
                        columnNumber: 13
                    }, this) : withdrawRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-xs text-slate-400",
                        children: "Khong co yeu cau rut tien nao."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1486,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        columns: withdrawColumns,
                        data: withdrawRequests,
                        searchPlaceholder: "Tim theo user, email, ngan hang, so tai khoan..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1488,
                        columnNumber: 13
                    }, this),
                    withdrawToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-lg border px-3 py-2 text-xs font-semibold ${withdrawToast.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`,
                        children: withdrawToast.message
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1495,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1468,
                columnNumber: 9
            }, this),
            adminTab === "monitor" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-xs text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase text-slate-400",
                                        children: "Bộ nhớ RAM"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 15
                                    }, this),
                                    systemStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 font-semibold text-slate-900 dark:text-white",
                                        children: [
                                            systemStats.memory.used,
                                            " / ",
                                            systemStats.memory.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1514,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1511,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase text-slate-400",
                                        children: "Tải CPU"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 15
                                    }, this),
                                    systemStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 font-semibold text-slate-900 dark:text-white",
                                        children: systemStats.cpu.loadAvg
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1522,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1519,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#111827] p-3 border dark:border-slate-800 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] uppercase text-slate-400",
                                        children: "Thành viên hệ thống"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1526,
                                        columnNumber: 15
                                    }, this),
                                    systemStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 font-semibold text-slate-900 dark:text-white",
                                        children: [
                                            systemStats.stats.users,
                                            " Users"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1528,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1525,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] p-4 border dark:border-slate-800 rounded-xl space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Lịch sử log hành vi & request API"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            fetchSystemLogs();
                                            fetchSystemStats();
                                        },
                                        className: "text-blue-600 dark:text-blue-400 hover:underline cursor-pointer",
                                        children: "Tải lại"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                columns: logColumns,
                                data: systemLogs,
                                searchPlaceholder: "Tìm kiếm nhật ký logs..."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1550,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1536,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1508,
                columnNumber: 9
            }, this),
            adminTab === "users" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-xl p-4 shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-4 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm text-slate-800 dark:text-slate-200",
                                children: "👥 Danh sách tài khoản người dùng"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1563,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchSystemUsers,
                                className: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition inline-flex items-center gap-1 cursor-pointer",
                                children: "Làm mới"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                lineNumber: 1566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1562,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        columns: userColumns,
                        data: systemUsers,
                        searchPlaceholder: "Tìm kiếm tài khoản..."
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                        lineNumber: 1574,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1561,
                columnNumber: 9
            }, this),
            rejectingWithdraw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-2xl dark:border-slate-800 dark:bg-[#111827]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-slate-900 dark:text-white",
                            children: "Ly do tu choi rut tien"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1585,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-500",
                            children: [
                                "Yeu cau #",
                                rejectingWithdraw.id,
                                " - ",
                                formatVND(rejectingWithdraw.amount),
                                " se duoc hoan ve vi user neu tu choi."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1586,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: withdrawRejectReason,
                            onChange: (e)=>setWithdrawRejectReason(e.target.value),
                            className: "mt-4 min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 outline-none focus:border-rose-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200",
                            placeholder: "Nhap ly do tu choi de gui thong bao cho user..."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1589,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setRejectingWithdraw(null);
                                        setWithdrawRejectReason("");
                                    },
                                    className: "rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900",
                                    children: "Huy"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !withdrawRejectReason.trim() || decidingWithdrawId === rejectingWithdraw.id,
                                    onClick: ()=>handleDecideWithdrawRequest(Number(rejectingWithdraw.id), "REJECTED", withdrawRejectReason.trim()),
                                    className: "rounded-lg bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50",
                                    children: "Xac nhan tu choi"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1606,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1595,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 1584,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1583,
                columnNumber: 9
            }, this),
            activePopup && dashboardData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-5xl bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-2xl border dark:border-slate-800 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pb-4 border-b dark:border-slate-800 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider text-left",
                                    children: [
                                        activePopup === "tutors" && "🔍 CHI TIẾT DANH SÁCH GIA SƯ",
                                        activePopup === "students" && "🔍 CHI TIẾT DANH SÁCH HỌC SINH / PHỤ HUYNH",
                                        activePopup === "appointments" && "🔍 CHI TIẾT DANH SÁCH LỚP HỌC / LỊCH HẸN",
                                        activePopup === "payments" && "🔍 CHI TIẾT THỐNG KÊ DOANH THU & HOA HỒNG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1624,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActivePopup(null),
                                    className: "h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer font-bold text-xs",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1630,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1623,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs",
                            children: [
                                activePopup === "tutors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: tutorColumns,
                                    data: dashboardData.tutors || [],
                                    searchPlaceholder: "Tìm kiếm gia sư..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1640,
                                    columnNumber: 17
                                }, this),
                                activePopup === "students" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: studentColumns,
                                    data: dashboardData.students || [],
                                    searchPlaceholder: "Tìm kiếm học sinh..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1647,
                                    columnNumber: 17
                                }, this),
                                activePopup === "appointments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: appointmentColumns,
                                    data: dashboardData.appointments || [],
                                    searchPlaceholder: "Tìm kiếm lịch hẹn..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1654,
                                    columnNumber: 17
                                }, this),
                                activePopup === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$components$2f$KntechDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    columns: paymentColumns,
                                    data: dashboardData.payments || [],
                                    searchPlaceholder: "Tìm kiếm doanh thu giao dịch..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1661,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1638,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 1622,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1621,
                columnNumber: 9
            }, this),
            previewImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-pointer",
                onClick: ()=>setPreviewImageUrl(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden p-2 shadow-2xl animate-fade-in",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPreviewImageUrl(null),
                            className: "absolute top-4 right-4 h-9 w-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition z-10 border-none",
                            title: "Đóng",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1679,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewImageUrl,
                            alt: "Preview",
                            className: "max-w-full max-h-[85vh] object-contain rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1686,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 1678,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1674,
                columnNumber: 9
            }, this),
            escrowNoteTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-[#111827]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-slate-900 dark:text-white",
                            children: "Duyệt trả tiền giam"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1698,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-slate-500",
                            children: "Khoản tiền sẽ được chuyển từ trạng thái giam sang ví khả dụng của gia sư ngay lập tức."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1699,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mt-4 block text-[10px] font-bold uppercase text-slate-400",
                            children: "Ghi chú admin"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1702,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: escrowAdminNote,
                            onChange: (e)=>setEscrowAdminNote(e.target.value),
                            className: "mt-1 min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-[#13519c] dark:border-slate-800 dark:bg-slate-900",
                            placeholder: "Có thể để trống..."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1703,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setEscrowNoteTarget(null);
                                        setEscrowAdminNote("");
                                    },
                                    className: "rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1710,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: releasingEscrowId === escrowNoteTarget,
                                    onClick: ()=>handleReleaseEscrow(escrowNoteTarget, escrowAdminNote.trim()),
                                    className: "rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50",
                                    children: releasingEscrowId === escrowNoteTarget ? "Đang duyệt..." : "Duyệt trả ví"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                                    lineNumber: 1720,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                            lineNumber: 1709,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                    lineNumber: 1697,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
                lineNumber: 1696,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/tabs/AdminTab.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=packages_web_app_components_tabs_0pqcne2._.js.map