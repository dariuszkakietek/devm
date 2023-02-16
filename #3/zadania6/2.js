const sayHi = () => {
  console.log("Hi you too!");
};

const sayCya = () => {
  console.log("See you later!");
};

const exampleFunction = (sayHi, sayCya, param) => {
  param === "hi" ? sayHi() : sayCya();
};

exampleFunction(sayHi, sayCya, "hi");
