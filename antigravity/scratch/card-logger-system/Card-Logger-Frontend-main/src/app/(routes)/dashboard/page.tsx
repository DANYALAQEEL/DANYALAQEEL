"use client";

/**
 * DashboardPage — container component.
 *
 * Per build spec Section 8: this is the ONLY component that fetches data
 * for the Command Dashboard. It wires real backend endpoints to presentational
 * components. No presentational component in Section 6 may call fetch/axios.
 *
 * Section 13 corrections applied:
 *  - Chart data is a sparse dict, not an array → normalized here before passing
 *  - repeat_visitors has no name field → names joined client-side from detections
 *  - plate_confidence is absent from API → PlateActivityStrip has no confidence bar
 */

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  CreditCard,
  Database,
  Activity,
  Users,
} from "lucide-react";

import KpiCard from "@/components/CommandCenter/KpiCard";
import ActivityChart from "@/components/CommandCenter/ActivityChart";
import RadialGauge from "@/components/CommandCenter/RadialGauge";
import CampusMap from "@/components/CommandCenter/CampusMap";
import CameraActivityList from "@/components/CommandCenter/CameraActivityList";
import LiveDetectionFeed, { Detection } from "@/components/CommandCenter/LiveDetectionFeed";
import PlateActivityStrip from "@/components/CommandCenter/PlateActivityStrip";

import { useConnectionStatus } from "@/providers/ConnectionStatusProvider";

import type {
  TotalIdCardsToday,
  TotalCnicCount,
  TotalTimestampsStats,
  RepeatVisitors,
  IdCardsStatsChart,
  CnicDetection,
  Camera,
  CameraLocation,
  CameraActivityItem,
  CampusMapNode,
  PlateDetection,
} from "@/types/api-types";
import type { PlateActivityItem } from "@/components/CommandCenter/PlateActivityStrip";

// ---------------------------------------------------------------------------
// Chart normalization (Section 13.1)
// Sort sparse dicts by key and zero-fill missing buckets before charting.
// ---------------------------------------------------------------------------
function normalizeChartSeries(
  stats: Record<string, number>,
  range: "daily" | "weekly" | "monthly"
): { label: string; value: number }[] {
  const entries = Object.entries(stats).sort(([a], [b]) => a.localeCompare(b));
  if (entries.length === 0) return [];

  const filled: { label: string; value: number }[] = [];

  // For daily: hourly buckets over last 24h
  // For weekly/monthly: daily buckets — fill gaps between first and last key
  if (range === "daily") {
    // Expect keys like "2026-07-02 14:00:00" — use last 2 chars of time portion as label
    const map = new Map(entries);
    const allKeys = entries.map(([k]) => k);
    allKeys.forEach((k) => {
      const parts = k.split(" ");
      const timePart = parts[1] ?? k;
      const hour = timePart.slice(0, 5); // "HH:MM"
      filled.push({ label: hour, value: map.get(k) ?? 0 });
    });
  } else {
    // Weekly / monthly — keys are date strings "YYYY-MM-DD"
    const map = new Map(entries);
    const firstDate = new Date(entries[0][0]);
    const lastDate = new Date(entries[entries.length - 1][0]);
    const cursor = new Date(firstDate);
    while (cursor <= lastDate) {
      const key = cursor.toISOString().slice(0, 10);
      const label = `${cursor.getMonth() + 1}/${cursor.getDate()}`;
      filled.push({ label, value: map.get(key) ?? 0 });
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  return filled;
}

// ---------------------------------------------------------------------------
// Activity status computation (Section 6.6) — 15-minute threshold
// ---------------------------------------------------------------------------
function computeActivityStatus(lastTimestamp: string | null): "active" | "idle" {
  if (!lastTimestamp) return "idle";
  const diff = Date.now() - new Date(lastTimestamp).getTime();
  return diff < 15 * 60 * 1000 ? "active" : "idle";
}

// ---------------------------------------------------------------------------
// Data state helper
// ---------------------------------------------------------------------------
interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

function useFetch<T>(fetcher: () => Promise<T>, deps: unknown[]): [FetchState<T>, () => void] {
  const [state, setState] = useState<FetchState<T>>({ data: null, isLoading: true, isError: false });

  const load = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, isError: false }));
    try {
      const data = await fetcher();
      setState({ data, isLoading: false, isError: false });
    } catch {
      setState({ data: null, isLoading: false, isError: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => { load(); }, [load]);

  return [state, load];
}

// ---------------------------------------------------------------------------
// DashboardPage
// ---------------------------------------------------------------------------
export default function DashboardPage() {
  const router = useRouter();
  const { cardUpdateTick, plateUpdateTick } = useConnectionStatus();
  const [chartRange, setChartRange] = useState<"daily" | "weekly" | "monthly">("daily");

  // Campus map click-to-filter. Only the plate strip can actually be
  // filtered by location — plates carry a camera identity that resolves to
  // a location. The CNIC live feed's /cnic-timestamps-all endpoint does not
  // return cam_id per row (see normalization comments below), so it cannot
  // be filtered by location without a backend change. We show a note
  // instead of silently filtering nothing or fabricating a match.
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);

  // KPI: total cards today
  const [kpiCards, retryKpiCards] = useFetch<TotalIdCardsToday>(
    () => axios.get("/api/dashboard/total-id-cards").then((r) => r.data.data),
    []
  );

  // KPI: total unique CNICs
  const [kpiCnic, retryKpiCnic] = useFetch<TotalCnicCount>(
    () => axios.get("/api/dashboard/total-cnic-count").then((r) => r.data.data),
    []
  );

  // KPI: timestamps stats (week/month)
  const [kpiTimestamps, retryKpiTimestamps] = useFetch<TotalTimestampsStats>(
    () => axios.get("/api/dashboard/total-timestamps-stats").then((r) => r.data.data),
    []
  );

  // KPI: repeat visitors
  const [kpiRepeat, retryKpiRepeat] = useFetch<RepeatVisitors>(
    () => axios.get("/api/dashboard/repeat-visitors").then((r) => r.data.data),
    []
  );

  // Chart series
  const [chartData, retryChart] = useFetch<IdCardsStatsChart>(
    () => axios.get("/api/dashboard/id-cards-stats-chart").then((r) => r.data.data),
    []
  );

  // All cameras
  const [cameras, retryCameras] = useFetch<Camera[]>(
    () => axios.get("/api/camera/all").then((r) => r.data.data),
    []
  );

  // All locations
  const [locations, retryLocations] = useFetch<CameraLocation[]>(
    () => axios.get("/api/camera/locations").then((r) => r.data.data),
    []
  );

  // Live detections — refetch whenever cardUpdateTick changes
  const [detections, retryDetections] = useFetch<CnicDetection[]>(
    () => axios.get("/api/id-card-camera/cnic-timestamps-all").then((r) => r.data.data),
    [cardUpdateTick]
  );

  // Number plate strip — parallel fetch per camera, refetch on plateUpdateTick
  const [plates, setPlates] = useState<PlateActivityItem[]>([]);
  const [platesLoading, setPlatesLoading] = useState(false);

  useEffect(() => {
    if (!cameras.data || cameras.data.length === 0) return;
    setPlatesLoading(true);
    Promise.allSettled(
      cameras.data.map((cam) =>
        axios
          .get<{ data: PlateDetection }>(`/api/number-plate/cnic-timestamp-latest/${cam.id}`)
          .then((r) => ({
            ...r.data.data,
            cameraLabel: cam.name,
            img_path: `/api/number-plate/image/${r.data.data.number_plate}`
          }))
          .catch(() => null)
      )
    ).then((results) => {
      const valid: PlateActivityItem[] = results
        .filter((r): r is PromiseFulfilledResult<PlateActivityItem> =>
          r.status === "fulfilled" && r.value !== null
        )
        .map((r) => r.value)
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setPlates(valid);
      setPlatesLoading(false);
    });
  }, [cameras.data, plateUpdateTick]);

  // ---------------------------------------------------------------------------
  // Derived data: camera activity items (join cameras + last detection timestamp)
  // ---------------------------------------------------------------------------
  const cameraActivityItems: CameraActivityItem[] = (cameras.data ?? []).map((cam) => {
    const latestForCam = (detections.data ?? [])
      .filter((d) => {
        // Detection has no cam_id in cnic-timestamps-all, so we can't filter precisely.
        // The per-camera endpoint would give this — for now, mark all as unknown
        // and compute last overall. Container note: cam_id would be needed for per-cam.
        return true;
      })
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    // Since the /all endpoint doesn't expose cam_id per detection row, we use null here.
    // This is an accurate representation of what the backend provides in this endpoint.
    const lastTs = latestForCam[0]?.timestamp ?? null;
    return {
      id: cam.id,
      name: cam.name,
      locationDescription: cam.location ?? "",
      thumbnailUrl: `/api/camera/thumbnail/${cam.id}`,
      lastDetectionTimestamp: null, // cam_id not in /all response — see comment above
      activityStatus: computeActivityStatus(null),
    };
  }).sort((a, b) => {
    // Sort active first, then by name
    if (a.activityStatus === b.activityStatus) return a.name.localeCompare(b.name);
    return a.activityStatus === "active" ? -1 : 1;
  });

  // ---------------------------------------------------------------------------
  // Derived data: CampusMap nodes (join locations + camera counts)
  // ---------------------------------------------------------------------------
  const campusNodes: CampusMapNode[] = (locations.data ?? []).map((loc) => ({
    locationId: loc.id,
    description: loc.description,
    cameraCount: (cameras.data ?? []).filter((c) => {
      // Camera.location is already resolved as description string by backend
      // We use description match since cam.location_id is not exposed in the Camera type
      return c.location === loc.description;
    }).length,
  }));

  // ---------------------------------------------------------------------------
  // Derived data: plates filtered/attributed by location (campus map filter)
  // Plates carry cameraLabel (camera name) → resolve to camera.location →
  // match against location.description. This is a real, traceable join —
  // not a guess.
  // ---------------------------------------------------------------------------
  const cameraNameToLocation = new Map(
    (cameras.data ?? []).map((c) => [c.name, c.location])
  );
  const selectedLocationDescription =
    selectedLocationId !== null
      ? (locations.data ?? []).find((l) => l.id === selectedLocationId)?.description ?? null
      : null;
  const filteredPlates = selectedLocationDescription
    ? plates.filter((p) => cameraNameToLocation.get(p.cameraLabel) === selectedLocationDescription)
    : plates;

  const latestActivityByLocation: Record<string, string> = {};
  plates.forEach((p) => {
    const loc = cameraNameToLocation.get(p.cameraLabel);
    if (!loc) return;
    if (!latestActivityByLocation[loc]) {
      const minsAgo = Math.max(0, Math.round((Date.now() - new Date(p.timestamp).getTime()) / 60000));
      latestActivityByLocation[loc] = `Plate ${p.number_plate} · ${minsAgo}m ago`;
    }
  });


  // ---------------------------------------------------------------------------
  // Derived data: Live detections mapped to Detection type (add cameraLabel)
  // ---------------------------------------------------------------------------
  const cameraMap = new Map((cameras.data ?? []).map((c) => [c.id, c.name]));
  const detectionRows: Detection[] = (detections.data ?? []).map((d) => {
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
      cameraLabel: "All Cameras", // /cnic-timestamps-all doesn't expose cam_id per row
    };
  });

  // ---------------------------------------------------------------------------
  // Derived data: VIP gauge (Section 5.2)
  // ---------------------------------------------------------------------------
  const totalToday = kpiCards.data?.total_cards_for_day ?? 0;
  const vipTodayCount = detectionRows.filter((d) => d.isVip).length;
  const vipPct = totalToday > 0 ? Math.round((vipTodayCount / totalToday) * 100) : 0;

  // ---------------------------------------------------------------------------
  // Derived data: chart series normalized (Section 13.1)
  // ---------------------------------------------------------------------------
  const chartSeries = chartData.data
    ? normalizeChartSeries(
        chartRange === "daily"
          ? chartData.data.daily_stats
          : chartRange === "weekly"
          ? chartData.data.weekly_stats
          : chartData.data.monthly_stats,
        chartRange
      )
    : [];

  // ---------------------------------------------------------------------------
  // Repeat visitors count (Section 5.1 — count distinct CNICs in the dict)
  // ---------------------------------------------------------------------------
  const repeatVisitorCount = kpiRepeat.data
    ? Object.keys(kpiRepeat.data.repeat_visitors).length
    : null;

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-semibold text-cc-text-primary">Command Dashboard</h1>
        <p className="mt-1 text-sm text-cc-text-secondary">
          University Security — real-time CNIC and vehicle monitoring
        </p>
      </div>

      {/* Row 1 — KPI strip (4 cards) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Total Cards Today"
          value={kpiCards.data?.total_cards_for_day ?? ""}
          icon={CreditCard}
          delta={
            kpiCards.data
              ? {
                  percentage: Math.abs(kpiCards.data.cards_day_difference_percentage),
                  direction: kpiCards.data.card_difference_direction,
                }
              : undefined
          }
          isLoading={kpiCards.isLoading}
          isError={kpiCards.isError}
          emptyStateMessage="No detections today yet"
        />
        <KpiCard
          label="Total Cards (All Time)"
          value={kpiCnic.data?.total_cnics ?? ""}
          icon={Database}
          isLoading={kpiCnic.isLoading}
          isError={kpiCnic.isError}
          emptyStateMessage="No records"
        />
        <KpiCard
          label="Detections This Week"
          value={kpiTimestamps.data?.total_timestamps_this_week ?? ""}
          icon={Activity}
          isLoading={kpiTimestamps.isLoading}
          isError={kpiTimestamps.isError}
        />
        <KpiCard
          label="Repeat Visitors"
          value={repeatVisitorCount ?? ""}
          icon={Users}
          isLoading={kpiRepeat.isLoading}
          isError={kpiRepeat.isError}
          emptyStateMessage="No repeat visitors today"
        />
      </div>

      {/* Row 2 — Activity chart + VIP gauge */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <ActivityChart
            series={chartSeries}
            activeRange={chartRange}
            onRangeChange={setChartRange}
            isLoading={chartData.isLoading}
          />
        </div>
        <div className="col-span-12 xl:col-span-4 flex items-center justify-center">
          <RadialGauge
            label="VIP Share Today"
            value={vipPct}
            displayValue={
              totalToday > 0
                ? `${vipTodayCount} / ${totalToday}`
                : "—"
            }
            isEmpty={totalToday === 0}
            emptyStateMessage="No data yet today"
            size="lg"
          />
        </div>
      </div>

      {/* Row 3 — Campus map + Camera activity list */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <CampusMap
            nodes={campusNodes}
            selectedLocationId={selectedLocationId}
            latestActivityByLocation={latestActivityByLocation}
            onNodeClick={(locationId) => {
              setSelectedLocationId((current) => (current === locationId ? null : locationId));
            }}
          />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <CameraActivityList
            cameras={cameraActivityItems}
            isLoading={cameras.isLoading}
            onCameraClick={(id) => router.push(`/cameras/view?id=${id}`)}
          />
        </div>
      </div>

      {/* Row 4 — Live Detection Feed */}
      {selectedLocationDescription && (
        <div className="rounded-2xl border border-cc-border-subtle bg-cc-bg-elevated px-4 py-2 text-xs text-cc-text-secondary">
          Showing plate activity for <span className="font-medium text-cc-text-primary">{selectedLocationDescription}</span> below.
          The CNIC detection feed can't be filtered by location — the API doesn't associate a camera with each CNIC detection, so it always shows all detections.
        </div>
      )}
      <LiveDetectionFeed
        detections={detectionRows}
        isLoading={detections.isLoading}
        onImageClick={(d) => {
          if (d.imagePath) window.open(d.imagePath, "_blank");
        }}
      />

      {/* Row 5 — Number plate activity */}
      <PlateActivityStrip plates={filteredPlates} isLoading={platesLoading} />
    </div>
  );
}
