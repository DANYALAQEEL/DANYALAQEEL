from pydantic import BaseModel
from typing import Optional

from datetime import datetime

class TimestampBase(BaseModel):
    cnic: str
    timestamp: datetime
    cam_id: int

class TimestampCreate(TimestampBase):
    pass

class Timestamp(TimestampBase):
    class Config:
        from_attributes = True
        orm_mode = True
