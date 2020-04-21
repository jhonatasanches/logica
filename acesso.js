var num1
var rs = require('readline-sync')

num1 = rs.question('Senha de acesso?')

if (num1 != 1234){
    console.log('Acesso Negado')
}
else{
    console.log('Acesso Liberado')
}