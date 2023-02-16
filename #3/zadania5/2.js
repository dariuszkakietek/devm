let names = [
  "Jan",
  "Grzegorz",
  "Krzysztof",
  "Maciej",
  "Joanna",
  "Izabela",
  "Magdalena",
  "Kinga",
  "Kacper",
];

console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names[names.length - 2]);
console.log(names[Math.floor(names.length / 2)]);

console.log("-----------");

names.push("Andrzej");
names.push("Bogdan");
names.unshift("Marian");

console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names[names.length - 2]);
console.log(names[Math.floor(names.length / 2)]);
