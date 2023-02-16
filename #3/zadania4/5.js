// Aby obliczyć wartość BMI, korzystamy z następującego wzoru:
// bmi = weight / height^2 (gdzie waga podawana jest w kg, a wzrost w m^2).
// Napisz funkcję, która będzie obliczała wartość bmi.
// Funkcja ta ma zwracać jeden z kilku napisów: “nadwaga”, “normalna”, “niedowaga”
// na podstawie poniższego schematu:
// “Niedowaga”: gdy BMI mniejsze niż 18.5
// “Normalna”: gdy BMI między 18.5 i 24.9
// “Nadwaga”: gdy BMI większe równe niż 25

const weight = Number(prompt("Podaj wagę w kg: "));
const height = Number(prompt("Podaj wzrost w cm: "));

const result = (weight / (height / 100) ** 2).toFixed(2);

if (result >= 25) {
  console.log("Nadwaga");
} else if (result < 18.5) {
  console.log("Niedowaga");
} else {
  console.log("Normalna");
}
