var ddi
var rs = require('readline-sync')

var ddi = rs.question('Qual seu DDI? ')

eua = "Estados Unidos"
ale = "Alemanha"
arg = "Argentina"
bra = "Brasil"
por = "Portugal"

if (ddi == "1"){
    console.log('Seu pais e :  ' +eua)
}else if (ddi == "49"){
    console.log('Seu pais e :  ' +ale) 
}else if (ddi == "54"){
    console.log('Seu pais e :  ' +arg) 
}else if (ddi == "55"){
    console.log('Seu pais e :  ' +bra) 
}else if (ddi == "35"){
    console.log('Seu pais e :  ' +por) 
}else{
    console.log('DDI não cadastrado')
}
    