"use client";

/**
 * ProfilePage — rebuilt from the TailAdmin template (lorem ipsum, fake
 * follower counts, social icons all removed). Shows the REAL logged-in
 * user from GET /api/auth/me, backed by the `users` table.
 */

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { User, Shield, Clock, Settings as SettingsIcon } from "lucide-react";

interface Me {
  username: string;
  name: string;
  role: string;
  image_path: string;
}

export default function ProfilePage() {
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    axios
      .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setMe(res.data?.data ?? null))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cc-accent-teal/10">
          <User size={20} strokeWidth={1.75} className="text-cc-accent-teal" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-cc-text-primary">Profile</h1>
          <p className="text-sm text-cc-text-secondary">Your account in the monitoring system</p>
        </div>
      </div>

      {loading && <div className="h-40 animate-pulse rounded-xl bg-cc-bg-panel" />}

      {!loading && error && (
        <div className="rounded-xl border border-cc-border-subtle bg-cc-bg-panel p-6 text-sm text-cc-text-secondary">
          Couldn’t load your profile. Try signing out and back in.
        </div>
      )}

      {!loading && me && (
        <div className="overflow-hidden rounded-xl border border-cc-border-subtle bg-cc-bg-panel">
          <div className="h-24" style={{ background: "var(--cc-gradient-accent)" }} />
          <div className="px-6 pb-6">
            <div className="-mt-10 mb-4 flex items-end gap-4">
              {me.image_path ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={me.image_path}
                  alt={me.name}
                  className="h-20 w-20 rounded-full border-4 border-cc-bg-panel object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-cc-bg-panel bg-cc-accent-teal text-2xl font-semibold text-white">
                  {(me.name || me.username || "?").slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="pb-1">
                <h2 className="text-lg font-semibold text-cc-text-primary">{me.name || me.username}</h2>
                <p className="text-sm text-cc-text-secondary">@{me.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field icon={<User size={15} />} label="Username" value={me.username} />
              <Field icon={<Shield size={15} />} label="Role" value={me.role || "—"} />
              <Field icon={<User size={15} />} label="Display name" value={me.name || "—"} />
              <Field icon={<Clock size={15} />} label="Session" value="Active" />
            </div>

            <div className="mt-6 border-t border-cc-border-subtle pt-4">
              <Link
                href="/settings"
                className="inline-flex items-center gap-2 rounded-md bg-cc-accent-teal px-4 py-2 text-sm font-medium text-white hover:bg-cc-accent-teal-dim"
              >
                <SettingsIcon size={15} />
                Edit in Settings
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-cc-border-subtle bg-cc-bg-base p-3">
      <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-cc-text-muted">
        <span className="text-cc-accent-teal">{icon}</span>
        {label}
      </p>
      <p className="text-sm text-cc-text-primary">{value}</p>
    </div>
  );
}
