var nombrenivel1 = document.getElementById("nivel1-texto")
var nombrenivel2 = document.getElementById("nivel2-texto")
var nombrenivel3 = document.getElementById("nivel3-texto")
var nombrenivel4 = document.getElementById("nivel4-texto")
var nombrenivel5 = document.getElementById("nivel5-texto")
var nombrenivel6 = document.getElementById("nivel6-texto")
var nombrenivel7 = document.getElementById("nivel7-texto")
var nombrenivelPortero = document.getElementById("nivelPortero-texto")



var dNivel1 = document.getElementById("nivel1")
var dNivel2 = document.getElementById("nivel2")
var dNivel3 = document.getElementById("nivel3")
var dNivel4 = document.getElementById("nivel4")
var dNivel5 = document.getElementById("nivel5")
var dNivel6 = document.getElementById("nivel6")
var dNivel7 = document.getElementById("nivel7")
var dNivelPortero = document.getElementById("nivelPortero")

var desplegableFondo = document.getElementById("desplegable-fondo")
var desplegable = document.getElementById("desplegable-jugadores")
var desplegableNivel2 = document.getElementById("desplegable-jugadores-nivel2")
var desplegableNivel3 = document.getElementById("desplegable-jugadoresNivel3")
var desplegableNivel4 = document.getElementById("desplegable-jugadoresNivel4")
var desplegableNivel5 = document.getElementById("desplegable-jugadoresNivel5")
var desplegableNivel6 = document.getElementById("desplegable-jugadoresNivel6")
var desplegableNivel7 = document.getElementById("desplegable-jugadoresNivel7")
var desplegableNivelPortero = document.getElementById("desplegable-jugadoresNivelPortero")

var xDesplegable = document.getElementById("x-desplegable")
var xDesplegableNivel2 = document.getElementById("x-desplegableNivel2")
var xDesplegableNivel3 = document.getElementById("x-desplegableNivel3")
var xDesplegableNivel4 = document.getElementById("x-desplegableNivel4")
var xDesplegableNivel5 = document.getElementById("x-desplegableNivel5")
var xDesplegableNivel6 = document.getElementById("x-desplegableNivel6")
var xDesplegableNivel7 = document.getElementById("x-desplegableNivel7")
var xDesplegableNivelPortero = document.getElementById("x-desplegableNivelPortero")



dNivel1.addEventListener("click", desplegableActivo)
dNivel2.addEventListener("click", desplegableActivoNivel2)
dNivel3.addEventListener("click", desplegableActivoNivel3)
dNivel4.addEventListener("click", desplegableActivoNivel4)
dNivel5.addEventListener("click", desplegableActivoNivel5)
dNivel6.addEventListener("click", desplegableActivoNivel6)
dNivel7.addEventListener("click", desplegableActivoNivel7)
dNivelPortero.addEventListener("click", desplegableActivoNivelPortero)



function desplegableActivo() {
    desplegable.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel2() {
    desplegableNivel2.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel3() {
    desplegableNivel3.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel4() {
    desplegableNivel4.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel5() {
    desplegableNivel5.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel6() {
    desplegableNivel6.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivel7() {
    desplegableNivel7.style.display = 'block';
    desplegableFondo.style.display = 'block'
}

function desplegableActivoNivelPortero() {
    desplegableNivelPortero.style.display = 'block';
    desplegableFondo.style.display = 'block'
}



xDesplegable.addEventListener("click", desplegableOculto)
xDesplegableNivel2.addEventListener("click", desplegableOculto)
xDesplegableNivel3.addEventListener("click", desplegableOculto)
xDesplegableNivel4.addEventListener("click", desplegableOculto)
xDesplegableNivel5.addEventListener("click", desplegableOculto)
xDesplegableNivel6.addEventListener("click", desplegableOculto)
xDesplegableNivel7.addEventListener("click", desplegableOculto)
xDesplegableNivelPortero.addEventListener("click", desplegableOculto)

desplegableFondo.addEventListener("click", desplegableOculto)

function desplegableOculto() {
    desplegableFondo.style.display = 'none';
    desplegable.style.display = 'none';
    desplegableNivel2.style.display = 'none';
    desplegableNivel3.style.display = 'none';
    desplegableNivel4.style.display = 'none';
    desplegableNivel5.style.display = 'none';
    desplegableNivel6.style.display = 'none';
    desplegableNivel7.style.display = 'none';
    desplegableNivelPortero.style.display = 'none';
}


// fichar jugadores
var presupuesto = 100.0;
var valor = 0.0;
var valor_jugadores = 0;

var presupuestoRestante = document.getElementById("presupuesto")
var valorEquipo = document.getElementById("valor-equipo")


presupuestoRestante.textContent = presupuesto + " M €";
valorEquipo.textContent = valor + " M €";


document.addEventListener("click", function(e) {
    const botonfichar = e.target
    if (botonfichar.classList.contains('boton-fichar')) {
        console.log("CLICK EN EL BOTON")
        botonfichar.textContent = 'FICHADO'
        botonfichar.disabled = true;
        
        switch (botonfichar.id) {
            case 'nombre-es-cristian':
                nombrenivel1.textContent = 'CRISTIAN'
                valor_jugadores = 40;
                presupuesto = presupuesto - valor_jugadores;
                presupuestoRestante.textContent = presupuesto + " M €";
                break;

            case 'nombre-es-javitorre':
                nombrenivel1.textContent = 'JAVI TORRE'
                valor_jugadores = 39;
                presupuesto = presupuesto - valor_jugadores;
                presupuestoRestante.textContent = presupuesto + " M €";
                break;

            case 'nombre-es-salvi':
                nombrenivel1.textContent = 'SALVI'
                break;

            case 'nombre-es-mariete':
                nombrenivel1.textContent = 'MARIETE'
                break;

            case 'nombre-es-tatin':
                nombrenivel1.textContent = 'TATÍN'
                break;

            case 'nombre-es-josem':
                nombrenivel1.textContent = 'JOSE M'
                break;

            case 'nombre-es-xexu':
                nombrenivel1.textContent = 'XEXU'
                break;

            case 'nombre-es-joseadri':
                nombrenivel1.textContent = 'JOSE ADRI'
                break;

            case 'nombre-es-alejandro':
                nombrenivel1.textContent = 'ALEJANDRO'
                break;

            case 'nombre-es-ezequiel':
                nombrenivel1.textContent = 'EZEQUIEL'
                break;

            //NIVEL 2
            case 'nombre-es-vazquez':
                nombrenivel2.textContent = 'VAZQUEZ'
                valor_jugadores = 25;
                presupuesto = presupuesto - valor_jugadores;
                presupuestoRestante.textContent = presupuesto + " M €";
                break;

            case 'nombre-es-carlotor':
                nombrenivel2.textContent = 'CARLOTOR'
                break;

            case 'nombre-es-joaquin':
                nombrenivel2.textContent = 'JOAQUIN'
                break;

            case 'nombre-es-adric':
                nombrenivel2.textContent = 'ADRI C'
                break;

            case 'nombre-es-pedro':
                nombrenivel2.textContent = 'PEDRO'
                break;

            case 'nombre-es-carlosz':
                nombrenivel2.textContent = 'CARLOS Z'
                break;

            case 'nombre-es-danig':
                nombrenivel2.textContent = 'DANI G'
                break;

            case 'nombre-es-aaron':
                nombrenivel2.textContent = 'AARÓN'
                break;

            case 'nombre-es-josemateo':
                nombrenivel2.textContent = 'JOSE MATEO'
                break;

            case 'nombre-es-via':
                nombrenivel2.textContent = 'VIA'
                break;

                //NIVEL 3
            case 'nombre-es-pollo':
                nombrenivel3.textContent = 'POLLO'
                break;

            case 'nombre-es-juanmi':
                nombrenivel3.textContent = 'JUANMI'
                break;

            case 'nombre-es-jesusa':
                nombrenivel3.textContent = 'JESÚS A'
                break;

            case 'nombre-es-abde':
                nombrenivel3.textContent = 'ABDE'
                break;

            case 'nombre-es-rubenlobo':
                nombrenivel3.textContent = 'RUBÉN LOBO'
                break;

            case 'nombre-es-jesustorrejon':
                nombrenivel3.textContent = 'JESÚS TORREJÓN'
                break;

            case 'nombre-es-kapri':
                nombrenivel3.textContent = 'KAPRI'
                break;

            case 'nombre-es-luis':
                nombrenivel3.textContent = 'LUIS'
                break;

            case 'nombre-es-millan':
                nombrenivel3.textContent = 'MILLÁN'
                break;

            case 'nombre-es-jairo':
                nombrenivel3.textContent = 'JAIRO'
                break;

            //NIVEL 4
            case 'nombre-es-aitor':
                nombrenivel4.textContent = 'AITOR'
                break;

            case 'nombre-es-jorge1':
                nombrenivel4.textContent = 'JORGE'
                break;

            case 'nombre-es-ivan':
                nombrenivel4.textContent = 'IVÁN'
                break;

            case 'nombre-es-miguelr':
                nombrenivel4.textContent = 'MIGUEL R'
                break;

            case 'nombre-es-cristiand':
                nombrenivel4.textContent = 'CRISTIAN D'
                break;

            case 'nombre-es-davidr':
                nombrenivel4.textContent = 'DAVID R'
                break;

            case 'nombre-es-nandi':
                nombrenivel4.textContent = 'NANDI'
                break;

            case 'nombre-es-javimandy':
                nombrenivel4.textContent = 'JAVIMANDY'
                break;

            case 'nombre-es-enrique':
                nombrenivel4.textContent = 'ENRIQUE'
                break;

            case 'nombre-es-mariolobo':
                nombrenivel4.textContent = 'MARIO LOBO'
                break;

            //NIVEL 5
            case 'nombre-es-periko':
                nombrenivel5.textContent = 'PERIKO'
                break;

            case 'nombre-es-koti':
                nombrenivel5.textContent = 'KOTI'
                break;

            case 'nombre-es-ian':
                nombrenivel5.textContent = 'IAN'
                break;

            case 'nombre-es-manu':
                nombrenivel5.textContent = 'MANU'
                break;

            case 'nombre-es-manuelc':
                nombrenivel5.textContent = 'MANUEL C'
                break;

            case 'nombre-es-tuba':
                nombrenivel5.textContent = 'TUBA'
                break;

            case 'nombre-es-juanmic':
                nombrenivel5.textContent = 'JUANMI C'
                break;

            case 'nombre-es-victor':
                nombrenivel5.textContent = 'VICTOR'
                break;

            case 'nombre-es-hugo':
                nombrenivel5.textContent = 'HUGO'
                break;

            case 'nombre-es-danib':
                nombrenivel5.textContent = 'DANI B'
                break;

            //NIVEL 6
            case 'nombre-es-matias':
                nombrenivel6.textContent = 'MATÍAS'
                break;

            case 'nombre-es-adrikai':
                nombrenivel6.textContent = 'ADRIKAI'
                break;

            case 'nombre-es-darilox':
                nombrenivel6.textContent = 'DARÍO'
                break;

            case 'nombre-es-javisaucedo':
                nombrenivel6.textContent = 'JAVI SAUCEDO'
                break;

            case 'nombre-es-lagostena':
                nombrenivel6.textContent = 'LAGÓSTENA'
                break;

            case 'nombre-es-david':
                nombrenivel6.textContent = 'DAVID'
                break;

            case 'nombre-es-alvaro':
                nombrenivel6.textContent = 'ÁLVARO'
                break;

            case 'nombre-es-toni':
                nombrenivel6.textContent = 'TONI'
                break;

            case 'nombre-es-dani':
                nombrenivel6.textContent = 'DANI'
                break;

            case 'nombre-es-jorge':
                nombrenivel6.textContent = 'JORGE'
                break;

            //NIVEL 7
            case 'nombre-es-samuel':
                nombrenivel7.textContent = 'SAMUEL'
                break;

            case 'nombre-es-andres':
                nombrenivel7.textContent = 'ANDRÉS'
                break;

            case 'nombre-es-josema':
                nombrenivel7.textContent = 'JOSEMA'
                break;

            case 'nombre-es-hiu':
                nombrenivel7.textContent = 'HIU'
                break;

            case 'nombre-es-josete':
                nombrenivel7.textContent = 'JOSETE'
                break;

            case 'nombre-es-mateo':
                nombrenivel7.textContent = 'MATEO'
                break;

            case 'nombre-es-manopla':
                nombrenivel7.textContent = 'MANOPLA'
                break;

            case 'nombre-es-marco':
                nombrenivel7.textContent = 'MARCO'
                break;

            case 'nombre-es-ale':
                nombrenivel7.textContent = 'ALE'
                break;

            case 'nombre-es-sergiop':
                nombrenivel7.textContent = 'SERGIO P'
                break;

            //NIVEL PORTERO
            case 'nombre-es-diegog':
                nombrenivelPortero.textContent = 'DIEGO G'
                break;

            case 'nombre-es-luisgra':
                nombrenivelPortero.textContent = 'LUISGRA'
                break;

            case 'nombre-es-guty':
                nombrenivelPortero.textContent = 'GUTY'
                break;

            case 'nombre-es-pabloramos':
                nombrenivelPortero.textContent = 'PABLO RAMOS'
                break;

            case 'nombre-es-daniP':
                nombrenivelPortero.textContent = 'DANI'
                break;

            case 'nombre-es-rafa':
                nombrenivelPortero.textContent = 'RAFA'
                break;

            case 'nombre-es-lisandro':
                nombrenivelPortero.textContent = 'LISANDRO'
                break;

            case 'nombre-es-darioP':
                nombrenivelPortero.textContent = 'DARÍO'
                break;

            case 'nombre-es-yerai':
                nombrenivelPortero.textContent = 'YERAI'
                break;

            case 'nombre-es-jesuli':
                nombrenivelPortero.textContent = 'JESULI'
                break;

        }
    }
});


// calculo de presupuesto






