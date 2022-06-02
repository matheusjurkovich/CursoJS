class Atleta {
  peso;
  categoria;

  constructor(peso) {
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'infantil'
    } else if (this.peso <= 65) {
      this.categoria = 'Juvenil'
    } else {
      this.categoria = 'Adulto'
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }

  //classe reescrita (polimorfismo)
  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'Pluma'
    } else if (this.peso <= 65) {
      this.categoria = 'Leve'
    } else if (this.peso <= 75) {
      this.categoria = 'Medio'
    } else {
      this.categoria = 'Pesado'
    }
  }
}

