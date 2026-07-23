import time
import random
import sys
#testing my new git readme.md
def boot_system_matrix():
    print("[INIT] Connecting to global telemetry nodes...")
    time.sleep(1)
    
    nodes = ["alpha", "beta", "gamma", "delta", "omega"]
    for node in nodes:
        latency = random.randint(10, 85)
        status = "OPERATIONAL" if latency < 80 else "DEGRADED"
        color = "\033[92m" if status == "OPERATIONAL" else "\033[93m"
        reset = "\033[0m"
        
        print(f"[+] Ping Node-{node.upper()}: Latency {latency}ms -> {color}{status}{reset}")
        time.sleep(0.5)

def run_resilience_loop():
    print("\n[START] Initiating self-healing listener...")
    try:
        while True:
            anomaly = random.random()
            if anomaly > 0.85:
                print("\033[91m[WARNING!!!] Sub-system desync detected! Rerouting logic...\033[0m")
                time.sleep(1)
                print("\033[92m[✓] Sync restored. System healed.\033[0m")
            else:
                sys.stdout.write(".")
                sys.stdout.flush()
            time.sleep(1.5)
    except KeyboardInterrupt:
        print("\n[!] Force exit detected. Shutting down system matrix.")

if __name__ == "__main__":
    boot_system_matrix()
    run_resilience_loop()
