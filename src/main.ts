import "./style.css";

let turno = document.querySelector(".numero-turno").innerHTML;

const numeroTurno = document.querySelector(".numero-turno");
const botonAnterior = document.querySelector(".anterior");
const botonSiguiente = document.querySelector(".siguiente");
const botonReset = document.querySelector(".reset");
const botonIntro = document.querySelector(".establecer");

function dosDigitos(num) {
    return num.toString().padStart(2, '0');
  }

function turnoAnterior() {
    turno--;
   if (turno <= 1) {
        reset();
      } else {
        numeroTurno.innerText = dosDigitos(turno);
      } 
}

function turnoSiguiente() {
    turno++;
    numeroTurno.innerText = dosDigitos(turno);
    
}

function reset() {
    turno = 1;
    numeroTurno.innerText = dosDigitos(turno);
}

function establecerTurnoManual() {
    const numeroEstablecido = parseInt(document.querySelector("#numero-elegido").value);
    turno = numeroEstablecido;
    numeroTurno.innerText = dosDigitos(numeroEstablecido);
     
   }

botonAnterior.addEventListener("click", turnoAnterior);
botonSiguiente.addEventListener("click", turnoSiguiente);
botonReset.addEventListener("click", reset);
botonIntro.addEventListener("click", establecerTurnoManual);


