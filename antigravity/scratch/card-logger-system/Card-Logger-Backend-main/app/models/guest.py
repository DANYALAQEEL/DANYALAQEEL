from sqlalchemy import Column, String, ForeignKey, Integer, DateTime
from app.utils.database import Base

from sqlalchemy.orm import relationship


class Guest(Base):
    """General visitor log entry (distinct from the VIP flag on `cnic`).

    Per project decision: a guest's CNIC must also exist in the `cnic`
    table. The guest-registration endpoint auto-creates the `cnic` row
    when it does not exist yet (pre-registration before first detection),
    so this foreign key never blocks registering a new guest.
    """

    __tablename__ = "guest"

    guest_id = Column(Integer, primary_key=True, index=True)
    cnic_id = Column(String, ForeignKey("cnic.cnic"), index=True)
    added_at = Column(DateTime)

    cnic = relationship("Cnic")
