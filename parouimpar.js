var num1, num2, num3
var rs = require ('readline-sync')

num1 = rs.question ("Insira um numero para saber se e par ou impar : ")
num2 = 2

if (num1%num2 == 0){
    console.log('Este numero e par')
}

else {
    console.log('Este numero e impar')
}