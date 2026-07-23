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
        time.sleep(2.0)
        
        print("Logging in via credentials...")
        page.fill("input[type='email']", "appadmin@yopmail.com")
        page.fill("input[type='password']", "password123")
        page.click("button[type='submit']")
        
        # Wait for transition and redirect
        time.sleep(3.0)
        
        print(f"Current URL: {page.url}")
        
        print("Toggling dark mode...")
        # Find and click the toggle button
        toggle_btn = page.locator("button[title*='Switch to']").first
        toggle_btn.click()
        time.sleep(2.0)
        
        # Query elements
        header_el = page.locator("h3:has-text('Device Availability Ratio')").first
        ratio_text = page.locator("div.absolute.flex.flex-col.items-center span.text-2xl").first
        alarm_title = page.locator("div.flex-1.min-w-0 p.text-surface-800").first
        
        print("\n=== LIVE COMPUTED COLORS IN DARK MODE ===")
        print(f"Header 'Device Availability Ratio' Color: {header_el.evaluate('el => window.getComputedStyle(el).color') if header_el.count() > 0 else 'N/A'}")
        print(f"Ratio '73%' Color:                      {ratio_text.evaluate('el => window.getComputedStyle(el).color') if ratio_text.count() > 0 else 'N/A'}")
        print(f"Alarm Title 'Overvoltage Alert' Color:   {alarm_title.evaluate('el => window.getComputedStyle(el).color') if alarm_title.count() > 0 else 'N/A'}")
        
        # Take a screenshot
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_dashboard_dark.png")
        print("Saved screenshot to live_dashboard_dark.png")
        
        browser.close()

if __name__ == "__main__":
    run()
