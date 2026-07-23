import datetime

from sqlalchemy.orm import Session, joinedload

from app.models import Guest, Cnic
from app.schemas import GuestCreate


def _ensure_cnic_exists(db: Session, cnic_id: str, name: str) -> Cnic:
    """Project rule: every guest's CNIC must exist in the `cnic` table.

    Guests are typically pre-registered BEFORE their card is ever scanned,
    so the row usually will not exist yet. Create it with the form data and
    is_vip=False. If it already exists (previously detected by the OCR
    pipeline or registered as VIP), reuse it untouched — we never overwrite
    OCR-derived data from here.
    """
    db_cnic = db.query(Cnic).filter(Cnic.cnic == cnic_id).first()
    if db_cnic is not None:
        return db_cnic

    db_cnic = Cnic(
        cnic=cnic_id,
        name=name or "",
        name_confidence=1.0,  # operator-entered, not OCR-guessed
        all_details="Registered manually via Guest Registration",
        cnic_img_path="",
        is_vip=False,
    )
    db.add(db_cnic)
    db.commit()
    db.refresh(db_cnic)
    return db_cnic


def get_guests(db: Session):
    return (
        db.query(Guest)
        .options(joinedload(Guest.cnic))
        .order_by(Guest.added_at.desc())
        .all()
    )


def get_guest_by_cnic(db: Session, cnic_id: str):
    return db.query(Guest).filter(Guest.cnic_id == cnic_id).first()


def create_guest(db: Session, guest: GuestCreate):
    _ensure_cnic_exists(db, guest.cnic_id, guest.name or "")

    existing = get_guest_by_cnic(db, guest.cnic_id)
    if existing is not None:
        return existing

    db_guest = Guest(cnic_id=guest.cnic_id, added_at=datetime.datetime.now())
    db.add(db_guest)
    db.commit()
    db.refresh(db_guest)
    return db_guest


def remove_guest(db: Session, cnic_id: str) -> bool:
    """Removes the guest log entry ONLY. The `cnic` row is left alone —
    it may hold OCR detection history and/or a VIP flag."""
    db_guest = get_guest_by_cnic(db, cnic_id)
    if db_guest is None:
        return False
    db.delete(db_guest)
    db.commit()
    return True
