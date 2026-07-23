import os
import subprocess

def compile_all():
    script_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scripts\compile_section.py"
    
    sections = [
        ("section_5.1_solutions.md", "Section_5.1_Solutions.pdf", "Section 5.1: Real Integrals"),
        ("section_5.2_solutions.md", "Section_5.2_Solutions.pdf", "Section 5.2: Complex Integrals"),
        ("section_5.3_solutions.md", "Section_5.3_Solutions.pdf", "Section 5.3: Cauchy-Goursat Theorem"),
        ("section_5.4_solutions.md", "Section_5.4_Solutions.pdf", "Section 5.4: Independence of Path"),
        ("section_5.5_solutions.md", "Section_5.5_Solutions.pdf", "Section 5.5: Cauchy's Integral Formulas and Consequences"),
        ("section_5.6_solutions.md", "Section_5.6_Solutions.pdf", "Section 5.6: Applications"),
        ("chapter_5_review_quiz_solutions.md", "Chapter_5_Review_Quiz.pdf", "Chapter 5 Review Quiz")
    ]
    
    dest_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_5"
    pdf_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\pdf_solutions\chapter_5"
    
    os.makedirs(pdf_dir, exist_ok=True)
    
    for md_name, pdf_name, title in sections:
        md_path = os.path.join(dest_dir, md_name)
        pdf_path = os.path.join(pdf_dir, pdf_name)
        
        print(f"\n==========================================")
        print(f"Compiling: {md_name} -> {pdf_name} ({title})")
        print(f"==========================================")
        
        cmd = ["python", script_path, md_path, pdf_path, title]
        try:
            res = subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            print(res.stdout)
            if res.stderr:
                print("Warnings/Errors in stderr:")
                print(res.stderr)
        except subprocess.CalledProcessError as e:
            print(f"Compilation failed for {md_name}!")
            print("Exit code:", e.returncode)
            print("Stdout:\n", e.stdout)
            print("Stderr:\n", e.stderr)
            raise e

if __name__ == "__main__":
    compile_all()
