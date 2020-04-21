var num1, num2, num3, num4
var rs = require('readline-sync')

num1 = rs.question ('Quantas macans voce vai comprar hoje?')
num2 = 0.30
num3 = 0.25
num4 = 12

if (num1<12){
    console.log ('O preço unitário é RS' +num2, 'pagando um total de RS' +num2*num1)
}

else {
    console.log ('O preço unitário é RS' +num3, 'pagando um total de RS' +num3*num1)
}