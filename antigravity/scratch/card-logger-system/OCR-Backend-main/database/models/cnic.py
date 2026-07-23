from sqlalchemy import Column, String, Float
from database.utils.database import Base
from sqlalchemy.orm import relationship

class Cnic(Base):
    __tablename__ = "cnic"
    
    cnic = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    name_confidence = Column(Float)
    all_details = Column(String)
    cnic_img_path = Column(String)

    timestamps = relationship("Timestamp", back_populates="cnics")
