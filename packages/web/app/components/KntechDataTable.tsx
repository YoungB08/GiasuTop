import React, { useState, useMemo } from "react";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: any) => React.ReactNode;
}

interface KntechDataTableProps {
  columns: Column[];
  data: any[];
  searchPlaceholder?: string;
  defaultRowsPerPage?: number;
}

export default function KntechDataTable({
  columns,
  data = [],
  searchPlaceholder = "Tìm kiếm...",
  defaultRowsPerPage = 10,
}: KntechDataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  // 1. Filtering
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    const lowerSearch = searchTerm.toLowerCase();
    return data.filter((row) => {
      return Object.keys(row).some((key) => {
        const val = row[key];
        if (val === null || val === undefined) return false;
        return String(val).toLowerCase().includes(lowerSearch);
      });
    });
  }, [data, searchTerm]);

  // 2. Sorting
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    const col = columns.find((c) => c.key === sortColumn);
    const sorted = [...filteredData];

    sorted.sort((a, b) => {
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
  }, [filteredData, sortColumn, sortDirection, columns]);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, rowsPerPage]);

  // 3. Pagination
  const totalRows = sortedData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIdx, startIdx + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const handleSort = (columnKey: string, sortable?: boolean) => {
    if (sortable === false) return;
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-3.5 w-full">
      {/* Search & Rows Per Page controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full h-9 pl-3.5 pr-8 text-xs rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:outline-none focus:border-[#13519c] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Hiển thị</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="h-8 border border-slate-200 dark:border-slate-800 rounded-lg px-1.5 bg-slate-50 dark:bg-slate-900 text-slate-850 dark:text-slate-300 font-semibold cursor-pointer"
          >
            {[5, 10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size} dòng
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table grid */}
      <div className="overflow-x-auto border border-slate-200/60 dark:border-slate-800/80 rounded-xl bg-white dark:bg-[#111827] shadow-sm">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {columns.map((col) => {
                const isCurrentSort = sortColumn === col.key;
                const isSortable = col.sortable !== false;
                return (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key, col.sortable)}
                    className={`px-4 py-3 select-none ${
                      isSortable ? "cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-850" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span>{col.label}</span>
                      {isSortable && (
                        <span className="text-[9px] text-slate-300 dark:text-slate-600">
                          {isCurrentSort ? (sortDirection === "asc" ? "🔼" : "🔽") : "↕️"}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-150 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-slate-400 italic">
                  Không tìm thấy kết quả nào.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rIdx) => (
                <tr
                  key={row.id || row.user_id || rIdx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 align-middle">
                      {col.render ? col.render(row) : String(row[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2.5">
          <div>
            Hiển thị {(currentPage - 1) * rowsPerPage + 1} -{" "}
            {Math.min(currentPage * rowsPerPage, totalRows)} trong số {totalRows} dòng
          </div>
          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((c) => Math.max(c - 1, 1))}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-850 cursor-pointer text-slate-700 dark:text-slate-300 font-semibold"
            >
              Trước
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const p = idx + 1;
              return (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-7 w-7 rounded-lg border flex items-center justify-center font-bold transition cursor-pointer text-[10px] ${
                    currentPage === p
                      ? "bg-[#13519c] border-[#13519c] text-white"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350 dark:hover:bg-slate-850"
                  }`}
                >
                  {p}
                </button>
              );
            })}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((c) => Math.min(c + 1, totalPages))}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-850 cursor-pointer text-slate-700 dark:text-slate-300 font-semibold"
            >
              Sau
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
