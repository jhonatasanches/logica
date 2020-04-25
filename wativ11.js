const rs = require('readline-sync')
var num
num = rs.question('Insere qualquer numero ai:  ')

var i = 1
while (i > 0) {
    result = num * i
    console.log(num, i, result) 
    i++
    if (i>=11){
        break
    }
}   

