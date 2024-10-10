class Empleado {
    constructor() {
        if (new.target === Empleado) {
            throw new Error("No se puede instanciar una clase abstracta como Empleado");
        }
    }

    calcularSalario() {
        throw new Error("El método calcularSalario debe ser implementado en la subclase");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioBase) {
        super();
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(tarifaPorHora, horasTrabajadas) {
        super();
        this.tarifaPorHora = tarifaPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario() {
        return this.tarifaPorHora * this.horasTrabajadas;
    }
}

const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(3500000);
document.write(`
    Salario del empleado a tiempo completo: ${empleadoTiempoCompleto.calcularSalario()}<br>
`);

const empleadoPorHoras = new EmpleadoPorHoras(21875, 120);
document.write(`
    Salario del empleado por horas: ${empleadoPorHoras.calcularSalario()}<br>
`);

document.write("<hr>");