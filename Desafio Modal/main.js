const clicar = document.getElementById('clique')
const sair = document.getElementById('sair')

clicar.onclick = function () {
  clicar.classList.add('invisible')
  sair.classList.remove('invisible')
}

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'
  if (isEscKey) {
    sair.classList.add('invisible')
    clicar.classList.remove('invisible')
  }
})