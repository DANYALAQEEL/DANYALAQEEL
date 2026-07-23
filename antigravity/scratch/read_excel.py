import pandas as pd
import sys

file_path = r"C:\Users\Administrator\Downloads\sponser welcome contact.xlsx"
output_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\extracted_data.txt"

try:
    xls = pd.ExcelFile(file_path)
    with open(output_file, 'w', encoding='utf-8') as f:
        for sheet_name in xls.sheet_names:
            f.write(f"\n--- Sheet: {sheet_name} ---\n")
            df = pd.read_excel(file_path, sheet_name=sheet_name)
            f.write(df.to_string())
            f.write("\n")
    print("Extraction complete.")

except Exception as e:
    print(f"Error reading file: {e}")
