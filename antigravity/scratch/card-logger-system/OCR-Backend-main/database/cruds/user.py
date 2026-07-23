from sqlalchemy.orm import Session
from database.models import User
from database.schemas import UserCreate

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(User).offset(skip).limit(limit).all()

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: UserCreate):
    db_user = User(**user.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_total_users_count(db: Session):
    return db.query(User).count()

def update_user(db: Session, user: UserCreate):
    db_user = db.query(User).filter(User.username == user.username).first()
    db_user.name = user.name
    db_user.password = user.password
    db_user.role = user.role
    db_user.image_path = user.image_path
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, username: str):
    db_user = db.query(User).filter(User.username == username).first()
    db.delete(db_user)
    db.commit()
    return db_user

def get_user_by_username_password(db: Session, username: str, password: str):
    return db.query(User).filter(User.username == username, User.password == password).first()

def verify_credentials(db: Session, username: str, password: str):
    return db.query(User).filter(User.username == username, User.password == password).count() > 0

def get_user_role(db: Session, username: str):
    return db.query(User).filter(User.username == username).first().role