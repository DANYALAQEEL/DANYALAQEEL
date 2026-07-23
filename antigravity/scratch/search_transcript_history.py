import json

path = r"C:\Users\Administrator\.gemini\antigravity\brain\00b772ab-537b-4efd-87de-4fc47f24a001\.system_generated\logs\transcript.jsonl"
with open(path, "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        try:
            step = json.loads(line)
            # Only search earlier steps
            if step.get("step_index", 9999) > 950:
                continue
            
            stype = step.get("type", "")
            content = str(step.get("content", ""))
            
            # Print user messages
            if stype == "USER_INPUT" or "impersonat" in content.lower() or "login as" in content.lower():
                print(f"[Line {idx}] Step={step.get('step_index')}, Source={step.get('source')}, Type={stype}")
                print(f"  Content: {content[:400].strip()}")
                print("-" * 50)
        except Exception as e:
            pass
