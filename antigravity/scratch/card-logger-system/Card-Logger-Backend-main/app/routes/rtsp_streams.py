import cv2
import numpy as np
import time

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

    try:
        # If camera_url is a numeric string (e.g. "0"), convert to integer index
        if camera_url is not None and str(camera_url).isdigit():
            camera_url = int(camera_url)
    except ValueError:
        pass

    if isinstance(camera_url, int):
        cap = cv2.VideoCapture(camera_url, cv2.CAP_DSHOW)
    else:
        cap = cv2.VideoCapture(camera_url)
    use_fallback = not cap.isOpened()
    frame_counter = 0
    try:
        while True:
            if not use_fallback:
                ret, frame = cap.read()
                if not ret:
                    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
                    ret, frame = cap.read()
                    if not ret:
                        use_fallback = True
                        
            if use_fallback:
                # Generate a nice premium simulator frame
                frame = np.zeros((480, 640, 3), dtype=np.uint8)
                # Add some dark futuristic grid lines
                for y in range(0, 480, 40):
                    cv2.line(frame, (0, y), (640, y), (30, 20, 20), 1)
                for x in range(0, 640, 40):
                    cv2.line(frame, (x, 0), (x, 480), (30, 20, 20), 1)
                
                # Add a scanning laser line animation
                laser_y = (frame_counter * 8) % 480
                cv2.line(frame, (0, laser_y), (640, laser_y), (0, 0, 255), 2)
                cv2.line(frame, (0, laser_y - 2), (640, laser_y - 2), (0, 0, 150), 1)
                
                # Draw a simulated targeting box
                cv2.rectangle(frame, (180, 100), (460, 380), (0, 255, 0), 2)
                bracket_len = 20
                # Top-left
                cv2.line(frame, (180, 100), (180 + bracket_len, 100), (0, 255, 0), 4)
                cv2.line(frame, (180, 100), (180, 100 + bracket_len), (0, 255, 0), 4)
                # Top-right
                cv2.line(frame, (460, 100), (460 - bracket_len, 100), (0, 255, 0), 4)
                cv2.line(frame, (460, 100), (460, 100 + bracket_len), (0, 255, 0), 4)
                # Bottom-left
                cv2.line(frame, (180, 380), (180 + bracket_len, 380), (0, 255, 0), 4)
                cv2.line(frame, (180, 380), (180, 380 - bracket_len), (0, 255, 0), 4)
                # Bottom-right
                cv2.line(frame, (460, 380), (460 - bracket_len, 380), (0, 255, 0), 4)
                cv2.line(frame, (460, 380), (460, 380 - bracket_len), (0, 255, 0), 4)

                # Draw status text
                cv2.putText(frame, "GATEHOUSE CAMERA SIMULATOR", (30, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
                cv2.putText(frame, "STATUS: ACTIVE - NO HARDWARE DETECTED", (30, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 165, 255), 1)
                cv2.putText(frame, "PLACE CNIC CARD IN SCAN AREA", (200, 370), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 255, 0), 1)
                
                # Show a blinking dot
                if (frame_counter // 5) % 2 == 0:
                    cv2.circle(frame, (600, 40), 8, (0, 0, 255), -1)
                    cv2.putText(frame, "REC", (540, 45), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 1)
                
                frame_counter += 1
                time.sleep(0.08) # ~12 FPS
                
            frame = frame[startY:startY+height, startX:startX+width]
            frame = cv2.resize(frame, resolution)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    finally:
        cap.release()

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