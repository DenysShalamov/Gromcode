it('17 и в Африке 17', () => {
  expect(17).toEqual(17);
});

it('18 не 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbersArr => numbersArr.filter(num => (num % 2 == 0));

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7]);

  expect(result).toEqual([2, 4, 6]);
})