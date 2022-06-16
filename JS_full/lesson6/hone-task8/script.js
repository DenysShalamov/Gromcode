/* eslint-disable no-param-reassign */
const sortAsc = function (array) {
  let count = array.length - 1;
  let swap;
  if (!Array.isArray(array)) {
    return null;
  }
  do {
    swap = false;
    for (let i = 0; i < count; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
    count -= 1;
  } while (swap);
  return array;
};

const sortDesc = function (array) {
  let count = array.length - 1;
  let swap;
  if (!Array.isArray(array)) {
    return null;
  }
  do {
    swap = false;
    for (let i = 0; i < count; i++) {
      if (array[i] < array[i + 1]) {
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swap = true;
      }
    }
    count -= 1;
  } while (swap);
  return array;
};

console.log(sortAsc([2, 5, 7, 4, 10, 9, 3]));
console.log(sortDesc([2, 5, 7, 4, 10, 9, 3]));
