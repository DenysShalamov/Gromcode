const checkboxEvent = () => {
  console.log(document.querySelector('.task-status').checked);
};

document.querySelector('.task-status').addEventListener('change', checkboxEvent);
