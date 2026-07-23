import json
import codecs

transcript_path = r'C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d\.system_generated\logs\transcript.jsonl'
with codecs.open(transcript_path, 'r', 'utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('tool_calls'):
                for tc in step['tool_calls']:
                    args = tc.get('args', tc.get('arguments', {}))
                    if tc['name'] == 'write_to_file':
                        content = args.get('CodeContent', '')
                        if 'TAB VIEW: DEVICES LIST' in content:
                            print(f"Found it in step {step.get('step_index')}")
                            with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\full_app.jsx', 'w', 'utf-8') as out:
                                out.write(content)
        except Exception as e:
            pass

    for line in f:
        try:
            step = json.loads(line)
            if step.get('type') == 'TOOL_RESPONSE' and step.get('tool_responses'):
                for tr in step['tool_responses']:
                    output = tr.get('output', '')
                    if 'TAB VIEW: DEVICES LIST' in output:
                        print(f"Found it in response of step {step.get('step_index')}")
                        with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\full_app_response.txt', 'w', 'utf-8') as out:
                            out.write(output)
        except Exception as e:
            pass
