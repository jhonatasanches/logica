var n1, positivo, negativo
var rs = require ('readline-sync')

n1 = rs.question ('Digite um numero:  ')

positivo = n1*2
negativo = n1*3

if (n1 > 0){
    console.log('RESULTADO ' +positivo)
} else {
    console.log('RESULTADO ' +negativo)
}