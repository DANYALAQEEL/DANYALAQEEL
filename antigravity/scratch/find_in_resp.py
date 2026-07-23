import json
transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('type') == 'TOOL_RESPONSE' and step.get('tool_responses'):
                for tr in step['tool_responses']:
                    output = tr.get('output', '')
                    if 'TAB VIEW: DEVICES LIST' in output:
                        print(f"Appeared in response of step {step.get('step_index')}")
        except Exception as e:
            pass
