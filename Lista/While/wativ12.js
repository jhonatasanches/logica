const rs = require('readline-sync')
var n1 = 0
var i = 0

while (i < 15) {
    n2 = rs.questionInt('Insere qualquer numero ai:  ')
    n1 = n1 + n2
    i++
}   

console.log('O resultado e: ' +n1/i)