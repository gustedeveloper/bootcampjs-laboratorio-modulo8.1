import "./style.css";

let puntuacion : number = 0;
let estado : Estado;

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

const muestraPuntuacion = () : void => {
  const elementPuntuacion = document.getElementById("puntuacion");
  if (elementPuntuacion) {
  elementPuntuacion.innerHTML = `${puntuacion}`;
  }
}

muestraPuntuacion();

const consigueNumeroRandom = () : number => Math.floor(Math.random() * 10) + 1;

const obtenerCarta = (numeroAleatorio: number) : number => {
  if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
  }
  return numeroAleatorio;
}

const dameCarta = () : void => {
  const numeroAleatorio = consigueNumeroRandom();
  const carta = obtenerCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  mostrarCarta(urlCarta);
  const puntos = obtenerPuntos(carta);
  const puntosSumados = sumarPuntos(puntos);
  actualizarPuntos(puntosSumados);
  estado = comprobacionPuntuacion(puntuacion);
  muestraPuntuacion();
  if (carta !== 0) {
    if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  }
  }
  gestionarPartida(estado);
}

const obtenerPuntos = (carta: number) : number => {
  return carta > 7 ? 0.5 : carta;
}

const sumarPuntos = (puntosCarta : number) : number => {
  return puntosCarta + puntuacion;
}

const actualizarPuntos = (puntosSumados : number) : void => {
  puntuacion = puntosSumados;
}

const comprobacionPuntuacion = (puntuacion: number) : Estado => {
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
  return "PERDEDOR";
  }

  const mensajeMePlanto = (estado: Estado) : string => {
    switch(estado) {
        case "MENOR_DE_CUATRO": 
        return "Has sido muy conservador.";
        case "CINCO":
        return "Te ha entrado el canguelo, ¿eh?";
        case "SEIS_O_SIETE":
        return "Casi casi...";
        default:
        return "Algo ha ido mal...";
    }
}

const mostrarMensaje = (mensajeTexto : string) : void => {
  if (mensaje instanceof HTMLElement) {
    mensaje.innerHTML = mensajeTexto;
  }
}

const gestionarPartida = (estado: Estado) : void => {
  if (estado === "PERDEDOR") {
    mostrarMensaje("Te has pasado de siete media. ¿Lo intentas de nuevo?")
    if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
      botonDameCarta.disabled = true;
      botonNuevaPartida.disabled = false;
      botonMePlanto.disabled = true;
    }
  } else if (estado === "GANADOR") {
    mostrarMensaje("¡Lo has clavado!");
    if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
      botonDameCarta.disabled = true;
      botonNuevaPartida.disabled = false;
      botonMePlanto.disabled = true;
  }
}
}

const mePlanto = () : void => {
  const mensajeTexto = mensajeMePlanto(estado);
  mostrarMensaje(mensajeTexto);
  if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
  botonDameCarta.disabled = true;
  botonNuevaPartida.disabled = false;
  botonMePlanto.disabled = true;
}
  if (comprobacionPuntuacion(puntuacion) !== "GANADOR") {
    if (botonQueHubiesePasado instanceof HTMLButtonElement) {
      botonQueHubiesePasado.style.visibility = "visible";
    }
  }
}

const queHubiesePasado = () : void => {
  dameCarta();
  if (botonQueHubiesePasado instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
  botonQueHubiesePasado.style.visibility = "hidden";
  botonMePlanto.disabled = true;
}
}

const nuevaPartida = () : void => {
  const carta = 0;
  puntuacion = 0;
  muestraPuntuacion();
  const urlCarta = obtenerUrlCarta(carta);
  mostrarCarta(urlCarta);
  if (botonNuevaPartida instanceof HTMLButtonElement && botonDameCarta instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement && mensaje instanceof HTMLElement) {
  botonNuevaPartida.disabled = true;
  botonDameCarta.disabled = false;
  botonQueHubiesePasado.style.visibility = "hidden";
  mensaje.innerHTML = "";
}
}

const obtenerUrlCarta = (carta : number) : string => {
  switch(carta) {
    case 0:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default: 
    return "Error: Carta inválida";
    
  }
  }

  const mostrarCarta = (urlCarta: string) : void => {
    if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = urlCarta;
}
};


if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement) {
botonDameCarta.addEventListener("click", dameCarta);

botonNuevaPartida.addEventListener("click", nuevaPartida);

botonMePlanto.addEventListener("click", mePlanto);

botonQueHubiesePasado.addEventListener("click", queHubiesePasado);
}