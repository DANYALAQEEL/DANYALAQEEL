import json

log_path = r"C:\Users\Administrator\.gemini\antigravity\brain\ed51d776-87ff-4e45-9452-f8b7706ed002\.system_generated\logs\overview.txt"
output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\full_response_parsed.md"

with open(log_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 5 (index 4) is the model response
data = json.loads(lines[4])
content = data['content']

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully wrote {len(content)} characters to {output_path}")
