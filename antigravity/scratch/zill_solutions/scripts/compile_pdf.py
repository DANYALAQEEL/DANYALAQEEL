import os
import sys
import time
from playwright.sync_api import sync_playwright

def compile_html_to_pdf(html_path, pdf_path):
    abs_url = "file:///" + os.path.abspath(html_path).replace("\\", "/")
    
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(abs_url)
        
        print(f"Waiting for MathJax to render math on page: {html_path}")
        try:
            page.wait_for_function("window.mathjaxDone === true", timeout=15000)
            print("MathJax rendering complete.")
        except Exception as e:
            print("MathJax wait timed out or failed. Falling back to sleep. Error:", str(e))
            time.sleep(3)
            
        # Extra buffer for rendering images and layout settling
        time.sleep(1.0)
        
        os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
        page.pdf(
            path=pdf_path,
            format="A4",
            margin={"top": "25mm", "bottom": "25mm", "left": "20mm", "right": "20mm"},
            display_header_footer=True,
            header_template='<div style="font-size: 9px; font-family: \'Inter\', sans-serif; width: 100%; text-align: center; color: #94a3b8;">Dennis G. Zill — Complex Analysis Solutions Manual</div>',
            footer_template='<div style="font-size: 9px; font-family: \'Inter\', sans-serif; width: 100%; text-align: right; padding-right: 20px; color: #94a3b8;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>'
        )
        browser.close()
    print(f"Compiled PDF successfully: {pdf_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        # Default test run
        compile_html_to_pdf(
            r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions\chapter_7\section_7.4_solutions.html",
            r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\pdf_solutions\chapter_7\Section_7.4_Solutions.pdf"
        )
    else:
        compile_html_to_pdf(sys.argv[1], sys.argv[2])
