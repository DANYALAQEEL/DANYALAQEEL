"use client";

import { useMemo, useState } from "react";
import type { CampusMapNode } from "@/types/api-types";

/**
 * CampusMap — build spec Section 6.5.
 *
 * ABSOLUTE RULE: this is NOT a georeferenced map. `location.coords` in the
 * database is an unvalidated free-text string, not real lat/lng — do not
 * attempt to parse it as coordinates, and do not wire in Google
 * Maps/Mapbox/Leaflet. Pins are placed by a deterministic layout function
 * (grid layout below), not by any notion of real geography.
 */

export interface CampusMapProps {
  nodes: CampusMapNode[];
  onNodeClick: (locationId: number) => void;
  selectedLocationId?: number | null;
  /** Optional — most-recent activity label per location description, e.g.
      "Plate ABC-123 · 2 min ago". Only plate data can be attributed to a
      location reliably (see dashboard page comment) — omit for locations
      with no recent plate activity rather than showing stale/fake data. */
  latestActivityByLocation?: Record<string, string>;
}

const MIN_PIN_SIZE = 10;
const MAX_PIN_SIZE = 28;

/** Deterministic grid placement — same input always produces same layout. */
function layoutNodes(nodes: CampusMapNode[], width: number, height: number) {
  const columns = Math.ceil(Math.sqrt(nodes.length || 1));
  const rows = Math.ceil((nodes.length || 1) / columns);
  const cellW = width / (columns + 1);
  const cellH = height / (rows + 1);

  return nodes.map((node, i) => {
    const col = (i % columns) + 1;
    const row = Math.floor(i / columns) + 1;
    return {
      ...node,
      x: col * cellW,
      y: row * cellH,
    };
  });
}

export default function CampusMap({ nodes, onNodeClick, selectedLocationId = null, latestActivityByLocation = {} }: CampusMapProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const width = 600;
  const height = 340;

  const maxCameraCount = Math.max(1, ...nodes.map((n) => n.cameraCount));
  const positioned = useMemo(() => layoutNodes(nodes, width, height), [nodes]);

  const pinSize = (count: number) =>
    MIN_PIN_SIZE + (count / maxCameraCount) * (MAX_PIN_SIZE - MIN_PIN_SIZE);

  return (
    <div className="cc-glass-card relative h-full p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-cc-text-primary">Campus Locations</h3>
        {selectedLocationId !== null && (
          <button
            onClick={() => onNodeClick(selectedLocationId)}
            className="rounded-full bg-cc-bg-elevated px-3 py-1 text-xs font-medium text-cc-text-secondary hover:text-cc-text-primary"
          >
            Clear filter
          </button>
        )}
      </div>

      {nodes.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-cc-text-muted">
          No locations configured yet.
        </div>
      ) : (
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full">
          {positioned.map((node) => {
            const size = pinSize(node.cameraCount);
            const isHovered = hoveredId === node.locationId;
            const isSelected = selectedLocationId === node.locationId;
            const activity = latestActivityByLocation[node.description];
            return (
              <g
                key={node.locationId}
                onMouseEnter={() => setHoveredId(node.locationId)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onNodeClick(node.locationId)}
                className="cursor-pointer"
              >
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={size * 1.5}
                    fill="none"
                    stroke="var(--cc-accent-teal)"
                    strokeWidth={1.5}
                    strokeDasharray="3 3"
                    className="animate-pulse"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={size}
                  fill="var(--cc-accent-teal)"
                  fillOpacity={isHovered || isSelected ? 0.35 : 0.18}
                  className="transition-all duration-200"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={size * 0.35}
                  fill="var(--cc-accent-teal)"
                  className="transition-all duration-200"
                />
                {isHovered && (
                  <foreignObject x={node.x + size + 6} y={node.y - 28} width={200} height={64}>
                    <div className="cc-glass-card rounded-xl px-3 py-2 text-xs text-cc-text-primary shadow-lg">
                      <p className="font-medium">{node.description}</p>
                      <p className="text-cc-text-secondary">{node.cameraCount} camera(s)</p>
                      <p className="mt-0.5 text-cc-text-muted">
                        {activity ?? "No recent plate activity"}
                      </p>
                      <p className="mt-0.5 font-medium text-cc-accent-teal">Click to filter feed →</p>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
