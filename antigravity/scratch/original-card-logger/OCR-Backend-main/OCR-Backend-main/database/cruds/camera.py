from sqlalchemy.orm import Session
from database.models import Camera
from database.schemas import CameraCreate

def get_cameras(db: Session, skip: int = 0):
    return db.query(Camera).offset(skip).all()

def create_camera(db: Session, camera: CameraCreate):
    db_camera = Camera(**camera.model_dump())
    db.add(db_camera)
    db.commit()
    db.refresh(db_camera)

    return db_camera

def get_camera_by_id(db: Session, camera_id: int):
    return db.query(Camera).filter(Camera.id == camera_id).first()

def get_total_cameras_count(db: Session):
    return db.query(Camera).count()

def get_cameras_by_location(db: Session, location_id: int):
    return db.query(Camera).filter(Camera.location == location_id).all()

def get_thumbnail_path(db: Session, camera_id: int):
    camera = db.query(Camera).filter(Camera.id == camera_id).first()
    return camera.thumbnail_path

def get_camera_url_by_id(db: Session, camera_id: int):
    camera = db.query(Camera).filter(Camera.id == camera_id).first()
    return camera.cam_url

def get_camera_crop_by_id(db: Session, camera_id: int):
    camera = db.query(Camera).filter(Camera.id == camera_id).first()
    return camera.crop

def delete_camera(db: Session, camera_id: int):
    camera = db.query(Camera).filter(Camera.id == camera_id).first()
    db.delete(camera)
    db.commit()
    return camera

def update_camera(db: Session, camera_id: int, name, crop):
    db_camera = db.query(Camera).filter(Camera.id == camera_id).first()
    db_camera.name = name
    db_camera.crop = crop
    db.commit()
    db.refresh(db_camera)

    return db_camera