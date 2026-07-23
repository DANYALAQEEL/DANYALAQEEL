from sqlalchemy import Column, String, Float, ForeignKey, Integer
from app.utils.database import Base

class CamType(Base):
    __tablename__ = "cam_type"

    type = Column(String, primary_key=True, index=True)