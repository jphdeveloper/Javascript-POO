// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Perro {
    constructor(raza) {
        this.raza = raza;
    }
    
    descripcion() {
        output.innerHTML += `<p>Soy un ${this.raza}. Soy leal y juguetón.</p>`;
    }
}

// Clase Instructor
class Gato {
    constructor(color) {
        this.color = color;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`
        output.innerHTML += `<p>Soy un gato ${this.color}. Soy independiente y curioso.</p>`;
    }
}

// Clase Coordinador
class Pajaro {
    constructor(color) {
        this.color = color;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`
        output.innerHTML += `<p>Soy un ${this.color}. Puedo volar y canto melodías.</p>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(animal) {
    animal.descripcion();
}

// Instancias de cada clase
const perro = new Perro("Golden Retriever");
const gato = new Gato("Naranja");
const pajaro = new Pajaro("Australiano");

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(perro);
mostrarInformacion(gato);
mostrarInformacion(pajaro);
