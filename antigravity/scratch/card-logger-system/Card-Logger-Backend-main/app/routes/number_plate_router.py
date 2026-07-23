from fastapi import APIRouter, Depends, Request
from decouple import config

import os

from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.cruds.number_plate_timestamp import get_number_plate_timestamps_by_cam_id, get_latest_number_plate_timestamp_by_cam_id, get_img_path_by_number_plate

from app.utils.database import get_db

router = APIRouter()

@router.get("/cnic-timestamps/{camera_id}")
def get_num_plates_by_camera_id(request:Request, camera_id: int, db: Session = Depends(get_db)):
    
    try:
        number_plate_timestamps = get_number_plate_timestamps_by_cam_id(db, camera_id)
        data = []
        for number_plate_timestamp in number_plate_timestamps:
            data.append({
                "number_plate": number_plate_timestamp.number_plate,
                "timestamp": number_plate_timestamp.timestamp,
                "img_path": number_plate_timestamp.img_path,
            })
        
        return {
            "status": True,
            "data": data,
            "msg": "Number Plates retrieved successfully"
        }
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving Number Plates: {str(e.args[0])}"
        }

@router.get("/cnic-timestamp-latest/{camera_id}")
async def get_num_plate_latest(request:Request, camera_id: int, db: Session = Depends(get_db)):
    
    try:
        number_plate_timestamp = get_latest_number_plate_timestamp_by_cam_id(db, camera_id)
        data = {
            "number_plate": number_plate_timestamp.number_plate,
            "timestamp": number_plate_timestamp.timestamp,
            "img_path": number_plate_timestamp.img_path,
        }
        
        return {
            "status": True,
            "data": data,
            "msg": "Latest Number Plate retrieved successfully"
        }
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving Latest Number Plate: {str(e.args[0])}"
        }

@router.get("/latest-image/{camera_id}")
async def get_latest_image(request: Request, camera_id: int, db: Session = Depends(get_db)):
    
    try:
        number_plate_timestamp = get_latest_number_plate_timestamp_by_cam_id(db, camera_id)
        path = number_plate_timestamp.img_path
        if path and os.path.exists(path):
            return FileResponse(path, media_type='image/jpg')
    except Exception:
        pass
        
    # Return placeholder
    import numpy as np
    import cv2
    from fastapi.responses import Response
    img = np.zeros((150, 250, 3), dtype=np.uint8) + 240
    cv2.rectangle(img, (10, 10), (240, 140), (200, 200, 200), 1)
    cv2.putText(img, "ANPR IMAGE", (75, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (120, 120, 120), 1)
    cv2.putText(img, f"Camera {camera_id}", (20, 95), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (150, 150, 150), 1)
    _, buffer = cv2.imencode('.jpg', img)
    return Response(content=buffer.tobytes(), media_type="image/jpeg")
    
@router.get("/image/{number_plate}")
async def get_image(request: Request, number_plate: str, db: Session = Depends(get_db)):
    # Try direct file search first to support demo mode plates (e.g. plate_isl_2247.png)
    clean_plate = number_plate.lower().replace("-", "_")
    direct_path = f"number_plates/plate_{clean_plate}.png"
    if os.path.exists(direct_path):
        return FileResponse(direct_path, media_type='image/png')
    
    try:
        path = get_img_path_by_number_plate(db, number_plate)
        if path and os.path.exists(path):
            return FileResponse(path, media_type='image/jpg')
    except Exception:
        pass
        
    # Return placeholder
    import numpy as np
    import cv2
    from fastapi.responses import Response
    img = np.zeros((150, 250, 3), dtype=np.uint8) + 240
    cv2.rectangle(img, (10, 10), (240, 140), (200, 200, 200), 1)
    cv2.putText(img, "VEHICLE PLATE", (65, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (120, 120, 120), 1)
    cv2.putText(img, number_plate, (20, 95), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (150, 150, 150), 1)
    _, buffer = cv2.imencode('.jpg', img)
    return Response(content=buffer.tobytes(), media_type="image/jpeg")

# ---------------------------------------------------------------------------
# ADDITIVE — plate frequency by date range. The original "Number Plates
# Count" analytics page called this endpoint; it never existed in the
# backend. Response shape matches that page:
# [{number_plate, count, cam_id: [...], timestamp: [...]}]
# ---------------------------------------------------------------------------

import datetime
from fastapi import HTTPException
from app.models import NumberPlateTimestamp


@router.get("/number-plates-count")
def get_number_plates_count_route(start_date: str, end_date: str, db: Session = Depends(get_db)):
    try:
        start = datetime.datetime.strptime(start_date, "%Y-%m-%d")
        end = datetime.datetime.strptime(end_date, "%Y-%m-%d") + datetime.timedelta(days=1)

        rows = (
            db.query(NumberPlateTimestamp)
            .filter(NumberPlateTimestamp.timestamp >= start, NumberPlateTimestamp.timestamp < end)
            .order_by(NumberPlateTimestamp.timestamp.desc())
            .all()
        )

        grouped = {}
        for row in rows:
            entry = grouped.setdefault(
                row.number_plate,
                {"number_plate": row.number_plate, "count": 0, "cam_id": [], "timestamp": []},
            )
            entry["count"] += 1
            entry["cam_id"].append(row.cam_id)
            entry["timestamp"].append(row.timestamp.isoformat() if row.timestamp else "")

        return sorted(grouped.values(), key=lambda x: x["count"], reverse=True)
    except ValueError:
        raise HTTPException(status_code=422, detail="Dates must be YYYY-MM-DD")
