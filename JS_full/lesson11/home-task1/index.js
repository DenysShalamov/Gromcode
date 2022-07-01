// input str and num
// output str[]

// algo
//  1.итерировать по массиву
// 2. на каждой итерации отсекать часть и добавлять в массив
// 3. вывести массив
const entryStr = 'asfsdgsdfasff';
const splitString = function (str, len = 10) {
  const result = [];
  let count = 0;

  if (typeof str !== 'string') {
    return null;
  }

  while (true) {
    const chunk = str.substr(count, len);
    if (chunk.length === 0) {
      break;
    }
    result.push(chunk);
    count += len;
  }

  const lastLen = len - result[result.length - 1].length;

  for (let i = 0; i < lastLen; i++) {
    result[result.length - 1] += '.';
  }
  return result;
};

console.log(splitString(entryStr, 3));
