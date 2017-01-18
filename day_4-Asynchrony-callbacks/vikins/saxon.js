var Saxon = function () {
  this.health = Math.floor(Math.random() * 100);
  this.strength = Math.floor(Math.random() * 9);
};

Saxon.prototype.getDamage = function ( attacker ) {
  this.health = this.health - attacker.strength;
};

module.exports = Saxon;
