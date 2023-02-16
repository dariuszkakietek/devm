const exampleTab = [];
const letters = ["a", "b", "c", "d", "e"];
let randomString = "";

for (i = 1; i <= 1000; i++) {
  for (j = 0; j < 3; j++) {
    let randomNumber = Math.floor(Math.random() * 5);
    randomString += letters[randomNumber];
  }
  exampleTab.push(randomString);
  randomString = "";
}

console.log(exampleTab);

const exampleSet = new Set([...exampleTab]);

console.log(exampleSet);
