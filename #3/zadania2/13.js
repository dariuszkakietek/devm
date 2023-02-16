// Zasymuluj grę w papier, kamień, nożyce. Oczywiście będzie to uproszczona wersja,
// ponieważ będzie zapewniała wprowadzenie danych tylko jednorazowo.
// Pobierz od użytkownika numer 1 słowo spośród: "kamień", "papier", "nożyce",
// operację przeprowadź również dla użytkownika numer 2. Następnie wyświetl, który
// z użytkowników wygrał to jednorazowe starcie (pamiętaj o tym, który przedmiot jest
// w grze "silniejszy" od drugiego). Dodatkowo zabezpiecz program przed wprowadzeniem
// nieprawidłowych danych, czyli jeżeli użytkownik nie wprowadzi ani "kamień", ani
// "papier", ani "nożyce" program ma natychmiastowo przerwać działanie i wyświetlić
// komunikat: "Błędne dane!".

const choice1 = prompt("GRACZ 1 > Wybierz papier, kamień lub nożyce: ");
const choice2 = prompt("GRACZ 2 > Wybierz papier, kamień lub nożyce: ");

const play = (choice1, choice2) => {
  let result = "";

  if (choice1 === "papier" && choice2 === "kamień") {
    result = "Gracz 1";
  }

  if (choice1 === "kamień" && choice2 === "nożyce") {
    result = "Gracz 1";
  }

  if (choice1 === "nożyce" && choice2 === "papier") {
    result = "Gracz 1";
  }

  if (choice1 === "nożyce" && choice2 === "kamień") {
    result = "Gracz 2";
  }

  if (choice1 === "papier" && choice2 === "nożyce") {
    result = "Gracz 2";
  }

  if (choice1 === "kamień" && choice2 === "papier") {
    result = "Gracz 2";
  }

  return result;
};

if (
  choice1 === "papier" ||
  choice1 === "kamień" ||
  choice1 === "nożyce" ||
  choice2 === "papier" ||
  choice2 === "kamień" ||
  choice2 === "nożyce"
) {
  alert(`Wygrywa ${play(choice1, choice2)}`);
} else {
  alert("Błęde dane!");
}
