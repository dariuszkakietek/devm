// Napisz mini program, w którym użytkownik poda do promptów:
// Liczbę X,
// Działanie matematyczne (zrealizuj +, -, *, /, %, potęgowanie)
// Liczbę Y
// i w alercie wyświetli wynik. Skorzystaj z instrukcji warunkowych, switcha, konwersji.

const n1 = Number(prompt("Podaj liczbę: "));
const sign = String(prompt("Wybierz działanie: +, -, *, /, %, **"));
const n2 = Number(prompt("Podaj liczbę: "));

let result = 0;

switch (sign) {
  case "+":
    result = n1 + n2;
    break;
  case "-":
    result = n1 - n2;
    break;
  case "*":
    result = n1 * n2;
    break;
  case "/":
    result = n1 / n2;
    break;
  case "%":
    result = n1 % n2;
    break;
  case "**":
    result = n1 ** n2;
    break;
  default:
    result = "error";
}

alert(result);
