const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let crewGreater = hitchedSpaceships.filter(spaceship => spaceship[1] > 9).map(spaceship => spaceship[0])

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => spaceship[2] == false)

let highlighted = hitchedSpaceships.map(spaceship => spaceship[0].toUpperCase())

let message = `Espaçonaves com mais de 9 tripulantes: ${crewGreater.join(", ")}`
message +=  `\nPlataforma com processo de engate: ${ongoingHitchPlatform + 1}`
message +=  `\nEspaçonaves destacadas: ${highlighted.join(", ")}`

alert(message)