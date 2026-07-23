/**
 * Runtime — renders skeleton bones to HTML.
 *
 * Usage:
 *   import { computeLayout, renderBones } from 'boneyard-js'
 *
 *   const skeleton = computeLayout(myDescriptor, containerWidth)
 *   element.innerHTML = renderBones(skeleton)
 */

import { normalizeBone } from './types.js'
import type { AnyBone, SkeletonResult } from './types.js'
import { adjustColor, PULSE, DEFAULTS } from './shared.js'

/**
 * Render bones to an HTML string.
 * Use for SSR, innerHTML, or any HTML-based rendering.
 */
export function renderBones(
  skel: SkeletonResult,
  color?: string,
  animate?: boolean,
): string {
  const c = color ?? DEFAULTS.runtime
  const shouldAnimate = animate !== false
  const lighter = adjustColor(c, PULSE.lightAdjust)

  const keyframes = shouldAnimate
    ? `<style>.boneyard-bone{animation:boneyard-pulse ${PULSE.speed} ease-in-out infinite}@keyframes boneyard-pulse{0%,100%{background-color:${c}}50%{background-color:${lighter}}}</style>`
    : ''

  let html = `${keyframes}<div class="boneyard" style="position:relative;width:100%;height:${skel.height}px">`

  for (const raw of (skel.bones as AnyBone[])) {
    const b = normalizeBone(raw)
    if (b.c) continue
    const radius = typeof b.r === 'string' ? b.r : `${b.r}px`
    const capturedPxW = (b.w / 100) * (skel.width ?? 0)
    const isCircle = b.r === '50%' && (skel.width ?? 0) > 0 && Math.abs(capturedPxW - b.h) < 4
    const w = isCircle ? `${b.h}px` : `${b.w}%`
    html += `<div class="boneyard-bone" style="position:absolute;left:${b.x}%;top:${b.y}px;width:${w};height:${b.h}px;border-radius:${radius};background-color:${c}"></div>`
  }

  html += '</div>'
  return html
}
