# user.py
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from pydantic import BaseModel, EmailStr, constr
from db import get_db, Base, engine  # Import from db.py
from sqlalchemy import Column, Integer, String, Text

router = APIRouter()

# SQLAlchemy User model
class User(Base):
    __tablename__ = 'Users'

    UserId = Column(Integer, primary_key=True, index=True)
    FirstName = Column(String(50), nullable=False)
    LastName = Column(String(50), nullable=False)
    EmailAddress = Column(String(100), unique=True, nullable=False)
    MobileNumber = Column(String(15), unique=True, nullable=False)
    UserType = Column(String(20), nullable=False, default='Customer')
    PasswordHash = Column(Text, nullable=False)
    Address = Column(Text, nullable=True)
    Interests = Column(Text, nullable=True)

# Create tables in database
Base.metadata.create_all(bind=engine)

# Pydantic model for validation
class UserCreate(BaseModel):
    FirstName: constr(min_length=1)
    LastName: constr(min_length=1)
    EmailAddress: EmailStr
    MobileNumber: constr(min_length=10, max_length=15)
    password: constr(min_length=6)
    confirmPassword: constr(min_length=6)

    class Config:
        orm_mode = True

@router.post("/signup")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    if user.password != user.confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    existing_user = db.query(User).filter(
        (User.EmailAddress == user.EmailAddress) |
        (User.MobileNumber == user.MobileNumber)
    ).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email or Mobile Number already registered")

    hashed_password = bcrypt.hash(user.password)

    new_user = User(
        FirstName=user.FirstName,
        LastName=user.LastName,
        EmailAddress=user.EmailAddress,
        MobileNumber=user.MobileNumber,
        PasswordHash=hashed_password,
        UserType='Customer'
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully", "user_id": new_user.UserId}
