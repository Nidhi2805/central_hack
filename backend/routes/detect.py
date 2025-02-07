from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

def detect_percentage(text: str) -> float:
    return 10

@router.post("/detect-text/")
async def detect_text(text: str = Form(...)):
    ai_percentage = detect_percentage(text)
    return {"text": text, "ai_percentage": ai_percentage}

# GET: Display analyzed text and AI percentage
@router.get("/show-text/", response_class=HTMLResponse)
async def show_text(request: Request, text: str = "No text provided", ai_percentage: float = 0.0):
    return templates.TemplateResponse("show_text.html", {"request": request, "text": text, "ai_percentage": ai_percentage})
