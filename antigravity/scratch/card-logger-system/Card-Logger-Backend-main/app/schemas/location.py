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

class LocationCreateRequest(BaseModel):
    """Additive schema for the new POST /api/camera/location/save endpoint.
    The pre-existing LocationCreate (kept untouched above) requires `id`,
    which a create call cannot know — hence this separate request model."""
    coords: Optional[str] = ""
    description: str
