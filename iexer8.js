var rs = require('readline-sync');

var text = rs.question('manda um texto ai: ')
var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letra = text.charAt(0)

// if (letra == letra.toLocaleUpperCase){
//     console.log('A primeira letra e maiuscula')
// }else {
//     console.log('A primeira letra e minuscula')
// }

for (var i = 0;i < alfabet.length; i++){
    if (alfabet.charAt(0) == letra){
        console.log('A primeira letra e maiuscula')
        break
    }
}