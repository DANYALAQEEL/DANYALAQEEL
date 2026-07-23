from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        
        # Get the outer HTML of the left panel
        left_panel = page.locator("div.bg-surface-900").first
        if left_panel.count() > 0:
            print("--- Left Panel HTML ---")
            print(left_panel.evaluate("el => el.outerHTML"))
        else:
            print("No left panel found.")
            
        browser.close()

if __name__ == "__main__":
    run()
