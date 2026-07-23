import pyautogui
from PIL import Image

def capture_screen():
    """Captures the primary monitor screen using the high-compatibility pyautogui method."""
    try:
        # PyAutoGUI is slower but 100% stable on Windows environments where mss hangs
        img = pyautogui.screenshot()
        # Ensure it's in RGB
        if img.mode != 'RGB':
            img = img.convert('RGB')
        return img
    except Exception as e:
        print(f"[ERROR] capture_screen failed: {e}", flush=True)
        return None
