import "./style.css";

import {botonDameCarta, botonQueHubiesePasado, botonMePlanto, botonNuevaPartida, dameCarta, mePlanto, queHubiesePasado, nuevaPartida} from './ui';

if (botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
botonNuevaPartida.disabled = true;
botonMePlanto.disabled = true;
}

if (botonDameCarta instanceof HTMLButtonElement && botonNuevaPartida instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement && botonQueHubiesePasado instanceof HTMLButtonElement) {
botonDameCarta.addEventListener("click", dameCarta);

botonNuevaPartida.addEventListener("click", nuevaPartida);

botonMePlanto.addEventListener("click", mePlanto);

botonQueHubiesePasado.addEventListener("click", queHubiesePasado);
}