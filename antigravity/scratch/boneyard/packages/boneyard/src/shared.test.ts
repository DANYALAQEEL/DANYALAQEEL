import { describe, expect, it } from 'bun:test'
import {
  adjustColor,
  ensureBuildSnapshotHook,
  getRegisteredBones,
  registerBones,
  resolveResponsive,
} from './shared.js'
import { normalizeBone } from './types.js'
import type { Bone, CompactBone, ResponsiveBones, SkeletonResult } from './types.js'

// ── Registry ────────────────────────────────────────────────────────────────

describe('registerBones & getRegisteredBones', () => {
  it('registers and resolves stored bones', () => {
    const bones: SkeletonResult = {
      name: 'shared-card',
      viewportWidth: 375,
      width: 375,
      height: 140,
      bones: [{ x: 0, y: 0, w: 100, h: 32, r: 8 }],
    }
    registerBones({ 'shared-card': bones })
    expect(getRegisteredBones('shared-card')).toEqual(bones)
  })

  it('returns undefined for unregistered names', () => {
    expect(getRegisteredBones('nonexistent')).toBeUndefined()
  })

  it('overwrites existing bones with same name', () => {
    const v1: SkeletonResult = { name: 'dup', viewportWidth: 375, width: 375, height: 100, bones: [] }
    const v2: SkeletonResult = { name: 'dup', viewportWidth: 768, width: 768, height: 200, bones: [] }
    registerBones({ dup: v1 })
    registerBones({ dup: v2 })
    expect(getRegisteredBones('dup')).toEqual(v2)
  })
})

// ── Responsive resolution ───────────────────────────────────────────────────

describe('resolveResponsive', () => {
  const responsive: ResponsiveBones = {
    breakpoints: {
      375: { name: 'r', viewportWidth: 375, width: 375, height: 100, bones: [] },
      768: { name: 'r', viewportWidth: 768, width: 768, height: 200, bones: [] },
      1280: { name: 'r', viewportWidth: 1280, width: 1280, height: 300, bones: [] },
    },
  }

  it('picks exact breakpoint', () => {
    expect(resolveResponsive(responsive, 768)?.viewportWidth).toBe(768)
  })

  it('picks nearest lower breakpoint', () => {
    expect(resolveResponsive(responsive, 420)?.viewportWidth).toBe(375)
    expect(resolveResponsive(responsive, 900)?.viewportWidth).toBe(768)
  })

  it('picks largest breakpoint for very wide screens', () => {
    expect(resolveResponsive(responsive, 1920)?.viewportWidth).toBe(1280)
  })

  it('falls back to smallest breakpoint when width is below all', () => {
    expect(resolveResponsive(responsive, 100)?.viewportWidth).toBe(375)
  })

  it('returns the result directly if not responsive', () => {
    const single: SkeletonResult = { name: 's', viewportWidth: 375, width: 375, height: 100, bones: [] }
    expect(resolveResponsive(single, 1000)).toEqual(single)
  })

  it('returns null for empty breakpoints', () => {
    expect(resolveResponsive({ breakpoints: {} }, 500)).toBeNull()
  })
})

// ── adjustColor ─────────────────────────────────────────────────────────────

describe('adjustColor', () => {
  it('lightens black hex toward white', () => {
    expect(adjustColor('#000000', 0.5)).toBe('#808080')
  })

  it('lightens black fully to white', () => {
    expect(adjustColor('#000000', 1.0)).toBe('#ffffff')
  })

  it('keeps white unchanged', () => {
    expect(adjustColor('#ffffff', 0.5)).toBe('#ffffff')
  })

  it('lightens a colored hex', () => {
    const result = adjustColor('#d4d4d4', 0.3)
    // d4 + (255 - d4) * 0.3 = d4 + 2b * 0.3 ≈ d4 + 0d = e1
    expect(result).toBe('#e1e1e1')
  })

  it('handles rgba — increases alpha', () => {
    expect(adjustColor('rgba(10,20,30,0.2)', 0.4)).toBe('rgba(10,20,30,0.400)')
  })

  it('clamps rgba alpha to 1', () => {
    expect(adjustColor('rgba(0,0,0,0.9)', 0.5)).toBe('rgba(0,0,0,1.000)')
  })

  it('returns unknown formats unchanged', () => {
    expect(adjustColor('red', 0.5)).toBe('red')
    expect(adjustColor('hsl(0, 100%, 50%)', 0.5)).toBe('hsl(0, 100%, 50%)')
  })

  it('handles short hex gracefully', () => {
    expect(adjustColor('#fff', 0.5)).toBe('#fff')
  })

  it('handles dark mode typical values', () => {
    const dark = adjustColor('#3a3a3c', 0.04)
    // Should lighten slightly
    expect(dark).not.toBe('#3a3a3c')
    expect(dark.startsWith('#')).toBe(true)
    expect(dark.length).toBe(7)
  })
})

// ── normalizeBone ───────────────────────────────────────────────────────────

describe('normalizeBone', () => {
  it('passes object bones through unchanged', () => {
    const bone: Bone = { x: 10, y: 20, w: 50, h: 30, r: 8 }
    expect(normalizeBone(bone)).toEqual(bone)
  })

  it('passes object bones with container flag', () => {
    const bone: Bone = { x: 0, y: 0, w: 100, h: 200, r: 12, c: true }
    expect(normalizeBone(bone)).toEqual(bone)
  })

  it('converts compact tuple to object', () => {
    const tuple: CompactBone = [10, 20, 50, 30, 8]
    expect(normalizeBone(tuple)).toEqual({ x: 10, y: 20, w: 50, h: 30, r: 8, c: undefined })
  })

  it('converts compact tuple with container flag', () => {
    const tuple: CompactBone = [0, 0, 100, 200, 12, true]
    expect(normalizeBone(tuple)).toEqual({ x: 0, y: 0, w: 100, h: 200, r: 12, c: true })
  })

  it('handles string border radius in tuple', () => {
    const tuple: CompactBone = [4, 16, 18, 64, '50%']
    const result = normalizeBone(tuple)
    expect(result.r).toBe('50%')
    expect(result.x).toBe(4)
  })

  it('handles zero values', () => {
    const tuple: CompactBone = [0, 0, 0, 0, 0]
    expect(normalizeBone(tuple)).toEqual({ x: 0, y: 0, w: 0, h: 0, r: 0, c: undefined })
  })
})

// ── Build mode hook ─────────────────────────────────────────────────────────

describe('ensureBuildSnapshotHook', () => {
  it('installs the snapshot hook in build mode', () => {
    const originalWindow = (globalThis as any).window
    ;(globalThis as any).window = { __BONEYARD_BUILD: true }

    try {
      ensureBuildSnapshotHook()
      expect(typeof (globalThis as any).window.__BONEYARD_SNAPSHOT).toBe('function')
    } finally {
      if (originalWindow === undefined) {
        delete (globalThis as any).window
      } else {
        ;(globalThis as any).window = originalWindow
      }
    }
  })

  it('does not install hook when not in build mode', () => {
    const originalWindow = (globalThis as any).window
    ;(globalThis as any).window = {}

    try {
      ensureBuildSnapshotHook()
      expect((globalThis as any).window.__BONEYARD_SNAPSHOT).toBeUndefined()
    } finally {
      if (originalWindow === undefined) {
        delete (globalThis as any).window
      } else {
        ;(globalThis as any).window = originalWindow
      }
    }
  })
})
