var rs = require('readline-sync');

var cont = rs.questionInt('Coloca um numero ai: ')
var contfin = rs.questionInt('Coloca outro numero ai: ')


for(var i = cont; i <= contfin; i++){
    console.log(i)
}
// variavel contadora inicia apenas de onde quero iniciar