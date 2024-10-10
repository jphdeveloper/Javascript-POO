// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Carro {
    constructor(tipo) {
        this.tipo = tipo;
    }
    
    descripcion() {
        output.innerHTML += `<p>Soy un ${this.tipo}. Tengo cuatro ruedas y un motor.</p>`;
    }
}

// Clase Instructor
class Moto {
    constructor(tipo) {
        this.tipo = tipo;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy una ${this.tipo}. Tengo dos ruedas y un motor.</p>`;
    }
}

// Clase Coordinador
class Bicicleta {
    constructor(tipo) {
        this.tipo = tipo;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy una ${this.tipo}. Tengo dos ruedas y no tengo motor.</p>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(vehiculo) {
    vehiculo.descripcion();
}

// Instancias de cada clase
const carro = new Carro("Carro Toyota modelo 2015");
const moto = new Moto("Moto Kawasaki modelo 2018");
const bici = new Bicicleta("Bicicleta BMX");

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(carro);
mostrarInformacion(moto);
mostrarInformacion(bici);
