import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating to live login page...")
        page.goto("https://embedaiot.vercel.app/login")
        page.wait_for_load_state("networkidle")
        time.sleep(1.0)
        
        print("Logging in as Super Admin...")
        page.locator("button:has-text('Super Admin')").click()
        time.sleep(3.0)
        
        print("Clicking Organizations link...")
        page.locator("aside a:has-text('Organizations')").click()
        time.sleep(2.0)
        
        print("Toggling dark mode on live site...")
        toggle_btn = page.locator("button[title*='Switch to']")
        toggle_btn.click()
        time.sleep(2.0)
        
        print("Saving live dark mode screenshot...")
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_orgs_dark.png")
        
        # Check computed styles of page-title and badges on live site
        page_title = page.locator("h2.page-title").first
        badge_active = page.locator("span.badge-success").first
        badge_inactive = page.locator("span.badge-neutral").first
        
        title_color = page_title.evaluate("el => window.getComputedStyle(el).color")
        active_color = badge_active.evaluate("el => window.getComputedStyle(el).color")
        active_bg = badge_active.evaluate("el => window.getComputedStyle(el).backgroundColor")
        inactive_color = badge_inactive.evaluate("el => window.getComputedStyle(el).color")
        inactive_bg = badge_inactive.evaluate("el => window.getComputedStyle(el).backgroundColor")
        
        print("\n=== LIVE DARK MODE COMPUTED STYLES ===")
        print(f"Page Title Color: {title_color}")
        print(f"Active Badge Color: {active_color} | BG: {active_bg}")
        print(f"Inactive Badge Color: {inactive_color} | BG: {inactive_bg}")
        
        browser.close()

if __name__ == "__main__":
    run()
