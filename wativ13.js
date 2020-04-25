const rs = require('readline-sync')
var n1
var i = 0

while (i < 5) {
    n1 = rs.questionInt('Insere qualquer numero ai:  ')
    i++

    var result = n1
    var par = 2
    
    while (result > 0) {

        console.log(result)
        result = par + result
        if (result > n1) {
            break
        }
    }

}