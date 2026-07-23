from sqlalchemy import Column, String, Float, ForeignKey, Integer, DateTime
from database.utils.database import Base

from sqlalchemy.orm import relationship

class Camera(Base):
    __tablename__ = "camera"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String, ForeignKey("cam_type.type"))
    location_id = Column(Integer, ForeignKey("location.id"))
    crop = Column(String)
    cam_url = Column(String)
    thumbnail_path = Column(String)

    location = relationship("Location", back_populates="cameras")