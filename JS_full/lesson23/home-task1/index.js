const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', done);
      checkbox.checked = done;
      checkbox.dataset.taskId = index;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtn = document.querySelector('.create-task-btn');

const createNewTask = () => {
  const taskInputField = document.querySelector('.task-input');
  const inputFieldValue = taskInputField.value;
  if (inputFieldValue === '') {
    return;
  }
  const newTask = {
    text: inputFieldValue,
    done: false,
  };
  tasks.push(newTask);
  taskInputField.value = '';
  taskInputField.innerHTML = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
};
createBtn.addEventListener('click', createNewTask);

const changeStatus = event => {
  const isCheckBox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckBox) {
    return;
  }
  const idNum = event.target.dataset.taskId;
  if (tasks[idNum].done) {
    tasks[idNum].done = false;
  } else {
    tasks[idNum].done = true;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};
listElem.addEventListener('click', changeStatus);
