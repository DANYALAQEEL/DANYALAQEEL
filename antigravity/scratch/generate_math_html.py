import os
import markdown

base_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch"
notes_files = [
    "math_topic_1.md",
    "math_topic_2.md",
    "math_topic_3.md",
    "math_topic_4.md",
    "math_topic_5.md",
    "math_strategy.md"
]

all_md = """
# NUST Midterm Examination Notes
## Subject: Complex Variables and Transforms (MATH-232)
### Prepared for: NUST Relative Grading System
**Note:** Strictly mapped to the syllabus boundaries (Lectures 1-18 only). Avoids Laplace and Fourier transforms as they were excluded from the lecture progression.

---

"""

for f in notes_files:
    file_path = os.path.join(base_dir, f)
    with open(file_path, "r", encoding="utf-8") as file:
        all_md += file.read() + "\n\n<div class='page-break'></div>\n\n"

# We must use extension lists that support math/mathjax. For now we just use tables and fenced code.
# The user can read the latex format $\alpha$, $z$, easily.
html_content = markdown.markdown(all_md, extensions=['tables', 'fenced_code'])

html_template = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>MATH-232 Master Exam Prep</title>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<style>
    body {{
        font-family: 'Georgia', serif;
        line-height: 1.6;
        color: #111;
        margin: 40px;
        font-size: 14pt;
    }}
    h1 {{
        color: #4b0082;
        border-bottom: 2px solid #4b0082;
        padding-bottom: 5px;
        text-align: center;
        margin-top: 50px;
    }}
    h2 {{
        color: #2F4F4F;
        margin-top: 30px;
        border-bottom: 1px solid #ccc;
    }}
    h3 {{
        color: #8B0000;
        margin-top: 20px;
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
        color: #4b0082;
    }}
    blockquote {{
        background: #fdf5e6;
        border-left: 5px solid #d2691e;
        margin: 20px 0;
        padding: 15px;
        font-style: italic;
    }}
    code {{
        background: #f4f4f4;
        padding: 2px 5px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
        color: #b22222;
        font-size: 13pt;
    }}
    .page-break {{
        page-break-before: always;
    }}
    @page {{
        margin: 20mm;
    }}
</style>
<script>
  window.MathJax = {{
    tex: {{
      inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
    }}
  }};
</script>
</head>
<body>
    {html_content}
</body>
</html>
"""

html_path = os.path.join(base_dir, "math_midterm_notes.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_template)

print(f"HTML generated at {html_path}")
