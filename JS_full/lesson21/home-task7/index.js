export const createButton = function (buttonText) {
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  document.querySelector('body').append(newButton);
};

createButton('my button');
