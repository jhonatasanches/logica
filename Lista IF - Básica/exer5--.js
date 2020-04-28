var num1, num2, num3, maior, menor, medio
var rs = require('readline-sync')

var num1 = rs.questionInt('Coloque o primeiro numero: ')
var num2 = rs.questionInt('Coloque o segundo numero: ')
var num3 = rs.questionInt('Coloque o terceiro numero: ')

if ((num1 > num2) && (num1 > num3)) {
    maior = num1

    if (num2 > num3) {
        medio = num2
        menor = num3
        console.log(menor, medio, maior)
    }

} else if ((num2 > num3) && (num2 > num1)) {
    maior = num2

    if (num1 > num3) {
        medio = num1
        menor = num3
        console.log(menor, medio, maior)
    }

} else if ((num3 > num2) && (num3 > num1)) {
    maior = num3

    if (num1 > num2) {
        meio = num1
        menor = num2
        console.log(menor, medio, maior)
    }

}
