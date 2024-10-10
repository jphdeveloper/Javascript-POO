// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formación: ");
        this.regional = prompt("Regional: ");
    }
    
    mostrarInfo() {
        output.innerHTML += "<p>Hola, soy un aprendiz SENA</p>";
        output.innerHTML += `<p>Nombres: ${this.nombres} ${this.apellidos}</p>`;
        output.innerHTML += `<p>CC: ${this.cedula}</p>`;
        output.innerHTML += `<p>Sexo: ${this.sexo}</p>`;
        output.innerHTML += `<p>Estudiante del programa: ${this.formacion} de la Regional ${this.regional}</p><hr>`;
    }
}

// Clase Instructor
class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }
    mostrarInfo() {
        output.innerHTML += "<p>Hola, soy un instructor del SENA</p>";
        output.innerHTML += `<p>Nombres: ${this.nombres} ${this.apellidos}</p>`;
        output.innerHTML += `<p>CC: ${this.cedula}</p>`;
        output.innerHTML += `<p>Área de instrucción: ${this.area}</p><br>`;
    }
}

// Clase Coordinador
class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }
    
    mostrarInfo() {
        output.innerHTML += "<p>Hola, soy un coordinador del SENA</p>";
        output.innerHTML += `<p>Nombres: ${this.nombres} ${this.apellidos}</p>`;
        output.innerHTML += `<p>CC: ${this.cedula}</p>`;
        output.innerHTML += `<p>Departamento: ${this.departamento}</p><br>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de cada clase
const objetoAprendiz = new Aprendiz("Samuel Elias","Vega Barrios",1231338164,"Masculino");
const objetoInstructor = new Instructor("Rodriguez",987654321,"Programación");
const objetoCoordinador = new Coordinador("Carlos","Martinez",123456789,"Recursos Humanos");

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objetoAprendiz);
mostrarInformacion(objetoInstructor);
mostrarInformacion(objetoCoordinador);
