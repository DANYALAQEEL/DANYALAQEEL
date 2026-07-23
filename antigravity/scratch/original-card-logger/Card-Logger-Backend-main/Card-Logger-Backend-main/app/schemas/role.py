from pydantic import BaseModel
from typing import Optional

class RoleBase(BaseModel):
    role: str

class RoleCreate(RoleBase):
    pass

class Role(RoleBase):
    class Config:
        from_attributes = True
        orm_mode = True