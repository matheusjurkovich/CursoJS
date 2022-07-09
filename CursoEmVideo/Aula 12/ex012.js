let agora = new Date()
let hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if (hora <= 11) {
    console.log(`Bom dia! São ${hora} horas da manhã!`)
} else if (hora == 12) {
    console.log(`Boa tarde! é meio dia!`)
} else  if (hora > 12 && hora < 17) {
    console.log(`Boa tarde! São ${hora} horas da tarde!`)
} else {
    console.log(`Boa noite! São ${hora} horas da noite!`)
}
