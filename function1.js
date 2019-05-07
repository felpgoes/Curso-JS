// Função sem retorno
function impimirSoma(a, b){
    console.log(a+b)
}

impimirSoma(2, 3) // soma os dois
impimirSoma(2) // NaN
impimirSoma(2, 3, 4, 5, 6, 7) // soma só os dois primeiros
impimirSoma() // NaN

// Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

