// 1. Użytkownik wybiera czy obstawia reszkę, czy orła (literka r – reszka,
// literka o – orzeł)
// 2. Po dokonaniu wyboru, Komputer odlicza 3,2,1, a następnie dokonuje
// 'rzutu', czyli losowego wyboru orzeł / reszka.
// 3. Komputer wyświetla wynik rzutu i zwycięzcę

const divEl = document.getElementById("div");
const choiceEl = document.getElementById("choice");

const choise = prompt("Wybierz reszkę (R) lub orła (O).");

const chance = Math.round(Math.random());

const play = (chance) => {
  let result;
  if (chance === 1) {
    result = "Wypadła Reszka!";
  } else {
    result = "Wypadł Orzeł!";
  }

  let timeLeft = 3;
  const timer = setInterval(() => {
    if (timeLeft < 1) {
      clearInterval(timer);
      divEl.innerHTML = result;
      return;
    }
    divEl.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
};

if (choise === "o" || choise === "O") {
  play(chance);
  choiceEl.innerHTML = "Twój wybór to: Orzeł.";
} else if (choise === "r" || choise === "R") {
  play(chance);
  choiceEl.innerHTML = "Twój wybór to: Reszka.";
} else {
  divEl.innerHTML = "Niepoprawny wybór.";
}
