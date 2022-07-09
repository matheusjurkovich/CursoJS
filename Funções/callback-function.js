// let spaceShipVelocity = 150

// const slowDown = (printer) => {
//   spaceShipVelocity = spaceShipVelocity - 20
//   printer()
//   if (spaceShipVelocity <= 0) {
//     spaceShipVelocity = spaceShipVelocity = 0
//     console.log('A nave ja está parada! podem desembarcar')
//   }
// }

// while (spaceShipVelocity > 0) {
//   slowDown(() => console.log(spaceShipVelocity))
// }

//                     Ou podemos fazer assim

function slowDown (velocity, printer) {
  let desaceleration = 20
  while (velocity > 0) {
    printer(velocity)
    velocity -= desaceleration
  }
  alert('A nave ja está parada! podem desembarcar')
}

let spaceShipVelocity = 150

slowDown(spaceShipVelocity, velocity => console.log(velocity))