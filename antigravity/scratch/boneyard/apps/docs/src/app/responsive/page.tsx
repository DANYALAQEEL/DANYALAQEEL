"use client";

import { useRef, useState, useCallback } from "react";
import { Skeleton } from "boneyard-js/react";
import { BrowserMockup } from "@/components/browser-mockup";
import { CodeBlock } from "@/components/ui/code-block";
import { TableOfContents } from "@/components/toc";

const tocItems = [
  { id: "try-it", label: "Try it" },
  { id: "same-component-all-breakpoints", label: "All breakpoints" },
  { id: "how-it-works", label: "How it works" },
  { id: "what-the-json-looks-like", label: "What the JSON looks like" },
  { id: "custom-breakpoints", label: "Custom breakpoints" },
  { id: "how-breakpoint-selection-works", label: "How breakpoint selection works" },
];

// ── Example component that changes layout at different widths ──

function ProductCard({ layout }: { layout: "mobile" | "tablet" | "desktop" }) {
  if (layout === "mobile") {
    return (
      <div className="flex flex-col gap-2.5">
        <div className="w-full aspect-square bg-stone-200 rounded-md" />
        <h3 className="text-[14px] font-bold leading-tight">Wireless Headphones</h3>
        <p className="text-[12px] text-stone-500 leading-relaxed">
          Active noise cancellation, 30hr battery.
        </p>
        <span className="text-[16px] font-bold">$249</span>
        <button className="w-full py-2 bg-stone-900 text-white text-[12px] rounded-md">Add to Cart</button>
      </div>
    );
  }

  if (layout === "tablet") {
    return (
      <div className="flex gap-4">
        <div className="w-[140px] h-[140px] bg-stone-200 rounded-md shrink-0" />
        <div className="flex flex-col gap-1.5 min-w-0">
          <h3 className="text-[14px] font-bold leading-tight">Wireless Headphones</h3>
          <p className="text-[12px] text-stone-500 leading-relaxed">
            Active noise cancellation, 30hr battery. Premium comfort for all-day listening.
          </p>
          <span className="text-[16px] font-bold mt-1">$249</span>
          <button className="w-[120px] py-1.5 bg-stone-900 text-white text-[12px] rounded-md mt-1">Add to Cart</button>
        </div>
      </div>
    );
  }

  // desktop
  return (
    <div className="flex gap-5 items-start">
      <div className="w-[180px] h-[180px] bg-stone-200 rounded-md shrink-0" />
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <h3 className="text-[16px] font-bold leading-tight">Wireless Headphones</h3>
        <p className="text-[13px] text-stone-500 leading-relaxed">
          Active noise cancellation, 30hr battery life. Premium comfort designed for all-day listening with adaptive EQ.
        </p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[18px] font-bold">$249</span>
          <span className="text-[12px] text-stone-400 line-through">$349</span>
        </div>
      </div>
      <button className="px-4 py-2 bg-stone-900 text-white text-[12px] rounded-md shrink-0">Add to Cart</button>
    </div>
  );
}

// ── Breakpoints for the indicator ──
// These match the keys in responsive-product.bones.json (container-width breakpoints)
const BREAKPOINTS = [220, 400, 640];

function getActiveBreakpoint(width: number): number {
  return [...BREAKPOINTS].reverse().find((bp) => width >= bp) ?? BREAKPOINTS[0];
}

function getBreakpointLabel(bp: number): string {
  if (bp >= 640) return "desktop";
  if (bp >= 400) return "tablet";
  return "mobile";
}

// ── Resizable demo ──

function ResizableDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(680);
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, startWidth: 0 });

  const MIN_WIDTH = 180;
  const MAX_WIDTH = 680;

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      dragStartRef.current = { x: e.clientX, startWidth: width };
      setDragging(true);
    },
    [width]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStartRef.current.x;
      const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, dragStartRef.current.startWidth + dx));
      setWidth(next);
    },
    [dragging]
  );

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const activeBp = getActiveBreakpoint(width);
  const label = getBreakpointLabel(activeBp);

  return (
    <div>
      {/* Width indicator */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[12px] font-mono text-stone-400">
          {Math.round(width)}px
        </span>
        <div className="flex gap-1.5">
          {BREAKPOINTS.map((bp) => (
            <span
              key={bp}
              className={`text-[11px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                bp === activeBp
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-400"
              }`}
            >
              {getBreakpointLabel(bp)}
            </span>
          ))}
        </div>
      </div>

      {/* Resizable container */}
      <div
        className="relative"
        style={{ width, maxWidth: "100%" }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <BrowserMockup url="my-app.com/products">
          <div ref={containerRef}>
            <Skeleton name="responsive-product" loading={true} animate="shimmer">
              <ProductCard layout={label as "mobile" | "tablet" | "desktop"} />
            </Skeleton>
          </div>
        </BrowserMockup>

        {/* Drag handle */}
        <div
          className="absolute top-0 -right-3 w-6 h-full flex items-center justify-center cursor-ew-resize z-10 select-none"
          onPointerDown={onPointerDown}
        >
          <div
            className={`w-1.5 h-10 rounded-full transition-colors ${
              dragging ? "bg-stone-500" : "bg-stone-300"
            }`}
          />
        </div>
      </div>
      <p className="text-[12px] text-stone-400 mt-2">
        Drag the handle to resize. The skeleton auto-switches at each breakpoint.
      </p>
    </div>
  );
}

// ── Page ──

export default function ResponsivePage() {
  return (
    <>
      <div className="w-full max-w-[720px] px-6 pt-14 pb-12 space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight mb-2">Responsive</h1>
          <p className="text-[15px] text-[#78716c] leading-relaxed">
            Boneyard captures your layout at multiple breakpoints automatically. One{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">&lt;Skeleton&gt;</code>{" "}
            component, one{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">.bones.json</code>{" "}
            file — the right skeleton is selected at runtime based on the container width.
          </p>
        </div>

        {/* Interactive demo */}
        <section>
          <div className="section-divider" id="try-it">
            <span>Try it</span>
          </div>
          <p className="text-[14px] text-[#78716c] leading-relaxed mt-4 mb-6">
            This is a single{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">&lt;Skeleton name=&quot;responsive-product&quot;&gt;</code>{" "}
            component. Resize it and watch it switch between the mobile, tablet, and desktop
            bone sets automatically.
          </p>
          <ResizableDemo />
        </section>

        {/* All three breakpoints side-by-side */}
        <section>
          <div className="section-divider" id="same-component-all-breakpoints">
            <span>Same component, all breakpoints</span>
          </div>
          <p className="text-[14px] text-[#78716c] leading-relaxed mt-4 mb-6">
            The same{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">&lt;Skeleton name=&quot;responsive-product&quot;&gt;</code>{" "}
            at three fixed widths. Each uses the same bones file — the component picks the
            matching breakpoint based on its container size.
          </p>

          <div className="space-y-6">
            {[
              { label: "220px", tag: "mobile" as const, width: 250 },
              { label: "400px", tag: "tablet" as const, width: 460 },
              { label: "640px", tag: "desktop" as const, width: undefined },
            ].map(({ label, tag, width }) => (
              <div key={label}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px] font-mono text-stone-400">{label}</span>
                  <span className="text-[11px] text-stone-300">{tag}</span>
                </div>
                <div style={width ? { maxWidth: width } : undefined}>
                  <BrowserMockup url="skeleton">
                    <Skeleton name="responsive-product" loading={true} animate="shimmer">
                      <ProductCard layout={tag} />
                    </Skeleton>
                  </BrowserMockup>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <div className="section-divider" id="how-it-works">
            <span>How it works</span>
          </div>
          <p className="text-[14px] text-[#78716c] leading-relaxed mt-4 mb-4">
            When you run{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">npx boneyard-js build</code>,
            Playwright visits your page at multiple breakpoints and snapshots the DOM at each one.
            If you have Tailwind, it auto-detects your breakpoints — <strong className="text-stone-600">375, 640, 768, 1024, 1280, 1536px</strong>.
            Without Tailwind, it falls back to 375, 768, 1280px. All breakpoints are stored
            in a single{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">.bones.json</code> file.
          </p>
          <p className="text-[14px] text-[#78716c] leading-relaxed mb-4">
            At runtime, the{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">&lt;Skeleton&gt;</code>{" "}
            component uses a{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">ResizeObserver</code>{" "}
            to measure its container and picks the closest breakpoint. When the container resizes,
            it swaps to the matching skeleton automatically.
          </p>
        </section>

        {/* Output format */}
        <section>
          <div className="section-divider" id="what-the-json-looks-like">
            <span>What the JSON looks like</span>
          </div>
          <p className="text-[14px] text-[#78716c] leading-relaxed mt-4 mb-4">
            Each{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">.bones.json</code>{" "}
            file contains all breakpoints in a single object. The{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">x</code> and{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">w</code>{" "}
            values are percentages of the container width, so they scale naturally.
          </p>
          <CodeBlock
            filename="responsive-product.bones.json"
            language="json"
            code={`{
  <span class="text-[#93c5fd]">"breakpoints"</span>: {
    <span class="text-[#93c5fd]">"375"</span>: {
      <span class="text-[#93c5fd]">"width"</span>: <span class="text-[#fbbf24]">220</span>,
      <span class="text-[#93c5fd]">"height"</span>: <span class="text-[#fbbf24]">341</span>,
      <span class="text-[#93c5fd]">"bones"</span>: [
        [<span class="text-[#fbbf24]">0</span>, <span class="text-[#fbbf24]">0</span>, <span class="text-[#fbbf24]">100</span>, <span class="text-[#fbbf24]">186</span>, <span class="text-[#fbbf24]">6</span>],
        <span class="text-stone-500">// ... vertical stack</span>
      ]
    },
    <span class="text-[#93c5fd]">"768"</span>: { <span class="text-stone-500">/* horizontal layout */</span> },
    <span class="text-[#93c5fd]">"1280"</span>: { <span class="text-stone-500">/* wide layout with button on right */</span> }
  }
}`}
          />
        </section>

        {/* Custom breakpoints */}
        <section>
          <div className="section-divider" id="custom-breakpoints">
            <span>Custom breakpoints</span>
          </div>
          <p className="text-[14px] text-[#78716c] leading-relaxed mt-4 mb-4">
            Tailwind breakpoints are auto-detected. Without Tailwind, the defaults are 375, 768, 1280.
            You can override them via{" "}
            <code className="text-[12px] bg-stone-100 px-1.5 py-0.5 rounded">boneyard.config.json</code>{" "}
            or the CLI flag.
          </p>
          <CodeBlock
            filename="boneyard.config.json"
            language="json"
            code={`{
  <span class="text-[#93c5fd]">"breakpoints"</span>: [<span class="text-[#fbbf24]">390</span>, <span class="text-[#fbbf24]">820</span>, <span class="text-[#fbbf24]">1440</span>]
}`}
          />
          <p className="text-[13px] text-stone-400 mt-2 mb-4">
            Or pass directly: <code className="text-[12px] bg-stone-100 px-1 py-0.5 rounded">npx boneyard-js build --breakpoints 390,820,1440</code>
          </p>
        </section>

        {/* How selection works */}
        <section>
          <div className="section-divider" id="how-breakpoint-selection-works">
            <span>How breakpoint selection works</span>
          </div>
          <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-4 space-y-2">
            <ul className="text-[13px] text-[#78716c] space-y-1.5 list-disc pl-4">
              <li>
                <code className="text-[12px] bg-white px-1 py-0.5 rounded border border-stone-200">&lt;Skeleton&gt;</code>{" "}
                measures its container width with{" "}
                <code className="text-[12px] bg-white px-1 py-0.5 rounded border border-stone-200">ResizeObserver</code>
              </li>
              <li>
                Picks the largest breakpoint that fits (e.g., 500px container &rarr; uses 375px bones)
              </li>
              <li>
                Updates automatically on resize — no re-render needed, just swaps the bone set
              </li>
              <li>
                <code className="text-[12px] bg-white px-1 py-0.5 rounded border border-stone-200">x</code> and{" "}
                <code className="text-[12px] bg-white px-1 py-0.5 rounded border border-stone-200">w</code>{" "}
                are stored as percentages, so bones scale smoothly within a breakpoint range
              </li>
            </ul>
          </div>
        </section>
      </div>

      <TableOfContents items={tocItems} />
    </>
  );
}
