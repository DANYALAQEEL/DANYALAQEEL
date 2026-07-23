"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Skeleton } from "boneyard-js/react";

export function PageSkeletonWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [replaying, setReplaying] = useState(false);

  const replay = useCallback(() => {
    if (replaying) return;
    setReplaying(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReplaying(false);
    }, 1500);
  }, [replaying]);

  // Listen for sidebar button events
  useEffect(() => {
    const handler = () => replay();
    window.addEventListener('boneyard:preview', handler);
    return () => window.removeEventListener('boneyard:preview', handler);
  }, [replay]);

  return (
    <>
      {/* name={pathname} gives each page its own bone cache — no cross-page bleed */}
      <Skeleton
        name={pathname}
        loading={loading}
        snapshotConfig={{
          excludeSelectors: ['.bg-white', '[data-no-skeleton]'],
          captureRoundedBorders: false,
        }}
      >
        {children}
      </Skeleton>

      <button
        onClick={replay}
        disabled={replaying}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium shadow-lg border transition-all ${
          replaying
            ? "bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed"
            : "bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:text-stone-900"
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${replaying ? "bg-stone-300 animate-pulse" : "bg-stone-400"}`} />
        {replaying ? "Loading…" : "Preview skeleton"}
      </button>
    </>
  );
}
