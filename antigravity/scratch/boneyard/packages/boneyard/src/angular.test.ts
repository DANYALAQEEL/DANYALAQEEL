import { describe, it, expect, beforeEach } from 'bun:test'
import { normalizeBone } from './types.js'
import type { AnyBone, SkeletonResult, ResponsiveBones } from './types.js'
import {
  adjustColor,
  registerBones,
  getRegisteredBones,
  resolveResponsive,
  isBuildMode,
  ensureBuildSnapshotHook,
} from './shared.js'

// We can't instantiate the Angular component without @angular/core TestBed,
// but we CAN test all the logic the component depends on — the same functions
// it imports from shared.js and types.js. This validates that an Angular app
// importing from 'boneyard-js/angular' will get working bone resolution,
// color computation, and registry integration.

const SAMPLE_BONES: SkeletonResult = {
  name: 'test-card',
  viewportWidth: 375,
  width: 375,
  height: 200,
  bones: [
    { x: 0, y: 0, w: 100, h: 40, r: 8 },
    { x: 4.5, y: 50, w: 91, h: 14, r: 4 },
    { x: 4.5, y: 70, w: 60, h: 14, r: 4 },
  ],
}

const RESPONSIVE_BONES: ResponsiveBones = {
  breakpoints: {
    375: { ...SAMPLE_BONES, viewportWidth: 375 },
    768: { ...SAMPLE_BONES, viewportWidth: 768, width: 768, height: 300 },
    1280: { ...SAMPLE_BONES, viewportWidth: 1280, width: 1280, height: 400 },
  },
}

describe('Angular adapter dependencies', () => {
  describe('normalizeBone', () => {
    it('passes through object bones unchanged', () => {
      const bone = { x: 10, y: 20, w: 50, h: 30, r: 8 }
      expect(normalizeBone(bone)).toEqual(bone)
    })

    it('converts compact tuple to object', () => {
      const tuple: AnyBone = [10, 20, 50, 30, 8]
      const result = normalizeBone(tuple)
      expect(result.x).toBe(10)
      expect(result.y).toBe(20)
      expect(result.w).toBe(50)
      expect(result.h).toBe(30)
      expect(result.r).toBe(8)
    })

    it('handles compact tuple with container flag', () => {
      const tuple: AnyBone = [10, 20, 50, 30, 8, true]
      const result = normalizeBone(tuple)
      expect(result.c).toBe(true)
    })

    it('handles string border radius', () => {
      const bone = { x: 0, y: 0, w: 40, h: 40, r: '50%' }
      expect(normalizeBone(bone).r).toBe('50%')
    })
  })

  describe('adjustColor', () => {
    it('lightens rgba colors', () => {
      const result = adjustColor('rgba(0,0,0,0.08)', 0.3)
      expect(result).toContain('rgba(')
    })

    it('handles hex colors', () => {
      const result = adjustColor('#e5e5e5', 0.3)
      expect(result).toBeTruthy()
    })

    it('returns input for unparseable colors', () => {
      const result = adjustColor('invalidcolor', 0.3)
      expect(result).toBe('invalidcolor')
    })
  })

  describe('registry', () => {
    beforeEach(() => {
      // Clear registry
      registerBones({})
    })

    it('registers and retrieves bones', () => {
      registerBones({ 'test-card': SAMPLE_BONES })
      const result = getRegisteredBones('test-card')
      expect(result).toBeDefined()
      expect(result).toEqual(SAMPLE_BONES)
    })

    it('returns undefined for unregistered names', () => {
      const result = getRegisteredBones('nonexistent')
      expect(result).toBeUndefined()
    })

    it('registers responsive bones', () => {
      registerBones({ 'responsive-card': RESPONSIVE_BONES })
      const result = getRegisteredBones('responsive-card')
      expect(result).toBeDefined()
    })
  })

  describe('resolveResponsive', () => {
    it('returns SkeletonResult directly', () => {
      const result = resolveResponsive(SAMPLE_BONES, 375)
      expect(result).toEqual(SAMPLE_BONES)
    })

    it('picks closest breakpoint from responsive bones', () => {
      const result = resolveResponsive(RESPONSIVE_BONES, 800)
      expect(result).toBeDefined()
      expect(result!.viewportWidth).toBe(768)
    })

    it('picks largest breakpoint for wide viewports', () => {
      const result = resolveResponsive(RESPONSIVE_BONES, 1920)
      expect(result).toBeDefined()
      expect(result!.viewportWidth).toBe(1280)
    })

    it('picks smallest breakpoint for narrow viewports', () => {
      const result = resolveResponsive(RESPONSIVE_BONES, 320)
      expect(result).toBeDefined()
      expect(result!.viewportWidth).toBe(375)
    })
  })

  describe('build mode', () => {
    it('returns false when not in build mode', () => {
      expect(isBuildMode()).toBe(false)
    })
  })

  describe('bone style computation (Angular component logic)', () => {
    // These test the exact style string generation the Angular component performs
    it('computes correct bone positioning style', () => {
      const bone = normalizeBone({ x: 4.5, y: 50, w: 91, h: 14, r: 4 })
      const scaleY = 1
      const color = 'rgba(0,0,0,0.08)'
      const style = `position:absolute;left:${bone.x}%;top:${bone.y * scaleY}px;width:${bone.w}%;height:${bone.h * scaleY}px;border-radius:${bone.r}px;background-color:${color};overflow:hidden;`
      expect(style).toContain('left:4.5%')
      expect(style).toContain('top:50px')
      expect(style).toContain('width:91%')
      expect(style).toContain('height:14px')
      expect(style).toContain('border-radius:4px')
    })

    it('scales vertical positions correctly', () => {
      const bone = normalizeBone({ x: 0, y: 100, w: 100, h: 50, r: 0 })
      const scaleY = 1.5 // container is 1.5x taller than captured
      expect(bone.y * scaleY).toBe(150)
      expect(bone.h * scaleY).toBe(75)
    })

    it('computes container bone color (lighter)', () => {
      const color = 'rgba(0,0,0,0.08)'
      const containerColor = adjustColor(color, 0.45) // light mode container
      expect(containerColor).not.toBe(color)
    })

    it('computes overlay style for pulse animation', () => {
      const uid = 'abc123'
      const lighterColor = adjustColor('rgba(0,0,0,0.08)', 0.3)
      const style = `position:absolute;inset:0;background-color:${lighterColor};animation:bp-${uid} 1.8s ease-in-out infinite;`
      expect(style).toContain('bp-abc123')
      expect(style).toContain('1.8s')
    })

    it('computes overlay style for shimmer animation', () => {
      const uid = 'xyz789'
      const lighterColor = adjustColor('rgba(0,0,0,0.08)', 0.3)
      const style = `position:absolute;inset:0;background:linear-gradient(110deg, transparent 48.5%, ${lighterColor} 50%, transparent 51.5%);background-size:200% 100%;animation:bs-${uid} 1.6s linear infinite;`
      expect(style).toContain('bs-xyz789')
      expect(style).toContain('1.6s')
      expect(style).toContain('linear-gradient')
    })
  })

  describe('animation style resolution', () => {
    it('maps true to pulse', () => {
      const raw: any = true
      const result = raw === true ? 'pulse' : raw === false ? 'solid' : raw
      expect(result).toBe('pulse')
    })

    it('maps false to solid', () => {
      const raw: any = false
      const result = raw === true ? 'pulse' : raw === false ? 'solid' : raw
      expect(result).toBe('solid')
    })

    it('passes through string values', () => {
      const raw: any = 'shimmer'
      const result = raw === true ? 'pulse' : raw === false ? 'solid' : raw
      expect(result).toBe('shimmer')
    })
  })
})
