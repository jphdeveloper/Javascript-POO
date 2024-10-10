// Defino la clase
class Figura {
    // Metodo constructor
    constructor(nombre, forma, tamaño, angulos, lados){
        this.nombre = nombre // Propiedades para la instancia
        this.forma = forma
        this.tamaño = tamaño
        this.angulos = angulos
        this.lados = lados
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #16423C"> Figura Geometrica </h3> <br>
            <strong> Nombre: </strong> ${this.nombre} <br>
            <strong> Forma: </strong>${this.forma} <br>
            <strong> Tamaño: </strong>${this.tamaño} <br>
            <strong> Angulos: </strong>${this.angulos} <br>
            <strong> Lados: </strong>${this.lados} <br>
            <hr>
            `)
    }
}
// Creacion de Objetos por medio de instanciar la clase Figura
let figura1 = new Figura("Triangulo","Plano","Pequeño","3 angulos (180 grados)","3 lados")
let figura2 = new Figura("Cuadrado","Plano","Mediano","4 angulos (90 grados)","4 lados")
let figura3 = new Figura("Triangulo","Plano","Grande","5 angulos (540 grados)","5 lados")

// Mostrar los detalles de cada objeto
figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()