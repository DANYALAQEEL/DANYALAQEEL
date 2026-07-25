import os
import json
import re
import datetime

def clean_content(text):
    if not text:
        return ""
    text = re.sub(r'<USER_REQUEST>\s*', '', text)
    text = re.sub(r'\s*</USER_REQUEST>', '', text)
    text = re.sub(r'<ADDITIONAL_METADATA>.*?</ADDITIONAL_METADATA>', '', text, flags=re.DOTALL)
    text = re.sub(r'<SYSTEM_MESSAGE>.*?</SYSTEM_MESSAGE>', '', text, flags=re.DOTALL)
    return text.strip()

def export_all_chats():
    base_dir = r"C:\Users\Administrator\.gemini"
    brain_dir = os.path.join(base_dir, "antigravity", "brain")
    output_dir = os.path.join(base_dir, "chat_history")
    os.makedirs(output_dir, exist_ok=True)

    if not os.path.exists(brain_dir):
        print("No brain directory found.")
        return

    conv_dirs = [d for d in os.listdir(brain_dir) if os.path.isdir(os.path.join(brain_dir, d))]
    print(f"[{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Exporting {len(conv_dirs)} chat session(s) to {output_dir}...")

    index_lines = [
        "# 📜 Antigravity Complete Chat History Index\n",
        "This directory contains full, readable Markdown backups of all prompts, responses, tool actions, and conversation sessions.\n\n",
        "## 📚 Saved Sessions\n"
    ]

    exported_count = 0
    for conv_id in conv_dirs:
        conv_path = os.path.join(brain_dir, conv_id)
        logs_dir = os.path.join(conv_path, ".system_generated", "logs")
        transcript_file = os.path.join(logs_dir, "transcript.jsonl")
        
        if not os.path.exists(transcript_file):
            continue

        md_filename = f"session_{conv_id[:8]}.md"
        md_filepath = os.path.join(output_dir, md_filename)

        entries = []
        user_prompts = []
        
        try:
            with open(transcript_file, "r", encoding="utf-8", errors="ignore") as f:
                for line in f:
                    if not line.strip():
                        continue
                    try:
                        data = json.loads(line)
                        step_type = data.get("type", "")
                        source = data.get("source", "")
                        content = data.get("content", "")
                        timestamp = data.get("timestamp", "")

                        if step_type == "USER_INPUT" or source == "USER_EXPLICIT":
                            cleaned = clean_content(content)
                            if cleaned:
                                summary_text = cleaned.split('\n')[0][:80]
                                user_prompts.append(summary_text)
                                entries.append(f"### 👤 USER ({timestamp or 'Message'})\n\n{cleaned}\n")

                        elif step_type == "PLANNER_RESPONSE" or source == "MODEL":
                            cleaned = clean_content(content)
                            tool_calls = data.get("tool_calls", [])
                            tool_summary = ""
                            if tool_calls:
                                tools_used = []
                                for tc in tool_calls:
                                    if isinstance(tc, dict):
                                        act = tc.get("toolAction") or tc.get("toolSummary") or tc.get("name")
                                        if act:
                                            tools_used.append(str(act))
                                if tools_used:
                                    tool_summary = f"*(Action: {', '.join(tools_used)})*\n\n"
                            
                            if cleaned or tool_summary:
                                entries.append(f"### 🤖 ANTIGRAVITY\n\n{tool_summary}{cleaned}\n")

                    except Exception:
                        continue
        except Exception as e:
            print(f"Error reading {transcript_file}: {e}")
            continue

        if entries:
            first_prompt = user_prompts[0] if user_prompts else f"Session {conv_id[:8]}"
            with open(md_filepath, "w", encoding="utf-8") as out_f:
                out_f.write(f"# Chat Session: {conv_id}\n\n")
                out_f.write(f"- **Session ID:** `{conv_id}`\n")
                out_f.write(f"- **Export Date:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                out_f.write(f"- **Total Exchanged Messages:** {len(entries)}\n\n")
                out_f.write("---\n\n")
                out_f.write("\n\n---\n\n".join(entries))

            relative_md = f"session_{conv_id[:8]}.md"
            index_lines.append(f"- [{first_prompt}](./{relative_md}) (`{conv_id}` - {len(entries)} turns)")
            exported_count += 1

    # Write Master Chat Index
    index_filepath = os.path.join(output_dir, "README.md")
    with open(index_filepath, "w", encoding="utf-8") as idx_f:
        idx_f.write("\n".join(index_lines))

    print(f"[SUCCESS] Exported {exported_count} session(s) into markdown files in {output_dir}")

if __name__ == "__main__":
    export_all_chats()
