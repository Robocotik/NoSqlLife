from pydantic import BaseModel, Field, field_validator
from typing import Optional

class UserBase(BaseModel):
    email: str = Field(..., example="user@example.com")
    
    @field_validator('email')
    def validate_email(cls, v):
        if "@" not in v:
            raise ValueError("Invalid email format")
        return v.lower()

class UserCreate(UserBase):
    password: str = Field(..., min_length=6, example="strongpassword")

class UserOut(UserBase):
    id: int
    is_active: bool
    
    class Config:
        from_attributes = True
class Token(BaseModel):
    token: str
class User(BaseModel):
    id: int
    email: str