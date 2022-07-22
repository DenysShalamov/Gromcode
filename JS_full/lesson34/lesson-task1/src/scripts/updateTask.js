import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTasks } from './tasksGateway.js';

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
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTasks(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
