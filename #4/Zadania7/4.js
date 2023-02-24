// let Cat = class {
class Cat {
  constructor(name, level_hapiness, level_hunger, level_lonliness) {
    this.name = name;
    this.level_hapiness = level_hapiness;
    this.level_hunger = level_hunger;
    this.level_lonliness = level_lonliness;
  }

  feed() {
    this.level_hunger += 1;
  }

  sleep() {
    this.level_hapiness += 1;
  }

  play() {
    this.level_lonliness += 1;
  }

  status() {
    console.log(`
    Name: ${this.name} 
    Hapiness: ${this.level_hapiness} 
    Hunger: ${this.level_hunger} 
    Lonliness: ${this.level_lonliness}
    `);
  }
}

const andrzej = new Cat("Andrzej", 5, 6, 7);

andrzej.status();
