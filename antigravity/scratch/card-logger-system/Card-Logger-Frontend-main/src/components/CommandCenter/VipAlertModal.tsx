"use client";

import Image from "next/image";
import { X, Download } from "lucide-react";
import type { Detection } from "./LiveDetectionFeed";

/**
 * VipAlertModal — build spec Section 6.8.
 *
 * This component only RENDERS. The trigger decision (whether to open it)
 * lives in the container (CameraLivePage) and MUST reproduce this exact
 * guard, ported faithfully from the existing CNICCameraPage.tsx:
 *
 *   openModal = newDetection.isVip
 *            && newDetection.id !== lastCheckedId
 *            && newDetection.id !== currentlyDisplayedId
 *            && lastCheckedId !== ""   // i.e. NOT the first fetch on mount
 *
 * Do not simplify this guard — the "not the first fetch on mount" condition
 * is what prevents the modal from firing every time the page loads on a
 * camera whose latest-ever detection happens to be a VIP.
 */

export interface VipAlertModalProps {
  isOpen: boolean;
  detection: Detection | null;
  onClose: () => void;
  onDownloadImage: (id: string) => void;
}

export default function VipAlertModal({ isOpen, detection, onClose, onDownloadImage }: VipAlertModalProps) {
  if (!isOpen || !detection) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="cc-glass-card relative w-full max-w-md border-l-4 border-l-cc-accent-gold p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-cc-text-secondary hover:text-cc-text-primary"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>

        <h2 className="mb-4 text-lg font-semibold text-cc-accent-gold">VIP Detected</h2>

        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md bg-cc-bg-elevated">
          <Image src={detection.imagePath} alt={detection.name} fill sizes="400px" className="object-cover" />
        </div>

        <dl className="space-y-1 text-sm">
          <div className="flex justify-between">
            <dt className="text-cc-text-secondary">Name</dt>
            <dd className="text-cc-text-primary">{detection.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-cc-text-secondary">CNIC</dt>
            <dd className="font-mono tabular-nums text-cc-text-primary">{detection.id}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-cc-text-secondary">Timestamp</dt>
            <dd className="font-mono tabular-nums text-cc-text-primary">
              {new Date(detection.timestamp).toLocaleString()}
            </dd>
          </div>
        </dl>

        <details className="mt-3 text-xs text-cc-text-secondary">
          <summary className="cursor-pointer">Raw details</summary>
          <p className="mt-1 font-mono">{detection.allDetails}</p>
        </details>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm text-cc-text-secondary hover:bg-cc-bg-elevated"
          >
            Dismiss
          </button>
          <button
            onClick={() => onDownloadImage(detection.id)}
            className="flex items-center gap-2 rounded-md bg-cc-accent-gold px-4 py-2 text-sm font-medium text-cc-bg-base hover:bg-cc-accent-gold-dim"
          >
            <Download size={14} />
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}
