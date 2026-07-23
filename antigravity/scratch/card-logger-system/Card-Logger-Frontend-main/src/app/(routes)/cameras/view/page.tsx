"use client";

/**
 * CameraLivePage — container component.
 *
 * Per build spec Section 8.2 / Section 6.8.
 * Wraps CNICCameraPage and NumPlateCamera in the Command Center shell.
 * Handles VIP alert with EXACT guard ported from CNICCameraPage.tsx:
 *
 *   open = newDetection.isVip
 *       && newDetection.id !== lastCheckedId
 *       && newDetection.id !== currentlyDisplayedId
 *       && lastCheckedId !== ""   // NOT first fetch on mount
 *
 * DO NOT simplify this guard — the lastCheckedId !== "" condition prevents
 * the modal from firing every time the page loads on a camera whose
 * latest-ever detection happens to be a VIP.
 */

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { RefreshCw, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useConnectionStatus } from "@/providers/ConnectionStatusProvider";
import RTSPStream from "@/components/Camera/RTSPStream";
import VipAlertModal from "@/components/CommandCenter/VipAlertModal";
import LiveDetectionFeed, { Detection } from "@/components/CommandCenter/LiveDetectionFeed";
import type { CnicDetection, PlateDetection } from "@/types/api-types";
import type { PlateActivityItem } from "@/components/CommandCenter/PlateActivityStrip";
import PlateActivityStrip from "@/components/CommandCenter/PlateActivityStrip";
import { getAPIURL } from "@/libs/api";

export default function CameraLivePage() {
  const searchParams = useSearchParams();
  const cameraID = parseInt(searchParams.get("cameraID") || searchParams.get("id") || "0", 10);
  const cameraType = searchParams.get("cameraType") || searchParams.get("type") || "cnic";
  const cameraName = searchParams.get("cameraName") || searchParams.get("name") || "Camera";

  const { cardUpdateTick, plateUpdateTick } = useConnectionStatus();

  // CNIC detection state
  const [detections, setDetections] = useState<CnicDetection[]>([]);
  const [detectionsLoading, setDetectionsLoading] = useState(true);

  // VIP alert state — exact guard per Section 6.8
  const [latestDetection, setLatestDetection] = useState<CnicDetection | null>(null);
  const lastCheckedIdRef = useRef<string>("");          // the guard's lastCheckedId
  const currentlyDisplayedIdRef = useRef<string>("");   // the guard's currentlyDisplayedId
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [vipModalDetection, setVipModalDetection] = useState<Detection | null>(null);

  // Plate detection state
  const [plates, setPlates] = useState<PlateActivityItem[]>([]);
  const [platesLoading, setPlatesLoading] = useState(true);

  // Multi-stream grid — Section: "premium" feature request. Only affects
  // this page's stream panel; single-camera detection/plate data below it
  // is unaffected and still scoped to `cameraID` from the URL.
  const [streamLayout, setStreamLayout] = useState<"single" | "2x2" | "3x3">("single");
  const [gridCameras, setGridCameras] = useState<{ id: number; name: string }[]>([]);
  const [gridCamerasLoading, setGridCamerasLoading] = useState(false);

  useEffect(() => {
    if (streamLayout === "single" || gridCameras.length > 0) return;
    setGridCamerasLoading(true);
    axios
      .get("/api/camera/all")
      .then((r) => setGridCameras(Array.isArray(r.data.data) ? r.data.data : []))
      .catch(() => setGridCameras([]))
      .finally(() => setGridCamerasLoading(false));
  }, [streamLayout, gridCameras.length]);

  const gridSlotCount = streamLayout === "2x2" ? 4 : streamLayout === "3x3" ? 9 : 1;

  // Fetch all detections for this camera
  const fetchDetections = useCallback(async () => {
    setDetectionsLoading(true);
    try {
      const r = await axios.get(`/api/id-card-camera/cnic-timestamps/${cameraID}`);
      setDetections(Array.isArray(r.data.data) ? r.data.data : []);
    } catch { /* handled by isError not needed per-row */ }
    finally { setDetectionsLoading(false); }
  }, [cameraID]);

  // Fetch latest detection and apply VIP guard
  const fetchLatest = useCallback(async () => {
    try {
      const r = await axios.get(`/api/id-card-camera/cnic-timestamp-latest/${cameraID}`);
      const newDetection: CnicDetection = r.data.data;

      // Exact VIP guard ported from CNICCameraPage.tsx
      if (
        newDetection.isVip &&
        newDetection.id !== lastCheckedIdRef.current &&
        newDetection.id !== currentlyDisplayedIdRef.current &&
        lastCheckedIdRef.current !== ""
      ) {
        currentlyDisplayedIdRef.current = newDetection.id;
        let finalPath = newDetection.imagePath || "";
        if (finalPath && !finalPath.startsWith("/images/") && !finalPath.startsWith("http")) {
          const parts = finalPath.split("/");
          const fileName = parts[parts.length - 1];
          const nameWithoutExt = fileName.split(".")[0];
          finalPath = `/api/id-card-camera/cnic-timestamp-latest-image/${nameWithoutExt}`;
        }
        setVipModalDetection({
          id: newDetection.id,
          name: newDetection.name,
          timestamp: newDetection.timestamp,
          imagePath: finalPath,
          allDetails: newDetection.allDetails,
          isVip: true,
          cameraLabel: cameraName,
        });
        setVipModalOpen(true);
      }

      lastCheckedIdRef.current = newDetection.id;
      setLatestDetection(newDetection);
    } catch { /* no-op */ }
  }, [cameraID, cameraName]);

  // Fetch number plates for this camera
  const fetchPlates = useCallback(async () => {
    setPlatesLoading(true);
    try {
      const r = await axios.get(`/api/number-plate/cnic-timestamps/${cameraID}`);
      const data: PlateDetection[] = Array.isArray(r.data.data) ? r.data.data : [];
      setPlates(data.map((p) => ({
        ...p,
        cameraLabel: cameraName,
        img_path: `/api/number-plate/image/${p.number_plate}`
      })));
    } catch { setPlates([]); }
    finally { setPlatesLoading(false); }
  }, [cameraID, cameraName]);

  // Initial load
  useEffect(() => {
    if (cameraType === "cnic") {
      fetchDetections();
      fetchLatest();
    } else {
      fetchPlates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // WebSocket-triggered refetch
  useEffect(() => {
    if (cameraType === "cnic") {
      fetchLatest();
      fetchDetections();
    }
  }, [cardUpdateTick]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (cameraType !== "cnic") {
      fetchPlates();
    }
  }, [plateUpdateTick]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDownloadImage = async (id: string) => {
    const response = await fetch(
      getAPIURL() + "/api/id-card-camera/cnic-timestamp-latest-image/" + id
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = id + ".jpg";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const detectionRows: Detection[] = detections.map((d) => {
    let finalPath = d.imagePath || "";
    if (finalPath && !finalPath.startsWith("/images/") && !finalPath.startsWith("http")) {
      const parts = finalPath.split("/");
      const fileName = parts[parts.length - 1];
      const nameWithoutExt = fileName.split(".")[0];
      finalPath = `/api/id-card-camera/cnic-timestamp-latest-image/${nameWithoutExt}`;
    }
    return {
      id: d.id,
      name: d.name,
      timestamp: d.timestamp,
      imagePath: finalPath,
      allDetails: d.allDetails,
      isVip: d.isVip ?? false,
      cameraLabel: cameraName,
    };
  });

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">{cameraName}</h1>
          <p className="mt-1 text-sm text-cc-text-secondary capitalize">{cameraType.replace("_", " ")} camera</p>
        </div>
        <button
          onClick={() => {
            if (cameraType === "cnic") { fetchDetections(); fetchLatest(); }
            else fetchPlates();
          }}
          className="flex items-center gap-2 rounded-md border border-cc-border-subtle bg-cc-bg-panel px-3 py-2 text-sm text-cc-text-secondary hover:text-cc-text-primary"
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      {/* Stream layout toggle */}
      <div className="flex items-center gap-2">
        {(["single", "2x2", "3x3"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setStreamLayout(mode)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              streamLayout === mode
                ? "cc-pill-tab-active"
                : "bg-cc-bg-elevated text-cc-text-secondary hover:text-cc-text-primary"
            }`}
          >
            {mode === "single" ? "Single Camera" : mode.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Stream + latest detection */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7 cc-glass-card overflow-hidden rounded-xl">
          {streamLayout === "single" ? (
            <RTSPStream cam_id={cameraID} />
          ) : gridCamerasLoading ? (
            <div className="flex h-64 items-center justify-center text-sm text-cc-text-secondary">
              Loading camera list…
            </div>
          ) : (
            <div
              className={`grid gap-2 p-2 ${streamLayout === "2x2" ? "grid-cols-2" : "grid-cols-3"}`}
            >
              {gridCameras.slice(0, gridSlotCount).map((cam) => (
                <div key={cam.id} className="overflow-hidden rounded-lg">
                  <RTSPStream cam_id={cam.id} showHeader={false} />
                </div>
              ))}
              {gridCameras.length === 0 && (
                <div className="col-span-full flex h-64 items-center justify-center text-sm text-cc-text-secondary">
                  No cameras available.
                </div>
              )}
            </div>
          )}
        </div>

        {cameraType === "cnic" && latestDetection && (
          <div className="col-span-12 xl:col-span-5 cc-glass-card p-5 space-y-4">
            <h3 className="text-sm font-semibold text-cc-text-primary">Latest Detection</h3>
            <div className="relative h-40 w-full overflow-hidden rounded-md bg-cc-bg-elevated">
              <Image
                src={(() => {
                  let finalPath = latestDetection.imagePath || "";
                  if (finalPath && !finalPath.startsWith("/images/") && !finalPath.startsWith("http")) {
                    const parts = finalPath.split("/");
                    const fileName = parts[parts.length - 1];
                    const nameWithoutExt = fileName.split(".")[0];
                    finalPath = `/api/id-card-camera/cnic-timestamp-latest-image/${nameWithoutExt}`;
                  }
                  return finalPath;
                })()}
                alt={latestDetection.name}
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-cc-text-secondary">Name</dt>
                <dd className="font-medium text-cc-text-primary">{latestDetection.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cc-text-secondary">CNIC</dt>
                <dd className="font-mono tabular-nums text-cc-text-primary">{latestDetection.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cc-text-secondary">Time</dt>
                <dd className="font-mono tabular-nums text-cc-text-primary">
                  {new Date(latestDetection.timestamp).toLocaleString()}
                </dd>
              </div>
              {latestDetection.isVip && (
                <div className="flex justify-between">
                  <dt className="text-cc-text-secondary">Status</dt>
                  <dd className="rounded-full bg-cc-accent-gold/10 px-2 py-0.5 text-xs font-semibold text-cc-accent-gold">
                    VIP
                  </dd>
                </div>
              )}
            </dl>
            <button
              onClick={() => handleDownloadImage(latestDetection.id)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-cc-bg-base hover:opacity-90"
            >
              <Download size={14} />
              Download Image
            </button>
          </div>
        )}
      </div>

      {/* Detection feed or plate strip */}
      {cameraType === "cnic" ? (
        <LiveDetectionFeed
          detections={detectionRows}
          isLoading={detectionsLoading}
          onImageClick={(d) => {
            if (d.imagePath) window.open(d.imagePath, "_blank");
          }}
        />
      ) : (
        <PlateActivityStrip plates={plates} isLoading={platesLoading} />
      )}

      {/* VIP Alert Modal */}
      <VipAlertModal
        isOpen={vipModalOpen}
        detection={vipModalDetection}
        onClose={() => setVipModalOpen(false)}
        onDownloadImage={handleDownloadImage}
      />
    </div>
  );
}
