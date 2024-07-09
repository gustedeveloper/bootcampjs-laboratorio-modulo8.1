import { Estado } from './model';

import { obtenerCarta, obtenerPuntos, comprobacionPuntuacion } from './motor';

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

// Comprobación de que al generarse el número aleatorio, si es mayor de 7, suma 2

describe("obtenerCarta", () => {
  it("si el número aleatorio es mayor que 7, debería devolver el número aleatorio + 2", () => {

    // Arrange
    const numeroAleatorio : number = 10;
    const resultadoEsperado : number = 12;

    // Act 
    const resultado = obtenerCarta(numeroAleatorio);

    // Assert 
    expect(resultado).toBe(resultadoEsperado);

  });
  it("si el número aleatorio no es mayor que 7, debería devolverlo sin sumar 2", () => {

    // Arrange
    const numeroAleatorio : number = 7;
    const resultadoEsperado : number = 7;

    // Act
    const resultado = obtenerCarta(numeroAleatorio);

    // Assert
    expect(resultado).toBe(resultadoEsperado);

  });

});

// Comprobación de que al obtener una carta, se devuelve el valor (puntos) correspondiente a dicha carta

describe("obtenerPuntos", () => {
  it("si la carta es mayor que 7, debería devolver 0.5 puntos", () => {

    // Arrange 
    const carta : number = 10;
    const resultadoEsperado : number = 0.5;

    // Act
    const resultado = obtenerPuntos(carta);

    // Assert
    expect(resultado).toBe(resultadoEsperado);

  });

  it("si la carta es menor o igual que 7, debería devolver su valor nominal en puntos", () => {

    // Arrange
    const carta : number = 6;
    const resultadoEsperado : number = 6;

    // Act 
    const resultado = obtenerPuntos(carta);

    // Assert
    expect(resultado).toBe(resultadoEsperado);


  });


});


