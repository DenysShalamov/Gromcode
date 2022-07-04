let globalNum = 0;

export function add(num) {
  globalNum += num;
}

export function decrease(num) {
  globalNum -= num;
}

export function reset() {
  globalNum = 0;
}

export function getMemo() {
  return globalNum;
}

console.log(getMemo());
console.log(add(2));
