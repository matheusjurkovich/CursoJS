var a = document.querySelector('#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerHTML = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerHTML = 'Entrou!'
}

function sair() {
    a.innerHTML = 'Saiu!'
    a.style.background = 'Green'
}