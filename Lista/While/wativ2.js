var n1, n2, result
var rs = require('readline-sync')


var n1 = rs.questionInt('Insira aqui um numero:  ')
var n2 = rs.questionInt('Insira aqui outro numero:  ')

result = 0

while (n1 > 0){
    result = n2 + result
    console.log(n1,n2)
    n1--
}   

console.log ('O resultado é ' +result)