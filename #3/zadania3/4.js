// Napisz program, wyświetlający n kolejnych potęg liczby 2. Wartość n podaje użytkownik.

const number = Number(prompt("Podaj liczbę: "));

for (i = 1; i < number; i++) {
  console.log(2 ** i);
}
