from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

def detect_percentage(text: str) -> float:
    return 10


@router.post("/detect-text/")
async def detect_text(request: Request, text: str = Form(...)):
    user = request.session.get("user")
    if user:
        ai_percentage = detect_percentage(text)
        return {"text": text, "ai_percentage": ai_percentage}
    return RedirectResponse(url="/login")


@router.get("/show-text/", response_class=HTMLResponse)
async def show_text(request: Request, text: str = "No text provided", ai_percentage: float = 0.0):
    user = request.session.get("user")
    if user:
        return templates.TemplateResponse("show_text.html", {"request": request, "text": text, "ai_percentage": ai_percentage})
    return RedirectResponse(url="/login")
