import pyautogui
import time
import random
import os
import asyncio
from datetime import datetime
from PIL import Image

from supervisor.config import config

pyautogui.FAILSAFE = True

class Executor:
    def __init__(self, log_callback=None):
        os.makedirs(config.log_dir, exist_ok=True)
        self.log_callback = log_callback
        
    def log_action(self, action_data: dict):
        timestamp = datetime.now().isoformat()
        log_entry = f"{timestamp} - Executed: {action_data}\n"
        with open(os.path.join(config.log_dir, "action_log.txt"), "a") as f:
            f.write(log_entry)
            
        if self.log_callback:
            try:
                reasoning = action_data.get('reasoning', 'No reasoning provided.')
                action = action_data.get('action')
                target = action_data.get('target', 'N/A')
                msg = f"THOUGHT: {reasoning} | ACTION: {action} on '{target}'"
                self.log_callback(msg)
            except Exception as e:
                pass

    def _natural_move(self, x, y):
        """Moves the mouse in a more human-like manner."""
        # Add slight jitter to destination
        dest_x = x + random.randint(-2, 2)
        dest_y = y + random.randint(-2, 2)
        
        # Use a random duration
        duration = random.uniform(0.4, 0.9)
        
        # Randomly pick a tweening function
        tweens = [pyautogui.easeInOutQuad, pyautogui.easeInQuad, pyautogui.easeOutQuad, pyautogui.easeInOutSine]
        chosen_tween = random.choice(tweens)
        
        pyautogui.moveTo(dest_x, dest_y, duration=duration, tween=chosen_tween)

    def type_text(self, text: str):
        """Types text with a human-like typing delay."""
        print(f"Typing: {text}")
        # interval between 0.05 and 0.15 as requested to avoid detection
        pyautogui.write(text, interval=random.uniform(0.05, 0.15))

    def hotkey(self, keys: list):
        """Presses a combination of keys."""
        print(f"Hotkey: {keys}")
        pyautogui.hotkey(*keys)

    def execute(self, action_data: dict, current_image: Image.Image = None):
        # Use action_type as per v2 request
        action = action_data.get("action_type") or action_data.get("action")
        
        if config.dry_run_mode:
            print(f"[DRY RUN] Would execute: {action_data}")
            if self.log_callback:
                try: 
                    self.log_callback(f"[DRY RUN] Would execute {action} on {action_data.get('target_description', 'N/A')}")
                except Exception: 
                    pass
            return
            
        if current_image:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            current_image.save(os.path.join(config.log_dir, f"pre_action_{timestamp}.png"))

        if action == "click":
            x, y = action_data.get("x"), action_data.get("y")
            target_desc = action_data.get("target_description", "unknown target")
            
            # AI FALLBACK: If coordinates are missing, use AI to find the target_description
            if (x is None or y is None) and current_image:
                from supervisor.perception import PerceptionSystem
                perception = PerceptionSystem()
                print(f"[Executor] Missing coordinates for '{target_desc}'. Triggering AI Vision fallback...")
                ai_action = perception.analyze_with_ai(current_image, target_desc=target_desc)
                if ai_action and ai_action.get("action_type") == "click":
                    x, y = ai_action.get("x"), ai_action.get("y")
                    print(f"[Executor] AI Vision resolved '{target_desc}' to ({x}, {y})")
            
            if x is not None and y is not None:
                print(f"Clicking at ({x}, {y})...")
                self._natural_move(x, y)
                time.sleep(config.action_delay_seconds)
                pyautogui.click()
            else:
                print(f"[Executor] ERROR: Could not resolve coordinates for '{target_desc}'")
            
        elif action == "type":
            text = action_data.get("text_to_type") or action_data.get("key_sequence") or action_data.get("text")
            if text:
                self.type_text(text)
                
        elif action == "hotkey":
            keys = action_data.get("keys") or action_data.get("key_sequence")
            if isinstance(keys, str):
                keys = keys.split("+")
            if keys:
                self.hotkey(keys)
        
        elif action == "scroll":
            amount = action_data.get("scroll_amount") or action_data.get("amount", -500)
            pyautogui.scroll(int(amount))

        elif action == "wait":
            seconds = action_data.get("seconds", 2)
            time.sleep(seconds)
            
        self.log_action(action_data)
