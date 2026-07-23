import sys
sys.stdout.reconfigure(encoding='utf-8')
import re

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_3.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    clean = re.sub(r'^\d+:\s*', '', line).strip()
    # If the clean line starts with 13., 14., 15., 16., 17., 18.
    if any(clean.startswith(prefix) for prefix in ["13.", "14.", "15.", "16.", "17.", "18."]):
        # Print next 5 lines
        print(f"--- Problem starting at line {idx+1} ---")
        for j in range(idx, min(len(lines), idx + 8)):
            print(re.sub(r'^\d+:\s*', '', lines[j]).strip())
        print()
