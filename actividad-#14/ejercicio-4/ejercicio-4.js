// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Guitarra {
    constructor(tipo) {
        this.tipo = tipo;
    }
    
    descripcion() {
        output.innerHTML += `<p>Soy una guitarra ${this.tipo}. Se utilizan seis cuerdas para producir sonidos.</p>`;
    }
}

// Clase Instructor
class Piano {
    constructor(tamaño) {
        this.tamaño = tamaño;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy un piano de ${this.tamaño}. Tengo 88 teclas y produzco una amplia gama de sonidos.</p>`;
    }
}

// Clase Coordinador
class Trompeta {
    constructor(material) {
        this.material = material;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy una trompeta de ${this.material}. Soy un instrumento de viento metal.</p>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(instrumentos) {
    instrumentos.descripcion();
}

// Instancias de cada clase
const guitarra = new Guitarra("Acustica")
const piano = new Piano("Clasico")
const trompeta = new Trompeta("Oro")

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(guitarra);
mostrarInformacion(piano);
mostrarInformacion(trompeta);
