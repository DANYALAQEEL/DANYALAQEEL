import winreg

try:
    reg_key = winreg.OpenKey(
        winreg.HKEY_CURRENT_USER,
        r"Software\Microsoft\Windows\CurrentVersion\Internet Settings"
    )
    proxy_enable, _ = winreg.QueryValueEx(reg_key, "ProxyEnable")
    proxy_server, _ = winreg.QueryValueEx(reg_key, "ProxyServer")
    print(f"ProxyEnable: {proxy_enable}")
    print(f"ProxyServer: {proxy_server}")
except Exception as e:
    print(f"Error reading proxy settings: {e}")
