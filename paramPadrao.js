// Gerar valor padrão

// Estrategia 1
function soma1(a,b,c){
    a=a||1
    b=b||1
    c=c||1
    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))


function soma2 (a,b,c) {
    a=a!==undefined ? a:1 // Estrategia 2 - Se 'a' for diferente de undefined ele continua o mesmo numero, se for igual, assume o valor '1'.
    b=1 in arguments ? b:1 // Estrategia 3 - Se existir 'b' no indice argumens, mantem o valor, se não assume '1'.
    c=isNaN(c) ?1:c // Estrategia 4 - Se 'c' for Not an Number (NaN) assume '1', se não continua o mesmo número.
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// Valor Padrão do ES2015 - Menor e mais adequada.
function soma3(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))