var nt1, nt2, nt3, soma, mediaarit
var rs = require ('readline-sync')

nt1 = rs.question ('Digite aqui a nota de uma materia:  ')
nt2 = rs.question ('Digite aqui a nota de uma materia:  ')
nt3 = rs.question ('Digite aqui a nota de uma materia:  ')

soma = nt1/3 + nt2/3 + nt3/3

if (soma >= 7){
    console.log('ALUNO APROVADO, SUA NOTA : ' +soma)
}
else {
    console.log('ALUNO REPROVADO, SUA NOTA : ' +soma)
}