var rs = require ('readline-sync')
var numeroLinhas = rs.question("Quantas linhas quer imprimir? ")

i = 0
while (true){
    if (numeroLinhas <= 0) {
        var numeroLinhas = rs.question("Quantas linhas quer imprimir? ")
    } else{
        while (i <= numeroLinhas){
            estrela = " * "
            adicionaEstrela = estrela + adicionaEstrela
            console.log(adicionaEstrela)
        }
    }  
}