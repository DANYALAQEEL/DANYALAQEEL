import os
import re

TABLE_1_5_SOLUTIONS = {
    '13': {
        'ineq': r'\operatorname{Re}(z) < -1',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). The inequality is \( x < -1 \). This represents the open half-plane to the left of the vertical line \( x = -1 \).',
        'details': '* **Open:** Yes, since for every point in the set, we can find a small neighborhood contained entirely within the set.\n'
                   '* **Closed:** No, because the boundary line \( x = -1 \) is not included in the set.\n'
                   '* **Domain:** Yes, since the set is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely to the left and vertically.\n'
                   '* **Connected:** Yes, since any two points in the set can be joined by a line segment lying entirely within the set.'
    },
    '14': {
        'ineq': r'|\operatorname{Re}(z)| > 2',
        'open': 'Yes', 'closed': 'No', 'domain': 'No', 'bounded': 'No', 'connected': 'No',
        'desc': 'The inequality is equivalent to \( x > 2 \) or \( x < -2 \). This represents the union of two disjoint open half-planes: one to the right of \( x = 2 \) and one to the left of \( x = -2 \).',
        'details': '* **Open:** Yes, since it is the union of two open half-planes.\n'
                   '* **Closed:** No, since the boundary lines \( x = 2 \) and \( x = -2 \) are not in the set.\n'
                   '* **Domain:** No, since the set is not connected.\n'
                   '* **Bounded:** No, since it extends infinitely.\n'
                   '* **Connected:** No, because a path connecting a point in the right half-plane (e.g. \( 3 \)) to a point in the left half-plane (e.g. \( -3 \)) must cross the excluded vertical strip \( -2 \le x \le 2 \).'
    },
    '15': {
        'ineq': r'\operatorname{Im}(z) > 3',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). The inequality is \( y > 3 \). This represents the open half-plane above the horizontal line \( y = 3 \).',
        'details': '* **Open:** Yes, since every point has a neighborhood contained entirely in the set.\n'
                   '* **Closed:** No, since the boundary line \( y = 3 \) is not in the set.\n'
                   '* **Domain:** Yes, since the set is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely in the horizontal and upward directions.\n'
                   '* **Connected:** Yes, since any two points in the set can be joined by a straight line segment.'
    },
    '16': {
        'ineq': r'\operatorname{Re}((2+i)z+1) > 0',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). We compute the argument of the real part operator:\n'
               '\[\n'
               '(2+i)(x+iy)+1 = 2x + 2iy + ix - y + 1 = (2x - y + 1) + i(x + 2y)\n'
               '\]\n'
               'Taking the real part:\n'
               '\[\n'
               '\operatorname{Re}((2+i)z+1) = 2x - y + 1 > 0 \\implies y < 2x + 1\n'
               '\]\n'
               'This represents the open half-plane below the line \( y = 2x + 1 \).',
        'details': '* **Open:** Yes, since it is an open half-plane.\n'
                   '* **Closed:** No, since the boundary line \( y = 2x + 1 \) is not in the set.\n'
                   '* **Domain:** Yes, since it is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely.\n'
                   '* **Connected:** Yes, since any two points in the half-plane can be connected by a line segment.'
    },
    '17': {
        'ineq': r'2 < \operatorname{Re}(z-1) < 4',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). Then \( \operatorname{Re}(z-1) = x - 1 \).\n'
               'Substituting into the inequality:\n'
               '\[\n'
               '2 < x - 1 < 4 \\implies 3 < x < 5\n'
               '\]\n'
               'This is an infinite open vertical strip between the lines \( x = 3 \) and \( x = 5 \).',
        'details': '* **Open:** Yes, since it is defined by strict inequalities.\n'
                   '* **Closed:** No, since the boundary lines \( x = 3 \) and \( x = 5 \) are not in the set.\n'
                   '* **Domain:** Yes, since it is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely in the vertical direction.\n'
                   '* **Connected:** Yes, since any two points in the vertical strip can be joined by a line segment.'
    },
    '18': {
        'ineq': r'-1 \le \operatorname{Im}(z) < 4',
        'open': 'No', 'closed': 'No', 'domain': 'No', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). The inequality is \( -1 \le y < 4 \). This represents a horizontal strip bounded below by the horizontal line \( y = -1 \) (included) and above by the line \( y = 4 \) (excluded).',
        'details': '* **Open:** No, because any neighborhood around a point on the boundary line \( y = -1 \) contains points with \( y < -1 \) which are outside the set.\n'
                   '* **Closed:** No, because the boundary points on the line \( y = 4 \) are not in the set.\n'
                   '* **Domain:** No, since it is not open.\n'
                   '* **Bounded:** No, since it extends infinitely in the horizontal direction.\n'
                   '* **Connected:** Yes, since any two points in the strip can be joined by a line segment lying entirely in the strip.'
    },
    '19': {
        'ineq': r'\operatorname{Re}(z^2) > 0',
        'open': 'Yes', 'closed': 'No', 'domain': 'No', 'bounded': 'No', 'connected': 'No',
        'desc': 'Let \( z = x + iy \). Then \( z^2 = x^2 - y^2 + 2ixy \\implies \\operatorname{Re}(z^2) = x^2 - y^2 > 0 \\implies x^2 > y^2 \\implies |x| > |y| \).\n'
               'This represents two open V-shaped sectors containing the positive and negative real axes, bounded by the lines \( y = x \) and \( y = -x \), meeting at the origin (origin excluded).',
        'details': '* **Open:** Yes, since it is defined by a strict inequality.\n'
                   '* **Closed:** No, since the boundary lines \( y = \\pm x \) are not in the set.\n'
                   '* **Domain:** No, since the set is not connected.\n'
                   '* **Bounded:** No, since the sectors extend infinitely.\n'
                   '* **Connected:** No, because a path connecting a point in the right sector (e.g. \( 1 \)) to a point in the left sector (e.g. \( -1 \)) must pass through the origin \( (0,0) \), which is excluded from the set.'
    },
    '20': {
        'ineq': r'\operatorname{Im}(z) < \operatorname{Re}(z)',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'Let \( z = x + iy \). The inequality is \( y < x \). This represents the open half-plane below the line \( y = x \).',
        'details': '* **Open:** Yes, since it is defined by a strict inequality.\n'
                   '* **Closed:** No, since the boundary line \( y = x \) is not in the set.\n'
                   '* **Domain:** Yes, since the set is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely.\n'
                   '* **Connected:** Yes, since any two points in the set can be joined by a line segment.'
    },
    '21': {
        'ineq': r'|z-i| > 1',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'No', 'connected': 'Yes',
        'desc': 'The inequality represents the set of all points whose distance from \( i \) is strictly greater than 1. Geometrically, this is the exterior of the circle of radius 1 centered at \( i \).',
        'details': '* **Open:** Yes, since every point has a neighborhood contained entirely in the set.\n'
                   '* **Closed:** No, since the boundary circle \( |z - i| = 1 \) is not in the set.\n'
                   '* **Domain:** Yes, since the set is open and connected.\n'
                   '* **Bounded:** No, since it extends infinitely outward.\n'
                   '* **Connected:** Yes, since any two points in the exterior can be connected by a path going around the excluded disk.'
    },
    '22': {
        'ineq': r'2 < |z-i| < 3',
        'open': 'Yes', 'closed': 'No', 'domain': 'Yes', 'bounded': 'Yes', 'connected': 'Yes',
        'desc': 'The inequality represents the set of points whose distance from \( i \) is strictly between 2 and 3. Geometrically, this is the open annulus centered at \( i \) with inner radius 2 and outer radius 3.',
        'details': '* **Open:** Yes, since it is defined by strict inequalities.\n'
                   '* **Closed:** No, since the boundary circles \( |z-i| = 2 \) and \( |z-i| = 3 \) are not in the set.\n'
                   '* **Domain:** Yes, since the set is open and connected.\n'
                   '* **Bounded:** Yes, since the set is bounded (e.g., lies within the disk \( |z| < 4 \)).\n'
                   '* **Connected:** Yes, since any two points in the annulus can be connected by a path lying entirely within the annulus.'
    },
    '23': {
        'ineq': r'1 \le |z - 1 - i| < 2',
        'open': 'No', 'closed': 'No', 'domain': 'No', 'bounded': 'Yes', 'connected': 'Yes',
        'desc': 'The inequality represents the set of points whose distance from \( 1+i \) is at least 1 but strictly less than 2. Geometrically, this is a semi-open annulus centered at \( 1+i \) where the inner boundary circle \( |z - 1 - i| = 1 \) is included and the outer boundary circle \( |z - 1 - i| = 2 \) is excluded.',
        'details': '* **Open:** No, since points on the inner circle have neighborhoods containing points outside the set.\n'
                   '* **Closed:** No, since boundary points on the outer circle are not in the set.\n'
                   '* **Domain:** No, since the set is not open.\n'
                   '* **Bounded:** Yes, since it is bounded.\n'
                   '* **Connected:** Yes, since any two points can be connected by a path.'
    },
    '24': {
        'ineq': r'2 \le |z - 3 + 4i| \le 5',
        'open': 'No', 'closed': 'Yes', 'domain': 'No', 'bounded': 'Yes', 'connected': 'Yes',
        'desc': 'The inequality represents the set of points whose distance from \( 3-4i \) is between 2 and 5 (inclusive). Geometrically, this is a closed annulus centered at \( 3-4i \) where both the inner boundary circle (radius 2) and the outer boundary circle (radius 5) are included.',
        'details': '* **Open:** No, since it contains its boundary points.\n'
                   '* **Closed:** Yes, since it contains all its boundary points.\n'
                   '* **Domain:** No, since the set is not open.\n'
                   '* **Bounded:** Yes, since the set is bounded.\n'
                   '* **Connected:** Yes, since any two points can be connected by a path.'
    }
}

def clean_latex_typos(text):
    text = text.replace('\x0c', 'f')
    return text

def parse_group_description(lines):
    desc = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        desc.append(line)
    return "".join(desc).strip()

def split_problem_body(body_text):
    lines = body_text.splitlines(keepends=True)
    
    markers = [
        r'^###\s+Solution',
        r'^\*\*Solution:?\*\*',
        r'^\*\s+\*\*Answer:\*\*',
        r'^\*\s+\*\*Proof:\*\*',
        r'^\*\s+\*\*Analysis:\*\*',
        r'^\*\s+\*\*Description:\*\*',
        r'^\*\s+\*\*Boundary:\*\*',
        r'^\*\s+\*\*Open:\*\*',
        r'^\*\s+\*\*Vector sum:\*\*',
        r'^\*\*Step\s+\d+\.\*\*',
        r'^[uU]sing the property',
        r'^[wW]e square',
        r'^[sS]ubtract',
        r'^[aA]dd',
        r'^[sS]quare',
        r'^[uU]sing FOIL',
        r'^[mM]ultiply',
        r'^[eE]xpand',
        r'^[bB]y definition',
        r'^[aA]pply',
        r'^[fF]or each',
        r'^[vV]erify',
        r'^[dD]ivide'
    ]
    
    split_idx = -1
    has_solution_header = False
    
    for idx, line in enumerate(lines):
        line_strip = line.strip()
        matched = False
        for marker in markers:
            if re.search(marker, line_strip):
                matched = True
                if '### Solution' in marker or '###  Solution' in marker:
                    has_solution_header = True
                break
        if matched:
            split_idx = idx
            break
            
    if split_idx != -1:
        question_lines = lines[:split_idx]
        solution_lines = lines[split_idx:]
        
        while question_lines and not question_lines[-1].strip():
            question_lines.pop()
        while solution_lines and not solution_lines[0].strip():
            solution_lines.pop(0)
            
        question_text = "".join(question_lines).strip()
        solution_text = "".join(solution_lines).strip()
        
        if has_solution_header:
            return question_text, solution_text
        else:
            return question_text, "### Solution\n\n" + solution_text
            
    math_block_end = -1
    in_math_block = False
    for idx, line in enumerate(lines):
        if '\\[' in line:
            in_math_block = True
        if '\\]' in line and in_math_block:
            math_block_end = idx
            in_math_block = False
            
    if math_block_end != -1 and math_block_end < len(lines) - 1:
        question_lines = lines[:math_block_end+1]
        solution_lines = lines[math_block_end+1:]
        
        while question_lines and not question_lines[-1].strip():
            question_lines.pop()
        while solution_lines and not solution_lines[0].strip():
            solution_lines.pop(0)
            
        return "".join(question_lines).strip(), "### Solution\n\n" + "".join(solution_lines).strip()
        
    first_non_empty = -1
    for idx, line in enumerate(lines):
        if line.strip():
            first_non_empty = idx
            break
            
    if first_non_empty != -1:
        question_lines = lines[:first_non_empty+1]
        solution_lines = lines[first_non_empty+1:]
        
        while question_lines and not question_lines[-1].strip():
            question_lines.pop()
        while solution_lines and not solution_lines[0].strip():
            solution_lines.pop(0)
            
        return "".join(question_lines).strip(), "### Solution\n\n" + "".join(solution_lines).strip()
        
    return body_text.strip(), ""

def reconstruct_file(in_path, out_path, section_name):
    print(f"Processing: {in_path} -> {out_path}")
    with open(in_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = clean_latex_typos(content)
    
    if "section_1.1_solutions.md" in in_path:
        lines = content.splitlines(keepends=True)
        prob_headers = []
        for idx, line in enumerate(lines):
            if line.startswith('## Problem '):
                prob_num = line.replace('## Problem ', '').strip()
                prob_headers.append((idx, prob_num))
                
        p35_indices = [idx for idx, num in prob_headers if num == '35']
        p45_indices = [idx for idx, num in prob_headers if num == '45']
        
        if len(p35_indices) == 2 and p45_indices:
            first_p35 = p35_indices[0]
            second_p35 = p35_indices[1]
            p45_idx = p45_indices[0]
            
            content_parts = lines[:first_p35] + lines[second_p35:]
            content = "".join(content_parts)

    lines = content.splitlines(keepends=True)
    output = []
    
    group_desc = ""
    current_prob_num = None
    current_prob_title = ""
    current_prob_body = []
    
    def flush_problem():
        nonlocal current_prob_num, current_prob_title, current_prob_body, group_desc
        if current_prob_num is not None:
            body_text = "".join(current_prob_body)
            question, solution = split_problem_body(body_text)
            
            output.append(f"## Problem {current_prob_num}\n\n")
            
            if group_desc:
                output.append(f"{group_desc}\n\n")
            if current_prob_title:
                output.append(f"**{current_prob_title}**\n\n")
                
            output.append(f"{question}\n\n")
            
            if solution:
                output.append(f"{solution}\n\n")
            
            # Embed figures for section 1.5
            if "section_1.5_solutions" in in_path.lower():
                if current_prob_num == '29':
                    output.append("![Figure 1.25](../../extracted_figures/figure_1_25.png)\n\n")
                elif current_prob_num == '30':
                    output.append("![Figure 1.26](../../extracted_figures/figure_1_26.png)\n\n")
                elif current_prob_num == '39':
                    output.append("![Figure 1.27](../../extracted_figures/figure_1_27.png)\n\n")
                elif current_prob_num == '40':
                    output.append("![Figure 1.28](../../extracted_figures/figure_1_28.png)\n\n")
            elif "chapter_1_review_solutions" in in_path.lower():
                if current_prob_num == '50':
                    output.append("![Figure 1.29](../../extracted_figures/figure_1_29.png)\n\n")
            
            output.append("---\n\n")
            
            current_prob_num = None
            current_prob_title = ""
            current_prob_body = []

    idx = 0
    while idx < len(lines):
        line = lines[idx]
        
        # In section 1.5, if we hit Problems 13 - 24, we expand them using our dictionary
        if "section_1.5_solutions" in in_path.lower() and line.startswith("## Problems 13"):
            flush_problem()
            output.append("## Problems 13 – 24\n\n")
            output.append("**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected.**\n\n")
            output.append("---\n\n")
            
            for p_num in sorted(TABLE_1_5_SOLUTIONS.keys(), key=int):
                data = TABLE_1_5_SOLUTIONS[p_num]
                output.append(f"## Problem {p_num}\n\n")
                output.append("**Sketch the set \( S \) of points in the complex plane satisfying the given inequality. Determine whether the set is (a) open, (b) closed, (c) a domain, (d) bounded, or (e) connected:**\n\n")
                output.append(f"\[\n{data['ineq']}\n\]\n\n")
                output.append("### Solution\n\n")
                output.append(f"{data['desc']}\n\n")
                output.append(f"{data['details']}\n\n")
                output.append("---\n\n")
                
            # Skip the table and details block in the source file
            # The table ends when we hit ## Problems 25 or ## Problem 25
            idx += 1
            while idx < len(lines) and not lines[idx].startswith("## Problem 25") and not lines[idx].startswith("### Problem 25"):
                idx += 1
            group_desc = ""
            continue
            
        is_group_header = False
        if line.startswith('## Problems') or line.startswith('## Focus on Concepts') or line.startswith('## Computer Lab') or line.startswith('## Projects'):
            is_group_header = True
            
        if is_group_header:
            flush_problem()
            desc_lines = []
            idx += 1
            while idx < len(lines) and not lines[idx].startswith('##') and not lines[idx].startswith('###'):
                desc_lines.append(lines[idx])
                idx += 1
            group_desc = parse_group_description(desc_lines)
            continue
            
        is_problem_header = False
        m = re.match(r'^##+\s+Problem\s+(\d+)(?:\s*:\s*(.*))?', line.strip())
        if m:
            is_problem_header = True
            prob_num = m.group(1)
            prob_title = m.group(2) or ""
            
        if is_problem_header:
            flush_problem()
            current_prob_num = prob_num
            current_prob_title = prob_title.strip()
            idx += 1
            continue
            
        if line.strip() == '---':
            if current_prob_num is not None:
                idx += 1
                continue
            else:
                idx += 1
                continue
                
        if line.startswith('#') or line.startswith('## '):
            flush_problem()
            group_desc = ""
            output.append(line)
            idx += 1
            continue
            
        if current_prob_num is not None:
            current_prob_body.append(line)
        else:
            output.append(line)
        idx += 1
        
    flush_problem()
    
    final_text = "".join(output)
    final_text = re.sub(r'---\n\n---\n', '---\n', final_text)
    
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(final_text)
    print(f"Reconstructed and perfected file saved to: {out_path}")

if __name__ == "__main__":
    src_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions"
    # Note: the files are in chapter_1
    dest_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\solutions_perfected\chapter_1"
    
    files = {
        "chapter_1/section_1.1_solutions.md": "section_1.1_solutions.md",
        "chapter_1/section_1.2_solutions.md": "section_1.2_solutions.md",
        "chapter_1/section_1.3_solutions.md": "section_1.3_solutions.md",
        "chapter_1/section_1.4_solutions.md": "section_1.4_solutions.md",
        "chapter_1/section_1.5_solutions.md": "section_1.5_solutions.md",
        "chapter_1/section_1.6_solutions.md": "section_1.6_solutions.md",
        "chapter_1/chapter_1_review_solutions.md": "chapter_1_review_solutions.md"
    }
    
    for src_name, dest_name in files.items():
        src_path = os.path.join(src_dir, src_name)
        dest_path = os.path.join(dest_dir, dest_name)
        reconstruct_file(src_path, dest_path, dest_name)
