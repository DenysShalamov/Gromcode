function squareArray(arr) {
  const squareElemetsArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    squareElemetsArray.push(arr[i] ** 2);
  }

  return squareElemetsArray;
}

console.log(squareArray([1, 2, 3, 4, 5]));
