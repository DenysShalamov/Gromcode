const checkSum = (arr) => {
  let sum = 0;

  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 100;
};

console.log(checkSum([1, 2, 3, 4, 5]));
