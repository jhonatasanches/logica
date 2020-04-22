var num1, num2, num3, homem, mulher, sexo
var rs = require('readline-sync')


sexo = rs.question('Voce e o homem ou mulher? Responde 1 para homem e 2 para mulher : ')
num1 = rs.question('Qual sua altura? Escrever em metros : ')
num2 = -58
num3 = -44.7
homem = 72.7*num1+num2
mulher = 62.1*num1+num3


if (sexo != 2){
    console.log('Por ser homem seu peso ideal e: ' +homem)
}
else{
    console.log('Por ser mulher seu peso ideal e: ' +mulher)
}