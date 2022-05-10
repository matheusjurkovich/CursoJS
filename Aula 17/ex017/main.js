let num = document.querySelector("#number");
let lista = document.querySelector("#lista");
let res = document.querySelector("#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} foi adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Número inválido");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0
    let media = 0 
    for (let pos in valores) {
        soma += valores[pos]
        media = soma/tot
      if (valores[pos] > maior) maior = valores[pos];

      if (valores[pos] < menor) menor = valores[pos];
    }
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`;
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
    res.innerHTML += `<p>A media de todos os valores é:  ${media}</p>`
  }
}
