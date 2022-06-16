const cloneArr = function (arr) {
  const clone = [...arr];

  if (!Array.isArray(arr)) {
    return null;
  }

  return clone;
};

console.log(cloneArr([1, 2, 3]));
