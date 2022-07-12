const checkboxElem = document.querySelector('.task-status');

const checkboxEvent = event => {
  console.log(event.target.checked);
};

checkboxElem.addEventListener('change', checkboxEvent);
