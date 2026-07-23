import os
from fastapi import APIRouter, Depends, Request
import cv2
from decouple import config

from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.cruds.cam_type import get_cam_types
from app.cruds.location import get_locations
from app.cruds.camera import create_camera, get_cameras, get_thumbnail_path, delete_camera, update_camera

from app.schemas.camera import CameraCreate


from app.utils.database import get_db

router = APIRouter()

@router.get("/temp-thumbnail")
async def get_camera_thumbnail(protocol: str, ip: str, username: str, password: str):

    # check if path exists
    if not os.path.exists(config('THUMBNAIL_PATH')):
        os.makedirs(config('THUMBNAIL_PATH'))

    # print("Getting camera thumbnail")
    url = f"{protocol}://{username}:{password}@{ip}"

    # get thumbnail image from camera
    cap = cv2.VideoCapture(url)
    ret, frame = cap.read()
    cap.release()
    
    if ret:
        cv2.imwrite(f"{config('THUMBNAIL_PATH')}/temp_thumbnail.jpg", frame)
        
        return FileResponse(f"{config('THUMBNAIL_PATH')}/temp_thumbnail.jpg", media_type='image/jpg')
    else:
        return {
            "status": False,
            "msg": "Failed to get thumbnail",
            "data": None
        }

@router.get("/types")
async def get_camera_types(db: Session = Depends(get_db)):
    camera_types = get_cam_types(db)

    if camera_types:
        return {
            "status": True,
            "msg": "Camera Types",
            "data": camera_types
        }
    
    return {
        "status": False,
        "msg": "No camera types found",
        "data": None
    }

@router.get("/resolution")
async def get_camera_resolution(protocol: str, ip: str, username: str, password: str):
    url = f"{protocol}://{username}:{password}@{ip}"
    cap = cv2.VideoCapture(url)
    width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
    height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

    print(width, height)

    cap.release()

    return {
        "status": True,
        "msg": "Camera Resolution",
        "data": {
            "width": width,
            "height": height
        }
    }

@router.get("/fps")
async def get_camera_fps(protocol: str, ip: str, username: str, password: str):
    url = f"{protocol}://{username}:{password}@{ip}"
    cap = cv2.VideoCapture(url)
    fps = cap.get(cv2.CAP_PROP_FPS)
    cap.release()

    return {
        "status": True,
        "msg": "Camera FPS",
        "data": {
            "fps": fps
        }
    }

@router.post("/save")
async def save_camera_settings(request: Request, db: Session = Depends(get_db)):
    data = await request.json()

    name = data['name']
    type = data['type']
    url = f"{data['protocol']}://{data['username']}:{data['password']}@{data['ip']}"
    location_id = data['location_id']
    startX = data['cropValues']['startX']
    startY = data['cropValues']['startY']
    width = data['cropValues']['width']
    height = data['cropValues']['height']

    print(url)

    # round off the values to int
    startX = int(startX)
    startY = int(startY)
    width = int(width)
    height = int(height)

    crop = f"{startX},{startY},{width},{height}"

    frame = None

    try:
        # check if path exists
        if not os.path.exists(config('THUMBNAIL_PATH')):
            os.makedirs(config('THUMBNAIL_PATH'))
        
        # get thumbnail image from camera
        # try 3 times to get the frame from camera
        cap = cv2.VideoCapture(url)
        ret, frame = cap.read()
        cap.release()


        if ret and frame is not None:
            print("Frame shape: ", frame.shape)
            print("Crop values: ", startX, startY, width, height)
            print("Crop values: ", startX+width, startY+height)
            if startY+height > frame.shape[0]:
                frame[startX:startX+width, startY:startY+height]
            else:
                frame = frame[startY:startY+height, startX:startX+width]
            print("Frame shape: ", frame.shape)
        else:
            return {
                "status": False,
                "msg": "Failed to get camera thumbnail",
                "data": "Camera didn't return any frame"
            }
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to get camera thumbnail",
            "data": str(e)
        }

    camera = CameraCreate(
        name=name,
        type=type,
        location_id=location_id,
        cam_url=url,
        crop=crop
    )

    try:
        camera = create_camera(db, camera)
        camera.thumbnail_path = f"{config('THUMBNAIL_PATH')}/{camera.id}.jpg"
        cv2.imwrite(camera.thumbnail_path, frame)
        db.commit()
        db.refresh(camera)

        return {
            "status": True,
            "msg": "Camera saved successfully",
            "data": camera
        }
    except Exception as e:
        # remove the camera if failed to save
        db.delete(camera)
        db.commit()
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to save camera",
            "data": str(e)
        }

@router.get("/locations")
async def get_camera_locations(db: Session = Depends(get_db)):
    
    return {
        "status": True,
        "msg": "Camera Locations",
        "data": get_locations(db)
    }

@router.get("/all")
async def get_all_cameras(db: Session = Depends(get_db)):
    
    try:
        cameras = get_cameras(db)

        formatted_cameras = [
            {
                "id": camera.id,
                "name": camera.name,
                "type": camera.type,
                "location": camera.location.description,
                "crop": camera.crop,
                "cam_url": camera.cam_url,
                "thumbnail_path": camera.thumbnail_path
            }
            for camera in cameras
        ]

        return {
            "status": True,
            "msg": "Cameras",
            "data": formatted_cameras
        }
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to get cameras",
            "data": str(e)
        }
    
@router.get("/thumbnail/{camera_id}")
async def get_camera_thumbnail(camera_id: int, db: Session = Depends(get_db)):
    
    try:
        thumbnail_path = get_thumbnail_path(db, camera_id)
        return FileResponse(thumbnail_path, media_type='image/jpg')
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to get thumbnail",
            "data": str(e)
        }
    
@router.delete("/delete/{camera_id}")
async def delete_camera_route(camera_id: int, db: Session = Depends(get_db)):
    
    try:
        camera = delete_camera(db, camera_id)
        
        return {
            "status": True,
            "msg": "Camera deleted successfully",
            "data": camera
        }
    
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to delete camera",
            "data": str(e)
        }
    
@router.put("/update/{camera_id}")
async def update_camera_route(request: Request, camera_id: int, db: Session = Depends(get_db)):

    data = await request.json()
    
    name = data['name']
    url = f"{data['protocol']}://{data['username']}:{data['password']}@{data['ip']}"
    startX = data['cropValues']['startX']
    startY = data['cropValues']['startY']
    width = data['cropValues']['width']
    height = data['cropValues']['height']

    # round off the values to int
    startX = int(startX)
    startY = int(startY)
    width = int(width)
    height = int(height)

    crop = f"{startX},{startY},{width},{height}"

    frame = None

    try:
        # check if path exists
        if not os.path.exists(config('THUMBNAIL_PATH')):
            os.makedirs(config('THUMBNAIL_PATH'))
        
        # get thumbnail image from camera
        # try 3 times to get the frame from camera
        cap = cv2.VideoCapture(url)
        ret, frame = cap.read()
        cap.release()


        if ret and frame is not None:
            print("Frame shape: ", frame.shape)
            print("Crop values: ", startX, startY, width, height)
            print("Crop values: ", startX+width, startY+height)
            if startY+height > frame.shape[0]:
                frame[startX:startX+width, startY:startY+height]
            else:
                frame = frame[startY:startY+height, startX:startX+width]
            print("Frame shape: ", frame.shape)
        else:
            return {
                "status": False,
                "msg": "Failed to get camera thumbnail",
                "data": "Camera didn't return any frame"
            }
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to get camera thumbnail",
            "data": str(e)
        }
    
    try:
        camera = update_camera(db, camera_id, name, crop)
        camera.thumbnail_path = f"{config('THUMBNAIL_PATH')}/{camera.id}.jpg"
        cv2.imwrite(camera.thumbnail_path, frame)
        db.commit()
        db.refresh(camera)

        return {
            "status": True,
            "msg": "Camera updated successfully",
            "data": camera
        }
    except Exception as e:
        print(str(e))
        return {
            "status": False,
            "msg": "Failed to update camera",
            "data": str(e)
        }