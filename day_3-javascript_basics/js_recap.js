var exampleArray = [2, -5, 10, 5, 4, -10, 0];

function process(data) {
  var positions = [];

  data.forEach(function (a, i) {
    data.forEach(function(b, j) {
      if (a + b === 0) {positions.push(i + ", " + j);}
    });
  });

  positions.forEach(function (a) {
    console.log("Sumando estos números el resultado es 0: " + a);
  });

  return positions;
}

var results = process(exampleArray);

console.log("These are the pair of numbers that sum 0: ");
console.log(results);
