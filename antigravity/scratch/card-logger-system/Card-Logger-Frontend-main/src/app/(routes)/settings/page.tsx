"use client";

/**
 * SettingsPage — rebuilt from the TailAdmin template. Removed the fake
 * "Thomas Anree" personal-info block and dead file-upload UI. Now edits the
 * REAL logged-in user via GET/PUT /api/auth/me (backed by the `users`
 * table): display name, avatar URL, and password change.
 */

import { useEffect, useState } from "react";
import axios from "axios";
import { Settings as SettingsIcon, Save, KeyRound } from "lucide-react";

interface Me {
  username: string;
  name: string;
  role: string;
  image_path: string;
}

function authHeader() {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return { Authorization: `Bearer ${token}` };
}

export default function SettingsPage() {
  const [me, setMe] = useState<Me | null>(null);
  const [name, setName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    axios
      .get("/api/auth/me", { headers: authHeader() })
      .then((res) => {
        const d = res.data?.data;
        if (d) {
          setMe(d);
          setName(d.name || "");
          setImagePath(d.image_path || "");
        }
      })
      .catch(() => setMessage({ type: "error", text: "Couldn’t load your account." }))
      .finally(() => setLoading(false));
  }, []);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await axios.put(
        "/api/auth/me",
        { name, image_path: imagePath },
        { headers: authHeader() },
      );
      setMe(res.data?.data ?? me);
      showMessage("success", "Profile updated.");
    } catch {
      showMessage("error", "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      showMessage("error", "New password must be at least 6 characters.");
      return;
    }
    setSaving(true);
    try {
      await axios.put(
        "/api/auth/me",
        { current_password: currentPassword, new_password: newPassword },
        { headers: authHeader() },
      );
      showMessage("success", "Password changed.");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err: any) {
      const detail = err?.response?.data?.detail;
      showMessage("error", detail || "Failed to change password.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
          <SettingsIcon size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">Settings</h1>
          <p className="text-sm text-cc-text-secondary">Manage your account</p>
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

      {loading && <div className="h-40 animate-pulse rounded-xl bg-cc-bg-panel" />}

      {!loading && (
        <>
          <form onSubmit={saveProfile} className="rounded-xl border border-cc-border-subtle bg-cc-bg-panel p-6">
            <h2 className="mb-4 text-sm font-semibold text-cc-text-primary">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">Username</label>
                <input
                  value={me?.username ?? ""}
                  disabled
                  className="w-full cursor-not-allowed rounded-md border border-cc-border-subtle bg-cc-bg-elevated px-3 py-2 text-sm text-cc-text-muted"
                />
                <p className="mt-1 text-xs text-cc-text-muted">Username can’t be changed.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">Display name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">Avatar image URL</label>
                <input
                  value={imagePath}
                  onChange={(e) => setImagePath(e.target.value)}
                  placeholder="https://…"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                />
              </div>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim disabled:opacity-50"
              >
                <Save size={15} />
                Save changes
              </button>
            </div>
          </form>

          <form onSubmit={changePassword} className="rounded-xl border border-cc-border-subtle bg-cc-bg-panel p-6">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-cc-text-primary">
              <KeyRound size={15} className="text-cc-accent-teal" /> Change password
            </h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">Current password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-cc-text-secondary">New password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-base px-3 py-2 text-sm text-cc-text-primary outline-none focus:border-cc-accent-teal"
                />
              </div>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 rounded-md border border-cc-border-strong px-4 py-2 text-sm font-medium text-cc-text-primary hover:bg-cc-bg-elevated disabled:opacity-50"
              >
                <KeyRound size={15} />
                Update password
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
