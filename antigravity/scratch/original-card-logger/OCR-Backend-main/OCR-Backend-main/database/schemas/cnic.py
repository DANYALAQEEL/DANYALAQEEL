from pydantic import BaseModel
from typing import Optional

class CnicBase(BaseModel):
    cnic: str
    name: Optional[str] = None
    name_confidence: Optional[float] = None
    all_details: Optional[str] = None
    cnic_img_path: Optional[str] = None

class CnicCreate(CnicBase):
    pass

class Cnic(CnicBase):
    class Config:
        from_attributes = True
        orm_mode = True
