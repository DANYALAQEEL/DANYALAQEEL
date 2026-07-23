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
        
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
        await page.fill("input[id='Email']", USERNAME)
        await page.fill("input[id='Password']", PASSWORD)
        await page.click(".btn-primary")
        await page.wait_for_load_state("domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)
        
        print("Navigating to User/Index...")
        await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(8000)
        
        # We want to check page after page or query all roles
        # Let's inspect the first 30 users (by clicking Next or changing length to All)
        # Select "All" from length select if possible
        try:
            length_select = await page.query_selector("select[name*='length']")
            if length_select:
                await length_select.select_option("All")
                await page.wait_for_timeout(5000)
                print("Selected 'All' records length")
        except Exception as e:
            print(f"Error selecting All: {e}")
            
        rows = await page.query_selector_all("table tbody tr")
        print(f"Total rows found: {len(rows)}")
        
        roles_count = {}
        org_roles = []
        for idx, r in enumerate(rows):
            cells = await r.query_selector_all("td")
            if len(cells) >= 7:
                org = (await cells[0].inner_text()).strip()
                name = (await cells[1].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                
                roles_count[role] = roles_count.get(role, 0) + 1
                if role.lower() != "customer":
                    org_roles.append((idx, name, org, role, status))
                    
        print(f"Roles breakdown: {roles_count}")
        print(f"Non-Customer users:")
        for u in org_roles:
            print(f"  Row {u[0]}: Name='{u[1]}', Org='{u[2]}', Role='{u[3]}', Status='{u[4]}'")
            
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
