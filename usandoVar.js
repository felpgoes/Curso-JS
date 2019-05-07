{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)         // var local
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local) // var local
}

teste()
//console.log(local) // nao imprime porque a var nao eh global