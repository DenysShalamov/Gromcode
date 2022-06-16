const reverseArray = function (arr) {
  const revArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
};

console.log(reverseArray([1, 2, 3, 4]));
