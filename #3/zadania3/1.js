// Napisz program wyświetlający liczby całkowite z przedziału <0; y>,
// gdzie y podaje użytkownik. Wykonaj to na pętli for i while.

const number = Number(prompt("Podaj liczbę: "));
let n = 0;

while (n < number) {
  console.log(n);
  n++;
}

console.log("----------------");

for (i = 0; i < number; i++) {
  console.log(i);
}
