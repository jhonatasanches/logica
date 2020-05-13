// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
// um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
// e inicialize essas variáveis nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos.
// Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
// com maior idade e imprimir seus nomes.

var rs = require('readline-sync')

class aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
var estudante []

for (var i = 0; i < 3; i++){
var nome = rs.require('Digite o nome de um Aluno: ')
var idade = rs.require('Digite a idade de um Aluno: ')
var alunos = new aluno(nome, idade)
estudante.push(aluno)
}

console.log(estudante)

