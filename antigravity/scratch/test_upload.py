import requests
import sys

if len(sys.argv) < 2:
    print("Usage: python test_upload.py <file_path>")
    sys.exit(1)

url = 'http://localhost:3000/api/upload'
file_path = sys.argv[1]

print(f"Uploading {file_path} to {url}...")

try:
    with open(file_path, 'rb') as f:
        files = {'file': f}
        response = requests.post(url, files=files)

    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
