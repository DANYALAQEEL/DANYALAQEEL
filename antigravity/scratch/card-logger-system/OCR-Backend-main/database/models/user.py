from sqlalchemy import Column, String
from database.utils.database import Base

class User(Base):
    __tablename__ = "users"
    
    username = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=True)
    password = Column(String, nullable=False)
    role = Column(String)
    image_path = Column(String)
