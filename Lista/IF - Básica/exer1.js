var num1, num2
var rs = require ('readline-sync')

num1 = rs.question ('Qual o ano do seu nascimento?')
//Ano da próxima eleição
num2 = 2020

if (num1>2004){
    console.log('Não pode votar por ser menor de 16 anos')
}
else if  (num1>2002){
    console.log('Pode votar, mas não é obrigatório! por ser maior de 16 anos e menor que 18 anos')
}
else if  (num1<1955){
    console.log('Pode votar, mas não é obrigatório! por ser maior de 65 anos')
}
else {
    console.log('Obrigatório a votar por ser maior de 18 anos e ser menor de 65 anos')
}