import asyncio
from playwright.async_api import async_playwright
from pathlib import Path
import sys

BASE_URL = "https://www.cfsmartems.com"
USERNAME = "appadmin@yopmail.com"
PASSWORD = "Admin@123"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1400, "height": 900}
        )
        page = await context.new_page()
        
        # Route to block fonts
        async def handle_route(route):
            url = route.request.url
            if "plugins.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\plugins.bundle.js")
                if local_path.exists():
                    await route.fulfill(status=200, content_type="application/javascript", body=local_path.read_bytes())
                    return
            elif "scripts.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\scripts.bundle.js")
                if local_path.exists():
                    await route.fulfill(status=200, content_type="application/javascript", body=local_path.read_bytes())
                    return
            if any(x in url.lower() for x in [".woff", ".woff2", ".ttf"]):
                await route.abort()
                return
            await route.continue_()

        await context.route("**/*", handle_route)
        
        print("Logging in...")
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
        await page.fill("input[id='Email']", USERNAME)
        await page.fill("input[id='Password']", PASSWORD)
        await page.click(".btn-primary")
        await page.wait_for_load_state("domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)
        
        print("Navigating to User/Index...")
        await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(8000)
        
        # Select All
        try:
            length_select = await page.query_selector("select[name*='length']")
            if length_select:
                await length_select.select_option("All")
                await page.wait_for_timeout(5000)
        except:
            pass
            
        rows = await page.query_selector_all("table tbody tr")
        
        target = None
        for idx, row in enumerate(rows):
            cells = await row.query_selector_all("td")
            if len(cells) >= 8:
                name = (await cells[1].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                btn = await cells[7].query_selector("a.btnLoginAsUser")
                if "rimsha" in name.lower() and status.lower() == "active" and btn:
                    target = {"index": idx, "name": name}
                    break
                    
        if target:
            print(f"Found active Org Admin: {target['name']} at row {target['index']}")
            row_el = (await page.query_selector_all("table tbody tr"))[target["index"]]
            btn_el = await row_el.query_selector("a.btnLoginAsUser")
            
            # Hook the request/response flows to inspect what happens
            async def handle_request(request):
                # Print any post requests or loginas requests
                if "login" in request.url.lower() or "backto" in request.url.lower():
                    print(f"Request: {request.method} {request.url} | Headers: {request.headers}")
                    
            async def handle_response(response):
                if response.status >= 300 or "login" in response.url.lower():
                    print(f"Response: {response.url} | Status: {response.status} | Headers: {response.headers}")
                    try:
                        text = await response.text()
                        print(f"Response Body (first 300 chars): {text[:300]}")
                    except:
                        pass
                        
            page.on("request", handle_request)
            page.on("response", handle_response)
            
            print("Clicking impersonate button for Org Admin...")
            await btn_el.click()
            await page.wait_for_timeout(10000)
            
            print(f"Final Page URL: {page.url}")
        else:
            print("No active Org Admin user found!")
            
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
