import sys
sys.stdout.reconfigure(encoding='utf-8')
import re

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    clean = re.sub(r'^\d+:\s*', '', line).strip()
    if any(clean.startswith(f"{num}.") for num in range(1, 40)):
        print(f"Line {idx+1}: {clean[:100]}")
