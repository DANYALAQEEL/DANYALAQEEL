"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

/**
 * useCountUp — animates a numeric value from its previous value to the new
 * one over ~600ms. Falls back to displaying the raw value immediately for
 * non-numeric values (e.g. formatted strings) — never invents a number.
 */
function useCountUp(value: string | number, durationMs = 600) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const numeric = typeof value === "number" ? value : Number(value);
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const from = prevRef.current ?? numeric;
    const start = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (numeric - from) * eased);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = numeric;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return display;
}

/**
 * KpiCard — build spec Section 6.1.
 * Presentational only. The container page is responsible for fetching data
 * and computing `isLoading` / `isError` — this component must never call
 * axios/fetch itself (build spec Section 10).
 */

export interface KpiCardDelta {
  percentage: number;
  direction: "up" | "down" | "same";
}

export interface KpiCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  delta?: KpiCardDelta;
  isLoading: boolean;
  isError: boolean;
  emptyStateMessage?: string; // shown when not loading/error but value is null/undefined
}

const DIRECTION_ICON = { up: ArrowUp, down: ArrowDown, same: Minus };
const DIRECTION_COLOR_CLASS = {
  up: "text-cc-status-active bg-cc-status-active/10",
  down: "text-cc-status-critical bg-cc-status-critical/10",
  same: "text-cc-text-muted bg-cc-text-muted/10",
};

export default function KpiCard({
  label,
  value,
  icon: Icon,
  delta,
  isLoading,
  isError,
  emptyStateMessage = "No data available",
}: KpiCardProps) {
  const animatedValue = useCountUp(value);
  return (
    <div className="cc-glass-card-hero flex flex-col gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm"
          style={{ background: "var(--cc-gradient-accent)" }}
        >
          <Icon size={22} strokeWidth={1.75} className="text-white" />
        </div>
        {delta && !isLoading && !isError && (() => {
          const DeltaIcon = DIRECTION_ICON[delta.direction];
          return (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${DIRECTION_COLOR_CLASS[delta.direction]}`}
            >
              <DeltaIcon size={12} />
              {delta.percentage}%
            </span>
          );
        })()}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-cc-text-secondary">{label}</p>

        {isLoading && (
          <div className="mt-2 h-9 w-24 animate-pulse rounded bg-cc-bg-elevated" />
        )}

        {!isLoading && isError && (
          <p className="mt-2 text-sm text-cc-status-critical">Couldn't load this data.</p>
        )}

        {!isLoading && !isError && (value === null || value === undefined || value === "") && (
          <p className="mt-2 text-sm text-cc-text-muted">{emptyStateMessage}</p>
        )}

        {!isLoading && !isError && value !== null && value !== undefined && value !== "" && (
          <p className="mt-1 font-mono text-3xl font-semibold tabular-nums text-cc-text-primary">
            {animatedValue}
          </p>
        )}
      </div>
    </div>
  );
}
