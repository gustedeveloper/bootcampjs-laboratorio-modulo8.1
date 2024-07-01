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

  const resultado = (estado: Estado) => {
    let texto = "";
    let mensaje = document.getElementById("mensaje");
    estado = comprobacionPuntuacion(puntuacion);
    switch(estado) {
        case "PERDEDOR":
        texto = "Te has pasado de siete media. ¡HAS PERDIDO! ¿Lo intentas de nuevo?"
        break;
        case "GANADOR": 
        texto = "¡Lo has clavado! ¡Enhorabuena!";
        break;
        case "MENOR_DE_CUATRO": 
        texto = "Has sido muy conservador.";
        break;
        case "CINCO":
        texto = "Te ha entrado el canguelo, ¿eh?";
        break;
        case "SEIS_O_SIETE":
        texto = "Casi casi...";
        break;
        default:
        texto = "Algo ha ido mal...";
        break;
    }
    if (mensaje instanceof HTMLElement) {
    mensaje.innerHTML = texto;
  }
}

const mePlanto = () : void => {
  resultado(estado);
  if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
  botonDameCarta.disabled = true;
  botonNuevaPartida.disabled = false;
  botonMePlanto.disabled = true;
}
  if (comprobacionPuntuacion(puntuacion) !== "GANADOR") {
    if (botonQueHubiesePasado instanceof HTMLButtonElement) {
      botonQueHubiesePasado.style = "visibility: visible";
    }
  }
}