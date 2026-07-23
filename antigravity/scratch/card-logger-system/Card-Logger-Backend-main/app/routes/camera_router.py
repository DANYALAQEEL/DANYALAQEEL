import os
from fastapi import APIRouter, Depends, Request, Response
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

def open_camera_capture(source_type: str, device_index: int = None,
                         protocol: str = None, ip: str = None,
                         username: str = None, password: str = None):
    """
    Returns (cv2.VideoCapture object, cam_url_string_to_store)

    source_type must be exactly "local" or "network".
    - "local": opens a laptop/USB webcam by device index (0, 1, 2...)
    - "network": opens an RTSP/HTTP IP camera (existing behavior, unchanged)
    """
    if source_type == "local":
        if device_index is None:
            raise ValueError("device_index is required when source_type is 'local'")
        cap = cv2.VideoCapture(int(device_index), cv2.CAP_DSHOW)
        cam_url_to_store = str(int(device_index))  # store as plain digit string, e.g. "0"
        return cap, cam_url_to_store
    elif source_type == "network":
        url = f"{protocol}://{username}:{password}@{ip}"
        cap = cv2.VideoCapture(url)
        return cap, url
    else:
        raise ValueError(f"Invalid source_type: {source_type}. Must be 'local' or 'network'.")

@router.get("/temp-thumbnail")
async def get_camera_thumbnail(
    source_type: str,
    protocol: str = None,
    ip: str = None,
    username: str = None,
    password: str = None,
    device_index: int = None,
):
    if not os.path.exists(config('THUMBNAIL_PATH')):
        os.makedirs(config('THUMBNAIL_PATH'))

    try:
        cap, _ = open_camera_capture(
            source_type=source_type,
            device_index=device_index,
            protocol=protocol, ip=ip, username=username, password=password,
        )
    except ValueError as e:
        return {"status": False, "msg": str(e), "data": None}

    ret, frame = cap.read()
    cap.release()

    if ret:
        cv2.imwrite(f"{config('THUMBNAIL_PATH')}/temp_thumbnail.jpg", frame)
        return FileResponse(f"{config('THUMBNAIL_PATH')}/temp_thumbnail.jpg", media_type='image/jpg')
    else:
        return {"status": False, "msg": "Failed to get thumbnail", "data": None}

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
async def get_camera_resolution(
    source_type: str,
    protocol: str = None,
    ip: str = None,
    username: str = None,
    password: str = None,
    device_index: int = None,
):
    try:
        cap, _ = open_camera_capture(
            source_type=source_type,
            device_index=device_index,
            protocol=protocol, ip=ip, username=username, password=password,
        )
    except ValueError as e:
        return {"status": False, "msg": str(e), "data": None}

    width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
    height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)
    cap.release()

    return {"status": True, "msg": "Camera Resolution", "data": {"width": width, "height": height}}

@router.get("/fps")
async def get_camera_fps(
    source_type: str,
    protocol: str = None,
    ip: str = None,
    username: str = None,
    password: str = None,
    device_index: int = None,
):
    try:
        cap, _ = open_camera_capture(
            source_type=source_type,
            device_index=device_index,
            protocol=protocol, ip=ip, username=username, password=password,
        )
    except ValueError as e:
        return {"status": False, "msg": str(e), "data": None}

    fps = cap.get(cv2.CAP_PROP_FPS)
    cap.release()

    return {"status": True, "msg": "Camera FPS", "data": {"fps": fps}}

@router.post("/save")
async def save_camera_settings(request: Request, db: Session = Depends(get_db)):
    data = await request.json()

    name = data['name']
    type = data['type']
    location_id = data['location_id']
    source_type = data['source_type']

    try:
        cap_probe, url = open_camera_capture(
            source_type=source_type,
            device_index=data.get('device_index'),
            protocol=data.get('protocol'), ip=data.get('ip'),
            username=data.get('username'), password=data.get('password'),
        )
        cap_probe.release()
    except ValueError as e:
        return {"status": False, "msg": str(e), "data": None}

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
        cap, _ = open_camera_capture(
            source_type=source_type,
            device_index=data.get('device_index'),
            protocol=data.get('protocol'), ip=data.get('ip'),
            username=data.get('username'), password=data.get('password'),
        )
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

    db_camera = CameraCreate(
        name=name,
        type=type,
        location_id=location_id,
        cam_url=url,
        crop=crop
    )

    try:
        camera_model = create_camera(db, db_camera)
        camera_model.thumbnail_path = f"{config('THUMBNAIL_PATH')}/{camera_model.id}.jpg"
        cv2.imwrite(camera_model.thumbnail_path, frame)
        db.commit()
        db.refresh(camera_model)

        return {
            "status": True,
            "msg": "Camera saved successfully",
            "data": camera_model
        }
    except Exception as e:
        try:
            db.rollback()
        except:
            pass
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
        if thumbnail_path and os.path.exists(thumbnail_path):
            return FileResponse(thumbnail_path, media_type='image/jpg')
    except Exception as e:
        print(f"Error getting thumbnail for camera {camera_id}: {str(e)}")
    
    # Fallback to temp_thumbnail.jpg or a placeholder if file does not exist
    fallback_path = f"{config('THUMBNAIL_PATH')}/temp_thumbnail.jpg"
    if os.path.exists(fallback_path):
        return FileResponse(fallback_path, media_type='image/jpg')
    
    # Return a blank 1x1 pixel image to prevent broken images entirely
    return Response(
        content=b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x01\x00`\x00`\x00\x00\xff\xdb\x00C\x00\x08\x06\x06\x07\x06\x05\x08\x07\x07\x07\t\t\x08\n\x0c\x14\r\x0c\x0b\x0b\x0c\x19\x12\x13\x0f\x14\x1d\x1a\x1f\x1e\x1d\x1a\x1c\x1c $.' \",#\x1c\x1c(7),01444\x1f'9=82<.342\xff\xc0\x00\x0b\x08\x00\x01\x00\x01\x01\x01\x11\x01\xff\xc4\x00\x1f\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xda\x00\x08\x01\x01\x00\x00?\x00\x37\xff\xd9",
        media_type="image/jpeg"
    )
    
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
    source_type = data['source_type']

    try:
        cap, url = open_camera_capture(
            source_type=source_type,
            device_index=data.get('device_index'),
            protocol=data.get('protocol'), ip=data.get('ip'),
            username=data.get('username'), password=data.get('password'),
        )
    except ValueError as e:
        return {"status": False, "msg": str(e), "data": None}

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

# ---------------------------------------------------------------------------
# ADDITIVE ENDPOINTS — nothing above this line was modified.
# ---------------------------------------------------------------------------

from fastapi import HTTPException

from app.schemas.location import LocationCreateRequest
from app.models import Camera as CameraModel


@router.get("/get-camera-names")
async def get_camera_names(db: Session = Depends(get_db)):
    """Camera id→name lookup. The original CNIC Count / Number Plates Count
    analytics pages called this endpoint; it never existed in the backend.
    Response shape matches those pages: a raw list of
    {cam_id, cam_name} objects."""
    cameras = db.query(CameraModel).all()
    return [{"cam_id": cam.id, "cam_name": cam.name} for cam in cameras]


@router.post("/location/save")
async def save_location(location: LocationCreateRequest, db: Session = Depends(get_db)):
    """Create a location. The backend always had the `create_location` CRUD
    function but no route exposed it, and the frontend's Add Location page
    was an empty stub in both versions. This endpoint makes the page real.
    `coords` is stored as the existing model's string column ("lat,lng")."""
    try:
        if not location.description or not location.description.strip():
            raise HTTPException(status_code=422, detail="description is required")
        from app.models import Location as LocationModel
        db_location = LocationModel(coords=location.coords or "", description=location.description.strip())
        db.add(db_location)
        db.commit()
        db.refresh(db_location)
        return {
            "status": True,
            "data": {
                "id": db_location.id,
                "coords": db_location.coords,
                "description": db_location.description,
            },
            "msg": "Location created",
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create location: {str(e)}")
