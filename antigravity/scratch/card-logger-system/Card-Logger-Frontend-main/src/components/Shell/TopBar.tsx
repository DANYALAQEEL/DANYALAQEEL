"use client";

import { Menu, Moon, Sun } from "lucide-react";
import LiveClock from "./LiveClock";
import GlobalSearch from "./GlobalSearch";
import NotificationsBell from "./NotificationsBell";
import useColorMode from "@/hooks/useColorMode";
import type { ConnectionStatus } from "@/types/api-types";

/**
 * TopBar. Every control here is real:
 *  - GlobalSearch: working search over cameras / CNIC detections / plates
 *  - NotificationsBell: live VIP detections (websocket-refreshed)
 *  - Dark mode: restored from the original (useColorMode / .dark class)
 *  - User chip: real logged-in user (from /api/auth/me via AppShell)
 */

export interface TopBarProps {
  onSidebarToggle: () => void;
  connectionStatus: ConnectionStatus;
  currentUser: { name: string; role: string; imagePath: string };
  onLogout: () => void;
}

const CONNECTION_LABEL: Record<ConnectionStatus, { text: string; className: string }> = {
  live: { text: "Live", className: "text-cc-status-active bg-cc-status-active/10" },
  reconnecting: { text: "Reconnecting…", className: "text-cc-status-warning bg-cc-status-warning/10" },
  offline: { text: "Offline", className: "text-cc-status-critical bg-cc-status-critical/10" },
};

export default function TopBar({ onSidebarToggle, connectionStatus, currentUser, onLogout }: TopBarProps) {
  const conn = CONNECTION_LABEL[connectionStatus];
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      className="flex h-16 items-center gap-4 border-b border-cc-border-subtle px-4"
      style={{ background: "var(--cc-gradient-topbar)" }}
    >
      <button onClick={onSidebarToggle} aria-label="Toggle sidebar" className="text-cc-text-secondary hover:text-cc-text-primary">
        <Menu size={20} />
      </button>

      <GlobalSearch />

      <div className="flex-1" />

      <LiveClock />

      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${conn.className}`}>{conn.text}</span>

      <button
        onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
        className="text-cc-text-secondary hover:text-cc-text-primary"
      >
        {colorMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <NotificationsBell />

      <div className="flex items-center gap-2">
        {currentUser.imagePath ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={currentUser.imagePath} alt={currentUser.name} className="h-8 w-8 rounded-full object-cover" />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cc-accent-teal/10 text-xs font-semibold text-cc-accent-teal">
            {(currentUser.name || "?").slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="text-xs">
          <p className="font-medium text-cc-text-primary">{currentUser.name}</p>
          <p className="text-cc-text-secondary">{currentUser.role}</p>
        </div>
        <button onClick={onLogout} className="ml-2 text-xs text-cc-text-secondary hover:text-cc-text-primary">
          Sign out
        </button>
      </div>
    </header>
  );
}
