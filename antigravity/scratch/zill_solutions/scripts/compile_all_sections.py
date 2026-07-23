import os
import subprocess

def compile_all():
    script_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scripts\compile_section.py"
    
    sections = [
        ("section_1.1_solutions.md", "Section_1.1_Solutions.pdf", "Section 1.1: Complex Numbers and Their Properties"),
        ("section_1.2_solutions.md", "Section_1.2_Solutions.pdf", "Section 1.2: Complex Plane"),
        ("section_1.3_solutions.md", "Section_1.3_Solutions.pdf", "Section 1.3: Polar Form of Complex Numbers"),
        ("section_1.4_solutions.md", "Section_1.4_Solutions.pdf", "Section 1.4: Powers and Roots"),
        ("section_1.5_solutions.md", "Section_1.5_Solutions.pdf", "Section 1.5: Sets of Points in the Complex Plane"),
        ("section_1.6_solutions.md", "Section_1.6_Solutions.pdf", "Section 1.6: Applications"),
        ("chapter_1_review_solutions.md", "Chapter_1_Review_Quiz.pdf", "Chapter 1 Review Quiz")
    ]
    
    dest_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_1"
    pdf_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\pdf_solutions\chapter_1"
    
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
