import pypdf
import os

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_book\A First Course in Complex Analysis With Applications by Zill.pdf"

def find_exercises():
    if not os.path.exists(pdf_path):
        print("PDF file not found.")
        return
        
    reader = pypdf.PdfReader(pdf_path)
    print(f"Total Pages: {len(reader.pages)}")
    
    # Let's search pages for "Exercises 1.1"
    found = False
    for page_num in range(15, 50): # Exercises 1.1 should be near the start
        text = reader.pages[page_num].extract_text()
        if "Exercises 1.1" in text or "EXERCISES 1.1" in text:
            print(f"\nFound Exercises 1.1 on page {page_num + 1}:")
            print("====================================")
            # Print the text safely (filtering non-ascii chars to avoid encoding errors)
            print(text.encode('ascii', errors='replace').decode('ascii')[:1500])
            print("====================================")
            found = True
            break
            
    if not found:
        print("Could not find Exercises 1.1 in the first 50 pages.")

if __name__ == "__main__":
    find_exercises()
