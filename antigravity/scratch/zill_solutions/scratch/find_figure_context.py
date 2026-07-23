import sys
sys.stdout.reconfigure(encoding='utf-8')

import re

def print_fig_context(filepath):
    print("=" * 60)
    print(filepath)
    print("=" * 60)
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    for idx, line in enumerate(lines):
        clean = re.sub(r'^\d+:\s*', '', line).strip()
        if "Figure" in clean or "figure" in clean.lower():
            # print surrounding lines
            start = max(0, idx - 2)
            end = min(len(lines), idx + 3)
            for j in range(start, end):
                print(f"{j+1}: {lines[j].strip()}")
            print("-" * 40)

print_fig_context(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_1.txt")
print_fig_context(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_2.txt")
print_fig_context(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_3.txt")
print_fig_context(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt")
print_fig_context(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_5.txt")
