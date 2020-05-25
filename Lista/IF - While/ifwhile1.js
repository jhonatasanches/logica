var rs = require ('readline-sync')
var num1 = rs.question('Digite um numero entre 1 e 100: ')
while(num1 < 1 || num1 > 100){
    var num1 = rs.question('Digite um numero APENAS entre 1 e 100: ')
}
var num2 = rs.question('Digite outro numero entre 1 e 100: ')
while(num2 < 1 || num2 > 100){
    var num2 = rs.question('Digite um numero APENAS entre 1 e 100: ')
}

while (num1 >= 1 && num1 <= 100){
    if (num1%7 == 0 && num1%5 == 0){
       console.log('Ping Pong')
    } else if (num1%7==0){
        console.log('Ping')
    } else if (num1%5==0){
       console.log('Pong')
    }
    break
   }

   while (num2 >= 1 && num2 <= 100){
    if (num2%7 == 0 && num2%5 == 0){
       console.log('Ping Pong')
    } else if (num2%7==0){
        console.log('Ping')
    } else if (num2%5==0){
       console.log('Pong')
    }
    break
   }