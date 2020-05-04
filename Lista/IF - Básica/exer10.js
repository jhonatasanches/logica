var num, n1, n2
var rs = require('readline-sync')


num = rs.question('Digite :    ')

n1 = 100
n2 = 200
// equilatero = todos lados iguais
// isoscele = dois lados iguais
// escaleno = todos lados diferentes

if ((num >= n1) && (num <= n2)){
console.log('Voce digitou um numero entre 100 e 200')
} else{
    console.log('Voce digitou um numero fora da faixa de 100 a 200')
}