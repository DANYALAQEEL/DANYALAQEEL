from playwright.sync_api import sync_playwright
import urllib.request
import time

try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('https://danyalaqeelportfolio.vercel.app/')
        # wait for image
        time.sleep(3)
        images = page.locator('img').all()
        for i, img in enumerate(images):
            src = img.get_attribute('src')
            if src and ('profile' in src.lower() or 'danyal' in src.lower() or 'logo' not in src.lower()):
                print(f"Found image: {src}")
                if not src.startswith('http'):
                    src = 'https://danyalaqeelportfolio.vercel.app' + src
                urllib.request.urlretrieve(src, r'C:\Users\Administrator\.gemini\antigravity\scratch\resume-danyal\assets\profile.png')
                print("Downloaded successfully!")
                break
        browser.close()
except Exception as e:
    print(f"Error: {e}")
