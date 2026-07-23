import sys
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        logs = []
        page.on("console", lambda msg: logs.append(f"CONSOLE: {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: logs.append(f"PAGEERROR: {err.message}"))
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        
        print("Initial Title:", page.title())
        print("Initial URL:", page.url)
        
        initial_img = "C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\initial.png"
        page.screenshot(path=initial_img)
        print(f"Saved initial screenshot to {initial_img}")
        
        # Let's see what element classes exist before hover
        left_panel = page.locator("div.bg-surface-900").first
        if left_panel.count() > 0:
            print("Before Hover - Left panel classes:", left_panel.get_attribute("class"))
        
        # Hover at x=1000 (well inside the right panel)
        print("Hovering at x=1000, y=400 (right panel)...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        hover_img = "C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\hover.png"
        page.screenshot(path=hover_img)
        print(f"Saved hover screenshot to {hover_img}")
        
        if left_panel.count() > 0:
            print("After Hover - Left panel classes:", left_panel.get_attribute("class"))
            
        print("\n--- Console Logs ---")
        for log in logs:
            print(log)
            
        browser.close()

if __name__ == "__main__":
    run()
