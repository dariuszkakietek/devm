// Pobierz od użytkownika 3 liczby i wyświetl największą z nich.

const n1 = Number(prompt("Podaj liczbę 1: "));
const n2 = Number(prompt("Podaj liczbę 2: "));
const n3 = Number(prompt("Podaj liczbę 3: "));

const max = Math.max(n1, n2, n3);

alert(`Największa liczba to: ${max}`);
