const rs = require('readline-sync')
var option = ''
option = rs.question('Digita alguma coisa ae mano:  ')

console.log(option.length) 
//length faz com que mostre quantos caracteres tem a palavra digitada
//  [M, A, C, A] >>>> Exemplo escrevi assim
//  [0, 1 , 2 ,3]   >>>> o length lê assim

option.charAt(0) //CHARAT INDICA ONDE ESTOU MARCANDO A PALAVRA
var i = 0
while (i < option.length) {
    console.log(option.charAt(i)) 
    i++
}   

