var poligono, lado1, altura, triangulo, quadrado, pentagono
var rs = require('readline-sync')


poligono = rs.question('Lados do poligono regular :  ')
lado1 = rs.question('Escreva o valor em centimetros dos lados :  ')
altura = rs.question('Escreva o valor da altura caso seja triangulo ou pentagono:')
triangulo = (altura*lado1)/2
quadrado = lado1*lado1
pentagono = ((altura*lado1)/2)*5

if (poligono < 3){
    console.log('Poligono irregular')
}
else if (poligono == 3) {
    console.log('O Poligono em questao e um TRIANGULO e sua area e de : ' +triangulo)
}
else if (poligono == 4) {
    console.log('O Poligono em questao e um QUADRADO e sua area e de : ' +quadrado)
}
else if (poligono == 5) {
    console.log('O Poligono em questao e um PENTAGONO e sua area e de : ' +pentagono)
}