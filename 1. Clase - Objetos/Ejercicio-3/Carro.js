// Defino la clase
class Carro {
    // Metodo constructor
    constructor(marca, modelo, peso, tamaño, color){
        this.marca = marca // Propiedades para la instancia
        this.modelo = modelo
        this.peso = peso
        this.tamaño = tamaño
        this.color = color
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #161D6F"> Vehiculo </h3> <br>
            <strong> Marca: </strong> ${this.marca} <br>
            <strong> Modelo: </strong>${this.modelo} <br>
            <strong> Peso: </strong>${this.peso} kg<br>
            <strong> Tamaño: </strong>${this.tamaño} <br>
            <strong> Color: </strong>${this.color} <br>
            <hr>
            `)
    }
    // 
}
// Creacion de Objetos por medio de instanciar la clase Carro
let carro1 = new Carro("Lamborghini","Aventador SVJ",1.525,"Grande","Naranja")
let carro2 = new Carro("Chevrolet","Spark GT",1.192,"Compacto","Negro")
let carro3 = new Carro("JEEP","Cherokee",1.345,"Grande","Gris")

// Mostrar los detalles de cada objeto
carro1.mostrarDetalles()
carro2.mostrarDetalles()
carro3.mostrarDetalles()