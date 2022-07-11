const btnAddEvent = () => {
  console.log('clicked');
  document.querySelector('.single-use-btn').removeEventListener('click', btnAddEvent);
};

document.querySelector('.single-use-btn').addEventListener('click', btnAddEvent);
