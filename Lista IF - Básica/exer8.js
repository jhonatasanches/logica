var lado1, lado2, lado3
var rs = require('readline-sync')


lado1 = rs.question('Escreva o valor em centimetros do lado :  ')
lado2 = rs.question('Escreva o valor em centimetros do lado :  ')
lado3 = rs.question('Escreva o valor em centimetros do lado :  ')
// equilatero = todos lados iguais
// isoscele = dois lados iguais
// escaleno = todos lados diferentes

if ((lado1 == lado2) && (lado2 == lado3)){
console.log('Este e um triangulo EQUILATERO, pois todos os lados sao iguais')
} else if (((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1))){
      console.log('Este e um triangulo  ISOSCELE, pois possui dois lados iguais')
} else{
    console.log('Este e um triangulo ESCALENO, pois todos lados sao diferentes')
}