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
        if os.path.exists(path):
            return FileResponse(path, media_type='image/jpg')
        else:
            return {
                "status": False,
                "data": None,
                "msg": "Image not found"
            }   
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving Image: {str(e.args[0])}"
        }
    
@router.get("/image/{number_plate}")
async def get_image(request: Request, number_plate: str, db: Session = Depends(get_db)):
    
    try:
        path = get_img_path_by_number_plate(db, number_plate)
        if os.path.exists(path):
            return FileResponse(path, media_type='image/jpg')
        else:
            return {
                "status": False,
                "data": None,
                "msg": "Image not found"
            }
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving Image: {str(e.args[0])}"
        }