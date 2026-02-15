from sqlalchemy import Column, Integer, String, Date, DateTime, Boolean
from sqlalchemy.sql.schema import ForeignKey
from .database  import Base, SessionLocal

class equipo(Base):
    __tablename__ = "equipo"

    id_equipo = Column(Integer, primary_key=True)
    presupuesto = Column(Integer)
    puntos_totales = Column(Integer)
    valor_total = Column(Integer)

class equipo_jugador(Base):
    __tablename__ = "equipo_jugador"

    id_equipo_jugador = Column(Integer, primary_key=True)
    id_equipo = Column(Integer, ForeignKey("equipo.id_equipo"))
    id_jugador = Column(Integer, ForeignKey("jugadores.id_jugador"))

class equipo_usuario(Base):
    __tablename__ = "equipo_usuario"

    id_equipo_usuario = Column(Integer, primary_key=True)
    id_equipo = Column(Integer, ForeignKey("equipo.id_equipo"))
    id_usuario = Column(Integer, ForeignKey("usuarios.id_usuario"))

class estadisticas_jugador(Base):
    __tablename__ = "estadisticas_jugador"

    id_estadistica = Column(Integer, primary_key=True)
    amarillas = Column(Integer)
    rojas = Column(Integer)
    faltas = Column(Integer)
    goles = Column(Integer)
    asistencias = Column(Integer)
    goles_encajados = Column(Integer)
    paradas = Column(Integer)
    puntos_fantasy = Column(Integer)

class jornadas(Base):
    __tablename__ = "jornadas"
    
    id_jornada = Column(Integer, primary_key=True)
    estado = Column(String(100))
    fecha_inicio = Column(DateTime)
    fecha_fin = Column(DateTime)

class jugadores(Base):
    __tablename__ = "jugadores"

    id_jugador = Column(Integer, primary_key=True)
    activo = Column(Boolean)
    equipo_real = Column(String(50))
    nivel = Column(Integer)
    nombre = Column(String(100))
    valor = Column(Integer)

class usuarios(Base):
    __tablename__ = "usuarios"

    id_usuario = Column(Integer, primary_key=True)
    correo = Column(String(200), unique=True)
    nombre_usuario = Column(String(100))
    password = Column(String(200))
    rol = Column(String(100))