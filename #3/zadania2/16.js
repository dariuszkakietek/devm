// Zastanów się, jak w bloku switch można by zaimplementować odpowiednik alternatywy logicznej “or”

let actualDay = new Date().getDay();
switch (actualDay) {
  case 5 || 6:
    text = "Soon it is a weekend!";
    break;
  default:
    text = "Looking forward to the weekend";
}

console.log(text);
