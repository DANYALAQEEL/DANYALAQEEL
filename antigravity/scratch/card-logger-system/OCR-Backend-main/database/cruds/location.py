from sqlalchemy.orm import Session
from database.models import Location
from database.schemas import LocationCreate

def get_locations(db: Session, skip: int = 0):
    return db.query(Location).offset(skip).all()

def create_location(db: Session, location: LocationCreate):
    db_location = Location(**location.model_dump())
    db.add(db_location)
    db.commit()
    db.refresh(db_location)

    return db_location

def get_location_by_id(db: Session, location_id: int):
    return db.query(Location).filter(Location.id == location_id).first()

def get_total_locations_count(db: Session):
    return db.query(Location).count()

