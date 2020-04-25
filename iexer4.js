var salario, emprest, nprest
var rs = require('readline-sync')

var salario = rs.questionInt('Qual seu salario? ')
var emprest = rs.questionInt('Qual valor que voce quer de emprestimo? ')
var nprest = rs.questionInt('Quantas parcelas sao? ')

while ((salario <= 0)||(emprest <= 0)||(nprest <= 0)){
var salario = rs.questionInt('Qual seu salario? ')
var emprest = rs.questionInt('Qual valor que voce quer de emprestimo? ')
var nprest = rs.questionInt('Quantas parcelas sao? ')
}

vprest = emprest / nprest
mconsig = salario*0.3

if (mconsig < vprest){
    console.log('Emprestimo negado, sem margem para emprestimo')
}else {
    console.log('Emprestimo aprovado')
}