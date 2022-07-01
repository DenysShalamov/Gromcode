export const getSquaredArray = function (arr) {
  return arr.map(num => num ** 2);
};

export const getOddNumbers = function (arr) {
  return arr.filter(num => num % 2 !== 0);
};

export default (firstNum, secondNum) => firstNum + secondNum;

// console.log(getOddNumbers([1, 2, 3]));