import os
import json
import subprocess

def setup_settings():
    code_user_dir = r"C:\Users\Administrator\AppData\Roaming\Code\User"
    os.makedirs(code_user_dir, exist_ok=True)
    
    settings_path = os.path.join(code_user_dir, "settings.json")
    
    # Standard modern developer configuration
    default_settings = {
        "editor.fontSize": 14,
        "editor.fontFamily": "'Cascadia Code', 'Consolas', 'Courier New', monospace",
        "editor.fontLigatures": True,
        "editor.tabSize": 2,
        "editor.insertSpaces": True,
        "editor.formatOnSave": True,
        "editor.minimap.enabled": False,
        "workbench.colorTheme": "Default Dark Modern",
        "files.autoSave": "afterDelay",
        "terminal.integrated.defaultProfile.windows": "PowerShell",
        "telemetry.telemetryLevel": "off"
    }
    
    # If settings.json already exists, update it instead of overwriting entirely
    existing_settings = {}
    if os.path.exists(settings_path):
        try:
            with open(settings_path, 'r', encoding='utf-8') as f:
                existing_settings = json.load(f)
        except Exception:
            pass
            
    existing_settings.update(default_settings)
    
    with open(settings_path, 'w', encoding='utf-8') as f:
        json.dump(existing_settings, f, indent=4)
    print(f"VS Code settings successfully written to {settings_path}")

def install_extensions():
    code_bin = r"C:\Users\Administrator\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd"
    if not os.path.exists(code_bin):
        print(f"VS Code command line tool not found at {code_bin}")
        return
        
    extensions = [
        "ms-python.python",      # Python support
        "esbenp.prettier-vscode" # Code formatter
    ]
    
    for ext in extensions:
        print(f"Installing extension {ext}...")
        try:
            result = subprocess.run([code_bin, "--install-extension", ext], capture_output=True, text=True)
            print(result.stdout)
            if result.stderr:
                print(result.stderr)
        except Exception as e:
            print(f"Failed to install extension {ext}: {e}")

if __name__ == "__main__":
    setup_settings()
    install_extensions()
