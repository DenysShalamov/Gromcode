// input 3 numbers
// output Integer numbers [];

// algo
// проверка  from - to <= 0;
// создать массив заданой длины
// на каждой итерации добавлять рандомное целое число
// вернуть массив

const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  return [...new Array(length)].map(() => Math.round(Math.random() * (to - from) + from));
};

console.log(getRandomNumbers(5, 1.4, 3.22));
