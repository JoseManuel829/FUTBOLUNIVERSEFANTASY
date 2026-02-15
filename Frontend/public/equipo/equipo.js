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


var nombreJugadorNivelPortero = "";
var nombreJugadorNivel1 = "";
var nombreJugadorNivel2 = "";
var nombreJugadorNivel3 = "";
var nombreJugadorNivel4 = "";
var nombreJugadorNivel5 = "";
var nombreJugadorNivel6 = "";
var nombreJugadorNivel7 = "";


var presupuestoRestante = document.getElementById("presupuesto")
var valorRestante = document.getElementById("valor-equipo")


var presupuestoNivel1 = 0;
var presupuestoNivel2 = 0;
var presupuestoNivel3 = 0;
var presupuestoNivel4 = 0;
var presupuestoNivel5 = 0;
var presupuestoNivel6 = 0;
var presupuestoNivel7 = 0;
var presupuestoNivelPortero = 0;

var presupuestoNiveles = presupuestoNivel1 + presupuestoNivel2 + presupuestoNivel3 + presupuestoNivel4 + presupuestoNivel5 + presupuestoNivel6 + presupuestoNivel7 + presupuestoNivelPortero;
var presupuestoTotal = 100;

presupuestoRestanteOf = presupuestoTotal - presupuestoNiveles;
presupuestoRestante.textContent = presupuestoRestanteOf + " M €";



function actualizarValorEquipo() {
    var valorEquipo = presupuestoNivel1 + presupuestoNivel2 + presupuestoNivel3 + presupuestoNivel4 + 
    presupuestoNivel5 + presupuestoNivel6 + presupuestoNivel7 + presupuestoNivelPortero;
    
    valorRestante.textContent = valorEquipo + " M €";
}


document.addEventListener("click", function(e) {
    const botonfichar = e.target
    if (botonfichar.classList.contains('boton-fichar')) {
        console.log("CLICK EN EL BOTON")
        botonfichar.textContent = 'FICHADO'

        
        let nuevoPrecio = 0;
        let nuevoValor = 0;
        let nuevoValor2 = 0;

        switch (botonfichar.id) {
            case 'nombre-es-cristian':
                nombrenivel1.textContent = 'CRISTIAN'
                nombreJugadorNivel1 = "Cristian"
                
                nuevoPrecio = 40;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";
                
                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                
                break;

            case 'nombre-es-javitorre':
                nombrenivel1.textContent = 'JAVI TORRE'
                nombreJugadorNivel1 = "Javi Torre"
                valor_jugadores = 39;
                
                nuevoPrecio = 39;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                
                break;

            case 'nombre-es-salvi':
                nombrenivel1.textContent = 'SALVI'
                nombreJugadorNivel1 = "Salvi"

                nuevoPrecio = 38;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-mariete':
                nombrenivel1.textContent = 'MARIETE'
                nombreJugadorNivel1 = "Mariete"

                nuevoPrecio = 37;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-tatin':
                nombrenivel1.textContent = 'TATÍN'
                nombreJugadorNivel1 = "Tatín"

                nuevoPrecio = 36;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-josem':
                nombrenivel1.textContent = 'JOSE M'
                nombreJugadorNivel1 = "Jose M"

                nuevoPrecio = 35;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-xexu':
                nombrenivel1.textContent = 'XEXU'
                nombreJugadorNivel1 = "Xexu"

                nuevoPrecio = 34;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-joseadri':
                nombrenivel1.textContent = 'JOSE ADRI'
                nombreJugadorNivel1 = "Jose Adri"

                nuevoPrecio = 33;
                presupuestoTotal -=1 (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-alejandro':
                nombrenivel1.textContent = 'ALEJANDRO'
                nombreJugadorNivel1 = "Alejandro"

                nuevoPrecio = 32;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-ezequiel':
                nombrenivel1.textContent = 'EZEQUIEL'
                nombreJugadorNivel1 = "Ezequiel"

                nuevoPrecio = 31;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel1);
                presupuestoNivel1 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            //NIVEL 2
            case 'nombre-es-vazquez':
                nombrenivel2.textContent = 'VAZQUEZ'
                nombreJugadorNivel2 = "Vázquez"
                
                nuevoPrecio = 25;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-carlotor':
                nombrenivel2.textContent = 'CARLOTOR'
                nombreJugadorNivel2 = "Carlotor"
                
                nuevoPrecio = 24;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-joaquin':
                nombrenivel2.textContent = 'JOAQUIN'
                nombreJugadorNivel2 = "Joaquín"

                nuevoPrecio = 23;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-adric':
                nombrenivel2.textContent = 'ADRI C'
                nombreJugadorNivel2 = "Adri C"

                nuevoPrecio = 22.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-pedro':
                nombrenivel2.textContent = 'PEDRO'
                nombreJugadorNivel2 = "Pedro"

                nuevoPrecio = 22;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-carlosz':
                nombrenivel2.textContent = 'CARLOS Z'
                nombreJugadorNivel2 = "Carlos Z"

                nuevoPrecio = 21.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-danig':
                nombrenivel2.textContent = 'DANI G'
                nombreJugadorNivel2 = "Dani G"

                nuevoPrecio = 21;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-aaron':
                nombrenivel2.textContent = 'AARÓN'
                nombreJugadorNivel2 = "Aarón"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-josemateo':
                nombrenivel2.textContent = 'JOSE MATEO'
                nombreJugadorNivel2 = "Jose Mateo"

                nuevoPrecio = 19.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-via':
                nombrenivel2.textContent = 'VIA'
                nombreJugadorNivel2 = "Vía"

                nuevoPrecio = 19;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel2);
                presupuestoNivel2 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

                //NIVEL 3
            case 'nombre-es-pollo':
                nombrenivel3.textContent = 'POLLO'
                nombreJugadorNivel3 = "Pollo"

                nuevoPrecio = 18;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-juanmi':
                nombrenivel3.textContent = 'JUANMI'
                nombreJugadorNivel3 = "Juanmi"

                nuevoPrecio = 17.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jesusa':
                nombrenivel3.textContent = 'JESÚS A'
                nombreJugadorNivel3 = "Jesús A"

                nuevoPrecio = 17;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-abde':
                nombrenivel3.textContent = 'ABDE'
                nombreJugadorNivel3 = "Abde"

                nuevoPrecio = 16.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-rubenlobo':
                nombrenivel3.textContent = 'RUBÉN LOBO'
                nombreJugadorNivel3 = "Rubén Lobo"

                nuevoPrecio = 16;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jesustorrejon':
                nombrenivel3.textContent = 'JESÚS TORREJÓN'
                nombreJugadorNivel3 = "Jesús Torrejón"

                nuevoPrecio = 15.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-kapri':
                nombrenivel3.textContent = 'KAPRI'
                nombreJugadorNivel3 = "Kapri"

                nuevoPrecio = 15;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-luis':
                nombrenivel3.textContent = 'LUIS'
                nombreJugadorNivel3 = "Luis"

                nuevoPrecio = 14.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-millan':
                nombrenivel3.textContent = 'MILLÁN'
                nombreJugadorNivel3 = "Millán"

                nuevoPrecio = 14;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jairo':
                nombrenivel3.textContent = 'JAIRO'
                nombreJugadorNivel3 = "Jairo"

                nuevoPrecio = 13.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel3);
                presupuestoNivel3 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            //NIVEL 4
            case 'nombre-es-aitor':
                nombrenivel4.textContent = 'AITOR'
                nombreJugadorNivel4 = "Aitor"

                nuevoPrecio = 13;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jorge1':
                nombrenivel4.textContent = 'JORGE'
                nombreJugadorNivel4 = "Jorge"

                nuevoPrecio = 12.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-ivan':
                nombrenivel4.textContent = 'IVÁN'
                nombreJugadorNivel4 = "Iván"

                nuevoPrecio = 12;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-miguelr':
                nombrenivel4.textContent = 'MIGUEL R'
                nombreJugadorNivel4 = "Miguel R"

                nuevoPrecio = 11.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-cristiand':
                nombrenivel4.textContent = 'CRISTIAN D'
                nombreJugadorNivel4 = "Cristian D"

                nuevoPrecio = 11;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-davidr':
                nombrenivel4.textContent = 'DAVID R'
                nombreJugadorNivel4 = "David R"

                nuevoPrecio = 10.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-nandi':
                nombrenivel4.textContent = 'NANDI'
                nombreJugadorNivel4 = "Nandi"

                nuevoPrecio = 10;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-javimandy':
                nombrenivel4.textContent = 'JAVIMANDY'
                nombreJugadorNivel4 = "Javimandy"

                nuevoPrecio = 9.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-enrique':
                nombrenivel4.textContent = 'ENRIQUE'
                nombreJugadorNivel4 = "Enrique"

                nuevoPrecio = 9;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-mariolobo':
                nombrenivel4.textContent = 'MARIO LOBO'
                nombreJugadorNivel4 = "Mario Lobo"

                nuevoPrecio = 8.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel4);
                presupuestoNivel4 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            //NIVEL 5
            case 'nombre-es-periko':
                nombrenivel5.textContent = 'PERIKO'
                nombreJugadorNivel5 = "Periko"

                nuevoPrecio = 9;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-koti':
                nombrenivel5.textContent = 'KOTI'
                nombreJugadorNivel5 = "Koti"

                nuevoPrecio = 8.8;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-ian':
                nombrenivel5.textContent = 'IAN'
                nombreJugadorNivel5 = "Ian"

                nuevoPrecio = 8.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-manu':
                nombrenivel5.textContent = 'MANU'
                nombreJugadorNivel5 = "Manu"

                nuevoPrecio = 8.2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-manuelc':
                nombrenivel5.textContent = 'MANUEL C'
                nombreJugadorNivel5 = "Manuel C"

                nuevoPrecio = 8;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-tuba':
                nombrenivel5.textContent = 'TUBA'
                nombreJugadorNivel5 = "Tuba"

                nuevoPrecio = 7.8;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-juanmic':
                nombrenivel5.textContent = 'JUANMI C'
                nombreJugadorNivel5 = "Juanmi C"

                nuevoPrecio = 7.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-victor':
                nombrenivel5.textContent = 'VICTOR'
                nombreJugadorNivel5 = "Víctor"

                nuevoPrecio = 7.2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-hugo':
                nombrenivel5.textContent = 'HUGO'
                nombreJugadorNivel5 = "Hugo"

                nuevoPrecio = 7;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-danib':
                nombrenivel5.textContent = 'DANI B'
                nombreJugadorNivel5 = "Dani B"

                nuevoPrecio = 6.5;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel5);
                presupuestoNivel5 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            //NIVEL 6
            case 'nombre-es-matias':
                nombrenivel6.textContent = 'MATÍAS'
                nombreJugadorNivel6 = "Matías"

                nuevoPrecio = 6;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-adrikai':
                nombrenivel6.textContent = 'ADRIKAI'
                nombreJugadorNivel6 = "Adrikai"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-darilox':
                nombrenivel6.textContent = 'DARÍO'
                nombreJugadorNivel6 = "Darío"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-javisaucedo':
                nombrenivel6.textContent = 'JAVI SAUCEDO'
                nombreJugadorNivel6 = "Javi Saucedo"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-lagostena':
                nombrenivel6.textContent = 'LAGÓSTENA'
                nombreJugadorNivel6 = "Lagóstena"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-david':
                nombrenivel6.textContent = 'DAVID'
                nombreJugadorNivel6 = "David"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-alvaro':
                nombrenivel6.textContent = 'ÁLVARO'
                nombreJugadorNivel6 = "Álvaro"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-toni':
                nombrenivel6.textContent = 'TONI'
                nombreJugadorNivel6 = "Toni"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-dani':
                nombrenivel6.textContent = 'DANI'
                nombreJugadorNivel6 = "Dani"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jorge':
                nombrenivel6.textContent = 'JORGE'
                nombreJugadorNivel6 = "Jorge"

                nuevoPrecio = 2;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel6);
                presupuestoNivel6 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            //NIVEL 7
            case 'nombre-es-samuel':
                nombrenivel7.textContent = 'SAMUEL'
                nombreJugadorNivel7 = "Samuel"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-andres':
                nombrenivel7.textContent = 'ANDRÉS'
                nombreJugadorNivel7 = "Andrés"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-josema':
                nombrenivel7.textContent = 'JOSEMA'
                nombreJugadorNivel7 = "Josema"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-hiu':
                nombrenivel7.textContent = 'HIU'
                nombreJugadorNivel7 = "Hiu"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-josete':
                nombrenivel7.textContent = 'JOSETE'
                nombreJugadorNivel7 = "Josete"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-mateo':
                nombrenivel7.textContent = 'MATEO'
                nombreJugadorNivel7 = "Mateo"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-manopla':
                nombrenivel7.textContent = 'MANOPLA'
                nombreJugadorNivel7 = "Manopla"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-marco':
                nombrenivel7.textContent = 'MARCO'
                nombreJugadorNivel7 = "Marco"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-ale':
                nombrenivel7.textContent = 'ALE'
                nombreJugadorNivel7 = "Ale"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-sergiop':
                nombrenivel7.textContent = 'SERGIO P'
                nombreJugadorNivel7 = "Sergio P"

                nuevoPrecio = 1;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivel7);
                presupuestoNivel7 = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            //NIVEL PORTERO
            case 'nombre-es-diegog':
                nombrenivelPortero.textContent = 'DIEGO G'
                nombreJugadorNivelPortero = "Diego G"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-luisgra':
                nombrenivelPortero.textContent = 'LUISGRA'
                nombreJugadorNivelPortero = "Luisgra"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-guty':
                nombrenivelPortero.textContent = 'GUTY'
                nombreJugadorNivelPortero = "Guty"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-pabloramos':
                nombrenivelPortero.textContent = 'PABLO RAMOS'
                nombreJugadorNivelPortero = "Pablo Ramos"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-daniP':
                nombrenivelPortero.textContent = 'DANI'
                nombreJugadorNivelPortero = "Dani"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-rafa':
                nombrenivelPortero.textContent = 'RAFA'
                nombreJugadorNivelPortero = "Rafa"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-lisandro':
                nombrenivelPortero.textContent = 'LISANDRO'
                nombreJugadorNivelPortero = "Lisandro"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-darioP':
                nombrenivelPortero.textContent = 'DARÍO'
                nombreJugadorNivelPortero = "Darío"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-yerai':
                nombrenivelPortero.textContent = 'YERAI'
                nombreJugadorNivelPortero = "Yerai"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

            case 'nombre-es-jesuli':
                nombrenivelPortero.textContent = 'JESULI'
                nombreJugadorNivelPortero = "Jesuli"

                nuevoPrecio = 20;
                presupuestoTotal -= (nuevoPrecio - presupuestoNivelPortero);
                presupuestoNivelPortero = nuevoPrecio;
                presupuestoRestante.textContent = presupuestoTotal + " M €";

                actualizarValorEquipo()
                
                botonfichar.id.disabled = true;
                break;

        }
    }
});



// CONFIRMAR EQUIPO

var btn_confirmar = document.getElementById("btn-confirmar");

btn_confirmar.addEventListener("click", confirmarEquipo);

function confirmarEquipo(e) {
    e.preventDefault();

    const datos = {
        nivel1: nombreJugadorNivel1,
        nivel2: nombreJugadorNivel2, 
        nivel3: nombreJugadorNivel3,
        nivel4: nombreJugadorNivel4, 
        nivel5: nombreJugadorNivel5,
        nivel6: nombreJugadorNivel6,
        nivel7: nombreJugadorNivel7,
        nivelPortero: nombreJugadorNivelPortero
    };

    fetch("http://127.0.0.1:8000/recibirJugadores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(data => console.log(data));

    };
