import {partida, Estado} from './model';

export const consigueNumeroRandom = () : number => Math.floor(Math.random() * 10) + 1;

export const obtenerCarta = (numeroAleatorio: number) : number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio;
  }

export const obtenerPuntos = (carta: number) : number => {
    return carta > 7 ? 0.5 : carta;
  }
  
export const sumarPuntos = (puntosCarta : number) : number => {
    return puntosCarta + partida.puntuacion;
  }
  
export  const actualizarPuntos = (puntosSumados : number) : void => {
    partida.puntuacion = puntosSumados;
  }  

export const comprobacionPuntuacion = (puntuacion: number) : Estado => {
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

export const inicializaPartida = () => {
    return partida.puntuacion = 0;
}