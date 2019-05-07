const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // imprime os conteudos dos indices
console.log(valores[4]) // imprime undefined já quem nao tem conteudo

valores [4] = 10 // adiciona um indice e um conteudo
console.log(valores)
console.log(valores.length) 

valores.push({id:3}, false, null, 'teste') // adiciona varios no array
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) // retire o ultimo valor do array
delete valores [0] // deleta o conteudo do indice
console.log(valores)
console.log(valores.length)
console.log(valores[0])

console.log(typeof valores) // mostra o tipo de qualquer coisa.

