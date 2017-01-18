var Viking = require ('./viking.js');

var Pit_fight = function ( figther1, figther2 ) {
  this.maxTurns = Math.floor(Math.random() * 20);
  this.figther1 = figther1;
  this.figther2 = figther2;
};

Pit_fight.prototype.figth = function () {
  var i = 0;
  console.log(this.maxTurns);
  while (i < this.maxTurns) {
    this.figther1.getDamage(this.figther2);
    this.figther2.getDamage(this.figther1);
    i++;
    if (this.figther2.health < this.figther1.strength || this.figther1.health < this.figther2.strength) {
    }
  }
};
