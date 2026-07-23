import json
transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('tool_calls'):
                for tc in step['tool_calls']:
                    args = tc.get('args', tc.get('arguments', {}))
                    args_str = json.dumps(args)
                    if 'TAB VIEW: DEVICES LIST' in args_str:
                        if tc['name'] == 'write_to_file':
                            print(f"Step {step['step_index']}: found in {args.get('TargetFile', '')}")
                            with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\step_script.py', 'w', encoding='utf-8') as out:
                                out.write(args.get('CodeContent', ''))
        except Exception as e:
            pass
