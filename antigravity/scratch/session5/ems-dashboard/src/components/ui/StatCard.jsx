export default function StatCard({ label, value, sub, icon: Icon, color = 'primary', trend }) {
  const colors = {
    primary: 'text-primary-400 bg-primary-500/10',
    success: 'text-success-600 bg-success-100',
    danger:  'text-danger-600  bg-danger-100',
    warning: 'text-warning-600 bg-warning-100',
    info:    'text-info-600    bg-info-100',
    neutral: 'text-surface-400 bg-surface-800',
  }
  return (
    <div className="stat-card flex items-start gap-4">
      {Icon && (
        <div className={`p-2.5 rounded-lg flex-shrink-0 ${colors[color]}`}>
          <Icon size={18} />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs text-surface-500 mb-0.5">{label}</p>
        <p className="text-2xl font-semibold text-surface-100 leading-tight">{value}</p>
        {sub && <p className="text-xs text-surface-500 mt-0.5">{sub}</p>}
        {trend && (
          <p className={`text-xs mt-1 font-medium ${trend > 0 ? 'text-success-600' : 'text-danger-600'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last month
          </p>
        )}
      </div>
    </div>
  )
}
