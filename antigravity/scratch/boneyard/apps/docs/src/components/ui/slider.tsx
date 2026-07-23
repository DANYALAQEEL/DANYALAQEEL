import * as React from "react"
import { cn } from "@/lib/utils"

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  min?: number
  max?: number
  step?: number
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, ...props }, ref) => {
    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={cn(
          "w-full h-2 rounded-full bg-stone-200 appearance-none cursor-pointer",
          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-stone-900 [&::-webkit-slider-thumb]:cursor-pointer",
          "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-stone-900 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-solid",
          "[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-stone-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
