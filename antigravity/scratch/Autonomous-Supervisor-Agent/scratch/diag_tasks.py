import os
import json

TASKS_FILE = r"c:\Users\Administrator\.gemini\antigravity\scratch\Autonomous-Supervisor-Agent\supervisor\tasks.json"

print(f"Checking {TASKS_FILE}...")
if os.path.exists(TASKS_FILE):
    print("File exists!")
    with open(TASKS_FILE, "r") as f:
        data = json.load(f)
        print(f"Loaded {len(data)} tasks.")
        for t in data:
            print(f"Task ID: {t.get('id')}, Status: {t.get('status')}, Type: {t.get('type')}")
else:
    print("FILE NOT FOUND!")
