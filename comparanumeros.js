
var num1, num2
var rs= require ('readline-sync')

num1= rs.question('Coloca o primeiro numero :  ')
num2= rs.question('Coloca o segundo numero :  ')

if (num1>num2){
    console.log('O primeiro numero e maior :  ' +num1)
}
else if (num1<num2){
    console.log('O segundo numero e maior :  ' +num2)
}
else {
    console.log('Os numeros sao iguais')
}