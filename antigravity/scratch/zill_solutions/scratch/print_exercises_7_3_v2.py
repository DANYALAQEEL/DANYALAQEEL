import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx in range(1828 - 1, 2416 - 1):
    print(f"{idx+1}: {lines[idx]}", end="")
