var fs = require('fs');

function numCleaner (error, nums) {
  var numbers = nums.split(',');
  var result = [];
  var compare = true;
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < i + 1 ; j++) {
      if (numbers[i] === result[j]) {
        compare = false;
      }
    }
    if (compare) {
      result.push(numbers[i]);
      compare = true;
    }
    compare = true;
  }
  console.log(result);
  fs.writeFile('cleaned.txt', result, 'utf8');
}

fs.readFile('numbersRepeated.txt', 'utf8', numCleaner);
