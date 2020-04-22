var num1, num2, num3
var rs = require ('readline-sync')

num1 = rs.question ('Digite um numero :  ')
num2 = 100
num3 = 200

if (num2 > num1 < num3){
    console.log('Voce digitou um numero entre 100 e 200')
}
else {
    console.log('Voce digitou um numero fora da faixa entre 100 e 200')
}