function arrAverage(arr) {
  return !Array.isArray(arr)
    ? null
    : arr.reduce((i, elem) => i + elem) / arr.length;
}
