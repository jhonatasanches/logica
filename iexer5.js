var salmin = 1045
var precokw = (salmin/7)/100
var kw
var rs = require('readline-sync')

var kw = rs.questionInt('Quantos KWH voce gastou esse mes? ')

while (kw <= 0){
    var kw = rs.questionInt('Quantos KWH voce gastou esse mes? ')
}

kwdesc = (precokw*kw)*0.9

if (kw > 100){
    console.log('Esta na media do consumo brasileiro e ira pagar RS'+kwdesc+ ' Pois tem 10% de desconto')
}else {
    console.log('Esta acima do consumo brasileiro e ira pagar RS' +(precokw*kw)+ ' Pois nao tem 10% de desconto')
}