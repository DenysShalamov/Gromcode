import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTasks, deleteTask } from './tasksGateway.js';

const deleteTaskElem = target => {
  const parent = target.closest('.list-item').querySelector(`input[type="checkbox"]`);
  const taskId = parent.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onToggleTask = ({ target }) => {
  if (target.tagName === 'Li') {
    // eslint-disable-next-line no-param-reassign
    target = target.querySelector(`input[type="checkbox"]`);
    // eslint-disable-next-line no-param-reassign
    target.checked = !target.checked;
  } else if (target.classList.contains('list-item__delete-btn')) {
    deleteTaskElem(target);
    return;
  }

  const taskId = target.dataset.id;
  const tasksList = getItem('tasksList') || [];
  const { text } = tasksList.find(idEl => idEl.id === taskId);
  const done = target.checked;

  const updatedTask = {
    text,
    done,
    finishDate: done ? new Date().toString() : null,
  };

  updateTasks(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
