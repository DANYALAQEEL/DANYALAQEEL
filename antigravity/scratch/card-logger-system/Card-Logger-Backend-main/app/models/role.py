from sqlalchemy import Column, String
from app.utils.database import Base

class Role(Base):
    __tablename__ = "role"
    
    role = Column(String, primary_key=True, index=True)