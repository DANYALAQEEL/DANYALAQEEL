from pydantic import BaseModel
from typing import Optional

class CamTypeBase(BaseModel):
    type: str

class CamTypeCreate(CamTypeBase):
    pass

class CamType(CamTypeBase):
    class Config:
        from_attributes = True
        orm_mode = True