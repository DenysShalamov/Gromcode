//  algo
// ПОИСК МАКС ЧИСЛА В МАССИВЕ ПО МОДУЛЮ

// 1. принимает массив, возвращает число.
// 2. входяший массив чисел => в массив чисел по модулю.
// 3. поиск макс числа
//  3.1. поиск через Math.max            б. Cортировать массив модулей по убыванию и вернуть первый элемент.
// 4. вывод числа.

const getMaxAbsoluteNumber = arr => {
  return !Array.isArray(arr) || arr.length === 0
    ? null
    : Math.max(...arr.map(elem => Math.abs(elem)));
};

// 1. принимает массив, возвращает число.
// 2. входяший массив чисел => в массив чисел по модулю.
// 3. поиск макс числа
//   3.1. Cортировать массив модулей по убыванию и вернуть первый элемент.
// 4. вывод числа.

// const getMaxAbsoluteNumber = arr => {
// if (!Array.isArray(arr) || arr.length === 0) {
//   return null;
// }
//   const modulArr = arr.map(elem => Math.abs(elem)).sort((elem, nextElem) => nextElem - elem);
//   return modulArr[0];
// };

console.log(getMaxAbsoluteNumber([1, 10, -20, -3]));
