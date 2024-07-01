import "./style.css";

let puntuacion : number = 0;
/*let estado;*/

type Estado = 
| "PERDEDOR"
| "GANADOR"
| "MENOR_DE_CUATRO"
| "CINCO"
| "SEIS_O_SIETE"

const imagen = document.getElementById("imagen");
const mensaje = document.getElementById("mensaje");
const botonDameCarta = document.getElementById("pedir-carta");
const botonQueHubiesePasado = document.getElementById("que-hubiese-pasado");

const botonNuevaPartida = document.getElementById("nueva-partida");
const botonMePlanto = document.getElementById("me-planto");

if (botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
botonNuevaPartida.disabled = true;
botonMePlanto.disabled = true;
}

const consigueCartaRandom = () => Math.floor(Math.random() * 10) + 1;

const muestraPuntuacion = () : void => {
  const elementPuntuacion = document.getElementById("puntuacion");
  if (elementPuntuacion instanceof HTMLInputElement) {
  elementPuntuacion.innerHTML = puntuacion;
  }
}

muestraPuntuacion();