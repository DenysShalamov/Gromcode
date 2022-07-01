import getMinSquaredNumber from "./getMinSquaredNumber";

it('should get null', () => {
  const emptyArr = getMinSquaredNumber([]);

  expect(emptyArr).toEqual(null);
});

it('should get null', () => {
  const str = getMinSquaredNumber('');

  expect(str).toEqual(null);
});

it('should get min square', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});