const escola = 'cod3r' // 0=c 1=o 2=d 3=3 4=r

console.log(escola.charAt(4)) // lugar 4 da string.
console.log(escola.charAt(5)) // onde não há nada, não aparece nada.
console.log(escola.charCodeAt(3)) // passa para o numero relativo em html.
console.log(escola.indexOf('3')) // imprime o '3' lugar da string.

console.log(escola.substring(1)) // imprime a partir do indice indicado.
console.log(escola.substring(0,3)) // imprime do indice 0 ao 3 sem incluir o 3.

console.log('Escola '.concat(escola).concat("!")) // imprime a 1º parte indicada + a string + a 3º parte indicada.
console.log(escola.replace(3,'e')) // substitui o numero indicado.
console.log(escola.replace('d','e')) // substitui o caractere indicado.
console.log(escola.replace(/\d/,'e')) // substitui os numeros.
console.log(escola.replace(/\w/,'e')) // substitui o 1º caractere.
console.log(escola.replace(/\w/g,'e')) // substitui tds os caracteres por e.

console.log('Ana,Maria,Pedro'.split(',')) //transforma em array, .split('separador').
console.log('Nádia,José,Rakin'.split(/,/)) //transforma em array, .split(/separador/).