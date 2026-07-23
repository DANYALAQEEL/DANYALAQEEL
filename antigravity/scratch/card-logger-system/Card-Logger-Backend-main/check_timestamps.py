import sys
sys.path.append('.')
from app.utils.database import SessionLocal
from sqlalchemy import text

db = SessionLocal()
try:
    rows = db.execute(text("SELECT id, cnic, timestamp, cam_id FROM timestamp ORDER BY timestamp DESC LIMIT 5")).all()
    for r in rows:
        print("timestamp row:", r)
except Exception as e:
    print("timestamp query failed:", e)
