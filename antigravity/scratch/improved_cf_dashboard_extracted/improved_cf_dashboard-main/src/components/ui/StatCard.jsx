import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  color = 'primary',
  trend,
  sparkline = true,
  sparklineData,
}) {
  const iconColors = {
    primary: 'text-primary-600 bg-primary-100/50 border border-primary-500/20',
    success: 'text-success-700 bg-success-100/50 border border-success-600/20',
    danger:  'text-danger-700 bg-danger-100/50 border border-danger-600/20',
    warning: 'text-primary-700 bg-primary-100/50 border border-primary-500/20', // warning is mapped to primary/amber
    info:    'text-info-700 bg-info-100/50 border border-info-600/20',
    neutral: 'text-surface-600 bg-surface-100 border border-surface-200',
  }

  const borderColors = {
    primary: 'border-t-primary-500/40',
    success: 'border-t-success-600/40',
    danger:  'border-t-danger-600/40',
    warning: 'border-t-primary-500/40',
    info:    'border-t-info-600/40',
    neutral: 'border-t-surface-300/40',
  }

  // Sparkline calculation
  const points = sparklineData || [30, 42, 35, 52, 48, 65, 58, 72]
  const width = 80
  const height = 32
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width
    const y = height - 2 - ((p - min) / range) * (height - 4)
    return `${x},${y}`
  })
  const pathData = `M ${coords.join(' L ')}`

  // Trend styling
  const isUp = trend > 0
  const TrendIcon = isUp ? TrendingUp : TrendingDown
  const trendColor = isUp ? 'text-success-600' : 'text-danger-600'

  return (
    <div className={`stat-card flex flex-col justify-between p-5 min-w-0 ${borderColors[color]}`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest truncate">
            {label}
          </p>
          <h3 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mt-1 leading-none tracking-tight">
            {value}
          </h3>
        </div>
        {Icon && (
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColors[color]}`}>
            <Icon size={16} />
          </div>
        )}
      </div>

      <div className="flex items-end justify-between gap-2 mt-auto">
        <div className="min-w-0">
          {trend !== undefined ? (
            <div className="flex items-center gap-1">
              <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${trendColor}`}>
                <TrendIcon size={12} />
                {Math.abs(trend)}%
              </span>
              <span className="text-xs text-surface-400">vs last month</span>
            </div>
          ) : (
            sub && <p className="text-xs text-surface-500 truncate">{sub}</p>
          )}
        </div>

        {sparkline && (
          <div className="w-20 h-8 flex-shrink-0">
            <svg width={width} height={height} className="overflow-visible">
              <path
                d={pathData}
                fill="none"
                stroke={color === 'danger' ? '#EF4444' : color === 'success' ? '#22C55E' : '#F5A623'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
