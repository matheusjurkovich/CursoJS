class veiculo {
  rodas = 4;

  mover(direcao) { }
  virar(direcao) { }
}

class moto extends veiculo {
  constructor() {
    super() //puxa os atributos e metodos do pai
    this.rodas = 2
  }
}