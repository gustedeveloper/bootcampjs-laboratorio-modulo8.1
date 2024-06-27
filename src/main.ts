import "./style.css";

const numeroTurno = document.querySelector(".numero-turno");
let turno: number = 1;

if (numeroTurno instanceof HTMLElement) {
    turno = parseInt(numeroTurno.innerHTML, 10);
}
const botonAnterior = document.querySelector(".anterior");
const botonSiguiente = document.querySelector(".siguiente");
const botonReset = document.querySelector(".reset");
const botonIntro = document.querySelector(".establecer");

function dosDigitos(num: number): string {
    return num.toString().padStart(2, '0');
  }

function turnoAnterior(): void {
    if (numeroTurno instanceof HTMLElement) {
    turno--;
        if (turno <= 1) {
        reset();
      } else {
        numeroTurno.innerText = dosDigitos(turno);
      } 
    }
}

function turnoSiguiente(): void {
    if (numeroTurno instanceof HTMLElement) {
    turno++;
    numeroTurno.innerText = dosDigitos(turno);
    }
}

function reset() {
    const numeroElegido = document.querySelector("#numero-elegido");
    if (numeroTurno instanceof HTMLElement && numeroElegido instanceof HTMLInputElement) {
    turno = 1;
    numeroTurno.innerText = dosDigitos(turno);
    numeroElegido.value = "";
    }
}

function establecerTurnoManual() {
    const numeroElegido = document.querySelector("#numero-elegido");
    if (numeroElegido instanceof HTMLInputElement && numeroTurno instanceof HTMLElement) {
    const numeroEstablecido = parseInt(numeroElegido.value, 10);
    turno = numeroEstablecido;
    numeroTurno.innerText = dosDigitos(numeroEstablecido);
    }
   }
   
if (botonAnterior instanceof HTMLElement) {
botonAnterior.addEventListener("click", turnoAnterior);
}

if (botonSiguiente instanceof HTMLElement) {
botonSiguiente.addEventListener("click", turnoSiguiente);
}

if (botonReset instanceof HTMLElement) {
botonReset.addEventListener("click", reset);
}

if (botonIntro instanceof HTMLElement) {
botonIntro.addEventListener("click", establecerTurnoManual);
}
