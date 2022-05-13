function notaEscolar(nota) {
  if (nota >= 90 && nota <= 100) {
    console.log('A')
  } else if (nota < 90 && nota >= 80) {
    console.log('B')
  } else if (nota < 80 && nota >= 70) {
    console.log('C')
  } else if (nota < 70 && nota >= 60) {
    console.log('D')
  } else if (nota < 60 && nota > 0) {
    console.log('F')
  } else {
    console.log('Nota invalida!')
  }
}

notaEscolar(100)
