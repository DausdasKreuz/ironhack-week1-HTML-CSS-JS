
function averageColon(str) {
  var numsArray = numbers.split(':');
  var sum = numsArray.reduce(function(a,b) {
    return parseInt(a) + parseInt(b);
  });
  var avr = sum / numsArray.length;
  console.log(avr);
  return avr;
}

var numbers = '80:70:90:100';
console.log( averageColon(numbers) === 85);
