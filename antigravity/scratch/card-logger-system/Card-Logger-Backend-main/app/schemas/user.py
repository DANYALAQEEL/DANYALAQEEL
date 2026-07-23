from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    username: str
    name: Optional[str] = None
    password: str
    role: str
    image_path: Optional[str] = None

class UserCreate(UserBase):
    pass

class User(UserBase):
    class Config:
        from_attributes = True
        orm_mode = True