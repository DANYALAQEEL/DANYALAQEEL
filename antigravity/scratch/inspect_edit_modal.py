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
            viewport={"width": 1600, "height": 900}
        )
        page = await context.new_page()
        
        # Route to block fonts properly via aborting to prevent Chromium hangs
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
            if any(x in url.lower() for x in [".woff", ".woff2", ".ttf", "fonts.googleapis"]):
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
        
        # 1. Organization Edit modal check
        print("\n--- CHECKING ORGANIZATION EDIT MODAL ---")
        try:
            await page.goto(f"{BASE_URL}/Organization/Index", wait_until="domcontentloaded", timeout=120000)
            await page.wait_for_timeout(8000)
            
            edit_btn = await page.query_selector(".btnAddEditOrg")
            if edit_btn:
                print("Found btnAddEditOrg. Clicking...")
                await edit_btn.click()
                await page.wait_for_timeout(4000)
                
                # Check for buttons inside any open modal
                print("Searching for buttons in modal...")
                modal_btns = await page.query_selector_all(".modal a, .modal button, form a, form button")
                print(f"Found {len(modal_btns)} elements inside modal/form:")
                for idx, btn in enumerate(modal_btns):
                    txt = (await btn.inner_text()).strip().replace("\n", " ")
                    href = await btn.get_attribute("href") or ""
                    cls = await btn.get_attribute("class") or ""
                    title = await btn.get_attribute("title") or ""
                    onclick = await btn.get_attribute("onclick") or ""
                    print(f"  [{idx}] text='{txt}', href='{href}', class='{cls[:60]}', title='{title}', onclick='{onclick[:60]}'")
            else:
                print("No btnAddEditOrg found!")
        except Exception as e:
            print(f"Error checking organization modal: {e}")
            
        # 2. User Edit modal check
        print("\n--- CHECKING USER EDIT MODAL ---")
        try:
            await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
            await page.wait_for_timeout(8000)
            
            edit_btn = await page.query_selector(".btnAddEditUser")
            if edit_btn:
                print("Found btnAddEditUser. Clicking...")
                await edit_btn.click()
                await page.wait_for_timeout(4000)
                
                # Check for buttons inside any open modal
                print("Searching for buttons in modal...")
                modal_btns = await page.query_selector_all(".modal a, .modal button, form a, form button")
                print(f"Found {len(modal_btns)} elements inside modal/form:")
                for idx, btn in enumerate(modal_btns):
                    txt = (await btn.inner_text()).strip().replace("\n", " ")
                    href = await btn.get_attribute("href") or ""
                    cls = await btn.get_attribute("class") or ""
                    title = await btn.get_attribute("title") or ""
                    onclick = await btn.get_attribute("onclick") or ""
                    print(f"  [{idx}] text='{txt}', href='{href}', class='{cls[:60]}', title='{title}', onclick='{onclick[:60]}'")
            else:
                print("No btnAddEditUser found!")
        except Exception as e:
            print(f"Error checking user modal: {e}")

        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
