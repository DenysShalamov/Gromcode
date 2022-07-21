import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const isCheckBox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckBox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};
