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
        
        # Test 1: Impersonate Org Admin (Role = Admin)
        print("\n--- TESTING ORG ADMIN IMPERSONATION ---")
        await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(8000)
        
        rows = await page.query_selector_all("table tbody tr")
        print(f"Found {len(rows)} user rows")
        
        org_admin_btn = None
        for idx, row in enumerate(rows):
            cells = await row.query_selector_all("td")
            if len(cells) >= 7:
                name = (await cells[1].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                if role.lower() == "admin" and status.lower() == "active":
                    print(f"Row {idx}: Found active Org Admin user: {name}")
                    org_admin_btn = await cells[7].query_selector("a.btnLoginAsUser, a[title*='Login As User']")
                    if org_admin_btn:
                        break
                        
        if org_admin_btn:
            print("Clicking impersonate button for Org Admin...")
            async with page.context.expect_page() as new_page_info:
                await org_admin_btn.click()
                await page.wait_for_timeout(2000)
            try:
                new_page = await new_page_info.value
                await new_page.wait_for_load_state("domcontentloaded", timeout=30000)
                print(f"Org Dashboard URL: {new_page.url}")
                print(f"Org Dashboard Title: {await new_page.title()}")
                # Dump some sidebar links
                links = await new_page.query_selector_all(".sidebar a, aside a, .kt-menu__link")
                print(f"Org Dashboard Sidebar has {len(links)} links")
                await new_page.close()
            except Exception as e:
                print(f"Failed to load new tab for Org Admin: {e}")
        else:
            print("No active Org Admin user or button found!")

        # Test 2: Impersonate Customer (Role = Customer)
        print("\n--- TESTING USER IMPERSONATION ---")
        await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(8000)
        
        customer_btn = None
        for idx, row in enumerate(rows):
            cells = await row.query_selector_all("td")
            if len(cells) >= 7:
                name = (await cells[1].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                if role.lower() == "customer" and status.lower() == "active":
                    print(f"Row {idx}: Found active Customer user: {name}")
                    customer_btn = await cells[7].query_selector("a.btnLoginAsUser, a[title*='Login As User']")
                    if customer_btn:
                        break
                        
        if customer_btn:
            print("Clicking impersonate button for Customer...")
            async with page.context.expect_page() as new_page_info:
                await customer_btn.click()
                await page.wait_for_timeout(2000)
            try:
                new_page = await new_page_info.value
                await new_page.wait_for_load_state("domcontentloaded", timeout=30000)
                print(f"User Dashboard URL: {new_page.url}")
                print(f"User Dashboard Title: {await new_page.title()}")
                # Dump some sidebar links
                links = await new_page.query_selector_all(".sidebar a, aside a, .kt-menu__link")
                print(f"User Dashboard Sidebar has {len(links)} links")
                await new_page.close()
            except Exception as e:
                print(f"Failed to load new tab for Customer: {e}")
        else:
            print("No active Customer user or button found!")
            
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
