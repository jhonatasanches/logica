const rs = require('readline-sync')
var num = ''
num = rs.questionInt('Insere qualquer numero ai:  ')

var i = num
while (i >= 0) {
    var resto = num % i
    
    if (resto == 0){
        console.log(i) 
    }
    i--
    
}   

/* NUM  I  RESTO
    25  25   0
    25  24   1
    25  05   0
    25  01   0*/