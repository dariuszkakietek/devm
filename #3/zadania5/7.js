const students = new Map([
  ["French:", 45],
  ["Arabic: ", 25],
  ["Spanish:", 24],
  ["Russian:", 9],
  ["Portuguese:", 9],
  ["Dutch:", "8"],
  ["German:", 7],
  ["Chinese:", 5],
  ["Swahili:", 4],
  ["Serbian:", 4],
  ["English:", 91],
]);

const count = [];

students.forEach(function (value, key, map) {
  count.push(Number(value));
});

result = Math.max(...count);

students.forEach(function (value, key, map) {
  if (value === result) {
    console.log(key);
  }
});
