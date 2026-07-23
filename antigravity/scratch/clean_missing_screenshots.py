import os
import re

report_path = r"C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001\FULL_AUDIT_REPORT.md"
screenshots_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001\screenshots"

if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all screenshot markdown image lines
    # Format: **Screenshot:** ![Screenshot](C:/Users/Administrator/.gemini/antigravity/brain/00b772ab-537b-4efd-87de-4fc47f24a001/screenshots/xxx.png)
    pattern = r"\*\*Screenshot:\*\* !\[Screenshot\]\(([^)]+)\)"
    
    matches = re.findall(pattern, content)
    print(f"Found {len(matches)} screenshot links in report.")
    
    missing_count = 0
    def replace_missing(match):
        global missing_count
        path = match.group(1)
        filename = os.path.basename(path)
        actual_file_path = os.path.join(screenshots_dir, filename)
        if not os.path.exists(actual_file_path):
            missing_count += 1
            return f"**Screenshot:** *[Screenshot capture failed or timed out]*"
        return match.group(0)

    cleaned_content = re.sub(r"\*\*Screenshot:\*\* !\[Screenshot\]\(([^)]+)\)", replace_missing, content)
    
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(cleaned_content)
        
    print(f"Cleaned up {missing_count} missing screenshot links in the report.")
else:
    print("Report file not found!")
