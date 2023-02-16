let fuel = 0;
let team = 0;
let distance = 0;

while (fuel < 5000 || fuel > 30000) {
  fuel = Number(prompt("Podaj ilość paliwa między 5000 a 30000"));
}

while (team < 1 || team > 7) {
  team = Number(prompt("Podaj liczbę astronautów od 1 do 7: "));
}

distance = Number(prompt("Podaj długość lotu w kilometrach: "));
console.log(distance);
console.log("--------");
for (i = distance; i >= 0; i -= 100) {
  console.log(`Pozostało: ${i}km`);
  if (fuel > 0) {
    fuel -= 300 + 100 * team;
  } else {
    console.log("Koniec paliwa");
    break;
  }
}
