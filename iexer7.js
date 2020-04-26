var senha , escpag
var rs = require('readline-sync')

var senha = rs.question('Digite a senha: ')

while (senha !== 'batatafrita'){
    console.log ("Senha errada")
    console.log ("Acesso Negado")
    var escpag = rs.question('Digite a senha correta: ')
}

console.log ("Senha correta")
console.log ("Acesso Liberado")