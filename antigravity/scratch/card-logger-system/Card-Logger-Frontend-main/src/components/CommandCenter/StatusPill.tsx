"use client";

/**
 * StatusPill — build spec Section 6.4.
 *
 * This is the ONLY component in the codebase allowed to map a status to a
 * color. Every other component that needs to show a status MUST render
 * <StatusPill /> rather than picking a color itself. This is what keeps
 * "cc-status-active means green, always" true across the whole app instead
 * of drifting per-component.
 */

export type StatusPillStatus = "active" | "idle" | "warning" | "critical" | "info";

export interface StatusPillProps {
  status: StatusPillStatus;
  label: string; // caller supplies exact text, e.g. "Active", "No recent activity"
}

const STATUS_TOKEN_CLASS: Record<StatusPillStatus, { dot: string; text: string; bg: string }> = {
  active: { dot: "bg-cc-status-active", text: "text-cc-status-active", bg: "bg-cc-status-active/10" },
  idle: { dot: "bg-cc-status-idle", text: "text-cc-status-idle", bg: "bg-cc-status-idle/10" },
  warning: { dot: "bg-cc-status-warning", text: "text-cc-status-warning", bg: "bg-cc-status-warning/10" },
  critical: { dot: "bg-cc-status-critical", text: "text-cc-status-critical", bg: "bg-cc-status-critical/10" },
  info: { dot: "bg-cc-status-info", text: "text-cc-status-info", bg: "bg-cc-status-info/10" },
};

export default function StatusPill({ status, label }: StatusPillProps) {
  const tokens = STATUS_TOKEN_CLASS[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-300 ${tokens.bg} ${tokens.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${tokens.dot}`} />
      {label}
    </span>
  );
}
