import pyautogui
import time

print("--- EMERGENCY DIRECT INJECT TEST ---")
print("I will attempt to press the Windows key in 3 seconds...")
time.sleep(3)
try:
    pyautogui.press('win')
    print("Action Sent: 'win' key pressed.")
    time.sleep(1)
    pyautogui.write("Word\n", interval=0.1)
    print("Action Sent: Typed 'Word' and Enter.")
except Exception as e:
    print(f"FAILED: {e}")
print("--- TEST COMPLETE ---")
