"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Camera,
  PlusSquare,
  MapPin,
  Star,
  Users,
  Settings,
  User,
  ChevronsLeft,
  BarChart3,
  CreditCard,
  Car,
} from "lucide-react";

/**
 * Sidebar — grouped by how the tool is actually used:
 *   LIVE     — real-time monitoring (primary attention)
 *   ANALYTICS— the three restored analytics pages (were unreachable)
 *   MANAGE   — registration & configuration (secondary)
 *   SYSTEM   — account-level pages (tertiary)
 * Every route from the original sidebar is present. Guests and VIPs are
 * separate, independent entries — do not merge them.
 */

export interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activeRoute: string;
  userRole: string; // display only — no permission/authorization logic here
}

type NavItem = { label: string; href: string; icon: typeof LayoutDashboard };
type NavGroup = { title: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Live",
    items: [{ label: "Overview", href: "/", icon: LayoutDashboard }],
  },
  {
    title: "Analytics",
    items: [
      { label: "Detailed Analytics", href: "/dashboard/detailed-analytics", icon: BarChart3 },
      { label: "CNIC Count", href: "/dashboard/cnic-count", icon: CreditCard },
      { label: "Number Plates Count", href: "/dashboard/number-plates-count", icon: Car },
    ],
  },
  {
    title: "Manage",
    items: [
      { label: "Cameras", href: "/cameras/all", icon: Camera },
      { label: "Add Camera", href: "/cameras/add", icon: PlusSquare },
      { label: "Locations", href: "/locations/all", icon: MapPin },
      { label: "Guest Registration", href: "/guests", icon: Users },
      { label: "VIP Management", href: "/vips", icon: Star },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Profile", href: "/profile", icon: User },
    ],
  },
];

export default function Sidebar({ collapsed, onToggle, activeRoute, userRole }: SidebarProps) {
  return (
    <aside
      className={`flex h-screen flex-col border-r border-cc-border-subtle bg-cc-bg-panel transition-all duration-200 ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-sm font-semibold tracking-wide text-cc-text-primary">
            Gate<span className="text-cc-accent-teal">Log</span>
          </span>
        )}
        <button
          onClick={onToggle}
          aria-label="Toggle sidebar"
          className="text-cc-text-secondary hover:text-cc-text-primary"
        >
          <ChevronsLeft size={18} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 pb-2">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="mb-2">
            {!collapsed && (
              <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cc-text-muted">
                {group.title}
              </p>
            )}
            {collapsed && <div className="my-2 border-t border-cc-border-subtle" />}
            {group.items.map((item) => (
              <NavLink key={item.href} item={item} active={activeRoute === item.href} collapsed={collapsed} />
            ))}
          </div>
        ))}
      </nav>

      <div className="border-t border-cc-border-subtle p-4 text-xs text-cc-text-secondary">
        {!collapsed && <span>Role: {userRole}</span>}
      </div>
    </aside>
  );
}

function NavLink({
  item,
  active,
  collapsed,
}: {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      title={collapsed ? item.label : undefined}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-cc-accent-teal/10 font-medium text-cc-accent-teal"
          : "text-cc-text-secondary hover:bg-cc-bg-elevated hover:text-cc-text-primary"
      }`}
    >
      <Icon size={17} strokeWidth={1.75} />
      {!collapsed && <span>{item.label}</span>}
    </Link>
  );
}
