var rs = require('readline-sync')

function pedeRaio (rs){
    var raio = rs.questionFloat('Insira um valor de raio:  ')
    return raio
}

function calculaVolume (raio){
    var volume = 4/3 * Math.PI * (raio**3)
    return volume
}

var raio = pedeRaio(rs)
var volume = calculaVolume (raio)
console.log('O volume do circulo e: ' +volume)