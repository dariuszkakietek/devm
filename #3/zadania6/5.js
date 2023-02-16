const exampleDate = new Date(prompt("Podaj datę (YYYY-MM-DD): "));

const days = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];

console.log(days[exampleDate.getDay()]);
