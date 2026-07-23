import zipfile
import os

zip_path = r"C:\Users\Administrator\Downloads\A First Course in Complex Analysis With Applications by Zill.pdf.zip"
extract_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_book"

def list_and_extract():
    if not os.path.exists(zip_path):
        print(f"Zip file not found at: {zip_path}")
        return
        
    os.makedirs(extract_dir, exist_ok=True)
    print(f"Opening zip file: {zip_path}")
    
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        print("Files in ZIP:")
        for name in zip_ref.namelist():
            print(f" - {name}")
            
        print(f"Extracting all files to {extract_dir}...")
        zip_ref.extractall(extract_dir)
        print("Extraction complete!")
        
        # List extracted files
        print("Extracted files:")
        for root, dirs, files in os.walk(extract_dir):
            for f in files:
                print(f" - {os.path.join(root, f)}")

if __name__ == "__main__":
    list_and_extract()
