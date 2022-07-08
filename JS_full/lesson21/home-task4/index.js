export const setTitle = function (text) {
  if (typeof text === 'string') {
    document.querySelector('.title').textContent = text;
  }
};

console.dir(setTitle('sdfgdfg'));
