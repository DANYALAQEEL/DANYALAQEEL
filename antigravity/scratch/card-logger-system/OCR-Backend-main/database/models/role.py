from sqlalchemy import Column, String
from database.utils.database import Base

class Role(Base):
    __tablename__ = "role"
    
    role = Column(String, primary_key=True, index=True)