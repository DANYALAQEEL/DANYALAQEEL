"use client";

/**
 * CameraManagementPage — container component.
 * Re-skinned in Command Center style. Preserves all existing CRUD logic via
 * the existing CameraPreviewCard component. DefaultLayout removed — this
 * page is now wrapped by the global AppShell (src/app/(routes)/layout.tsx).
 */

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Camera as CameraIcon, RefreshCw, Plus } from "lucide-react";
import CameraPreviewCard from "@/components/Cards/CameraPreviewCard";
import type { Camera } from "@/types/api-types";
import { getAPIURL } from "@/libs/api";

export default function CameraManagementPage() {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCameras = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/camera/all");
      setCameras(Array.isArray(response.data.data) ? response.data.data : []);
    } catch {
      setCameras([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchCameras(); }, []);

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
            <CameraIcon size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-cc-text-primary">Cameras</h1>
            {!isLoading && (
              <p className="text-sm text-cc-text-secondary">{cameras.length} camera(s) configured</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchCameras}
            className="flex items-center gap-2 rounded-md border border-cc-border-subtle bg-cc-bg-panel px-3 py-2 text-sm text-cc-text-secondary hover:text-cc-text-primary"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
          <Link
            href="/cameras/add"
            className="flex items-center gap-2 rounded-md bg-cc-accent-teal px-3 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim"
          >
            <Plus size={15} />
            Add Camera
          </Link>
        </div>
      </div>

      {/* Camera grid */}
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-xl bg-cc-bg-panel" />
          ))}
        </div>
      )}

      {!isLoading && cameras.length === 0 && (
        <div className="flex h-48 items-center justify-center rounded-xl border border-cc-border-subtle bg-cc-bg-panel text-sm text-cc-text-muted">
          No cameras configured yet. Use “Add Camera” to create one.
        </div>
      )}

      {!isLoading && cameras.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cameras.map((camera) => (
            <CameraPreviewCard
              key={camera.id}
              id={camera.id}
              name={camera.name}
              url={camera.cam_url}
              location={camera.location}
              type={camera.type}
              fetchCameras={fetchCameras}
            >
              <Image
                src={`${getAPIURL()}/api/camera/thumbnail/${camera.id}?t=${Date.now()}`}
                width={240}
                height={135}
                alt={`${camera.name} thumbnail`}
                className="h-auto w-full"
              />
            </CameraPreviewCard>
          ))}
        </div>
      )}
    </div>
  );
}