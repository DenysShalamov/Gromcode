function getSpecialNumbers(from, to) {
  const numbersArr = [];

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      numbersArr.push(i);
    }
  }

  return numbersArr;
}

console.log(getSpecialNumbers(1, 20));
