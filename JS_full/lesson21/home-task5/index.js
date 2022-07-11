export const setButton = function (buttonText) {
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = `<button>${buttonText}</button>`;
  // bodyElem.textContent = `<button>${buttonText}</button>`;
};

setButton('my Button');
