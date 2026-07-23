import { useState } from 'react'
import { Search, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'

export default function DataTable({
  columns = [],
  data = [],
  searchable = true,
  searchPlaceholder = 'Search...',
  pageSize = 10,
  actions,
  emptyMessage = 'No records found',
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

  return (
    <div className="table-container">
      {searchable && (
        <div className="p-4 border-b border-surface-800">
          <div className="relative max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500" />
            <input
              className="input pl-9 py-1.5 text-xs"
              placeholder={searchPlaceholder}
              value={query}
              onChange={handleSearch}
            />
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
                        ? <ChevronUp size={12} className="text-primary-400" />
                        : <ChevronDown size={12} className="text-primary-400" />
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="text-right">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="text-center py-12 text-surface-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginated.map((row, idx) => (
                <tr key={row.id ?? idx}>
                  <td className="text-surface-500 font-mono text-xs">
                    {(page - 1) * pageSize + idx + 1}
                  </td>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key] ?? '—'}
                    </td>
                  ))}
                  {actions && (
                    <td>
                      <div className="flex items-center justify-end gap-1">
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

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-surface-800">
          <span className="text-xs text-surface-500">
            Showing {Math.min((page - 1) * pageSize + 1, sorted.length)}–{Math.min(page * pageSize, sorted.length)} of {sorted.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              className="btn-ghost px-2 py-1 text-xs"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <ChevronLeft size={14} />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const p = totalPages <= 5 ? i + 1
                : page <= 3 ? i + 1
                : page >= totalPages - 2 ? totalPages - 4 + i
                : page - 2 + i
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    p === page
                      ? 'bg-primary-600 text-white'
                      : 'text-surface-400 hover:bg-surface-800'
                  }`}
                >
                  {p}
                </button>
              )
            })}
            <button
              className="btn-ghost px-2 py-1 text-xs"
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
