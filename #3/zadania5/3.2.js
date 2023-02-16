const companies = [];

for (i = 1; i <= 5; i++) {
  let firma = prompt(`Podaj nazwę firmy ${i}: `);

  companies.push(firma);
}

companies.map((company) => {
  if (!company.includes("o")) {
    console.log(company);
  }
});

console.log("------------");

if (companies.includes("Devs-Mentoring.pl")) {
  console.log("XXX");
}

console.log("------------");

console.log(companies);
delete companies[1];
console.log(companies);

console.log("------------");

companies.map((company) => {
  if (company.length > 8) {
    console.log(company);
  }
});

const companies_copy = [...companies];
console.log("------------");
companies_copy.reverse();
console.log(companies_copy);
