import "./style.css";

let turno: number = parseInt((document.querySelector(".numero-turno") as HTMLElement).innerHTML,10);

const numeroTurno = document.querySelector(".numero-turno") as HTMLElement | null;
const botonAnterior = document.querySelector(".anterior") as HTMLElement | null;
const botonSiguiente = document.querySelector(".siguiente") as HTMLElement | null;
const botonReset = document.querySelector(".reset") as HTMLElement | null;
const botonIntro = document.querySelector(".establecer") as HTMLElement | null;

function dosDigitos(num: number): string {
    return num.toString().padStart(2, '0');
  }

function turnoAnterior(): void {
    if (numeroTurno) {
    turno--;
        if (turno <= 1) {
        reset();
      } else {
        numeroTurno.innerText = dosDigitos(turno);
      } 
    }
}

function turnoSiguiente(): void {
    if (numeroTurno) {
    turno++;
    numeroTurno.innerText = dosDigitos(turno);
    }
}

function reset() {
    if (numeroTurno) {
    turno = 1;
    numeroTurno.innerText = dosDigitos(turno);
    }
}

function establecerTurnoManual() {
    const numeroElegido = document.querySelector("#numero-elegido") as HTMLInputElement | null; 
    if (numeroElegido && numeroTurno) {
    const numeroEstablecido = parseInt(numeroElegido.value, 10);
    turno = numeroEstablecido;
    numeroTurno.innerText = dosDigitos(numeroEstablecido);
    }
   }
   
if (botonAnterior) {
botonAnterior.addEventListener("click", turnoAnterior);
}

if (botonSiguiente) {
botonSiguiente.addEventListener("click", turnoSiguiente);
}

if (botonReset) {
botonReset.addEventListener("click", reset);
}

if (botonIntro) {
botonIntro.addEventListener("click", establecerTurnoManual);
}
