module.exports = [
"[project]/packages/web/app/components/AuthModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AuthModal({ isOpen, onClose, onSuccess, initialTab, initialRole }) {
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("STUDENT");
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isOpen) {
            if (initialTab !== undefined) {
                setIsLogin(initialTab === "login");
            }
            if (initialRole !== undefined) {
                setRole(initialRole);
            }
        }
    }, [
        isOpen,
        initialTab,
        initialRole
    ]);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
        const body = isLogin ? {
            email,
            password,
            rememberMe
        } : {
            email,
            username,
            password,
            fullName,
            role
        };
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`${endpoint}`), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                if (result.issues && Array.isArray(result.issues)) {
                    const detailedMsg = result.issues.map((i)=>{
                        const field = i.path.join(".");
                        const fieldMap = {
                            email: "Email",
                            username: "Tên đăng nhập",
                            password: "Mật khẩu",
                            fullName: "Họ và tên",
                            role: "Vai trò"
                        };
                        const fieldName = fieldMap[field] || field;
                        let errorMsg = i.message;
                        if (errorMsg === "Required") {
                            errorMsg = "không được để trống.";
                        } else if (errorMsg.includes("at least")) {
                            const match = errorMsg.match(/at least (\d+)/);
                            const minLen = match ? match[1] : "2";
                            errorMsg = `phải dài ít nhất ${minLen} ký tự.`;
                        } else if (errorMsg.includes("Invalid email")) {
                            errorMsg = "không đúng định dạng (ví dụ: email@gmail.com).";
                        }
                        return `• ${fieldName}: ${errorMsg}`;
                    }).join("\n");
                    throw new Error(detailedMsg || result.message);
                }
                let errorMsg = result.message || "Đã xảy ra lỗi. Vui lòng kiểm tra thông tin.";
                if (errorMsg === "Email already exists") {
                    errorMsg = "Email này đã được đăng ký trên hệ thống. Bác vui lòng chọn email khác hoặc đăng nhập.";
                } else if (errorMsg === "Username already exists") {
                    errorMsg = "Tên đăng nhập này đã được đăng ký. Bác vui lòng chọn tên đăng nhập khác.";
                } else if (errorMsg === "Invalid credentials") {
                    errorMsg = "Thông tin đăng nhập hoặc mật khẩu không chính xác.";
                }
                throw new Error(errorMsg);
            }
            onSuccess(result.data.token, {
                id: result.data.id,
                email: result.data.email,
                fullName: result.data.fullName,
                role: result.data.role
            });
            onClose();
        } catch (err) {
            setError(err.message || "Không thể kết nối đến máy chủ.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 dark:bg-[#0b1220] dark:ring-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-900 dark:text-white",
                            children: isLogin ? "Đăng Nhập Tài Khoản" : "Đăng Ký Tài Khoản"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "mt-4 space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-red-50 p-4 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-300 border whitespace-pre-line",
                            children: [
                                "⚠️ ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                            children: "Họ và tên của bạn"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Ví dụ: Nguyễn Văn A",
                                            value: fullName,
                                            onChange: (e)=>setFullName(e.target.value),
                                            className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                            children: "Tên đăng nhập"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Ví dụ: nguyenvana123",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, "")),
                                            className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: isLogin ? "Email, số điện thoại hoặc tên đăng nhập" : "Địa chỉ Email"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: isLogin ? "text" : "email",
                                    required: true,
                                    placeholder: isLogin ? "ten@gmail.com, 09xxxxxx hoặc username" : "ten-cua-ban@gmail.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: "Mật khẩu truy cập"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    required: true,
                                    placeholder: "Nhập mật khẩu của bạn",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    className: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    id: "rememberMe",
                                    checked: rememberMe,
                                    onChange: (e)=>setRememberMe(e.target.checked),
                                    className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "rememberMe",
                                    className: "text-xs font-semibold text-slate-500 cursor-pointer",
                                    children: "Nhớ thiết bị này (30 ngày không cần đăng nhập lại)"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2",
                                    children: "Bạn sử dụng ứng dụng với vai trò gì?"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setRole("STUDENT"),
                                            className: `h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${role === "STUDENT" ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "border-slate-200 text-slate-500 dark:border-slate-700"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: "👨‍👩‍👧 Phụ huynh"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold opacity-70",
                                                    children: "Tìm gia sư cho con"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setRole("TUTOR"),
                                            className: `h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${role === "TUTOR" ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300" : "border-slate-200 text-slate-500 dark:border-slate-700"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    children: "👩‍🏫 Gia sư"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold opacity-70",
                                                    children: "Đăng tin dạy kèm"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full h-11 mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-semibold text-white transition hover:opacity-90 disabled:opacity-50 cursor-pointer",
                            children: loading ? "Đang xử lý..." : isLogin ? "Đăng Nhập Ngay" : "Đăng Ký Ngay"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 text-center text-xs font-semibold",
                            children: isLogin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: [
                                    "Chưa có tài khoản?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsLogin(false),
                                        className: "text-blue-600 hover:underline dark:text-blue-400 cursor-pointer",
                                        children: "Đăng ký miễn phí tại đây"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: [
                                    "Đã có tài khoản?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsLogin(true),
                                        className: "text-blue-600 hover:underline dark:text-blue-400 cursor-pointer",
                                        children: "Đăng nhập tại đây"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/AuthModal.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/AuthModal.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/AuthModal.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAdmin",
    ()=>IconAdmin,
    "IconBell",
    ()=>IconBell,
    "IconBook",
    ()=>IconBook,
    "IconBriefcase",
    ()=>IconBriefcase,
    "IconCalendar",
    ()=>IconCalendar,
    "IconCheck",
    ()=>IconCheck,
    "IconChevronDown",
    ()=>IconChevronDown,
    "IconChevronLeft",
    ()=>IconChevronLeft,
    "IconChevronRight",
    ()=>IconChevronRight,
    "IconClock",
    ()=>IconClock,
    "IconDownload",
    ()=>IconDownload,
    "IconGraduationCap",
    ()=>IconGraduationCap,
    "IconHome",
    ()=>IconHome,
    "IconLogout",
    ()=>IconLogout,
    "IconMessageCircle",
    ()=>IconMessageCircle,
    "IconMic",
    ()=>IconMic,
    "IconMicOff",
    ()=>IconMicOff,
    "IconNewspaper",
    ()=>IconNewspaper,
    "IconPhone",
    ()=>IconPhone,
    "IconPlus",
    ()=>IconPlus,
    "IconSearch",
    ()=>IconSearch,
    "IconSend",
    ()=>IconSend,
    "IconSettings",
    ()=>IconSettings,
    "IconShield",
    ()=>IconShield,
    "IconStar",
    ()=>IconStar,
    "IconStarFilled",
    ()=>IconStarFilled,
    "IconTag",
    ()=>IconTag,
    "IconTrendUp",
    ()=>IconTrendUp,
    "IconUpload",
    ()=>IconUpload,
    "IconUser",
    ()=>IconUser,
    "IconVideo",
    ()=>IconVideo,
    "IconVideoOff",
    ()=>IconVideoOff,
    "IconWallet",
    ()=>IconWallet,
    "IconX",
    ()=>IconX,
    "IconZap",
    ()=>IconZap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IconSearch(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "7",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 16.5 21 21",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function IconBell(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8.5A6 6 0 0 0 6 8.5c0 3.6-.9 5.5-1.8 6.5H19.8C18.9 14 18 12.1 18 8.5Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.27 3.18A2 2 0 0 1 12 2a2 2 0 0 1 1.73 1.18",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 18.5a2.5 2.5 0 0 0 5 0",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function IconWallet(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 10.5h4.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15a1.5 1.5 0 0 1 0-3Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9h16",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function IconHome(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function IconBriefcase(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "7",
                width: "18",
                height: "13",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12.5c5 2.5 13 2.5 18 0",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.45"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 13h2",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function IconTag(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h7a1 1 0 0 1 .71.29l8 8a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-1.42 0l-8-8A1 1 0 0 1 4 11V4Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "1.25",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function IconUser(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function IconChevronRight(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 6l6 6-6 6",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
function IconChevronLeft(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 6l-6 6 6 6",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function IconChevronDown(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 9l6 6 6-6",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function IconX(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 6 6 18M6 6l12 12",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
function IconCheck(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.5 12.5 9.5 17.5 19.5 7",
            stroke: "currentColor",
            strokeWidth: "1.9",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
function IconPlus(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
function IconStar(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 15.77l-5.5 2.89 1.05-6.12L3.1 8.47l6.15-.9L12 2Z",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
function IconStarFilled(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 15.77l-5.5 2.89 1.05-6.12L3.1 8.47l6.15-.9L12 2Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function IconBook(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H18a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5v-15Z",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 17h14",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7h8M8 11h5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.55"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
function IconCalendar(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2.5",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9h18",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2v4M16 2v4",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "13",
                width: "3",
                height: "3",
                rx: "0.75",
                fill: "currentColor",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "13",
                width: "3",
                height: "3",
                rx: "0.75",
                fill: "currentColor",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
function IconClock(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7v5l3 3",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
function IconLogout(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 17l5-5-5-5M21 12H9",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
function IconSettings(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 0 14.14 14.14",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.3 3.16A10 10 0 0 1 21 12a10 10 0 0 1-10.7 9.98A10 10 0 0 1 2 12a10 10 0 0 1 8.3-8.84Z",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
function IconShield(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l8 3v6c0 5-3.5 9-8 11C7.5 20 4 16 4 11V5l8-3Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12l2 2 4-4",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
function IconDownload(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v13M7 11l5 5 5-5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 19h16",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
function IconUpload(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v13M17 8l-5-5-5 5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 19h16",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
function IconZap(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 2 4.5 13.5H12L11 22l8.5-11.5H12L13 2Z",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 309,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
function IconTrendUp(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 17l5-5 4 4 6-8 3 1",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 6h6v6",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
function IconMessageCircle(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12c0 4.42-4.03 8-9 8a9.86 9.86 0 0 1-4.2-.93L3 21l1.9-4.8A7.6 7.6 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 331,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
function IconSend(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 344,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
function IconMic(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "2",
                width: "6",
                height: "12",
                rx: "3",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10a7 7 0 0 0 14 0",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19v3M9.5 22h5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
function IconMicOff(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1l22 22",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9v5a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 16.95A7 7 0 0 1 5 10",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19v3M9.5 22h5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
function IconVideo(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 9.5 21 6v12l-6-3.5V9.5Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "6",
                width: "12",
                height: "12",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
function IconVideoOff(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1l22 22",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 3h6a2 2 0 0 1 2 2v2.17M15 18H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 6v12l-6-3.5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this);
}
function IconPhone(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2Z",
            stroke: "currentColor",
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/icons.tsx",
            lineNumber: 403,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 402,
        columnNumber: 5
    }, this);
}
function IconNewspaper(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 8h10M7 12h6M7 16h4",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "12",
                width: "3",
                height: "4",
                rx: "0.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 416,
        columnNumber: 5
    }, this);
}
function IconGraduationCap(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 10l10-5 10 5-10 5-10-5Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 10v5",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
}
function IconAdmin(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z",
                stroke: "currentColor",
                strokeWidth: "1.75",
                opacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v-2M12 18v-2M6.34 9.66 4.93 8.24M19.07 15.76l-1.41-1.42M8.24 19.07l-1.42 1.41M17.18 6.34l-1.42 1.42M4 12H2M22 12h-2",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.75"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/icons.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/icons.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/CustomAlert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCustomizer",
    ()=>AlertCustomizer,
    "CustomAlert",
    ()=>CustomAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function CustomAlert({ isOpen, type, title, message, imageUrl, onClose }) {
    const [shouldRender, setShouldRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setShouldRender(true);
            setProgress(100);
            const frame = requestAnimationFrame(()=>{
                setProgress(0);
            });
            const timer = setTimeout(()=>{
                onClose();
            }, 2000);
            return ()=>{
                cancelAnimationFrame(frame);
                clearTimeout(timer);
            };
        } else {
            const timer = setTimeout(()=>setShouldRender(false), 300);
            return ()=>clearTimeout(timer);
        }
    }, [
        isOpen,
        onClose
    ]);
    if (!shouldRender) return null;
    const typeStyles = {
        success: {
            bg: "bg-emerald-500/10 dark:bg-emerald-500/5",
            border: "border-emerald-500/30 dark:border-emerald-500/20",
            text: "text-emerald-500",
            btnBg: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        },
        warning: {
            bg: "bg-amber-500/10 dark:bg-amber-500/5",
            border: "border-amber-500/30 dark:border-amber-500/20",
            text: "text-amber-500",
            btnBg: "bg-amber-500 hover:bg-amber-600 shadow-amber-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        },
        error: {
            bg: "bg-rose-500/10 dark:bg-rose-500/5",
            border: "border-rose-500/30 dark:border-rose-500/20",
            text: "text-rose-500",
            btnBg: "bg-rose-500 hover:bg-rose-600 shadow-rose-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        },
        info: {
            bg: "bg-blue-500/10 dark:bg-blue-500/5",
            border: "border-blue-500/30 dark:border-blue-500/20",
            text: "text-blue-500",
            btnBg: "bg-[#13519c] hover:bg-blue-800 shadow-blue-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        }
    }[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full max-w-sm transform rounded-3xl border border-white/20 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-6 pb-8 shadow-2xl backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`,
                children: [
                    imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 h-20 w-20 overflow-hidden rounded-2xl border border-white/20 shadow-lg bg-slate-50 dark:bg-slate-850 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageUrl,
                            alt: "Alert Illustration",
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${typeStyles.bg} ${typeStyles.border} ${typeStyles.text} shadow-inner`,
                        children: typeStyles.icon
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-550 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-line",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: `w-full py-2.5 rounded-xl text-xs font-semibold text-white shadow-lg transition duration-200 cursor-pointer ${typeStyles.btnBg}`,
                        children: "Đóng"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100 dark:bg-slate-800/80 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all ease-linear ${type === "success" ? "bg-emerald-500" : type === "warning" ? "bg-amber-500" : type === "error" ? "bg-rose-500" : "bg-blue-500"}`,
                            style: {
                                width: `${progress}%`,
                                transitionDuration: isOpen ? '2000ms' : '0ms'
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function AlertCustomizer({ onTestAlert }) {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Thông báo từ GiasuTop");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Vui lòng kiểm tra lại thông tin học phí.");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("success");
    const [customImage, setCustomImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [errorText, setErrorText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleImageChange = (e)=>{
        setErrorText(null);
        const file = e.target.files?.[0];
        if (!file) return;
        // Validate that the file is strictly an image
        if (!file.type.startsWith("image/")) {
            setErrorText("Tệp đã chọn không phải là hình ảnh. Vui lòng chọn một file ảnh hợp lệ (.png, .jpg, .jpeg, .webp, .gif)!");
            setCustomImage(undefined);
            e.target.value = ""; // clear input
            return;
        }
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setCustomImage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 text-xs space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-bold text-slate-800 dark:text-slate-200",
                children: "Test thông báo"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 focus:outline-none",
                        placeholder: "Tiêu đề"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: type,
                        onChange: (e)=>setType(e.target.value),
                        className: "h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "success",
                                children: "Thành công"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "warning",
                                children: "Cảnh báo"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "error",
                                children: "Lỗi"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "info",
                                children: "Thông tin"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: message,
                onChange: (e)=>setMessage(e.target.value),
                className: "min-h-20 w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 focus:outline-none resize-y",
                placeholder: "Nội dung"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                onChange: handleImageChange,
                className: "block w-full text-[11px]"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-rose-500 font-semibold",
                children: errorText
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 202,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onTestAlert(type, title, message, customImage),
                className: "h-9 rounded-lg bg-[#13519c] px-4 text-white font-bold hover:bg-blue-800",
                children: "Hiển thị thử"
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/CustomAlert.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/MessengerChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessengerChat",
    ()=>MessengerChat,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/avatar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
;
;
;
;
const GLOBAL_CONTACT = {
    id: "global",
    full_name: "Cộng đồng (Global Chat)",
    email: "global@kntech.vn",
    avatar_url: null,
    role: "SYSTEM",
    last_message: null,
    unread_count: 0
};
// ── helpers ────────────────────────────────────────────────────────────────
function isImageMime(mime) {
    return mime ? /^image\/(jpeg|png|webp|gif)/.test(mime) : false;
}
function FileAttachment({ url, name, mime }) {
    const fullUrl = url.startsWith("http") ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(url);
    const label = name || "File đính kèm";
    if (isImageMime(mime)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: fullUrl,
            target: "_blank",
            rel: "noreferrer noopener",
            className: "block mt-1.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: fullUrl,
                alt: label,
                className: "max-w-[220px] max-h-[200px] rounded-lg object-cover border shadow-sm hover:opacity-90 transition",
                onError: (e)=>{
                    e.target.style.display = "none";
                }
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    // Non-image: download only, no execution
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: fullUrl,
        download: label,
        rel: "noreferrer noopener",
        className: "flex items-center gap-2 mt-1.5 bg-white/20 hover:bg-white/30 border border-white/20 dark:border-slate-700 rounded-lg px-3 py-2 text-[11px] font-semibold transition max-w-[220px] truncate",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4 shrink-0",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "14 2 14 8 20 8"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "15",
                        x2: "12",
                        y2: "11"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "9 12 12 15 15 12"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function MessengerChat({ token, currentUser, chatActivePartner, onClearActivePartner }) {
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        GLOBAL_CONTACT
    ]);
    const [activeContact, setActiveContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(GLOBAL_CONTACT);
    const [mobileView, setMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("contacts");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingContacts, setLoadingContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingMessages, setLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── fetch contacts ────────────────────────────────────────────────────────
    const fetchContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!token) return;
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/chats/direct/contacts"), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.success) {
                setContacts([
                    GLOBAL_CONTACT,
                    ...json.data
                ]);
            }
        } catch (e) {
            console.error("Lỗi tải danh bạ nhắn tin:", e);
        }
    }, [
        token
    ]);
    // ── fetch messages ────────────────────────────────────────────────────────
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (partnerId, showLoading = false)=>{
        if (!token || !partnerId) return;
        if (showLoading) setLoadingMessages(true);
        try {
            if (partnerId === "global") {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/chats"), {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const json = await res.json();
                if (json.success) {
                    const mapped = json.data.map((m)=>({
                            id: m.id,
                            sender_id: m.user_id,
                            receiver_id: "global",
                            message: m.message,
                            is_read: 1,
                            created_at: m.created_at,
                            sender_name: m.full_name,
                            sender_email: m.email,
                            sender_role: m.role,
                            file_url: m.file_url ?? null,
                            file_name: m.file_name ?? null,
                            file_type: m.file_type ?? null
                        }));
                    setMessages(mapped);
                }
            } else {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])(`/api/chats/direct/partner/${partnerId}`), {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const json = await res.json();
                if (json.success) {
                    setMessages(json.data);
                }
            }
        } catch (e) {
            console.error("Lỗi tải lịch sử chat:", e);
        } finally{
            if (showLoading) setLoadingMessages(false);
        }
    }, [
        token
    ]);
    // ── send text message ─────────────────────────────────────────────────────
    const handleSendMessage = async (msgText, filePayload)=>{
        if (!token || !activeContact) return;
        if (!msgText.trim() && !filePayload) return;
        const body = {
            message: msgText.trim()
        };
        if (filePayload) {
            body.fileUrl = filePayload.fileUrl;
            body.fileName = filePayload.fileName;
            body.fileType = filePayload.fileType;
        }
        try {
            if (activeContact.id === "global") {
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/chats"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                });
                const json = await res.json();
                if (json.success) {
                    setInputMessage("");
                    fetchMessages("global");
                }
            } else {
                body.receiverId = activeContact.id;
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/chats/direct/send"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                });
                const json = await res.json();
                if (json.success) {
                    setInputMessage("");
                    fetchMessages(activeContact.id);
                    fetchContacts();
                }
            }
        } catch (e) {
            console.error("Lỗi gửi tin nhắn:", e);
        }
    };
    // ── upload file then send ─────────────────────────────────────────────────
    const handleFileSelect = async (e)=>{
        const file = e.target.files?.[0];
        if (!file || !token || !activeContact) return;
        e.target.value = "";
        // Client-side type check (defence in depth)
        const allowed = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];
        if (!allowed.includes(file.type)) {
            setUploadError("Chỉ cho phép ảnh (jpg/png/webp) hoặc tài liệu (pdf/doc/docx).");
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            setUploadError("File không được vượt quá 10MB.");
            return;
        }
        setUploading(true);
        setUploadError(null);
        try {
            const form = new FormData();
            form.append("file", file);
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/chats/upload"), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: form
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message || "Upload thất bại");
            // Send the message with attachment
            await handleSendMessage(inputMessage, {
                fileUrl: json.fileUrl,
                fileName: json.fileName,
                fileType: json.fileType
            });
        } catch (err) {
            setUploadError(err.message || "Upload thất bại, thử lại.");
        } finally{
            setUploading(false);
        }
    };
    // ── polling ───────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchContacts();
        const i = setInterval(fetchContacts, 4000);
        return ()=>clearInterval(i);
    }, [
        fetchContacts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeContact) fetchMessages(activeContact.id, true);
        else setMessages([]);
    }, [
        activeContact,
        fetchMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeContact) return;
        const i = setInterval(()=>fetchMessages(activeContact.id), 3000);
        return ()=>clearInterval(i);
    }, [
        activeContact,
        fetchMessages
    ]);
    // ── handle partner passed from parent ─────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chatActivePartner) {
            const existing = contacts.find((c)=>c.id === chatActivePartner.user_id || c.id === chatActivePartner.id);
            if (existing) {
                setActiveContact(existing);
                setMobileView("chat");
            } else {
                const tmp = {
                    id: chatActivePartner.user_id || chatActivePartner.id,
                    full_name: chatActivePartner.full_name || chatActivePartner.fullName,
                    email: chatActivePartner.email,
                    avatar_url: chatActivePartner.avatar_url || null,
                    role: chatActivePartner.role || "TUTOR",
                    last_message: null,
                    unread_count: 0
                };
                setContacts((prev)=>{
                    if (prev.some((c)=>c.id === tmp.id)) return prev;
                    return [
                        GLOBAL_CONTACT,
                        tmp,
                        ...prev.filter((c)=>c.id !== "global")
                    ];
                });
                setActiveContact(tmp);
                setMobileView("chat");
            }
            onClearActivePartner?.();
        }
    }, [
        chatActivePartner
    ]);
    // ── auto-scroll only when new messages arrive AND user is near bottom ─────
    const prevMsgCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const vp = chatViewportRef.current;
        if (!vp || messages.length === 0) return;
        const isNearBottom = vp.scrollHeight - vp.scrollTop - vp.clientHeight < 120;
        const hasNewMsg = messages.length > prevMsgCount.current;
        prevMsgCount.current = messages.length;
        if (hasNewMsg && isNearBottom) {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        messages
    ]);
    const formatTime = (iso)=>new Date(iso).toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit"
        });
    // ── render ────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex overflow-hidden h-[600px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${mobileView === "contacts" ? "flex w-full" : "hidden md:flex"} md:w-72 border-r border-slate-200/50 dark:border-slate-800 flex-col shrink-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white",
                                children: "Đoạn chat"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold px-2 py-0.5 rounded-full uppercase",
                                children: "Messenger"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-2 space-y-0.5",
                        children: contacts.map((contact)=>{
                            const isActive = activeContact?.id === contact.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveContact(contact);
                                    setMobileView("chat");
                                },
                                className: `w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer focus:outline-none ${isActive ? "bg-blue-50 dark:bg-slate-800/60 shadow-sm" : "hover:bg-slate-50 dark:hover:bg-slate-800/30"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative shrink-0",
                                        children: [
                                            contact.id === "global" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 rounded-full bg-gradient-to-tr from-[#13519c] to-indigo-500 flex items-center justify-center text-white text-base font-black select-none",
                                                children: "🌎"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 348,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(contact),
                                                alt: contact.full_name,
                                                className: "h-10 w-10 rounded-full border bg-slate-50 object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 350,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-slate-900 ${contact.id === "global" ? "bg-blue-500" : "bg-emerald-500"}`
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-baseline gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: `text-xs font-bold truncate ${isActive ? "text-[#13519c] dark:text-blue-400" : "text-slate-900 dark:text-slate-200"}`,
                                                        children: contact.full_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    contact.last_message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-slate-400 shrink-0",
                                                        children: formatTime(contact.last_message.created_at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[10px] truncate mt-0.5 ${contact.unread_count > 0 ? "font-bold text-slate-900 dark:text-white" : "text-slate-400"}`,
                                                children: contact.id === "global" ? "Phòng chat cộng đồng GiasuTop" : contact.last_message?.message || "Bắt đầu cuộc trò chuyện!"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this),
                                    contact.unread_count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-4 w-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0",
                                        children: contact.unread_count > 9 ? "9+" : contact.unread_count
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 376,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, contact.id, true, {
                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${mobileView === "chat" ? "flex" : "hidden md:flex"} flex-1 flex-col bg-slate-50/50 dark:bg-[#0c0e14] min-w-0`,
                children: activeContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-14 border-b border-slate-200/50 dark:border-slate-800 px-4 flex items-center justify-between bg-white dark:bg-[#111827] shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileView("contacts"),
                                        className: "md:hidden p-1 mr-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer",
                                        title: "Quay lại danh sách chat",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "19",
                                                    y1: "12",
                                                    x2: "5",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "12 19 5 12 12 5"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    activeContact.id === "global" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-9 w-9 rounded-full bg-gradient-to-tr from-[#13519c] to-indigo-500 flex items-center justify-center text-white font-black select-none",
                                        children: "🌎"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 406,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(activeContact),
                                        alt: activeContact.full_name,
                                        className: "h-9 w-9 rounded-full border bg-slate-50 object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 408,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-900 dark:text-white leading-tight",
                                                children: activeContact.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 415,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${activeContact.role === "ADMIN" ? "bg-amber-100 text-amber-800" : activeContact.role === "TUTOR" ? "bg-purple-100 text-purple-800" : activeContact.role === "SYSTEM" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"}`,
                                                children: activeContact.role === "SYSTEM" ? "Global" : activeContact.role
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 416,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                lineNumber: 392,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: chatViewportRef,
                            className: "flex-1 overflow-y-auto p-4 space-y-2",
                            children: [
                                loadingMessages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-16 text-slate-400 text-xs",
                                    children: "⏳ Đang tải tin nhắn..."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 430,
                                    columnNumber: 17
                                }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-16 text-slate-400 text-xs",
                                    children: [
                                        "💬 Gửi tin nhắn đầu tiên đến ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: activeContact.full_name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                            lineNumber: 433,
                                            columnNumber: 48
                                        }, this),
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 432,
                                    columnNumber: 17
                                }, this) : messages.map((msg, index)=>{
                                    const isMe = msg.sender_id === currentUser?.id;
                                    const prevMsg = messages[index - 1];
                                    const nextMsg = messages[index + 1];
                                    const isConsecutivePrev = prevMsg?.sender_id === msg.sender_id;
                                    const isConsecutiveNext = nextMsg?.sender_id === msg.sender_id;
                                    const hasFile = !!msg.file_url;
                                    const hasText = msg.message && msg.message.trim().length > 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-end gap-2 text-xs ${isMe ? "justify-end" : "justify-start"}`,
                                        children: [
                                            !isMe && !isConsecutiveNext ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: activeContact.id !== "global" && !msg.avatar_url && !msg.avatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])(activeContact) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$avatar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvatarUrl"])({
                                                    avatar_url: msg.avatar_url || msg.avatarUrl,
                                                    email: msg.sender_email || activeContact.email
                                                }),
                                                alt: "AVT",
                                                className: "h-6 w-6 rounded-full bg-slate-100 border shadow-sm shrink-0 self-end object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 449,
                                                columnNumber: 25
                                            }, this) : !isMe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 459,
                                                columnNumber: 35
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col max-w-[68%]",
                                                children: [
                                                    !isMe && !isConsecutivePrev && activeContact.id === "global" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-bold text-slate-500 mb-1 ml-1 flex items-center gap-1",
                                                        children: [
                                                            msg.sender_name || "Thành viên",
                                                            msg.sender_role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[7px] px-1 rounded uppercase font-extrabold ${msg.sender_role === "ADMIN" ? "bg-amber-100 text-amber-800" : msg.sender_role === "TUTOR" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}`,
                                                                children: msg.sender_role
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        title: formatTime(msg.created_at),
                                                        className: `leading-relaxed shadow-sm transition-all duration-200 ${!hasFile && !hasText ? "" : hasFile && !hasText ? "bg-transparent" : `px-3 py-2 rounded-2xl ${isConsecutivePrev ? isMe ? "rounded-tr-md" : "rounded-tl-md" : ""} ${isConsecutiveNext ? isMe ? "rounded-br-md" : "rounded-bl-md" : ""} ${isMe ? "bg-gradient-to-r from-blue-600 to-[#13519c] text-white" : "bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-slate-800 dark:text-slate-200"}`}`,
                                                        children: [
                                                            hasText && msg.message !== "👍" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: msg.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 29
                                                            }, this),
                                                            msg.message === "👍" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl",
                                                                children: "👍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 52
                                                            }, this),
                                                            hasFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileAttachment, {
                                                                url: msg.file_url,
                                                                name: msg.file_name ?? null,
                                                                mime: msg.file_type ?? null
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 461,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 447,
                                        columnNumber: 21
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this),
                        uploadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-3 mb-1 px-3 py-1.5 bg-red-50 border border-red-200 text-red-700 text-[11px] rounded-lg flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "⚠️ ",
                                        uploadError
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 503,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setUploadError(null),
                                    className: "text-red-500 hover:text-red-700 cursor-pointer font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 502,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center gap-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    className: "hidden",
                                    accept: ".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx",
                                    onChange: handleFileSelect
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    disabled: uploading,
                                    className: "h-9 w-9 rounded-full flex items-center justify-center text-slate-400 hover:text-[#13519c] hover:bg-blue-50 dark:hover:bg-slate-800 transition cursor-pointer shrink-0 disabled:opacity-50",
                                    title: "Đính kèm file (ảnh/pdf/doc)",
                                    children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 animate-spin text-blue-600",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 529,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                                lineNumber: 530,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 528,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                            lineNumber: 534,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 533,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Nhập tin nhắn...",
                                    value: inputMessage,
                                    onChange: (e)=>setInputMessage(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" && !e.shiftKey) handleSendMessage(inputMessage);
                                    },
                                    className: "flex-1 h-9 px-4 text-xs rounded-full border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                inputMessage.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSendMessage(inputMessage),
                                    className: "h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center cursor-pointer shadow-md transition shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 transform rotate-90",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                            lineNumber: 555,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                        lineNumber: 554,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 549,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSendMessage("👍"),
                                    className: "h-9 w-9 text-2xl hover:scale-110 active:scale-95 transition cursor-pointer flex items-center justify-center shrink-0",
                                    title: "Gửi nút Like",
                                    children: "👍"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                                    lineNumber: 559,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-5xl mb-4",
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-slate-800 dark:text-slate-250",
                            children: "Tin nhắn riêng tư"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400 max-w-xs mt-1.5 leading-relaxed",
                            children: "Chọn một liên hệ từ danh sách bên trái hoặc truy cập hồ sơ gia sư để bắt đầu nhắn tin."
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                    lineNumber: 569,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/MessengerChat.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MessengerChat;
}),
"[project]/packages/web/app/components/KntechDataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KntechDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function KntechDataTable({ columns, data = [], searchPlaceholder = "Tìm kiếm...", defaultRowsPerPage = 10 }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortColumn, setSortColumn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("asc");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rowsPerPage, setRowsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultRowsPerPage);
    // 1. Filtering
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchTerm.trim()) return data;
        const lowerSearch = searchTerm.toLowerCase();
        return data.filter((row)=>{
            return Object.keys(row).some((key)=>{
                const val = row[key];
                if (val === null || val === undefined) return false;
                return String(val).toLowerCase().includes(lowerSearch);
            });
        });
    }, [
        data,
        searchTerm
    ]);
    // 2. Sorting
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!sortColumn) return filteredData;
        const col = columns.find((c)=>c.key === sortColumn);
        const sorted = [
            ...filteredData
        ];
        sorted.sort((a, b)=>{
            let valA = a[sortColumn];
            let valB = b[sortColumn];
            // Safe toString or numerical comparison
            if (typeof valA === "number" && typeof valB === "number") {
                return sortDirection === "asc" ? valA - valB : valB - valA;
            }
            const strA = String(valA || "").toLowerCase();
            const strB = String(valB || "").toLowerCase();
            if (strA < strB) return sortDirection === "asc" ? -1 : 1;
            if (strA > strB) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [
        filteredData,
        sortColumn,
        sortDirection,
        columns
    ]);
    // Reset to first page when search changes
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setCurrentPage(1);
    }, [
        searchTerm,
        rowsPerPage
    ]);
    // 3. Pagination
    const totalRows = sortedData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const startIdx = (currentPage - 1) * rowsPerPage;
        return sortedData.slice(startIdx, startIdx + rowsPerPage);
    }, [
        sortedData,
        currentPage,
        rowsPerPage
    ]);
    const handleSort = (columnKey, sortable)=>{
        if (sortable === false) return;
        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(columnKey);
            setSortDirection("asc");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3.5 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                placeholder: searchPlaceholder,
                                className: "w-full h-9 pl-3.5 pr-8 text-xs rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:outline-none focus:border-[#13519c] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchTerm(""),
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Hiển thị"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: rowsPerPage,
                                onChange: (e)=>setRowsPerPage(Number(e.target.value)),
                                className: "h-8 border border-slate-200 dark:border-slate-800 rounded-lg px-1.5 bg-slate-50 dark:bg-slate-900 text-slate-850 dark:text-slate-300 font-semibold cursor-pointer",
                                children: [
                                    5,
                                    10,
                                    25,
                                    50,
                                    100
                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: size,
                                        children: [
                                            size,
                                            " dòng"
                                        ]
                                    }, size, true, {
                                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto border border-slate-200/60 dark:border-slate-800/80 rounded-xl bg-white dark:bg-[#111827] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse text-left text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                children: columns.map((col)=>{
                                    const isCurrentSort = sortColumn === col.key;
                                    const isSortable = col.sortable !== false;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort(col.key, col.sortable),
                                        className: `px-4 py-3 select-none ${isSortable ? "cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-850" : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: col.label
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this),
                                                isSortable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-slate-300 dark:text-slate-600",
                                                    children: isCurrentSort ? sortDirection === "asc" ? "🔼" : "🔽" : "↕️"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this)
                                    }, col.key, false, {
                                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-150 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                            children: paginatedData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: columns.length,
                                    className: "px-4 py-6 text-center text-slate-400 italic",
                                    children: "Không tìm thấy kết quả nào."
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this) : paginatedData.map((row, rIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition",
                                    children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 align-middle",
                                            children: col.render ? col.render(row) : String(row[col.key] ?? "")
                                        }, col.key, false, {
                                            fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                            lineNumber: 172,
                                            columnNumber: 21
                                        }, this))
                                }, row.id || row.user_id || rIdx, false, {
                                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs text-slate-500 pt-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Hiển thị ",
                            (currentPage - 1) * rowsPerPage + 1,
                            " -",
                            " ",
                            Math.min(currentPage * rowsPerPage, totalRows),
                            " trong số ",
                            totalRows,
                            " dòng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: currentPage === 1,
                                onClick: ()=>setCurrentPage((c)=>Math.max(c - 1, 1)),
                                className: "px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-850 cursor-pointer text-slate-700 dark:text-slate-300 font-semibold",
                                children: "Trước"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            Array.from({
                                length: totalPages
                            }).map((_, idx)=>{
                                const p = idx + 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(p),
                                    className: `h-7 w-7 rounded-lg border flex items-center justify-center font-bold transition cursor-pointer text-[10px] ${currentPage === p ? "bg-[#13519c] border-[#13519c] text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350 dark:hover:bg-slate-850"}`,
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: currentPage === totalPages,
                                onClick: ()=>setCurrentPage((c)=>Math.min(c + 1, totalPages)),
                                className: "px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-850 cursor-pointer text-slate-700 dark:text-slate-300 font-semibold",
                                children: "Sau"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/KntechDataTable.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/KntechUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KntechUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function KntechUpload({ accept, multiple = false, required = false, mainText = "Drag & Drop or Choose file to upload", allowedText = "PNG, JPG SVG, WEBP, and GIF are Allowed.", onChange, value, onClear }) {
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!value) return [];
        if (value instanceof FileList) return Array.from(value);
        return [
            value
        ];
    }, [
        value
    ]);
    const imagePreviewFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedFiles.filter((file)=>file.type.startsWith("image/")).slice(0, multiple ? 4 : 1), [
        multiple,
        selectedFiles
    ]);
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const urls = imagePreviewFiles.map((file)=>URL.createObjectURL(file));
        setPreviewUrls(urls);
        return ()=>urls.forEach((url)=>URL.revokeObjectURL(url));
    }, [
        imagePreviewFiles
    ]);
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onChange(e.dataTransfer.files);
        }
    };
    const handleChange = (e)=>{
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            onChange(e.target.files);
        }
    };
    const onButtonClick = (e)=>{
        e.preventDefault();
        inputRef.current?.click();
    };
    const clearSelection = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        onClear();
    };
    // Helper to compute display text for selected files
    const getSelectedFilesInfo = ()=>{
        if (!value) return null;
        if (value instanceof FileList) {
            if (value.length === 0) return null;
            if (value.length === 1) return value[0].name;
            return `${value.length} tệp đã chọn (${Array.from(value).map((f)=>f.name).join(", ")})`;
        }
        return value.name;
    };
    const fileInfo = getSelectedFilesInfo();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onDragEnter: handleDrag,
            onDragOver: handleDrag,
            onDragLeave: handleDrag,
            onDrop: handleDrop,
            onClick: onButtonClick,
            className: `relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all cursor-pointer select-none text-center bg-slate-50/50 dark:bg-slate-900/30 group ${dragActive ? "border-[var(--brand-primary)] bg-[rgba(255,87,34,0.06)] dark:bg-[rgba(255,87,34,0.03)] scale-[0.99]" : fileInfo ? "border-[var(--brand-primary)]/60 bg-slate-50 dark:bg-slate-900/50" : "border-slate-300 hover:border-[var(--brand-primary)] hover:bg-slate-50/80 dark:border-slate-800 dark:hover:border-[var(--brand-primary)]"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    type: "file",
                    accept: accept,
                    multiple: multiple,
                    required: required && !fileInfo,
                    onChange: handleChange,
                    onClick: (e)=>e.stopPropagation(),
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                previewUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: multiple ? "grid w-full max-w-xs grid-cols-2 gap-2" : "w-full max-w-[240px]",
                    children: previewUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-xl border border-white bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: selectedFiles[index]?.name || "Preview",
                                className: multiple ? "h-24 w-full object-cover" : "h-32 w-full object-contain bg-slate-100 dark:bg-slate-900"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                                lineNumber: 131,
                                columnNumber: 17
                            }, this)
                        }, url, false, {
                            fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform ${dragActive || fileInfo ? "text-[var(--brand-primary)] border-[var(--brand-primary)]/20" : "text-slate-400"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-1",
                    children: fileInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-slate-800 dark:text-slate-100 max-w-sm truncate px-4",
                                children: [
                                    "📂 ",
                                    fileInfo
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearSelection,
                                className: "text-[10px] font-bold text-rose-600 dark:text-rose-400 hover:underline px-2 py-1 rounded bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 cursor-pointer",
                                children: "✕ Hủy chọn tệp"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-slate-650 dark:text-slate-350",
                                children: mainText
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-450 dark:text-slate-500 font-medium",
                                children: allowedText
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/KntechUpload.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/TutorEkycPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorEkycPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/app/utils/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const stepTargets = [
    {
        x: 0,
        y: 0,
        yaw: 0,
        pitch: 0,
        label: "Nhìn thẳng vào khung"
    },
    {
        x: 0,
        y: -0.29,
        yaw: 0,
        pitch: -0.22,
        label: "Ngẩng mặt nhẹ lên"
    },
    {
        x: 0.22,
        y: -0.21,
        yaw: 0.2,
        pitch: -0.16,
        label: "Xoay nhẹ lên phải"
    },
    {
        x: 0.3,
        y: 0,
        yaw: 0.26,
        pitch: 0,
        label: "Xoay sang phải"
    },
    {
        x: 0.22,
        y: 0.21,
        yaw: 0.2,
        pitch: 0.16,
        label: "Xoay nhẹ xuống phải"
    },
    {
        x: 0,
        y: 0.29,
        yaw: 0,
        pitch: 0.22,
        label: "Cúi mặt nhẹ xuống"
    },
    {
        x: -0.22,
        y: 0.21,
        yaw: -0.2,
        pitch: 0.16,
        label: "Xoay nhẹ xuống trái"
    },
    {
        x: -0.3,
        y: 0,
        yaw: -0.26,
        pitch: 0,
        label: "Xoay sang trái"
    },
    {
        x: -0.22,
        y: -0.21,
        yaw: -0.2,
        pitch: -0.16,
        label: "Xoay nhẹ lên trái"
    },
    {
        x: 0,
        y: 0,
        yaw: 0,
        pitch: 0,
        label: "Trở về chính giữa"
    }
];
const ocrWorkerState = {
    worker: null,
    ready: false
};
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function fileToDataUrl(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result || ""));
        reader.onerror = ()=>reject(reader.error);
        reader.readAsDataURL(file);
    });
}
function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image);
        image.onerror = reject;
        image.src = src;
    });
}
function waitForGlobal(name, timeoutMs = 12000) {
    const startedAt = performance.now();
    return new Promise((resolve, reject)=>{
        const tick = ()=>{
            const value = window[name];
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
async function loadScript(id, src) {
    if (document.getElementById(id)) return;
    await new Promise((resolve, reject)=>{
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = true;
        script.onload = ()=>resolve();
        script.onerror = ()=>reject(new Error(`Không tải được ${src}`));
        document.body.appendChild(script);
    });
}
async function ensureEkycScripts(loadOcr = false) {
    await Promise.all([
        loadScript("kntech-jsqr", "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js"),
        loadScript("kntech-facemesh", "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/face_mesh.js"),
        loadOcr ? loadScript("kntech-tesseract", "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js") : Promise.resolve()
    ]);
}
function computeQuality(image) {
    const width = 320;
    const height = Math.max(1, Math.round(image.naturalHeight / image.naturalWidth * width));
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) return {
        brightness: 0,
        contrast: 0,
        sharpness: 0,
        glare: 100,
        score: 0
    };
    ctx.drawImage(image, 0, 0, width, height);
    const { data } = ctx.getImageData(0, 0, width, height);
    const luminance = new Float32Array(width * height);
    let sum = 0;
    let glare = 0;
    for(let index = 0, pixel = 0; index < data.length; index += 4, pixel += 1){
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
    for(let y = 1; y < height - 1; y += 1){
        for(let x = 1; x < width - 1; x += 1){
            const i = y * width + x;
            const diff = luminance[i] - mean;
            variance += diff * diff;
            edge += Math.abs(luminance[i] * 4 - luminance[i - 1] - luminance[i + 1] - luminance[i - width] - luminance[i + width]);
        }
    }
    const contrast = clamp(Math.sqrt(variance / luminance.length) * 2.2, 0, 100);
    const sharpness = clamp(edge / luminance.length * 0.95, 0, 100);
    const brightness = clamp(mean / 255 * 100, 0, 100);
    const glarePercent = clamp(glare / luminance.length * 100, 0, 100);
    const brightnessScore = 100 - clamp(Math.abs(brightness - 55) * 2.6, 0, 100);
    const score = clamp(Math.round(sharpness * 0.36 + brightnessScore * 0.26 + contrast * 0.24 + (100 - glarePercent) * 0.14), 0, 100);
    return {
        brightness: Math.round(brightness),
        contrast: Math.round(contrast),
        sharpness: Math.round(sharpness),
        glare: Math.round(glarePercent),
        score
    };
}
function extractCardCanvas(image, options = {}) {
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
function preprocessForQr(canvas, scale = 1) {
    const output = createCanvas(Math.round(canvas.width * scale), Math.round(canvas.height * scale));
    const ctx = output.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) return output;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, output.width, output.height);
    const imageData = ctx.getImageData(0, 0, output.width, output.height);
    const { data } = imageData;
    for(let index = 0; index < data.length; index += 4){
        const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
        const value = gray > 128 ? 255 : 0;
        data[index] = value;
        data[index + 1] = value;
        data[index + 2] = value;
    }
    ctx.putImageData(imageData, 0, 0);
    return output;
}
async function detectQrWithBarcodeDetector(image) {
    if (!("BarcodeDetector" in window)) return "";
    try {
        const detector = new window.BarcodeDetector({
            formats: [
                "qr_code"
            ]
        });
        const codes = await detector.detect(image);
        return codes[0]?.rawValue || "";
    } catch  {
        return "";
    }
}
function detectQrWithJsQr(canvas) {
    const jsQR = window.jsQR;
    if (!jsQR) return "";
    const ctx = canvas.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) return "";
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "attemptBoth"
    });
    return code?.data || "";
}
async function detectQrFromImage(image) {
    await ensureEkycScripts(false);
    const barcodeQr = await detectQrWithBarcodeDetector(image);
    if (barcodeQr) return barcodeQr;
    const cardCanvas = extractCardCanvas(image, {
        mode: "qr"
    });
    const variants = [
        cardCanvas,
        preprocessForQr(cardCanvas, 1),
        preprocessForQr(cardCanvas, 1.35),
        preprocessForQr(cardCanvas, 1.7)
    ];
    for (const canvas of variants){
        const qr = detectQrWithJsQr(canvas);
        if (qr) return qr;
    }
    return "";
}
function preprocessForOcr(canvas, side) {
    const output = createCanvas(canvas.width, canvas.height);
    const ctx = output.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) return output;
    ctx.drawImage(canvas, 0, 0);
    const imageData = ctx.getImageData(0, 0, output.width, output.height);
    const { data } = imageData;
    let sum = 0;
    for(let index = 0; index < data.length; index += 4){
        const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
        sum += gray;
    }
    const mean = sum / (data.length / 4);
    const contrast = side === "back" ? 1.62 : 1.42;
    const boost = side === "back" ? 12 : 7;
    for(let index = 0; index < data.length; index += 4){
        const gray = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
        const value = clamp((gray - mean) * contrast + 145 + boost, 0, 255);
        data[index] = value;
        data[index + 1] = value;
        data[index + 2] = value;
    }
    ctx.putImageData(imageData, 0, 0);
    return output;
}
async function ensureOcrWorker(onProgress) {
    if (ocrWorkerState.ready) return ocrWorkerState.worker;
    await ensureEkycScripts(true);
    const Tesseract = await waitForGlobal("Tesseract");
    const worker = await Tesseract.createWorker("vie+eng", 1, {
        logger: (message)=>{
            if (message.status === "recognizing text") onProgress(Math.round((message.progress || 0) * 100));
        }
    });
    await worker.setParameters({
        tessedit_pageseg_mode: "6",
        preserve_interword_spaces: "1",
        user_defined_dpi: "300"
    });
    ocrWorkerState.worker = worker;
    ocrWorkerState.ready = true;
    return worker;
}
async function runImageOcr(side, imageData, onProgress) {
    onProgress(side === "front" ? "OCR mặt trước" : "OCR mặt sau");
    const image = await loadImage(imageData.dataUrl);
    const cardCanvas = extractCardCanvas(image, {
        mode: "ocr"
    });
    const processed = preprocessForOcr(cardCanvas, side);
    const worker = await ensureOcrWorker((percent)=>onProgress(`OCR ${percent}%`));
    const result = await worker.recognize(processed);
    return result.data.text || "";
}
function makeDescriptor(canvas) {
    const width = 16;
    const height = 20;
    const tiny = createCanvas(width, height);
    const ctx = tiny.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) return [];
    ctx.drawImage(canvas, 0, 0, width, height);
    const { data } = ctx.getImageData(0, 0, width, height);
    const descriptor = [];
    for(let index = 0; index < data.length; index += 4){
        const r = data[index] / 255;
        const g = data[index + 1] / 255;
        const b = data[index + 2] / 255;
        descriptor.push(Number((r * 0.38 + g * 0.44 + b * 0.18).toFixed(4)));
    }
    return descriptor;
}
function distance2d(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}
function poseFromLandmarks(landmarks) {
    if (!landmarks?.length) {
        return {
            present: false,
            x: 0,
            y: 0,
            yaw: 0,
            pitch: 0,
            roll: 0,
            area: 0,
            mean: 0,
            landmarks: []
        };
    }
    const leftEye = landmarks[33];
    const rightEye = landmarks[263];
    const nose = landmarks[1];
    const chin = landmarks[152];
    const forehead = landmarks[10];
    const leftCheek = landmarks[234];
    const rightCheek = landmarks[454];
    const mouth = landmarks[13];
    const eyeMid = {
        x: (leftEye.x + rightEye.x) / 2,
        y: (leftEye.y + rightEye.y) / 2
    };
    const cheekMid = {
        x: (leftCheek.x + rightCheek.x) / 2,
        y: (leftCheek.y + rightCheek.y) / 2
    };
    const faceWidth = Math.max(distance2d(leftCheek, rightCheek), 0.001);
    const faceHeight = Math.max(distance2d(forehead, chin), 0.001);
    const area = faceWidth * faceHeight;
    const yaw = clamp((nose.x - cheekMid.x) / faceWidth * 2.7, -0.7, 0.7);
    const pitch = clamp((nose.y - eyeMid.y) / faceHeight * 2.2 - 0.52, -0.7, 0.7);
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
        landmarks
    };
}
function descriptorFromPose(analysis) {
    const landmarks = analysis?.landmarks || [];
    if (!landmarks.length) return null;
    const pairs = [
        [
            33,
            263
        ],
        [
            234,
            454
        ],
        [
            10,
            152
        ],
        [
            1,
            152
        ],
        [
            1,
            13
        ],
        [
            13,
            152
        ],
        [
            61,
            291
        ],
        [
            199,
            152
        ],
        [
            33,
            1
        ],
        [
            263,
            1
        ],
        [
            33,
            61
        ],
        [
            263,
            291
        ],
        [
            10,
            1
        ],
        [
            1,
            199
        ],
        [
            234,
            1
        ],
        [
            454,
            1
        ]
    ];
    const faceWidth = Math.max(distance2d(landmarks[234], landmarks[454]), 0.001);
    const faceHeight = Math.max(distance2d(landmarks[10], landmarks[152]), 0.001);
    const scale = Math.max((faceWidth + faceHeight) / 2, 0.001);
    const descriptor = pairs.map(([a, b])=>Number((distance2d(landmarks[a], landmarks[b]) / scale).toFixed(4)));
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
        locateFile: (file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/${file}`
    });
    faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: false,
        minDetectionConfidence: 0.45,
        minTrackingConfidence: 0.45
    });
    return faceMesh;
}
async function faceDescriptorFromCanvas(canvas) {
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
        return await new Promise((resolve)=>{
            const timeout = window.setTimeout(()=>resolve(null), 1600);
            faceMesh.onResults((results)=>{
                window.clearTimeout(timeout);
                resolve(descriptorFromPose(poseFromLandmarks(results.multiFaceLandmarks?.[0])));
            });
            faceMesh.send({
                image: input
            }).catch(()=>{
                window.clearTimeout(timeout);
                resolve(null);
            });
        });
    } catch  {
        return null;
    }
}
function poseMatchesStep(analysis, target, stepIndex) {
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
function captureSelfie(video, targetCanvas) {
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
function TutorEkycPanel({ token, frontFile, backFile, portraitFile, onResultChange, showKntechAlert }) {
    const [front, setFront] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [back, setBack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [documentResult, setDocumentResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verifyResult, setVerifyResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [portraitDescriptor, setPortraitDescriptor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [portraitDescriptorType, setPortraitDescriptorType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selfieDescriptor, setSelfieDescriptor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selfieDescriptorType, setSelfieDescriptorType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [liveness, setLiveness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        expectedSteps: 10,
        completedSteps: 0,
        faceCoverage: 0,
        motionCoverage: 0,
        frameVariance: 0,
        durationMs: 0
    });
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusText, setStatusText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Chưa chạy eKYC");
    const [liveOpen, setLiveOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [livePrompt, setLivePrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Đưa mặt vào khung");
    const [liveProgress, setLiveProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopLiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoOcrKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const autoLiveKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const fileKey = [
        frontFile,
        backFile,
        portraitFile
    ].map((file)=>file ? `${file.name}:${file.size}:${file.lastModified}` : "missing").join("|");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onResultChange(verifyResult ? {
            document: documentResult,
            liveness,
            verification: verifyResult
        } : null);
    }, [
        documentResult,
        liveness,
        onResultChange,
        verifyResult
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function prepareImage(file, setter) {
            if (!file) {
                setter(null);
                return;
            }
            const dataUrl = await fileToDataUrl(file);
            const image = await loadImage(dataUrl);
            const quality = computeQuality(image);
            const qrText = await detectQrFromImage(image);
            if (!cancelled) setter({
                dataUrl,
                quality,
                qrText
            });
        }
        void prepareImage(frontFile, setFront);
        void prepareImage(backFile, setBack);
        setDocumentResult(null);
        setVerifyResult(null);
        setLiveness({
            expectedSteps: 10,
            completedSteps: 0,
            faceCoverage: 0,
            motionCoverage: 0,
            frameVariance: 0,
            durationMs: 0
        });
        setLiveProgress(0);
        setStatusText("Chưa chạy eKYC");
        return ()=>{
            cancelled = true;
        };
    }, [
        frontFile,
        backFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            cancelled = true;
        };
    }, [
        portraitFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!token || !front || !back || !portraitDescriptor || documentResult || busy || fileKey.includes("missing")) return;
        if (autoOcrKeyRef.current === fileKey) return;
        autoOcrKeyRef.current = fileKey;
        void runOcr(true);
    }, [
        back,
        busy,
        documentResult,
        fileKey,
        front,
        portraitDescriptor,
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!token || !documentResult || !portraitDescriptor || verifyResult || busy || liveOpen || fileKey.includes("missing")) return;
        if (autoLiveKeyRef.current === fileKey) return;
        autoLiveKeyRef.current = fileKey;
        showKntechAlert("info", "eKYC đang chạy", "OCR đã xong. Hệ thống sẽ mở camera để kiểm tra liveness 360.");
        void startLiveness(true).catch((error)=>{
            showKntechAlert("error", "Không mở được camera", error.message || "Vui lòng bấm lại Liveness 360.");
        });
    }, [
        busy,
        documentResult,
        fileKey,
        liveOpen,
        portraitDescriptor,
        token,
        verifyResult
    ]);
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
                runImageOcr("back", back, setStatusText)
            ]);
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/ekyc/ocr"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    front: {
                        quality: front.quality,
                        qrText: front.qrText,
                        ocrText: frontOcrText
                    },
                    back: {
                        quality: back.quality,
                        qrText: back.qrText,
                        ocrText: backOcrText
                    },
                    qrText: front.qrText || back.qrText,
                    fields: {}
                })
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message || "Không chạy được OCR.");
            setDocumentResult(json);
            setStatusText(`OCR ${json.confidence}% - ${json.status}`);
        } catch (error) {
            showKntechAlert("error", "eKYC OCR lỗi", error.message || "Không thể đọc CCCD.");
        } finally{
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
        await new Promise((resolve)=>requestAnimationFrame(resolve));
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) throw new Error("Không khởi tạo được màn hình liveness.");
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "user",
                width: {
                    ideal: 720
                },
                height: {
                    ideal: 720
                },
                frameRate: {
                    ideal: 30,
                    max: 30
                }
            },
            audio: false
        });
        video.srcObject = stream;
        await video.play();
        setLivePrompt("Đang tải nhận diện khuôn mặt...");
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        if (!ctx) return;
        const faceMesh = await ensureFaceMesh();
        const modelCanvas = createCanvas(320, 320);
        const modelCtx = modelCanvas.getContext("2d");
        if (!modelCtx) return;
        const startTime = performance.now();
        const faceSignals = [];
        const positions = [];
        const frameMeans = [];
        const captured = createCanvas(240, 300);
        let animationFrame = 0;
        let currentStep = 0;
        let holdStart = 0;
        let stopped = false;
        let processing = false;
        let lastModelAt = 0;
        const baselineSamples = [];
        let baseline = null;
        let latestAnalysis = {
            present: false,
            x: 0,
            y: 0,
            yaw: 0,
            pitch: 0,
            roll: 0,
            area: 0,
            mean: 0
        };
        faceMesh.onResults((results)=>{
            const nextAnalysis = poseFromLandmarks(results.multiFaceLandmarks?.[0]);
            if (nextAnalysis.present && !baseline && Math.abs(nextAnalysis.roll) < 0.25) {
                baselineSamples.push({
                    yaw: nextAnalysis.yaw,
                    pitch: nextAnalysis.pitch
                });
                if (baselineSamples.length >= 12) {
                    baseline = {
                        yaw: baselineSamples.reduce((sum, item)=>sum + item.yaw, 0) / baselineSamples.length,
                        pitch: baselineSamples.reduce((sum, item)=>sum + item.pitch, 0) / baselineSamples.length
                    };
                }
            }
            latestAnalysis = baseline ? {
                ...nextAnalysis,
                deltaYaw: clamp(nextAnalysis.yaw - baseline.yaw, -0.8, 0.8),
                deltaPitch: clamp(nextAnalysis.pitch - baseline.pitch, -0.8, 0.8),
                calibrated: true
            } : nextAnalysis;
        });
        const stop = ()=>{
            stopped = true;
            cancelAnimationFrame(animationFrame);
            stream.getTracks().forEach((track)=>track.stop());
            setLiveOpen(false);
        };
        stopLiveRef.current = stop;
        const tick = async (now)=>{
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
                faceMesh.send({
                    image: modelCanvas
                }).catch(()=>{
                    latestAnalysis = {
                        ...latestAnalysis,
                        present: false
                    };
                }).finally(()=>{
                    processing = false;
                });
            }
            const analysis = latestAnalysis;
            faceSignals.push(analysis.present ? 1 : 0);
            positions.push({
                x: analysis.yaw,
                y: analysis.pitch
            });
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
            const faceCoverage = faceSignals.reduce((sum, value)=>sum + value, 0) / Math.max(faceSignals.length, 1);
            const xs = positions.map((item)=>item.x);
            const ys = positions.map((item)=>item.y);
            const xRange = xs.length ? Math.max(...xs) - Math.min(...xs) : 0;
            const yRange = ys.length ? Math.max(...ys) - Math.min(...ys) : 0;
            const motionCoverage = clamp((xRange + yRange) / 1.1, 0, 1);
            const mean = frameMeans.reduce((sum, value)=>sum + value, 0) / Math.max(frameMeans.length, 1);
            const frameVariance = clamp(frameMeans.reduce((sum, value)=>sum + Math.abs(value - mean), 0) / Math.max(frameMeans.length, 1) * 9, 0, 1);
            const durationMs = performance.now() - startTime;
            const nextLive = {
                expectedSteps: stepTargets.length,
                completedSteps: currentStep,
                faceCoverage,
                motionCoverage,
                frameVariance,
                durationMs
            };
            setLiveness(nextLive);
            setLiveProgress(currentStep / stepTargets.length * 100);
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiUrl"])("/api/ekyc/face/verify"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    documentConfidence: documentResult.confidence || 0,
                    portraitDescriptor,
                    selfieDescriptor: nextSelfieDescriptor,
                    portraitDescriptorType,
                    selfieDescriptorType: nextSelfieType,
                    liveness: nextLive
                })
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message || "Không xác minh được khuôn mặt.");
            setVerifyResult(json);
            setStatusText(json.status === "approved" ? `Auto accept ${json.scores.overall}%` : `Duyệt tay ${json.scores.overall}%`);
            showKntechAlert(json.status === "approved" ? "success" : "warning", "eKYC hoàn tất", json.message);
        } catch (error) {
            showKntechAlert("error", "eKYC lỗi", error.message || "Không thể xác minh khuôn mặt.");
        } finally{
            setBusy(false);
        }
    }
    const canRunOcr = Boolean(front && back && token);
    const canRunLive = Boolean(documentResult && portraitDescriptor && token);
    const overall = verifyResult?.scores?.overall ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold text-slate-800 dark:text-slate-100",
                                children: "eKYC tự động"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 788,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-500",
                                children: "Từ 85% tự duyệt, dưới 85% chuyển admin duyệt tay."
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 789,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${verifyResult?.status === "approved" ? "bg-emerald-100 text-emerald-700" : verifyResult ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600"}`,
                        children: verifyResult?.status === "approved" ? "Auto accept" : verifyResult ? "Duyệt tay" : "Chưa chạy"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid grid-cols-3 gap-2 text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-2 dark:bg-slate-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "Document"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 798,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "block text-xs",
                                children: [
                                    documentResult?.confidence ?? 0,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-2 dark:bg-slate-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "Liveness"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "block text-xs",
                                children: [
                                    verifyResult?.scores?.liveness ?? Math.round(liveProgress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 801,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-2 dark:bg-slate-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "Overall"
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "block text-xs",
                                children: [
                                    overall,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 805,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !canRunOcr || busy,
                        onClick: ()=>runOcr(),
                        className: "rounded-lg bg-[#13519c] px-3 py-2 text-[10px] font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300",
                        children: busy ? "Đang xử lý..." : "1. Chạy OCR CCCD"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !canRunLive || busy,
                        onClick: ()=>startLiveness().catch((error)=>showKntechAlert("error", "Không mở được camera", error.message)),
                        className: "rounded-lg bg-emerald-600 px-3 py-2 text-[10px] font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300",
                        children: "2. Liveness 360"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 811,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[10px] font-semibold text-slate-500",
                children: statusText
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 830,
                columnNumber: 7
            }, this),
            documentResult?.warnings?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-2 list-disc space-y-1 pl-4 text-[10px] text-amber-700",
                children: documentResult.warnings.slice(0, 3).map((warning)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: warning
                    }, warning, false, {
                        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                        lineNumber: 834,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 832,
                columnNumber: 9
            }, this),
            liveOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-md overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            playsInline: true,
                            muted: true,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                            lineNumber: 842,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 720,
                            height: 720,
                            className: "aspect-square w-full bg-black"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                            lineNumber: 843,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 top-0 flex items-center justify-between bg-black/40 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold",
                                    children: livePrompt
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                    lineNumber: 845,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>stopLiveRef.current?.(),
                                    className: "rounded-lg bg-white/15 px-3 py-1 text-xs font-bold",
                                    children: "Dừng"
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                    lineNumber: 846,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                            lineNumber: 844,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 bg-black/50 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 overflow-hidden rounded-full bg-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-emerald-400 transition-all",
                                    style: {
                                        width: `${liveProgress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                    lineNumber: 852,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                                lineNumber: 851,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                            lineNumber: 850,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                    lineNumber: 841,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
                lineNumber: 840,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/TutorEkycPanel.tsx",
        lineNumber: 785,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/web/app/components/RichTextEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/web/node_modules/@tiptap/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-text-align/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-highlight/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ToolbarBtn = ({ onClick, active, title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: title,
        onClick: onClick,
        className: `h-7 px-2 rounded text-xs font-semibold transition cursor-pointer select-none ${active ? "bg-[#C41E3A] text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function RichTextEditor({ content, onChange, placeholder }) {
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                types: [
                    "heading",
                    "paragraph"
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                multicolor: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false
            })
        ],
        content,
        onUpdate: ({ editor })=>onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                "data-placeholder": placeholder || "Nhập nội dung bài viết...",
                class: "ProseMirror"
            }
        }
    });
    if (!editor) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-[#1e1011] shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a0d0e]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        active: editor.isActive("bold"),
                        title: "Bold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "B"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        active: editor.isActive("italic"),
                        title: "Italic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "I"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                        active: editor.isActive("underline"),
                        title: "Underline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "underline",
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleHighlight().run(),
                        active: editor.isActive("highlight"),
                        title: "Highlight",
                        children: "H"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 1
                            }).run(),
                        active: editor.isActive("heading", {
                            level: 1
                        }),
                        title: "H1",
                        children: "H1"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        active: editor.isActive("heading", {
                            level: 2
                        }),
                        title: "H2",
                        children: "H2"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 3
                            }).run(),
                        active: editor.isActive("heading", {
                            level: 3
                        }),
                        title: "H3",
                        children: "H3"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                        active: editor.isActive("bulletList"),
                        title: "Bullet List",
                        children: "• List"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleOrderedList().run(),
                        active: editor.isActive("orderedList"),
                        title: "Ordered List",
                        children: "1. List"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleBlockquote().run(),
                        active: editor.isActive("blockquote"),
                        title: "Blockquote",
                        children: "❝"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().toggleCode().run(),
                        active: editor.isActive("code"),
                        title: "Code",
                        children: "</>"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().setTextAlign("left").run(),
                        active: editor.isActive({
                            textAlign: "left"
                        }),
                        title: "Align Left",
                        children: "≡←"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().setTextAlign("center").run(),
                        active: editor.isActive({
                            textAlign: "center"
                        }),
                        title: "Center",
                        children: "≡"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().setTextAlign("right").run(),
                        active: editor.isActive({
                            textAlign: "right"
                        }),
                        title: "Align Right",
                        children: "≡→"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().undo().run(),
                        title: "Undo",
                        children: "↩"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarBtn, {
                        onClick: ()=>editor.chain().focus().redo().run(),
                        title: "Redo",
                        children: "↪"
                    }, void 0, false, {
                        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[240px] max-h-[480px] overflow-y-auto text-sm leading-relaxed",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                    editor: editor
                }, void 0, false, {
                    fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-1.5 bg-slate-50 dark:bg-[#1a0d0e] border-t border-slate-200 dark:border-slate-700 text-[10px] text-slate-400 text-right",
                children: [
                    editor.getText().trim().split(/\s+/).filter(Boolean).length,
                    " từ · ",
                    editor.getText().length,
                    " ký tự"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/web/app/components/RichTextEditor.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=packages_web_app_components_0spmmfy._.js.map