import asyncio
from playwright.async_api import async_playwright

async def main():
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()
            print('Navigating...')
            await page.goto('https://www.cfsmartems.com/Account/Login')
            
            print('Filling...')
            await page.fill('input[type="email"]', 'appadmin@yopmail.com')
            await page.fill('input[type="password"]', 'Admin@123')
            
            print('Clicking...')
            await page.click('button[type="submit"]')
            await page.wait_for_load_state('networkidle')
            
            print('Getting DOM...')
            html = await page.evaluate('document.getElementById("kt_app_sidebar") ? document.getElementById("kt_app_sidebar").outerHTML : "No sidebar"')
            
            with open("sidebar.html", "w", encoding="utf-8") as out:
                out.write(html)
            
            main_html = await page.evaluate('document.getElementById("kt_app_content") ? document.getElementById("kt_app_content").outerHTML : "No content"')
            
            with open("content.html", "w", encoding="utf-8") as out:
                out.write(main_html)
                
            header_html = await page.evaluate('document.getElementById("kt_app_header") ? document.getElementById("kt_app_header").outerHTML : "No header"')
            with open("header.html", "w", encoding="utf-8") as out:
                out.write(header_html)
                
            print('Done!')
            await browser.close()
    except Exception as e:
        print(f'Error: {e}')

asyncio.run(main())
