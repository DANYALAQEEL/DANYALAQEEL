import { describe, it, expect } from 'bun:test'
import { createApp, defineComponent, h, nextTick } from 'vue'
import Skeleton from './Skeleton.vue'
import { registerBones } from './shared.js'

// ── Helpers ──

async function render(
  props: Record<string, any>,
  slots: Record<string, () => any> = {},
): Promise<string> {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const App = defineComponent({
    render() {
      return h(Skeleton as any, props, slots)
    },
  })

  const app = createApp(App)
  app.mount(container)

  // Wait for ResizeObserver callback + Vue reactivity
  await new Promise(r => setTimeout(r, 10))
  await nextTick()
  await new Promise(r => setTimeout(r, 10))
  await nextTick()

  const html = container.innerHTML
  app.unmount()
  document.body.removeChild(container)
  return html
}

function slot(cls: string, text: string) {
  return () => h('div', { class: cls }, text)
}

const testBones = {
  name: 'test-card',
  viewportWidth: 375,
  width: 375,
  height: 200,
  bones: [
    { x: 0, y: 0, w: 100, h: 20, r: 4 },
    { x: 0, y: 30, w: 60, h: 14, r: 4 },
  ],
}

const compactBones = {
  name: 'compact-card',
  viewportWidth: 375,
  width: 375,
  height: 100,
  bones: [
    [5, 10, 90, 40, 8],
    [5, 60, 50, 14, 4, true],
  ],
}

// ── Tests ──

describe('Vue Skeleton component', () => {

  describe('rendering states', () => {
    it('renders children when not loading', async () => {
      const html = await render(
        { loading: false },
        { default: slot('child-content', 'Hello') },
      )
      expect(html).toContain('child-content')
      expect(html).not.toContain('data-boneyard-overlay')
    })

    it('renders skeleton overlay when loading with bones', async () => {
      const html = await render({ loading: true, initialBones: testBones })
      expect(html).toContain('data-boneyard-overlay')
      expect(html.match(/data-boneyard-bone/g)?.length).toBe(2)
    })

    it('renders fallback slot when loading without bones', async () => {
      const html = await render(
        { loading: true },
        { fallback: slot('my-fallback', 'Loading...') },
      )
      expect(html).toContain('my-fallback')
      expect(html).not.toContain('data-boneyard-overlay')
    })

    it('hides content when skeleton is visible', async () => {
      const html = await render(
        { loading: true, initialBones: testBones },
        { default: slot('real-content', 'Data') },
      )
      expect(html).toContain('visibility: hidden')
      expect(html).toContain('data-boneyard-overlay')
    })

    it('shows content when not loading', async () => {
      const html = await render(
        { loading: false, initialBones: testBones },
        { default: slot('real-content', 'Data') },
      )
      expect(html).not.toContain('visibility: hidden')
      expect(html).toContain('real-content')
    })
  })

  describe('bone rendering', () => {
    it('renders bones with correct position styles', async () => {
      const html = await render({ loading: true, initialBones: testBones })
      expect(html).toContain('left: 0%')
      expect(html).toContain('width: 100%')
      // height gets scaled by scaleY (containerHeight/capturedHeight = 400/200 = 2)
      expect(html).toContain('height: 40px')
      expect(html).toContain('border-radius: 4px')
    })

    it('renders second bone correctly', async () => {
      const html = await render({ loading: true, initialBones: testBones })
      expect(html).toContain('width: 60%')
      // top and height are scaled by scaleY=2 (30*2=60, 14*2=28)
      expect(html).toContain('top: 60px')
      expect(html).toContain('height: 28px')
    })

    it('renders compact tuple bones', async () => {
      const html = await render({ loading: true, initialBones: compactBones })
      expect(html.match(/data-boneyard-bone/g)?.length).toBe(2)
      expect(html).toContain('left: 5%')
      expect(html).toContain('width: 90%')
    })

    it('renders container bones with lighter color', async () => {
      const html = await render({
        loading: true,
        initialBones: compactBones,
        color: '#000000',
      })
      expect(html).toContain('#000000')
      // Container bone (c=true) is lightened by CONTAINER.adjustment (0.12)
      expect(html).toContain('background-color: #1f1f1f')
    })

    it('applies string radius values', async () => {
      const bones = {
        name: 'str-r', viewportWidth: 375, width: 375, height: 100,
        bones: [{ x: 0, y: 0, w: 100, h: 100, r: '50%' }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).toContain('border-radius: 50%')
    })

    it('renders asymmetric border radius', async () => {
      const bones = {
        name: 'asym-r', viewportWidth: 375, width: 375, height: 100,
        bones: [{ x: 0, y: 0, w: 100, h: 50, r: '10px 20px 30px 40px' }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).toContain('border-radius: 10px 20px 30px 40px')
    })

    it('sanitizes malicious radius values', async () => {
      const bones = {
        name: 'bad-r', viewportWidth: 375, width: 375, height: 100,
        bones: [{ x: 0, y: 0, w: 100, h: 100, r: '0px; background-image: url(evil)' }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).toContain('border-radius: 0px')
      expect(html).not.toContain('url(')
      expect(html).not.toContain('evil')
    })

    it('sanitizes CSS injection in radius', async () => {
      const bones = {
        name: 'xss-r', viewportWidth: 375, width: 375, height: 100,
        bones: [{ x: 0, y: 0, w: 100, h: 100, r: '0;} .evil{color:red' }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).not.toContain('.evil')
      expect(html).toContain('border-radius: 0px')
    })

    it('allows numeric radius values', async () => {
      const bones = {
        name: 'num-r', viewportWidth: 375, width: 375, height: 100,
        bones: [{ x: 0, y: 0, w: 100, h: 100, r: 12 }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).toContain('border-radius: 12px')
    })

    it('handles zero-height skeleton', async () => {
      const bones = {
        name: 'zero', viewportWidth: 375, width: 375, height: 0,
        bones: [{ x: 0, y: 0, w: 100, h: 0, r: 0 }],
      }
      const html = await render({ loading: true, initialBones: bones })
      expect(html).toContain('data-boneyard-bone')
    })
  })

  describe('animations', () => {
    it('includes pulse keyframes by default', async () => {
      const html = await render({ loading: true, initialBones: testBones })
      expect(html).toContain('@keyframes bp-')
      expect(html).toContain('opacity')
    })

    it('includes shimmer keyframes when specified', async () => {
      const html = await render({
        loading: true, initialBones: testBones, animate: 'shimmer',
      })
      expect(html).toContain('@keyframes bs-')
      expect(html).toContain('background-position')
    })

    it('no keyframes when solid', async () => {
      const html = await render({
        loading: true, initialBones: testBones, animate: 'solid',
      })
      expect(html).not.toContain('@keyframes')
    })

    it('treats animate=true as pulse', async () => {
      const html = await render({
        loading: true, initialBones: testBones, animate: true,
      })
      expect(html).toContain('@keyframes bp-')
    })

    it('treats animate=false as solid', async () => {
      const html = await render({
        loading: true, initialBones: testBones, animate: false,
      })
      expect(html).not.toContain('@keyframes')
    })
  })

  describe('props', () => {
    it('applies custom color to bones', async () => {
      const html = await render({
        loading: true, initialBones: testBones, color: '#ff0000',
      })
      expect(html).toContain('#ff0000')
    })

    it('applies custom class', async () => {
      const html = await render({
        loading: true, initialBones: testBones, class: 'my-skeleton',
      })
      expect(html).toContain('my-skeleton')
    })

    it('sets data-boneyard name attribute', async () => {
      const html = await render({
        loading: true, name: 'profile', initialBones: testBones,
      })
      expect(html).toContain('data-boneyard="profile"')
    })

    it('serializes snapshotConfig', async () => {
      const config = { ignore: ['.ad-banner'] }
      const html = await render({ loading: false, snapshotConfig: config })
      expect(html).toContain('data-boneyard-config')
      expect(html).toContain('.ad-banner')
    })
  })

  describe('registry integration', () => {
    it('resolves bones from registry by name', async () => {
      registerBones({ 'vue-reg-test': testBones })
      const html = await render({ loading: true, name: 'vue-reg-test' })
      expect(html).toContain('data-boneyard-overlay')
      expect(html.match(/data-boneyard-bone/g)?.length).toBe(2)
    })

    it('renders fallback when name not in registry', async () => {
      const html = await render(
        { loading: true, name: 'nonexistent-vue' },
        { fallback: slot('fb', 'Loading...') },
      )
      expect(html).toContain('fb')
      expect(html).not.toContain('data-boneyard-overlay')
    })

    it('prefers initialBones over registry', async () => {
      const oneBone = {
        name: 'single', viewportWidth: 375, width: 375, height: 50,
        bones: [{ x: 0, y: 0, w: 100, h: 50, r: 0 }],
      }
      registerBones({ 'vue-override': testBones })
      const html = await render({
        loading: true, name: 'vue-override', initialBones: oneBone,
      })
      expect(html.match(/data-boneyard-bone/g)?.length).toBe(1)
    })
  })

  describe('responsive bones', () => {
    it('renders bones from responsive breakpoints', async () => {
      const responsive = {
        breakpoints: {
          375: { name: 'r', viewportWidth: 375, width: 375, height: 80, bones: [{ x: 0, y: 0, w: 100, h: 80, r: 4 }] },
          768: { name: 'r', viewportWidth: 768, width: 768, height: 120, bones: [{ x: 0, y: 0, w: 50, h: 120, r: 8 }, { x: 50, y: 0, w: 50, h: 120, r: 8 }] },
        },
      }
      const html = await render({ loading: true, initialBones: responsive })
      expect(html).toContain('data-boneyard-bone')
    })
  })
})
