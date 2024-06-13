import "./style.css";

const totalCena: number = 120;
const totalBebidas: number = 18;
const numAmigos: number = 6;

const costoPorCubrir: number = totalCena - totalBebidas;

const costoPorPersona: number = costoPorCubrir / numAmigos;

console.log(`Cada comensal deberá pagar ${costoPorPersona}€.`);