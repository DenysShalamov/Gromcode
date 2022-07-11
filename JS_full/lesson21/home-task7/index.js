export const createButton = function (buttonText) {
  const bodyElem = document.querySelector('body');
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  bodyElem.append(newButton);
};

// creareButton('my button');
