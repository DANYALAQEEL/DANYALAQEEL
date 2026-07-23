from playwright.sync_api import sync_playwright
import time, os

OUT = r"C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d"

def snap(page, name):
    path = os.path.join(OUT, name)
    page.screenshot(path=path, full_page=False)
    print(f"Saved: {name}")

with sync_playwright() as p:
    br = p.chromium.launch(headless=True)
    ctx = br.new_context(viewport={"width": 1400, "height": 900})
    pg = ctx.new_page()
    pg.goto("http://localhost:5173", wait_until="networkidle")
    time.sleep(1)

    # Open Energy Management sidebar submenu
    pg.click(".energy-management-menu-link")
    time.sleep(0.5)
    
    # 1. EMS Control System Tab
    # The first "Control System" link in Energy Management is for EMS. Let's find it.
    ems_control_link = pg.locator("a:has-text('Control System')").nth(0)
    ems_control_link.click()
    time.sleep(1)
    
    # Take screenshot of EMS Control in default mode (should be Manual or default)
    snap(pg, "ems_control_default.png")
    
    # Click Full AI mode button
    # Mode buttons have text or emojis like Manual, Full AI, Hybrid
    try:
        pg.locator("button:has-text('Full AI')").click()
        time.sleep(0.5)
        snap(pg, "ems_control_full_ai.png")
    except Exception as e:
        print("Error clicking Full AI in EMS Control:", e)
        
    # Click Hybrid mode button
    try:
        pg.locator("button:has-text('Hybrid')").click()
        time.sleep(0.5)
        snap(pg, "ems_control_hybrid.png")
    except Exception as e:
        print("Error clicking Hybrid in EMS Control:", e)

    # Click Manual mode button
    try:
        pg.locator("button:has-text('Manual')").click()
        time.sleep(0.5)
        snap(pg, "ems_control_manual.png")
    except Exception as e:
        print("Error clicking Manual in EMS Control:", e)

    # 2. BEMS Control System Tab
    # The second "Control System" link is for BEMS
    bems_control_link = pg.locator("a:has-text('Control System')").nth(1)
    bems_control_link.click()
    time.sleep(1)
    
    snap(pg, "bems_control_default.png")
    
    # Click Full AI mode button
    try:
        pg.locator("button:has-text('Full AI')").click()
        time.sleep(0.5)
        snap(pg, "bems_control_full_ai.png")
    except Exception as e:
        print("Error clicking Full AI in BEMS Control:", e)
        
    # Click Hybrid mode button
    try:
        pg.locator("button:has-text('Hybrid')").click()
        time.sleep(0.5)
        snap(pg, "bems_control_hybrid.png")
    except Exception as e:
        print("Error clicking Hybrid in BEMS Control:", e)

    # Click Manual mode button
    try:
        pg.locator("button:has-text('Manual')").click()
        time.sleep(0.5)
        snap(pg, "bems_control_manual.png")
    except Exception as e:
        print("Error clicking Manual in BEMS Control:", e)

    br.close()

print("All screenshots of control systems done!")
