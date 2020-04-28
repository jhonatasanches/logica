var poligono, lado1, altura, triangulo, quadrado, pentagono
var rs = require('readline-sync')


ang1 = rs.question('Escreva os angulos de cada lado dos triangulos :  ')
ang2 = rs.question('Escreva os angulos de cada lado dos triangulos :  ')
ang3 = rs.question('Escreva os angulos de cada lado dos triangulos :  ')
// Acutângulo = todos lados iguais
// Retângulo = dois lados iguais
// Obtusangulo = todos lados diferentes

if (((ang1 == 90) || (ang2 == 90) || (ang3 == 90))){
    console.log('Este e um triangulo RETANGULO')
}else if (((ang1 > 90) || (ang2 > 90) || (ang3 > 90))){
    console.log('Este e um triangulo OBTUSANGULO')
}else{
    console.log('Este e um triangulo ACUTANGULO')
}
