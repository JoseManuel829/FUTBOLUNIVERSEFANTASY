import os
from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from .database import SessionLocal, engine, Base
from .models import equipo, equipo_jugador, equipo_usuario, estadisticas_jugador, jornadas, jugadores, usuarios
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from typing import Annotated
from pathlib import Path
from fastapi.responses import RedirectResponse
from starlette.middleware.sessions import SessionMiddleware

from .routers.login import router as login_router
from .routers.inicio import router as inicio_router
from .routers.equipo import router as equipo_router


app = FastAPI()


# memoria para el inicio
app.add_middleware(SessionMiddleware, secret_key="1234")


# routers
app.include_router(login_router)
app.include_router(inicio_router)
app.include_router(equipo_router)


path_to_public = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "Frontend", "Public")

app.mount("/public", StaticFiles(directory=path_to_public), name="public")


Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



