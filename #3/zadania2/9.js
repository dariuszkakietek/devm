// Napisz program pobierający od użytkownika 2 liczby. Sprawdź, czy co najmniej 1 z nich jest parzysta.

const n1 = Number(prompt("Podaj liczbę 1:"));
const n2 = Number(prompt("Podaj liczbę 2:"));

if (n1 % 2 === 0 || n2 % 2 === 0) {
  alert("Przynajmniej jedna liczba jest parzysta.");
}
