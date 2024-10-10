class Dispositivo {
    constructor(marca, color, año) {
        this.marca = marca
        this.color = color
        this.año = año
        this.capacidad_bateria = parseInt(prompt("Ingrese la capacidad de la Bateria (mAh):"))
    }
    registrar() {
        document.write(`
            <hr>
            <div class="alert alert-primart" role="alert">DISPOSITIVO REGISTRADO </div>
            <hr>
            Marca: ${this.marca} <br>
            Color: ${this.color} <br>
            Año de fabricación: ${this.año} <br>
            Capacidad de la Bateria:  ${this.capacidad_bateria} kWh <br>
            `)
    }
}

class Smartphone extends Dispositivo {
    constructor(marca, color, año, sistema) {
        super(marca, color, año)
        this.sistema = sistema
        this.conectividad = prompt("Ingrese el tipo de conectividad (4G,5G): ")
    }
    encender() {
        if (this.capacidad_bateria > 0) {
            document.write(`
                <hr>
                <div class="alert alert-success" role="alert"> 
                Smartphone ENCENDIDO!
                Marca: ${this.marca}
                Color: ${this.color}
                Año de fabricación: ${this.año}
                Capacidad de la Bateria: ${this.capacidad_bateria}
                Tipo de Conectividad: ${this.conectividad}
                Sistema Operativo: ${this.sistema}</div> <br>
                `)
        } else {
            document.write(`
                <hr>
                <div class="alert alert-danger" role="alert"> Smartphone APAGADO</div>
                `)
        }
    }
}

let smartphone1 = new Smartphone("Xiaomi","Blanco","2023","Android")
smartphone1.registrar()
smartphone1.encender()