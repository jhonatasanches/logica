var loop, n1, n2, loop2
var rs = require('readline-sync')


var loop = rs.question('Insira A ou B para continuar:  ')

while ((loop != A) && (loop != B)) {
    var loop = rs.question('INSIRA APENAS A OU B !!!!')
    if (loop == A){
        console.log ('Programa encerrado')
    } if (loop == B){
        var n1 = rs.questionInt('Insira um numero para soma:  ')
        var n2 = rs.questionInt('Insira outro numero para soma:  ')
        soma= n1+n2
        console.log ('O resultado da soma e:  ' +soma)
        var loop2 = rs.questionInt('Deseja fazer outro calculo? Sim ou Nao  ')
    }
}   

