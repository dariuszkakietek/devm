const toEndYear = () => {
  const today = new Date();
  const endYear = new Date("2023-12-31");

  const days = Math.floor((endYear - today) / (24 * 3600 * 1000));
  const hours = 24 - Math.floor((endYear - today) / (24 * 24 * 3600 * 1000));

  return `Do końca roku zostało ${days} dni i ${hours} godzin.`;
};

console.log(toEndYear());
