from sqlalchemy import Column, String, Float, ForeignKey, Integer, DateTime
from database.utils.database import Base

from sqlalchemy.orm import relationship

class Location(Base):
        __tablename__ = "location"

        id = Column(Integer, primary_key=True, index=True)
        coords = Column(String)
        description = Column(String)

        cameras = relationship("Camera", back_populates="location")