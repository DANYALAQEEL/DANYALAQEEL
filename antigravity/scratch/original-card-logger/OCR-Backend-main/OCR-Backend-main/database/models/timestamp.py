from sqlalchemy import Column, String, Float, ForeignKey, Integer, DateTime
from database.utils.database import Base

from sqlalchemy.orm import relationship

class Timestamp(Base):
    __tablename__ = "timestamp"

    id = Column(Integer, primary_key=True, index=True)
    cnic = Column(String, ForeignKey("cnic.cnic"))
    timestamp = Column(DateTime)
    cam_id = Column(Integer)

    cnics = relationship("Cnic", back_populates="timestamps")