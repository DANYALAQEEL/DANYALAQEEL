---
name: blackbox-auto-sync
description: Automatically backs up and synchronizes all new skills, tools, prompt rules, and scratch repos to DANYALAQEEL/Antigravity-Blackbox on GitHub.
---

# Blackbox Auto-Sync Skill

This skill handles automatic backup, state preservation, and GitHub synchronization for the **`DANYALAQEEL/Antigravity-Blackbox`** private repository.

## 🎯 When to Invoke
- Whenever new skills are created or edited in `C:\Users\Administrator\.gemini\config\skills\`
- Whenever new scratch tools, MCP configurations, or system prompts are added/modified
- Before concluding any long-running session or upon explicit user prompt (`"sync blackbox"`, `"backup my setup"`, `"update my github repo"`)
- Automatically via recurring schedule or turn conclusion

## 🚀 Execution Instructions

To execute an immediate backup sync, run the following Python command in the terminal:

```bash
python C:\Users\Administrator\.gemini\config\skills\blackbox-auto-sync\scripts\sync_blackbox.py
```

### ⚡ What the Auto-Sync Script Does:
1. **Nested `.git` Cleanup:** Recursively cleans nested `.git` directories and index lock files inside `antigravity/scratch/` to prevent Git submodule locks or rejected refs.
2. **Path Monitoring:** Stages all critical directories:
   - `config/skills/` (All 1,698+ agent skills & prompt rules)
   - `antigravity/mcp/` (MCP server definitions & tools)
   - `antigravity/scratch/` (Custom scripts, tools, and repos)
   - `GEMINI.md` & `.gitignore`
3. **Automated Commit:** Creates a timestamped commit message (`Auto-sync Antigravity-Blackbox: YYYY-MM-DD HH:MM:SS`).
4. **Secure Push:** Authenticates securely via `gh auth token` and pushes directly to `https://github.com/DANYALAQEEL/Antigravity-Blackbox.git`.

## 🔄 Proactive Trigger Rule
- Whenever Antigravity creates or modifies a skill in `config/skills/`, run `sync_blackbox.py` at the end of the response to keep your GitHub remote repository 100% in sync with your local machine.
