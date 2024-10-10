// Defino la clase
class Animal {
    // Metodo constructor
    constructor(nombre, especie, habitat, color, edad_promedio){
        this.nombre = nombre // Propiedades para la instancia
        this.especie = especie
        this.habitat = habitat
        this.color = color
        this.edad_promedio = edad_promedio
        this.posicion = 0
    }
    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`
            <h3 style=" color: #FF6600"> Animal </h3> <br>
            <strong> Nombre: </strong> ${this.nombre} <br>
            <strong> Especie: </strong>${this.especie} <br>
            <strong> Habitat: </strong>${this.habitat} <br>
            <strong> Color: </strong>${this.color} <br>
            <strong> Edad Promedio del Animal: </strong>${this.edad_promedio} <br>
            <hr>
            `)
    }
    // Metodo para que el animal camine.
    caminar() {
        let distancia = parseInt(prompt("Digite la distancia que va a caminar el Animal: "))
        this.posicion += distancia
        document.write(`
            <strong> El animal ${this.nombre} ha caminado ${distancia} metros. </strong><br>
            <strong> Posicion actual: ${this.posicion} metros.</strong><br>
            <hr>`)
    }
}
// Creacion de Objetos por medio de instanciar la clase Animal
let animal1 = new Animal("Perro","Canino","Domestico","Blanco","10 años")
let animal2 = new Animal("Tortuga","Terrestre","Bosques","Verde","100 años")
let animal3 = new Animal("Loro","Perico","Selvas","Verde","10 7 años")

// Mostrar los detalles de cada objeto
animal1.mostrarDetalles()
animal1.caminar()
animal2.mostrarDetalles()
animal2.caminar()
animal3.mostrarDetalles()
animal3.caminar()