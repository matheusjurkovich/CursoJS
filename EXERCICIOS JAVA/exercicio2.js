let family = {
  incomes: [1000, 200, 100, 402.9],
  expenses: [1000, 100.94, 50.54, 2000]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calc() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpense = sum(family.expenses)
  const total = calculateIncomes - calculateExpense
  if (total >= 0) {
    console.log('O saldo esta positivo!')
    console.log(`Seu saldo é de: ${total.toFixed(2)}`)
  } else {
    console.log('O saldo esta no vermelho!')
    console.log(`Seu saldo é de: R$ ${total.toFixed(2)}`)
  }
}

calc()
