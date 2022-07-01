import importType from 'eslint-plugin-import/lib/core/importType';
import  getSumm, {getSquaredArray, getOddNumbers} from './calculator';

it('should get squared number', () => {
 const  result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
})

it('should keep  odd number only', () => {
  const  result = getOddNumbers([1, 2, 3, 4, 5]);
 
   expect(result).toEqual([1, 3, 5]);
 })

 it('should get sum of numbers', () => {
  const  result = getSumm(2, 3);
 
   expect(result).toEqual(5);
 })