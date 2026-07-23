import sys
sys.stdout.reconfigure(encoding='utf-8')
import re

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    clean = re.sub(r'^\d+:\s*', '', line).strip()
    if any(clean.startswith(f"{num}.") for num in range(9, 17)):
        print(f"--- Problem starting at line {idx+1} ---")
        for j in range(idx, min(len(lines), idx + 8)):
            print(re.sub(r'^\d+:\s*', '', lines[j]).strip())
        print()
