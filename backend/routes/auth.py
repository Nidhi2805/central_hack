import os
import secrets
from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse, HTMLResponse
from authlib.integrations.starlette_client import OAuth

router = APIRouter()

oauth = OAuth()

oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"}
)

@router.get("/login")
async def login(request: Request):
    nonce = secrets.token_urlsafe(16)
    request.session["nonce"] = nonce
    redirect_uri = request.url_for("auth")
    return await oauth.google.authorize_redirect(request, redirect_uri, nonce=nonce)

@router.get("/auth")
async def auth(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
    except Exception:
        raise HTTPException(status_code=400, detail="OAuth authorization failed")
    nonce = request.session.pop("nonce", None)
    if "id_token" in token:
        user = await oauth.google.parse_id_token(token, nonce=nonce)
    else:
        user = await oauth.google.userinfo(token)
    request.session["user"] = dict(user)
    return RedirectResponse(url="http://localhost:3000/upload")

@router.get("/session", response_class=HTMLResponse)
async def session_page(request: Request):
    user = request.session.get("user")
    if user:
        return f"<h1>Logged In</h1><pre>{user}</pre>"
    return "<h1>Not logged in</h1>"

@router.get("/logout")
async def logout(request: Request):
    request.session.pop("user", None)
    return RedirectResponse(url="/")