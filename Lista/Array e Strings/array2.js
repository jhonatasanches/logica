var rs = require('readline-sync')
var jogador1 = rs.question ('Jogador 1, declare seu nome: ')
var jogador2 = rs.question ('Jogador 2, declare seu nome: ')
var numeros1 = []
var numeros2 = []

for (var contador = 0; contador < 5; contador++) {
    var numerodojogador1 = rs.questionInt ('Jogador 1, escreva 5 numeros de 1 a 10: ')
    numeros1.push(numerodojogador1);  //push faz ler minha variavel
}
console.log(jogador1+ ' você escolheu os numeros: ' +numeros1)

for (var contador = 0; contador < 5; contador++) {
    var numerodojogador2 = rs.questionInt ('Jogador 2, escreva 5 numeros de 1 a 10: ')
    numeros2.push(numerodojogador2);  //push faz ler minha variavel
}

console.log(jogador2+ ' você escolheu os numeros: ' +numeros2)

for(var contador = 5; contador >=0; contador--){
    var numerosJogador1 = numerodojogador1[i]
    if (!numerodojogador2.includes(numerodojogador1)){
        diferenteDeJogador2.push(numerodojogador1)
    }
}
console.log('Numeros diferentes' +diferenteDeJogador2.join())