const checker = function (arr) {
  let minElem = arr[0];
  let maxElem = arr[0];

  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElem) {
      minElem = arr[i];
    } else if (arr[i] > maxElem) {
      maxElem = arr[i];
    }
  }
  return minElem + maxElem > 1000;
};

console.log(checker([1, 2, 3, 4, 10, 9, 5, 6]));
