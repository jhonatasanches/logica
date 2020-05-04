// var rs = require('readline-sync');
// var text = ''
// var text = rs.question('manda um texto ai: ')
// var letra = text.length


// for(var i = 0; i < letra; i++){
//     if(text[i].charAt(i) === "a"){
//         var textmaiusc = text.split('') 
//         textmaiusc[i] = text.charAt(i).toUpperCase()
//         console.log(textmaiusc.join(''))
//     }
// }
// console.log(text)

const read = require('readline-sync');
var option = '';
option = read.question('Digita alguma coisa aa parca:  ');
var palavra = option.split(''); // declarou palavra e falou para o split quebrar ela

for (let i = 0; i < option.length; i++) {   // loop que vai até a ultima posição da palavra, começa no zero e vai somando mais um
    if (option.charAt(i) === 'a') { // verificando se a nossa palavra tem o a minusculo
        //maca = ['m', 'a', 'c', 'a']
        palavra[i] = option.charAt(i).toUpperCase(); // pegando a letra "a" na palavra e deixando "A"
    }
}
console.log(palavra.join('')); //o join vai juntar as letras que foram separadas pelo split pelo espaço em branco

//tecnica do patinho de borracha, explica o que esta acontecendo de problema para ele e acabar descobrindo explicando