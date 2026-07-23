from sqlalchemy.orm import Session
from database.models import NumberPlateTimestamp
from database.schemas import NumberPlateTimestampCreate

def get_number_plate_timestamps(db: Session, skip: int = 0):
    return db.query(NumberPlateTimestamp).offset(skip).all()

def create_number_plate_timestamp(db: Session, number_plate_timestamp: NumberPlateTimestampCreate):
    db_number_plate_timestamp = NumberPlateTimestamp(**number_plate_timestamp.model_dump())
    db.add(db_number_plate_timestamp)
    db.commit()
    db.refresh(db_number_plate_timestamp)

    return db_number_plate_timestamp

def get_number_plate_timestamp_by_id(db: Session, number_plate_timestamp_id: int):
    return db.query(NumberPlateTimestamp).filter(NumberPlateTimestamp.id == number_plate_timestamp_id).first()

def get_total_number_plate_timestamps_count(db: Session):
    return db.query(NumberPlateTimestamp).count()

def get_number_plate_timestamps_by_cam_id(db: Session, cam_id: int):
    return db.query(NumberPlateTimestamp).filter(NumberPlateTimestamp.cam_id == cam_id).all()

def get_number_plate_timestamps_by_number_plate(db: Session, number_plate: str):
    return db.query(NumberPlateTimestamp).filter(NumberPlateTimestamp.number_plate == number_plate).all()