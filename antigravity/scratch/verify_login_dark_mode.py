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
            
            print("Saving login light mode screenshot...")
            page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\login_light.png")
            
            print("Toggling dark mode...")
            toggle_btn = page.locator("button[title*='Switch to']")
            toggle_btn.click()
            time.sleep(1.0)
            
            print("Saving login dark mode screenshot...")
            page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\login_dark.png")
            
            browser.close()
    finally:
        print("Stopping dev server...")
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)], shell=True)

if __name__ == "__main__":
    run()
