from sqlalchemy.orm import Session
from app.models import Role
from app.schemas import RoleCreate

def get_roles(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Role).all()