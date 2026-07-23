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
            
            print("Navigating to http://localhost:5173...")
            page.goto("http://localhost:5173")
            page.wait_for_load_state("networkidle")
            time.sleep(1.0)
            
            left_panel = page.locator("div.bg-surface-900").first
            
            # Initial
            cls_init = left_panel.get_attribute("class")
            print(f"Initial: Expanded={'lg:max-w-0' in cls_init}")
            
            # Move to right side
            print("Hovering on right side (x=1000)...")
            page.mouse.move(1000, 400)
            time.sleep(1.0)
            cls_right = left_panel.get_attribute("class")
            print(f"After Right Hover: Expanded={'lg:max-w-0' in cls_right}")
            
            # Move to left side
            print("Moving mouse to left side (x=400)...")
            page.mouse.move(400, 400)
            time.sleep(1.0)
            cls_left = left_panel.get_attribute("class")
            print(f"After Left Move: Expanded={'lg:max-w-0' in cls_left}")
            
            browser.close()
    finally:
        print("Stopping dev server...")
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)], shell=True)

if __name__ == "__main__":
    run()
