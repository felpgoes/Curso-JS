// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1(){}

// Armazenar em um variável
const fun2 = function(){}

// Armazenar em um array
const array = [function (a, b) { return a+b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de Object
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function (){console.log('Executando...')})

// Uma função poder retornar ou conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4) // Chamando um função junto à outra
const cincoMais = somar (2,3) // Chamando uma função primeiro
cincoMais (4) // Chamando a outra função depois