import requests

def run():
    url = "https://improved-cf-dashboard-9oqbpajkn-danyalaqeels-projects.vercel.app"
    print(f"Fetching raw HTML from {url}...")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    resp = requests.get(url, headers=headers)
    print(f"Response Status: {resp.status_code}")
    print(f"HTML Content:\n{resp.text[:1000]}")

if __name__ == "__main__":
    run()
