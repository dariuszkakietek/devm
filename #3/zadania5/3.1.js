const tab = [];

tab.push("jeden");
tab.push("dwa");
tab.push("trzy");
tab.push("cztery");
tab.push("pięć");

console.log(tab.length);

console.log(tab);
console.log("====");
tab.unshift("nowy");
console.log(tab);

console.log("------");
console.log(tab[0]);
console.log(tab[tab.length - 1]);
console.log(tab[Math.floor(tab.length / 2)]);
