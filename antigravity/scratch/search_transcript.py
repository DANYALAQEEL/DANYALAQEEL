import json

path = r"C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001\.system_generated\logs\transcript.jsonl"
with open(path, "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        try:
            step = json.loads(line)
            content = str(step.get("content", ""))
            # Also search tool_calls
            tool_calls = str(step.get("tool_calls", ""))
            
            keywords = ["impersonat", "login as", "loginas", "org", "user"]
            # We want to find user messages or model planning steps containing these
            if any(k in content.lower() or k in tool_calls.lower() for k in keywords):
                # Print only relevant parts to not overflow stdout
                source = step.get("source", "UNKNOWN")
                stype = step.get("type", "UNKNOWN")
                print(f"[Line {idx}] Source={source}, Type={stype}")
                # Print first 200 chars of content
                print(f"  Content snippet: {content[:300].strip()}")
                print(f"  Tool calls snippet: {tool_calls[:300].strip()}")
        except Exception as e:
            pass
