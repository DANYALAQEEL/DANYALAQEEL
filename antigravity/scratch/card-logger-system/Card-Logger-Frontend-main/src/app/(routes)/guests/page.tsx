"use client";

/**
 * GuestRegistrationPage — the general visitor log.
 *
 * This is a SEPARATE, INDEPENDENT feature from VIP Management (/vips):
 *   - Guests    = general visitor register (name + CNIC, bulk CSV import)
 *   - VIPs      = flagged/priority CNICs surfaced live on detection
 * They are not duplicates and must not be merged.
 *
 * Restores the original Guest Registration contract, now backed by real
 * endpoints (previously these 404'd — no guest backend existed):
 *   GET    /api/id-card-camera/get-registered-guests
 *   POST   /api/id-card-camera/register-guest        { name, cnic_id }
 *   POST   /api/id-card-camera/register-guests-batch [{ name, cnic_id }]
 *   DELETE /api/id-card-camera/remove-guest          { cnic_id, name }
 *
 * CSV format matches the original: header row then `name,cnic` per line.
 */

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Users, Trash2, UserPlus, Upload } from "lucide-react";

interface Guest {
  guest_id: number;
  cnic_id: string;
  added_at: string;
  cnic: {
    name: string;
    cnic: string;
    cnic_img_path: string;
    name_confidence: number;
    all_details: string;
  };
}

export default function GuestRegistrationPage() {
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBatchImporting, setIsBatchImporting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchGuests = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/id-card-camera/get-registered-guests");
      const data: Guest[] = Array.isArray(res.data.data) ? res.data.data : [];
      data.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime());
      setGuests(data);
    } catch {
      setMessage({ type: "error", text: "Failed to load guest list." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchGuests(); }, []);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const formatCnic = (raw: string) => {
    let value = raw.replace(/\D/g, "");
    if (value.length > 5 && value.length <= 12) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    } else if (value.length > 12) {
      value = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12, 13)}`;
    }
    return value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnic.trim()) { showMessage("error", "CNIC is required."); return; }
    setIsSubmitting(true);
    try {
      await axios.post("/api/id-card-camera/register-guest", { name: name.trim(), cnic_id: cnic.trim() });
      showMessage("success", `Guest "${name || cnic}" registered.`);
      setCnic("");
      setName("");
      fetchGuests();
    } catch {
      showMessage("error", "Failed to register guest. Check the CNIC and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemove = async (guest: Guest) => {
    if (!confirm(`Remove guest "${guest.cnic.name || guest.cnic_id}" from the register?`)) return;
    try {
      await axios.delete("/api/id-card-camera/remove-guest", {
        data: { cnic_id: guest.cnic_id, name: guest.cnic.name || "" },
      });
      showMessage("success", "Guest removed.");
      fetchGuests();
    } catch {
      showMessage("error", "Failed to remove guest.");
    }
  };

  const handleCsvImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsBatchImporting(true);
    try {
      const text = await file.text();
      const lines = text.split("\n").filter((l) => l.trim());
      const entries: { name: string; cnic_id: string }[] = [];
      for (let i = 1; i < lines.length; i++) {
        const [nameVal, cnicVal] = lines[i].split(",").map((s) => s.trim());
        if (nameVal && cnicVal) entries.push({ name: nameVal, cnic_id: cnicVal });
      }
      if (entries.length === 0) {
        showMessage("error", "No valid rows found. CSV columns must be: name, cnic.");
        return;
      }
      const res = await axios.post("/api/id-card-camera/register-guests-batch", entries);
      const registered = res.data?.data?.registered ?? entries.length;
      showMessage("success", `Batch import: ${registered} of ${entries.length} registered.`);
      fetchGuests();
    } catch {
      showMessage("error", "Batch import failed. Ensure CSV has columns: name, cnic.");
    } finally {
      setIsBatchImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
          <Users size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">Guest Registration</h1>
          <p className="text-sm text-cc-text-secondary">
            General visitor register — separate from VIP Management
          </p>
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

      <div className="grid grid-cols-12 gap-6">
        {/* Registration form */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border border-cc-border-subtle bg-cc-bg-panel p-5">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-cc-text-primary">
              <UserPlus size={16} className="text-cc-accent-teal" /> Register a guest
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">Name</label>
                <input
                  type="text"
                  value={name}
                  maxLength={50}
                  onChange={(e) => {
                    if (/^[a-zA-Z\s]*$/.test(e.target.value)) setName(e.target.value);
                  }}
                  placeholder="Enter name"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                  disabled={isSubmitting || isBatchImporting}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">
                  CNIC <span className="text-cc-status-critical">*</span>
                </label>
                <input
                  type="text"
                  value={cnic}
                  maxLength={15}
                  onChange={(e) => setCnic(formatCnic(e.target.value))}
                  placeholder="XXXXX-XXXXXXX-X"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                  disabled={isSubmitting || isBatchImporting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isBatchImporting}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim disabled:opacity-50"
              >
                {isSubmitting ? "Registering…" : "Register guest"}
              </button>
            </form>

            <div className="mt-5 border-t border-cc-border-subtle pt-4">
              <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">
                Bulk import (CSV columns: name, cnic)
              </label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-cc-border-strong px-4 py-2 text-sm text-cc-text-secondary hover:border-cc-accent-teal hover:text-cc-accent-teal">
                <Upload size={15} />
                {isBatchImporting ? "Importing…" : "Choose CSV file"}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  onChange={handleCsvImport}
                  disabled={isBatchImporting}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Guest table */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-xl border border-cc-border-subtle bg-cc-bg-panel">
            <div className="flex items-center justify-between border-b border-cc-border-subtle px-5 py-3">
              <h2 className="text-sm font-semibold text-cc-text-primary">Registered guests</h2>
              <span className="rounded-full bg-cc-bg-elevated px-2 py-0.5 text-xs text-cc-text-secondary">
                {guests.length}
              </span>
            </div>

            {isLoading && (
              <div className="space-y-2 p-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-10 animate-pulse rounded bg-cc-bg-elevated" />
                ))}
              </div>
            )}

            {!isLoading && guests.length === 0 && (
              <p className="p-8 text-center text-sm text-cc-text-muted">
                No guests registered yet. Add one on the left, or bulk-import a CSV.
              </p>
            )}

            {!isLoading && guests.length > 0 && (
              <div className="max-w-full overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-cc-border-subtle text-xs uppercase tracking-wide text-cc-text-muted">
                      <th className="px-5 py-3 font-medium">Name</th>
                      <th className="px-5 py-3 font-medium">CNIC</th>
                      <th className="px-5 py-3 font-medium">Added</th>
                      <th className="px-5 py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest) => (
                      <tr key={guest.guest_id} className="border-b border-cc-border-subtle last:border-0">
                        <td className="px-5 py-3 font-medium text-cc-text-primary">
                          {guest.cnic.name || "—"}
                        </td>
                        <td className="px-5 py-3">
                          <span className="cc-ledger-id text-cc-text-secondary">{guest.cnic_id}</span>
                        </td>
                        <td className="px-5 py-3 text-cc-text-secondary">
                          {guest.added_at ? new Date(guest.added_at).toLocaleString() : "—"}
                        </td>
                        <td className="px-5 py-3 text-right">
                          <button
                            onClick={() => handleRemove(guest)}
                            aria-label="Remove guest"
                            className="text-cc-text-muted hover:text-cc-status-critical"
                          >
                            <Trash2 size={16} />
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
    </div>
  );
}
