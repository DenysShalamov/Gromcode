// in number
// out function[]

function createArrayOfFunctions(num = 0) {
  const result = [];

  if (typeof num !== 'number') {
    return null;
  }
  for (let i = 0; i < num; i++) {
    result[i] = function () {
      return i;
    };
  }

  return result;
}

console.log(createArrayOfFunctions()[5]());
