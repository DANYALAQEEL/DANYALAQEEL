"use client";

import Image from "next/image";
import type { PlateDetection } from "@/types/api-types";

/**
 * PlateActivityStrip — build spec Section 5.5.
 *
 * CORRECTION vs. the original build spec: Section 5.5 called for a
 * confidence percentage bar per plate. That field (`plate_confidence`)
 * exists in the database but is verifiably NOT returned by any current
 * `/api/number-plate/*` route (see api-types.ts comment on PlateDetection).
 * This component therefore does NOT render a confidence indicator. If
 * confidence display is required, the backend route must be updated first
 * to include `plate_confidence` in its response — do not fabricate a value
 * client-side to fill the gap.
 */

export interface PlateActivityItem extends PlateDetection {
  cameraLabel: string;
}

export interface PlateActivityStripProps {
  plates: PlateActivityItem[];
  isLoading: boolean;
}

export default function PlateActivityStrip({ plates, isLoading }: PlateActivityStripProps) {
  return (
    <div className="cc-glass-card p-5">
      <h3 className="mb-3 text-sm font-semibold text-cc-text-primary">Number Plate Activity</h3>

      {isLoading && (
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-28 w-40 shrink-0 animate-pulse rounded-md bg-cc-bg-elevated" />
          ))}
        </div>
      )}

      {!isLoading && plates.length === 0 && (
        <div className="flex h-24 items-center justify-center text-sm text-cc-text-muted">
          No plate detections yet.
        </div>
      )}

      {!isLoading && plates.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {plates.map((p) => (
            <div
              key={`${p.number_plate}-${p.timestamp}`}
              className="w-40 shrink-0 rounded-md border border-cc-border-subtle bg-cc-bg-elevated"
            >
              <div className="relative h-20 w-full overflow-hidden rounded-t-md bg-cc-bg-panel">
                <Image src={p.img_path} alt={p.number_plate} fill sizes="160px" className="object-cover" />
              </div>
              <div className="p-2">
                <p className="truncate font-mono text-sm tabular-nums text-cc-text-primary">{p.number_plate}</p>
                <p className="truncate text-xs text-cc-text-secondary">{p.cameraLabel}</p>
                <p className="font-mono text-[10px] tabular-nums text-cc-text-muted">
                  {new Date(p.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
