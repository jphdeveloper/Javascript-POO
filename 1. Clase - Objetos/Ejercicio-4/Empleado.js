// Defino la clase
class Empleado {
    // Metodo constructor
    constructor(nombre, edad, genero, cargo, experiencia){
        this.nombre = nombre // Propiedades para la instancia
        this.edad = edad
        this.genero = genero
        this.cargo = cargo
        this.experiencia = experiencia
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #000"> Empleado </h3> <br>
            <strong> Nombre: </strong> ${this.nombre} <br>
            <strong> Edad: </strong>${this.edad} años<br>
            <strong> Genero: </strong>${this.genero} <br>
            <strong> Cargo: </strong>${this.cargo} <br>
            <strong> Experiencia Laboral: </strong>${this.experiencia} años<br>
            <hr>
            `)
    }
}
// Creacion de Objetos por medio de instanciar la clase Empleado
let empleado1 = new Empleado("Antonio",39,"Masculino","Construtor",12)
let empleado2 = new Empleado("Maria",42,"Femenino","Abogada",17)
let empleado3 = new Empleado("Juan",28,"Masculino","Doctor",5)

// Mostrar los detalles de cada objeto
empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()