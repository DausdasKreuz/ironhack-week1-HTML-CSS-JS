var fs = require('fs');

function averageColon(str) {
  var numsArray = str.split(':');
  var sum = numsArray.reduce(function(a,b) {
    return parseInt(a) + parseInt(b);
  });
  var avr = sum / numsArray.length;
  console.log(avr);
  return avr;
}

function takeNum (error,nums) {
  console.log( averageColon(nums) === 85);
  fs.writeFile('result.txt', averageColon(nums),'utf8');
}

fs.readFile('textAverage.txt', 'utf8', takeNum);
