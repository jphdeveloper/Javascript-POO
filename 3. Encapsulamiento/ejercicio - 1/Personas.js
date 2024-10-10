class Personas {
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._identidad = identidad;
        this.fechanacimiento = fechanacimiento;
        this.sexo = sexo;
    }

    obtenerNombres() {
        return this._nombres;
    }

    obtenerApellidos() {
        return this._apellidos;
    }

    obtenerIdentidad() {
        return this._identidad;
    }

    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    establecerApellidos(nuevoApellidos) {
        this._apellidos = nuevoApellidos;
    }

    mostrarDetalles() {
        document.write(`
            \nNombres: ${this._nombres}<br>
            Apellidos: ${this._apellidos} <br>
            N° Identidad: ${this._identidad} <br>
            Fecha nacimiento: ${this.fechanacimiento} <br>
            Sexo: ${this.sexo} <br> 
            `)
    }
}

const persona = new Personas("Juan","Hernandez","1102809013","17/03/2004","M");
persona.mostrarDetalles();
document.write("<hr>");

persona.establecerNombres("Jose");
document.write(`Nombres: ${persona.obtenerNombres()} <br>`)
persona.establecerApellidos("Vergara");
document.write(`Apellidos: ${persona.obtenerApellidos()} <br>`)
document.write(`
    N° Identidad: ${persona.obtenerIdentidad()} <br>
    Fecha nacimiento: ${persona.fechanacimiento} <br>
    Sexo: ${persona.sexo} <br> 
    `)