function contar() {
  let start = document.querySelector('#inicio')
  let end = document.querySelector('#fim')
  let passo = document.querySelector('#passo')
  let res = document.querySelector('#resultado')
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = '[ERRO!] Faltam dados'
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(start.value)
    let f = Number(end.value)
    let p = Number(passo.value)
    if (p <= 0) {
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449} `
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
