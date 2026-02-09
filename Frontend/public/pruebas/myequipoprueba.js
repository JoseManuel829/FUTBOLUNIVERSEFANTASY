const fondo = document.getElementById("desplegable-fondo-mercado");
const modal = document.getElementById("cardbk");
let scrollYPosition = 0;
let scrollBarWidth = 0;

scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

const jugadoresData = {
    // PORTEROS
    diegog: {
        nombre: "DIEGO G",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    luisgra: {
        nombre: "LUISGRA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    guty: {
        nombre: "GUTY",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    pabloramos: {
        nombre: "PABLO RAMOS",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    rafa: {
        nombre: "RAFA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    lisandro: {
        nombre: "LISANDRO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    dario: {
        nombre: "DARIO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    yerai: {
        nombre: "YERAI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jesuli: {
        nombre: "JESULI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    dani: {
        nombre: "DANI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 1
    cristian: {
        nombre: "CRISTIAN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    javitorre: {
        nombre: "JAVI TORRE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    salvi: {
        nombre: "SALVI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    mariete: {
        nombre: "MARIETE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    tatin: {
        nombre: "TATÍN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    josem: {
        nombre: "JOSE M",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    xexu: {
        nombre: "XEXU",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    joseadri: {
        nombre: "JOSE ADRI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    alejandro: {
        nombre: "ALEJANDRO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    ezequiel: {
        nombre: "EZEQUIEL",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 2
    vazquez: {
        nombre: "VAZQUEZ",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    carlotor: {
        nombre: "CARLOTOR",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    joaquin: {
        nombre: "JOAQUÍN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    adric: {
        nombre: "ADRI C",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    pedro: {
        nombre: "PEDRO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    carlosz: {
        nombre: "CARLOS Z",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    danig: {
        nombre: "DANI G",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    aaron: {
        nombre: "AARÓN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    josemateo: {
        nombre: "JOSE MATEO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    via: {
        nombre: "VIA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 3
    pollo: {
        nombre: "POLLO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    juanmi: {
        nombre: "JUANMI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jesusa: {
        nombre: "JESÚS A",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    abde: {
        nombre: "ABDE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    rubenlobo: {
        nombre: "RUBÉN LOBO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jesustorrejon: {
        nombre: "JESÚS TORREJÓN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    kapri: {
        nombre: "KAPRI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    luis: {
        nombre: "LUIS",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    millan: {
        nombre: "MILLÁN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jairo: {
        nombre: "JAIRO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 4
    aitor: {
        nombre: "AITOR",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jorge: {
        nombre: "JORGE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    ivan: {
        nombre: "IVAN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    miguelr: {
        nombre: "MIGUEL R",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    cristiand: {
        nombre: "CRISTIAN D",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    davidr: {
        nombre: "DAVID R",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    nandi: {
        nombre: "NANDI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    javimandy: {
        nombre: "JAVIMANDY",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    enrique: {
        nombre: "ENRIQUE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    mariolobo: {
        nombre: "MARIO LOBO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 5
    periko: {
        nombre: "PERIKO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    koti: {
        nombre: "KOTI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    ian: {
        nombre: "IAN",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    manu: {
        nombre: "MANU",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    manuelc: {
        nombre: "MANUEL C",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    tuba: {
        nombre: "TUBA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    juanmic: {
        nombre: "JUANMI C",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    victor: {
        nombre: "VICTOR",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    hugo: {
        nombre: "HUGO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    danib: {
        nombre: "DANI B",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 6
    matias: {
        nombre: "MATIAS",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    adrikai: {
        nombre: "ADRIKAI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    dario: {
        nombre: "DARIO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    javisaucedo: {
        nombre: "JAVI SAUCEDO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    lagostena: {
        nombre: "LAGOSTENA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    david: {
        nombre: "DAVID",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    alvaro: {
        nombre: "ALVARO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    toni: {
        nombre: "TONI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    dani: {
        nombre: "DANI",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    jorge: {
        nombre: "JORGE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    // NIVELES 7
    samuel: {
        nombre: "SAMUEL",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    andres: {
        nombre: "ANDRÉS",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    josema: {
        nombre: "JOSEMA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    hiu: {
        nombre: "HIU",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    josete: {
        nombre: "JOSETE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    mateo: {
        nombre: "MATEO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    manopla: {
        nombre: "MANOPLA",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    marco: {
        nombre: "MARCO",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    ale: {
        nombre: "ALE",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },

    sergiop: {
        nombre: "SERGIO P",
        foto: "/public/imagenes/perfil.png",
        goles: 5, asistencias: 3, amarillas: 1, rojas: 0,
        partidos: 10, valorActual: "20M", valorMin: "18M", valorMax: "25M",
        puntos: 45
    },


};



function mostrarModal(idJugador) {
    const data = jugadoresData[idJugador];
    if (!data) {
        console.error("SIN DATOS PARA: ", idJugador);
        return;
    }

    scrollYPosition = window.pageYOffset;

    const scrollBar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = `-${scrollBar}px`;  // ← COMPENSA scrollbar
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';


    document.getElementById("foto-mercado").src = data.foto;
    document.getElementById("nombre-mercado").textContent = data.nombre;
    document.getElementById("goles").textContent = `GOLES: ${data.goles}`;
    document.getElementById("asistencias").textContent = `ASISTENCIAS: ${data.asistencias}`;
    document.getElementById("amarillas").textContent = `TARJETAS AMARILLAS: ${data.amarillas}`;
    document.getElementById("rojas").textContent = `TARJETAS ROJAS: ${data.rojas}`;
    document.getElementById("partidos").textContent = `PARTIDOS JUGADOS: ${data.partidos}`;
    document.getElementById("valor-actual").textContent = `VALOR ACTUAL: ${data.valorActual}`;
    document.getElementById("valor-min").textContent = `VALOR MÁS BAJO: ${data.valorMin}`;
    document.getElementById("valor-max").textContent = `VALOR MÁS ALTO: ${data.valorMax}`;
    document.getElementById("puntos-totales").textContent = `PUNTOS TOTALES: ${data.puntos}`;


    fondo.style.display = "block";
    modal.style.display = "flex";
}


document.addEventListener("click", function (e) {
    const card = e.target.closest("[data-jugador]");
    if (card) {
        const idJugador = card.dataset.jugador;
        console.log("Click: ", idJugador);
        mostrarModal(idJugador);
        return;
    }

    const closeBtn = e.target.closest("[data-close]");
    if (closeBtn) {
        modal.style.display = "none";
        fondo.style.display = "none";
        
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollYPosition);
        return;
    }

    if (e.target === fondo) {
        modal.style.display = "none";
        fondo.style.display = "none";


        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollYPosition);
    }
});