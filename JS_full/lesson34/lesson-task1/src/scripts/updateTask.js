/* eslint-disable no-param-reassign */
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

const deleteTasks = target => {
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
  if (target.tagName === 'LI') {
    target = target.querySelector(`input[type="checkbox"]`);
    target.checked = !target.checked;
  } else if (target.classList.contains('list-item__delete-btn')) {
    deleteTaskElem(target);
    return;
  }

  const taskId = target.dataset.id;
  const done = target.checked;
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
