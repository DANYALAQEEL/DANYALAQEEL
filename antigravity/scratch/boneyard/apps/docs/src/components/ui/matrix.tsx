"use client"

import * as React from "react"
import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export type Frame = number[][]

interface CellPosition {
  x: number
  y: number
}

interface MatrixProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number
  cols: number
  pattern?: Frame
  frames?: Frame[]
  fps?: number
  autoplay?: boolean
  loop?: boolean
  size?: number
  gap?: number
  palette?: {
    on: string
    off: string
  }
  brightness?: number
  ariaLabel?: string
  onFrame?: (index: number) => void
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, value))
}

function ensureFrameSize(frame: Frame, rows: number, cols: number): Frame {
  const result: Frame = []
  for (let r = 0; r < rows; r++) {
    const row = frame[r] || []
    result.push([])
    for (let c = 0; c < cols; c++) {
      result[r][c] = row[c] ?? 0
    }
  }
  return result
}

function useAnimation(
  frames: Frame[] | undefined,
  options: {
    fps: number
    autoplay: boolean
    loop: boolean
    onFrame?: (index: number) => void
  }
): { frameIndex: number; isPlaying: boolean } {
  const [frameIndex, setFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(options.autoplay)
  const frameIdRef = useRef<number | undefined>(undefined)
  const lastTimeRef = useRef<number>(0)
  const accumulatorRef = useRef<number>(0)

  useEffect(() => {
    if (!frames || frames.length === 0 || !isPlaying) {
      return
    }

    const frameInterval = 1000 / options.fps

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime
      accumulatorRef.current += deltaTime

      if (accumulatorRef.current >= frameInterval) {
        accumulatorRef.current -= frameInterval

        setFrameIndex((prev) => {
          const next = prev + 1
          if (next >= frames.length) {
            if (options.loop) {
              options.onFrame?.(0)
              return 0
            } else {
              setIsPlaying(false)
              return prev
            }
          }
          options.onFrame?.(next)
          return next
        })
      }

      frameIdRef.current = requestAnimationFrame(animate)
    }

    frameIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }
    }
  }, [frames, isPlaying, options.fps, options.loop, options.onFrame])

  useEffect(() => {
    setFrameIndex(0)
    setIsPlaying(options.autoplay)
    lastTimeRef.current = 0
    accumulatorRef.current = 0
  }, [frames, options.autoplay])

  return { frameIndex, isPlaying }
}

export const Matrix = React.forwardRef<HTMLDivElement, MatrixProps>(
  (
    {
      rows,
      cols,
      pattern,
      frames,
      fps = 12,
      autoplay = true,
      loop = true,
      size = 10,
      gap = 2,
      palette = {
        on: "currentColor",
        off: "var(--muted-foreground)",
      },
      brightness = 1,
      ariaLabel,
      onFrame,
      className,
      ...props
    },
    ref
  ) => {
    const { frameIndex } = useAnimation(frames, {
      fps,
      autoplay: autoplay && !pattern,
      loop,
      onFrame,
    })

    const currentFrame = useMemo(() => {
      if (pattern) {
        return ensureFrameSize(pattern, rows, cols)
      }

      if (frames && frames.length > 0) {
        return ensureFrameSize(frames[frameIndex] || frames[0], rows, cols)
      }

      return ensureFrameSize([], rows, cols)
    }, [pattern, frames, frameIndex, rows, cols])

    const cellPositions = useMemo(() => {
      const positions: CellPosition[][] = []

      for (let row = 0; row < rows; row++) {
        positions[row] = []
        for (let col = 0; col < cols; col++) {
          positions[row][col] = {
            x: col * (size + gap),
            y: row * (size + gap),
          }
        }
      }

      return positions
    }, [rows, cols, size, gap])

    const svgDimensions = useMemo(() => {
      return {
        width: cols * (size + gap) - gap,
        height: rows * (size + gap) - gap,
      }
    }, [rows, cols, size, gap])

    const isAnimating = !pattern && frames && frames.length > 0

    return (
      <div
        ref={ref}
        role="img"
        aria-label={ariaLabel ?? "matrix display"}
        aria-live={isAnimating ? "polite" : undefined}
        className={cn("relative inline-block", className)}
        style={
          {
            "--matrix-on": palette.on,
            "--matrix-off": palette.off,
            "--matrix-gap": `${gap}px`,
            "--matrix-size": `${size}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <svg
          width={svgDimensions.width}
          height={svgDimensions.height}
          viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
          xmlns="http://www.w3.org/2000/svg"
          className="block"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id="matrix-pixel-on" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--matrix-on)" stopOpacity="1" />
              <stop
                offset="70%"
                stopColor="var(--matrix-on)"
                stopOpacity="0.85"
              />
              <stop
                offset="100%"
                stopColor="var(--matrix-on)"
                stopOpacity="0.6"
              />
            </radialGradient>

            <radialGradient id="matrix-pixel-off" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="var(--muted-foreground)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="var(--muted-foreground)"
                stopOpacity="0.7"
              />
            </radialGradient>

            <filter
              id="matrix-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <style>
            {`
              .matrix-pixel {
                transition: opacity 300ms ease-out, transform 150ms ease-out;
                transform-origin: center;
                transform-box: fill-box;
              }
              .matrix-pixel-active {
                filter: url(#matrix-glow);
              }
            `}
          </style>

          {currentFrame.map((row, rowIndex) =>
            row.map((value, colIndex) => {
              const pos = cellPositions[rowIndex]?.[colIndex]
              if (!pos) return null

              const opacity = clamp(brightness * value)
              const isActive = opacity > 0.5
              const isOn = opacity > 0.05
              const fill = isOn
                ? "url(#matrix-pixel-on)"
                : "url(#matrix-pixel-off)"

              const scale = isActive ? 1.1 : 1
              const radius = (size / 2) * 0.9

              return (
                <circle
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "matrix-pixel",
                    isActive && "matrix-pixel-active",
                    !isOn && "opacity-20 dark:opacity-[0.1]"
                  )}
                  cx={pos.x + size / 2}
                  cy={pos.y + size / 2}
                  r={radius}
                  fill={fill}
                  opacity={isOn ? opacity : 0.1}
                  style={{
                    transform: `scale(${scale})`,
                  }}
                />
              )
            })
          )}
        </svg>
      </div>
    )
  }
)

Matrix.displayName = "Matrix"
