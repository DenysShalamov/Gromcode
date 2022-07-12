const inputElem = document.querySelector('.text-input');

const inputEvent = event => {
  console.log(event.target.value);
};

inputElem.addEventListener('change', inputEvent);
