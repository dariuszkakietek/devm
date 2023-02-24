class Car {
  tank = 0;
  odometer = 0;

  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
  }

  fill(gallons) {
    this.tank += gallons;
  }

  drive(distance) {
    if (distance * this.milesPerGallon < this.tank) {
      this.odometer += distance;
      this.tank -= distance * this.milesPerGallon;
    }
  }
}
