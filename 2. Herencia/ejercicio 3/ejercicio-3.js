class Instrumento:
    def __init__(self, tipo, marca, material):
        self.tipo = tipo
        self.marca = marca
        self.material = material
        self.precio = float(input("Ingrese el precio del Instrumento: "))
    
    def registrar(self):
        print("==============================")
        print("INSTRUMENTO REGISTRADO")
        print("==============================")
        print("Tipo: ", self.tipo)
        print("Marca: ", self.marca)
        print("Material de Fabricacion: ", self.material)
        print("Precio: ", self.precio)

class Guitarra(Instrumento):
    def __init__(self, tipo, marca, material, num_cuerdas):
        super().__init__(tipo, marca, material)
        self.num_cuerdas = num_cuerdas
        self.acordes = input("Que acordes basicos conoces?: ").split(',')
    
    def tocar_guitarra(self):
        print("Empezemos a tocar!")
        for acorde in self.acordes:
            print(f"Tocando acorde de: {acorde}")

guitarra1 = Guitarra("Acustica","Fender","Madera",6)
guitarra1.registrar()
guitarra1.tocar_guitarra()