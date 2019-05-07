const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1));

console.log(resultado(6.7));

const resultado1 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado1(7.1));

console.log(resultado1(6.7));