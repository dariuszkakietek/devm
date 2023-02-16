let people = new Map();

people.set("Andrzej", 30);
people.set("Bogdan", 34);
people.set("Mariusz", 21);

console.log(people);

let people2 = {
  Andrzej: 30,
  Bogdan: 34,
  Mariusz: 21,
};

console.log("============");

console.log(people2);

let people3 = [
  ["Andrzej", 30],
  ["Bogdan", 34],
  ["Mariusz", 21],
];

console.log("============");

console.log(people3);

console.log("============");
console.log("============");

people.forEach(function (value, key, map) {
  console.log(key);
});

console.log("============");
console.log("============");

people.forEach(function (value, key, map) {
  console.log(value);
});

console.log("============");
console.log("============");

people.forEach(function (value, key, map) {
  console.log(`${key} => ${value}`);
});
