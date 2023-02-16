const mapExample = new Map([
  ["Dagger", "01-02-2022"],
  ["Dev", "01-03-2022"],
  ["JS-coder", "01-04-2022"],
  ["Python-Coder", "01-05-2022"],
  ["Mike", "01-06-2022"],
]);

mapExample.set("Test", "01-07-2022");
mapExample.set("Test2", "01-08-2022");

console.log(mapExample);
console.log("==========");

mapExample.delete("Dev");

console.log(mapExample);

console.log("==========");

mapExample.forEach(function (value, key, map) {
  console.log(value.replaceAll("-", "/"));
});
console.log("==========");
mapExample.delete("JS-coder");

console.log(mapExample);
