import {withdraw} from '../../lesson7/home-task5/script'

it('should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 40, -6], 'John', 50)

  expect(result).toEqual(-1);
})

it('should get remainder', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get NaN', () => {
  const result = withdraw([1400, 87, -6], 'John', 50);

  expect(result).toEqual(NaN)
})