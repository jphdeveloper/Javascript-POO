class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre;
        this._precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    // Métodos getter
    obtenerNombre() {
        return this._nombre;
    }

    obtenerPrecio() {
        return this._precio;
    }

    // Métodos setter
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    mostrarDetalles() {
        document.write(`
            \nNombre del producto: ${this._nombre}<br>
            Precio unitario: ${this._precio} <br>
            Cantidad en stock: ${this.cantidad} <br>
            Categoría: ${this.categoria} <br> 
            `)
    }
}

 
const producto1 = new Producto("Manzana", 5000, 10, "Frutas");
producto1.mostrarDetalles();
document.write("<hr>");

producto1.establecerNombre("Pera");
document.write(`Nombre del producto: ${producto1.obtenerNombre()} <br>`)
producto1.establecerPrecio(3000);
document.write(`Precio unitario: ${producto1.obtenerPrecio()} <br>`)
document.write(`
    Cantidad en stock: ${producto1.cantidad} <br>
    Categoría: ${producto1.categoria} <br> 
    `)