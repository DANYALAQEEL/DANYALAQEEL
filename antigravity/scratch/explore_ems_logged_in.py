import asyncio
import os
import json
from playwright.async_api import async_playwright

async def run():
    print("Starting Playwright script...")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        
        artifact_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d"
        os.makedirs(artifact_dir, exist_ok=True)
        
        print("Navigating to https://www.cfsmartems.com/...")
        await page.goto("https://www.cfsmartems.com/", wait_until="networkidle", timeout=30000)

        # Take screenshot of login page
        await page.screenshot(path=os.path.join(artifact_dir, "real_login_page.png"), full_page=True)
        print("Login page screenshot saved.")

        # Fill credentials
        print("Filling credentials...")
        await page.fill("input[id='Email']", "appadmin@yopmail.com")
        await page.fill("input[id='Password']", "Admin@123")
        
        # Click Sign In button. We saw 'Sign In' text twice.
        # Let's find button or element to click
        # Common selectors: button, input[type='submit'], .btn
        submit_btn = await page.query_selector("button:has-text('Sign In')") or \
                     await page.query_selector("button[type='submit']") or \
                     await page.query_selector(".btn-primary") or \
                     await page.query_selector("button")
        
        if submit_btn:
            print("Clicking submit button...")
            await submit_btn.click()
        else:
            print("Submit button not found. Pressing Enter...")
            await page.keyboard.press("Enter")

        # Wait for navigation / redirect
        print("Waiting for page load after sign in...")
        await page.wait_for_timeout(5000) # Wait 5 seconds
        print("Current URL:", page.url)

        # Check if we logged in successfully
        text = await page.evaluate("() => document.body.innerText")
        print("Page text snippet:", text[:1000])

        # Take screenshot of dashboard
        dashboard_screenshot_path = os.path.join(artifact_dir, "real_ems_dashboard.png")
        await page.screenshot(path=dashboard_screenshot_path, full_page=True)
        print(f"Dashboard screenshot saved to: {dashboard_screenshot_path}")

        # Extract list of nav items, cards, charts
        try:
            design_data = await page.evaluate("""() => {
                const navLinks = Array.from(document.querySelectorAll('a, .menu-link, nav [class*="item"], [class*="menu-title"]'))
                    .map(el => el.innerText.trim())
                    .filter(txt => txt.length > 0);
                
                const cardTitles = Array.from(document.querySelectorAll('.card-title, h1, h2, h3, h4, h5, h6, [class*="title"]'))
                    .map(el => el.innerText.trim())
                    .filter(txt => txt.length > 0);

                return { navLinks: navLinks, cardTitles: cardTitles };
            }""")
            
            with open(os.path.join(artifact_dir, "ems_dashboard_data.json"), "w") as f:
                json.dump(design_data, f, indent=2)
            print("Extracted dashboard data saved.")
        except Exception as e:
            print(f"Extraction error: {e}")

        await browser.close()
        print("Browser closed.")

if __name__ == "__main__":
    asyncio.run(run())
