// Stwórz skrypt, który stworzy 100-znakowy łańcuch losowo wygenerowanych znaków.

let randomString = "";

for (i = 0; i < 100; i++) {
  randomString += String.fromCharCode(Math.floor(Math.random() * 10) + 65);
}

console.log(randomString);
