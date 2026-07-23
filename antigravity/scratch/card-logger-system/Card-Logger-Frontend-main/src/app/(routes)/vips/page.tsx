"use client";

/**
 * VipManagementPage — container component.
 *
 * Per build spec Section 8.3. Wires the correct VIP endpoints:
 *   GET  /api/id-card-camera/get-registered-vips
 *   POST /api/id-card-camera/register-vip
 *   POST /api/id-card-camera/register-vips-batch
 *   DELETE /api/id-card-camera/remove-vip
 *
 * "Guest" terminology is removed entirely — "VIP" is the only term used here.
 * Note: the old component used /register-guest / /get-registered-guests /
 * /remove-guest — those are the wrong endpoints (build spec Section 9).
 */

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { Star, Trash2, UserPlus, Upload, AlertCircle } from "lucide-react";
import StatusPill from "@/components/CommandCenter/StatusPill";
import type { RegisteredVip, RegisterVipPayload } from "@/types/api-types";

export default function VipManagementPage() {
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [vips, setVips] = useState<RegisteredVip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBatchImporting, setIsBatchImporting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchVips = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/id-card-camera/get-registered-vips");
      const data = Array.isArray(response.data.data) ? response.data.data : [];
      setVips(data);
    } catch {
      setMessage({ type: "error", text: "Failed to load VIP list." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchVips(); }, []);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnic.trim()) { showMessage("error", "CNIC is required."); return; }
    setIsSubmitting(true);
    try {
      const payload: RegisterVipPayload = { cnic: cnic.trim(), name: name.trim() };
      await axios.post("/api/id-card-camera/register-vip", payload);
      showMessage("success", `VIP "${name || cnic}" registered successfully.`);
      setCnic("");
      setName("");
      fetchVips();
    } catch {
      showMessage("error", "Failed to register VIP. Check the CNIC and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemove = async (vip: RegisteredVip) => {
    if (!confirm(`Remove VIP "${vip.name || vip.cnic}" from the list?`)) return;
    try {
      await axios.delete("/api/id-card-camera/remove-vip", { data: { cnic: vip.cnic } });
      showMessage("success", `VIP "${vip.name || vip.cnic}" removed.`);
      fetchVips();
    } catch {
      showMessage("error", "Failed to remove VIP.");
    }
  };

  const handleCsvImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsBatchImporting(true);
    try {
      const text = await file.text();
      const lines = text.split("\n").filter(Boolean).slice(1); // skip header
      const entries: RegisterVipPayload[] = lines.map((line) => {
        const [cnicVal, nameVal] = line.split(",").map((v) => v.trim());
        return { cnic: cnicVal, name: nameVal ?? "" };
      });
      // Backend returns {success, message, results} (no data wrapper).
      const res = await axios.post(
        "/api/id-card-camera/register-vips-batch",
        { vips: entries }
      );
      const results = res.data?.results ?? [];
      const successCount = results.filter((r: { success: boolean }) => r.success).length;
      showMessage("success", `Batch import: ${successCount} of ${entries.length} registered.`);
      fetchVips();
    } catch {
      showMessage("error", "Batch import failed. Ensure CSV has columns: cnic, name.");
    } finally {
      setIsBatchImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-gold/10">
          <Star size={20} strokeWidth={1.75} className="text-cc-accent-gold" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">VIP Management</h1>
          <p className="text-sm text-cc-text-secondary">
            Register and manage VIP CNICs — flagged in real-time on detection
          </p>
        </div>
      </div>

      {/* Status message */}
      {message && (
        <div
          className={`flex items-center gap-2 rounded-md border px-4 py-3 text-sm ${
            message.type === "success"
              ? "border-cc-status-active/30 bg-cc-status-active/10 text-cc-status-active"
              : "border-cc-status-critical/30 bg-cc-status-critical/10 text-cc-status-critical"
          }`}
        >
          <AlertCircle size={14} />
          {message.text}
        </div>
      )}

      {/* Register form + batch import */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-5 cc-glass-card p-6 space-y-5">
          <h2 className="text-base font-semibold text-cc-text-primary flex items-center gap-2">
            <UserPlus size={16} className="text-cc-accent-teal" />
            Register VIP
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-cc-text-secondary">
                CNIC *
              </label>
              <input
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="e.g. 42201-1234567-1"
                className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-elevated px-3 py-2 text-sm text-cc-text-primary placeholder:text-cc-text-muted focus:border-cc-accent-teal focus:outline-none focus:ring-1 focus:ring-cc-accent-teal"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-cc-text-secondary">
                Name (optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-elevated px-3 py-2 text-sm text-cc-text-primary placeholder:text-cc-text-muted focus:border-cc-accent-teal focus:outline-none focus:ring-1 focus:ring-cc-accent-teal"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-cc-bg-base hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Registering…" : "Register VIP"}
            </button>
          </form>

          {/* Batch import */}
          <div className="border-t border-cc-border-subtle pt-4">
            <p className="mb-2 text-xs text-cc-text-secondary">
              Batch import via CSV — columns: <span className="font-mono">cnic, name</span>
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isBatchImporting}
              className="flex items-center gap-2 rounded-md border border-cc-border-subtle bg-cc-bg-elevated px-3 py-2 text-sm text-cc-text-secondary hover:text-cc-text-primary disabled:opacity-50"
            >
              <Upload size={14} />
              {isBatchImporting ? "Importing…" : "Import CSV"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleCsvImport}
              className="hidden"
            />
          </div>
        </div>

        {/* VIP table */}
        <div className="col-span-12 xl:col-span-7 cc-glass-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-cc-text-primary">
              Registered VIPs
              {!isLoading && (
                <span className="ml-2 rounded-full bg-cc-accent-gold/10 px-2 py-0.5 text-xs font-normal text-cc-accent-gold">
                  {vips.length}
                </span>
              )}
            </h2>
          </div>

          {isLoading && (
            <div className="flex flex-col gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 w-full animate-pulse rounded bg-cc-bg-elevated" />
              ))}
            </div>
          )}

          {!isLoading && vips.length === 0 && (
            <div className="flex h-40 items-center justify-center text-sm text-cc-text-muted">
              No VIPs registered yet.
            </div>
          )}

          {!isLoading && vips.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cc-border-subtle text-left">
                    <th className="pb-2 font-medium text-cc-text-secondary" />
                    <th className="pb-2 font-medium text-cc-text-secondary">Name</th>
                    <th className="pb-2 font-medium text-cc-text-secondary">CNIC</th>
                    <th className="pb-2 font-medium text-cc-text-secondary">Confidence</th>
                    <th className="pb-2" />
                  </tr>
                </thead>
                <tbody>
                  {vips.map((vip) => (
                    <tr
                      key={vip.cnic}
                      className="border-b border-cc-border-subtle hover:bg-cc-bg-elevated/40"
                    >
                      <td className="py-3 pr-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md bg-cc-bg-elevated">
                          {vip.cnic_img_path && (
                            <Image
                              src={`/api/id-card-camera/cnic-timestamp-latest-image/${vip.cnic_img_path}`}
                              alt={vip.name}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          )}
                        </div>
                      </td>
                      <td className="py-3 pr-3 font-medium text-cc-text-primary">{vip.name || "—"}</td>
                      <td className="py-3 pr-3 font-mono tabular-nums text-cc-text-secondary">{vip.cnic}</td>
                      <td className="py-3 pr-3">
                        <StatusPill
                          status={vip.name_confidence > 0.8 ? "active" : vip.name_confidence > 0.5 ? "warning" : "critical"}
                          label={`${Math.round(vip.name_confidence * 100)}%`}
                        />
                      </td>
                      <td className="py-3">
                        <button
                          onClick={() => handleRemove(vip)}
                          className="rounded p-1 text-cc-text-muted hover:text-cc-status-critical"
                          aria-label="Remove VIP"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
