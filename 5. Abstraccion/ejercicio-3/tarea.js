class TareaEmpleado {
    constructor() {
        if (new.target === TareaEmpleado) {
            throw new Error("No se puede instanciar una clase abstracta como TareaEmpleado");
        }
    }

    realizarTarea() {
        throw new Error("El método realizarTarea debe ser implementado en la subclase");
    }
}

class Ingeniero extends TareaEmpleado {
    realizarTarea() {
        document.write("Estoy diseñando un nuevo sistema.<br>");
    }
}

class Doctor extends TareaEmpleado {
    realizarTarea() {
        document.write("Estoy atendiendo a un paciente.<br>");
    }
}

const ingeniero = new Ingeniero();
const doctor = new Doctor();

ingeniero.realizarTarea();
doctor.realizarTarea();

document.write("<hr>");
