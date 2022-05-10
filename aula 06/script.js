let salario = Number(window.prompt('Qual o seu salario?'))
document.write(
  `Seu salário é de: ${salario.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}`
)
