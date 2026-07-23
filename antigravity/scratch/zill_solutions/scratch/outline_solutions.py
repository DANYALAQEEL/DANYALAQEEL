import os
import re

dir_path = 'solutions/chapter_6'
files = sorted(os.listdir(dir_path))

for filename in files:
    if not filename.endswith('.md'):
        continue
    filepath = os.path.join(dir_path, filename)
    print(f"=== File: {filename} ===")
    
    problems = []
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            if line.startswith('## Problem'):
                problems.append(line.strip())
            elif line.startswith('#### Problem'):
                problems.append(line.strip())
                
    print(f"Total problems found: {len(problems)}")
    print(problems[:10])
    if len(problems) > 10:
        print(f"... and {len(problems)-10} more")
    print()
