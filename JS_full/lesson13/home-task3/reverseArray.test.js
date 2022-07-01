import {reverseArray} from '../../lesson7/home-task2/script'

it('should get null', () => {
  const result = reverseArray('');

  expect(result).toEqual(null);
}) 

it('shuld get empty array', () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
})

it('should get reverced array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
})