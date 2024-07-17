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

const activarProtocoloUrgencia = (
    pacientes: Pacientes[]
): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 || pacientes[i].temperatura > 39) {
            return true;
        }
    }
    
    return false;
    
}

console.log(`Protocolo urgencia activado: ${activarProtocoloUrgencia(pacientes)}`); 

// Apartado 3: reasignar pacientes de Pediatria a Médico de familia

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
): Pacientes[] => {
    let pacientesPediatriaReasignados = obtenPacientesAsignadosAPediatria(pacientes);
    for (let i = 0; i < pacientesPediatriaReasignados.length; i++) {
                pacientesPediatriaReasignados[i] = {
                ...pacientesPediatriaReasignados[i],
                especialidad: "Medico de familia"
                }
            }

    return pacientesPediatriaReasignados;

}

console.log("Lista de pacientes de Pediatria reasignados a Médico de Familia", reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4: comprobar si en la lista hay algún paciente asignado a pediatría

const hayPacientesDePediatria = (
    pacientes: Pacientes[]
    ): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
    }
    return false;
  };
  
  console.log(`¿Hay pacientes de pedriatría? ${hayPacientesDePediatria(pacientes)}`);
  
  // Apartado 5:  calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a Cardiología
  
  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {

    let numeroPacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0
        }

    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Medico de familia") {
        numeroPacientesPorEspecialidad.medicoDeFamilia++;
      } else if (pacientes[i].especialidad === "Pediatra") {
        numeroPacientesPorEspecialidad.pediatria++;
      } else if (pacientes[i].especialidad === "Cardiólogo") {
        numeroPacientesPorEspecialidad.cardiologia++;
      }
    }
  
      return numeroPacientesPorEspecialidad;
  }

  console.log("Total de pacientes por especialidad: ", cuentaPacientesPorEspecialidad(pacientes));
