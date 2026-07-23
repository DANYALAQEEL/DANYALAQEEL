import os
import fitz

base_dir = r"C:\Users\Administrator\Downloads\MATH-232_extracted"
output_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\math_extracted"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

lecture_pdfs = []
for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith(".pdf") and "Book" not in f and "Quiz" not in f and "Assignment" not in f:
            lecture_pdfs.append(os.path.join(root, f))

# Sort to maintain roughly chronological order if possible
lecture_pdfs.sort(key=lambda x: os.path.basename(x))

all_text = ""
for pdf_path in lecture_pdfs:
    filename = os.path.basename(pdf_path)
    print(f"Extracting: {filename}")
    
    try:
        doc = fitz.open(pdf_path)
        text = f"\n\n{'='*40}\nLECTURE: {filename}\n{'='*40}\n\n"
        for page in doc:
            text += page.get_text() + "\n"
        
        # Write individual file just in case
        single_out = os.path.join(output_dir, f"{filename}.txt")
        with open(single_out, "w", encoding="utf-8") as f:
            f.write(text)
            
        all_text += text
    except Exception as e:
        print(f"Failed to extract {filename}: {e}")

compiled_out = os.path.join(output_dir, "all_lectures_compiled.txt")
with open(compiled_out, "w", encoding="utf-8") as f:
    f.write(all_text)

print(f"\nExtraction complete. Compiled text saved to {compiled_out}")
