var rs = require ('readline-sync')
var numeroLinhas = rs.question("Quantas linhas quer imprimir? ")
var i = 1
var asterisco = "*"

while (numeroLinhas <= 0){
    var numeroLinhas = rs.question("Quantas linhas quer imprimir? ")
}

while (i <= numeroLinhas){
    console.log(asterisco)
    var asterisco = asterisco + "*"
    i++ 
}