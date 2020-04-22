var num1, num2, num3
var rs = require('readline-sync')

num1 = rs.question('Coloque o primeiro numero: ')
num2 = rs.question('Coloque o segundo numero: ')
num3 = rs.question('Coloque o terceiro numero: ')

if (num1 < num2){
    console.log('Reescrevendo em ordem : ' +num1)
}
else if (num1<num3){
    console.log('Reescrevendo em ordem : '+num1)
}
else if (num2<num1){
    console.log('Reescrevendo em ordem : '+num2)
}
else if (num2<num3){
    console.log('Reescrevendo em ordem : '+num2)
}
else if (num3<num1){
    console.log('Reescrevendo em ordem : '+num3)
}
else{
    console.log('Reescrevendo em ordem : '+num3)
}