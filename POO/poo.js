class Poligono {
  constructor(altura, largura) {
    //this = objeto
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }
  // Hashtag deixa a função escondida
  #calcularArea() {
    return this.altura * this.largura
  }
}

//Criando o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)