from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    POSTGRES_USER : str 
    POSTGRES_PASSWORD: str 
    POSTGRES_SERVER: str
    POSTGRES_PORT: int  
    POSTGRES_DB: str  
    SECRET_KEY: str  


    class Config:
        env_file = ".env"

settings = Settings()