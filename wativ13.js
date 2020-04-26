var n1, n2, resultp, resulti 
var rs = require('readline-sync')


var n1 = rs.questionInt('Insira aqui um numero:  ')

resultp = 0
resulti = 0
n2 = 2

while (n1 > 0){
    
    console.log('Soma dos pares e '+(resultp+resultp))
    resultp = n2 + resultp
    
    if (resultp > n1+1){
        break
    }
}   

// while (n1 > 0){
    
//     console.log('O produto dos impares e '+(resulti+resulticls))
//     resulti = n2 + resulti
    
//     if (resulti > n1){
//         break
//     }
// }   

while (n1 > 0){
    
    console.log('O produto dos impares e '+(n2+resulti))
    resulti = n2 + resulti
    
    if (resulti >= n1){
        break
    }
}   