import json

transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('tool_calls'):
                for tc in step['tool_calls']:
                    args = tc.get('args', {})
                    args_str = json.dumps(args)
                    if 'App.jsx' in args_str and ('replace' in args_str or 'write' in args_str):
                        print(f"Step {step['step_index']}: {tc['name']}")
                        # print(args_str[:200])
        except Exception as e:
            pass
