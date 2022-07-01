import { calc } from "./calculator";

it('sould get null', () => {
  const result = calc(4);

  expect(result).toEqual(null);
});

it('sould get sum of numbers', () => {
  const result = calc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
})

it('sould get subtraction of numbers', () => {
  const result = calc('2 - 1');

  expect(result).toEqual('2 - 1 = 1');
})

it('sould get product of numbers', () => {
  const result = calc('2 * 1');

  expect(result).toEqual('2 * 1 = 2');
})

it('sould get division of numbers', () => {
  const result = calc('4 / 2');

  expect(result).toEqual('4 / 2 = 2');
})

