// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Medico {
    constructor(especialidad) {
        this.especialidad = especialidad;
    }
    
    descripcion() {
        output.innerHTML += `<p>Soy un médico especialista en ${this.especialidad}. Me dedico a cuidar la salud de las personas.</p>`;
    }
}

// Clase Instructor
class Ingeniero {
    constructor(rama) {
        this.rama = rama;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy un ingeniero en  ${this.rama}. Diseño y construyo soluciones tecnológicas.</p>`;
    }
}

// Clase Coordinador
class Docente {
    constructor(materia) {
        this.materia = materia;
    }
    
    descripcion() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Soy un docente de ${this.materia}. Transmito conocimientos a mis estudiantes.</p>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(profesiones) {
    profesiones.descripcion();
}

// Instancias de cada clase
const medico = new Medico("Urologia")
const ingeniero = new Ingeniero("Sistema")
const docente = new Docente("Quimica")

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(medico);
mostrarInformacion(ingeniero);
mostrarInformacion(docente);
