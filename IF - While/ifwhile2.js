var num1 = 50
var i = 1

while (i <= num1) {
    if (i % 2 != 0 && i % i == 0) {
        console.log(i + ' IMPAR PRIMO')
    } else if (i % 2 == 0) {
        console.log(i + ' PAR')
    } else{
        console.log(i + ' IMPAR')
    }
    i++
}