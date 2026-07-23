import pypdf
import os

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_book\A First Course in Complex Analysis With Applications by Zill.pdf"

def extract_end():
    if not os.path.exists(pdf_path):
        print("Textbook PDF not found.")
        return
        
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total Pages: {total_pages}")
    
    # Check the last 30 pages to find where the answers start
    print("\nScanning last 30 pages...")
    found_idx = -1
    for idx in range(total_pages - 30, total_pages):
        text = reader.pages[idx].extract_text()
        if "Answers to Selected Odd-Numbered Problems" in text or "ANS-1" in text or "Answers" in text:
            print(f"Found answers section on page {idx + 1}!")
            found_idx = idx
            break
            
    if found_idx == -1:
        found_idx = total_pages - 15 # default to last 15 pages
        print(f"Answers header not found, printing from page {found_idx + 1}")
        
    for idx in range(found_idx, min(found_idx + 5, total_pages)):
        print(f"\n--- Page {idx + 1} ---")
        text = reader.pages[idx].extract_text().encode('ascii', errors='replace').decode('ascii')
        print(text[:1500])

if __name__ == "__main__":
    extract_end()
