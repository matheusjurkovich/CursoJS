//funcao impura
//exemplo 1
function calcularCircumferencia(radius) {
    return Math.PI * (radius * radius)
}

//exemplo 2
let person = {
    name: 'Rafael',
    age: 'jovem',
}

function changeName(name) {
    person.name = name
}

//funcao pura
//exemplo 1
const calculateCircumferencia = function(pi, radius) {
    return pi * (radius * radius)
}

//com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

const changePersonName = (person, name) => ({...person, name})