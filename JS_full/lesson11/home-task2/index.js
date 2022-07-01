// input 2 str
//  output num

// algo
// 1. разбить строку по пдстроке в массив
// 2. вывести длину массива - 1

const countOccurrences = (str, substr) => (substr === '' ? null : str.split(substr).length - 1);

console.log(countOccurrences('abababababab', 'ab'));
console.log(countOccurrences('ab'));
console.log(countOccurrences('abababababab', ''));
