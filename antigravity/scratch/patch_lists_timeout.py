from pathlib import Path

file_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit.py")
content = file_path.read_text(encoding="utf-8")

# 1. Update Organization list goto timeout (line 554)
content = content.replace(
    'await page.goto(url, wait_until="domcontentloaded", timeout=10000)',
    'await page.goto(url, wait_until="domcontentloaded", timeout=60000)'
)

# 2. Update User list goto timeout (line 719)
# Wait, let's make sure it replaces it. Since there might be multiple 'timeout=10000', content.replace will replace both if they exist. Let's do it.
content = content.replace(
    'await page.goto(url, wait_until="domcontentloaded", timeout=10000)',
    'await page.goto(url, wait_until="domcontentloaded", timeout=60000)'
)

# 3. Let's also check for other 'timeout=15000' and change them to 'timeout=30000'
content = content.replace(
    'timeout=15000',
    'timeout=30000'
)

# Save changes
file_path.write_text(content, encoding="utf-8")
print("List navigation timeouts optimized successfully!")
