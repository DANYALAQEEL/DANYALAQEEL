import json
import os
from pydantic import BaseModel
from typing import List

class AppConfig(BaseModel):
    scan_interval_seconds: float = 1.0
    confidence_threshold: float = 0.6
    action_delay_seconds: float = 0.2
    rate_limit_seconds: float = 1.0
    dry_run_mode: bool = False
    keywords: List[str] = ["DANYAL", "raqeel.bese24seecs", "Accept", "continue", "Allow", "Retry", "DANYALAQEEL", "Accept all", "Trust", "OK"]
    tesseract_cmd_path: str = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    log_dir: str = "logs"
    gemini_api_key: str = ""
    safe_apps: List[str] = ["Code", "Terminal", "Browser", "cmd", "powershell"]
    blocked_apps: List[str] = ["Slack", "Discord", "Telegram"]
    aoi_detection_enabled: bool = False
    max_memory_size: int = 5

def load_config(config_path="config.json") -> AppConfig:
    config_dict = {}
    if os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            config_dict = json.load(f)
    
    # Override with env vars
    if "GEMINI_API_KEY" in os.environ:
        config_dict['gemini_api_key'] = os.environ["GEMINI_API_KEY"]
        
    return AppConfig(**config_dict)

config = load_config()
