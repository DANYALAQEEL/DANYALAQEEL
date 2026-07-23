import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 1000})
        page = context.new_page()
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        time.sleep(3)
        
        print("Clicking Super Admin demo access button...")
        # Since button is 4th on page (index 3)
        page.locator("button").nth(3).click()
        
        print("Waiting for login portal animation and redirect...")
        time.sleep(4)
        print(f"Current URL: {page.url}")
        
        print("Toggling dark mode...")
        # Find theme toggler button and click it
        page.locator("button[title*='Switch to']").first.click()
        time.sleep(2)
        
        # Take screenshot of the admin dashboard
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_admin_dashboard_dark.png")
        print("Saved screenshot to live_admin_dashboard_dark.png")
        
        browser.close()

if __name__ == "__main__":
    run()
