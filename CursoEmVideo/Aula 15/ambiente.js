let num = [5, 8, 3, 7, 2]
/*
num.push(6)

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)

for (let n = 0; n < num.length; n++) {
  console.log(num[n])
}
*/

for (let n in num) {
  num.sort()
  console.log(num[n])
}

console.log(`Posição ${num.indexOf(8)}`)
