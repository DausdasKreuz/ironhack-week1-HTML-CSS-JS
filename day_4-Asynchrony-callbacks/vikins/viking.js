var Viking = function ( name ) {
  this.name = name;
  this.health = Math.floor(Math.random() * 1000);
  this.strength = Math.floor(Math.random() * 90);
};

Viking.prototype.getDamage = function ( attacker ) {
  this.health = this.health - attacker.strength;
};

module.exports = Viking;
