import os
import re
import markdown

# HTML Template with Modern Academic style
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <!-- MathJax Configuration -->
    <script>
        window.MathJax = {{
            tex: {{
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                processEscapes: true
            }},
            startup: {{
                pageReady: () => {{
                    return MathJax.startup.defaultPageReady().then(() => {{
                        window.mathjaxDone = true;
                    }});
                }}
            }}
        }};
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {{
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            color: #1e293b;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }}
        
        .container {{
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }}
        
        /* Header styling */
        .header {{
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: #ffffff;
            padding: 30px 20px;
            border-radius: 8px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }}
        
        .header h1 {{
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.025em;
        }}
        
        .header p {{
            margin: 8px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }}
        
        /* Question styling */
        .question-block {{
            background-color: #f8fafc;
            border-left: 4px solid #cbd5e1;
            padding: 16px 20px;
            margin: 30px 0 20px 0;
            border-radius: 0 6px 6px 0;
        }}
        
        .question-block h4 {{
            margin: 0 0 8px 0;
            color: #475569;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        
        .question-content {{
            font-weight: 500;
            font-size: 15px;
        }}
        
        /* Solution styling */
        .solution-block {{
            border-left: 4px solid #3b82f6;
            padding: 10px 0 10px 20px;
            margin-bottom: 40px;
        }}
        
        .solution-block h4 {{
            margin: 0 0 12px 0;
            color: #2563eb;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }}
        
        /* Callouts for intermediate algebra/explanations */
        .algebra-callout {{
            background-color: #eff6ff;
            border-left: 4px solid #60a5fa;
            padding: 12px 16px;
            margin: 15px 0;
            border-radius: 0 6px 6px 0;
            font-size: 14px;
        }}
        
        .algebra-callout h5 {{
            margin: 0 0 6px 0;
            color: #1d4ed8;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.025em;
        }}
        
        /* Image / figure styling */
        .figure-container {{
            text-align: center;
            margin: 24px 0;
            padding: 10px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background-color: #f8fafc;
        }}
        
        .figure-container img {{
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }}
        
        .figure-caption {{
            font-size: 12px;
            color: #64748b;
            margin-top: 8px;
            font-weight: 500;
        }}
        
        /* Standard HTML formatting */
        h2 {{
            color: #1e3a8a;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8px;
            margin-top: 40px;
        }}
        
        h3 {{
            color: #2563eb;
            margin-top: 30px;
        }}
        
        hr {{
            border: 0;
            height: 1px;
            background: #e2e8f0;
            margin: 40px 0;
        }}
        
        /* Page break for printing */
        .page-break {{
            page-break-before: always;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{title}</h1>
            <p>Dennis G. Zill — Complex Analysis (2nd Edition) Solutions Manual</p>
        </div>
        {content}
    </div>
</body>
</html>
"""

def preprocess_markdown(text):
    # Dictionary to hold extracted math blocks
    math_blocks = {}
    placeholder_idx = 0
    
    # Extract block math $$ ... $$
    block_pattern = re.compile(r'\$\$(.*?)\$\$', re.DOTALL)
    while True:
        match = block_pattern.search(text)
        if not match:
            break
        ph = f"<!--MATH_BLOCK_{placeholder_idx}-->"
        math_blocks[ph] = match.group(0)
        text = text[:match.start()] + ph + text[match.end():]
        placeholder_idx += 1
        
    # Extract inline math $ ... $ (avoiding double $$ placeholders)
    inline_pattern = re.compile(r'\$(.*?)\$')
    while True:
        match = inline_pattern.search(text)
        if not match:
            break
        ph = f"<!--MATH_INLINE_{placeholder_idx}-->"
        math_blocks[ph] = match.group(0)
        text = text[:match.start()] + ph + text[match.end():]
        placeholder_idx += 1
        
    # Now parse standard markdown
    html = markdown.markdown(text, extensions=['fenced_code', 'tables'])
    
    # Restore the math blocks
    for ph, math in math_blocks.items():
        html = html.replace(ph, math)
        
    return html

def convert_md_to_html(md_path, html_path, title):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
        
    # Let's perform some transformations to match our layout classes
    # 1. Structure Questions and Solutions
    # Example format in our md files:
    # #### Problem 1
    # **Boundary Conditions:**
    # ...
    # **Solution:**
    # ...
    
    # Replace Section dividers or headers with nice structures
    # Let's replace "#### Problem (\d+)" with blocks
    
    # Let's run a custom parser or just let preprocessed markdown do the work
    html_content = preprocess_markdown(md_content)
    
    # Post-process: Wrap Question/Solution into nice styled divs
    # Find "<p><strong>Solution:</strong></p>" or "<strong>Solution</strong>" and wrap it
    # We will do some pattern matching to enhance the structure
    
    # Let's auto-wrap Problem sections
    # A problem section starts with <h4>Problem X</h4> or <h3>Problem X</h3>
    # and ends with <hr /> or the next Problem header.
    # For now, let's write a simple post-processor to style these beautifully
    problems = html_content.split('<h4>Problem')
    if len(problems) > 1:
        styled_html = problems[0]
        for prob in problems[1:]:
            parts = prob.split('</h4>', 1)
            prob_num_text = parts[0]
            rest = parts[1]
            
            # Split rest into Question and Solution at "<p><strong>Solution"
            sol_split = re.split(r'(<p><strong>Solution.*?</strong></p>|<strong>Solution:?</strong>|<strong>Solution</strong>)', rest, 1, flags=re.IGNORECASE)
            
            question_part = sol_split[0]
            if len(sol_split) > 1:
                solution_header = sol_split[1]
                solution_body = sol_split[2]
                
                styled_html += f"""
                <div class="question-block">
                    <h4>Problem {prob_num_text}</h4>
                    <div class="question-content">{question_part}</div>
                </div>
                <div class="solution-block">
                    <h4>Solution</h4>
                    {solution_body}
                </div>
                """
            else:
                styled_html += f"""
                <div class="question-block">
                    <h4>Problem {prob_num_text}</h4>
                    <div class="question-content">{question_part}</div>
                </div>
                """
        html_content = styled_html
        
    # Replace figure links with our figure-container div
    # Markdown image: <img alt="Figure 7.39" src="relative_path.png" />
    # Let's wrap it in a figure-container and fix paths to absolute path so Playwright loads it
    fig_pattern = re.compile(r'<p><img alt="(Figure\s+\d+[\._]\d+)" src="(.*?)" /></p>', re.IGNORECASE)
    def fig_replacement(m):
        caption = m.group(1).replace('_', '.')
        img_src = m.group(2)
        # Convert relative path to absolute
        abs_src = os.path.abspath(os.path.join(os.path.dirname(md_path), img_src)).replace('\\', '/')
        return f"""
        <div class="figure-container">
            <img src="file:///{abs_src}" alt="{caption}" />
            <div class="figure-caption">{caption}</div>
        </div>
        """
    html_content = fig_pattern.sub(fig_replacement, html_content)
    
    # Also handle markdown links directly
    fig_pattern2 = re.compile(r'<img alt="(Figure\s+\d+[\._]\d+)" src="(.*?)" />', re.IGNORECASE)
    html_content = fig_pattern2.sub(fig_replacement, html_content)
    
    # Let's insert some page breaks before Problems to avoid awkward breaks
    # For printing, we can insert .page-break class
    # Let's add page breaks before every 3rd or 4th problem to keep it balanced, or let CSS handle it.
    
    full_html = HTML_TEMPLATE.format(title=title, content=html_content)
    
    os.makedirs(os.path.dirname(html_path), exist_ok=True)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"Generated HTML page: {html_path}")

if __name__ == "__main__":
    # Test convert on Section 7.4
    convert_md_to_html(
        r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions\chapter_7\section_7.4_solutions.md",
        r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions\chapter_7\section_7.4_solutions.html",
        "Section 7.4: Poisson Integral Formulas"
    )
