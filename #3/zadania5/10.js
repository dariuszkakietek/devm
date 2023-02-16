const exampleSet = new Set();

for (i = 1; i <= 10; i++) {
  exampleSet.add(i);
}

console.log(exampleSet);

exampleSet.delete(5);

console.log(exampleSet);

const exampleSet2 = new Set([
  "Polska",
  "Niemcy",
  "Francja",
  "Wielka Brytania",
  "Belgia",
]);

const exampleMap = new Map();

exampleSet2.forEach((value) => {
  exampleMap.set(value.charAt(0), value);
});

console.log("===========");

console.log(exampleMap);
