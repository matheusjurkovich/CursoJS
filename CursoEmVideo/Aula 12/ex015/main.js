function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique as informações!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homemcrianca.jpg')
            } else if (idade >= 10 && idade <21) {
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemvelho.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {

            } else if (idade >= 10 && idade <21) {

            } else if (idade <50) {

            } else {
                
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}