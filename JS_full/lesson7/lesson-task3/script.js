const flatArray = (arr) =>
  arr
    .slice()
    .reduce((acc, elem) => acc.concat(elem), [])
    .sort((a, b) => a - b);
