var decoder = require('./decoder.js');
var sentences = require('./secretMessages.js')
var sentence, message;

// sentence = 'fill the proper tank for the cow';

function super_decoder (sentence, params) {
  var words = sentence.split(' ');
  var logic = params.split('-');
  var msg = '';
  if (logic[1] === 'backwards') {
    words = words.reverse();
  }
  if (logic[0] === 'even') {
    words = words.filter(function(word, index, words) {
      return index % 2 === 0;
    });
  } else if (logic[0] === 'odd') {
    words = words.filter(function(word, index, words) {
      return (index % 2) - 1 === 0;
    });
  }
  msg = decoder(words);
  return msg;
}

for (var i = 0; i < sentences.length; i++) {
  console.log(super_decoder(sentences[i], 'every-forwards'));
  console.log(super_decoder(sentences[i], 'even-forwards'));
  console.log(super_decoder(sentences[i], 'odd-forwards'));
  console.log(super_decoder(sentences[i], 'every-backwards'));
  console.log(super_decoder(sentences[i], 'even-backwards'));
  console.log(super_decoder(sentences[i], 'odd-backwards'));
}
// message = super_decoder(sentence, 'odd-backwards');
// console.log(message);
