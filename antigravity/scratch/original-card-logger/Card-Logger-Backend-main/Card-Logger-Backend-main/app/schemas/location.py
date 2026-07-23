from pydantic import BaseModel
from typing import Optional

class LocationBase(BaseModel):
    id: int
    coords: str
    description: str

class LocationCreate(LocationBase):
    pass

class Location(LocationBase):
    class Config:
        from_attributes = True
        orm_mode = True                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 