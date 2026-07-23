"use client";

/**
 * RadialGauge — build spec Section 6.2.
 * A 270-degree circular progress ring (not a full circle) to match the
 * reference boards. Purely presentational — the container decides what
 * `value`/`displayValue` mean and MUST supply real, traceable numbers only
 * (see build spec Section 1.4 — never wire this to an invented metric).
 */

export interface RadialGaugeProps {
  label: string;
  value: number; // 0-100
  displayValue: string; // caller controls exact formatting, e.g. "23%" or "12 / 54"
  color?: string; // defaults to teal — only override for an explicit, documented semantic reason
  size?: "sm" | "md" | "lg";
  isEmpty?: boolean;
  emptyStateMessage?: string;
}

const SIZE_PX = { sm: 96, md: 140, lg: 180 };
const SWEEP_DEGREES = 270;

export default function RadialGauge({
  label,
  value,
  displayValue,
  color = "var(--cc-accent-teal)",
  size = "md",
  isEmpty = false,
  emptyStateMessage = "No data yet",
}: RadialGaugeProps) {
  const diameter = SIZE_PX[size];
  const strokeWidth = diameter * 0.08;
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const sweepLength = (SWEEP_DEGREES / 360) * circumference;
  const clampedValue = Math.max(0, Math.min(100, value));
  const filledLength = (clampedValue / 100) * sweepLength;

  // Rotate so the gauge opening sits at the bottom, matching the reference boards.
  const rotationOffset = 90 + (360 - SWEEP_DEGREES) / 2;

  return (
    <div className="cc-glass-card-hero flex flex-col items-center gap-3 p-5">
      <div className="relative" style={{ width: diameter, height: diameter }}>
        <svg width={diameter} height={diameter} className="-rotate-90">
          <defs>
            <linearGradient id="cc-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            stroke="var(--cc-border-subtle)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${sweepLength} ${circumference}`}
            strokeLinecap="round"
            transform={`rotate(${rotationOffset} ${diameter / 2} ${diameter / 2})`}
          />
          {/* Fill */}
          {!isEmpty && (
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="none"
              stroke={color === "var(--cc-accent-teal)" ? "url(#cc-gauge-gradient)" : color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${filledLength} ${circumference}`}
              strokeLinecap="round"
              transform={`rotate(${rotationOffset} ${diameter / 2} ${diameter / 2})`}
              className="transition-all duration-500 ease-out"
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {isEmpty ? (
            <span className="px-4 text-center text-xs text-cc-text-muted">{emptyStateMessage}</span>
          ) : (
            <span className="font-mono text-xl font-semibold tabular-nums text-cc-text-primary">
              {displayValue}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs uppercase tracking-wide text-cc-text-secondary">{label}</p>
    </div>
  );
}
