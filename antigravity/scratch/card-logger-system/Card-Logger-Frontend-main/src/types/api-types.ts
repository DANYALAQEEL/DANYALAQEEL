/**
 * api-types.ts
 *
 * These interfaces are the ONLY shapes the Command Center dashboard is allowed
 * to bind to. They mirror the real, verified backend responses exactly
 * (see BUILD SPECIFICATION Section 1.2/1.3). Do not add fields here that the
 * backend does not actually return — doing so is how fabricated metrics leak
 * into the UI.
 *
 * Every field that can legitimately be absent is marked optional or nullable.
 * Do not silently default a missing field to a fake value (e.g. 0, "", false)
 * inside a component — surface it as an explicit empty/error state instead
 * (see Section 9 of the build spec).
 */

// ---------------------------------------------------------------------------
// Generic envelope used by most (not all) endpoints
// ---------------------------------------------------------------------------
export interface ApiEnvelope<T> {
  status: boolean;
  data: T;
  msg: string;
}

// Some endpoints (VIP register/remove) use a different envelope shape.
export interface ActionResult {
  success: boolean;
  message: string;
}

export interface BatchActionResult extends ActionResult {
  results: Array<{ cnic: string; success: boolean; error?: string }>;
}

// ---------------------------------------------------------------------------
// Auth — /api/auth/*
// ---------------------------------------------------------------------------
export interface SignInResponse {
  status: boolean;
  token: string;
  msg: string;
}

// ---------------------------------------------------------------------------
// Dashboard — /api/dashboard/*
// ---------------------------------------------------------------------------
export interface TotalIdCardsToday {
  total_cards_for_day: number;
  cards_day_difference_percentage: number;
  card_difference_direction: "up" | "down" | "same";
}

/**
 * VERIFIED against app/cruds/timestamp.py. These are NOT arrays of
 * {label, value} points — they are raw key/value dictionaries where the key
 * is a date/hour string and the value is a detection count. The frontend
 * must convert these to arrays before handing them to a charting library.
 *
 *   daily_stats:   { "2026-07-02 14:00:00": 7, "2026-07-02 15:00:00": 12, ... }  — hourly buckets, last 24h, UNSORTED, sparse (missing hours are not zero-filled by the backend)
 *   weekly_stats:  { "2026-06-28": 41, "2026-06-29": 55, ... }                    — daily buckets, last 7 days, UNSORTED, sparse
 *   monthly_stats: { "2026-06-03": 30, ... }                                      — daily buckets, last 30 days, UNSORTED, sparse
 *
 * Because these are sparse and unsorted, the client MUST sort by key and
 * MUST zero-fill any missing hour/day buckets itself before charting —
 * otherwise the chart will show misleading gaps as if there were no bars
 * at all rather than zero detections.
 */
export interface IdCardsStatsChart {
  daily_stats: Record<string, number>;
  weekly_stats: Record<string, number>;
  monthly_stats: Record<string, number>;
}

export interface TotalCnicCount {
  total_cnics: string; // backend returns this as a string, not a number
}

export interface TotalTimestampsStats {
  total_timestamps_today: number;
  total_timestamps_this_week: number;
  total_timestamps_this_month: number;
}

/**
 * VERIFIED against get_repeated_visitors_cnic() in app/cruds/timestamp.py.
 * This is a dictionary of CNIC -> repeat-visit count for "today vs
 * yesterday" only. There is NO name field returned — if a name is needed in
 * the UI, it must be looked up client-side by joining against another
 * already-fetched detection/CNIC record. Do not invent a `name` field here.
 */
export interface RepeatVisitors {
  repeat_visitors: Record<string, number>; // { [cnic: string]: number }
}

// ---------------------------------------------------------------------------
// ID Card / CNIC detections — /api/id-card-camera/*
// ---------------------------------------------------------------------------
export interface CnicDetection {
  id: string; // this is the CNIC number, reused as the row id
  name: string;
  timestamp: string; // ISO datetime string
  imagePath: string;
  allDetails: string; // raw OCR text blob — display as expandable raw text only
  isVip?: boolean; // present on per-camera and latest-per-camera endpoints, absent on the "all" list endpoint
}

export interface RegisteredVip {
  cnic: string;
  name: string;
  cnic_img_path: string;
  name_confidence: number;
  all_details: string;
}

export interface RegisterVipPayload {
  cnic: string;
  name: string;
}

// ---------------------------------------------------------------------------
// Number plate detections — /api/number-plate/*
// ---------------------------------------------------------------------------
export interface PlateDetection {
  number_plate: string;
  timestamp: string;
  img_path: string;
}

/**
 * VERIFIED: `plate_confidence` exists as a column in the `number_plate_timestamp`
 * table, but every route in `number_plate_router.py` builds its response dict
 * manually and does NOT include it. The API does not currently expose plate
 * confidence at all. Do not render a confidence bar/percentage for number
 * plates (see Section 5.5 of the build spec, which assumed this field would
 * be present — it is not; drop the confidence bar from `<PlateActivityStrip>`
 * until the backend route is updated to include it).
 */

// ---------------------------------------------------------------------------
// Cameras — /api/camera/*
// ---------------------------------------------------------------------------
export interface Camera {
  id: number;
  name: string;
  type: string;
  location: string; // this is `location.description`, already resolved server-side
  crop: string; // "startX,startY,width,height"
  cam_url: string;
  thumbnail_path: string | null;
}

export interface CameraLocation {
  id: number;
  coords: string; // free-text, NOT validated lat/lng — see Section 1.4 / 6.5
  description: string;
}

export interface CameraType {
  type: string;
}

// ---------------------------------------------------------------------------
// Derived / client-side-only types (never sent by the backend — computed
// in container components only, per Section 8's responsibility map)
// ---------------------------------------------------------------------------
export type ActivityStatus = "active" | "idle";

export interface CameraActivityItem {
  id: number;
  name: string;
  locationDescription: string;
  thumbnailUrl: string;
  lastDetectionTimestamp: string | null;
  activityStatus: ActivityStatus; // computed: "active" if lastDetectionTimestamp is within 15 minutes, else "idle"
}

export interface CampusMapNode {
  locationId: number;
  description: string;
  cameraCount: number;
}

export type ConnectionStatus = "live" | "reconnecting" | "offline";
