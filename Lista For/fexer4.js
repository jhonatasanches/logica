var aluno, nota1, nota2
var rs = require('readline-sync');

var aluno = rs.question("Nome do Aluno?  ")
var nota1 = rs.questionFloat("Qual nota da prova 1?  ")
var nota2 = rs.questionFloat("Qual nota da prova 2?  ")
media = nota1*0.3+nota2*0.7
console.log("O aluno " +aluno+ " tem uma media " +media)
