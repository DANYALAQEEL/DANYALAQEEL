import fitz

pdf_path = r"C:\Users\Administrator\Downloads\Text Book - Operating System Concepts (10th Ed) - Gagne Silberschatz and Galvin 2018.pdf"

doc = fitz.open(pdf_path)
toc = doc.get_toc()

for lvl, title, page in toc:
    if lvl == 1 or lvl == 2:
        print(f"Level {lvl}: {title} (Page {page})")
