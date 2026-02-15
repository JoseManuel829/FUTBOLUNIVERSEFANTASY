from fastapi import APIRouter, Form, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from ..database import SessionLocal, get_db
from ..models import usuarios
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from typing import Annotated
from pathlib import Path
from fastapi.responses import RedirectResponse


current_file = Path(__file__).resolve()

project_root = current_file.parent.parent.parent.parent

templates_path = project_root / "Frontend" / "public" / "login"


router = APIRouter()

jinja2_template = Jinja2Templates(directory=str(templates_path))


@router.get("/login/registro", response_class=HTMLResponse)
def root(request: Request):
    return jinja2_template.TemplateResponse("registro.html", {"request": request})



@router.post("/registro")
async def registro(nombre_usuario: Annotated[str, Form()], email: Annotated[str, Form()], 
                password: Annotated[str, Form()], confirm_password: Annotated[str, Form()], db: Session = Depends(get_db)):
    #vemos si coinciden las contraseñas
    if password != confirm_password:
        return "ERROR: LAS CONTRASEÑAS NO COINCIDEN"
    
    #comprobamos el correo
    usuario_existente = db.query(usuarios).filter(usuarios.correo == email).first()
    if usuario_existente:
        return "EL CORREO USADO YA ESTÁ ASOCIADO A OTRA CUENTA"

    
    nuevo_usuario = usuarios(
        nombre_usuario=nombre_usuario,
        correo=email,
        password=password,
        rol="usuario"
    )

    try:
        db.add(nuevo_usuario)
        db.commit()
        db.refresh(nuevo_usuario)

        return RedirectResponse(url="/login/login", status_code=303)

    except Exception as e:
        db.rollback()
        return "OCURRIÓ UN ERROR AL GUARDAR: {e}"
    



@router.get("/login/login", response_class=HTMLResponse)
def loginhtml(request: Request):
    return jinja2_template.TemplateResponse("inicio-sesion.html", {"request": request})


@router.post("/login")
async def login(request:Request, email: Annotated[str, Form()], 
                password: Annotated[str, Form()], db: Session = Depends(get_db)):
    
    usuario_existente = db.query(usuarios).filter(usuarios.correo == email).first()

    if not usuario_existente:
        return "EL CORREO NO ESTÁ REGISTRADO"

    if password == usuario_existente.password:
        request.session["usuario_nombre"] = usuario_existente.nombre_usuario
        return RedirectResponse("/inicio/inicio.html", status_code=303)
    else:
        return "CONTRASEÑA INCORRECTA"