const entryArr = [1, 2.5, 3, 3.5, Infinity, NaN, undefined, '13', 'number'];
const getFiniteNumbers = function (arr) {
  return arr.filter(elem => Number.isFinite(elem));
};

// const result = getFiniteNumbers(entryArr);
// console.log(result);

const getFiniteNumbersV2 = function (arr) {
  return arr.filter(elem => isFinite(elem));
};

// const result = getFiniteNumbersV2(entryArr);
// console.log(result);

const getNaN = function (arr) {
  return arr.filter(elem => Number.isNaN(elem));
};

// const result = getNaN(entryArr);
// console.log(result);

const getNaNV2 = function (arr) {
  return arr.filter(elem => isNaN(elem));
};

// const result = getNaNV2(entryArr);
// console.log(result);

const getIntegers = function (arr) {
  return arr.filter(elem => Number.isInteger(elem));
};

const result = getIntegers(entryArr);
console.log(result);
