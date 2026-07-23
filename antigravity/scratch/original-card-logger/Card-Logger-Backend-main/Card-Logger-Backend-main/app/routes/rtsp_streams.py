import cv2

from fastapi import APIRouter, Depends, HTTPException, Request, WebSocket
from fastapi.responses import FileResponse, StreamingResponse

from sqlalchemy.orm import Session
from app.cruds.camera import get_camera_url_by_id, get_camera_crop_by_id
from app.utils.database import get_db

from decouple import config

router = APIRouter()

FPS = 12

def generate(resolution=(640, 480), camera_url=None, crop=None):

    if crop is None:
        crop = (0, 0, resolution[0], resolution[1])
    else:
        crops = crop.split(",")
        crop = (int(crops[0]), int(crops[1]), int(crops[2]), int(crops[3]))
        
    startX, startY, width, height = crop

    cap = cv2.VideoCapture(camera_url)
    if not cap.isOpened():
        raise HTTPException(status_code=404, detail="Camera not found")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame =frame[startY:startY+height, startX:startX+width]
        frame = cv2.resize(frame, resolution)
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@router.get("/rtsp-stream/{camera_id}")
async def rtsp_stream(request: Request, camera_id: int, db: Session=Depends(get_db)):

    try:
        cam_url = get_camera_url_by_id(db, camera_id)
        cam_crop = get_camera_crop_by_id(db, camera_id)
        return StreamingResponse(generate(camera_url=cam_url, crop=cam_crop), media_type="multipart/x-mixed-replace; boundary=frame", headers={"FPS": str(FPS)})
    except Exception as e:
        raise HTTPException(status_code=404, detail="Camera not found")


@router.get("/rtsp-stream-hd")
async def rtsp_stream_hd(request: Request):
    return StreamingResponse(generate(resolution=(1920, 1080)), media_type="multipart/x-mixed-replace; boundary=frame", headers={"FPS": str(FPS)})