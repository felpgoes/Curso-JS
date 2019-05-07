let valor // não inicializada
console.log(valor) // undefined
// console.log(valor2) // is not defined
valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // vai dar erro por não ter valor 

const produto = {}
console.log(produto) // objeto
console.log(produto.preco) // ainda nao foi definido, undefined.

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
