import {partida, Estado} from './model';

import {inicializaPartida, consigueNumeroRandom, obtenerCarta, obtenerPuntos, sumarPuntos, actualizarPuntos, comprobacionPuntuacion} from './motor';

export let mensaje = document.getElementById("mensaje");
export const imagen = document.getElementById("imagen");
export const botonDameCarta = document.getElementById("pedir-carta");
export const botonQueHubiesePasado = document.getElementById("que-hubiese-pasado");
export const botonNuevaPartida = document.getElementById("nueva-partida");
export const botonMePlanto = document.getElementById("me-planto");

export const inicializaUI = () => {
  mensaje;
  imagen;
  botonDameCarta;
  botonQueHubiesePasado;
  botonNuevaPartida;
  botonMePlanto;

  if (botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
    botonNuevaPartida.disabled = true;
    botonMePlanto.disabled = true;
    }

}
 
export const handleButtonClicks = () => {
  if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", dameCarta);
    
    botonNuevaPartida.addEventListener("click", nuevaPartida);
    
    botonMePlanto.addEventListener("click", mePlanto);
    
    botonQueHubiesePasado.addEventListener("click", queHubiesePasado);
    }
}


export const muestraPuntuacion = () : void => {
    const elementPuntuacion = document.getElementById("puntuacion");
    if (elementPuntuacion) {
    elementPuntuacion.innerHTML = `${partida.puntuacion}`;
    }
  }

muestraPuntuacion();

export const dameCarta = () : void => {
    const numeroAleatorio = consigueNumeroRandom();
    const carta = obtenerCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntos = obtenerPuntos(carta);
    const puntosSumados = sumarPuntos(puntos);
    actualizarPuntos(puntosSumados);
    const estado = comprobacionPuntuacion(partida.puntuacion);
    muestraPuntuacion();
    if (carta !== 0) {
      if (botonMePlanto instanceof HTMLButtonElement) {
      botonMePlanto.disabled = false;
    }
    }
    gestionarPartida(estado);
  }

export const mensajeMePlanto = (estado: Estado) : string => {
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

export const mostrarMensaje = (mensajeTexto : string) : void => {
    if (mensaje instanceof HTMLElement) {
      mensaje.innerHTML = mensajeTexto;
    }
  }
  
export const gestionarPartida = (estado: Estado) : void => {
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

export const mePlanto = () : void => {
    const estado = comprobacionPuntuacion(partida.puntuacion);
    const mensajeTexto = mensajeMePlanto(estado);
    mostrarMensaje(mensajeTexto);
    if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
    botonNuevaPartida.disabled = false;
    botonMePlanto.disabled = true;
  }
    if (comprobacionPuntuacion(partida.puntuacion) !== "GANADOR") {
      if (botonQueHubiesePasado instanceof HTMLButtonElement) {
        botonQueHubiesePasado.style.visibility = "visible";
      }
    }
  }
  
export  const queHubiesePasado = () : void => {
    dameCarta();
    if (botonQueHubiesePasado instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
    botonQueHubiesePasado.style.visibility = "hidden";
    botonMePlanto.disabled = true;
  }
  }
  
export  const nuevaPartida = () : void => {
    const carta = inicializaPartida();
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

 export const obtenerUrlCarta = (carta : number) : string => {
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
  
export  const mostrarCarta = (urlCarta: string) : void => {
    const imagen = document.getElementById("imagen");
      if (imagen && imagen instanceof HTMLImageElement) {
      imagen.src = urlCarta;
  }
  };
