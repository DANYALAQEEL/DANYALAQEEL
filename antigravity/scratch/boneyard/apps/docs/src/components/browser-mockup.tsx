import { cn } from "@/lib/utils";

export function BrowserMockup({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-stone-200 bg-white overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 bg-stone-50">
        <div className="flex gap-1.5">
          <span className="w-[7px] h-[7px] rounded-full bg-[#ec6a5e]" />
          <span className="w-[7px] h-[7px] rounded-full bg-[#f4bf4f]" />
          <span className="w-[7px] h-[7px] rounded-full bg-[#61c554]" />
        </div>
        <div className="flex-1 bg-white border border-stone-200 rounded-md px-3 py-1 text-[11px] font-mono text-stone-400">
          {url || ""}
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
