import time
import os
import threading
import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from supervisor.config import config
from supervisor.observer import capture_screen
from supervisor.change_detector import ChangeDetector
from supervisor.perception import PerceptionSystem
from supervisor.decision_engine import DecisionEngine
from supervisor.executor import Executor
from supervisor.routines import WakaTimeRoutine, GitSyncRoutine, SystemRoutine
import keyboard

# THE SOURCE OF TRUTH
agent_control = {"is_running": False, "started": False}

app = FastAPI(title="Supervisor API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections: self.active_connections.remove(websocket)
    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            try: await connection.send_json(message)
            except: pass

manager = ConnectionManager()

def rpa_loop():
    print("--- AGENT CONSCIOUSNESS ACTIVE ---", flush=True)
    detector = ChangeDetector()
    perception = PerceptionSystem()
    decision = DecisionEngine()
    wakatime = WakaTimeRoutine()
    gitsync = GitSyncRoutine()
    system_task = SystemRoutine()
    executor = Executor()
    last_action_time = 0
    
    while True:
        # EMERGENCY KILL SWITCH (F12 or ESC)
        try:
            if keyboard.is_pressed('f12') or keyboard.is_pressed('esc'):
                print("\n" + "!"*40)
                print("!!! EMERGENCY KILL SWITCH ACTIVATED !!!")
                print("!"*40 + "\n")
                agent_control["is_running"] = False
                time.sleep(1) # Debounce
        except:
            pass

        active = agent_control["is_running"]
        print(f"[HEARTBEAT] Running: {active}", flush=True)
        
        if not active:
            time.sleep(2)
            continue
            
        try:
            start_time = time.time()
            print("[HEARTBEAT] Attempting Vision...", flush=True)
            image = capture_screen()
            if image is None:
                print("[ERROR] Vision Null", flush=True)
                time.sleep(1)
                continue
            
            print("[HEARTBEAT] Evaluating mission status...", flush=True)
            action_data = None
            
            # 1. ALWAYS try to get a system action first
            system_action = system_task.get_next_action()
            print(f"[DEBUG] System Active: {system_task.is_active}, Action: {system_action.get('action_type')}", flush=True)
            
            if system_task.is_active:
                # We have an active mission!
                action_data = system_action
                target_desc = action_data.get("target_description")
                
                # If it's a CLICK without coordinates, ask Gemini to find it
                if action_data.get("action_type") == "click" and action_data.get("x") is None:
                    print(f"[AGENT] MISSION ACTIVE: Consulting AI to find '{target_desc}'...", flush=True)
                    ai_res = perception.analyze_with_ai(image, target_desc=target_desc)
                    if ai_res and ai_res.get("action_type") == "click":
                        action_data.update(ai_res)
                        print(f"[AGENT] AI FOUND TARGET: ({action_data.get('x')}, {action_data.get('y')})", flush=True)
                    else:
                        print(f"[AGENT] AI could not find '{target_desc}'. Pausing mission...", flush=True)
                        action_data = {"action_type": "wait", "seconds": 2}
            else:
                # 2. NO ACTIVE MISSION: Use AI for general guidance (popups, etc.)
                print("[AGENT] NO MISSION: Monitoring for popups/tasks...", flush=True)
                action_data = perception.analyze_with_ai(image)

            if action_data:
                a_type = action_data.get("action_type")
                
                if a_type == "wait":
                    # HANDLE WAIT STEPS: Pause and then advance
                    seconds = action_data.get("seconds", 2)
                    print(f"[AGENT] WAITING: {seconds}s for '{action_data.get('description', 'next step')}'...", flush=True)
                    time.sleep(seconds)
                    if system_task.is_active:
                        system_task.advance_step()
                else:
                    # EXECUTE OTHER ACTIONS
                    executor.execute(action_data, current_image=image)
                    last_action_time = time.time()
                    if system_task.is_active:
                        system_task.advance_step()
            else:
                # 3. FINAL FALLBACK: OCR for high-speed keywords
                ocr_action = perception.analyze_with_ocr(image)
                if ocr_action and ocr_action.get("action") == "click":
                    executor.execute({
                        "action_type": "click",
                        "x": ocr_action["x"], "y": ocr_action["y"],
                        "target_description": f"OCR Match: {ocr_action['target']}"
                    }, current_image=image)
                else:
                    print("[AGENT] status: IDLE/WAITING", flush=True)
            
            time.sleep(max(0.1, config.scan_interval_seconds - (time.time() - start_time)))
            
        except Exception as e:
            print(f"LOOP ERROR: {e}", flush=True)
            time.sleep(2)

@app.on_event("startup")
async def startup():
    if not agent_control["started"]:
        t = threading.Thread(target=rpa_loop, daemon=True)
        t.start()
        agent_control["started"] = True
        print("AGENT BOOT SEQUENCE COMPLETE", flush=True)

@app.post("/api/toggle")
async def toggle():
    agent_control["is_running"] = not agent_control["is_running"]
    print(f"TOGGLE -> {agent_control['is_running']}", flush=True)
    return {"is_running": agent_control["is_running"]}

@app.get("/api/status")
async def status():
    return {"is_running": agent_control["is_running"]}

@app.websocket("/ws/logs")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True: await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
