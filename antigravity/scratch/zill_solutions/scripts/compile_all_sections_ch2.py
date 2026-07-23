import os
import subprocess

def compile_all():
    script_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scripts\compile_section.py"
    
    sections = [
        ("section_2.1_solutions.md", "Section_2.1_Solutions.pdf", "Section 2.1: Complex Functions"),
        ("section_2.2_solutions.md", "Section_2.2_Solutions.pdf", "Section 2.2: Complex Functions as Mappings"),
        ("section_2.3_solutions.md", "Section_2.3_Solutions.pdf", "Section 2.3: Linear Mappings"),
        ("section_2.4_solutions.md", "Section_2.4_Solutions.pdf", "Section 2.4: Special Power Functions"),
        ("section_2.5_solutions.md", "Section_2.5_Solutions.pdf", "Section 2.5: Reciprocal Function and Inversion"),
        ("section_2.6_solutions.md", "Section_2.6_Solutions.pdf", "Section 2.6: Limits and Continuity"),
        ("section_2.7_solutions.md", "Section_2.7_Solutions.pdf", "Section 2.7: Derivatives"),
        ("chapter_2_review_quiz.md", "Chapter_2_Review_Quiz.pdf", "Chapter 2 Review Quiz")
    ]
    
    dest_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_2"
    pdf_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\pdf_solutions\chapter_2"
    
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
