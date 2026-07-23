import { useState } from 'react'
import { Search, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, SlidersHorizontal, Download, Inbox } from 'lucide-react'

export default function DataTable({
  columns = [],
  data = [],
  searchable = true,
  searchPlaceholder = 'Search...',
  pageSize = 10,
  actions,
  emptyMessage = 'No records found',
  loading = false,
}) {
  const [query, setQuery]     = useState('')
  const [page, setPage]       = useState(1)
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const filtered = data.filter(row =>
    !query || columns.some(col =>
      String(row[col.key] ?? '').toLowerCase().includes(query.toLowerCase())
    )
  )

  const sorted = sortKey
    ? [...filtered].sort((a, b) => {
        const av = a[sortKey] ?? '', bv = b[sortKey] ?? ''
        return sortDir === 'asc'
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av))
      })
    : filtered

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const paginated  = sorted.slice((page - 1) * pageSize, page * pageSize)

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
    setPage(1)
  }

  const handleSearch = (e) => { setQuery(e.target.value); setPage(1) }

  const startIdx = Math.min((page - 1) * pageSize + 1, sorted.length)
  const endIdx = Math.min(page * pageSize, sorted.length)

  return (
    <div className="table-container">
      {/* SaaS Toolbar */}
      {searchable && (
        <div className="p-4 border-b border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 flex items-center justify-between gap-4 flex-wrap">
          <div className="relative w-full max-w-[280px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
            <input
              className="input pl-9 py-1.5 text-xs bg-surface-50 dark:bg-surface-950 border-surface-200 dark:border-surface-800 focus:bg-white focus:dark:bg-surface-900"
              placeholder={searchPlaceholder}
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5">
              <SlidersHorizontal size={12} />
              Columns
            </button>
            <button type="button" className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5">
              <Download size={12} />
              Export
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th className="w-10">#</th>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={col.sortable !== false ? 'cursor-pointer select-none' : ''}
                  onClick={() => col.sortable !== false && toggleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable !== false && sortKey === col.key && (
                      sortDir === 'asc'
                        ? <ChevronUp size={12} className="text-primary-600" />
                        : <ChevronDown size={12} className="text-primary-600" />
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="!text-center">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Shimmer Skeleton State
              Array.from({ length: Math.min(5, pageSize) }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="w-10 py-4"><div className="h-3 bg-surface-200 rounded w-4" /></td>
                  {columns.map(col => (
                    <td key={col.key} className="py-4">
                      <div className="h-3 bg-surface-200 rounded w-5/6" />
                    </td>
                  ))}
                  {actions && <td className="py-4"><div className="h-3 bg-surface-200 rounded w-12 mx-auto" /></td>}
                </tr>
              ))
            ) : paginated.length === 0 ? (
              // Enhanced Empty State with SVG Illustration
              <tr>
                <td
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="text-center py-16 text-surface-500"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-surface-100 dark:bg-surface-950 rounded-full flex items-center justify-center mb-4 text-surface-400 dark:text-surface-600">
                      <Inbox size={28} />
                    </div>
                    <h4 className="text-sm font-semibold text-surface-900 dark:text-surface-100 mb-1">{emptyMessage}</h4>
                    <p className="text-xs text-surface-400 dark:text-surface-500">Try adjusting your search or filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginated.map((row, idx) => (
                <tr key={row.id ?? idx} className="group">
                  <td className="text-surface-400 font-mono text-xs">
                    {(page - 1) * pageSize + idx + 1}
                  </td>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key] ?? '—'}
                    </td>
                  ))}
                  {actions && (
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-150">
                        {actions(row)}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900">
          <span className="text-xs text-surface-500">
            Showing {startIdx}–{endIdx} of {sorted.length} results
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="btn-ghost p-1.5 text-surface-500 disabled:opacity-40"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <ChevronLeft size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .map((p, idx, arr) => {
                const prev = arr[idx - 1]
                const showEllipsis = prev && p - prev > 1
                return (
                  <div key={p} className="flex items-center">
                    {showEllipsis && <span className="px-2 text-xs text-surface-400">...</span>}
                    <button
                      type="button"
                      onClick={() => setPage(p)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                        p === page
                          ? 'bg-primary-500 text-surface-950 font-bold'
                          : 'text-surface-500 hover:bg-surface-100'
                      }`}
                    >
                      {p}
                    </button>
                  </div>
                )
              })}
            <button
              type="button"
              className="btn-ghost p-1.5 text-surface-500 disabled:opacity-40"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
