from collections import deque
from supervisor.config import config

class ContextBuffer:
    def __init__(self, maxlen=None):
        if maxlen is None:
            maxlen = config.max_memory_size
        self.buffer = deque(maxlen=maxlen)
        
    def add_event(self, action_data: dict, observation: str = None):
        """Adds an action and optional observation to the buffer."""
        # Support both 'action' (legacy) and 'action_type' (routine) keys
        action_type = action_data.get("action_type") or action_data.get("action", "unknown")
        # Build a fingerprint that distinguishes sequential routine steps
        fingerprint = {
            "action": action_type,
            "target": action_data.get("target_description") or action_data.get("target"),
            # For hotkeys, include the keys pressed; for type, include text hash
            "detail": str(action_data.get("keys", "")) or str(action_data.get("text_to_type", ""))[:32],
            "x": action_data.get("x"),
            "y": action_data.get("y"),
            "observation": observation
        }
        self.buffer.append(fingerprint)
        
    def is_looping(self) -> bool:
        """
        Detects if the agent is stuck repeating the EXACT same action
        (same type, same detail, same coordinates) 3 times in a row.
        Routine steps are always different (different detail), so they won't trigger.
        """
        if len(self.buffer) < 3:
            return False
            
        last_three = list(self.buffer)[-3:]
        first = last_three[0]
        return all(
            e["action"] == first["action"] and
            e["detail"] == first["detail"] and
            e["x"] == first["x"] and
            e["y"] == first["y"]
            for e in last_three
        )
        
    def get_history(self):
        return list(self.buffer)
        
    def clear(self):
        self.buffer.clear()
