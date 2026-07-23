from pydantic import BaseModel
from typing import Optional

class CnicBase(BaseModel):
    cnic: str
    name: Optional[str] = ""
    name_confidence: Optional[float] = 0.5
    all_details: Optional[str] = ""
    cnic_img_path: Optional[str] = ""
    is_vip: Optional[bool] = False

class CnicCreate(CnicBase):
    pass

class Cnic(CnicBase):
    class Config:
        from_attributes = True
        orm_mode = True
