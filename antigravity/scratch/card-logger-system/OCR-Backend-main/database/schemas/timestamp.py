from pydantic import BaseModel
from datetime import datetime
from typing import Optional

from sqlalchemy import DateTime

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
