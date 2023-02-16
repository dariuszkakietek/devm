// Napisz program, który wyświetli liczby z przedziału <50; 100>
// podzielne przez całkowitą liczbę k, którą podaje użytkownik. Przekształć program tak,
// aby przedział podawał również użytkownik.

const n1 = Number(prompt("Przedział od: "));
const n2 = Number(prompt("Przedział do: "));

const n3 = Number(prompt("Podzielne przez: "));

for (i = n1; i < n2; i++) {
  if (i % n3 === 0) {
    console.log(i);
  }
}
