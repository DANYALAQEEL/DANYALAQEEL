import sys
import os
import subprocess

# Add current path to sys.path to import generate_html and compile_pdf
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.generate_html import convert_md_to_html
from scripts.compile_pdf import compile_html_to_pdf

def compile_section(md_path, pdf_path, title):
    # Determine temporary HTML path
    html_path = md_path.replace('.md', '.html')
    
    # Step 1: Convert Markdown to HTML
    print(f"Converting MD to HTML: {md_path} -> {html_path}")
    convert_md_to_html(md_path, html_path, title)
    
    # Step 2: Compile HTML to PDF
    print(f"Compiling HTML to PDF: {html_path} -> {pdf_path}")
    compile_html_to_pdf(html_path, pdf_path)
    
    # Step 3: Clean up temporary HTML
    if os.path.exists(html_path):
        os.remove(html_path)
        print(f"Cleaned up temporary HTML file: {html_path}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python compile_section.py <md_path> <pdf_path> <title>")
        sys.exit(1)
    
    md_path = sys.argv[1]
    pdf_path = sys.argv[2]
    title = sys.argv[3]
    compile_section(md_path, pdf_path, title)
