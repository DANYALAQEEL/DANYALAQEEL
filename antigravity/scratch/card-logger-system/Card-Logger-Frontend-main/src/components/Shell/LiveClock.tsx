"use client";

import { useEffect, useState } from "react";

/**
 * LiveClock — build spec Section 4.4.
 * Client's local time. Ticks every second without layout shift (fixed-width
 * mono digits handle that automatically via tabular-nums).
 */

export interface LiveClockProps {
  format?: "time-only" | "time-and-date";
}

export default function LiveClock({ format = "time-and-date" }: LiveClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Avoid SSR/client hydration mismatch — render nothing until mounted.
  if (!now) return <div className="h-5 w-32" />;

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

  return (
    <div className="flex items-baseline gap-2 font-mono text-sm tabular-nums text-cc-text-primary">
      <span>{time}</span>
      {format === "time-and-date" && <span className="text-cc-text-muted">{date}</span>}
    </div>
  );
}
