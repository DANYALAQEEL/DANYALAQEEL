import json

transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('step_index') == 489:
                if step.get('tool_calls'):
                    for tc in step['tool_calls']:
                        if tc['name'] == 'write_to_file':
                            args = tc.get('args', tc.get('arguments', {}))
                            content = args.get('CodeContent', '')
                            if 'App.jsx' in args.get('TargetFile', ''):
                                with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'w', encoding='utf-8') as out:
                                    out.write(content)
                                print(f"Restored App.jsx from Step 489, length: {len(content)}")
        except Exception as e:
            pass
