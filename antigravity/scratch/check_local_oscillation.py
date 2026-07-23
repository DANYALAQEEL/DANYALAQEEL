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
            
            print("Hovering at x=1000...")
            page.mouse.move(1000, 400)
            
            print("Monitoring Left Panel classes locally for 2 seconds:")
            for idx in range(20):
                time.sleep(0.1)
                cls = left_panel.get_attribute("class")
                is_expanded = "lg:max-w-0" in cls
                print(f"Time {idx*100}ms: Expanded={is_expanded} | {cls[-50:]}")
                
            browser.close()
    finally:
        print("Stopping dev server...")
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)], shell=True)

if __name__ == "__main__":
    run()
