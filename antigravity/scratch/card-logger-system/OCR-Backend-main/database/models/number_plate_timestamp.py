from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from database.utils.database import Base

class NumberPlateTimestamp(Base):
    __tablename__ = "number_plate_timestamp"

    id = Column(Integer, primary_key=True)
    number_plate = Column(String(20), nullable=False)
    plate_confidence = Column(Float, nullable=False)
    timestamp = Column(DateTime, nullable=False)
    img_path = Column(String(100), nullable=False)
    cam_id = Column(Integer, ForeignKey('camera.id'), nullable=False)