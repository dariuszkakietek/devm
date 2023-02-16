// Stwórz funkcję getSeason, która zwracać będzie nazwę pory roku na podstawie
// przesłanego miesiąca. Jeżeli użytkownik nie prześle argumentu, to miesiąc
// domyślnie ma być styczniem.

const getSeason = (month = "styczeń") => {
  let result;

  switch (month) {
    case "marzec":
    case "kwiecień":
    case "maj":
      console.log("wiosna");
      break;
    case "czerwiec":
    case "lipiec":
    case "sierpień":
      console.log("lato");
      break;

    case "wrzesień":
    case "październik":
    case "listopad":
      console.log("jesień");
      break;

    case "grudzień":
    case "styczeń":
    case "luty":
      console.log("zima");
      break;
  }
};
