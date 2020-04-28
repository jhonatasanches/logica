var bs, pt, result
var rs = require('readline-sync')


var bs = rs.questionInt('Insira aqui a base da potencia:  ')
var pt = rs.questionInt('Insira aqui a potencia:  ')

result = 1

while (pt >= 1){
    result = result * bs
    console.log(bs,pt)
    pt--

}   

console.log ('O resultado é ' +result)

