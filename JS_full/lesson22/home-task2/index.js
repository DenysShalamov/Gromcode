const inputChangeEvent = () => {
  console.log(document.querySelector('.text-input').value);
};

document.querySelector('.text-input').addEventListener('change', inputChangeEvent);
