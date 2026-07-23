# Autonomous-Supervisor-Agent 🦾🚀

The **Autonomous-Supervisor-Agent** is a proactive, vision-based Robotic Process Automation (RPA) system. Unlike standard automation, it does not use APIs; it "sees" the screen using Computer Vision and AI, interacting with any software exactly like a human.

## 🏗️ Architecture & Routines

The agent is built on a **Modular Routine System**, allowing it to handle multiple background missions simultaneously:

*   **SystemRoutine:** High-priority missions defined in `tasks.json`. Currently handles complex UI flows like the **Chrome/Qalam Login Mission**.
*   **WakaTimeRoutine:** Generates realistic coding activity by dynamically typing code into selected files, ensuring consistent metrics.
*   **GitSyncRoutine:** Automatically manages the developer lifecycle by staging, committing, and pushing changes to GitHub at scheduled intervals.
*   **Perception Brain:** Uses **Gemini 1.5 Pro** for visual reasoning and **Tesseract OCR** for high-speed keyword detection.

## 🛠️ Recent Evolutions (Fixed & Enhanced)
- **Multi-Routine Engine:** Integrated System, WakaTime, and GitSync routines into a single unified agent loop.
- **FastAPI Supervisor:** Control the agent remotely via a REST API (`/api/toggle`, `/api/status`).
- **Bulletproof Vision:** Replaced unstable screen-capture drivers with a thread-safe `pyautogui` system.
- **Singleton Architecture:** Fixed "Split Personality" issues by ensuring only one agent loop can run.
- **Advanced Pathfinding:** Fixed internal pathing for `tasks.json` to ensure persistence across sessions.

## ✅ Pros & ❌ Cons

### Pros
- **Universal Compatibility:** Works with any software (Word, Chrome, Legacy Apps) because it uses vision, not APIs.
- **Proactive Interventions:** Automatically detects and handles "Accept," "Allow," and "Git Account" popups.
- **No Integration Required:** You don't need to configure plugins for Word or VS Code.
- **Human-Like:** Moves and types in a way that bypasses many automated detection systems.

### Cons
- **Resolution Dependent:** If you change your screen resolution drastically, it may need to "re-learn" UI positions.
- **Processing Latency:** Because it "thinks" using AI vision, there is a 1-2 second delay between actions.
- **Permission Intensive:** Requires Administrator rights to simulate keyboard/mouse across all system windows.

## 🎯 Proactive Targets
The agent is currently tuned to hunt for and automatically handle:
- **Git Accounts:** Selects `DANYALAQEEL` automatically.
- **Confirmations:** Clicks `Accept All`, `Allow`, `Retry`, and `Yes`.
- **Taskbar Alerts:** Scans the taskbar for flashing icons or popups.

## 🆘 Emergency Control
- **Press F12 or ESC:** Instantly terminates the agent loop and all inputs.
- **Supervisor API:** Use `http://localhost:8000/api/toggle` to pause/resume.
- **Failsafe:** Move mouse to the **Top-Left Corner** of the screen to trigger PyAutoGUI's built-in kill switch.
