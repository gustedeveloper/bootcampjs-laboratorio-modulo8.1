import "./style.css";

import { Pacientes, pacientes } from './model';

// Apartado 1: 
// a) extraer la lista de pacientes que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]): Pacientes[] => {
        let pacientesPediatria = [];
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Pediatra") {
                pacientesPediatria.push(pacientes[i]);
            }
        }
        return pacientesPediatria;
    }

console.log("Lista de pacientes de Pediatria: ", obtenPacientesAsignadosAPediatria(pacientes));

// b) 



