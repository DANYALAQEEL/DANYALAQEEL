"use client";

/**
 * AddLocationPage — was an empty breadcrumb-only stub in BOTH previous
 * versions (LocationForm.tsx was a 0-byte file and no create endpoint
 * existed). Now a real form backed by the new POST /api/camera/location/save.
 *
 * `coords` is stored as the existing model's "lat,lng" string. The dashboard
 * CampusMap treats these as relative layout positions, not a georeferenced
 * map — so coords are optional here.
 */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MapPin, Save } from "lucide-react";

export default function AddLocationPage() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setMessage({ type: "error", text: "Description is required." });
      return;
    }
    setIsSubmitting(true);
    setMessage(null);
    try {
      const coords = lat.trim() && lng.trim() ? `${lat.trim()},${lng.trim()}` : "";
      await axios.post("/api/camera/location/save", { description: description.trim(), coords });
      setMessage({ type: "success", text: `Location "${description.trim()}" created.` });
      setDescription("");
      setLat("");
      setLng("");
      setTimeout(() => router.push("/locations/all"), 800);
    } catch {
      setMessage({ type: "error", text: "Failed to create location. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
          <MapPin size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">Add Location</h1>
          <p className="text-sm text-cc-text-secondary">Create a site where cameras can be assigned</p>
        </div>
      </div>

      {message && (
        <div
          className={`rounded-md px-4 py-3 text-sm ${
            message.type === "error"
              ? "bg-cc-status-critical/10 text-cc-status-critical"
              : "bg-cc-status-active/10 text-cc-status-active"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="max-w-lg rounded-xl border border-cc-border-subtle bg-cc-bg-panel p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">
              Description <span className="text-cc-status-critical">*</span>
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Main Gate, North Parking, Reception"
              className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">
                Layout X / Latitude
              </label>
              <input
                type="text"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="optional"
                className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">
                Layout Y / Longitude
              </label>
              <input
                type="text"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                placeholder="optional"
                className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                disabled={isSubmitting}
              />
            </div>
          </div>
          <p className="text-xs text-cc-text-muted">
            Coordinates position this site on the dashboard map. They are relative layout
            positions, not a real-world map reference — leave blank if unsure.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim disabled:opacity-50"
          >
            <Save size={15} />
            {isSubmitting ? "Saving…" : "Save location"}
          </button>
        </form>
      </div>
    </div>
  );
}
