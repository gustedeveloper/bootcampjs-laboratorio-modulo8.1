interface Partida {
    puntuacion : number;
}

export type Estado = 
| "PERDEDOR"
| "GANADOR"
| "MENOR_DE_CUATRO"
| "CINCO"
| "SEIS_O_SIETE"

export const partida : Partida = {
    puntuacion: 0,
}


