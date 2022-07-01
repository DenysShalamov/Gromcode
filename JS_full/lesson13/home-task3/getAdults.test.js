import {getAdults} from '../../lesson8/home-task5/script'

it('should return Object', () => {
  const result = typeof getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual('object');
})

it('should return empty Object', () => {
  const result =  getAdults();

  expect(result).toEqual({});
})

it('should return sorted Obj', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
})