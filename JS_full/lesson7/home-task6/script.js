const sum = (arr) =>
  !Array.isArray(arr) ? null : arr.reduce((i, elem) => i + elem);
