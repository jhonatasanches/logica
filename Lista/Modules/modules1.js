var rs = require ('readline-sync')
var median = require ('median')

var media = new Array ()
console.log('Coloca as notas abaixo: ')

for (var i = 0; i < 4; i++){
    nota = rs.questionInt('>> ')
    media.push(nota) 
}
var mediaFinal = median(media)
console.log('As notas são ' +media)
console.log('A media e ' +mediaFinal)

