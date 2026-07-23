from sqlalchemy.orm import Session
from database.models import Cnic
from database.schemas import CnicCreate

def get_cnics(db: Session, skip: int = 0):
    return db.query(Cnic).offset(skip).all()

def create_cnic(db: Session, cnic: CnicCreate):
    db_cnic = Cnic(**cnic.model_dump())
    db.add(db_cnic)
    db.commit()
    db.refresh(db_cnic)

    return db_cnic

def get_cnic_by_id(db: Session, cnic_id: int):
    return db.query(Cnic).filter(Cnic.id == cnic_id).first()

def get_total_cnics_count(db: Session):
    return db.query(Cnic).count()

def check_if_cnic_exists(db: Session, cnic: str):
    return db.query(Cnic).filter(Cnic.cnic == cnic).first()

def update_cnic(db: Session, cnic: CnicCreate):
    db_cnic = db.query(Cnic).filter(Cnic.cnic == cnic.cnic).first()
    db_cnic.name = cnic.name
    db_cnic.name_confidence = cnic.name_confidence
    db_cnic.all_details = cnic.all_details
    db_cnic.cnic_img_path = cnic.cnic_img_path
    db.commit()
    db.refresh(db_cnic)

    return db_cnic