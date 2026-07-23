"use client";

/**
 * LocationsPage — container component.
 *
 * Fetches camera locations (/api/camera/locations) and cameras (/api/camera/all),
 * displays them grouped by location. Re-skinned in Command Center style.
 */

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MapPin, RefreshCw, Plus } from "lucide-react";
import type { Camera, CameraLocation } from "@/types/api-types";
import StatusPill from "@/components/CommandCenter/StatusPill";

export default function LocationsPage() {
  const [locations, setLocations] = useState<CameraLocation[]>([]);
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAll = async () => {
    setIsLoading(true);
    try {
      const [locRes, camRes] = await Promise.all([
        axios.get("/api/camera/locations"),
        axios.get("/api/camera/all"),
      ]);
      setLocations(Array.isArray(locRes.data.data) ? locRes.data.data : []);
      setCameras(Array.isArray(camRes.data.data) ? camRes.data.data : []);
    } catch {
      setLocations([]);
      setCameras([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
            <MapPin size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-cc-text-primary">Locations</h1>
            {!isLoading && (
              <p className="text-sm text-cc-text-secondary">
                {locations.length} location(s) — {cameras.length} camera(s) total
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchAll}
            className="flex items-center gap-2 rounded-md border border-cc-border-subtle bg-cc-bg-panel px-3 py-2 text-sm text-cc-text-secondary hover:text-cc-text-primary"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
          <Link
            href="/locations/add"
            className="flex items-center gap-2 rounded-md bg-cc-accent-teal px-3 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim"
          >
            <Plus size={15} />
            Add Location
          </Link>
        </div>
      </div>

      {/* Loading skeletons */}
      {isLoading && (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl bg-cc-bg-panel" />
          ))}
        </div>
      )}

      {/* No locations */}
      {!isLoading && locations.length === 0 && (
        <div className="flex h-48 items-center justify-center rounded-xl border border-cc-border-subtle bg-cc-bg-panel text-sm text-cc-text-muted">
          No locations configured yet.
        </div>
      )}

      {/* Location cards */}
      {!isLoading && locations.length > 0 && (
        <div className="space-y-4">
          {locations.map((loc) => {
            const camsHere = cameras.filter((c) => c.location === loc.description);
            return (
              <div key={loc.id} className="cc-glass-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cc-accent-teal" />
                    <h2 className="font-semibold text-cc-text-primary">{loc.description}</h2>
                  </div>
                  <StatusPill
                    status={camsHere.length > 0 ? "active" : "idle"}
                    label={`${camsHere.length} camera(s)`}
                  />
                </div>
                {loc.coords && (
                  <p className="mb-3 text-xs text-cc-text-muted">Coords: {loc.coords}</p>
                )}
                {camsHere.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {camsHere.map((cam) => (
                      <span
                        key={cam.id}
                        className="rounded-md border border-cc-border-subtle bg-cc-bg-elevated px-2 py-1 text-xs text-cc-text-secondary"
                      >
                        {cam.name} <span className="text-cc-text-muted">({cam.type})</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-cc-text-muted">No cameras assigned to this location.</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
