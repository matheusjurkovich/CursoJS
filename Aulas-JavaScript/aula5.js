let weight
console.log(typeof weight)

let student = {
  name: 'Matheus',
  age: 19,
  weight: 75,
  isSubscribed: true
}

console.log(
  `${student.name} de idade ${student.age} anos, pesa ${student.weight} Kg`
)

let students = []

students = [student]

console.log(students[0])

const john = {
  name: 'john',
  age: 16,
  weight: 72,
  isSubscribed: true
}

students[1] = john
console.log(students)
