class FormaGeometrica {
    constructor() {
        if (new.target === FormaGeometrica) {
            throw new Error("No se puede instanciar una clase abstracta como FormaGeometrica");
        }
    }

    calcularArea() {
        throw new Error("El método calcularArea debe ser implementado en la subclase");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Instanciar y mostrar los resultados
const cuadrado = new Cuadrado(5);
document.write(`
    Área del cuadrado: ${cuadrado.calcularArea()}<br>
`);

const circulo = new Circulo(3);
document.write(`
    Área del círculo: ${circulo.calcularArea()}<br>
`);

document.write("<hr>");
