from pydantic import BaseModel
from typing import Optional

class CameraBase(BaseModel):
    name: str
    type: str
    location_id: int
    crop: Optional[str] = "0,0,0,0"
    cam_url: str
    thumbnail_path: Optional[str] = None

class CameraCreate(CameraBase):
    pass

class Camera(CameraBase):
    class Config:
        from_attributes = True
        orm_mode = True