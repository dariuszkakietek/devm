class Airplane {
  isFlying = false;
  constructor(name) {
    this.name = name;
  }
}

const plane1 = new Airplane("Plane1");

Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

console.log(plane1.isFlying);
plane1.takeOff();
console.log(plane1.isFlying);
