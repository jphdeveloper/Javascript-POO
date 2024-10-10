class Vehiculo {
    constructor(marca, color, modelo) {
        this.marca = marca
        this.color = color
        this.modelo = modelo
        this.numero_llantas = parseInt(prompt("No. de Llantas: "))
    }
    registrar() {
        document.write(`
            <hr>
            <div class="alert alert-primart" role="alert">CARRO REGISTRADO </div>
            <hr>
            Marca: ${this.marca} <br>
            Color: ${this.color} <br>
            Modelo: ${this.modelo} <br>
            No. de Llantas: ${this.numero_llantas} <br>`)
    }
}

class Carro extends Vehiculo {
    constructor(marca, color, modelo, placa) {
        super(marca, color, modelo)
        this.placa = placa
        this.gasolina = parseInt(prompt("No. de Galones de Gasolina: "))
    }
    encender() {
        document.write(`Placa: ${this.placa} <br>`)
        if (this.gasolina > 0) {
            document.write(`
                <hr>
                <div class="alert alert-success" role="alert"> El carro ${this.marca}, con placa ${this.placa} de color ${this.color} enciende!! </div>
                `)
        } else {
            document.write(`
                <hr>
                <div class="alert alert-danger" role="alert"> El carro ${this.marca}, con placa ${this.placa} de color ${this.color} no enciende!! </div>
                `)
        }
    }
}

let carro1 = new Carro("Mazda","Negro","2024","RJM 45A")
carro1.registrar()
carro1.encender()