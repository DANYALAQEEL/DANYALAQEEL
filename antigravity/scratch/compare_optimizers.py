
import sys
import io

# Set stdout to utf-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def read_file(path):
    with open(path, 'r', encoding='utf-8-sig') as f:
        return f.readlines()

file1 = r'c:\Users\Administrator\.gemini\antigravity\scratch\optimizer_at_commit_utf8.tsx'
file2 = r'c:\Users\Administrator\.gemini\antigravity\scratch\Fixtures-and-Squad-Optimizer\frontend\src\screens\SquadOptimizerScreen.tsx'

lines1 = read_file(file1)
lines2 = read_file(file2)

if len(lines1) != len(lines2):
    print(f"Line count mismatch: {len(lines1)} vs {len(lines2)}")

diffs = []
max_len = min(len(lines1), len(lines2))
for i in range(max_len):
    l1 = lines1[i].strip()
    l2 = lines2[i].strip()
    if l1 != l2:
        # Ignore the component declaration line (line 69, which is index 68)
        if i == 68:
            continue
        diffs.append((i + 1, l1, l2))

if not diffs and len(lines1) == len(lines2):
    print("Files are identical (ignoring component declaration line and BOM).")
else:
    if diffs:
        print(f"Found {len(diffs)} differences:")
        for line_no, old, new in diffs:
            print(f"Line {line_no}:")
            print(f"  Old: {old}")
            print(f"  New: {new}")
    if len(lines1) != len(lines2):
        print(f"File lengths differ: {len(lines1)} vs {len(lines2)}")
