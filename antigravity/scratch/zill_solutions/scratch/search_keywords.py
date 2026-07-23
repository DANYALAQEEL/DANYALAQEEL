import os

files = [
    'section_6.1_solutions.md',
    'section_6.2_solutions.md',
    'section_6.3_solutions.md',
    'section_6.4_solutions.md',
    'section_6.5_solutions.md',
    'section_6.6_solutions.md',
    'section_6.7_solutions.md',
    'chapter_6_review_quiz.md'
]

dir_path = 'solutions/chapter_6'

keywords = [
    'neighborhood', 'spiral', 'circle of convergence', 'radius of convergence',
    'annular', 'contour', 'indented', 'piecewise', 'exponential order', 'Fourier', 'Laplace',
    'Rouche', 'simple pole'
]

for filename in files:
    filepath = os.path.join(dir_path, filename)
    if not os.path.exists(filepath):
        continue
    print(f"=== File: {filename} ===")
    lines = open(filepath, 'r', encoding='utf-8').readlines()
    for i, line in enumerate(lines):
        for kw in keywords:
            if kw.lower() in line.lower():
                print(f"Line {i+1} ({kw}): {line.strip()[:100]}")
    print()
