/* eslint-disable no-return-assign */
function createCalculator() {
  let memoryNum = 0;

  const add = function (num) {
    return (memoryNum += num);
  };

  const decrease = function (num) {
    return (memoryNum -= num);
  };

  const reset = function () {
    return (memoryNum = 0);
  };

  const getMemo = function () {
    return memoryNum;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();

console.log(calculator1.getMemo());
console.log(calculator1.add(5));
console.log(calculator1.decrease(2));
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
const calculator3 = createCalculator();

console.log(calculator2.getMemo());
console.log(calculator2.decrease(2));
console.log(calculator3.getMemo());
console.log(calculator1.reset());
console.log(calculator1.getMemo());
console.log(calculator2.getMemo());
console.log(calculator3.getMemo());
