// Defino la clase
class Celular {
    // Metodo constructor
    constructor(modelo, marca, color, bateria, camara, precio){
        this.modelo = modelo // Propiedades para la instancia
        this.marca = marca
        this.color = color
        this.bateria = bateria
        this.camara = camara
        this.precio = precio
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #1230AE"> Dispositivo Movil </h3> <br>
            <strong> Modelo: </strong> ${this.modelo} <br>
            <strong> Marca: </strong>${this.marca} <br>
            <strong> Color: </strong>${this.color} <br>
            <strong> Bateria: </strong>${this.bateria} <br>
            <strong> Camara: </strong>${this.camara} <br>
            <strong> Precio: </strong>${this.precio} <br>
            <hr>
            `)
    }
    // Metodo para encender el celular
    encender() {
        // Atributo privado solo para el metodo encender
        let energia = parseInt(prompt("Digite el valor de la carga: "))
        // Evaluamos si tiene carga el celular
        if (energia > 0) {
            document.write(`
                <strong> El celular: ${this.modelo} se puede encender </strong><br>
                ⚡︎ ⚡︎ ⚡︎ ⚡︎ ⚡︎ <strong> ${energia}% de carga </strong> ⚡︎ ⚡︎ ⚡︎ ⚡︎ ⚡︎ <br>
                <hr>`)
        } else {
            document.write(`
                El celular ${this.modelo} no se puede encender <br>
                ⚡︎ ⚡︎ ⚡︎ ⚡︎ ⚡︎ ${energia}% de carga ⚡︎ ⚡︎ ⚡︎ ⚡︎ ⚡︎ <br>
                <hr>`)
        }
    }
}
// Creacion de Objetos por medio de instanciar la clase Celular
let celular1 = new Celular("Redmi Note 14 Pro","Xiaomi","Negro","6000 mAh","208 mpx",1800000)
let celular2 = new Celular("iPhone 16 Pro","Apple","Azul marino","4500 mAh","24 mpx",4500000)
let celular3 = new Celular("Mate XT","Huawei","Naranja","8000 mAh","104 mpx",7000000)

// Mostrar los detalles de cada objeto
celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()