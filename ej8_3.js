class Rectangulo{
  constructor(largo, ancho){
    this.largo = largo
    this.ancho = ancho
  }

  calcularArea(){
    return this.largo*this.ancho
  }

  calcularPerimetro(){
    return 2*this.largo + 2*this.ancho
  }
}

let rectangulo1 = new Rectangulo(2, 6)

console.log(rectangulo1.calcularArea(), rectangulo1.calcularPerimetro())