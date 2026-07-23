from pydantic import BaseModel
from typing import Optional

import datetime

class NumberPlateTimestampBase(BaseModel):
    number_plate: str
    plate_confidence: float
    timestamp: datetime.datetime
    img_path: str
    cam_id: int

class NumberPlateTimestampCreate(NumberPlateTimestampBase):
    pass

class NumberPlateTimestamp(NumberPlateTimestampBase):
    class Config:
        from_attributes = True
        orm_mode = True