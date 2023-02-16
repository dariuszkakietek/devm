const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

const arrayMin = Math.min(...ages);
const arrayMax = Math.max(...ages);
const dif = arrayMax - arrayMin;
