function swap(numbers) {
  const [firstElement, ...rest] = numbers;
  return [...rest, firstElement];
}

console.log(swap([0, 1, 2, 3]));

function swapManual(numbers) {
  const result = [];
  for (let i = 1; i < numbers.length; i++) {
    result.push(numbers[i]);
  }

  result.push(numbers[0]);
  return result;
}

console.log(swapManual([0, 1, 2, 3]));
