var preco, md1, md2, md3, md4, md5, md6
var rs = require('readline-sync')

var preco = rs.questionInt('Qual o preco do produto? ')
var md1 = rs.questionInt('Quantas moedas de 1 real tem no cofre? ')
var md2 = rs.questionInt('Quantas moedas de 50 centavos tem no cofre? ')
var md3 = rs.questionInt('Quantas moedas de 25 centavos tem no cofre? ')
var md4 = rs.questionInt('Quantas moedas de 10 centavos tem no cofre? ')
var md5 = rs.questionInt('Quantas moedas de 05 centavos tem no cofre? ')
var md6 = rs.questionInt('Quantas moedas de 01 centavos tem no cofre? ')

cofre = md1+md2*0.5+md3*0.25+md4*0.10+md5*0.05+md6*0.01
compra = preco-cofre

if (compra > 0){
    console.log('Valor insuficiente, você tem RS' +cofre)
}else {
    console.log('Valor suficiente, você tem RS' +cofre)
}
    