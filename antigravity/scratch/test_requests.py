import urllib.request

try:
    print("Fetching http://cfsmartems.com...")
    response = urllib.request.urlopen("http://cfsmartems.com", timeout=10)
    print(f"HTTP Success! Code: {response.getcode()}")
    print(response.read()[:500])
except Exception as e:
    print(f"HTTP Failed: {e}")

try:
    print("\nFetching https://www.cfsmartems.com...")
    response = urllib.request.urlopen("https://www.cfsmartems.com", timeout=10)
    print(f"HTTPS Success! Code: {response.getcode()}")
    print(response.read()[:500])
except Exception as e:
    print(f"HTTPS Failed: {e}")
