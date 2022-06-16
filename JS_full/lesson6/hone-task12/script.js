const uniqueCount = function (arr) {
  let count = 1;
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 1; i < arr.length; i++) {
    let flag = true;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] === arr[i]) {
        flag = false;
      }
    }
    if (flag) {
      count += 1;
    }
  }
  return count;
};

console.log(uniqueCount([1, 1, 1, 2, 2, 3, 5]));
