import { fromElement } from './extract.js'
import type { ResponsiveDescriptor } from './types.js'

/** Default breakpoints: mobile, tablet, desktop */
const DEFAULT_BREAKPOINTS = [0, 768, 1024]

/**
 * Extract a responsive descriptor from a rendered DOM element at multiple widths.
 *
 * Resizes the element's container to each breakpoint width, extracts the
 * skeleton descriptor, and returns a ResponsiveDescriptor mapping.
 *
 * Use this at build time, in a test, or in a dev tool to pre-generate
 * descriptors that work at every breakpoint. Ship the result as JSON.
 *
 * @example Browser dev tool / test:
 * ```ts
 * import { extractResponsive } from 'boneyard-js'
 *
 * // Render your component, then:
 * const el = document.querySelector('.blog-post')!
 * const descriptor = extractResponsive(el, [0, 768, 1024])
 * console.log(JSON.stringify(descriptor, null, 2))
 * // Save as blog-post-skeleton.json
 * ```
 *
 * @example Playwright / build script:
 * ```ts
 * for (const width of [375, 768, 1280]) {
 *   await page.setViewportSize({ width, height: 800 })
 *   await page.waitForTimeout(100)
 *   const desc = await page.evaluate(() => {
 *     const { extractResponsive } = require('boneyard')
 *     return extractResponsive(document.querySelector('.card')!)
 *   })
 * }
 * ```
 */
export function extractResponsive(
  el: Element,
  breakpoints: number[] = DEFAULT_BREAKPOINTS,
): ResponsiveDescriptor {
  const container = el.parentElement
  if (!container) {
    throw new Error('boneyard: element must have a parent to extract responsive descriptors')
  }

  // Save original styles
  const originalWidth = container.style.width
  const originalOverflow = container.style.overflow

  const result: ResponsiveDescriptor = {}

  // Prevent layout from overflowing during resize
  container.style.overflow = 'hidden'

  const sorted = [...breakpoints].sort((a, b) => a - b)

  for (const bp of sorted) {
    const targetWidth = bp === 0 ? 375 : bp

    // Resize container to simulate breakpoint
    container.style.width = `${targetWidth}px`

    // Force synchronous layout recalc
    void container.offsetHeight

    try {
      result[bp] = fromElement(el)
    } catch {
      // Skip breakpoints that fail to extract
    }
  }

  // Restore original styles
  container.style.width = originalWidth
  container.style.overflow = originalOverflow

  // Force layout to settle back
  void container.offsetHeight

  return result
}
