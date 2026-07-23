import json
transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('tool_calls'):
                for tc in step['tool_calls']:
                    if tc['name'] == 'write_to_file':
                        args = tc.get('args', tc.get('arguments', {}))
                        target = args.get('TargetFile', '')
                        if 'App.jsx' in target:
                            print(f"Step {step['step_index']} wrote to {target}, length {len(args.get('CodeContent', ''))}")
        except Exception as e:
            pass
