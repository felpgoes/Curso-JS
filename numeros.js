const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.32
const avaliacao2 = 6.53

const total = avaliacao1 * avaliacao2 + peso1 + peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // Números depois da vírgula
console.log(media.toString(2)) // Passando para número binario 
console.log(typeof media)
console.log(typeof Number)