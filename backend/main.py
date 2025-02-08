from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from routes import upload, auth
from dotenv import load_dotenv
from os import getenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.add_middleware(SessionMiddleware, secret_key=getenv("SECRET_KEY"))
app.include_router(upload.router)
app.include_router(auth.router)