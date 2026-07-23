import socket
for host in ["cfsmartems.com", "www.cfsmartems.com"]:
    try:
        ip = socket.gethostbyname(host)
        print(f"{host} resolved to {ip}")
    except Exception as e:
        print(f"Failed to resolve {host}: {e}")
