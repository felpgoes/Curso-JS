const nome ='Rebeca'
const concatenacao = 'Olá ' + nome + '!' // ele lê quebra de linha
const template = `
    Olá
    ${nome}` // uma seção de impressao com ${const indicada}, com \b e \n.
console.log(concatenacao, template)

//expressoes...
console.log(`1+1 = ${1+1}`) // entre ${...} printa o resultado.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) // aumenta a letra.
