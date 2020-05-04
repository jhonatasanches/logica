var pcetiq, escpag
var rs = require('readline-sync')

var pcetiq = rs.questionInt('Qual o preco do produto? ')

console.log('ATENCAO! TEMOS AS SEGUINTES FORMAS DE PAGAMENTO, ESCOLHA UMA:')
console.log('1 - A vista em dinheiro ou cheque - 10% DE DESCONTO')
console.log('2 - A vista no cartao de credito - 15% DE DESCONTO')
console.log('3 - Em duas vezes, preco normal - SEM JUROS')
console.log('4 - Em tres vezes, preco normal - 10% DE JUROS')

var escpag = rs.questionInt('Qual o modo de pagamento? Escreva de 1 a 4 : ')

while ((escpag <= 0) || (escpag > 4)) {
    var escpag = rs.questionInt('Qual o modo de pagamento? Escreva de 1 a 4 APENAS : ')
}

opc1 = pcetiq * 0.9
opc2 = pcetiq * 0.85
opc3 = pcetiq / 2
opc4 = (pcetiq * 1.1) / 3

switch (escpag) {
    case 1:
        console.log('Por ter escolhido esta opcao ira pagar RS ' + opc1 + ' Pois tem 10% de desconto')
        break
    case 2:
        console.log('Por ter escolhido esta opcao ira pagar RS ' + opc2 + ' Pois tem 15% de desconto')
        break
    case 3:
        console.log('Por ter escolhido esta opcao ira pagar duas prestacoes de RS ' + opc3 + ' Pois escolheu pagar em duas vezes Sem Juros')
        break
    case 4:
        console.log('Por ter escolhido esta opcao ira pagar tres prestacoes de RS ' + opc4 + ' Pois escolheu pagar em duas vezes Com Juros de 10%')
        break
}
