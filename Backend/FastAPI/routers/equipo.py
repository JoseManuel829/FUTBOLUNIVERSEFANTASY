from fastapi import APIRouter, Form, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from ..database import SessionLocal, get_db
from ..models import usuarios
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from typing import Annotated
from pathlib import Path
from fastapi.responses import RedirectResponse
from pydantic import BaseModel


current_file = Path(__file__).resolve()

project_root = current_file.parent.parent.parent.parent

templates_path = project_root / "Frontend" / "public" / "login"


router = APIRouter()

jinja2_template = Jinja2Templates(directory=str(templates_path))



class Equipo(BaseModel):
    nivel1: str
    nivel2: str
    nivel3: str
    nivel4: str
    nivel5: str
    nivel6: str
    nivel7: str
    nivelPortero: str


@router.post("/recibirJugadores")
def recibir_jugadores(equipo: Equipo, db: Session = Depends(get_db)):
    
    datos_equipo = equipo.dict()

    id_equipo_actual = 1

    try:
        for nivel, nombre_jugador in datos_equipo.items():
            if nombre_jugador:
                query_jugador = text("SELECT id_jugador FROM jugadores WHERE nombre = :nombre")
                jugador = db.execute(query_jugador, {"nombre": nombre_jugador}).fetchone()

                if jugador:
                    id_jugador = jugador[0]

                    query_delete = text("SELECT FROM equipo_jugador WHERE id_equipo = :id_e AND nivel = :n")
                    db.execute(query_delete, {"id_e": id_equipo_actual, "n": nivel})

                    query_insert = text("INSERT INTO equipo_jugador (id_equipo, id_jugador, nivel) VALUES (:id_e, :id_j, :n)")


        db.commit()
        return {"status": "success", "message": "Equipo guardado correctamente"}
    
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error al guardar: {str(e)}")
    