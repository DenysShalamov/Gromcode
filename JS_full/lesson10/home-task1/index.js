// input []
// output string

// algo
// 1.суммировать все элементы массива в одну переменную
// 2. округлить до 2х знаков в меньшую сторону
// 3. вкрнуть строку.
const entryArr = [1, 2, 2.5, 2.23423];
const getTotalPrice = function (arr) {
  const sumFloor = Math.floor(arr.reduce((acc, elem) => acc + elem, 0) * 100) / 100;
  return `$${sumFloor}`;
};

console.log(getTotalPrice(entryArr));
