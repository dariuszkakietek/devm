let codes = [];

const generateString = (stringLength) => {
  let randomString = "";
  for (i = 0; i < stringLength; i++) {
    randomString += String.fromCharCode(Math.floor(Math.random() * 10) + 65);
  }

  return randomString;
};

for (j = 1; j <= 10; j++) {
  let randomNumber = Math.round(Math.random() + 5);

  codes.push(generateString(randomNumber));
}

codes.map((code) => {
  if (code.length % 2 === 0) {
    console.log(code);
  }
});
