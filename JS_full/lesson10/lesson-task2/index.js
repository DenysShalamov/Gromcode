const entryArr = [
  1,
  2.2,
  2.5,
  3,
  NaN,
  Infinity,
  undefined,
  '',
  '2',
  '2.5',
  '22text',
  'text22',
  '22.2text',
  '22.2text11.11',
];

const getParsedIntegers = function (arr) {
  return arr.map(elem => Number.parseInt(elem, 10));
};

// const result = getParsedIntegers(entryArr);
// console.log(result);

const getParsedIntegersV2 = function (arr) {
  return arr.map(elem => parseInt(elem, 10));
};

// const result = getParsedIntegersV2(entryArr);
// console.log(result);

const getParsedFloats = function (arr) {
  return arr.map(elem => Number.parseFloat(elem));
};

// const result = getParsedFloats(entryArr);
// console.log(result);

const getParsedFloatsV2 = function (arr) {
  return arr.map(elem => parseFloat(elem));
};

// const result = getParsedFloatsV2(entryArr);
// console.log(result);
