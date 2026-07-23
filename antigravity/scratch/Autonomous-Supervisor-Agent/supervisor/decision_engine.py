import pyautogui
import re
import numpy as np
from supervisor.config import config
from supervisor.memory import ContextBuffer

class DecisionEngine:
    def __init__(self):
        pyautogui.FAILSAFE = True # Enable failsafe: move mouse to TOP-LEFT corner to kill agent
        self.screen_width, self.screen_height = pyautogui.size()
        self.memory = ContextBuffer()
        self._last_pixels = None
        self.failed_coords = {} # (x, y) -> last_failed_time
        
    def validate_action(self, action_data: dict) -> bool:
        if not action_data:
            return False
            
        action = action_data.get("action_type") or action_data.get("action")
        if action in ["none", "wait"]:
            return False
            
        confidence = action_data.get("confidence", 0.0)
        if confidence < config.confidence_threshold:
            print(f"[Decision] Rejected: Low confidence ({confidence})")
            return False
            
        # 1. Loop Detection
        if self.memory.is_looping():
            print(f"[Decision] Rejected: Loop detected. Agent is repeating the same action.")
            return False

        # 2. Coordinate Validation
        if action == "click":
            x, y = action_data.get("x"), action_data.get("y")
            if x is None or y is None:
                return False
            if x < 0 or x >= self.screen_width or y < 0 or y >= self.screen_height:
                print(f"[Decision] Rejected: Coordinates out of bounds ({x}, {y})")
                return False
                
            # Check for backoff
            coord = (x, y)
            if coord in self.failed_coords:
                if time.time() - self.failed_coords[coord] < 120: # 2 minute backoff
                    print(f"[Decision] Rejected: Coordinate {coord} is in backoff (static text detected).")
                    return False
                else:
                    del self.failed_coords[coord]
        
        # 3. String Validation (Security)
        if action == "type":
            text = action_data.get("text_to_type") or action_data.get("key_sequence") or action_data.get("text", "")
            # Basic sensitive data check
            if re.search(r'api[_-]?key|password|secret|token', text, re.I):
                print(f"[Decision] Rejected: Potentially sensitive data detected in type sequence.")
                return False

        # 4. IDE/Terminal Safety Check
        # Ensure we are typing into an approved context
        target_desc = action_data.get("target_description", "").lower()
        if action == "type":
            approved_keywords = ["vs code", "terminal", "editor", "code", "input", "finder", "comment", "word", "winword", "start"]
            if not any(kw in target_desc for kw in approved_keywords):
                print(f"[Decision] Rejected: Typing into unverified target context: '{target_desc}'")
                return False
        
        print(f"[Decision] Approved action: {action}")
        self.memory.add_event(action_data)
        return True

    def check_progress(self, current_image) -> bool:
        """
        Progress Monitor: Checks if the screen pixels actually changed after an action.
        """
        if current_image is None:
            return True
            
        # Downsample image for faster comparison
        curr_pixels = np.array(current_image.resize((100, 100)))
        
        if self._last_pixels is not None:
            # Calculate difference
            diff = np.sum(np.abs(curr_pixels - self._last_pixels))
            # threshold for change (empirical)
            if diff < 1000:  # Very little change
                print("[Decision] Progress Monitor: No significant screen change detected.")
                
                # If the last action was a click, mark these coords as failed
                last_action = self.memory.get_last_event()
                if last_action and last_action.get("action_type") == "click":
                    x, y = last_action.get("x"), last_action.get("y")
                    if x is not None and y is not None:
                        self.failed_coords[(x, y)] = time.time()
                
                return False
        
        self._last_pixels = curr_pixels
        return True
