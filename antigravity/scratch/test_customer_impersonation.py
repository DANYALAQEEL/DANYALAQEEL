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
        
        # Select "All" from length select to list everyone
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
        
        # Store users in a list of dicts first to avoid ElementHandle lifecycle issues
        user_list = []
        for idx, row in enumerate(rows):
            cells = await row.query_selector_all("td")
            if len(cells) >= 8:
                org = (await cells[0].inner_text()).strip()
                name = (await cells[1].inner_text()).strip()
                email = (await cells[2].inner_text()).strip()
                role = (await cells[4].inner_text()).strip()
                status = (await cells[5].inner_text()).strip()
                
                # Check if there is a green login button in cell 7
                login_btn = await cells[7].query_selector("a.btnLoginAsUser, a[title*='Login As User']")
                has_btn = login_btn is not None
                
                user_list.append({
                    "index": idx,
                    "name": name,
                    "org": org,
                    "email": email,
                    "role": role,
                    "status": status,
                    "has_btn": has_btn
                })
                
        # 2. Impersonate Customer (Role = Customer)
        print("\n--- TESTING CUSTOMER USER IMPERSONATION ---")
        target_customer = None
        for u in user_list:
            if u["role"].lower() == "customer" and u["status"].lower() == "active" and u["has_btn"]:
                target_customer = u
                break
                
        if target_customer:
            print(f"Found active Customer: Name='{target_customer['name']}', Org='{target_customer['org']}', Email='{target_customer['email']}'")
            # Relocate row and click button
            row_el = (await page.query_selector_all("table tbody tr"))[target_customer["index"]]
            btn_el = await row_el.query_selector("a.btnLoginAsUser, a[title*='Login As User']")
            if btn_el:
                print("Clicking impersonate button for Customer (same tab)...")
                await btn_el.click()
                await page.wait_for_timeout(8000) # Wait generous 8 seconds for dashboard load
                
                print(f"Current Page URL: {page.url}")
                print(f"Current Page Title: {await page.title()}")
                body_text = await page.locator("body").inner_text()
                print(f"Body snippet:\n{body_text[:1000]}")
                
                # Extract sidebar items
                sb_links = await page.query_selector_all(".sidebar a, aside a, .kt-menu__link, .menu-item a")
                print(f"Dashboard Sidebar has {len(sb_links)} links:")
                printed = set()
                for lnk in sb_links:
                    txt = (await lnk.inner_text()).strip().replace("\n", " ")
                    href = await lnk.get_attribute("href") or ""
                    if txt and href and href != "#" and not href.startswith("javascript:") and txt not in printed:
                        print(f"  - {txt} -> {href}")
                        printed.add(txt)
            else:
                print("Relocated button was null!")
        else:
            print("No active Customer user with a login button was found!")
            
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
