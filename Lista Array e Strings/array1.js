var rs = require('readline-sync')

var precos = [] // guarda no vazio
for (var contador = 0; contador < 3; contador++) {
    var preco = rs.questionFloat('Diga o preco do produto:  ');
    precos.push(preco);  //push faz ler minha variavel
}
console.log('Precos: ' + precos)

var dinheirodadoaocaixa = rs.questionInt('De dinheiro para o caixa: ')

var totaldacompra = 0
for(var contador = 0; contador < precos.length; contador++){
    var precodoprodutoatual= precos[contador]
    var acumulado = totaldacompra + precodoprodutoatual
    totaldacompra = acumulado
}

console.log('Total da compra:  ' +totaldacompra)

if (totaldacompra == dinheirodadoaocaixa){
    console.log('voce tem dinheiro meu querido, pode levar')
}else if (totaldacompra < dinheirodadoaocaixa){
    console.log('trouxe muito dinheiro, quer seu troco em balas?')
    var troco = dinheirodadoaocaixa - totaldacompra
    console.log(`toma aqui seus R$${troco} reais de troco! Obrigado por vir!`)
}else {
    console.log('dinheiro insuficiente irmao, fiado so amanha')
}