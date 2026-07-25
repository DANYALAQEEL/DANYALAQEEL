// Minimal dependency-free bar chart (no charting library in this project's
// package.json, so this avoids adding one just for two dashboard charts).
function SimpleBarChart({ data, valueKey, labelKey, formatValue }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-sm py-8 text-center">No data yet.</p>
  }

  const max = Math.max(...data.map((d) => d[valueKey] || 0), 1)

  return (
    <div className="flex items-end gap-3 h-48 pt-4">
      {data.map((d, i) => {
        const heightPct = Math.max(((d[valueKey] || 0) / max) * 100, 2)
        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group">
            <span className="text-xs text-gray-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {formatValue ? formatValue(d[valueKey]) : d[valueKey]}
            </span>
            <div
              className="w-full bg-primary/70 hover:bg-primary rounded-t-md transition-colors"
              style={{ height: `${heightPct}%` }}
            />
            <span className="text-xs text-gray-500 mt-2">{d[labelKey]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default SimpleBarChart
