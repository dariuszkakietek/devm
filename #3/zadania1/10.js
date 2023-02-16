// Pobierz od użytkownika imię oraz rok, w którym się urodził.
// Następnie wyświetl komunikat postaci: “Cześć <tutaj imię użytkownika>.
// Masz <tutaj wiek użytkownika> lat”.
// Aktualny rok pobieraj za pomocą następującego zapisu:
// currentYear = new Date().getFullYear();

const name = prompt("Podaj imię: ");
const birthday = Number(prompt("Podaj rok urodzenia: "));
const today = Number(new Date().getFullYear());
const years = today - birthday;

alert(`Cześć ${name}. Masz ${years} lat.`);
