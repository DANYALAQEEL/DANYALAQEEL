import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating...")
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        time.sleep(2.0)
        
        # Hover
        print("Hovering...")
        page.mouse.move(1000, 400)
        time.sleep(2.0)
        
        left_panel = page.locator("div.bg-surface-900").first
        
        # Get computed styles
        styles = left_panel.evaluate("""(element) => {
            const style = window.getComputedStyle(element);
            return {
                width: style.width,
                height: style.height,
                padding: style.padding,
                margin: style.margin,
                display: style.display,
                visibility: style.visibility,
                opacity: style.opacity,
                overflow: style.overflow,
                minWidth: style.minWidth,
                maxWidth: style.maxWidth
            };
        }""")
        
        print("\n=== COMPUTED STYLES AFTER HOVER ===")
        for k, v in styles.items():
            print(f"{k}: {v}")
            
        browser.close()

if __name__ == "__main__":
    run()
