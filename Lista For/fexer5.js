var rs = require('readline-sync');

for (var i = 1; i = true; i++){
var fator = 1
var option = rs.question('Vamos fatorar? sim ou nao?  ')

if (option == "sim") {
    var n1 = rs.question("Digite um numero para fatorar:  ")
    for (var i = 1; i <= n1; i++) {
        fator = fator * i
        console.log(fator)
    }
    // console.log(fator)
}
else {
    console.log('Tiiiaauuu')
    break
}
}