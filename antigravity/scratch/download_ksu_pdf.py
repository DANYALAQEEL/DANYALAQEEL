import urllib.request
import os

pdf_url = "https://fac.ksu.edu.sa/sites/default/files/complex_analysis_problems_with_solutions.pdf"
output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\complex_analysis_problems_with_solutions.pdf"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def download():
    print(f"Downloading: {pdf_url}")
    req = urllib.request.Request(pdf_url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response, open(output_path, "wb") as out_file:
            buffer_size = 1024 * 1024
            while True:
                copy_buffer = response.read(buffer_size)
                if not copy_buffer:
                    break
                out_file.write(copy_buffer)
        print(f"Download complete! Saved to {output_path}")
        print(f"Size: {os.path.getsize(output_path)} bytes")
    except Exception as e:
        print(f"Error downloading: {e}")

if __name__ == "__main__":
    download()
