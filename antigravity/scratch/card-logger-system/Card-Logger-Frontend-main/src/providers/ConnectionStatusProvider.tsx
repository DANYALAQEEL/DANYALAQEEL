"use client";
import { getWSURL } from "@/libs/api";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { ConnectionStatus } from "@/types/api-types";

/**
 * ConnectionStatusProvider — build spec Section 6.9.
 *
 * Owns BOTH WebSocket channels (`card-update`, `num-plate-update`). Exposes
 * tick counters that increment on each message — consumers useEffect on the
 * relevant tick to trigger a refetch. This provider does NOT parse the
 * socket message payload for data (both channels only ever send a bare
 * status string, e.g. "Table updated" — see build spec Section 1.2).
 *
 * Reconnect behavior (exact, do not alter):
 *   - Exponential backoff starting at 1s, capped at 30s.
 *   - status = "live" while connected.
 *   - status = "reconnecting" during backoff retries.
 *   - status = "offline" only after 5 consecutive failed attempts, but
 *     retries continue indefinitely at the 30s cap even while "offline"
 *     is displayed.
 *
 * TODO(Antigravity): confirm the exact WS base URL env var name already used
 * by the existing `useWebSocket` hook (`process.env.NEXT_PUBLIC_WS_NOTIFY_URL`
 * per the current CNICCameraPage.tsx) and reuse it here rather than
 * introducing a second env var.
 */

import { db } from "@/libs/mockApi";

interface ConnectionContextValue {
  cardUpdateTick: number;
  plateUpdateTick: number;
  status: ConnectionStatus;
}

const ConnectionContext = createContext<ConnectionContextValue | null>(null);

const INITIAL_BACKOFF_MS = 1000;
const MAX_BACKOFF_MS = 30000;
const OFFLINE_AFTER_FAILURES = 5;

function useResilientSocket(url: string, onMessage: () => void) {
  const [failures, setFailures] = useState(0);
  const [connected, setConnected] = useState(false);
  const retryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!url) return; // Bypass if URL is empty
    let socket: WebSocket | null = null;
    let cancelled = false;

    const connect = (attempt: number) => {
      socket = new WebSocket(url);

      socket.onopen = () => {
        if (cancelled) return;
        setConnected(true);
        setFailures(0);
      };

      socket.onmessage = () => {
        if (cancelled) return;
        onMessage();
      };

      socket.onerror = () => {
        // onclose will fire next and handle retry scheduling.
      };

      socket.onclose = () => {
        if (cancelled) return;
        setConnected(false);
        setFailures((f) => f + 1);
        const backoff = Math.min(INITIAL_BACKOFF_MS * 2 ** attempt, MAX_BACKOFF_MS);
        retryTimeout.current = setTimeout(() => connect(attempt + 1), backoff);
      };
    };

    connect(0);

    return () => {
      cancelled = true;
      if (retryTimeout.current) clearTimeout(retryTimeout.current);
      socket?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { connected, failures };
}

export function ConnectionStatusProvider({ children }: { children: ReactNode }) {
  const [cardUpdateTick, setCardUpdateTick] = useState(0);
  const [plateUpdateTick, setPlateUpdateTick] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("demoMode") === "true") {
      setIsDemo(true);
      const interval = setInterval(() => {
        const tickResult = db.tick();
        if (tickResult.type === "cnic") {
          setCardUpdateTick((t) => t + 1);
        } else {
          setPlateUpdateTick((t) => t + 1);
        }
      }, 6000);
      return () => clearInterval(interval);
    }
  }, []);

  let wsBase = "";
  try {
    wsBase = getWSURL();
  } catch {
    // fallback if getWSURL throws
  }

  const cardSocket = useResilientSocket(isDemo ? "" : `${wsBase}/card-update`, () =>
    setCardUpdateTick((t) => t + 1)
  );
  const plateSocket = useResilientSocket(isDemo ? "" : `${wsBase}/num-plate-update`, () =>
    setPlateUpdateTick((t) => t + 1)
  );

  const bothConnected = isDemo || (cardSocket.connected && plateSocket.connected);
  const worstFailureCount = isDemo ? 0 : Math.max(cardSocket.failures, plateSocket.failures);

  let status: ConnectionStatus = "live";
  if (!bothConnected) {
    status = worstFailureCount >= OFFLINE_AFTER_FAILURES ? "offline" : "reconnecting";
  }

  return (
    <ConnectionContext.Provider value={{ cardUpdateTick, plateUpdateTick, status }}>
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnectionStatus(): ConnectionContextValue {
  const ctx = useContext(ConnectionContext);
  if (!ctx) {
    throw new Error("useConnectionStatus must be used within a ConnectionStatusProvider");
  }
  return ctx;
}
