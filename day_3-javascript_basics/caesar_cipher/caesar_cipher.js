function caesarCipher (message, shift) {
  shift = shift || -3;
  var word = [];
  for (var i = 0; i < message.length; i++) {
    char = message[i];
    if (is_in_alphabet(char)) {
      num = message.charCodeAt(i)
      result_in_alphabet = is_in_alphabet(shift + num);
      if (shift > 0) {
        if (result_in_alphabet) {
          word.push(String.fromCharCode(num + shift));
        } else {
        word.push(String.fromCharCode(num - 26 + shift));
        }
      } else {
        if (result_in_alphabet) {
          word.push(String.fromCharCode(num + shift));
        } else {
          word.push(String.fromCharCode(num + 26 + shift));
        }
      }
    } else {
      word.push(char);
    }
  }
  return word.join('');
}

function is_in_alphabet(char) {
  return ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z');
}

var encrypted = caesarCipher("Et tu, brute?");

console.log(encrypted);
//=> "Kz za, hxazk?"
if (true) {

}
