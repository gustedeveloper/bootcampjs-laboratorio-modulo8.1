import "./style.css";

import { Pacientes, pacientes } from './model';

// Apartado 1: 
// a) extraer la lista de pacientes que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
): Pacientes[] => {
        let pacientesPediatria = [];
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Pediatra") {
                pacientesPediatria.push(pacientes[i]);
            }
        }
        return pacientesPediatria;
    }

console.log("Lista de pacientes de Pediatria: ", obtenPacientesAsignadosAPediatria(pacientes));

// b) extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
): Pacientes[] => {
    let pacientesPediatriaMenoresdeDiezAnios = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesPediatriaMenoresdeDiezAnios.push(pacientes[i]);
        }
    }
    return pacientesPediatriaMenoresdeDiezAnios;
}

console.log("Lista de pacientes de Pediatria menores de 10 años: ", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2: protocolo de urgencia

let nombresPacientesAfectados : string[] = [];

const activarProtocoloUrgencia = (
    pacientes: Pacientes[]
): boolean => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura < 39) {
            activarProtocolo = true;
            nombresPacientesAfectados.push(pacientes[i].nombre)
        }
    }
    
    return activarProtocolo;
    
}

console.log(`Protocolo urgencia activado: ${activarProtocoloUrgencia(pacientes)}. 
Los siguientes pacientes necesitan asistencia urgente: ${nombresPacientesAfectados}`)
