export const createButton = function (buttonText) {
  document
    .querySelector('body')
    .append((document.createElement('button').textContent = buttonText));
};
// createButton('my button');
