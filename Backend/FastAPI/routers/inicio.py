from fastapi import APIRouter, Form, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from ..database import SessionLocal, get_db
from ..models import usuarios
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from typing import Annotated
from pathlib import Path
from fastapi.responses import RedirectResponse


router = APIRouter()

current_file = Path(__file__).resolve()
project_root = current_file.parent.parent.parent.parent
templates_path = project_root / "Frontend" / "public"

jinja3_template = Jinja2Templates(directory=str(templates_path))

@router.get("/inicio/inicio.html", response_class=HTMLResponse)
async def inicio(request: Request):
    nombre_en_sesion = request.session.get("usuario_nombre")

    if not nombre_en_sesion:
        return RedirectResponse(url="/login/login")

    return jinja3_template.TemplateResponse("/inicio/inicio.html", {"request": request,
                                                                    "nombre_usuario": nombre_en_sesion})

