from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from routes import upload, auth
from dotenv import load_dotenv
from os import getenv

load_dotenv()
app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key=getenv("SECRET_KEY"))
app.include_router(upload.router)
app.include_router(auth.router)