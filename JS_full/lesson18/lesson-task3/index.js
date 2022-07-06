function sumOfSquares(...arg) {
  return arg.reduce((acc, elem) => acc + elem ** 2, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));
