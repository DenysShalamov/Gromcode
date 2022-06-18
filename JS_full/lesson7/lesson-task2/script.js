const sortDesc = (numbers) => {
  const newArr = [];

  numbers.forEach((element) => newArr.push(element));

  return newArr.sort((a, b) => b - a);
};

const arr = [1, 4, 7, 5, 2, 8, 6];

console.log(sortDesc(arr));
console.log(arr);
