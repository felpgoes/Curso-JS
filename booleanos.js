let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // ! = contrario a const

isAtivo = 1
console.log(!isAtivo) // !! = igual a const

console.log('Os Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')// com espaço
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')// sem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar ...')
console.log((''|| null || 0 || 'epa' || 123))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')

nome = ''
console.log(nome || 'Desconhecido')