//
// Napisz program sprawdzający, czy podana przez użytkownika jest ujemna, dodatnia lub czy ma wartość równą 0.

const number = Number(prompt("Podaj liczbę: "));

if (!Number.isInteger(number)) {
  alert("To nie jest liczba.");
} else {
  if (number < 0) {
    alert("Liczba jest mniejsza od 0.");
  } else if (number > 0) {
    alert("Liczba jest większa od 0.");
  } else {
    alert("Liczba jest równa 0.");
  }
}
