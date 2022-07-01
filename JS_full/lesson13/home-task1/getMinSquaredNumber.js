export default function (arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return  Math.min(... arr.map(num => Math.abs(num ** 2)));
}
