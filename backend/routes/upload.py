from fastapi import APIRouter, Request, File, UploadFile, Depends
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
from .detect import detect_percentage

router = APIRouter()
templates = Jinja2Templates(directory="templates")

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/upload/", response_class=HTMLResponse)
async def upload_form(request: Request):
    user = request.session.get("user")
    if user:
        return templates.TemplateResponse("upload.html", {"request": request})
    return RedirectResponse(url="/login")

@router.post("/upload/")
async def upload_file(request: Request, file: UploadFile = File(...)):
    user = request.session.get("user")
    if user:
        file_content = await file.read()
        text_data = file_content.decode("utf-8")

        ai_percentage = detect_percentage(text_data)

        return templates.TemplateResponse(
            "show_text.html",
            {"request": request, "text": text_data, "ai_percentage": ai_percentage},
        )
    return RedirectResponse(url="/login")
