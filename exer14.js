const rs = require('readline-sync')


var n1 = rs.question('Digite um numero qualquer :  ')
var n2 = rs.question('Digite um numero qualquer :  ')
// Acutângulo = todos lados iguais
// Retângulo = dois lados iguais
// Obtusangulo = todos lados diferentes

if ((n1 % n2) == 0){
    console.log('O numero ' +n1 + ' e divisivel pelo numero ' +n2)
}else{
    console.log('Nao e divisivel')
}
