from sqlalchemy.orm import Session
from app.models import CamType
from app.schemas import CamTypeCreate

def get_cam_types(db: Session, skip: int = 0):
    return db.query(CamType).offset(skip).all()

def create_cam_type(db: Session, cam_type: CamTypeCreate):
    db_cam_type = CamType(**cam_type.model_dump())
    db.add(db_cam_type)
    db.commit()
    db.refresh(db_cam_type)

    return db_cam_type