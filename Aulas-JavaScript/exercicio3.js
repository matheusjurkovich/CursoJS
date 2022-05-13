function transformDegree(degree) {
  const celciusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')
  if (!celciusExists && !fahrenheitExists) {
    throw new Error('Valor inválido')
  }

  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
  let degreeSign = 'C'

  if (celciusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celcius => celcius * 9 / 5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('50C'))
  console.log(transformDegree('50z'))
} catch (error) {
  console.log(error.message)
}
