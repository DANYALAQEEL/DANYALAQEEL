import os
import markdown

base_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch"
notes_files = [
    "notes_chapter_1.md",
    "notes_chapter_2.md",
    "notes_chapter_3.md",
    "notes_chapter_4.md",
    "notes_chapter_5.md",
    "notes_strategy.md"
]

all_md = """
# NUST Midterm Examination Notes
## Subject: Operating Systems (CS-330)
### Content: Chapters 1 to 5
### Purpose: High-Distinction Exam Preparation

**Prepared for NUST Relative Grading System.**

---

"""

for f in notes_files:
    file_path = os.path.join(base_dir, f)
    with open(file_path, "r", encoding="utf-8") as file:
        all_md += file.read() + "\n\n<div class='page-break'></div>\n\n"

html_content = markdown.markdown(all_md, extensions=['tables', 'fenced_code'])

html_template = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>OS Midterm Notes</title>
<style>
    body {{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 40px;
        font-size: 14pt;
    }}
    h1 {{
        color: #003366;
        border-bottom: 2px solid #003366;
        padding-bottom: 5px;
        text-align: center;
        margin-top: 50px;
    }}
    h2 {{
        color: #004080;
        margin-top: 30px;
        border-bottom: 1px solid #ccc;
    }}
    h3 {{
        color: #0059b3;
    }}
    table {{
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        page-break-inside: avoid;
    }}
    th, td {{
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
    }}
    th {{
        background-color: #f2f2f2;
        color: #003366;
    }}
    blockquote {{
        background: #fdf5e6;
        border-left: 5px solid #ff9900;
        margin: 20px 0;
        padding: 15px;
        font-style: italic;
    }}
    code {{
        background: #f4f4f4;
        padding: 2px 5px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
        color: #c7254e;
    }}
    .page-break {{
        page-break-before: always;
    }}
    @page {{
        margin: 20mm;
    }}
</style>
</head>
<body>
    {html_content}
</body>
</html>
"""

html_path = os.path.join(base_dir, "os_midterm_notes.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_template)

print(f"HTML generated at {html_path}")

# Now use Edge to convert HTML to PDF
pdf_path = os.path.join(base_dir, "OS_Midterm_Distinction_Notes.pdf")
cmd = f'msedge --headless --disable-gpu --print-to-pdf="{pdf_path}" "{html_path}"'
os.system(cmd)
print(f"PDF generated at {pdf_path}")
