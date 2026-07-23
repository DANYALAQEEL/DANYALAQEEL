"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * VipBadge is intentionally separate from StatusPill. StatusPill's color
 * vocabulary (active/idle/warning/critical/info) has fixed semantic
 * meaning per build spec Section 2.2 — "warning" means amber/caution, not
 * VIP. VIP uses the separately reserved gold accent (Section 2.2), so it
 * gets its own tiny badge rather than overloading StatusPill's "warning".
 */
function VipBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-cc-accent-gold/10 px-2 py-1 text-xs font-medium text-cc-accent-gold">
      VIP
    </span>
  );
}

/**
 * LiveDetectionFeed — build spec Section 5.4 / 6.7.
 * Presentational. The container refetches `detections` whenever
 * ConnectionStatusProvider's `cardUpdateTick` increments (build spec 6.9) —
 * this component just renders whatever array it's given.
 */

export interface Detection {
  id: string; // cnic
  name: string;
  timestamp: string;
  imagePath: string;
  allDetails: string;
  isVip: boolean;
  cameraLabel: string; // resolved by the container via a join against /api/camera/all; if unresolvable, pass the raw camera id as a string — never a guessed name
}

export interface LiveDetectionFeedProps {
  detections: Detection[];
  isLoading: boolean;
  onImageClick: (detection: Detection) => void;
}

export default function LiveDetectionFeed({ detections, isLoading, onImageClick }: LiveDetectionFeedProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Only animate rows that weren't present on the previous render — without
  // this, every fetch replays the "new entry" glow on the entire table,
  // which is misleading (looks like everything just arrived).
  const seenKeysRef = useRef<Set<string>>(new Set());
  const hasLoadedOnceRef = useRef(false);
  const [newKeys, setNewKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const currentKeys = new Set(detections.map((d) => `${d.id}-${d.timestamp}`));
    const freshlyNew = new Set<string>();
    if (hasLoadedOnceRef.current) {
      currentKeys.forEach((k) => {
        if (!seenKeysRef.current.has(k)) freshlyNew.add(k);
      });
    }
    if (detections.length > 0) hasLoadedOnceRef.current = true;
    seenKeysRef.current = currentKeys;
    setNewKeys(freshlyNew);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detections]);

  return (
    <div className="cc-glass-card p-5">
      <h3 className="mb-3 text-sm font-semibold text-cc-text-primary">Live Detection Feed</h3>

      {isLoading && (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 w-full animate-pulse rounded bg-cc-bg-elevated" />
          ))}
        </div>
      )}

      {!isLoading && detections.length === 0 && (
        <div className="flex h-32 items-center justify-center text-sm text-cc-text-muted">
          No detections yet today.
        </div>
      )}

      {!isLoading && detections.length > 0 && (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-cc-border-subtle text-left text-xs uppercase tracking-wide text-cc-text-secondary">
              <th className="py-2 pr-3 font-medium">Photo</th>
              <th className="py-2 pr-3 font-medium">Name</th>
              <th className="py-2 pr-3 font-medium">CNIC</th>
              <th className="py-2 pr-3 font-medium">Camera</th>
              <th className="py-2 pr-3 font-medium">Timestamp</th>
              <th className="py-2 pr-3 font-medium">VIP</th>
            </tr>
          </thead>
          <tbody>
            {detections.map((d) => (
              <DetectionRow
                key={`${d.id}-${d.timestamp}`}
                detection={d}
                isExpanded={expandedId === d.id}
                isNew={newKeys.has(`${d.id}-${d.timestamp}`)}
                onToggleExpand={() => setExpandedId(expandedId === d.id ? null : d.id)}
                onImageClick={() => onImageClick(d)}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

interface DetectionRowProps {
  detection: Detection;
  isExpanded: boolean;
  isNew: boolean;
  onToggleExpand: () => void;
  onImageClick: () => void;
}

function DetectionRow({ detection, isExpanded, isNew, onToggleExpand, onImageClick }: DetectionRowProps) {
  return (
    <>
      <tr
        className={`cursor-pointer border-b border-cc-border-subtle transition-colors hover:bg-cc-bg-elevated/60 ${
          isNew ? "cc-live-row-enter" : ""
        } ${detection.isVip ? "cc-vip-row-glow" : ""}`}
        onClick={onToggleExpand}
      >
        <td className="py-2 pr-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onImageClick();
            }}
            className="relative h-10 w-10 overflow-hidden rounded-md bg-cc-bg-elevated transition-transform hover:scale-110 active:scale-95 duration-200"
            title="Click to view enlarged image"
          >
            <Image src={detection.imagePath} alt={detection.name} fill sizes="40px" className="object-cover" />
          </button>
        </td>
        <td className="py-2 pr-3 text-cc-text-primary">{detection.name}</td>
        <td className="py-2 pr-3 font-mono tabular-nums text-cc-text-secondary">{detection.id}</td>
        <td className="py-2 pr-3 text-cc-text-secondary">{detection.cameraLabel}</td>
        <td className="py-2 pr-3 font-mono tabular-nums text-cc-text-secondary">
          {new Date(detection.timestamp).toLocaleString()}
        </td>
        <td className="py-2 pr-3">
          {detection.isVip && <VipBadge />}
        </td>
      </tr>
      {isExpanded && (
        <tr className="border-b border-cc-border-subtle bg-cc-bg-elevated/40">
          <td colSpan={6} className="px-3 py-3 font-mono text-xs text-cc-text-secondary">
            {detection.allDetails}
          </td>
        </tr>
      )}
    </>
  );
}
