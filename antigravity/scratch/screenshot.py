from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\screenshot.png', full_page=True)
    browser.close()
