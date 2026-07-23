"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useConnectionStatus } from "@/providers/ConnectionStatusProvider";

/**
 * AppShell — composition only.
 * The previous hardcoded currentUser stub is gone: the shell now fetches
 * the real logged-in user from GET /api/auth/me using the bearer token
 * stored by the sign-in page. 401 → redirect to /auth/signin.
 */

export interface AppShellProps {
  children: ReactNode;
}

interface CurrentUser {
  name: string;
  role: string;
  imagePath: string;
}

export default function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>({ name: "…", role: "", imagePath: "" });
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useConnectionStatus();

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.push("/auth/signin");
      return;
    }
    axios
      .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const d = res.data?.data;
        if (d) setCurrentUser({ name: d.name || d.username, role: d.role || "", imagePath: d.image_path || "" });
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          localStorage.removeItem("token");
          router.push("/auth/signin");
        } else {
          // Backend reachable but /me failed for another reason — stay
          // usable rather than locking the operator out of the UI.
          setCurrentUser({ name: "Signed in", role: "", imagePath: "" });
        }
      });
  }, [router]);

  const handleLogout = async () => {
    // GET per the existing backend route — do not "correct" to POST
    // without changing the backend to match.
    try { await fetch("/api/auth/sign-out"); } catch { /* ignore */ }
    localStorage.removeItem("token");
    localStorage.removeItem("demoMode");
    router.push("/auth/signin");
  };

  return (
    <div className="flex h-screen bg-cc-bg-base">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        activeRoute={pathname ?? "/"}
        userRole={currentUser.role || "—"}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar
          onSidebarToggle={() => setCollapsed((c) => !c)}
          connectionStatus={status}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
