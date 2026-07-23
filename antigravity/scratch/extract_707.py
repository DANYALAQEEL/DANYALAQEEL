import json
transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('step_index') == 707:
                if step.get('tool_calls'):
                    for tc in step['tool_calls']:
                        args = tc.get('args', tc.get('arguments', {}))
                        with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\step707.py', 'w', encoding='utf-8') as out:
                            out.write(args.get('CodeContent', ''))
        except Exception as e:
            pass
