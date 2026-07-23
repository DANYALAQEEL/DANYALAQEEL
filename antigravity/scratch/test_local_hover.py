import time
import subprocess
from playwright.sync_api import sync_playwright

def run():
    # Start the local development server in the background
    print("Starting local dev server...")
    proc = subprocess.Popen(["npm", "run", "dev"], shell=True)
    time.sleep(3) # Wait for server to start
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()
            
            print("Navigating to http://localhost:5173...")
            page.goto("http://localhost:5173")
            page.wait_for_load_state("networkidle")
            
            inner_content = page.locator("div.bg-surface-900 > div.z-10").first
            
            if inner_content.count() > 0:
                print("Local - Before Hover - Inner content classes:", inner_content.get_attribute("class"))
                print("Local - Before Hover - Inner content is_visible:", inner_content.is_visible())
            else:
                print("Local - No inner content matching locator.")
                
            print("Local - Hovering at x=1000...")
            page.mouse.move(1000, 400)
            time.sleep(1.0)
            
            local_hover_img = "C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\local_hover.png"
            page.screenshot(path=local_hover_img)
            print(f"Saved local hover screenshot to {local_hover_img}")
            
            if inner_content.count() > 0:
                print("Local - After Hover - Inner content classes:", inner_content.get_attribute("class"))
                print("Local - After Hover - Inner content is_visible:", inner_content.is_visible())
                
            browser.close()
    finally:
        # Terminate dev server
        print("Stopping dev server...")
        proc.terminate()
        proc.wait()

if __name__ == "__main__":
    run()
