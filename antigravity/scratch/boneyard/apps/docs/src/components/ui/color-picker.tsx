"use client"

import React, { useEffect, useState } from "react"
import { CheckIcon } from "@/components/ui/icons/check"
import { ChevronDownIcon } from "@/components/ui/icons/chevron-down"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Helper functions for color conversion
const hslToHex = (h: number, s: number, l: number) => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0")
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

const hexToHsl = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [0, 0, 0]

  let r = parseInt(result[1], 16) / 255
  let g = parseInt(result[2], 16) / 255
  let b = parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  let l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

const normalizeColor = (color: string): string => {
  if (color.startsWith("#")) {
    return color.toUpperCase()
  } else if (color.startsWith("hsl")) {
    const [h, s, l] = color.match(/\d+(\.\d+)?/g)?.map(Number) || [0, 0, 0]
    return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`
  }
  return color
}

const trimColorString = (color: string, maxLength: number = 20): string => {
  if (color.length <= maxLength) return color
  return `${color.slice(0, maxLength - 3)}...`
}

export function ColorPicker({
  color,
  onChange,
}: {
  color: string
  onChange: (color: string) => void
}) {
  const [hsl, setHsl] = useState<[number, number, number]>([0, 0, 0])
  const [colorInput, setColorInput] = useState(color)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    handleColorChange(color)
  }, [color])

  const handleColorChange = (newColor: string) => {
    const normalizedColor = normalizeColor(newColor)
    setColorInput(normalizedColor)

    let h, s, l
    if (normalizedColor.startsWith("#")) {
      ;[h, s, l] = hexToHsl(normalizedColor)
    } else {
      ;[h, s, l] = normalizedColor.match(/\d+(\.\d+)?/g)?.map(Number) || [
        0, 0, 0,
      ]
    }

    setHsl([h, s, l])
    onChange(`hsl(${h.toFixed(1)}, ${s.toFixed(1)}%, ${l.toFixed(1)}%)`)
  }

  const handleHueChange = (hue: number) => {
    const newHsl: [number, number, number] = [hue, hsl[1], hsl[2]]
    setHsl(newHsl)
    handleColorChange(`hsl(${newHsl[0]}, ${newHsl[1]}%, ${newHsl[2]}%)`)
  }

  const handleSaturationLightnessChange = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const s = Math.round((x / rect.width) * 100)
    const l = Math.round(100 - (y / rect.height) * 100)
    const newHsl: [number, number, number] = [hsl[0], s, l]
    setHsl(newHsl)
    handleColorChange(`hsl(${newHsl[0]}, ${newHsl[1]}%, ${newHsl[2]}%)`)
  }

  const handleColorInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newColor = event.target.value
    setColorInput(newColor)
    if (
      /^#[0-9A-Fa-f]{6}$/.test(newColor) ||
      /^hsl$$\d+,\s*\d+%,\s*\d+%$$$/.test(newColor)
    ) {
      handleColorChange(newColor)
    }
  }

  const colorPresets = [
    "#f5f5f4",
    "#e7e5e4",
    "#d6d3d1",
    "#c8c5c2",
    "#a8a29e",
    "#918a85",
    "#78716c",
    "#57534e",
    "#44403c",
    "#292524",
    "#1c1917",
    "#d4d4d4",
  ]

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 h-7 pl-1.5 pr-2.5 rounded-lg bg-stone-100 text-[11px] text-stone-500 hover:bg-stone-200/70 transition-colors"
        >
          <div
            className="w-4 h-4 rounded-full border border-stone-300"
            style={{ backgroundColor: colorInput }}
          />
          <span className="font-mono">{colorInput.startsWith("#") ? colorInput : trimColorString(colorInput, 10)}</span>
          <ChevronDownIcon size={12} className="opacity-40" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-3 bg-white border-stone-200 shadow-lg">
        <div className="space-y-3">
          <div
            className="w-full h-40 rounded-lg cursor-crosshair relative overflow-hidden"
            style={{
              background: `
                linear-gradient(to top, rgba(0, 0, 0, 1), transparent),
                linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 0, 0, 0)),
                hsl(${hsl[0]}, 100%, 50%)
              `,
            }}
            onClick={handleSaturationLightnessChange}
          >
            <div
              className="w-4 h-4 rounded-full border-2 border-white absolute shadow-md transition-transform hover:scale-110"
              style={{
                left: `${hsl[1]}%`,
                top: `${100 - hsl[2]}%`,
                backgroundColor: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`,
              }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={hsl[0]}
            onChange={(e) => handleHueChange(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right,
                hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%),
                hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%)
              )`,
            }}
          />
          <div className="flex items-center space-x-2">
            <Label htmlFor="color-input" className="sr-only">
              Color
            </Label>
            <Input
              id="color-input"
              type="text"
              value={colorInput}
              onChange={handleColorInputChange}
              className="flex-grow bg-white border border-stone-200 rounded-md text-sm h-8 px-2"
              placeholder="#RRGGBB or hsl(h, s%, l%)"
            />
            <div
              className="w-8 h-8 rounded-md shadow-sm shrink-0"
              style={{ backgroundColor: colorInput }}
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {colorPresets.map((preset) => {
              const isLight = parseInt(preset.slice(1, 3), 16) > 180;
              return (
                <button
                  key={preset}
                  className="w-8 h-8 rounded-full relative border border-stone-200 transition-transform hover:scale-110 active:scale-95"
                  style={{ backgroundColor: preset }}
                  onClick={() => handleColorChange(preset)}
                >
                  {colorInput === preset && (
                    <CheckIcon size={16} className={`${isLight ? "text-stone-600" : "text-white"} absolute inset-0 m-auto`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ColorPicker
