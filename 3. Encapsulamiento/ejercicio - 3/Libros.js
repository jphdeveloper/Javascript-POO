class Libro {
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo;
        this._autor = autor;
        this._isbn = isbn;
        this.editorial = editorial;
    }

    // Métodos getter
    obtenerTitulo() {
        return this._titulo;
    }

    obtenerAutor() {
        return this._autor;
    }

    obtenerIsbn() {
        return this._isbn;
    }

    // Métodos setter
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    establecerIsbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
    }

    mostrarDetalles() {
        document.write(`
            \nTitulo: ${this._titulo}<br>
            Autor: ${this._autor} <br>
            ISBN: ${this._isbn} <br>
            Editorial: ${this.editorial} <br> 
            `)
    }
}

 
const libro1 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "978-84-206-6223-2", "Editorial Sincelejo");
libro1.mostrarDetalles();
document.write("<hr>");

libro1.establecerTitulo("Un paseo aleatorio por Wall Street");
document.write(`Titulo: ${libro1.obtenerTitulo()} <br>`)
libro1.establecerAutor("Burton G. Malkiel");
document.write(`Autor: ${libro1.obtenerAutor()} <br>`)
libro1.establecerIsbn("978-8413620473");
document.write(`ISBN: ${libro1.obtenerIsbn()} <br>`)
document.write(`
    Editorial: ${libro1.editorial} <br> 
    `)