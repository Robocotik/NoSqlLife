from sqlalchemy.orm import Session
from sqlalchemy import func, text
from . import models, schemas
from .auth import get_password_hash

def get_user_by_email(db: Session, email: str) -> models.User:
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    hashed_password = get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_count_users(db: Session)->int:
    count = db.query(func.count(models.User.id)).scalar()
    return count

def get_db_connections_count(db: Session) -> int:
    result = db.execute(text("""
        SELECT count(*) 
        FROM pg_stat_activity 
        WHERE datname = current_database()
    """))
    return result.scalar()