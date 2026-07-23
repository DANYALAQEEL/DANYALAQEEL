"use client";

/**
 * GlobalSearch — replaces the decorative search box that shipped dead in
 * both previous versions. Searches, client-side, across three real data
 * sources fetched on open:
 *   - cameras   (/api/camera/all)            → name, location, type
 *   - CNIC log  (/api/id-card-camera/cnic-timestamps-all) → name, CNIC
 *   - plate log (latest per camera via /api/number-plate/cnic-timestamp-latest/{id})
 * Selecting a camera navigates to its live view; selecting a detection
 * navigates to the camera list / analytics pages.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Search, Camera as CameraIcon, CreditCard, Car, X } from "lucide-react";

interface CameraHit { id: number; name: string; location: string; type: string }
interface CnicHit { name: string; cnic: string; timestamp: string }
interface PlateHit { plate: string; camId: number; timestamp: string }

export default function GlobalSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cameras, setCameras] = useState<CameraHit[]>([]);
  const [cnics, setCnics] = useState<CnicHit[]>([]);
  const [plates, setPlates] = useState<PlateHit[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const camRes = await axios.get("/api/camera/all");
      const cams: any[] = Array.isArray(camRes.data.data) ? camRes.data.data : [];
      setCameras(cams.map((c) => ({ id: c.id, name: c.name, location: c.location, type: c.type })));

      const cnicRes = await axios.get("/api/id-card-camera/cnic-timestamps-all");
      const rows: any[] = Array.isArray(cnicRes.data.data) ? cnicRes.data.data : [];
      setCnics(rows.map((r) => ({ name: r.name ?? "", cnic: r.cnic ?? "", timestamp: r.timestamp ?? "" })));

      const plateCams = cams.filter((c) => String(c.type).toLowerCase().includes("plate"));
      const plateResults = await Promise.allSettled(
        plateCams.map((c) => axios.get(`/api/number-plate/cnic-timestamps/${c.id}`)),
      );
      const hits: PlateHit[] = [];
      plateResults.forEach((res, i) => {
        if (res.status === "fulfilled") {
          const data: any[] = Array.isArray(res.value.data.data) ? res.value.data.data : [];
          data.forEach((d) =>
            hits.push({ plate: d.number_plate ?? "", camId: plateCams[i].id, timestamp: d.timestamp ?? "" }),
          );
        }
      });
      setPlates(hits);
    } catch {
      // partial data is fine; empty states handle the rest
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      loadData();
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery("");
    }
  }, [open, loadData]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const q = query.trim().toLowerCase();
  const camHits = useMemo(
    () =>
      q
        ? cameras.filter(
            (c) =>
              c.name?.toLowerCase().includes(q) ||
              c.location?.toLowerCase().includes(q) ||
              c.type?.toLowerCase().includes(q),
          ).slice(0, 6)
        : [],
    [q, cameras],
  );
  const cnicHits = useMemo(
    () =>
      q
        ? cnics
            .filter((c) => c.cnic?.toLowerCase().includes(q) || c.name?.toLowerCase().includes(q))
            .slice(0, 6)
        : [],
    [q, cnics],
  );
  const plateHits = useMemo(
    () => (q ? plates.filter((p) => p.plate?.toLowerCase().includes(q)).slice(0, 6) : []),
    [q, plates],
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex max-w-xs flex-1 items-center gap-2 rounded-full bg-cc-bg-elevated px-4 py-2 text-sm text-cc-text-muted transition-colors hover:text-cc-text-secondary"
      >
        <Search size={16} />
        <span>Search cameras, CNICs, plates…</span>
        <span className="ml-auto rounded border border-cc-border-subtle px-1.5 py-0.5 text-[10px]">Ctrl K</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/30 pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-cc-border-subtle bg-cc-bg-panel shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-cc-border-subtle px-4 py-3">
              <Search size={16} className="text-cc-text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cameras, CNIC numbers, names, plates…"
                className="flex-1 bg-transparent text-sm text-cc-text-primary outline-none placeholder:text-cc-text-muted"
              />
              <button onClick={() => setOpen(false)} aria-label="Close search" className="text-cc-text-muted hover:text-cc-text-primary">
                <X size={16} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {loading && <p className="px-3 py-4 text-sm text-cc-text-muted">Loading index…</p>}
              {!loading && q === "" && (
                <p className="px-3 py-4 text-sm text-cc-text-muted">Type to search across cameras, CNIC detections and number plates.</p>
              )}
              {!loading && q !== "" && camHits.length + cnicHits.length + plateHits.length === 0 && (
                <p className="px-3 py-4 text-sm text-cc-text-muted">No results for “{query}”.</p>
              )}

              {camHits.length > 0 && <SectionLabel label="Cameras" />}
              {camHits.map((c) => (
                <ResultRow
                  key={`cam-${c.id}`}
                  icon={<CameraIcon size={15} />}
                  title={c.name}
                  subtitle={`${c.location} — ${c.type}`}
                  onClick={() => {
                    setOpen(false);
                    router.push(`/cameras/view?id=${c.id}&type=${encodeURIComponent(c.type)}`);
                  }}
                />
              ))}

              {cnicHits.length > 0 && <SectionLabel label="CNIC detections" />}
              {cnicHits.map((c, i) => (
                <ResultRow
                  key={`cnic-${i}`}
                  icon={<CreditCard size={15} />}
                  title={c.name || "Unknown"}
                  subtitle={c.cnic}
                  mono
                  onClick={() => {
                    setOpen(false);
                    router.push("/dashboard/cnic-count");
                  }}
                />
              ))}

              {plateHits.length > 0 && <SectionLabel label="Number plates" />}
              {plateHits.map((p, i) => (
                <ResultRow
                  key={`plate-${i}`}
                  icon={<Car size={15} />}
                  title={p.plate}
                  subtitle={`Camera #${p.camId}`}
                  mono
                  onClick={() => {
                    setOpen(false);
                    router.push("/dashboard/number-plates-count");
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-cc-text-muted">{label}</p>;
}

function ResultRow({
  icon,
  title,
  subtitle,
  onClick,
  mono,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
  mono?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-cc-bg-elevated"
    >
      <span className="text-cc-accent-teal">{icon}</span>
      <span className="min-w-0">
        <span className={`block truncate text-sm text-cc-text-primary ${mono ? "cc-ledger-id" : ""}`}>{title}</span>
        <span className="block truncate text-xs text-cc-text-secondary">{subtitle}</span>
      </span>
    </button>
  );
}
