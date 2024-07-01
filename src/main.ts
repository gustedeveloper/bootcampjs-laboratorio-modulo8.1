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

const consigueCartaRandom = () : number => Math.floor(Math.random() * 10) + 1;

const muestraPuntuacion = () : void => {
  const elementPuntuacion = document.getElementById("puntuacion");
  if (elementPuntuacion) {
  elementPuntuacion.innerHTML = `${puntuacion}`;
  }
}

muestraPuntuacion();

const dameCarta = () => {
  let carta = consigueCartaRandom();
  
  if (carta > 7) {
      carta = carta + 2;
  }

  mostrarCarta(carta);
  estado = comprobacionPuntuacion(puntuacion);
  if (carta !== 0) {
    if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  }
  }
  gameOver(estado);
}

const comprobacionPuntuacion = (puntuacion) : string => {
  if (puntuacion > 7.5) {
      return "PERDEDOR";
  }
  if (puntuacion === 7.5 ) {
      return "GANADOR";
  }
  if (puntuacion <= 4) {
      return "MENOR_DE_CUATRO";
  }   
  if (puntuacion <= 5) {
      return "CINCO";
  }  
  if (puntuacion <= 6 || puntuacion <= 7) {
      return "SEIS_O_SIETE";
  } 
  }