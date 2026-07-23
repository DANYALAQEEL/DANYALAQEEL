"use client";

/**
 * NotificationsBell — replaces the dead bell button. Wired to REAL data:
 * VIP detections from /api/id-card-camera/cnic-timestamps-all, refreshed
 * whenever the `card-update` websocket fires (same channel the dashboard
 * uses). Shows an unread count since the panel was last opened.
 * No fake notification items — empty state says so.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Bell, Star } from "lucide-react";
import useWebSocket from "@/hooks/useWebSocket";
import { getWSURL } from "@/libs/api";

interface VipDetection {
  name: string;
  cnic: string;
  timestamp: string;
}

export default function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const [vips, setVips] = useState<VipDetection[]>([]);
  const [lastSeenIso, setLastSeenIso] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);

  const fetchVipDetections = useCallback(async () => {
    try {
      const res = await axios.get("/api/id-card-camera/cnic-timestamps-all");
      const rows: any[] = Array.isArray(res.data.data) ? res.data.data : [];
      const vipRows = rows
        .filter((r) => r.isVip)
        .map((r) => ({ name: r.name ?? "Unknown", cnic: r.cnic ?? "", timestamp: r.timestamp ?? "" }))
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 15);
      setVips(vipRows);
    } catch {
      // keep whatever we have; the panel shows its own empty state
    }
  }, []);

  useEffect(() => {
    fetchVipDetections();
    const stored = typeof window !== "undefined" ? localStorage.getItem("vip-bell-last-seen") : null;
    if (stored) setLastSeenIso(stored);
  }, [fetchVipDetections]);

  // Refresh on every live card event (cheap: single list endpoint).
  let wsUrl = "";
  try { wsUrl = getWSURL() + "/api/websockets/card-update"; } catch { /* env missing in dev */ }
  useWebSocket({ url: wsUrl || "ws://localhost:0/disabled", onMessage: fetchVipDetections });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const unread = vips.filter((v) => !lastSeenIso || new Date(v.timestamp) > new Date(lastSeenIso)).length;

  const openPanel = () => {
    setOpen((o) => !o);
    const nowIso = new Date().toISOString();
    setLastSeenIso(nowIso);
    localStorage.setItem("vip-bell-last-seen", nowIso);
  };

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={openPanel}
        className="relative text-cc-text-secondary hover:text-cc-text-primary"
        aria-label="VIP detection notifications"
      >
        <Bell size={18} />
        {unread > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-cc-accent-gold px-1 text-[10px] font-semibold text-white">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-8 z-50 w-80 rounded-xl border border-cc-border-subtle bg-cc-bg-panel shadow-lg">
          <div className="flex items-center gap-2 border-b border-cc-border-subtle px-4 py-3">
            <Star size={14} className="text-cc-accent-gold" />
            <p className="text-sm font-semibold text-cc-text-primary">VIP detections</p>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {vips.length === 0 && (
              <p className="px-3 py-4 text-sm text-cc-text-muted">No VIP detections logged yet.</p>
            )}
            {vips.map((v, i) => (
              <div key={i} className="rounded-md px-3 py-2 hover:bg-cc-bg-elevated">
                <p className="text-sm font-medium text-cc-text-primary">{v.name}</p>
                <p className="cc-ledger-id text-xs text-cc-text-secondary">{v.cnic}</p>
                <p className="text-[11px] text-cc-text-muted">
                  {v.timestamp ? new Date(v.timestamp).toLocaleString() : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
