from fastapi import APIRouter, Request, File, UploadFile, Depends
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
from detectors.detector import DeepfakeTextDetector
from dotenv import load_dotenv
from os import getenv
from services.db import users

load_dotenv()

router = APIRouter()
templates = Jinja2Templates(directory="templates")
text_detector = DeepfakeTextDetector(api_key=getenv("OPENAI_API_KEY"))

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


# @router.get("/upload/", response_class=HTMLResponse)
# async def upload_form(request: Request):
#     user = request.session.get("user")
#     if user:
#         return templates.TemplateResponse("upload.html", {"request": request})
#     return RedirectResponse(url="/login")


@router.post("/upload/")
async def upload_file(request: Request, file: UploadFile = File(...)):
    user = request.session.get("user")
    print(user)
    if user:
        user_ = dict(user)
        file_content = await file.read()
        text_data = file_content.decode("utf-8")

        ai_percentage = text_detector.analyze_text(text_data)

        data = await users.find_one({"email": user_["email"]})
        data = data["history"]
        t, d, df, ai = data["type"], data["data"], data["deepfaked"], data["additional_info"]
        t.append("text")
        d.append(text_data)
        df.append(
            "Human Written" if int(ai_percentage['confidence_score'])*100 <= 40 else (
                "Likely AI" if int(ai_percentage['confidence_score'])*100 in range(41, 71) else "AI Generated"
            )
        )
        ai.append({
            "word_count": ai_percentage['statistical_metrics']['word_count'],
            "sentence_count": ai_percentage['statistical_metrics']['sentence_count'],
            "explnation": ai_percentage['explanation'],
            "tags": ai_percentage['key_indicators']
        })
        await users.update_one({"email": user_["email"]}, {"$set": {"history": {
            "type": t, "data": d, "deepfaked": df, "additional_info": ai
        }}})

        return JSONResponse(
            {"request": request, "text": text_data, "ai_percentage": ai_percentage},
        )
    return RedirectResponse(url="/login", status_code=302)

