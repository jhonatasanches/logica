// var rs = require('readline-sync')
// var jogador1 = rs.question ('Jogador 1, declare seu nome: ')
// var jogador2 = rs.question ('Jogador 2, declare seu nome: ')
// var numeros1 = []
// var numeros2 = []

// for (var contador = 0; contador < 5; contador++) {
//     var numerodojogador1 = rs.questionInt ('Jogador 1, escreva 5 numeros de 1 a 10: ')
//     numeros1.push(numerodojogador1);  //push faz ler minha variavel
// }
// for (var contador = 0; contador < 5; contador++) {
//     var numerodojogador2 = rs.questionInt ('Jogador 2, escreva 5 numeros de 1 a 10: ')
//     numeros2.push(numerodojogador2);  //push faz ler minha variavel
// }

// for (var contador = 0; contador < numerodojogador1.lenght; contador++){
//     var diferente = []
//     if(numerodojogador1 != numerodojogador2){
//         numerodojogador1.push(diferente)
//     }
// }

// console.log(`Numero diferente ${diferente}`)

var rs = require("readline-sync")
var numA=[]
var numB=[]
var novoArray=[]
var nameA=rs.question("Digite seu nome, jogador A. ")
var result =0
for(var i= 0; i<3; i++){
    numA.push(rs.questionFloat("Nota: "))
}
var nameB=rs.question("Digite seu nome, jogador B. ")
for(var i= 0; i<3; i++){
    numB.push(rs.questionFloat("Nota: "))}
for(var count=0; count<3;count++){
    result = numB.includes(numA[count])
       if(result!==true){
           novoArray.push(numA[count])
    }
}
console.log(`Os números digitados por ${nameA} são: ${numA} `)
console.log(`Os números digitados por ${nameB} são: ${numB} `)
console.log(`Os números que ${nameA} digitou diferente de ${nameB} são : ${novoArray}`)
