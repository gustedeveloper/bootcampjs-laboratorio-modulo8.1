import { Estado } from './model';

import {  consigueNumeroRandom, obtenerCarta, comprobacionPuntuacion } from './motor';


import { dameCarta } from './ui';

// Comprobación de si el jugador gana el juego o no

describe("comprobacionPuntuacion", () => {
  it("si la puntuación es mayor que 7.5, debería devolver PERDEDOR", () => {
    // Arrange
    const puntuacion : number = 9;
    const resultadoEsperado : Estado = "PERDEDOR";

    // Act

    const resultado = comprobacionPuntuacion(puntuacion);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("si la puntuación es igual a 7.5, debería devolver GANADOR", () => {
    // Arrange
    const puntuacion : number = 7.5;
    const resultadoEsperado : Estado = "GANADOR";

    // Act

    const resultado = comprobacionPuntuacion(puntuacion);

    // Assert
    expect(resultado).toBe(resultadoEsperado);

  });
});

