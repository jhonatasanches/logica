var rs = require('readline-sync')

function pedeNumero (rs){
    var numero = rs.questionFloat('Insira um numero qualquer:  ')
    return numero
}

function ehPrimo (numero){
    var numPrimo = num%2==0
    return numPrimo
}

var numero = pedeNumero(rs)
var numPrimo = ehPrimo (numero)

if(numPrimo==true){
    console.log(`O numero ${numPrimo} e primo`)
}else{
    console.log(`O numero ${numPrimo} nao e primo`)
}
