import os
import subprocess
import sys

base_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions"
md_dir = os.path.join(base_dir, "solutions_perfected", "chapter_6")
pdf_dir = os.path.join(base_dir, "pdf_solutions", "chapter_6")
compile_script = os.path.join(base_dir, "scripts", "compile_section.py")

sections = [
    ("section_6.1_solutions.md", "Section_6.1_Solutions.pdf", "Section 6.1: Sequences and Series"),
    ("section_6.2_solutions.md", "Section_6.2_Solutions.pdf", "Section 6.2: Taylor Series"),
    ("section_6.3_solutions.md", "Section_6.3_Solutions.pdf", "Section 6.3: Laurent Series"),
    ("section_6.4_solutions.md", "Section_6.4_Solutions.pdf", "Section 6.4: Zeros and Poles"),
    ("section_6.5_solutions.md", "Section_6.5_Solutions.pdf", "Section 6.5: Residues and Residue Theorem"),
    ("section_6.6_solutions.md", "Section_6.6_Solutions.pdf", "Section 6.6: Some Consequences of the Residue Theorem"),
    ("section_6.7_solutions.md", "Section_6.7_Solutions.pdf", "Section 6.7: Applications"),
    ("chapter_6_review_quiz.md", "Chapter_6_Review_Quiz.pdf", "Chapter 6 Review Quiz"),
]

print("Starting compilation of Chapter 6 PDF solutions...")
for md_file, pdf_file, title in sections:
    md_path = os.path.join(md_dir, md_file)
    pdf_path = os.path.join(pdf_dir, pdf_file)
    print(f"\nCompiling {md_file} to {pdf_file} with title '{title}'...")
    
    cmd = [sys.executable, compile_script, md_path, pdf_path, title]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"Successfully compiled: {pdf_file}")
    else:
        print(f"FAILED to compile: {pdf_file}")
        print("STDOUT:", res.stdout)
        print("STDERR:", res.stderr)

print("\nDone compilation!")
