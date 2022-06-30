//  algo
//  1. создать пустой массив
// 2. наполнять массив значениями
// 3. каждое значение метод округления Math. входящего числа.
//  4. вернуть наполненій массив.

const multiRound = num => {
  return [
    Math.floor(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.round(num * 100) / 100,
    Number(num.toFixed(2)),
  ];
};

// console.log(multiRound(12.1231341));
// console.log(multiRound(Infinity));
// console.log(multiRound(NaN));

// examples
// multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
