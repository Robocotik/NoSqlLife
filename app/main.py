from fastapi import FastAPI
from app.routers import auth, users
from app.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Auth API",
    description="API для регистрации и аутентификации пользователей",
    version="1.0.0"
)

app.include_router(auth.router)
app.include_router(users.router)