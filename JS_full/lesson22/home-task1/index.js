const btnElem = document.querySelector('.create-btn');

const alert = function () {
  alert('done');
};

const alertEvent = () => alert();

btnElem.addEventListener('click', alertEvent());
