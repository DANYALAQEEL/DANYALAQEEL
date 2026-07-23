import { plugin } from 'bun'
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
import { readFileSync } from 'fs'
import { Window } from 'happy-dom'

// ── Set up DOM globals BEFORE Vue loads ──
const win = new Window({ url: 'http://localhost' }) as any

// Copy all Window properties to globalThis so Vue runtime-dom picks them up
for (const key of Object.getOwnPropertyNames(win)) {
  if (key === 'undefined' || key === 'NaN' || key === 'Infinity') continue
  if (key in globalThis) continue
  try {
    const desc = Object.getOwnPropertyDescriptor(win, key)
    if (desc) Object.defineProperty(globalThis, key, desc)
  } catch {}
}

// Explicit overrides
;(globalThis as any).window = win
;(globalThis as any).document = win.document
;(globalThis as any).navigator = win.navigator
;(globalThis as any).HTMLElement = win.HTMLElement
;(globalThis as any).SVGElement = win.SVGElement
;(globalThis as any).Element = win.Element
;(globalThis as any).Node = win.Node
;(globalThis as any).Text = win.Text
;(globalThis as any).Comment = win.Comment
;(globalThis as any).DocumentFragment = win.DocumentFragment
;(globalThis as any).getComputedStyle = win.getComputedStyle.bind(win)
;(globalThis as any).requestAnimationFrame = (cb: any) => setTimeout(cb, 0)
;(globalThis as any).cancelAnimationFrame = clearTimeout

// Stub ResizeObserver with immediate callback
;(globalThis as any).ResizeObserver = class {
  cb: any
  constructor(cb: any) { this.cb = cb }
  observe(_el: any) {
    setTimeout(() => {
      this.cb([{ contentRect: { width: 375, height: 400 } }])
    }, 0)
  }
  unobserve() {}
  disconnect() {}
}

// Stub matchMedia
;(globalThis as any).matchMedia = (_q: string) => ({
  matches: false,
  addEventListener: () => {},
  removeEventListener: () => {},
})

// ── Vue SFC compiler plugin ──
plugin({
  name: 'vue-sfc-loader',
  setup(build) {
    build.onLoad({ filter: /\.vue$/ }, (args) => {
      const source = readFileSync(args.path, 'utf-8')
      const { descriptor } = parse(source, { filename: args.path })
      const id = args.path

      const script = compileScript(descriptor, { id })
      let code = script.content

      if (descriptor.template) {
        const template = compileTemplate({
          source: descriptor.template.content,
          filename: args.path,
          id,
          compilerOptions: { bindingMetadata: script.bindings },
        })
        code = code.replace(
          /export default \/\*#__PURE__\*\/|export default /,
          'const __sfc__ = ',
        )
        code += '\n' + template.code
        code += '\n__sfc__.render = render'
        code += '\nexport default __sfc__'
      }

      return { contents: code, loader: 'ts' }
    })
  },
})
