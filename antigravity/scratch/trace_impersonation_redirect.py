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
        
        # Find active Customer user
        # Danyal Aqeel at row 0 is Inactive, let's find the first Active Customer user
        # Hamza Sultan at row 2 is Deleted
        # Miss Maryam at row 3 is Active, Role=Customer, Org=Delicia Warehouse
        # CF Smart Technology Test User at row 8 is Active, Role=Customer, Org=CF Smart Technology
        # Delicia Warehouse Asad Bhatti at row 9 is Active, Role=Customer
        
        # Let's select All to find the first active Customer with a login button
        try:
            length_select = await page.query_selector("select[name*='length']")
            if length_select:
                await length_select.select_option("All")
                await page.wait_for_timeout(5000)
        except:
            pass
            
        rows = await page.query_selector_all("table tbody tr")
        print(f"Total rows: {len(rows)}")
        
        target_customer = None
        for idx, row in enumerate(rows):
            cells = await row.query_selector_all("td")
            if len(cells) >= 8:
                name = (await cells[1].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                btn = await cells[7].query_selector("a.btnLoginAsUser")
                if role.lower() == "customer" and status.lower() == "active" and btn:
                    target_customer = {"index": idx, "name": name}
                    break
                    
        if target_customer:
            print(f"Found active Customer user: {target_customer['name']} at row {target_customer['index']}")
            # Relocate row and click button
            row_el = (await page.query_selector_all("table tbody tr"))[target_customer["index"]]
            btn_el = await row_el.query_selector("a.btnLoginAsUser")
            
            # Hook the request flow to capture redirect headers or response content
            async def handle_response(response):
                if "/Device/Index" in response.url or "/Dashboard" in response.url:
                    print(f"Response URL: {response.url} | Status: {response.status} | Headers: {response.headers}")
                    
            page.on("response", handle_response)
            
            print("Clicking impersonate button for Customer...")
            await btn_el.click()
            await page.wait_for_timeout(10000) # Wait 10 seconds for transition/redirects
            
            print(f"Final Page URL: {page.url}")
            print(f"Final Page Title: {await page.title()}")
            body_text = await page.locator("body").inner_text()
            print(f"Final page body snippet:\n{body_text[:1000]}")
            
            # Check for sidebar items on the landed dashboard page
            sb_links = await page.query_selector_all(".sidebar a, aside a, .kt-menu__link, .menu-item a")
            print(f"Landed Page Sidebar has {len(sb_links)} links:")
            printed = set()
            for lnk in sb_links:
                txt = (await lnk.inner_text()).strip().replace("\n", " ")
                href = await lnk.get_attribute("href") or ""
                if txt and href and href != "#" and not href.startswith("javascript:") and txt not in printed:
                    print(f"  - {txt} -> {href}")
                    printed.add(txt)
        else:
            print("No active Customer user found!")
            
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
