var nota1, nota2, nota3, soma, mediaarit
var rs = require ('readline-sync')

nota1 = rs.question ('Digite aqui a nota de uma materia:  ')
nota2 = rs.question ('Digite aqui a nota de uma materia:  ')
nota3 = rs.question ('Digite aqui a nota de uma materia:  ')

soma = nota1 + nota2 + nota3
mediaarit= soma/3

if (mediaarit >= 7){
    console.log('ALUNO APROVADO, SUA MÉDIA FOI : ' +mediaarit)
}
else {
    console.log('ALUNO REPROVADO, SUA MÉDIA FOI : ' +mediaarit)
}