import json
import os
import time

# Use absolute path to ensure tasks.json is found
TASKS_FILE = r"c:\Users\Administrator\.gemini\antigravity\scratch\Autonomous-Supervisor-Agent\supervisor\tasks.json"

class WakaTimeRoutine:
    def __init__(self):
        self.current_task = None
        self.step_index = 0
        self.completed_tasks_count = 0
        
    def _load_tasks(self):
        try:
            if os.path.exists(TASKS_FILE):
                with open(TASKS_FILE, "r") as f:
                    tasks = json.load(f)
                    print(f"[DEBUG] Loaded {len(tasks)} tasks from {TASKS_FILE}", flush=True)
                    return tasks
        except Exception as e:
            print(f"Error loading tasks: {e}")
        return []

    def _update_task_status(self, task_to_update, status):
        tasks = self._load_tasks()
        for t in tasks:
            # Check for matching file and content to update status
            if t.get("target_file") == task_to_update.get("target_file") and t.get("content_to_type") == task_to_update.get("content_to_type"):
                t["status"] = status
                break
        try:
            with open(TASKS_FILE, "w") as f:
                json.dump(tasks, f, indent=2)
        except Exception as e:
            print(f"Error updating task: {e}")

    def get_next_action(self) -> dict:
        """
        Returns the current step's action without advancing the index.
        Phase 1: Dynamic Task Ingestion logic.
        """
        if self.current_task is None:
            tasks = self._load_tasks()
            pending = [t for t in tasks if t.get("status") == "pending"]
            if not pending:
                return {"action_type": "wait", "seconds": 5, "thought_process": "No pending tasks in tasks.json."}
            self.current_task = pending[0]
            self.step_index = 0

        step = self.step_index

        if step == 0:
            return {
                "thought_process": f"Phase 1: Opening file finder for '{self.current_task['target_file']}'.",
                "action_type": "hotkey",
                "keys": ["ctrl", "p"],
                "target_description": "VS Code File Finder",
                "confidence": 1.0
            }
        elif step == 1:
            return {
                "thought_process": f"Typing target file: {self.current_task['target_file']}",
                "action_type": "type",
                "text_to_type": self.current_task['target_file'],
                "target_description": "File Finder Input",
                "confidence": 1.0
            }
        elif step == 2:
            return {
                "thought_process": "Opening selected file.",
                "action_type": "hotkey",
                "keys": ["enter"],
                "target_description": "File Finder Selection",
                "confidence": 1.0
            }
        elif step == 3:
            return {
                "thought_process": "Clearing existing file content (Ctrl+A).",
                "action_type": "hotkey",
                "keys": ["ctrl", "a"],
                "target_description": "Editor Select All",
                "confidence": 1.0
            }
        elif step == 4:
            return {
                "thought_process": "Deleting old content (Backspace).",
                "action_type": "hotkey",
                "keys": ["backspace"],
                "target_description": "Editor Clear",
                "confidence": 1.0
            }
        elif step == 5:
            return {
                "thought_process": "Typing new code content dynamically from tasks.json.",
                "action_type": "type",
                "text_to_type": self.current_task['content_to_type'],
                "target_description": "Code Editor",
                "confidence": 1.0
            }
        elif step == 6:
            return {
                "thought_process": "Saving changes (Ctrl+S).",
                "action_type": "hotkey",
                "keys": ["ctrl", "s"],
                "target_description": "Save Action",
                "confidence": 1.0
            }

        return {"action_type": "wait", "seconds": 2}

    def advance_step(self):
        """
        Call this ONLY after the action has been successfully executed.
        """
        self.step_index += 1
        if self.step_index > 6:  # Steps 0-6 complete
            if self.current_task:
                print(f"[WakaTime] Task complete: {self.current_task['target_file']}")
                self._update_task_status(self.current_task, "completed")
                self.completed_tasks_count += 1
            self.current_task = None
            self.step_index = 0

class GitSyncRoutine:
    def __init__(self):
        self.step_index = 0
        self.is_active = False
        self.last_sync_time = time.time()

    def get_next_action(self) -> dict:
        """
        Phase 2: Git Automation Routine.
        """
        step = self.step_index

        if step == 0:
            return {
                "thought_process": "Phase 2: Opening integrated terminal (Ctrl+`).",
                "action_type": "hotkey",
                "keys": ["ctrl", "`"],
                "target_description": "VS Code Terminal",
                "confidence": 1.0
            }
        elif step == 1:
            return {
                "thought_process": "Staging all changes: git add .",
                "action_type": "type",
                "text_to_type": "git add .\n",
                "target_description": "Terminal Input",
                "confidence": 1.0
            }
        elif step == 2:
            return {
                "thought_process": "Committing changes: git commit",
                "action_type": "type",
                "text_to_type": 'git commit -m "Automated AI code generation update"\n',
                "target_description": "Terminal Input",
                "confidence": 1.0
            }
        elif step == 3:
            return {
                "thought_process": "Pushing to origin main.",
                "action_type": "type",
                "text_to_type": "git push origin main\n",
                "target_description": "Terminal Input",
                "confidence": 1.0
            }
        elif step == 4:
            return {
                "thought_process": "Closing integrated terminal (Ctrl+`).",
                "action_type": "hotkey",
                "keys": ["ctrl", "`"],
                "target_description": "VS Code Terminal",
                "confidence": 1.0
            }

        return {"action_type": "wait", "seconds": 2}

    def advance_step(self):
        self.step_index += 1
        if self.step_index > 4:
            self.step_index = 0
            self.is_active = False
            self.last_sync_time = time.time()

    def _is_safe_app_focused(self, window_title: str) -> bool:
        safe_apps = [
            "Code", "Visual Studio Code", "Antigravity", "chess-engine-node", "Supervisor", 
            "Terminal", "Powershell", "cmd.exe", 
            "Word", "Document", "WinWord", "Start"
        ]
        return any(app.lower() in window_title.lower() for app in safe_apps)

class SystemRoutine:
    def __init__(self):
        self.current_task = None
        self.step_index = 0
        self.is_active = False

    def _load_tasks(self):
        try:
            if os.path.exists(TASKS_FILE):
                with open(TASKS_FILE, "r") as f:
                    return json.load(f)
        except Exception as e:
            print(f"Error loading tasks: {e}")
        return []

    def _update_task_status(self, task_to_update, status):
        tasks = self._load_tasks()
        for t in tasks:
            if t.get("id") == task_to_update.get("id"):
                t["status"] = status
                break
        try:
            with open(TASKS_FILE, "w") as f:
                json.dump(tasks, f, indent=2)
        except Exception as e:
            print(f"Error updating task: {e}")

    def get_next_action(self) -> dict:
        if self.current_task is None:
            tasks = self._load_tasks()
            pending = [t for t in tasks if t.get("status") == "pending" and t.get("type") == "system"]
            print(f"[DEBUG] Routine found {len(pending)} pending system tasks.", flush=True)
            if not pending:
                self.is_active = False
                return {"action_type": "wait", "seconds": 5}
            self.current_task = pending[0]
            print(f"[DEBUG] Activated Task: {self.current_task.get('id')}", flush=True)
            self.step_index = 0
            self.is_active = True

        steps = self.current_task.get("steps", [])
        if self.step_index >= len(steps):
            self._update_task_status(self.current_task, "completed")
            self.current_task = None
            self.is_active = False
            return {"action_type": "wait", "seconds": 2}

        return steps[self.step_index]

    def advance_step(self):
        if self.is_active:
            self.step_index += 1
