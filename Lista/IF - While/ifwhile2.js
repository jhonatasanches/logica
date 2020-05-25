var num = 1
var i = 50

while (num <= i) {
    var ehprimo = true //TODOS NUMEROS PRIMOS ATÉ ENTÃO
    var contador = 2

    while (contador < num) {
        if (num % contador == 0) { //SEPARANDO NUMEROS QUE ERAM PRIMOS
            ehprimo = false
        }
        contador++
    }

    if (num%2==0) {
        if (ehprimo == true){
            console.log(num, 'O numero e par e primo')
        } else {
            console.log(num, 'O numero e par')
        }
    }else {
        if (ehprimo == true){
            console.log (num, 'O numero e impar e primo')
        } else {
            console.log(num, 'O numero e impar')
    }
    }
    num++
}

