//calback, quando usa uma função para chamar outra função!!
function sayMyName(name) {
  name()
}
//com encurtador
sayMyName(() => {
  console.log('Matheus')
})
//sem encurtador
sayMyName(function () {
  console.log('Matheus')
})

//para encurtar uma função basta coloca uma arrow function '=>'

/*--------------------------------------------------*/

//conceito de função!
function sucoDeFruta(fruta1, fruta2) {
  console.log('suco de: ' + fruta1 + fruta2)
}

sucoDeFruta('Banana', 'Maçã') //adicionei os objetos dentro da parametrização

let date = new Date('2022-04-11')
console.log(date)
