import time
import subprocess
from playwright.sync_api import sync_playwright

def run():
    print("Starting local dev server...")
    proc = subprocess.Popen(["npm", "run", "dev"], shell=True, cwd="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\ems-dashboard-final")
    time.sleep(3)
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()
            
            print("Navigating to login page...")
            page.goto("http://localhost:5173/login")
            page.wait_for_load_state("networkidle")
            time.sleep(1.0)
            
            print("Logging in as Super Admin...")
            page.locator("button:has-text('Super Admin')").click()
            time.sleep(3.0)
            
            # Navigate to admin dashboard (home page) by clicking Sidebar Dashboard link
            print("Clicking Dashboard link...")
            page.locator("aside a:has-text('Dashboard')").first.click()
            time.sleep(2.0)
            
            print(f"Current URL: {page.url}")
            
            print("Toggling dark mode...")
            toggle_btn = page.locator("button[title*='Switch to']")
            toggle_btn.click()
            time.sleep(1.0)
            
            # Query elements
            header_el = page.locator("h3:has-text('Device Availability Ratio')").first
            ratio_text = page.locator("div.absolute.flex.flex-col.items-center span.text-2xl").first
            alarm_title = page.locator("div.flex-1.min-w-0 p.text-surface-800").first
            
            print("\n=== COMPUTED COLORS IN DARK MODE ===")
            print(f"Header 'Device Availability Ratio' Color: {header_el.evaluate('el => window.getComputedStyle(el).color')}")
            print(f"Ratio '73%' Color:                      {ratio_text.evaluate('el => window.getComputedStyle(el).color') if ratio_text.count() > 0 else 'N/A'}")
            print(f"Alarm Title 'Overvoltage Alert' Color:   {alarm_title.evaluate('el => window.getComputedStyle(el).color') if alarm_title.count() > 0 else 'N/A'}")
            
            browser.close()
    finally:
        print("Stopping dev server...")
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)], shell=True)

if __name__ == "__main__":
    run()
