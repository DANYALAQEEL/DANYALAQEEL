import os
import shutil
import re

scratch_output_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output"
brain_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001"

# 1. Create target directories in brain dir
brain_screenshots_dir = os.path.join(brain_dir, "screenshots")
os.makedirs(brain_screenshots_dir, exist_ok=True)

# 2. Copy screenshots
scratch_screenshots_dir = os.path.join(scratch_output_dir, "screenshots")
copied_count = 0
if os.path.exists(scratch_screenshots_dir):
    for f in os.listdir(scratch_screenshots_dir):
        if f.endswith(".png"):
            src = os.path.join(scratch_screenshots_dir, f)
            dst = os.path.join(brain_screenshots_dir, f)
            shutil.copy2(src, dst)
            copied_count += 1
print(f"Copied {copied_count} screenshots to brain dir.")

# 3. Read and modify FULL_AUDIT_REPORT.md
report_src_path = os.path.join(scratch_output_dir, "FULL_AUDIT_REPORT.md")
report_dst_path = os.path.join(brain_dir, "FULL_AUDIT_REPORT.md")

if os.path.exists(report_src_path):
    with open(report_src_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace the absolute scratch screenshot paths with absolute brain screenshot paths
    # Scratch path: C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output\screenshots\xxx.png
    # Target path: C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001\screenshots\xxx.png
    # Let's use file:// absolute paths or standard absolute paths.
    # Standard absolute paths work, but let's check what the artifacts guidance says:
    # "Embed images and videos with ![caption](/absolute/path/to/file.jpg). Always use absolute paths."
    # So we should use: /C:/Users/Administrator/.gemini/antigravity/brain/00b772ab-537b-4efd-87de-4fc47f24a001/screenshots/xxx.png
    # Wait, the forward slash is preferred on windows for URLs and markdown links. Let's make sure.
    
    def replace_path(match):
        filename = os.path.basename(match.group(1))
        # Use target format: C:/Users/Administrator/.gemini/antigravity/brain/00b772ab-537b-4efd-87de-4fc47f24a001/screenshots/filename
        new_path = f"C:/Users/Administrator/.gemini/antigravity/brain/00b772ab-537b-4efd-87de-4fc47f24a001/screenshots/{filename}"
        return f"**Screenshot:** ![Screenshot]({new_path})"
        
    # We find **Screenshot:** `path` and replace it with markdown image embed
    pattern = r"\*\*Screenshot:\*\* `([^`]+)`"
    new_content = re.sub(pattern, replace_path, content)
    
    with open(report_dst_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Report copied and paths updated to brain directory image embeds.")
else:
    print("Source report not found!")
