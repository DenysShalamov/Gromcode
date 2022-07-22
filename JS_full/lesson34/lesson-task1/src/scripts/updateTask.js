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

export const onToggleTask = e => {
  const isCheckBox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckBox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const done = e.target.checked;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(task => task.id === taskId);

  const updatedTask = {
    text,
    createDate,
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
