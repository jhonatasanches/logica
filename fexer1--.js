var rs = require('readline-sync');
var text = ''
var text = rs.question('manda um texto ai: ')
var letra = text.length


for(var i = 0; i < letra; i++){
    if(text[i].charAt(i) === "a"){
        var textmaiusc = text.split('') 
        textmaiusc[i] = text.charAt(i).toUpperCase()
        console.log(textmaiusc.join(''))
    }
}
console.log(text)