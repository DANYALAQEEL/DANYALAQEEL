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
            
            # Wait for login portal animation and redirect to complete (needs > 1.5s)
            time.sleep(3.0)
            
            print(f"Current URL after login: {page.url}")
            
            print("Clicking Organizations link in sidebar...")
            page.locator("aside a:has-text('Organizations')").click()
            time.sleep(2.0) # wait for page transition
            
            print(f"Current URL after sidebar click: {page.url}")
            
            print("Saving light mode screenshot...")
            page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\orgs_light.png")
            
            print("Toggling dark mode...")
            # The theme toggle button has title starting with "Switch to"
            toggle_btn = page.locator("button[title*='Switch to']")
            toggle_btn.click()
            time.sleep(2.0)
            
            print("Saving dark mode screenshot...")
            page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\orgs_dark.png")
            
            browser.close()
    finally:
        print("Stopping dev server...")
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)], shell=True)

if __name__ == "__main__":
    run()
