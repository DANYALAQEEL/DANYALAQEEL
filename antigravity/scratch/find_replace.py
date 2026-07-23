import json
transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('tool_calls'):
                for tc in step['tool_calls']:
                    args = tc.get('args', tc.get('arguments', {}))
                    if tc['name'] == 'replace_file_content' and 'App.jsx' in args.get('TargetFile', ''):
                        print(f"Step {step['step_index']}: replace_file_content on App.jsx")
                        print(json.dumps(args)[:200])
        except Exception as e:
            pass
