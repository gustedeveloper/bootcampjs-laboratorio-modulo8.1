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
let mensaje = document.getElementById("mensaje");
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

const queHubiesePasado = () => {
  dameCarta();
  resultado(estado);
  if (botonQueHubiesePasado instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
  botonQueHubiesePasado.style = "visibility: hidden";
  botonMePlanto.disabled = true;
}
}

const gameOver = (estado) => {
  if (estado === "PERDEDOR") {
    if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
    resultado(estado);
    botonNuevaPartida.disabled = false;
    botonMePlanto.disabled = true;
  }
  } 
}

const nuevaPartida = () => {
  mostrarCarta(0);
  if (botonNuevaPartida instanceof HTMLButtonElement && botonDameCarta instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement && mensaje instanceof HTMLElement) {
  botonNuevaPartida.disabled = true;
  botonDameCarta.disabled = false;
  botonQueHubiesePasado.style = "visibility: hidden";
  mensaje.innerHTML = "";
}
}

const mostrarCarta = (carta) => {
  switch(carta) {
    case 0:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    puntuacion = 0;  
    break;
    case 1:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg");
    puntuacion += 1;
    break;
    case 2:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg");
    puntuacion += 2;
    break;
    case 3:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");
    puntuacion += 3;
    break;
    case 4:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg");
    puntuacion += 4;
    break;
    case 5:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg");
    puntuacion += 5;
    break;
    case 6:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg");
    puntuacion += 6;
    break;
    case 7:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg");
    puntuacion += 7;
    break;
    case 10:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg");
    puntuacion += 0.5;
    break;
    case 11:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg");
    puntuacion += 0.5;
    break;
    case 12:
    imagen.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg");
    puntuacion += 0.5;
    break;
    default: 
    console.error("Error: Carta inválida")
    break;
  }
  muestraPuntuacion();
  return carta;
  
  }


if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement) {
botonDameCarta.addEventListener("click", dameCarta);

botonNuevaPartida.addEventListener("click", nuevaPartida);

botonMePlanto.addEventListener("click", mePlanto);

botonQueHubiesePasado.addEventListener("click", queHubiesePasado);
}