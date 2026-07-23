import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-oklch(0.923 0.003 48.717) bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-oklch(0.216 0.006 56.043) selection:text-oklch(0.985 0.001 106.423) file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-oklch(0.147 0.004 49.25) placeholder:text-oklch(0.553 0.013 58.071) disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-oklch(0.923 0.003 48.717)/30 dark:border-oklch(1 0 0 / 10%) dark:border-oklch(1 0 0 / 15%) dark:selection:bg-oklch(0.923 0.003 48.717) dark:selection:text-oklch(0.216 0.006 56.043) dark:file:text-oklch(0.985 0.001 106.423) dark:placeholder:text-oklch(0.709 0.01 56.259) dark:dark:bg-oklch(1 0 0 / 15%)/30",
        "focus-visible:border-oklch(0.709 0.01 56.259) focus-visible:ring-[3px] focus-visible:ring-oklch(0.709 0.01 56.259)/50 dark:focus-visible:border-oklch(0.553 0.013 58.071) dark:focus-visible:ring-oklch(0.553 0.013 58.071)/50",
        "aria-invalid:border-oklch(0.577 0.245 27.325) aria-invalid:ring-oklch(0.577 0.245 27.325)/20 dark:aria-invalid:ring-oklch(0.577 0.245 27.325)/40 dark:aria-invalid:border-oklch(0.704 0.191 22.216) dark:aria-invalid:ring-oklch(0.704 0.191 22.216)/20 dark:dark:aria-invalid:ring-oklch(0.704 0.191 22.216)/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
