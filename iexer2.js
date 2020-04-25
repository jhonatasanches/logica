var temp, temp1
var rs = require('readline-sync')

var temp = rs.question('Fahrenheit ou Celsius? ')
var temp1 = rs.questionInt('Qual temperatura voce esta em ' +temp)

celsius = (temp1-32)*(5/9)
fahrenheit = (temp1*1.8)+32

if (temp == "Fahrenheit"){
    console.log('A temperatura em Celsius e :  ' +celsius)
}else if (temp == "Celsius") {
    console.log ('A temperatura em Celsius e :  ' +fahrenheit) 
}
    