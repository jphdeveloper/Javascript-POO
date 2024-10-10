// Defino la clase
class Moto {
    // Metodo constructor
    constructor(marca, modelo, cilindraje, peso, transmision, torque){
        this.marca = marca // Propiedades para la instancia
        this.modelo = modelo
        this.cilindraje = cilindraje
        this.peso = peso
        this.transmision = transmision
        this.torque = torque
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #000"> Moto </h3> <br>
            <strong> Marca: </strong> ${this.marca} <br>
            <strong> Modelo: </strong>${this.modelo} <br>
            <strong> Cilindraje: </strong>${this.cilindraje} <br>
            <strong> Peso: </strong>${this.peso} <br>
            <strong> Transmisión: </strong>${this.transmision} <br>
            <strong> Torque: </strong>${this.torque} <br>
            <hr>
            `)
    }
}
// Creacion de Objetos por medio de instanciar la clase Moto
let moto1 = new Moto("Yamaha","MT-09","890 CC","193 KG","Manual","93 Nm")
let moto2 = new Moto("Yamaha","V80","80 CC","100 KG","Manual","Suave")
let moto3 = new Moto("Yamaha","R6","599 CC","165 KG","Manual","Solido")

// Mostrar los detalles de cada objeto
moto1.mostrarDetalles()
moto2.mostrarDetalles()
moto3.mostrarDetalles()