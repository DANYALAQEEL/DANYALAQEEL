import pygetwindow as gw
import time
import os

log_file = r"c:\Users\Administrator\.gemini\antigravity\scratch\Autonomous-Supervisor-Agent\logs\window_check.txt"

print(f"Logging active window title to {log_file}")
print("Press Ctrl+C to stop.")

with open(log_file, "a") as f:
    f.write(f"\n--- Window Check Started at {time.ctime()} ---\n")

try:
    while True:
        try:
            window = gw.getActiveWindow()
            title = window.title if window else "None"
            timestamp = time.strftime("%H:%M:%S")
            log_msg = f"[{timestamp}] Active Window: {title}\n"
            
            with open(log_file, "a") as f:
                f.write(log_msg)
            
            print(log_msg.strip())
        except Exception as e:
            with open(log_file, "a") as f:
                f.write(f"Error: {str(e)}\n")
        
        time.sleep(2)
except KeyboardInterrupt:
    print("Stopped.")
