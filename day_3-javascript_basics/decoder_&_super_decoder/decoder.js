// words =  ['dead', 'bygone', 'landing', 'cheaply', 'assumed', 'incorrectly', 'attention', 'agent'];
// words2 = ['January', 'lacks', 'caveats', 'hazardous', 'DOORS', 'crying', 'arrogantly', 'climate', 'proponent', 'rebuttal'];

var words, message;

function decoder(words) {
  var index = 0;
  var secretMessage = '';
  for (var i = 0; i < words.length; i ++) {
    secretMessage += words[i][index];  //puedes llamar a un caracter de un string como si fuera un array .charAt(index) = [index]
    // index++;
    // if (index === 5) {
    //   return index = 0;
    // }
    index = (index + 1) % 5; //hace lo mismo que el bloque comentado
  }
  return secretMessage;
}

module.exports = decoder;


// message = decoder(words);
// console.log(message);
// message2 = decoder(words2);
// console.log(message2);
