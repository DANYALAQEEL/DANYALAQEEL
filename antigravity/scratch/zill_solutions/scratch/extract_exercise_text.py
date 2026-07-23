import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

def print_range(start, end, title):
    print("=" * 60)
    print(title)
    print("=" * 60)
    for idx in range(start-1, min(end, len(lines))):
        print(f"{idx+1}: {lines[idx]}", end="")
    print("\n")

# Let's print some lines for Exercises 7.1
print_range(560, 640, "Exercises 7.1")
# Let's print some lines for Exercises 7.2
print_range(1257, 1340, "Exercises 7.2")
