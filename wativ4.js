var n1, n2, result
var rs = require('readline-sync')


var n1 = rs.questionInt('Insira aqui um numero:  ')

result = 0
n2 = 2

while (n1 > 0){
    
    console.log(result)
    result = n2 + result
    if (result > n1){
        break
    }
}   
