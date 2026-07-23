"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface TocProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TocProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const main = document.querySelector("main");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { root: main, rootMargin: "-80px 0px -30% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden min-[1180px]:block fixed top-28 w-[140px] max-h-[calc(100vh-140px)] overflow-y-auto" style={{ left: "calc(50vw + 444px)" }}>
      <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-3">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-stone-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-3 py-0.5 text-[12px] transition-colors border-l -ml-px ${
                activeId === item.id
                  ? "text-stone-800 font-medium border-stone-800"
                  : "text-stone-400 hover:text-stone-600 border-transparent"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
