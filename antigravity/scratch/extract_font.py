import zipfile
import os

zip_path = "DarkerGrotesque.zip"
extract_path = "DarkerGrotesque"

if not os.path.exists(zip_path):
    print(f"Error: {zip_path} not found.")
else:
    try:
        if not zipfile.is_zipfile(zip_path):
            print("Error: File is not a valid zip file.")
            # Print first few bytes
            with open(zip_path, 'rb') as f:
                print(f"Header: {f.read(10)}")
        else:
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(extract_path)
            print(f"Successfully extracted to {extract_path}")
            # List files
            for root, dirs, files in os.walk(extract_path):
                for file in files:
                    print(os.path.join(root, file))
    except Exception as e:
        print(f"Extraction failed: {e}")
