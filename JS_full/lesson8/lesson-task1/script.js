const transformToObject = arr => {
  const result = {};

  arr.forEach(i => {
    result[i] = i;
  });

  return result;
};
