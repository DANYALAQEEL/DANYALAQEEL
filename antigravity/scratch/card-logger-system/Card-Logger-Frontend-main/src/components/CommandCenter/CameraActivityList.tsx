"use client";

import { Camera as CameraIcon } from "lucide-react";
import StatusPill from "./StatusPill";
import type { CameraActivityItem } from "@/types/api-types";

/**
 * CameraActivityList — build spec Section 6.6.
 *
 * `activityStatus` on each item MUST be pre-computed by the container using
 * this exact rule (Section 6.6): "active" if lastDetectionTimestamp is
 * within the last 15 minutes, else "idle". This component does not compute
 * it and does not know about "online/offline" hardware status — that data
 * does not exist in this system (see build spec Section 1.4).
 */

export interface CameraActivityListProps {
  cameras: CameraActivityItem[];
  isLoading: boolean;
  onCameraClick: (cameraId: number) => void;
}

export default function CameraActivityList({ cameras, isLoading, onCameraClick }: CameraActivityListProps) {
  return (
    <div className="cc-glass-card flex h-full flex-col p-5">
      <h3 className="mb-3 text-sm font-semibold text-cc-text-primary">Camera Activity</h3>

      {isLoading && (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 w-full animate-pulse rounded bg-cc-bg-elevated" />
          ))}
        </div>
      )}

      {!isLoading && cameras.length === 0 && (
        <div className="flex h-40 items-center justify-center text-sm text-cc-text-muted">
          No cameras configured yet.
        </div>
      )}

      {!isLoading && cameras.length > 0 && (
        <ul className="flex flex-col divide-y divide-cc-border-subtle overflow-y-auto">
          {cameras.map((cam) => (
            <li key={cam.id}>
              <button
                onClick={() => onCameraClick(cam.id)}
                className="flex w-full items-center justify-between gap-3 py-3 text-left transition-colors hover:bg-cc-bg-elevated/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-cc-bg-elevated">
                    <CameraIcon size={16} strokeWidth={1.75} className="text-cc-text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cc-text-primary">{cam.name}</p>
                    <p className="text-xs text-cc-text-secondary">{cam.locationDescription}</p>
                  </div>
                </div>
                <StatusPill
                  status={cam.activityStatus === "active" ? "active" : "idle"}
                  label={cam.activityStatus === "active" ? "Active" : "No recent activity"}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
