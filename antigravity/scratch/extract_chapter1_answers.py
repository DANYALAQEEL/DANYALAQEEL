import pypdf
import os

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_book\A First Course in Complex Analysis With Applications by Zill.pdf"

def extract_chapter1():
    if not os.path.exists(pdf_path):
        print("Textbook PDF not found.")
        return
        
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    # Answers section started on page 488 (index 487)
    # Let's search from page 475 to 488 (indices 474 to 487)
    print("Scanning back matter pages for Chapter 1 answers...")
    for idx in range(474, 488):
        text = reader.pages[idx].extract_text()
        if "Exercises 1.1" in text or "Exercises 1.2" in text or "Chapter 1" in text:
            print(f"\nFound Chapter 1 answers on page {idx + 1}:")
            print("====================================")
            print(text.encode('ascii', errors='replace').decode('ascii')[:1500])
            print("====================================")
            return

if __name__ == "__main__":
    extract_chapter1()
