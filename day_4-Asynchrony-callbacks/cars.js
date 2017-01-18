var Car = function(model, noise) {
  this.model = model;
  this.noise = noise;
  this.wheels = 4;
};

Car.prototype.makeNoise = function () {
  console.log(this.noise);
};

var myCar = new Car('Opel', 'bbrruuummmmm!!!');
myCar.makeNoise();
console.log(myCar.wheels);
