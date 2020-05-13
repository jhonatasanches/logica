var rs = require ('readline-sync')
var FasamImc = require ('fasam-imc-calc')

peso = rs.questionFloat ('Coloca seu peso: ')
altura = rs.questionFloat ('Coloca sua altura: ')


var SeuImc = new FasamImc(peso,altura)
console.log('Seu IMC e ' +SeuImc.calc())

