from pydantic import BaseModel, model_validator
from typing import Optional


class GuestCreate(BaseModel):
    """Accepts BOTH key spellings the two frontend generations used:

    - the original Guest Registration UI sends `cnic_id`
    - VIP-style payloads send `cnic`

    Whichever is provided is normalized into `cnic_id` so neither
    frontend contract breaks.
    """

    cnic_id: Optional[str] = None
    cnic: Optional[str] = None
    name: Optional[str] = ""

    @model_validator(mode="after")
    def normalize_cnic(self):
        if not self.cnic_id and self.cnic:
            self.cnic_id = self.cnic
        if not self.cnic and self.cnic_id:
            self.cnic = self.cnic_id
        return self


class Guest(BaseModel):
    guest_id: int
    cnic_id: str

    class Config:
        from_attributes = True
        orm_mode = True
