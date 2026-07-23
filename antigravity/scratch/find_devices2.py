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
                    if 'activeTab === "devices"' in args_str:
                        if tc['name'] == 'write_to_file' and 'App.jsx' in args.get('TargetFile', ''):
                            print(f"Step {step['step_index']}: found activeTab === 'devices' in write_to_file on App.jsx!")
                            with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\restored_app.jsx', 'w', encoding='utf-8') as out:
                                out.write(args['CodeContent'])
        except Exception as e:
            pass
