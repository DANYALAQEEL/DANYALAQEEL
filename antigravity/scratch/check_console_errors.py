import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        errors = []
        page.on("pageerror", lambda err: errors.append(err))
        
        print("Navigating to http://127.0.0.1:8000...")
        try:
            page.goto("http://127.0.0.1:8000", timeout=10000)
            page.wait_for_load_state("networkidle")
            time.sleep(2.0)
            
            print("\n--- JavaScript Page Errors with Stack Traces ---")
            if errors:
                for err in errors:
                    print(f"Error Message: {err.message}")
                    print(f"Stack Trace:\n{err.stack}\n")
            else:
                print("No page errors found.")
                
        except Exception as e:
            print(f"Error: {e}")
            
        browser.close()

if __name__ == "__main__":
    run()
