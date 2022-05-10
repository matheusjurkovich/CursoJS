function tabuada() {
  let num = document.querySelector('#number')
  let tab = document.querySelector('#seltab')
  if (num.value.length == 0) {
    alert('Digite')
  } else {
    let n = Number(num.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 20; c++) {
      let item = document.createElement('option')
      item.text = `${n} X ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}
