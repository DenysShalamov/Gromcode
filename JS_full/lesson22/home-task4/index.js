const btnEvent = () => {
  console.log(document.querySelector('.search__input').value);
};

document.querySelector('.search__btn').addEventListener('click', btnEvent);
