import asyncio
import os
import json
from playwright.async_api import async_playwright

async def run():
    print("Starting Playwright script...")
    async with async_playwright() as p:
        # Launch Chromium headed
        browser = await p.chromium.launch(headless=False)
        # Setup context with viewport size matching standard screen
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        
        artifact_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d"
        os.makedirs(artifact_dir, exist_ok=True)
        
        print("Navigating to https://www.cfsmartems.com/Dashboard/Index...")
        try:
            await page.goto("https://www.cfsmartems.com/Dashboard/Index", wait_until="networkidle", timeout=30000)
        except Exception as e:
            print(f"Initial navigation warning: {e}. Trying to wait...")

        # Save screenshot of redirected login page
        login_screenshot_path = os.path.join(artifact_dir, "ems_login_page.png")
        await page.screenshot(path=login_screenshot_path, full_page=True)
        print(f"Login page screenshot saved to: {login_screenshot_path}")

        # Dump login page HTML to inspect inputs if login fails
        print("Page URL is:", page.url)
        
        # Try logging in
        # Common selectors: input[type="email"], input[type="text"], input[type="password"]
        try:
            # Let's inspect input fields
            inputs = await page.query_selector_all("input")
            print(f"Found {len(inputs)} inputs on the page.")
            for inp in inputs:
                name = await inp.get_attribute("name")
                type_ = await inp.get_attribute("type")
                id_ = await inp.get_attribute("id")
                placeholder = await inp.get_attribute("placeholder")
                print(f"  Input: name={name}, type={type_}, id={id_}, placeholder={placeholder}")

            # Fill username and password
            # Typically fields might have name="email", name="Email", name="password", etc.
            # We can select by selector
            username_field = await page.query_selector("input[type='email']") or \
                             await page.query_selector("input[type='text']") or \
                             await page.query_selector("input[name='Email']") or \
                             await page.query_selector("input[name='Username']")
            
            password_field = await page.query_selector("input[type='password']") or \
                             await page.query_selector("input[name='Password']")

            if username_field and password_field:
                await username_field.fill("appadmin@yopmail.com")
                await password_field.fill("Admin@123")
                print("Filled credentials.")
                
                # Look for submit button
                submit_btn = await page.query_selector("button[type='submit']") or \
                             await page.query_selector("input[type='submit']") or \
                             await page.query_selector("button") or \
                             await page.query_selector(".btn-primary")
                
                if submit_btn:
                    print("Found submit button. Clicking...")
                    await submit_btn.click()
                    await page.wait_for_load_state("networkidle")
                    print("Clicked submit and loaded state.")
                else:
                    print("No submit button found. Pressing Enter...")
                    await password_field.press("Enter")
                    await page.wait_for_load_state("networkidle")
            else:
                print("Username or password field not found!")
                
        except Exception as e:
            print(f"Login process error: {e}")

        # Let's see if we logged in
        print("Logged-in URL is:", page.url)
        dashboard_screenshot_path = os.path.join(artifact_dir, "ems_dashboard.png")
        await page.screenshot(path=dashboard_screenshot_path, full_page=True)
        print(f"Dashboard screenshot saved to: {dashboard_screenshot_path}")

        # Extract stylesheets & variables
        try:
            design_data = await page.evaluate("""() => {
                const styles = {};
                // Get all root style variables
                const root = document.querySelector(':root');
                if (root) {
                    const computed = getComputedStyle(root);
                    for (let i = 0; i < computed.length; i++) {
                        const name = computed[i];
                        if (name.startsWith('--')) {
                            styles[name] = computed.getPropertyValue(name).trim();
                        }
                    }
                }
                
                // Inspect body fonts, bg, etc.
                const body = document.body;
                if (body) {
                    const compBody = getComputedStyle(body);
                    styles['body-font-family'] = compBody.fontFamily;
                    styles['body-bg'] = compBody.backgroundColor;
                    styles['body-color'] = compBody.color;
                }
                
                // Get some key layouts
                const sidebar = document.querySelector('nav, .sidebar, [class*="sidebar"], [id*="sidebar"]');
                if (sidebar) {
                    const compSidebar = getComputedStyle(sidebar);
                    styles['sidebar-bg'] = compSidebar.backgroundColor;
                    styles['sidebar-width'] = compSidebar.width;
                }
                
                const topbar = document.querySelector('header, .topbar, [class*="topbar"], [id*="topbar"], [class*="header"]');
                if (topbar) {
                    const compTopbar = getComputedStyle(topbar);
                    styles['topbar-bg'] = compTopbar.backgroundColor;
                    styles['topbar-height'] = compTopbar.height;
                }

                // Gather navbar labels/links
                const navLinks = Array.from(document.querySelectorAll('a, .nav-link, nav [class*="item"]'))
                    .map(el => el.innerText.trim())
                    .filter(txt => txt.length > 0);

                return { variables: styles, navLinks: navLinks.slice(0, 30) };
            }""")
            
            with open(os.path.join(artifact_dir, "ems_design_extraction.json"), "w") as f:
                json.dump(design_data, f, indent=2)
            print("Extracted design data saved to ems_design_extraction.json")
        except Exception as e:
            print(f"Design extraction error: {e}")

        # Dumps page title and body text snippet
        title = await page.title()
        print("Page Title is:", title)
        
        # Let's close browser
        await browser.close()
        print("Browser closed.")

if __name__ == "__main__":
    asyncio.run(run())
