"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

/**
 * ActivityChart — build spec Section 6.3.
 *
 * IMPORTANT: the backend returns daily_stats/weekly_stats/monthly_stats as
 * sparse, unsorted Record<string, number> dictionaries (see api-types.ts).
 * This component expects an ALREADY-NORMALIZED array — sorted chronologically
 * and zero-filled for missing buckets. That normalization is the container's
 * job (per Section 8, data shaping belongs to the container, not here).
 * Do not pass the raw dictionary into this component.
 */

export interface ActivityChartPoint {
  label: string; // pre-formatted for display, e.g. "14:00" or "Jun 28"
  value: number;
}

export type ActivityRange = "daily" | "weekly" | "monthly";

export interface ActivityChartProps {
  series: ActivityChartPoint[];
  activeRange: ActivityRange;
  onRangeChange: (range: ActivityRange) => void;
  isLoading: boolean;
}

const RANGE_TABS: { key: ActivityRange; label: string }[] = [
  { key: "daily", label: "24H" },
  { key: "weekly", label: "This Week" },
  { key: "monthly", label: "This Month" },
];

export default function ActivityChart({ series, activeRange, onRangeChange, isLoading }: ActivityChartProps) {
  return (
    <div className="cc-glass-card-hero flex h-full flex-col p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-cc-text-primary">Detection Activity</h3>
        <div className="flex gap-1 rounded-full bg-cc-bg-elevated p-1">
          {RANGE_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onRangeChange(tab.key)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeRange === tab.key
                  ? "cc-pill-tab-active"
                  : "text-cc-text-secondary hover:text-cc-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="h-64 w-full animate-pulse rounded-2xl bg-cc-bg-elevated" />
      ) : series.length === 0 ? (
        <div className="flex h-64 w-full items-center justify-center text-sm text-cc-text-muted">
          No activity recorded for this range.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={series}>
            <defs>
              <linearGradient id="cc-area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.45} />
                <stop offset="60%" stopColor="#D97706" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#D97706" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="cc-area-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--cc-border-subtle)" vertical={false} />
            <XAxis
              dataKey="label"
              stroke="var(--cc-text-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="var(--cc-text-muted)" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip
              contentStyle={{
                background: "var(--cc-bg-panel)",
                border: "1px solid var(--cc-border-strong)",
                borderRadius: 14,
                color: "var(--cc-text-primary)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#cc-area-stroke)"
              strokeWidth={2.5}
              fill="url(#cc-area-fill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
