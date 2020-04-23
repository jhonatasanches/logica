var num1, num2, num3, maior, menor, meio
var rs = require('readline-sync')

num1 = rs.questionInt('Coloque o primeiro numero: ')
num2 = rs.questionInt('Coloque o segundo numero: ')
num3 = rs.questionInt('Coloque o terceiro numero: ')

if ((num1 > num2) && (num1 > num3)) {
    maior = num1

    if (num2 > num3) {
        meio = num2
        menor = num3
        console.log(menor, meio, maior)
    }
    console.log(menor, meio, maior)
}
else if ((num2 > num3) && (num2 > num1)) {
    maior = num2

    if (num1 > num3) {
        meio = num1
        menor = num3
        console.log(menor, meio, maior)
    }
    console.log (menor, meio, maior)
}
else if ((num3 > num2) && (num3 > num1)) {
    maior = num3

    if (num1 > num2) {
        meio = num1
        menor = num2
        console.log(menor, meio, maior)
    }
    console.log(menor, meio, maior)
}
