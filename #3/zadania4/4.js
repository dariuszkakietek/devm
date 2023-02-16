// Napisz funkcję fizz_buzz, która przyjmuje argument liczbowy.

const fizz_buzz = (n) => {
  if (n % 5 === 0 && n % 3 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
};

fizz_buzz(1);
fizz_buzz(3);
fizz_buzz(5);
fizz_buzz(15);
