from fastapi import APIRouter, Request, File, UploadFile, Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
from .detect import detect_percentage  # Import function directly

router = APIRouter()
templates = Jinja2Templates(directory="templates")

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)  # Ensure directory exists

# GET: Render the file upload form
@router.get("/upload/", response_class=HTMLResponse)
async def upload_form(request: Request):
    return templates.TemplateResponse("upload.html", {"request": request})

# POST: Handle file upload and process AI detection
@router.post("/upload/")
async def upload_file(request: Request, file: UploadFile = File(...)):
    # Read file content
    file_content = await file.read()
    text_data = file_content.decode("utf-8")

    # Process text with AI detection (direct function call)
    ai_percentage = detect_percentage(text_data)

    # Render result directly in show_text.html
    return templates.TemplateResponse(
        "show_text.html",
        {"request": request, "text": text_data, "ai_percentage": ai_percentage},
    )
