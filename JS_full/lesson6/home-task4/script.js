const increaseEvenEl = (arr, delta) => {
  const result = [];
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] + delta);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(increaseEvenEl([1, 2, 3, 4], 2));
